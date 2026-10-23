import type { OpenApiParameterSchema } from './openapi-types'

interface SchemaVariant {
  type?: string | string[]
  enum?: unknown[]
  items?: { type?: unknown; enum?: unknown[] }
}

// Keep only the schema fields that parameter renderers read: type, default, and enum.
// Multi-type parameters use oneOf or anyOf with no top-level type, so their type
// and allowed values come from the variants instead.
export function simplifyParameterSchema(schema: OpenApiParameterSchema): OpenApiParameterSchema {
  const { type, default: defaultVal } = schema
  let enumVal = schema.enum
  const simplified: OpenApiParameterSchema = { type }

  const variants = (schema.oneOf ?? schema.anyOf) as SchemaVariant[] | undefined
  if (type === undefined && Array.isArray(variants)) {
    const types = new Set<string>()
    const enums = new Set<unknown>()
    let everyVariantRestricted = variants.length > 0
    for (const variant of variants) {
      const variantTypes = Array.isArray(variant.type) ? variant.type : [variant.type]
      for (const variantType of variantTypes) {
        if (variantType === undefined) continue
        // Match the "array of <type>s" wording that body parameters use.
        types.add(
          variantType === 'array' && typeof variant.items?.type === 'string'
            ? `array of ${variant.items.type}s`
            : variantType,
        )
      }
      const variantEnum = variant.enum ?? variant.items?.enum
      if (!variantEnum?.length) everyVariantRestricted = false
      for (const value of variantEnum ?? []) enums.add(value)
    }
    if (types.size > 0) simplified.type = types.size === 1 ? [...types][0] : [...types]
    // A variant without an enum accepts any value, so a combined list would wrongly narrow the parameter.
    if (enumVal === undefined && everyVariantRestricted) enumVal = [...enums]
  }

  if (defaultVal !== undefined) simplified.default = defaultVal
  if (enumVal !== undefined) simplified.enum = enumVal
  return simplified
}

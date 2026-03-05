type JsonSchema = {
  type?: string | string[]
  format?: string
  enum?: (string | number | boolean)[]
  default?: unknown
  deprecated?: boolean
  readOnly?: boolean
  minimum?: number
  maximum?: number
  minLength?: number
  maxLength?: number
  pattern?: string
  minItems?: number
  maxItems?: number
  uniqueItems?: boolean
  additionalProperties?: boolean | JsonSchema
  properties?: Record<string, JsonSchema>
  required?: string[]
  items?: JsonSchema
  oneOf?: JsonSchema[]
  anyOf?: JsonSchema[]
  allOf?: JsonSchema[]
  title?: string
  description?: string
  examples?: unknown[]
  example?: unknown
}

const MAX_DEPTH = 4

function renderTypeConstraints(schema: JsonSchema): string {
  const parts: string[] = []

  const t = schema.type
  if (t) {
    parts.push(Array.isArray(t) ? t.join(' or ') : t)
  }
  if (schema.format) parts.push(`format: ${schema.format}`)
  if (schema.enum) {
    const vals = schema.enum.map((v) => `\`${v}\``).join(', ')
    parts.push(`enum: ${vals}`)
  }
  if (schema.default !== undefined) parts.push(`default: \`${JSON.stringify(schema.default)}\``)
  if (schema.deprecated) parts.push('deprecated')
  if (schema.readOnly) parts.push('read-only')
  if (schema.minimum !== undefined) parts.push(`minimum: ${schema.minimum}`)
  if (schema.maximum !== undefined) parts.push(`maximum: ${schema.maximum}`)
  if (schema.minLength !== undefined) parts.push(`minLength: ${schema.minLength}`)
  if (schema.maxLength !== undefined) parts.push(`maxLength: ${schema.maxLength}`)
  if (schema.pattern) parts.push(`pattern: \`${schema.pattern}\``)
  if (schema.minItems !== undefined) parts.push(`minItems: ${schema.minItems}`)
  if (schema.maxItems !== undefined) parts.push(`maxItems: ${schema.maxItems}`)
  if (schema.uniqueItems) parts.push('unique items')
  if (schema.additionalProperties === true) {
    parts.push('additional properties allowed')
  } else if (typeof schema.additionalProperties === 'object') {
    parts.push(`additional properties: ${renderTypeConstraints(schema.additionalProperties)}`)
  }

  return parts.join(', ') || 'object'
}

function renderCompositionVariants(
  keyword: string,
  variants: JsonSchema[],
  indent: number,
  depth: number,
): string {
  const prefix = '  '.repeat(indent)
  const label = keyword.replace('Of', ' of')
  const lines: string[] = [`${prefix}* ${label}:`]

  for (const variant of variants) {
    const name = variant.title || renderTypeConstraints(variant)
    lines.push(`${prefix}  * **${name}**`)
    if (depth < MAX_DEPTH && variant.properties) {
      const nested = renderProperties(variant, indent + 2, depth + 1)
      if (nested) lines.push(nested)
    }
  }

  return lines.join('\n')
}

function renderProperties(
  schema: JsonSchema,
  indent: number,
  depth: number,
  requiredFields?: string[],
): string {
  const props = schema.properties || {}
  const req = new Set(requiredFields || schema.required || [])
  const prefix = '  '.repeat(indent)
  const lines: string[] = []

  for (const [name, prop] of Object.entries(props)) {
    const reqStr = req.has(name) ? 'required, ' : ''

    // Check for composition keywords at property level
    const compositionKey = (['oneOf', 'anyOf', 'allOf'] as const).find((k) => prop[k])
    if (compositionKey) {
      const label = compositionKey.replace('Of', ' of')
      lines.push(`${prefix}* \`${name}\`: ${reqStr}${label}:`)
      for (const variant of prop[compositionKey]!) {
        const vName = variant.title || renderTypeConstraints(variant)
        lines.push(`${prefix}  * **${vName}**`)
        if (depth < MAX_DEPTH && variant.properties) {
          const nested = renderProperties(variant, indent + 2, depth + 1)
          if (nested) lines.push(nested)
        }
      }
      continue
    }

    const propType = Array.isArray(prop.type) ? prop.type[0] : prop.type

    if (propType === 'array' && prop.items) {
      const itemTitle = prop.items.title
      if (prop.items.properties && depth < MAX_DEPTH) {
        const label = itemTitle ? `array of \`${itemTitle}\`` : 'array of objects'
        lines.push(`${prefix}* \`${name}\`: ${reqStr}${label}:`)
        lines.push(renderProperties(prop.items, indent + 1, depth + 1))
      } else {
        lines.push(`${prefix}* \`${name}\`: ${reqStr}array of ${renderTypeConstraints(prop.items)}`)
      }
    } else if (prop.properties && depth < MAX_DEPTH) {
      const label = prop.title ? `\`${prop.title}\`` : renderTypeConstraints(prop)
      lines.push(`${prefix}* \`${name}\`: ${reqStr}${label}:`)
      lines.push(renderProperties(prop, indent + 1, depth + 1))
    } else {
      lines.push(`${prefix}* \`${name}\`: ${reqStr}${renderTypeConstraints(prop)}`)
    }
  }

  return lines.filter(Boolean).join('\n')
}

/**
 * Converts a JSON Schema response object into a readable markdown bullet list.
 * Includes type, required, format, enum, default, constraints — but omits
 * examples and descriptions to keep the output compact.
 */
export function summarizeSchema(schema: JsonSchema): string {
  if (!schema || typeof schema !== 'object') return ''

  // Handle top-level composition
  for (const keyword of ['oneOf', 'anyOf', 'allOf'] as const) {
    if (schema[keyword]) {
      return renderCompositionVariants(keyword, schema[keyword]!, 0, 0)
    }
  }

  // Handle top-level array
  if (schema.type === 'array' && schema.items) {
    const items = schema.items
    const constraints: string[] = []
    if (schema.minItems !== undefined) constraints.push(`minItems: ${schema.minItems}`)
    if (schema.maxItems !== undefined) constraints.push(`maxItems: ${schema.maxItems}`)
    if (schema.uniqueItems) constraints.push('unique items')
    const constraintStr = constraints.length ? ` (${constraints.join(', ')})` : ''
    const itemTitle = items.title

    // Composition inside items
    const compositionKey = (['oneOf', 'anyOf', 'allOf'] as const).find((k) => items[k])
    if (compositionKey) {
      const label = compositionKey.replace('Of', ' of')
      const titlePart = itemTitle ? `\`${itemTitle}\` ` : ''
      const lines = [`Array${constraintStr} of ${titlePart}objects: ${label}:`]
      for (const variant of items[compositionKey]!) {
        const name = variant.title || renderTypeConstraints(variant)
        lines.push(`  * **${name}**`)
        if (variant.properties) {
          const nested = renderProperties(variant, 2, 1)
          if (nested) lines.push(nested)
        }
      }
      return lines.join('\n')
    }

    if (items.properties) {
      const label = itemTitle ? `\`${itemTitle}\`` : 'objects'
      return `Array${constraintStr} of ${label}:\n${renderProperties(items, 1, 1)}`
    }

    return `Array${constraintStr} of ${renderTypeConstraints(items)}`
  }

  // Handle top-level object
  if (schema.properties) {
    return renderProperties(schema, 0, 0)
  }

  return renderTypeConstraints(schema)
}

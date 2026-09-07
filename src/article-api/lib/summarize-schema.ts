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

// When a titled object type has already been fully expanded once in a schema,
// later occurrences are rendered as a short "(see above)" reference instead of
// being re-expanded. Large REST response schemas reuse shared types (e.g.
// `Simple User` recurs dozens of times), so this keeps output compact and fast
// to render. Returns true if the caller should emit a reference; marks the
// title as seen when it is about to be expanded for the first time.
function shouldReference(
  title: string | undefined,
  canExpand: boolean,
  seen: Set<string>,
): boolean {
  if (!canExpand || !title) return false
  if (seen.has(title)) return true
  seen.add(title)
  return false
}

function renderCompositionVariants(
  keyword: string,
  variants: JsonSchema[],
  indent: number,
  depth: number,
  seen: Set<string>,
): string {
  const prefix = '  '.repeat(indent)
  const label = keyword.replace('Of', ' of')
  const lines: string[] = [`${prefix}* ${label}:`]

  for (const variant of variants) {
    const name = variant.title || renderTypeConstraints(variant)
    const canExpand = depth < MAX_DEPTH && Boolean(variant.properties)
    if (shouldReference(variant.title, canExpand, seen)) {
      lines.push(`${prefix}  * **${name}** (see above)`)
      continue
    }
    lines.push(`${prefix}  * **${name}**`)
    if (canExpand) {
      const nested = renderProperties(variant, indent + 2, depth + 1, seen)
      if (nested) lines.push(nested)
    }
  }

  return lines.join('\n')
}

function renderProperties(
  schema: JsonSchema,
  indent: number,
  depth: number,
  seen: Set<string>,
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
        const canExpand = depth < MAX_DEPTH && Boolean(variant.properties)
        if (shouldReference(variant.title, canExpand, seen)) {
          lines.push(`${prefix}  * **${vName}** (see above)`)
          continue
        }
        lines.push(`${prefix}  * **${vName}**`)
        if (canExpand) {
          const nested = renderProperties(variant, indent + 2, depth + 1, seen)
          if (nested) lines.push(nested)
        }
      }
      continue
    }

    const typeArr = Array.isArray(prop.type) ? prop.type : prop.type ? [prop.type] : []
    const isNullable = typeArr.includes('null')
    const propType = typeArr.find((t) => t !== 'null')

    if (propType === 'array' && prop.items) {
      const itemTitle = prop.items.title
      const canExpand = Boolean(prop.items.properties) && depth < MAX_DEPTH
      if (shouldReference(itemTitle, canExpand, seen)) {
        lines.push(
          `${prefix}* \`${name}\`: ${reqStr}array of \`${itemTitle}\`${isNullable ? ' or null' : ''} (see above)`,
        )
      } else if (canExpand) {
        const label = itemTitle
          ? `array of \`${itemTitle}\`${isNullable ? ' or null' : ''}`
          : `array of objects${isNullable ? ' or null' : ''}`
        lines.push(`${prefix}* \`${name}\`: ${reqStr}${label}:`)
        lines.push(renderProperties(prop.items, indent + 1, depth + 1, seen))
      } else {
        lines.push(
          `${prefix}* \`${name}\`: ${reqStr}array of ${renderTypeConstraints(prop.items)}${isNullable ? ' or null' : ''}`,
        )
      }
    } else if (prop.properties && depth < MAX_DEPTH) {
      // renderTypeConstraints handles string[] types (e.g. ["object","null"] → "object or null")
      const label = prop.title ? `\`${prop.title}\`` : renderTypeConstraints(prop)
      if (shouldReference(prop.title, true, seen)) {
        lines.push(`${prefix}* \`${name}\`: ${reqStr}${label} (see above)`)
      } else {
        lines.push(`${prefix}* \`${name}\`: ${reqStr}${label}:`)
        lines.push(renderProperties(prop, indent + 1, depth + 1, seen))
      }
    } else {
      // renderTypeConstraints handles string[] types (e.g. ["string","null"] → "string or null")
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

  // Tracks titled object types already expanded once in this schema. Later
  // occurrences are rendered as a "(see above)" reference to keep output
  // compact and fast to render (shared types can recur dozens of times).
  const seen = new Set<string>()

  // Handle top-level composition
  for (const keyword of ['oneOf', 'anyOf', 'allOf'] as const) {
    if (schema[keyword]) {
      return renderCompositionVariants(keyword, schema[keyword]!, 0, 0, seen)
    }
  }

  // Handle top-level array
  const schemaTypes = Array.isArray(schema.type) ? schema.type : schema.type ? [schema.type] : []
  const isNullable = schemaTypes.includes('null')
  const primaryType = schemaTypes.find((t) => t !== 'null')

  if (primaryType === 'array' && schema.items) {
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
      const nullSuffix = isNullable ? ' or null' : ''
      const lines = [`Array${constraintStr} of ${titlePart}objects${nullSuffix}: ${label}:`]
      for (const variant of items[compositionKey]!) {
        const name = variant.title || renderTypeConstraints(variant)
        const canExpand = Boolean(variant.properties)
        if (shouldReference(variant.title, canExpand, seen)) {
          lines.push(`  * **${name}** (see above)`)
          continue
        }
        lines.push(`  * **${name}**`)
        if (canExpand) {
          const nested = renderProperties(variant, 2, 1, seen)
          if (nested) lines.push(nested)
        }
      }
      return lines.join('\n')
    }

    if (items.properties) {
      const label = itemTitle ? `\`${itemTitle}\`` : 'objects'
      const nullSuffix = isNullable ? ' or null' : ''
      if (itemTitle) seen.add(itemTitle)
      return `Array${constraintStr} of ${label}${nullSuffix}:\n${renderProperties(items, 1, 1, seen)}`
    }

    return `Array${constraintStr} of ${renderTypeConstraints(items)}${isNullable ? ' or null' : ''}`
  }

  // Handle top-level object
  if (schema.properties) {
    // Note: we deliberately do NOT pre-mark schema.title here. Unlike the
    // array-items case above, a top-level object emits no visible titled
    // header, so pre-marking would make a self-referential property render a
    // dangling "(see above)" pointing at nothing. Letting it expand one
    // depth-bounded level is correct and clearer.
    return renderProperties(schema, 0, 0, seen)
  }

  return renderTypeConstraints(schema)
}

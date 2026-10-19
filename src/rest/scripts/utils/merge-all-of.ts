type Schema = Record<string, unknown>

const SCHEMA_MAP_KEYWORDS = new Set([
  'properties',
  'patternProperties',
  'definitions',
  '$defs',
  'dependentSchemas',
])

const SINGLE_SCHEMA_KEYWORDS = new Set([
  'additionalProperties',
  'additionalItems',
  'unevaluatedItems',
  'unevaluatedProperties',
  'contains',
  'propertyNames',
  'not',
  'if',
  'then',
  'else',
])

const SCHEMA_ARRAY_KEYWORDS = new Set(['anyOf', 'oneOf', 'prefixItems'])

// Annotation keywords do not constrain instances, so the first allOf definition wins.
const ANNOTATION_KEYWORDS = new Set([
  'title',
  'description',
  '$comment',
  'example',
  'examples',
  'default',
  'deprecated',
  'readOnly',
  'writeOnly',
])

function isSchemaObject(value: unknown): value is Schema {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

// Define schema keys explicitly because plain assignment treats __proto__ as the
// prototype instead of a property.
function setOwn(target: Schema, key: string, value: unknown): void {
  Object.defineProperty(target, key, {
    value,
    enumerable: true,
    writable: true,
    configurable: true,
  })
}

function isDeepEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.length === b.length && a.every((item, index) => isDeepEqual(item, b[index]))
  }
  if (isSchemaObject(a) && isSchemaObject(b)) {
    const aKeys = Object.keys(a)
    const bKeys = Object.keys(b)
    return (
      aKeys.length === bKeys.length &&
      aKeys.every((key) => Object.hasOwn(b, key) && isDeepEqual(a[key], b[key]))
    )
  }
  return false
}

// mergeInto treats source and target as an intersection of constraints. Existing
// target keywords win, so the schema that owns allOf takes precedence over its
// members and earlier members beat later ones.
// Only the GitHub OpenAPI cases are merged: identical values, properties,
// required, type, and annotations.
// Unexpected conflicts throw so future descriptions do not publish wrong request
// body parameters.
function mergeInto(target: Schema, source: Schema, path: string): void {
  for (const [key, value] of Object.entries(source)) {
    if (!Object.hasOwn(target, key)) {
      setOwn(target, key, value)
      continue
    }

    const existing = target[key]
    if (isDeepEqual(existing, value)) continue

    if (key === 'properties' && isSchemaObject(existing) && isSchemaObject(value)) {
      for (const [name, propertySchema] of Object.entries(value)) {
        if (!Object.hasOwn(existing, name)) {
          setOwn(existing, name, propertySchema)
          continue
        }
        const existingProperty = existing[name]
        if (isSchemaObject(existingProperty) && isSchemaObject(propertySchema)) {
          mergeInto(existingProperty, propertySchema, `${path}/properties/${name}`)
        } else if (!isDeepEqual(existingProperty, propertySchema)) {
          throw new Error(
            `Cannot merge allOf: conflicting definitions of property "${name}" at ${path}/properties`,
          )
        }
      }
      continue
    }

    if (key === 'required' && Array.isArray(existing) && Array.isArray(value)) {
      target[key] = [...new Set([...existing, ...value])]
      continue
    }

    // allOf intersects its members, so keep only the type names both sides allow.
    if (key === 'type') {
      const existingTypes = Array.isArray(existing) ? existing : [existing]
      const valueTypes = Array.isArray(value) ? value : [value]
      const intersection = existingTypes.filter((type) => valueTypes.includes(type))
      if (intersection.length === 0) {
        throw new Error(`Cannot merge allOf: conflicting "type" keyword at ${path}.`)
      }
      target[key] = intersection.length === 1 ? intersection[0] : intersection
      continue
    }

    if (ANNOTATION_KEYWORDS.has(key)) continue

    throw new Error(
      `Cannot merge allOf: conflicting "${key}" keyword at ${path}. ` +
        `This schema needs a merge strategy for "${key}" adding to merge-all-of.ts.`,
    )
  }
}

function resolveKeyword(key: string, value: unknown, path: string): unknown {
  if (SCHEMA_MAP_KEYWORDS.has(key) && isSchemaObject(value)) {
    const resolved: Schema = {}
    for (const [name, subSchema] of Object.entries(value)) {
      setOwn(resolved, name, resolveSchema(subSchema, `${path}/${name}`))
    }
    return resolved
  }

  if (SCHEMA_ARRAY_KEYWORDS.has(key) && Array.isArray(value)) {
    return value.map((item, index) => resolveSchema(item, `${path}/${index}`))
  }

  // JSON Schema items is a single schema in current drafts and an array in draft-04.
  if (key === 'items') {
    if (Array.isArray(value)) {
      return value.map((item, index) => resolveSchema(item, `${path}/${index}`))
    }
    return resolveSchema(value, path)
  }

  if (SINGLE_SCHEMA_KEYWORDS.has(key)) return resolveSchema(value, path)

  // Instance data such as enum, const, and default passes through; a property named allOf survives.
  return value
}

function resolveSchema(schema: unknown, path: string): unknown {
  if (!isSchemaObject(schema)) return schema

  const resolved: Schema = {}
  for (const [key, value] of Object.entries(schema)) {
    if (key !== 'allOf') setOwn(resolved, key, resolveKeyword(key, value, `${path}/${key}`))
  }

  if (Object.hasOwn(schema, 'allOf')) {
    const members = schema.allOf
    if (!Array.isArray(members)) {
      throw new Error(`Cannot merge allOf: "allOf" at ${path} is not an array`)
    }
    for (const [index, member] of members.entries()) {
      const memberPath = `${path}/allOf/${index}`
      const resolvedMember = resolveSchema(member, memberPath)
      if (!isSchemaObject(resolvedMember)) {
        throw new Error(`Cannot merge allOf: member at ${memberPath} is not an object schema`)
      }
      mergeInto(resolved, resolvedMember, path)
    }
  }

  return resolved
}

// mergeAllOf flattens JSON Schema allOf so consumers only walk properties.
// It replaces the unmaintained json-schema-merge-allof package.
// The returned schema is a deep copy so callers can mutate it without changing
// the source operation.
export function mergeAllOf(schema: unknown): unknown {
  return resolveSchema(structuredClone(schema), '#')
}

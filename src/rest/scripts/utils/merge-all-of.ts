type Schema = Record<string, unknown>

// Keywords whose value is a map of name to schema.
const SCHEMA_MAP_KEYWORDS = new Set([
  'properties',
  'patternProperties',
  'definitions',
  '$defs',
  'dependentSchemas',
])

// Keywords whose value is a single schema.
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

// Keywords whose value is an array of schemas.
const SCHEMA_ARRAY_KEYWORDS = new Set(['anyOf', 'oneOf', 'prefixItems'])

// Keywords that only describe a schema. When two `allOf` members disagree on
// one of these, the first definition wins instead of being treated as a
// conflict, because the choice cannot make the rendered docs wrong.
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

// Plain assignment would treat a key like `__proto__` as the prototype rather
// than a property, so keys that come from the schema are defined explicitly.
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

/**
 * Combines `source` into `target`, treating the two as an intersection of
 * constraints. Keywords already on `target` win, so the schema that owns the
 * `allOf` takes precedence over its members and earlier members take
 * precedence over later ones.
 *
 * Only the cases the GitHub OpenAPI descriptions actually use are merged:
 * identical values, `properties`, `required`, and annotations. Anything else
 * throws rather than guessing, so a future description that needs real
 * conflict resolution fails the build loudly instead of quietly publishing the
 * wrong request body parameters.
 */
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

  // `items` is a single schema in current drafts and an array in draft-04.
  if (key === 'items') {
    if (Array.isArray(value)) {
      return value.map((item, index) => resolveSchema(item, `${path}/${index}`))
    }
    return resolveSchema(value, path)
  }

  if (SINGLE_SCHEMA_KEYWORDS.has(key)) return resolveSchema(value, path)

  // Anything else holds instance data rather than a schema, such as `enum`,
  // `const`, or `default`. It is copied through untouched so that a value or a
  // property that happens to be named `allOf` survives.
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

/**
 * Flattens every `allOf` in a JSON schema so that consumers only have to walk
 * `properties`. Replaces the unmaintained `json-schema-merge-allof` package.
 *
 * The returned schema is a deep copy, so callers are free to mutate it without
 * touching the OpenAPI operation it came from.
 */
export function mergeAllOf(schema: unknown): unknown {
  return resolveSchema(structuredClone(schema), '#')
}

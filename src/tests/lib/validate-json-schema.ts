import Ajv, { type ValidateFunction, type ErrorObject, type SchemaObject } from 'ajv'
import addErrors from 'ajv-errors'
import addFormats from 'ajv-formats'
import semver from 'semver'

const ajv = new Ajv({ allErrors: true, allowUnionTypes: true })
addFormats(ajv)
addErrors(ajv)

// Custom JSON keywords
ajv.addKeyword({
  keyword: 'translatable',
})
// Schemas can contain the custom keyword `lintable` to define
// a property as a Markdown string that can  be linted by the
// content linter.
// The custom keyword does not define a custom validator function.
// This allows the custom keyword to be present in a schema but
// doesn't perform additional validation other than type checking.
ajv.addKeyword({
  keyword: 'lintable',
  type: 'string',
})

// Custom JSON formats
ajv.addFormat('semver', {
  validate: (x: string): boolean => semver.validRange(x) !== null,
})

// The ajv.validate function is supposed to cache
// the compiled schema, but the documentation says
// that the best performance is achieved by calling
// the compile function and then calling validate.
// So when the same schema is validated multiple times,
// this is the best function to use. If the schema
// changes from one call to the next, then the validateJson
// function makes more sense to use.
export function getJsonValidator(schema: SchemaObject): ValidateFunction {
  return ajv.compile(schema)
}

// The next call to ajv.validate will overwrite
// the ajv.errors property, so returning it here
// ensures that it remains accessible.
export function validateJson(
  schema: SchemaObject,
  data: unknown,
): {
  isValid: boolean
  errors: ErrorObject[] | null
} {
  const isValid = ajv.validate(schema, data)
  return {
    isValid,
    errors: isValid ? null : structuredClone(ajv.errors || []),
  }
}

export default ajv

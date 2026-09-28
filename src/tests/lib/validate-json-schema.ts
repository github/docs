import Ajv, { type ValidateFunction, type ErrorObject, type SchemaObject } from 'ajv'
import addErrors from 'ajv-errors'
import addFormats from 'ajv-formats'
import semver from 'semver'

const ajv = new Ajv({ allErrors: true, allowUnionTypes: true })
addFormats(ajv)
addErrors(ajv)

ajv.addKeyword({
  keyword: 'translatable',
})
// The lintable keyword marks Markdown strings that the content linter can check.
// AJV still validates only the string type.
ajv.addKeyword({
  keyword: 'lintable',
  type: 'string',
})

ajv.addFormat('semver', {
  validate: (x: string): boolean => semver.validRange(x) !== null,
})

// Reuse compiled validators when one schema validates multiple payloads.
// Use validateJson when each call may receive a different schema.
export function getJsonValidator(schema: SchemaObject): ValidateFunction {
  return ajv.compile(schema)
}

// Clone AJV errors before the next validate call overwrites ajv.errors.
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

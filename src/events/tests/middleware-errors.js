import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import { formatErrors } from '../lib/middleware-errors.js'
import { schemas } from '../lib/schema.js'

const ajv = new Ajv()
addFormats(ajv)

expect.extend({
  toMatchSchema(data, schema) {
    const isValid = ajv.validate(schema, data)
    return {
      pass: isValid,
      message: () => (isValid ? '' : ajv.errorsText()),
    }
  },
})

describe('formatErrors', () => {
  it('should produce objects that match the validation spec', () => {
    // Produce an error
    ajv.validate({ type: 'string' }, 0)
    for (const formatted of formatErrors(ajv.errors, '')) {
      expect(formatted).toMatchSchema(schemas.validation)
    }
  })
})

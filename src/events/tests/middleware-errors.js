import { describe, expect, test } from 'vitest'

import { validateJson } from '#src/tests/lib/validate-json-schema.js'
import { formatErrors } from '../lib/middleware-errors.js'
import { schemas } from '../lib/schema.js'

describe('formatErrors', () => {
  test('should produce objects that match the validation spec', () => {
    expect.extend({
      toMatchSchema(data, schema) {
        const { isValid, errors } = validateJson(schema, data)
        return {
          pass: isValid,
          message: () => (isValid ? '' : errors.message),
        }
      },
    })
    // Produce an error
    const { errors } = validateJson({ type: 'string' }, 0)
    const formattedErrors = formatErrors(errors, '')
    for (const formatted of formattedErrors) {
      expect(formatted).toMatchSchema(schemas.validation)
    }
  })
})

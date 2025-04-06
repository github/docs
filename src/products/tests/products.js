import { describe, expect, test } from 'vitest'

import { getJsonValidator } from '#src/tests/lib/validate-json-schema.js'
import { productMap } from '#src/products/lib/all-products.js'
import { formatAjvErrors } from '#src/tests/helpers/schemas.js'
import schema from '#src/tests/helpers/schemas/products-schema.js'

const validate = getJsonValidator(schema)

describe('products module', () => {
  test('is an object with product ids as keys', () => {
    expect('desktop' in productMap).toBe(true)
    expect('get-started' in productMap).toBe(true)
  })

  test('every product is valid', () => {
    Object.values(productMap).forEach((product) => {
      const isValid = validate(product)
      let errors

      if (!isValid) {
        errors = formatAjvErrors(validate.errors)
      }
      expect(isValid, errors).toBe(true)
    })
  })
})

import { describe, expect, test } from 'vitest'

import { getJsonValidator } from '@/tests/lib/validate-json-schema'
import { productMap } from '@/products/lib/all-products'
import { formatAjvErrors } from '@/tests/helpers/schemas'
// @ts-ignore - Products schema doesn't have TypeScript types yet
import schema from '@/tests/helpers/schemas/products-schema'

const validate = getJsonValidator(schema)

describe('products module', () => {
  test('is an object with product ids as keys', () => {
    expect('desktop' in productMap).toBe(true)
    expect('get-started' in productMap).toBe(true)
  })

  test('every product is valid', () => {
    Object.values(productMap).forEach((product) => {
      const isValid = validate(product)
      let errors: string | undefined

      if (!isValid && validate.errors) {
        errors = formatAjvErrors(validate.errors)
      }
      expect(isValid, errors).toBe(true)
    })
  })
})

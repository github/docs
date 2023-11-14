import Ajv from 'ajv'
import { productMap } from '#src/products/lib/all-products.js'
import { formatAjvErrors } from '#src/tests/helpers/schemas.js'
import schema from '#src/tests/helpers/schemas/products-schema.js'

const ajv = new Ajv({ allErrors: true })
const validate = ajv.compile(schema)

describe('products module', () => {
  test('is an object with product ids as keys', () => {
    expect('desktop' in productMap).toBe(true)
    expect('get-started' in productMap).toBe(true)
  })

  test('every product is valid', () => {
    Object.values(productMap).forEach((product) => {
      const valid = validate(product)
      let errors

      if (!valid) {
        errors = formatAjvErrors(valid.errors)
      }
      expect(valid, errors).toBe(true)
    })
  })
})

import Ajv from 'ajv'
import { productMap } from '../../lib/all-products.js'
import schema from '../helpers/schemas/products-schema.js'

const ajv = new Ajv()
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
        errors = validate.errors
          .map((errorObj) => {
            return errorObj.message
          })
          .join(', ')
        errors = `'${product.name}' product schema errors: ${errors}`
      }

      expect(valid, errors).toBe(true)
    })
  })
})

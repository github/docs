import revalidator from 'revalidator'
import { productMap } from '../../lib/all-products.js'
import schema from '../helpers/schemas/products-schema.js'

describe('products module', () => {
  test('is an object with product ids as keys', () => {
    expect('desktop' in productMap).toBe(true)
    expect('get-started' in productMap).toBe(true)
  })

  test('every product is valid', () => {
    Object.values(productMap).forEach((product) => {
      const { valid, errors } = revalidator.validate(product, schema)
      const expectation = JSON.stringify({ product, errors }, null, 2)
      expect(valid, expectation).toBe(true)
    })
  })
})

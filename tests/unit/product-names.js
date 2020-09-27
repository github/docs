const productNames = require('../../lib/product-names')

describe('productNames module', () => {
  test('is an object with product codes as keys and human-frienly names as values', () => {
    expect(productNames.dotcom).toBe('GitHub.com')
    expect(productNames['2.15']).toBe('Enterprise Server 2.15')
    expect(productNames['2.10']).toBe('Enterprise Server 2.10')
  })
})

import { describe, expect, test } from 'vitest'

import productNames from '@/products/lib/product-names'

describe('productNames module', () => {
  test('is an object with product codes as keys and human-friendly names as values', () => {
    expect(productNames.dotcom).toBe('GitHub.com')
    expect(productNames['2.15']).toBe('Enterprise Server 2.15')
    expect(productNames['2.10']).toBe('Enterprise Server 2.10')
  })
})

import { expect, jest } from '@jest/globals'

import { getDOM } from '../../../tests/helpers/e2etest.js'

describe('rendering the home page(s)', () => {
  jest.setTimeout(5 * 60 * 1000)

  test('homepage has product links', async () => {
    const $ = await getDOM('/en')
    const products = $('[data-testid=product]')
    expect(products.length).toBe(1)
  })

  test('homepage in non-default product', async () => {
    const $ = await getDOM('/en/enterprise-cloud@latest')
    const products = $('[data-testid=product]')
    expect(products.length).toBe(1)
  })
})

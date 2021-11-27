import { jest } from '@jest/globals'
import revalidator from 'revalidator'
import { productMap } from '../../lib/all-products.js'
import schema from '../helpers/schemas/products-schema.js'
import { getDOM, getJSON } from '../helpers/supertest.js'
import nonEnterpriseDefaultVersion from '../../lib/non-enterprise-default-version.js'

jest.useFakeTimers()

describe('products module', () => {
  test('is an object with product ids as keys', () => {
    expect('github' in productMap).toBe(true)
    expect('desktop' in productMap).toBe(true)
  })

  test('every product is valid', () => {
    Object.values(productMap).forEach((product) => {
      const { valid, errors } = revalidator.validate(product, schema)
      const expectation = JSON.stringify({ product, errors }, null, 2)
      expect(valid, expectation).toBe(true)
    })
  })
})

describe('mobile-only products nav', () => {
  const cases = [
    // Note the unversioned homepage at `/` does not have a product selected in the mobile dropdown
    ['/github', 'GitHub'],
    // Enterprise server
    ['/en/enterprise/admin', 'Enterprise administrators'],
    [
      '/en/enterprise/user/github/importing-your-projects-to-github/importing-source-code-to-github/importing-a-git-repository-using-the-command-line',
      'GitHub',
    ],

    ['/desktop', 'GitHub Desktop'],
    ['/actions', 'GitHub Actions'],

    // localized
    ['/ja/desktop', 'GitHub Desktop'],
  ]

  test.each(cases)('on %p, renders current product %p', async (url, name) => {
    expect((await getDOM(url))('[data-testid=product-picker] summary').text().trim()).toBe(name)
  })
})

describe('products middleware', () => {
  jest.setTimeout(5 * 60 * 1000)

  test('adds res.context.activeProducts array', async () => {
    const products = await getJSON('/en?json=activeProducts')
    expect(Array.isArray(products)).toBe(true)
  })

  test('adds res.context.currentProduct string on homepage', async () => {
    const currentProduct = await getJSON('/en?json=currentProduct')
    expect(currentProduct).toBe('homepage')
  })

  test('adds res.context.currentProduct object', async () => {
    const currentProduct = await getJSON(
      `/en/${nonEnterpriseDefaultVersion}/github?json=currentProduct`
    )
    expect(currentProduct).toBe('github')
  })
})

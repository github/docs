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
  test('renders current product on various product pages for each product', async () => {
    // Note the unversioned homepage at `/` does not have a product selected in the mobile dropdown
    expect((await getDOM('/github'))('#current-product').text().trim()).toBe('GitHub.com')

    // Enterprise server
    expect((await getDOM('/en/enterprise/admin'))('#current-product').text().trim()).toBe(
      'Enterprise administrators'
    )
    expect(
      (
        await getDOM(
          '/en/enterprise/user/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address'
        )
      )('#current-product')
        .text()
        .trim()
    ).toBe('GitHub.com')

    expect((await getDOM('/desktop'))('#current-product').text().trim()).toBe('GitHub Desktop')

    expect((await getDOM('/actions'))('#current-product').text().trim()).toBe('GitHub Actions')

    // localized
    expect((await getDOM('/ja/desktop'))('#current-product').text().trim()).toBe('GitHub Desktop')
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

import { describe, jest } from '@jest/globals'

import { getDOM, getJSON } from '../helpers/e2etest.js'
import nonEnterpriseDefaultVersion from '../../lib/non-enterprise-default-version.js'

describe('mobile-only products nav', () => {
  const cases = [
    // Note the unversioned homepage at `/` does not have a product selected in the mobile dropdown
    ['/repositories', 'Repositories'],
    // Enterprise server
    ['/en/enterprise/admin', 'Enterprise administrators'],
    [
      '/en/enterprise/get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-git-repository-using-the-command-line',
      'Get started',
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
      `/en/${nonEnterpriseDefaultVersion}/actions?json=currentProduct`
    )
    expect(currentProduct).toBe('actions')
  })
})

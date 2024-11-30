import { describe, jest } from '@jest/globals'

import { getJSON } from '../helpers/e2etest.js'
import nonEnterpriseDefaultVersion from '../../lib/non-enterprise-default-version.js'

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

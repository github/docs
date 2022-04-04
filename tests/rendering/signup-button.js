import { jest, describe, expect } from '@jest/globals'

import { getDOM } from '../helpers/e2etest.js'

describe('GHEC sign up button', () => {
  jest.setTimeout(60 * 1000)

  test('present by default', async () => {
    const $ = await getDOM('/en')
    expect($('a[href^="https://github.com/signup"]').length).toBeGreaterThan(0)
  })

  test('present on enterprise-cloud pages', async () => {
    const $ = await getDOM('/en/enterprise-cloud@latest')
    expect($('a[href^="https://github.com/signup"]').length).toBeGreaterThan(0)
  })

  test('not present on enterprise-server pages', async () => {
    const $ = await getDOM('/en/enterprise-server@latest')
    expect($('a[href^="https://github.com/signup"]').length).toBe(0)
  })

  test('not present if dotcom_user cookie', async () => {
    const $ = await getDOM('/en', {
      headers: {
        cookie: 'dotcom_user=peterbe',
      },
    })
    expect($('a[href^="https://github.com/signup"]').length).toBe(0)
  })
})

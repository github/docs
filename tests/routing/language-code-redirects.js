import { jest } from '@jest/globals'

import { get } from '../helpers/e2etest.js'

describe('language code redirects', () => {
  jest.setTimeout(5 * 60 * 1000)

  test('redirects accidental /jp* requests to /ja*', async () => {
    let res = await get('/jp')
    expect(res.statusCode).toBe(301)
    expect(res.headers.location).toBe('/ja')

    res = await get('/jp/articles/about-your-personal-dashboard')
    expect(res.statusCode).toBe(301)
    expect(res.headers.location).toBe('/ja/articles/about-your-personal-dashboard')
  })

  test('redirects accidental /zh-CN* requests to /cn*', async () => {
    let res = await get('/zh-CN')
    expect(res.statusCode).toBe(301)
    expect(res.headers.location).toBe('/cn')

    res = await get('/zh-TW/articles/about-your-personal-dashboard')
    expect(res.statusCode).toBe(301)
    expect(res.headers.location).toBe('/cn/articles/about-your-personal-dashboard')
  })
})

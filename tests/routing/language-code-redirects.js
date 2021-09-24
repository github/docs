import { get } from '../helpers/supertest.js'
import { jest } from '@jest/globals'

describe('language code redirects', () => {
  jest.setTimeout(5 * 60 * 1000)

  test('redirects accidental /jp* requests to /ja*', async () => {
    let $
    $ = await get('/jp', { dom: false })
    expect($.res.statusCode).toBe(301)
    expect($.res.headers.location).toBe('/ja')

    $ = await get('/jp/articles/about-your-personal-dashboard', { dom: false })
    expect($.res.statusCode).toBe(301)
    expect($.res.headers.location).toBe('/ja/articles/about-your-personal-dashboard')
  })

  test('redirects accidental /zh-CN* requests to /cn*', async () => {
    let $
    $ = await get('/zh-CN', { dom: false })
    expect($.res.statusCode).toBe(301)
    expect($.res.headers.location).toBe('/cn')

    $ = await get('/zh-TW/articles/about-your-personal-dashboard', { dom: false })
    expect($.res.statusCode).toBe(301)
    expect($.res.headers.location).toBe('/cn/articles/about-your-personal-dashboard')
  })
})

import { expect, jest, test } from '@jest/globals'

import { get } from '../helpers/e2etest.js'
// import { PREFERRED_LOCALE_COOKIE_NAME } from '../../middleware/detect-language.js'

describe('in-memory render caching', () => {
  jest.setTimeout(30 * 1000)

  test('second render should be a cache hit', async () => {
    // Light mode first
    const res1 = await get('/en')
    // Because these are effectively end-to-end tests, you can't expect
    // the first request to be a cache miss because another end-to-end
    // test might have "warmed up" this endpoint.
    expect(res1.headers['x-middleware-cache']).toBeTruthy()

    const res2 = await get('/en')
    expect(res2.headers['x-middleware-cache']).toBeTruthy()
  })

  test('second render should be cache hit with different __PRIMER_DATA__', async () => {
    await get('/en') // first render to assert the next render comes from cache

    const res = await get('/en')
    expect(res.headers['x-middleware-cache']).toBeTruthy()

    // Now do it all over again but with a light color mode
    const res2 = await get('/en')
    expect(res2.headers['x-middleware-cache']).toBeTruthy()
  })
})

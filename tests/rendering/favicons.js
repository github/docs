import { expect, jest } from '@jest/globals'

import { SURROGATE_ENUMS } from '../../middleware/set-fastly-surrogate-key.js'
import { get } from '../helpers/e2etest.js'

describe('favicon assets', () => {
  jest.setTimeout(60 * 1000)

  it('should serve a valid and aggressively caching /favicon.ico', async () => {
    const res = await get('/favicon.ico')
    expect(res.statusCode).toBe(200)
    expect(parseInt(res.headers['content-length'], 10)).toBeGreaterThan(0)
    expect(res.headers['content-type']).toBe('image/x-icon')
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toContain('immutable')
    expect(res.headers['cache-control']).toMatch(/max-age=\d+/)
    const maxAgeSeconds = parseInt(res.header['cache-control'].match(/max-age=(\d+)/)[1], 10)
    // Let's not be too specific in the tests, just as long as it's testing
    // that it's a reasonably large number of seconds.
    expect(maxAgeSeconds).toBeGreaterThanOrEqual(60 * 60)
    expect(res.headers['surrogate-key']).toBe(SURROGATE_ENUMS.MANUAL)
  })
  it('should serve a valid and aggressively caching /apple-touch-icon.png', async () => {
    const res = await get('/apple-touch-icon.png')
    expect(res.statusCode).toBe(200)
    expect(parseInt(res.headers['content-length'], 10)).toBeGreaterThan(0)
    expect(res.headers['content-type']).toBe('image/png')
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toContain('immutable')
    expect(res.headers['cache-control']).toMatch(/max-age=\d+/)
    const maxAgeSeconds = parseInt(res.header['cache-control'].match(/max-age=(\d+)/)[1], 10)
    // Let's not be too specific in the tests, just as long as it's testing
    // that it's a reasonably large number of seconds.
    expect(maxAgeSeconds).toBeGreaterThanOrEqual(60 * 60)
    expect(res.headers['surrogate-key']).toBe(SURROGATE_ENUMS.MANUAL)
  })
})

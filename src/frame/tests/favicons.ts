import { describe, expect, test, vi } from 'vitest'

import { SURROGATE_ENUMS } from '@/frame/middleware/set-fastly-surrogate-key'
import { get } from '@/tests/helpers/e2etest'

function getMaxAge(header: string | undefined): number {
  return Number(String(header).match(/(?:^|[ ,])max-age=(\d+)/)?.[1])
}

// The CDN holds favicons for a long time because we can purge it on demand with
// the manual surrogate key. The browser gets a shorter window because we can't.
function expectAggressiveCaching(headers: Record<string, string>) {
  const cdnMaxAge = getMaxAge(headers['surrogate-control'])
  expect(headers['surrogate-control']).toContain('public')
  expect(headers['surrogate-control']).toContain('immutable')
  expect(cdnMaxAge).toBeGreaterThanOrEqual(60 * 60)

  const browserMaxAge = getMaxAge(headers['cache-control'])
  expect(headers['cache-control']).toContain('public')
  expect(browserMaxAge).toBeGreaterThan(0)
  expect(browserMaxAge).toBeLessThan(cdnMaxAge)
}

describe('favicon assets', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  test('should serve a valid and aggressively caching /favicon.ico', async () => {
    const res = await get('/favicon.ico')
    expect(res.statusCode).toBe(200)
    expect(parseInt(res.headers['content-length'], 10)).toBeGreaterThan(0)
    expect(res.headers['content-type']).toBe('image/x-icon')
    expect(res.headers['set-cookie']).toBeUndefined()
    expectAggressiveCaching(res.headers)
    expect(res.headers['surrogate-key']).toBe(SURROGATE_ENUMS.MANUAL)
  })

  test('should serve a valid and aggressively caching /apple-touch-icon.png', async () => {
    const res = await get('/apple-touch-icon.png')
    expect(res.statusCode).toBe(200)
    expect(parseInt(res.headers['content-length'] || '', 10)).toBeGreaterThan(0)
    expect(res.headers['content-type']).toBe('image/png')
    expect(res.headers['set-cookie']).toBeUndefined()
    expectAggressiveCaching(res.headers)
    expect(res.headers['surrogate-key']).toBe(SURROGATE_ENUMS.MANUAL)
  })

  test.each([
    '/apple-touch-icon-precomposed.png',
    '/apple-touch-icon-120x120-precomposed.png',
    '/apple-touch-icon-120x120.png',
    '/apple-touch-icon-152x152.png',
    '/apple-touch-icon-152x152-precomposed.png',
  ])('should also 200 OK on %s', async (path) => {
    const res = await get(path)
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toBe('image/png')
  })
})

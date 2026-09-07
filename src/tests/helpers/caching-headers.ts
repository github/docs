import { expect } from 'vitest'

import { SURROGATE_ENUMS } from '@/frame/middleware/set-fastly-surrogate-key'

interface ResponseWithHeaders {
  headers: Record<string, string | string[] | undefined>
}

export function checkCachingHeaders(
  res: ResponseWithHeaders,
  defaultSurrogateKey: boolean = false,
  minMaxAge: number = 60 * 60,
): void {
  expect(res.headers['set-cookie']).toBeUndefined()
  expect(res.headers['cache-control']).toContain('public')

  const cacheControlHeader = res.headers['cache-control'] as string
  const maxAgeMatch = cacheControlHeader.match(/max-age=(\d+)/)

  if (!maxAgeMatch) {
    throw new Error('Cache-Control header does not contain max-age directive')
  }

  const maxAgeSeconds = parseInt(maxAgeMatch[1], 10)
  // Let's not be too specific in the tests, just as long as it's testing
  // that it's a reasonably large number of seconds.
  expect(maxAgeSeconds).toBeGreaterThanOrEqual(minMaxAge)

  // Because it doesn't have a unique URL
  const surrogateKeyHeader = res.headers['surrogate-key'] as string
  const firstToken = surrogateKeyHeader.split(/\s/g)[0]
  if (defaultSurrogateKey) {
    // Default cacheable responses are keyed by language for the staggered,
    // per-language deploy purge: either `no-language` or `language:<code>`.
    expect(firstToken === 'no-language' || /^language:[a-z-]+$/.test(firstToken)).toBe(true)
  } else {
    expect(firstToken).toBe(SURROGATE_ENUMS.MANUAL)
  }
}

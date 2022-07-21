import { SURROGATE_ENUMS } from '../../middleware/set-fastly-surrogate-key.js'

export function checkCachingHeaders(res, defaultSurrogateKey = false, minMaxAge = 60 * 60) {
  expect(res.headers['set-cookie']).toBeUndefined()
  expect(res.headers['cache-control']).toContain('public')
  const maxAgeSeconds = parseInt(res.headers['cache-control'].match(/max-age=(\d+)/)[1], 10)
  // Let's not be too specific in the tests, just as long as it's testing
  // that it's a reasonably large number of seconds.
  expect(maxAgeSeconds).toBeGreaterThanOrEqual(minMaxAge)
  // Because it doesn't have have a unique URL
  expect(res.headers['surrogate-key']).toBe(
    defaultSurrogateKey ? SURROGATE_ENUMS.DEFAULT : SURROGATE_ENUMS.MANUAL
  )
}

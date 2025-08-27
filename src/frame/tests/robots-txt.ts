import { describe, expect, test, vi } from 'vitest'

import {
  SURROGATE_ENUMS,
  makeLanguageSurrogateKey,
} from '@/frame/middleware/set-fastly-surrogate-key'
import { get } from '@/tests/helpers/e2etest'

// Type alias for the response from e2etest helper
type TestResponse = {
  body: string
  statusCode: number
  headers: Record<string, string>
  url: string
  ok: boolean
}

describe('robots.txt', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  test('returns disallow all for localhost (default behavior)', async () => {
    const res: TestResponse = await get('/robots.txt')
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual('User-agent: *\nDisallow: /')
  })

  test('does not have duplicate lines', async () => {
    const res: TestResponse = await get('/robots.txt')
    expect(res.body.split('\n').length).toBe(new Set(res.body.split('\n')).size)
  })

  test('is cached by headers', async () => {
    const res: TestResponse = await get('/robots.txt')
    expect(res.headers['cache-control']).toMatch(/public, max-age=/)

    const surrogateKeySplit = (res.headers['surrogate-key'] as string).split(/\s/g)
    expect(surrogateKeySplit.includes(SURROGATE_ENUMS.DEFAULT)).toBeTruthy()
    expect(surrogateKeySplit.includes(makeLanguageSurrogateKey('en'))).toBeTruthy()
  })

  test('validates robots.txt format', async () => {
    const res: TestResponse = await get('/robots.txt')
    // Should be valid robots.txt format
    expect(res.body).toMatch(/^User-agent: \*/)
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toMatch(/text\/plain/)
  })
})

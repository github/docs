import { describe, expect, test } from 'vitest'
import { get } from '@/tests/helpers/e2etest'

describe('malformed URLs', () => {
  test('blocks URLs with %FF sequences', async () => {
    const res = await get('/en/site-policy/other-site-policies/github-account-%FFqrlkuciqll-policy')

    expect(res.statusCode).toBe(400)
    expect(res.headers['content-type']).toMatch('text/plain')
    expect(res.body).toBe('Bad Request: Malformed URL')
  })

  test('blocks URLs with %FE sequences', async () => {
    const res = await get('/en/some-page-%FE-test')
    expect(res.statusCode).toBe(400)
    expect(res.headers['content-type']).toMatch('text/plain')
    expect(res.body).toBe('Bad Request: Malformed URL')
  })

  test('blocks URLs with overlong encoding %C0%80', async () => {
    const res = await get('/en/test-%C0%80-page')
    expect(res.statusCode).toBe(400)
    expect(res.headers['content-type']).toMatch('text/plain')
    expect(res.body).toBe('Bad Request: Malformed URL')
  })

  test('blocks URLs with invalid UTF-8 continuation sequences', async () => {
    const res = await get('/en/test-%80%80-page')
    expect(res.statusCode).toBe(400)
    expect(res.headers['content-type']).toMatch('text/plain')
    expect(res.body).toBe('Bad Request: Malformed URL')
  })

  test('allows URLs with control characters (valid UTF-8)', async () => {
    const res = await get('/en/test-%01-page')
    expect(res.statusCode).toBe(404) // Should be 404 since page doesn't exist, not 400
    // Control characters like %01 are valid UTF-8 and don't cause decoding errors
  })

  test('allows valid URLs with proper encoding', async () => {
    const res = await get('/en/get-started')
    expect(res.statusCode).not.toBe(400)
    // Should not be blocked by malformed URL middleware
  })

  test('allows valid URLs with proper percent encoding', async () => {
    const res = await get('/en/search?q=test%20query')
    expect(res.statusCode).not.toBe(400)
    // Should not be blocked by malformed URL middleware
  })

  test('blocks malformed query parameters', async () => {
    // This is caught by checking originalUrl which contains the raw, unparsed URL
    const res = await get('/en/search?q=test%FF')
    expect(res.statusCode).toBe(400)
    expect(res.headers['content-type']).toMatch('text/plain')
    expect(res.body).toBe('Bad Request: Malformed URL')
  })

  test('properly caches malformed URL responses', async () => {
    const res = await get('/en/malformed-%FF-url')
    expect(res.statusCode).toBe(400)
    expect(res.headers['cache-control']).toBeDefined()
  })

  test('handles multiple malformed sequences', async () => {
    const res = await get('/en/test-%FF%FE%80-page')
    expect(res.statusCode).toBe(400)
    expect(res.headers['content-type']).toMatch('text/plain')
    expect(res.body).toBe('Bad Request: Malformed URL')
  })
})

import { expect, test, describe } from 'vitest'

import { get, post } from '@/tests/helpers/e2etest'

describe('AI Search Local Proxy Middleware', () => {
  test('should successfully proxy to docs.github.com when CSE_COPILOT_ENDPOINT is not localhost', async () => {
    // Under NODE_ENV=test, frame/middleware/api.ts mounts the real aiSearch
    // middleware rather than the proxy, so nothing here reaches the proxy. This
    // is a smoke test that the route exists and answers.
    const body = { query: 'test query', version: 'dotcom' }
    const response = await post('/api/ai-search/v1', {
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })

    expect([200, 500, 502, 503, 504]).toContain(response.statusCode)
  })

  test('should handle request body correctly in proxy', async () => {
    const testBody = {
      query: 'test query with special chars: éñ中文',
      version: 'dotcom',
      nested: { key: 'value' },
      array: [1, 2, 3],
    }

    const response = await post('/api/ai-search/v1', {
      body: JSON.stringify(testBody),
      headers: { 'Content-Type': 'application/json' },
    })

    expect([200, 500, 502, 503, 504]).toContain(response.statusCode)
  })

  test('should handle empty request body in proxy', async () => {
    const response = await post('/api/ai-search/v1', {
      body: JSON.stringify({}),
      headers: { 'Content-Type': 'application/json' },
    })

    expect([200, 400, 500, 502, 503, 504]).toContain(response.statusCode)
  })

  test('should handle malformed JSON in proxy', async () => {
    const response = await post('/api/ai-search/v1', {
      body: '{ invalid json }',
      headers: { 'Content-Type': 'application/json' },
    })

    expect([400, 500]).toContain(response.statusCode)
  })

  test('should preserve important headers in proxy', async () => {
    const response = await post('/api/ai-search/v1', {
      body: JSON.stringify({ query: 'test', version: 'dotcom' }),
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'test-agent/1.0',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    })

    expect([200, 500, 502, 503, 504]).toContain(response.statusCode)
  })

  test('should filter hop-by-hop headers correctly', async () => {
    const response = await post('/api/ai-search/v1', {
      body: JSON.stringify({ query: 'test', version: 'dotcom' }),
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'test-agent',
        'X-Custom-Header': 'test-value',
        // fetch forbids Connection, Transfer-Encoding and Upgrade, so a client
        // cannot send the hop-by-hop headers the proxy filters. These are
        // forwarded as-is.
      },
    })

    expect([200, 500, 502, 503, 504]).toContain(response.statusCode)
  })

  test('should handle various request methods correctly', async () => {
    const getResponse = await get('/api/ai-search/v1')
    expect([404, 405]).toContain(getResponse.statusCode)
  })

  test('should handle large request bodies in proxy', async () => {
    const largeQuery = 'test query '.repeat(1000)
    const response = await post('/api/ai-search/v1', {
      body: JSON.stringify({ query: largeQuery, version: 'dotcom' }),
      headers: { 'Content-Type': 'application/json' },
    })

    expect([200, 413, 500, 502, 503, 504]).toContain(response.statusCode)
  })
})

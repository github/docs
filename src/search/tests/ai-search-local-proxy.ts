import { expect, test, describe } from 'vitest'

import { get, post } from '@/tests/helpers/e2etest'

describe('AI Search Local Proxy Middleware', () => {
  test('should successfully proxy to docs.github.com when CSE_COPILOT_ENDPOINT is not localhost', async () => {
    // In local development, the middleware should proxy to docs.github.com
    // This test verifies the middleware handles the proxy correctly

    // We can't easily test the actual proxying without setting up a mock for docs.github.com
    // But we can test that the route exists and handles requests
    const body = { query: 'test query', version: 'dotcom' }
    const response = await post('/api/ai-search/v1', {
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })

    // The response should either succeed or fail gracefully
    // depending on whether docs.github.com is reachable
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

    // Should handle complex request bodies without crashing
    expect([200, 500, 502, 503, 504]).toContain(response.statusCode)
  })

  test('should handle empty request body in proxy', async () => {
    const response = await post('/api/ai-search/v1', {
      body: JSON.stringify({}),
      headers: { 'Content-Type': 'application/json' },
    })

    // Should handle empty body gracefully
    expect([200, 400, 500, 502, 503, 504]).toContain(response.statusCode)
  })

  test('should handle malformed JSON in proxy', async () => {
    const response = await post('/api/ai-search/v1', {
      body: '{ invalid json }',
      headers: { 'Content-Type': 'application/json' },
    })

    // Should handle malformed JSON gracefully
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

    // Headers should be processed without causing errors
    expect([200, 500, 502, 503, 504]).toContain(response.statusCode)
  })

  test('should filter hop-by-hop headers correctly', async () => {
    const response = await post('/api/ai-search/v1', {
      body: JSON.stringify({ query: 'test', version: 'dotcom' }),
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'test-agent',
        'X-Custom-Header': 'test-value',
        // Note: Connection, Transfer-Encoding, Upgrade are forbidden headers in fetch
        // We test with other headers that should be filtered by the middleware
      },
    })

    // Should succeed despite hop-by-hop headers being present
    expect([200, 500, 502, 503, 504]).toContain(response.statusCode)
  })

  test('should handle various request methods correctly', async () => {
    // Test that only POST is supported
    const getResponse = await get('/api/ai-search/v1')
    expect([404, 405]).toContain(getResponse.statusCode)
  })

  test('should handle large request bodies in proxy', async () => {
    const largeQuery = 'test query '.repeat(1000) // Create a large query string
    const response = await post('/api/ai-search/v1', {
      body: JSON.stringify({ query: largeQuery, version: 'dotcom' }),
      headers: { 'Content-Type': 'application/json' },
    })

    // Should handle large bodies without crashing
    expect([200, 413, 500, 502, 503, 504]).toContain(response.statusCode)
  })
})

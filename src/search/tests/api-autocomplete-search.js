/**
 * To be able to run these tests you need to index the fixtures!
 * And you need to have an Elasticsearch URL to connect to for the server.
 *
 * To index the fixtures, run:
 *
 *   ELASTICSEARCH_URL=http://localhost:9200 npm run index-test-fixtures
 *
 * This will replace any "real" Elasticsearch indexes you might have so
 * once you're done working on vitest tests you need to index real
 * content again.
 */

import { expect, test, vi } from 'vitest'

import { describeIfElasticsearchURL } from '#src/tests/helpers/conditional-runs.js'
import { get } from '#src/tests/helpers/e2etest.js'

if (!process.env.ELASTICSEARCH_URL) {
  console.warn(
    'None of the API search middleware tests are run because ' +
      "the environment variable 'ELASTICSEARCH_URL' is currently not set.",
  )
}

// This suite only runs if $ELASTICSEARCH_URL is set.
describeIfElasticsearchURL('search/autocomplete v1 middleware', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  test('basic search', async () => {
    const sp = new URLSearchParams()
    // To see why this will work,
    // see src/search/tests/fixtures/data
    sp.set('query', 'fo')
    const res = await get('/api/search/autocomplete/v1?' + sp)
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.body)

    expect(results.meta).toBeTruthy()
    expect(results.meta.found.value).toBeGreaterThanOrEqual(1)
    expect(results.meta.found.relation).toBeTruthy()

    // Might be empty but at least an array
    expect(results.hits).toBeTruthy()
    // The work "fork" matches "fo"
    const hit = results.hits[0]
    expect(hit.term).toBe('fork')
    expect(hit.highlights).toBeTruthy()
    expect(hit.highlights[0]).toBe('<mark>fork</mark>')

    // Check that it can be cached at the CDN
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-control']).toContain('public')
    expect(res.headers['surrogate-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-key']).toBe('manual-purge')
  })

  test('invalid version', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'fo')
    sp.set('version', 'never-heard-of')
    const res = await get('/api/search/autocomplete/v1?' + sp)
    expect(res.statusCode).toBe(400)
    expect(JSON.parse(res.body).error).toBeTruthy()
  })

  test('variations on version name', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'fo')
    sp.set('version', 'enterprise-cloud')
    {
      const res = await get('/api/search/autocomplete/v1?' + sp)
      expect(res.statusCode).toBe(200)
    }
    sp.set('version', 'ghec')
    {
      const res = await get('/api/search/autocomplete/v1?' + sp)
      expect(res.statusCode).toBe(200)
    }
    sp.set('version', 'fpt')
    {
      const res = await get('/api/search/autocomplete/v1?' + sp)
      expect(res.statusCode).toBe(200)
    }
    sp.set('version', 'free-pro-team@latest')
    {
      const res = await get('/api/search/autocomplete/v1?' + sp)
      expect(res.statusCode).toBe(200)
    }
  })

  test('invalid language', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'fo')
    sp.set('language', 'xx')
    const res = await get('/api/search/autocomplete/v1?' + sp)
    expect(res.statusCode).toBe(400)
    expect(JSON.parse(res.body).error).toBeTruthy()
  })

  test('fuzzy autocomplete search', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'forc')
    const res = await get('/api/search/autocomplete/v1?' + sp)
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.body)
    // The work "fork" matches "fo"
    const hit = results.hits[0]
    expect(hit.term).toBe('fork')
    expect(hit.highlights).toBeTruthy()
    expect(hit.highlights[0]).toBe('<mark>fork</mark>')
  })

  test('invalid query', async () => {
    const sp = new URLSearchParams()
    // No query at all
    {
      const res = await get('/api/search/autocomplete/v1?' + sp)
      expect(res.statusCode).toBe(400)
    }
    // Empty query
    {
      sp.set('query', '')
      const res = await get('/api/search/autocomplete/v1?' + sp)
      expect(res.statusCode).toBe(400)
    }
    // Empty when trimmed
    {
      sp.set('query', '  ')
      const res = await get('/api/search/autocomplete/v1?' + sp)
      expect(res.statusCode).toBe(400)
    }
  })
})

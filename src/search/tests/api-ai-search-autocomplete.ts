// These tests need indexed fixtures and ELASTICSEARCH_URL.
// Run ELASTICSEARCH_URL=http://localhost:9200 npm run index-test-fixtures.
// The command writes tests_-prefixed indexes and leaves regular indexes alone.

import { expect, test, vi } from 'vitest'

import { describeIfElasticsearchURL } from '@/tests/helpers/conditional-runs'
import { get } from '@/tests/helpers/e2etest'

import type { AutocompleteSearchResponse } from '@/search/types'

if (!process.env.ELASTICSEARCH_URL) {
  console.warn(
    'None of the API search middleware tests are run because ' +
      "the environment variable 'ELASTICSEARCH_URL' is currently not set.",
  )
}

const aiSearchEndpoint = '/api/search/ai-search-autocomplete/v1'
const getSearchEndpointWithParams = (searchParams: URLSearchParams) =>
  `${aiSearchEndpoint}?${searchParams}`

describeIfElasticsearchURL('search/ai-search-autocomplete v1 middleware', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  test('perform a basic ai autocomplete search', async () => {
    const sp = new URLSearchParams()
    // Fixture queries under src/search/tests/fixtures/data/ai include "How do I clone a repository?".
    sp.set('query', 'how do I')
    const res = await get(getSearchEndpointWithParams(sp))
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.body) as AutocompleteSearchResponse

    expect(results.meta).toBeTruthy()
    expect(results.meta.found.value).toBeGreaterThanOrEqual(1)
    expect(results.meta.found.relation).toBeTruthy()

    expect(results.hits).toBeTruthy()

    const hit = results.hits[0]
    expect(hit.term).toBe('How do I clone a repository?')
    expect(hit.highlights).toBeTruthy()
    expect(hit.highlights[0]).toBe('<mark>How do I</mark> clone a repository?')

    // Search responses must be CDN-cacheable.
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-control']).toContain('public')
    expect(res.headers['surrogate-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-key']).toBe('language:en')
  })

  test('invalid version', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'fo')
    sp.set('version', 'never-heard-of')
    const res = await get(`${aiSearchEndpoint}?${sp}`)
    expect(res.statusCode).toBe(400)
    expect(JSON.parse(res.body).error).toBeTruthy()
  })

  test('variations on version name', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'fo')
    sp.set('version', 'enterprise-cloud')
    {
      const res = await get(getSearchEndpointWithParams(sp))
      expect(res.statusCode).toBe(200)
    }
    sp.set('version', 'ghec')
    {
      const res = await get(getSearchEndpointWithParams(sp))
      expect(res.statusCode).toBe(200)
    }
    sp.set('version', 'fpt')
    {
      const res = await get(getSearchEndpointWithParams(sp))
      expect(res.statusCode).toBe(200)
    }
    sp.set('version', 'free-pro-team@latest')
    {
      const res = await get(getSearchEndpointWithParams(sp))
      expect(res.statusCode).toBe(200)
    }
  })

  test('invalid language', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'fo')
    sp.set('language', 'xx')
    const res = await get(getSearchEndpointWithParams(sp))
    expect(res.statusCode).toBe(400)
    expect(JSON.parse(res.body).error).toBeTruthy()
  })

  test('only english supported', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'fo')
    sp.set('language', 'ja')
    const res = await get(getSearchEndpointWithParams(sp))
    expect(res.statusCode).toBe(400)
    expect(JSON.parse(res.body).error).toBeTruthy()
  })

  test('fuzzy autocomplete search', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'cl') // Matches "clone".
    const res = await get(getSearchEndpointWithParams(sp))
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.body) as AutocompleteSearchResponse
    // cl matches "How do I clone a repository?".
    const hit = results.hits[0]
    expect(hit.term).toBe('How do I clone a repository?')
    // Two-character queries use prefix matching, so cl highlights clone.
    expect(hit.highlights[0]).toBe('How do I <mark>clone</mark> a repository?')
  })

  test('autocomplete term search', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'clone')
    const res = await get(getSearchEndpointWithParams(sp))
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.body) as AutocompleteSearchResponse
    const hit = results.hits[0]
    expect(hit.term).toBe('How do I clone a repository?')
    expect(hit.highlights).toBeTruthy()
    expect(hit.highlights[0]).toBe('How do I <mark>clone</mark> a repository?')
  })

  test('support empty query', async () => {
    const sp = new URLSearchParams()
    // Omit query entirely.
    {
      const res = await get(getSearchEndpointWithParams(sp))
      expect(res.statusCode).toBe(200)
    }
    // Pass an empty query.
    {
      sp.set('query', '')
      const res = await get(getSearchEndpointWithParams(sp))
      expect(res.statusCode).toBe(200)
    }
  })
})

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

import { describeIfElasticsearchURL } from '@/tests/helpers/conditional-runs.js'
import { get } from '@/tests/helpers/e2etest-ts'

import type { CombinedAutocompleteSearchResponse } from '@/search/types'

if (!process.env.ELASTICSEARCH_URL) {
  console.warn(
    'None of the API search middleware tests are run because ' +
      "the environment variable 'ELASTICSEARCH_URL' is currently not set.",
  )
}

const combinedSearchEndpoint = '/api/search/combined-autocomplete/v1'
const getSearchEndpointWithParams = (searchParams: URLSearchParams) =>
  `${combinedSearchEndpoint}?${searchParams}`

// This suite only runs if $ELASTICSEARCH_URL is set.
describeIfElasticsearchURL('search/combined-autocomplete v1 middleware', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  test('basic search', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'how do I')
    const res = await get(getSearchEndpointWithParams(sp))
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.body) as CombinedAutocompleteSearchResponse

    // For aiAutocomplete
    expect(results.aiAutocomplete.meta).toBeTruthy()
    expect(results.aiAutocomplete.meta.found.value).toBeGreaterThanOrEqual(1)
    expect(results.aiAutocomplete.meta.found.relation).toBeTruthy()

    expect(results.aiAutocomplete.hits).toBeTruthy()

    const aiHit = results.aiAutocomplete.hits[0]
    expect(aiHit.term).toBe('How do I clone a repository?')
    expect(aiHit.highlights).toBeTruthy()
    expect(aiHit.highlights[0]).toBe('<mark>How do I</mark> clone a repository?')

    // For generalAutocomplete
    expect(results.generalAutocomplete.meta).toBeTruthy()
    expect(results.generalAutocomplete.meta.found.value).toBeGreaterThanOrEqual(1)
    expect(results.generalAutocomplete.meta.found.relation).toBeTruthy()

    expect(results.generalAutocomplete.hits).toBeTruthy()

    const generalHit = results.generalAutocomplete.hits[0]
    expect(generalHit.term).toBe('inputs')
    expect(generalHit.highlights).toBeTruthy()
    expect(generalHit.highlights[0]).toBe('<mark>inputs</mark>')

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
    sp.set('query', 'rest')
    sp.set('version', 'never-heard-of')
    const res = await get(getSearchEndpointWithParams(sp))
    expect(res.statusCode).toBe(400)
    expect(JSON.parse(res.body).error).toBeTruthy()
  })

  test('variations on version name', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'rest')
    const versions = ['enterprise-cloud', 'ghec', 'fpt', 'free-pro-team@latest']
    for (const version of versions) {
      sp.set('version', version)
      const res = await get(getSearchEndpointWithParams(sp))
      expect(res.statusCode).toBe(200)
    }
  })

  test('invalid language', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'rest')
    sp.set('language', 'xx')
    const res = await get(getSearchEndpointWithParams(sp))
    expect(res.statusCode).toBe(400)
    expect(JSON.parse(res.body).error).toBeTruthy()
  })

  test('only english supported', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'rest')
    sp.set('language', 'ja')
    const res = await get(getSearchEndpointWithParams(sp))
    expect(res.statusCode).toBe(400)
    expect(JSON.parse(res.body).error).toBeTruthy()
  })

  test('autocomplete term search', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'rest')
    const res = await get(getSearchEndpointWithParams(sp))
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.body) as CombinedAutocompleteSearchResponse

    // aiAutocomplete results
    const aiHits = results.aiAutocomplete.hits
    expect(aiHits.length).toBeGreaterThanOrEqual(2)
    expect(aiHits[0].term).toBe(
      'How do I manage OAuth app access restrictions for my organization?',
    )
    expect(aiHits[0].highlights[0]).toBe(
      'How do I manage OAuth app access <mark>restrictions</mark> for my organization?',
    )
    expect(aiHits[1].term).toBe('How do I test my SSH connection to GitHub?')
    expect(aiHits[1].highlights[0]).toBe('How do I <mark>test</mark> my SSH connection to GitHub?')

    // generalAutocomplete results
    const generalHits = results.generalAutocomplete.hits
    expect(generalHits.length).toBeGreaterThanOrEqual(3)
    expect(generalHits[0].term).toBe('rest')
    expect(generalHits[0].highlights[0]).toBe('<mark>rest</mark>')
    expect(generalHits[1].term).toBe('rest api')
    expect(generalHits[1].highlights[0]).toBe('<mark>rest</mark> api')
    expect(generalHits[2].term).toBe('rest api endpoints')
    expect(generalHits[2].highlights[0]).toBe('<mark>rest</mark> api endpoints')
  })

  test('empty query returns default results', async () => {
    const sp = new URLSearchParams()
    // No query at all
    {
      const res = await get(getSearchEndpointWithParams(sp))
      expect(res.statusCode).toBe(200)
      const results = JSON.parse(res.body) as CombinedAutocompleteSearchResponse
      expect(results).toBeTruthy()
    }
    // Empty query
    {
      sp.set('query', '')
      const res = await get(getSearchEndpointWithParams(sp))
      expect(res.statusCode).toBe(200)
      const results = JSON.parse(res.body) as CombinedAutocompleteSearchResponse
      expect(results).toBeTruthy()
    }
    // Empty when trimmed
    {
      sp.set('query', '  ')
      const res = await get(getSearchEndpointWithParams(sp))
      expect(res.statusCode).toBe(200)
      const results = JSON.parse(res.body) as CombinedAutocompleteSearchResponse
      expect(results).toBeTruthy()
    }
  })
})

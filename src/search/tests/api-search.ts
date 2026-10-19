// These tests need indexed fixtures and ELASTICSEARCH_URL.
// Run ELASTICSEARCH_URL=http://localhost:9200 npm run index-test-fixtures.
// The command writes tests_-prefixed indexes and leaves regular indexes alone.

import { expect, test, vi } from 'vitest'
import { describeIfElasticsearchURL } from '@/tests/helpers/conditional-runs'
import { get } from '@/tests/helpers/e2etest'
import { GeneralSearchResponse, SearchResultAggregations, GeneralSearchHit } from '@/search/types'

if (!process.env.ELASTICSEARCH_URL) {
  console.warn(
    'None of the API search middleware tests are run because ' +
      "the environment variable 'ELASTICSEARCH_URL' is currently not set.",
  )
}

describeIfElasticsearchURL('search v1 middleware', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  // src/search/tests/fixtures/search-indexes/tests_github-docs_general-search_fpt_en-records.json has title "Foo".
  test('basic search', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'foo')
    const res = await get(`/api/search/v1?${sp.toString()}`)
    expect(res.statusCode).toBe(200)
    const results: GeneralSearchResponse = JSON.parse(res.body)

    expect(results.meta).toBeTruthy()
    expect(results.meta.found.value).toBeGreaterThanOrEqual(1)
    expect(results.meta.found.relation).toBeTruthy()
    expect(results.meta.page).toBe(1)
    expect(results.meta.size).toBeGreaterThanOrEqual(1)
    expect(results.meta.took.query_msec).toBeGreaterThanOrEqual(0)
    expect(results.meta.took.total_msec).toBeGreaterThanOrEqual(0)

    // Search hits can be empty, but the response always returns an array.
    expect(results.hits).toBeTruthy()
    // The word foo appears in more than one fixture document.
    expect(results.hits.length).toBeGreaterThanOrEqual(1)
    // Only one fixture title includes foo, so that hit comes first.
    const hit: GeneralSearchHit = results.hits[0]
    // The API returns the fixture source.url unchanged.
    expect(hit.url).toBe('/en/foo')
    expect(hit.title).toBe('Foo')
    expect(hit.breadcrumbs).toBe('fooing')
    // Default highlights include title and content, not headings.
    expect(hit.highlights.title[0]).toBe('<mark>Foo</mark>')
    expect(hit.highlights.content[0]).toMatch('<mark>foo</mark>')
    expect(hit.highlights.headings).toBeUndefined()

    // Search responses must be CDN-cacheable.
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-control']).toContain('public')
    expect(res.headers['surrogate-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-key']).toBe('manual-purge')
  })

  test('debug search', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'foo')
    sp.set('debug', '1')
    const res = await get(`/api/search/v1?${sp.toString()}`)
    expect(res.statusCode).toBe(200)
    const results: GeneralSearchResponse = JSON.parse(res.body)
    // The fixture query returns a deterministic first hit.
    const hit: GeneralSearchHit = results.hits[0]
    expect(hit.popularity).toBeTruthy()
    expect(hit.score).toBeTruthy()
    expect(hit.es_url).toBeTruthy()
  })

  test('search with and without autocomplete on', async () => {
    // Leave autocomplete unset to verify the stemmed term does not match.
    {
      const sp = new URLSearchParams()
      sp.set('query', 'sill')
      const res = await get(`/api/search/v1?${sp.toString()}`)
      expect(res.statusCode).toBe(200)
      const results: GeneralSearchResponse = JSON.parse(res.body)
      // The fixture term silly stems to silli; without autocomplete, query sill does not match it.
      expect(results.meta.found.value).toBe(0)
    }

    // Enable autocomplete so sill can match silly.
    {
      const sp = new URLSearchParams()
      sp.set('query', 'sill')
      sp.set('autocomplete', 'true')
      const res = await get(`/api/search/v1?${sp.toString()}`)
      expect(res.statusCode).toBe(200)
      const results: GeneralSearchResponse = JSON.parse(res.body)
      expect(results.meta.found.value).toBeGreaterThanOrEqual(1)
      const hit: GeneralSearchHit = results.hits[0]
      const contentHighlights: string[] | undefined = hit.highlights.content
      expect(contentHighlights).toBeTruthy()
      expect(contentHighlights![0]).toMatch('<mark>silly</mark>')
    }
  })

  test('find nothing', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'xojixjoiwejhfoiuwehjfioweufhj')
    const res = await get(`/api/search/v1?${sp.toString()}`)
    expect(res.statusCode).toBe(200)
    const results: GeneralSearchResponse = JSON.parse(res.body)
    expect(results.hits.length).toBe(0)
    expect(results.meta.found.value).toBe(0)
  })

  test('configurable highlights', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'introduction heading')
    sp.append('highlights', 'content')
    const res = await get(`/api/search/v1?${sp.toString()}`)
    expect(res.statusCode).toBe(200)
    const results: GeneralSearchResponse = JSON.parse(res.body)
    expect(results.meta.found.value).toBeGreaterThanOrEqual(1)
    for (const hit of results.hits) {
      expect(hit.highlights.title).toBeFalsy()
      expect(hit.highlights.content).toBeTruthy()
    }
  })

  test('highlights keys matches highlights configuration', async () => {
    const sp = new URLSearchParams()
    // Fact of life appears in content, not headings.
    sp.set('query', 'Fact of life')
    sp.set('highlights', 'title')
    const res = await get(`/api/search/v1?${sp.toString()}`)
    expect(res.statusCode).toBe(200)
    const results: GeneralSearchResponse = JSON.parse(res.body)
    expect(results.meta.found.value).toBeGreaterThanOrEqual(1)
    for (const hit of results.hits) {
      expect(hit.highlights.title).toBeTruthy()
      expect(hit.highlights.content).toBeFalsy()
    }
  })

  test('version can be aliased', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'foo')
    sp.set('version', 'dotcom')
    const res1 = await get(`/api/search/v1?${sp.toString()}`)
    expect(res1.statusCode).toBe(200)
    const results1: GeneralSearchResponse = JSON.parse(res1.body)

    sp.set('version', 'free-pro-team@latest')
    const res2 = await get(`/api/search/v1?${sp.toString()}`)
    expect(res2.statusCode).toBe(200)
    const results2: GeneralSearchResponse = JSON.parse(res2.body)
    expect(results1.hits[0].id).toBe(results2.hits[0].id)
  })

  test('invalid parameters', async () => {
    // Missing query.
    {
      const res = await get('/api/search/v1')
      expect(res.statusCode).toBe(400)
      const errorResponse = JSON.parse(res.body) as {
        error: string
        field?: string
      }
      expect(errorResponse.error).toBeTruthy()
    }
    // Whitespace-only query.
    {
      const sp = new URLSearchParams()
      sp.set('query', '  ')
      const res = await get(`/api/search/v1?${sp.toString()}`)
      expect(res.statusCode).toBe(400)
      const errorResponse = JSON.parse(res.body) as {
        error: string
        field?: string
      }
      expect(errorResponse.error).toBeTruthy()
    }
    // Unrecognized language.
    {
      const sp = new URLSearchParams()
      sp.set('query', 'test')
      sp.set('language', 'xxx')
      const res = await get(`/api/search/v1?${sp.toString()}`)
      expect(res.statusCode).toBe(400)
      const errorResponse = JSON.parse(res.body) as {
        error: string
        field?: string
      }
      expect(errorResponse.error).toMatch('language')
    }
    // Unrecognized page.
    {
      const sp = new URLSearchParams()
      sp.set('query', 'test')
      sp.set('page', '9999')
      const res = await get(`/api/search/v1?${sp.toString()}`)
      expect(res.statusCode).toBe(400)
      const errorResponse = JSON.parse(res.body) as {
        error: string
        field?: string
      }
      expect(errorResponse.error).toMatch('page')
    }
    // Unrecognized version.
    {
      const sp = new URLSearchParams()
      sp.set('query', 'test')
      sp.set('version', 'xxxxx')
      const res = await get(`/api/search/v1?${sp.toString()}`)
      expect(res.statusCode).toBe(400)
      const errorResponse = JSON.parse(res.body) as {
        error: string
        field?: string
      }
      expect(errorResponse.error).toMatch("'xxxxx'")
      expect(errorResponse.field).toMatch('version')
    }
    // Unrecognized size.
    {
      const sp = new URLSearchParams()
      sp.set('query', 'test')
      sp.set('size', 'not a number')
      const res = await get(`/api/search/v1?${sp.toString()}`)
      expect(res.statusCode).toBe(400)
      const errorResponse = JSON.parse(res.body) as {
        error: string
        field?: string
      }
      expect(errorResponse.error).toMatch('size')
    }
    // Unrecognized sort.
    {
      const sp = new URLSearchParams()
      sp.set('query', 'test')
      sp.set('sort', 'neverheardof')
      const res = await get(`/api/search/v1?${sp.toString()}`)
      expect(res.statusCode).toBe(400)
      const errorResponse = JSON.parse(res.body) as {
        error: string
        field?: string
      }
      expect(errorResponse.error).toMatch('sort')
    }
    // Unrecognized highlights.
    {
      const sp = new URLSearchParams()
      sp.set('query', 'test')
      sp.set('highlights', 'neverheardof')
      const res = await get(`/api/search/v1?${sp.toString()}`)
      expect(res.statusCode).toBe(400)
      const errorResponse = JSON.parse(res.body) as {
        error: string
        field?: string
      }
      expect(errorResponse.error).toMatch('neverheardof')
    }
    // Multiple query keys.
    {
      const sp = new URLSearchParams()
      sp.append('query', 'test1')
      sp.append('query', 'test2')
      const res = await get(`/api/search/v1?${sp.toString()}`)
      expect(res.statusCode).toBe(400)
      const errorResponse = JSON.parse(res.body) as {
        error: string
        field?: string
      }
      expect(errorResponse.error).toMatch('Cannot have multiple values')
    }
  })

  test('breadcrumbless records should always return a string', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'breadcrumbs')
    const res = await get(`/api/search/v1?${sp.toString()}`)
    expect(res.statusCode).toBe(200)
    const results: GeneralSearchResponse = JSON.parse(res.body)
    // The fixture query returns a deterministic first hit.
    const hit: GeneralSearchHit = results.hits[0]
    expect(hit.breadcrumbs).toBe('')
  })
})

describeIfElasticsearchURL("additional fields with 'include'", () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  test("'intro' and 'headings' are omitted by default", async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'foo')
    const res = await get(`/api/search/v1?${sp.toString()}`)
    expect(res.statusCode).toBe(200)
    const results: GeneralSearchResponse = JSON.parse(res.body)
    const firstKeys = Object.keys(results.hits[0])
    expect(firstKeys.includes('intro')).toBeFalsy()
    expect(firstKeys.includes('headings')).toBeFalsy()
  })

  test("additionally include 'intro'", async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'foo')
    sp.set('include', 'intro')
    const res = await get(`/api/search/v1?${sp.toString()}`)
    expect(res.statusCode).toBe(200)
    const results: GeneralSearchResponse = JSON.parse(res.body)
    const firstKeys = Object.keys(results.hits[0])
    expect(firstKeys.includes('intro')).toBeTruthy()
    expect(firstKeys.includes('headings')).toBeFalsy()
  })

  test("additionally include 'intro' and 'headings'", async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'foo')
    sp.append('include', 'intro')
    sp.append('include', 'headings')
    const res = await get(`/api/search/v1?${sp.toString()}`)
    expect(res.statusCode).toBe(200)
    const results: GeneralSearchResponse = JSON.parse(res.body)
    const firstKeys = Object.keys(results.hits[0])
    expect(firstKeys.includes('intro')).toBeTruthy()
    expect(firstKeys.includes('headings')).toBeTruthy()
  })

  test("unknown 'include' is 400 bad request", async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'foo')
    sp.set('include', 'xxxxx')
    const res = await get(`/api/search/v1?${sp.toString()}`)
    expect(res.statusCode).toBe(400)
    const results = JSON.parse(res.body) as {
      error: string
      field?: string
    }
    expect(results.error).toMatch(`Not a valid value ([ 'xxxxx' ]) for key 'include'`)
  })
})

describeIfElasticsearchURL('filter by toplevel', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  test("include 'toplevel' in output", async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'foo')
    sp.set('include', 'toplevel')
    const res = await get(`/api/search/v1?${sp.toString()}`)
    expect(res.statusCode).toBe(200)
    const results: GeneralSearchResponse = JSON.parse(res.body)
    // The fixtures include two toplevel values that match foo.
    const toplevels = new Set(results.hits.map((hit) => hit.toplevel))
    expect(toplevels).toEqual(new Set(['Fooing', 'Baring']))
  })

  test("filter by 'toplevel' (single)", async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'foo')
    sp.set('include', 'toplevel')
    sp.set('toplevel', 'Baring')
    const res = await get(`/api/search/v1?${sp.toString()}`)
    expect(res.statusCode).toBe(200)
    const results: GeneralSearchResponse = JSON.parse(res.body)
    const toplevels = new Set(results.hits.map((hit) => hit.toplevel))
    expect(toplevels).toEqual(new Set(['Baring']))
  })

  test("filter by 'toplevel' (array)", async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'foo')
    sp.set('include', 'toplevel')
    sp.append('toplevel', 'Baring')
    sp.append('toplevel', 'Fooing')
    const res = await get(`/api/search/v1?${sp.toString()}`)
    expect(res.statusCode).toBe(200)
    const results: GeneralSearchResponse = JSON.parse(res.body)
    const toplevels = new Set(results.hits.map((hit) => hit.toplevel))
    expect(toplevels).toEqual(new Set(['Fooing', 'Baring']))
  })

  test("filter by unrecognized 'toplevel'", async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'foo')
    sp.set('include', 'toplevel')
    sp.set('toplevel', 'Never heard of')
    const res = await get(`/api/search/v1?${sp.toString()}`)
    expect(res.statusCode).toBe(200)
    const results: GeneralSearchResponse = JSON.parse(res.body)
    expect(results.meta.found.value).toBe(0)
  })
})

describeIfElasticsearchURL('aggregate', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  test("aggregate by 'toplevel'", async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'foo')
    sp.set('aggregate', 'toplevel')
    const res = await get(`/api/search/v1?${sp.toString()}`)
    expect(res.statusCode).toBe(200)
    const results: GeneralSearchResponse & { aggregations?: SearchResultAggregations } = JSON.parse(
      res.body,
    )
    expect(results.aggregations).toBeTruthy()
    expect(results.aggregations!.toplevel).toBeTruthy()
    const firstAgg = results.aggregations!.toplevel[0]
    expect(firstAgg.key).toBeTruthy()
    expect(firstAgg.count).toBeTruthy()
  })

  test("aggregate by 'unrecognizedxxx'", async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'foo')
    sp.set('aggregate', 'unrecognizedxxx')
    const res = await get(`/api/search/v1?${sp.toString()}`)
    expect(res.statusCode).toBe(400)
    const results = JSON.parse(res.body) as {
      error: string
      field?: string
    }
    expect(results.error).toMatch('aggregate')
  })
})

/**
 * To be able to run these tests you need to index the fixtures!
 * And you need to have an Elasticsearch URL to connect to for the server.
 *
 * To index the fixtures, run:
 *
 *   ELASTICSEARCH_URL=http://localhost:9200 npm run index-test-fixtures
 *
 * This will replace any "real" Elasticsearch indexes you might have so
 * once you're done working on jest tests you need to index real
 * content again.
 */

import { jest, test, expect } from '@jest/globals'

import { describeIfElasticsearchURL } from '../helpers/conditional-runs.js'
import { get } from '../helpers/e2etest.js'

if (!process.env.ELASTICSEARCH_URL) {
  console.warn(
    'None of the API search middleware tests are run because ' +
      "the environment variable 'ELASTICSEARCH_URL' is currently not set."
  )
}

// This suite only runs if $ELASTICSEARCH_URL is set.
describeIfElasticsearchURL('search middleware', () => {
  jest.setTimeout(60 * 1000)

  test('basic search', async () => {
    const sp = new URLSearchParams()
    // To see why this will work,
    // see tests/content/fixtures/search-indexes/github-docs-dotcom-en-records.json
    // which clearly has a record with the title "Foo"
    sp.set('query', 'foo')
    const res = await get('/api/search/v1?' + sp)
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.text)

    expect(results.meta).toBeTruthy()
    expect(results.meta.found.value).toBeGreaterThanOrEqual(1)
    expect(results.meta.found.relation).toBeTruthy()
    expect(results.meta.page).toBe(1)
    expect(results.meta.size).toBeGreaterThanOrEqual(1)
    expect(results.meta.took.query_msec).toBeGreaterThanOrEqual(0)
    expect(results.meta.took.total_msec).toBeGreaterThanOrEqual(0)

    // Might be empty but at least an array
    expect(results.hits).toBeTruthy()
    // The word 'foo' appears in more than 1 document in the fixtures.
    expect(results.hits.length).toBeGreaterThanOrEqual(1)
    // ...but only one has the word "foo" in its title so we can
    // be certain it comes first.
    const hit = results.hits[0]
    // This specifically checks what we expect of version v1
    expect(hit.url).toBe('/en/foo')
    expect(hit.title).toBe('Foo')
    expect(hit.breadcrumbs).toBe('fooing')
    expect(hit.highlights.title[0]).toBe('<mark>Foo</mark>')
    expect(hit.highlights.content[0]).toMatch('<mark>foo</mark>')

    // Check that it can be cached at the CDN
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=\d+/)
  })

  test('debug search', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'foo')
    sp.set('debug', '1') // Note!
    const res = await get('/api/search/v1?' + sp)
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.text)
    // safe because we know exactly the fixtures
    const hit = results.hits[0]
    expect(hit.popularity).toBeTruthy()
    expect(hit.score).toBeTruthy()
    expect(hit.es_url).toBeTruthy()
  })

  test('find nothing', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'xojixjoiwejhfoiuwehjfioweufhj')
    const res = await get('/api/search/v1?' + sp)
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.text)
    expect(results.hits.length).toBe(0)
    expect(results.meta.found.value).toBe(0)
  })

  test('version can be aliased', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'foo')
    sp.set('version', 'dotcom')
    const res1 = await get('/api/search/v1?' + sp)
    expect(res1.statusCode).toBe(200)
    const results1 = JSON.parse(res1.text)

    sp.set('version', 'free-pro-team@latest')
    const res2 = await get('/api/search/v1?' + sp)
    expect(res2.statusCode).toBe(200)
    const results2 = JSON.parse(res2.text)
    expect(results1.hits[0].id).toBe(results2.hits[0].id)
  })

  test('invalid parameters', async () => {
    // query is not even present
    {
      const res = await get('/api/search/v1')
      expect(res.statusCode).toBe(400)
      expect(JSON.parse(res.text).error).toBeTruthy()
    }
    // query is just whitespace
    {
      const sp = new URLSearchParams()
      sp.set('query', '  ')
      const res = await get('/api/search/v1?' + sp)
      expect(res.statusCode).toBe(400)
      expect(JSON.parse(res.text).error).toBeTruthy()
    }
    // unrecognized language
    {
      const sp = new URLSearchParams()
      sp.set('query', 'test')
      sp.set('language', 'xxx')
      const res = await get('/api/search/v1?' + sp)
      expect(res.statusCode).toBe(400)
      expect(JSON.parse(res.text).error).toMatch('language')
    }
    // unrecognized page
    {
      const sp = new URLSearchParams()
      sp.set('query', 'test')
      sp.set('page', '9999')
      const res = await get('/api/search/v1?' + sp)
      expect(res.statusCode).toBe(400)
      expect(JSON.parse(res.text).error).toMatch('page')
    }
    // unrecognized version
    {
      const sp = new URLSearchParams()
      sp.set('query', 'test')
      sp.set('version', 'xxxxx')
      const res = await get('/api/search/v1?' + sp)
      expect(res.statusCode).toBe(400)
      expect(JSON.parse(res.text).error).toMatch('version')
    }
    // unrecognized size
    {
      const sp = new URLSearchParams()
      sp.set('query', 'test')
      sp.set('size', 'not a number')
      const res = await get('/api/search/v1?' + sp)
      expect(res.statusCode).toBe(400)
      expect(JSON.parse(res.text).error).toMatch('size')
    }
    // unrecognized sort
    {
      const sp = new URLSearchParams()
      sp.set('query', 'test')
      sp.set('sort', 'neverheardof')
      const res = await get('/api/search/v1?' + sp)
      expect(res.statusCode).toBe(400)
      expect(JSON.parse(res.text).error).toMatch('sort')
    }
  })
})

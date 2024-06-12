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
import { get, getDOM } from '#src/tests/helpers/e2etest.js'
import { SURROGATE_ENUMS } from '#src/frame/middleware/set-fastly-surrogate-key.js'

if (!process.env.ELASTICSEARCH_URL) {
  console.warn(
    'None of the API search middleware tests are run because ' +
      "the environment variable 'ELASTICSEARCH_URL' is currently not set.",
  )
}

// This suite only runs if $ELASTICSEARCH_URL is set.
describeIfElasticsearchURL('search rendering page', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  test('happy path', async () => {
    // To see why this will work,
    // see src/search/tests/fixtures/search-indexes/github-docs-dotcom-en-records.json
    // which clearly has a record with the title "Foo"
    const $ = await getDOM('/en/search?query=foo')
    expect($('h1').text()).toMatch(/\d+ Search results for "foo"/)

    // Note it testid being 'search-result', not 'search-results'
    const results = $('[data-testid="search-result"]')
    expect(results.length).toBeGreaterThan(0)
    const result = results.first()
    expect($('h2', result).text()).toBe('Foo')
    const paragraph = $('p', result)
    expect(paragraph.text()).toMatch('fooing')
    const link = $('a', result)
    expect(link.html()).toMatch('<mark>Foo</mark>')
    const content = $('div', result)
    expect(content.html()).toMatch('<mark>foo</mark>')
  })

  test('response headers', async () => {
    const res = await get('/en/search?query=foo')

    // Check that it can be cached at the CDN
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-control']).toContain('public')
    expect(res.headers['surrogate-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-key']).toMatch(SURROGATE_ENUMS.DEFAULT)
    expect(res.headers['surrogate-key']).toMatch('language:en')
  })

  test('debug search', async () => {
    const $ = await getDOM('/en/search?query=foo&debug=1')
    expect($('h1').text()).toMatch(/\d+ Search results for "foo"/)

    // Note it testid being 'search-result', not 'search-results'
    const results = $('[data-testid="search-result"]')
    expect(results.length).toBeGreaterThan(0)
    const result = results.first()
    expect($('p', result).text()).toMatch(/score:\s+\d/)
    expect($('p', result).text()).toMatch(/popularity:\s+\d/)
  })

  test('no query', async () => {
    const $ = await getDOM('/en/search')
    const results = $('[data-testid="search-result"]')
    expect(results.length).toBe(0)
    expect($('[data-testid="search-results"]').text()).toMatch('Enter a search term')
  })

  test('empty query', async () => {
    const $ = await getDOM('/en/search?query=')
    const results = $('[data-testid="search-result"]')
    expect(results.length).toBe(0)
    expect($('[data-testid="search-results"]').text()).toMatch('Enter a search term')
  })

  test('find nothing', async () => {
    const $ = await getDOM('/en/search?query=xojixjoiwejhfoiuwehjfioweufhj')
    const results = $('[data-testid="search-result"]')
    expect(results.length).toBe(0)
    expect($('[data-testid="search-results"]').text()).toMatch('0 Search results')
  })

  test('unrecognized version', async () => {
    const res = await get('/en/never-heard@of/search?query=foo')
    expect(res.statusCode).toBe(404)
  })

  test('links per version in pathname', async () => {
    const $ = await getDOM('/en/enterprise-cloud@latest/search?query=foo')
    expect($('[data-testid="search-results"]').text()).toMatch('Exclusively for GHEC')
    // Note it testid being 'search-result', not 'search-results'
    const results = $('[data-testid="search-result"]')
    expect(results.length).toBeGreaterThan(0)
    // Each link should have enterprise-cloud@latest in the pathname
    const links = $('[data-testid="search-result"] a')
    const hrefs = links.map((i, el) => $(el).attr('href')).get()
    for (const href of hrefs) {
      expect(href).toMatch('/en/enterprise-cloud@latest/')
    }
    expect.assertions(results.length + 2)
  })

  test('invalid parameters (page)', async () => {
    const $ = await getDOM('/en/search?query=foo&page=999')
    expect($('[data-testid="search-results"]').text()).toMatch('Not a valid value (999)')
    const results = $('[data-testid="search-result"]')
    expect(results.length).toBe(0)
  })

  test('invalid parameters (size)', async () => {
    const $ = await getDOM('/en/search?query=foo&size=888')
    expect($('[data-testid="search-results"]').text()).toMatch('Not a valid value (888)')
    const results = $('[data-testid="search-result"]')
    expect(results.length).toBe(0)
  })

  test("don't convert q= to query= if query= already present", async () => {
    const res = await get('/en/search?q=pulls&query=pushes')
    expect(res.statusCode).toBe(200)
  })

  test('more that one search query', async () => {
    const $ = await getDOM('/en/search?query=foo&query=bar')
    expect($('[data-testid="search-results"]').text()).toMatch('Cannot have multiple values')
    const results = $('[data-testid="search-result"]')
    expect(results.length).toBe(0)
  })

  test("search with 'toplevel' query string", async () => {
    const $ = await getDOM('/en/search?query=foo&toplevel=Baring')
    expect($('h1').text()).toMatch(/\d+ Search results for "foo"/)

    // Note it testid being 'search-result', not 'search-results'
    const results = $('[data-testid="search-result"]')
    expect(results.length).toBeGreaterThan(0)
    const result = results.first()
    expect($('h2', result).text()).toBe('Bar')
    const paragraph = $('p', result)
    expect(paragraph.text()).toMatch('baring')
    const link = $('a', result)
    expect(link.html()).toMatch('Bar')
  })
})

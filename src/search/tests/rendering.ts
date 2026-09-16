// These tests need indexed fixtures and an Elasticsearch URL for the server:
//
//   ELASTICSEARCH_URL=http://localhost:9200 npm run index-test-fixtures
//
// That writes `tests_`-prefixed indexes and leaves your regular ones alone.

import { expect, test, vi } from 'vitest'

import { describeIfElasticsearchURL } from '@/tests/helpers/conditional-runs'
import { get, getDOM } from '@/tests/helpers/e2etest'

if (!process.env.ELASTICSEARCH_URL) {
  console.warn(
    'None of the API search middleware tests are run because ' +
      "the environment variable 'ELASTICSEARCH_URL' is currently not set.",
  )
}

describeIfElasticsearchURL('search rendering page', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  test('happy path', async () => {
    // src/search/tests/fixtures/search-indexes/tests_github-docs_general-search_fpt_en-records.json
    // has a record with the title "Foo".
    const { $ } = await getDOM('/en/search?query=foo')
    expect($('h1').text()).toMatch(/\d+ Search results for "foo"/)

    // Note it testid being 'search-result', not 'search-results'
    const results = $('[data-testid="search-result"]')
    expect(results.length).toBeGreaterThan(0)
    const result = results.first()
    expect($('h2', result).text()).toBe('Foo')
    // The Docs 2026 result row replaced the breadcrumb line with a category chip fed by the
    // hit's `toplevel`. Asserting on it also covers the `include=toplevel` plumbing in the
    // search middleware.
    const toplevel = $('[data-testid="search-result-toplevel"]', result)
    expect(toplevel.text()).toBe('Fooing')
    const link = $('a', result)
    expect(link.html()).toMatch('<mark>Foo</mark>')
    const content = $('[data-testid="search-result-content"]', result)
    expect(content.html()).toMatch('<mark>foo</mark>')
  })

  test('response headers', async () => {
    const res = await get('/en/search?query=foo')

    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-control']).toContain('public')
    expect(res.headers['surrogate-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-key']).toMatch('language:en')
  })

  test('debug search', async () => {
    const { $ } = await getDOM('/en/search?query=foo&debug=1')
    expect($('h1').text()).toMatch(/\d+ Search results for "foo"/)

    const results = $('[data-testid="search-result"]')
    expect(results.length).toBeGreaterThan(0)
    const result = results.first()
    expect($('p', result).text()).toMatch(/score:\s+\d/)
    expect($('p', result).text()).toMatch(/popularity:\s+\d/)
  })

  test('no query', async () => {
    const { $ } = await getDOM('/en/search')
    const results = $('[data-testid="search-result"]')
    expect(results.length).toBe(0)
    expect($('[data-testid="search-results"]').text()).toMatch('Enter a search term')
  })

  test('empty query', async () => {
    const { $ } = await getDOM('/en/search?query=')
    const results = $('[data-testid="search-result"]')
    expect(results.length).toBe(0)
    expect($('[data-testid="search-results"]').text()).toMatch('Enter a search term')
  })

  test('find nothing', async () => {
    const { $ } = await getDOM('/en/search?query=xojixjoiwejhfoiuwehjfioweufhj')
    const results = $('[data-testid="search-result"]')
    expect(results.length).toBe(0)
    expect($('[data-testid="search-results"]').text()).toMatch('0 Search results')
  })

  test('unrecognized version', async () => {
    const res = await get('/en/never-heard@of/search?query=foo')
    expect(res.statusCode).toBe(404)
  })

  test('links per version in pathname', async () => {
    const { $ } = await getDOM('/en/enterprise-cloud@latest/search?query=foo')
    expect($('[data-testid="search-results"]').text()).toMatch('Exclusively for GHEC')
    const results = $('[data-testid="search-result"]')
    expect(results.length).toBeGreaterThan(0)
    const links = $('[data-testid="search-result"] a')
    const hrefs: string[] = links.map((_, el) => $(el).attr('href') ?? '').get()
    for (const href of hrefs) {
      expect(href).toMatch('/en/enterprise-cloud@latest/')
    }
    expect.assertions(results.length + 2)
  })

  test('invalid parameters (page)', async () => {
    const { $ } = await getDOM('/en/search?query=foo&page=999')
    expect($('[data-testid="search-results"]').text()).toMatch('Not a valid value (999)')
    const results = $('[data-testid="search-result"]')
    expect(results.length).toBe(0)
  })

  test('invalid parameters (size)', async () => {
    const { $ } = await getDOM('/en/search?query=foo&size=888')
    expect($('[data-testid="search-results"]').text()).toMatch('Not a valid value (888)')
    const results = $('[data-testid="search-result"]')
    expect(results.length).toBe(0)
  })

  test("don't convert q= to query= if query= already present", async () => {
    const res = await get('/en/search?q=pulls&query=pushes')
    expect(res.statusCode).toBe(200)
  })

  test('more than one search query', async () => {
    const { $ } = await getDOM('/en/search?query=foo&query=bar')
    expect($('[data-testid="search-results"]').text()).toMatch('Cannot have multiple values')
    const results = $('[data-testid="search-result"]')
    expect(results.length).toBe(0)
  })

  test("search with 'toplevel' query string", async () => {
    const { $ } = await getDOM('/en/search?query=foo&toplevel=Baring')
    expect($('h1').text()).toMatch(/\d+ Search results for "foo"/)

    const results = $('[data-testid="search-result"]')
    expect(results.length).toBeGreaterThan(0)
    const result = results.first()
    expect($('h2', result).text()).toBe('Bar')
    const toplevel = $('[data-testid="search-result-toplevel"]', result)
    expect(toplevel.text()).toBe('Baring')
    const link = $('a', result)
    expect(link.html()).toMatch('Bar')
  })
})

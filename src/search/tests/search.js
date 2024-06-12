import { describe, expect, test, vi } from 'vitest'

import { get, getDOM } from '#src/tests/helpers/e2etest.js'

describe('search results page', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  test('says something if no query is provided', async () => {
    const $ = await getDOM('/en/search')
    const $container = $('[data-testid="search-results"]')
    expect($container.text()).toMatch(/Enter a search term/)
    // Default is the frontmatter title of the content/search/index.md
    expect($('title').text()).toMatch('Search - GitHub Docs')
  })

  test('says something if query is empty', async () => {
    const $ = await getDOM(`/en/search?${new URLSearchParams({ query: ' ' })}`)
    const $container = $('[data-testid="search-results"]')
    expect($container.text()).toMatch(/Enter a search term/)
  })

  test('mention search term in h1', async () => {
    const $ = await getDOM(`/en/search?${new URLSearchParams({ query: 'peterbe' })}`)
    const $container = $('[data-testid="search-results"]')
    const h1Text = $container.find('h1').text()
    expect(h1Text).toMatch(/Search results for/)
    expect(h1Text).toMatch(/peterbe/)
    expect($('title').text()).toMatch(/Search results for "peterbe"/)
  })

  test('invalid version prefix 404s', async () => {
    const res = await get(
      `/en/enterprise-stuff@3.10/search?${new URLSearchParams({ query: 'peterbe' })}`,
    )
    expect(res.statusCode).toBe(404)
  })
})

import { describe, expect, test, vi } from 'vitest'
import { get, getDOM } from '@/tests/helpers/e2etest-ts'

describe('search results page', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  test('says something if no query is provided', async (): Promise<void> => {
    const { $ } = await getDOM('/en/search')
    const $container = $('[data-testid="search-results"]')
    expect($container.text()).toMatch(/Enter a search term/)
    // Default is the frontmatter title of the content/search/index.md
    expect($('title').text()).toMatch('Search - GitHub Docs')
  })

  test('says something if query is empty', async (): Promise<void> => {
    const queryParams = new URLSearchParams({ query: ' ' }).toString()
    const { $ } = await getDOM(`/en/search?${queryParams}`)
    const $container = $('[data-testid="search-results"]')
    expect($container.text()).toMatch(/Enter a search term/)
  })

  test('mentions search term in h1', async (): Promise<void> => {
    const searchTerm = 'peterbe'
    const queryParams = new URLSearchParams({ query: searchTerm }).toString()
    const { $ } = await getDOM(`/en/search?${queryParams}`)
    const $container = $('[data-testid="search-results"]')
    const h1Text: string = $container.find('h1').text()

    expect(h1Text).toMatch(/Search results for/)
    expect(h1Text).toMatch(new RegExp(searchTerm))
    expect($('title').text()).toMatch(new RegExp(`Search results for "${searchTerm}"`))
  })

  test('invalid version prefix 404s', async (): Promise<void> => {
    const queryParams = new URLSearchParams({ query: 'peterbe' }).toString()
    const response = await get(`/en/enterprise-stuff@3.10/search?${queryParams}`)

    expect(response.statusCode).toBe(404)
  })
})

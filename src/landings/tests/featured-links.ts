import { describe, expect, test, vi } from 'vitest'

import { getDOM } from '@/tests/helpers/e2etest'

describe('featuredLinks', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  test('non-TOC pages do not have intro links', async () => {
    const $ = await getDOM('/en/get-started/start-your-journey/hello-world')
    expect($('[data-testid=article-list]')).toHaveLength(0)
  })

  test('Enterprise get-started landing renders', async () => {
    const $ = await getDOM('/en/enterprise-server@latest/get-started')
    // get-started uses discovery-landing, so it has hero/spotlight, not article-list.
    expect($('h1').text()).toMatch(/Getting started/)
  })
})

describe('homepage', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  test('renders the hero search entry that opens the overlay', async () => {
    const $ = await getDOM('/en')
    const $search = $('[data-testid=homepage-search]')
    expect($search).toHaveLength(1)
    // The redesigned homepage no longer renders the featured article lists.
    expect($('[data-testid=article-list]')).toHaveLength(0)
  })

  test('renders the "All docs" product grid with links', async () => {
    const $ = await getDOM('/en')
    const $grid = $('[data-testid=product]')
    expect($grid).toHaveLength(1)
    // Category group headings and their product links.
    expect($grid.find('h3').length).toBeGreaterThan(0)
    expect($grid.find('a').length).toBeGreaterThan(0)
  })
})

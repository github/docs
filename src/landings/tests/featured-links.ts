import { describe, expect, test, vi } from 'vitest'

import { getDOM } from '@/tests/helpers/e2etest'

describe('featuredLinks', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  test('non-TOC pages do not have intro links', async () => {
    const $ = await getDOM('/en/get-started/start-your-journey/hello-world')
    expect($('[data-testid=article-list]')).toHaveLength(0)
  })

  test('landing page intro links have expected properties', async () => {
    const $ = await getDOM('/en')
    const $featuredLinks = $('[data-testid=article-list] a')
    expect($featuredLinks).toHaveLength(7)
    expect($featuredLinks.eq(0).attr('href')).toBe('/en/get-started/start-your-journey/hello-world')
    expect($featuredLinks.eq(0).find('[data-testid=link-with-intro-title]').text()).toMatch(
      'Hello World',
    )
    expect($featuredLinks.eq(0).find('[data-testid=link-with-intro-intro]').text()).toMatch(
      /follow.+this.+hello.+world.+exercise/i,
    )
  })

  test('Enterprise get-started landing renders', async () => {
    const $ = await getDOM('/en/enterprise-server@latest/get-started')
    // get-started uses discovery-landing, so it has hero/spotlight, not article-list.
    expect($('h1').text()).toMatch(/Getting started/)
  })

  // This is an important test because one of the popular links,
  // in the front matter of `src/fixtures/fixtures/content/index.md`, uses
  // Liquid to conditionally include with `{% ifversion ghec %}`.
  test.each(['', '/enterprise-cloud@latest'])(
    'never more than 4 links per category in %a',
    async (version) => {
      const $ = await getDOM(`/en${version}`)
      const columns = $('[data-testid=article-list]')
      expect(columns.length).toBe(2)
      for (const column of columns) {
        const $featuredLinks = $('a', column)
        // See MAX_FEATURED_LINKS constant in featured-links.ts middleware
        expect($featuredLinks.length).toBeLessThanOrEqual(4)
      }
    },
  )
})

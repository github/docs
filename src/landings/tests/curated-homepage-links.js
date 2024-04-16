import { describe, expect, test, vi } from 'vitest'

import { getDOM } from '#src/tests/helpers/e2etest.js'

describe('curated homepage links', () => {
  vi.setConfig({ testTimeout: 3 * 60 * 1000 })

  test('English', async () => {
    const $ = await getDOM('/en')
    const $links = $('[data-testid=bump-link]')
    expect($links.length).toBeGreaterThanOrEqual(6)

    // Check that each link is localized and includes a title and intro
    $links.each((i, el) => {
      const linkUrl = $(el).attr('href')

      expect(linkUrl.startsWith('/en/')).toBe(true)
      expect(
        $(el).find('[data-testid=link-with-intro-title]').text().trim().length,
        `Did not find a title for the linked article ${linkUrl}`,
      ).toBeGreaterThan(0)
      expect(
        $(el).find('[data-testid=link-with-intro-intro]').text().trim().length,
        `Did not find an intro for the linked article ${linkUrl}`,
      ).toBeGreaterThan(0)

      // ensure there's no unwanted nested HTML
      expect($(el).find('p').length).toBe(1)
      expect($(el).find('a').length).toBe(0)
      expect($(el).find('p p').length).toBe(0)
    })
  })
})

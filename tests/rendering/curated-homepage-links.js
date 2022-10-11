import { getDOM } from '../helpers/supertest.js'
import { jest } from '@jest/globals'

describe('curated homepage links', () => {
  jest.setTimeout(5 * 60 * 1000)

  test('English', async () => {
    const $ = await getDOM('/en')
    const $links = $('[data-testid=bump-link]')
    expect($links.length).toBeGreaterThanOrEqual(8)

    // Check that each link is localized and includes a title and intro
    $links.each((i, el) => {
      const linkUrl = $(el).attr('href')

      expect(linkUrl.startsWith('/en/')).toBe(true)
      expect(
        $(el).find('[data-testid=link-with-intro-title]').text().trim().length,
        `Did not find a title for the linked article ${linkUrl}`
      ).toBeGreaterThan(0)
      expect(
        $(el).find('[data-testid=link-with-intro-intro]').text().trim().length,
        `Did not find an intro for the linked article ${linkUrl}`
      ).toBeGreaterThan(0)

      // ensure there's no unwanted nested HTML
      expect($(el).find('p').length).toBe(1)
      expect($(el).find('a').length).toBe(0)
      expect($(el).find('p p').length).toBe(0)
    })
  })

  test('Japanese', async () => {
    const $ = await getDOM('/ja')
    const $links = $('[data-testid=bump-link]')
    expect($links.length).toBeGreaterThanOrEqual(8)

    // Check that each link is localized and includes a title and intro
    $links.each((i, el) => {
      const linkUrl = $(el).attr('href')

      expect(linkUrl.startsWith('/ja/')).toBe(true)
      expect(
        $(el).find('[data-testid=link-with-intro-title]').text().trim().length,
        `Did not find a title for the linked article ${linkUrl}`
      ).toBeGreaterThan(0)
      expect(
        $(el).find('[data-testid=link-with-intro-intro]').text().trim().length,
        `Did not find an intro for the linked article ${linkUrl}`
      ).toBeGreaterThan(0)
    })
  })
})

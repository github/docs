const { getDOM } = require('../helpers')

describe('curated homepage links', () => {
  jest.setTimeout(5 * 60 * 1000)

  test('English', async () => {
    const $ = await getDOM('/en')
    const $links = $('a.link-with-intro')
    expect($links.length).toBeGreaterThanOrEqual(8)

    // Check that each link is localized and includes a title and intro
    $links.each((i, el) => {
      const linkUrl = $(el).attr('href')

      expect(linkUrl.startsWith('/en/')).toBe(true)
      expect(
        $(el).find('.link-with-intro-title').text().trim().length,
        `Did not find a title for the linked article ${linkUrl}`
      ).toBeGreaterThan(0)
      expect(
        $(el).find('.link-with-intro-intro').text().trim().length,
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
    const $links = $('a.link-with-intro')
    expect($links.length).toBeGreaterThanOrEqual(8)

    // Check that each link is localized and includes a title and intro
    $links.each((i, el) => {
      const linkUrl = $(el).attr('href')

      expect(linkUrl.startsWith('/ja/')).toBe(true)
      expect(
        $(el).find('.link-with-intro-title').text().trim().length,
        `Did not find a title for the linked article ${linkUrl}`
      ).toBeGreaterThan(0)
      expect(
        $(el).find('.link-with-intro-intro').text().trim().length,
        `Did not find an intro for the linked article ${linkUrl}`
      ).toBeGreaterThan(0)
    })
  })
})

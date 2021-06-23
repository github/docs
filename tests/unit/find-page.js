const path = require('path')
const Page = require('../../lib/page')
const findPage = require('../../lib/find-page')

describe('find page', () => {
  jest.setTimeout(1000 * 1000)

  test('falls back to the English page if it can\'t find a localized page', async () => {
    const page = await Page.init({
      relativePath: 'page-that-does-not-exist-in-translations-dir.md',
      basePath: path.join(__dirname, '../fixtures'),
      languageCode: 'en'
    })

    const englishPermalink = page.permalinks[0].href
    const japanesePermalink = englishPermalink.replace('/en/', '/ja/')

    // add named keys
    const pageMap = {
      [englishPermalink]: page
    }

    const localizedPage = findPage(japanesePermalink, pageMap, {})
    expect(typeof localizedPage.title).toBe('string')
  })

  test('follows redirects', async () => {
    const page = await Page.init({
      relativePath: 'page-with-redirects.md',
      basePath: path.join(__dirname, '../fixtures'),
      languageCode: 'en'
    })

    const englishPermalink = page.permalinks[0].href
    const redirectToFind = '/some-old-path'

    // add named keys
    const pageMap = {
      [englishPermalink]: page
    }

    const redirectedPage = findPage(redirectToFind, pageMap, page.buildRedirects())
    expect(typeof redirectedPage.title).toBe('string')
  })
})

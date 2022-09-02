import { jest } from '@jest/globals'
import { fileURLToPath } from 'url'
import path from 'path'
import Page from '../../lib/page.js'
import findPage from '../../lib/find-page.js'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

describe('find page', () => {
  jest.setTimeout(1000 * 1000)

  test('follows redirects', async () => {
    const page = await Page.init({
      relativePath: 'page-with-redirects.md',
      basePath: path.join(__dirname, '../fixtures'),
      languageCode: 'en',
    })

    const englishPermalink = page.permalinks[0].href
    const redirectToFind = '/some-old-path'

    // add named keys
    const pageMap = {
      [englishPermalink]: page,
    }

    const redirectedPage = findPage(redirectToFind, pageMap, page.buildRedirects())
    expect(typeof redirectedPage.title).toBe('string')
  })
})

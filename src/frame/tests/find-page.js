import { fileURLToPath } from 'url'
import path from 'path'

import { describe, expect, test, vi } from 'vitest'

import Page from '#src/frame/lib/page.js'
import findPage from '#src/frame/lib/find-page.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

describe('find page', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  test('follows redirects', async () => {
    const page = await Page.init({
      relativePath: 'page-with-redirects.md',
      basePath: path.join(__dirname, '../../../src/fixtures/fixtures'),
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

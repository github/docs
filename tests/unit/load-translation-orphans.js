import path from 'path'
import { fileURLToPath } from 'url'

import { expect } from '@jest/globals'

import languages from '../../lib/languages.js'
import Page from '../../lib/page.js'
import { loadPageMap, correctTranslationOrphans } from '../../lib/page-data.js'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

describe('loading page map with translation orphans', () => {
  test('inject missing translations from English', async () => {
    const basePath = path.join(__dirname, '../fixtures')
    const page = await Page.init({
      relativePath: 'page-that-does-not-exist-in-translations-dir.md',
      basePath,
      languageCode: 'en',
    })
    console.assert(page, 'page could not be loaded')

    const pageList = [page]
    const pageMap = await loadPageMap(await correctTranslationOrphans(pageList, basePath))
    // It should make a copy of the English into each language
    expect(Object.keys(pageMap).length).toBe(Object.keys(languages).length)

    // +1 for the test just above, 2 tests per language.
    expect.assertions(1 + Object.keys(languages).length * 2)

    for (const languageCode of Object.keys(languages)) {
      for (const permalink of page.permalinks) {
        const translationHref = permalink.href.replace('/en', `/${languageCode}`)
        const translationPage = pageMap[translationHref]
        expect(translationPage).toBeTruthy()
        expect(translationPage.languageCode).toBe(languageCode)
      }
    }
  })

  test('remove translation pages that were not in English', async () => {
    const basePath = path.join(__dirname, '../fixtures')
    const page = await Page.init({
      relativePath: 'page-that-does-not-exist-in-translations-dir.md',
      basePath,
      languageCode: 'en',
    })
    console.assert(page, 'page could not be loaded')
    const orphan = await Page.init({
      relativePath: 'article-with-videos.md',
      basePath,
      languageCode: 'ja',
    })
    console.assert(orphan, 'page could not be loaded')
    const orphanPermalinks = orphan.permalinks.map((p) => p.href)

    const pageList = await correctTranslationOrphans([page, orphan], basePath)
    const pageMap = await loadPageMap(pageList)
    expect(pageMap[orphanPermalinks[0]]).toBeFalsy()
    expect(Object.keys(pageMap).length).toBe(Object.keys(languages).length)
  })
})

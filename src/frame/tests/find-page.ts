import { fileURLToPath } from 'url'
import path from 'path'

import { describe, expect, test, vi } from 'vitest'

import Page from '@/frame/lib/page'
import findPage from '@/frame/lib/find-page'
import type { Page as PageType } from '@/types'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

describe('find page', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  test('follows redirects', async () => {
    const page = await Page.init({
      relativePath: 'page-with-redirects.md',
      basePath: path.join(__dirname, '../../../src/fixtures/fixtures'),
      languageCode: 'en',
    })

    const englishPermalink = page?.permalinks[0].href
    if (!page || !englishPermalink) {
      throw new Error('Page or permalink not found')
    }
    const redirectToFind = '/some-old-path'

    const pageMap = {
      [englishPermalink]: page,
    }

    const redirectedPage = findPage(
      redirectToFind,
      pageMap as unknown as Record<string, PageType>,
      page.buildRedirects(),
    )
    expect(redirectedPage).toBeDefined()
    expect(typeof redirectedPage?.title).toBe('string')
  })

  test('finds a page by an href without a language prefix', async () => {
    const page = await Page.init({
      relativePath: 'page-with-redirects.md',
      basePath: path.join(__dirname, '../../../src/fixtures/fixtures'),
      languageCode: 'en',
    })
    const permalink = page?.permalinks[0]
    if (!page || !permalink) {
      throw new Error('Page or permalink not found')
    }
    const pageMap = { [permalink.href]: page } as unknown as Record<string, PageType>

    // The first two letters of these paths are not a language code.
    expect(findPage(`${permalink.hrefWithoutLanguage}#a-fragment`, pageMap, {})).toBe(page)
    expect(findPage(permalink.hrefWithoutLanguage, pageMap, {})).toBe(page)
  })

  test('falls back to English for a language prefix that is not enabled', async () => {
    const page = await Page.init({
      relativePath: 'page-with-redirects.md',
      basePath: path.join(__dirname, '../../../src/fixtures/fixtures'),
      languageCode: 'en',
    })
    const permalink = page?.permalinks[0]
    if (!page || !permalink) {
      throw new Error('Page or permalink not found')
    }
    const pageMap = { [permalink.href]: page } as unknown as Record<string, PageType>

    // Unit tests run English-only, so `ja` is not an enabled language here.
    expect(findPage(`/ja${permalink.hrefWithoutLanguage}`, pageMap, {})).toBe(page)
  })
})

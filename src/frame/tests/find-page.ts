import { fileURLToPath } from 'url'
import path from 'path'

import { describe, expect, test, vi } from 'vitest'

import Page from '@/frame/lib/page'
import findPage from '@/frame/lib/find-page'

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

    // add named keys
    const pageMap = {
      [englishPermalink]: page,
    }

    const redirectedPage = findPage(
      redirectToFind,
      pageMap as any, // Using any due to type conflicts between different Page type definitions
      page.buildRedirects(),
    )
    expect(redirectedPage).toBeDefined()
    expect(typeof redirectedPage?.title).toBe('string')
  })
})

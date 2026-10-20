import { describe, expect, test } from 'vitest'

import getEnglishHeadings from '@/languages/lib/get-english-headings'
import type { Context, Page } from '@/types'

const pages = {
  '/en': {
    relativePath: 'index.md',
    markdown: '## Get started',
  },
  '/en/rest/git': {
    relativePath: 'rest/git/index.md',
    markdown: '## About Git database',
  },
  '/en/rest/git/blobs': {
    relativePath: 'rest/git/blobs.md',
    markdown: '## About Git blobs',
  },
} as unknown as Record<string, Page>

const context = { pages, redirects: {} } as Context

describe('getEnglishHeadings', () => {
  test('maps headings on index.md pages', () => {
    const page = { relativePath: 'rest/git/index.md', markdown: '## 見出し' }
    expect(getEnglishHeadings(page, context)).toEqual({ 見出し: 'About Git database' })
  })

  test('maps headings on non-index pages', () => {
    const page = { relativePath: 'rest/git/blobs.md', markdown: '## 見出し' }
    expect(getEnglishHeadings(page, context)).toEqual({ 見出し: 'About Git blobs' })
  })

  test('maps headings on the root index.md page', () => {
    const page = { relativePath: 'index.md', markdown: '## 見出し' }
    expect(getEnglishHeadings(page, context)).toEqual({ 見出し: 'Get started' })
  })
})

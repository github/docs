import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

import findIndexablePages from '@/search/scripts/scrape/lib/find-indexable-pages'
import type { Page } from '@/search/scripts/scrape/types'

const { loadPagesMock } = vi.hoisted(() => ({
  loadPagesMock: vi.fn(),
}))

vi.mock('@/frame/lib/page-data', () => ({
  loadPages: loadPagesMock,
}))

function makePage(overrides: Partial<Page> = {}): Page {
  return {
    relativePath: 'visible/page.md',
    languageCode: 'en',
    permalinks: [],
    ...overrides,
  }
}

describe('findIndexablePages', () => {
  beforeEach(() => {
    loadPagesMock.mockResolvedValue([
      makePage({ relativePath: 'index.md' }),
      makePage({ relativePath: 'visible/page.md' }),
      makePage({ relativePath: 'hidden/page.md', hidden: true }),
      makePage({
        relativePath: 'hidden-product/page.md',
        parentProduct: { hidden: true, wip: false },
      }),
      makePage({
        relativePath: 'wip-product/page.md',
        parentProduct: { hidden: false, wip: true },
      }),
      makePage({
        relativePath: 'hidden-wip-product/page.md',
        parentProduct: { hidden: true, wip: true },
      }),
    ])
    vi.spyOn(console, 'log').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('excludes hidden pages, home pages, and pages in hidden or WIP products', async () => {
    await expect(findIndexablePages()).resolves.toEqual([
      makePage({ relativePath: 'visible/page.md' }),
    ])
  })

  test('filters pages by relative path match', async () => {
    await expect(findIndexablePages('missing')).resolves.toEqual([])
    await expect(findIndexablePages('visible')).resolves.toEqual([
      makePage({ relativePath: 'visible/page.md' }),
    ])
  })
})

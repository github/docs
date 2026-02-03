import { describe, expect, test, vi } from 'vitest'
import { getLinkData } from '@/article-api/lib/get-link-data'
import type { Context, Page, Permalink } from '@/types'

// Helper to create a minimal mock page
function createMockPage(options: {
  title?: string
  intro?: string
  permalinks?: Partial<Permalink>[]
}): Page {
  const page = {
    title: options.title || 'Test Title',
    intro: options.intro,
    permalinks: (options.permalinks || []) as Permalink[],
    renderTitle: vi.fn().mockResolvedValue(options.title || 'Test Title'),
    renderProp: vi.fn().mockResolvedValue(options.intro || ''),
  }
  return page as unknown as Page
}

// Helper to create a minimal context
function createContext(currentVersion = 'free-pro-team@latest'): Context {
  return { currentVersion } as unknown as Context
}

describe('getLinkData', () => {
  describe('when page is not found', () => {
    test('returns href as both href and title when page not resolved', async () => {
      const resolvePath = vi.fn().mockReturnValue(undefined)
      const context = createContext()

      const result = await getLinkData(
        '/en/missing-page',
        'en',
        '/en/current',
        context,
        resolvePath,
      )

      expect(result).toEqual({
        href: '/en/missing-page',
        title: '/en/missing-page',
      })
    })
  })

  describe('when page is found', () => {
    test('returns rendered title from page', async () => {
      const page = createMockPage({ title: 'My Page Title' })
      const resolvePath = vi.fn().mockReturnValue(page)
      const context = createContext()

      const result = await getLinkData('/en/some-page', 'en', '/en/current', context, resolvePath)

      expect(result.title).toBe('My Page Title')
      expect(page.renderTitle).toHaveBeenCalledWith(context, { unwrap: true })
    })

    test('returns rendered intro when page has intro', async () => {
      const page = createMockPage({
        title: 'Page',
        intro: 'This is the intro text',
      })
      const resolvePath = vi.fn().mockReturnValue(page)
      const context = createContext()

      const result = await getLinkData('/en/some-page', 'en', '/en/current', context, resolvePath)

      expect(result.intro).toBe('This is the intro text')
      expect(page.renderProp).toHaveBeenCalledWith('intro', context, { textOnly: true })
    })

    test('returns empty intro when page has no intro', async () => {
      const page = createMockPage({ title: 'Page', intro: undefined })
      const resolvePath = vi.fn().mockReturnValue(page)
      const context = createContext()

      const result = await getLinkData('/en/some-page', 'en', '/en/current', context, resolvePath)

      expect(result.intro).toBe('')
      expect(page.renderProp).not.toHaveBeenCalled()
    })

    test('uses permalink href when matching permalink found', async () => {
      const page = createMockPage({
        title: 'Page',
        permalinks: [
          { languageCode: 'en', pageVersion: 'free-pro-team@latest', href: '/en/resolved-path' },
        ],
      })
      const resolvePath = vi.fn().mockReturnValue(page)
      const context = createContext('free-pro-team@latest')

      const result = await getLinkData(
        '/en/original-href',
        'en',
        '/en/current',
        context,
        resolvePath,
      )

      expect(result.href).toBe('/en/resolved-path')
    })

    test('falls back to original href when no matching permalink', async () => {
      const page = createMockPage({
        title: 'Page',
        permalinks: [{ languageCode: 'ja', pageVersion: 'free-pro-team@latest', href: '/ja/page' }],
      })
      const resolvePath = vi.fn().mockReturnValue(page)
      const context = createContext('free-pro-team@latest')

      const result = await getLinkData(
        '/en/original-href',
        'en',
        '/en/current',
        context,
        resolvePath,
      )

      expect(result.href).toBe('/en/original-href')
    })
  })

  describe('resolvePath function usage', () => {
    test('passes correct arguments to resolvePath', async () => {
      const page = createMockPage({ title: 'Page' })
      const resolvePath = vi.fn().mockReturnValue(page)
      const context = createContext()

      await getLinkData('/en/target', 'en', '/en/current', context, resolvePath)

      expect(resolvePath).toHaveBeenCalledWith('/en/target', 'en', '/en/current', context)
    })
  })
})

import { describe, expect, test } from 'vitest'
import { resolvePath } from '@/article-api/lib/resolve-path'
import type { Context, Page } from '@/types'

function createMockPage(relativePath: string): Page {
  return {
    relativePath,
    permalinks: [],
  } as unknown as Page
}

function createContext(pages: Record<string, Page>): Context {
  return { pages } as unknown as Context
}

describe('resolvePath', () => {
  describe('external URLs', () => {
    test('returns undefined for http URLs', () => {
      const context = createContext({})
      const result = resolvePath('http://example.com', 'en', '/en/copilot', context)
      expect(result).toBeUndefined()
    })

    test('returns undefined for https URLs', () => {
      const context = createContext({})
      const result = resolvePath('https://example.com/path', 'en', '/en/copilot', context)
      expect(result).toBeUndefined()
    })
  })

  describe('missing context.pages', () => {
    test('returns undefined when context.pages is undefined', () => {
      const context = {} as Context
      const result = resolvePath('/en/copilot', 'en', '/en', context)
      expect(result).toBeUndefined()
    })
  })

  describe('language-prefixed absolute paths', () => {
    test('finds page with exact language-prefixed path', () => {
      const page = createMockPage('copilot/quickstart.md')
      const context = createContext({
        '/en/copilot/quickstart': page,
      })
      const result = resolvePath('/en/copilot/quickstart', 'en', '/en/copilot', context)
      expect(result).toBe(page)
    })

    test('handles trailing slash in href', () => {
      const page = createMockPage('copilot/quickstart.md')
      const context = createContext({
        '/en/copilot/quickstart': page,
      })
      const result = resolvePath('/en/copilot/quickstart/', 'en', '/en/copilot', context)
      expect(result).toBe(page)
    })
  })

  describe('paths with leading slash (relative to pathname)', () => {
    test('resolves path relative to current pathname', () => {
      const page = createMockPage('copilot/get-started.md')
      const context = createContext({
        '/en/copilot/get-started': page,
      })
      const result = resolvePath('/get-started', 'en', '/en/copilot', context)
      expect(result).toBe(page)
    })

    test('handles nested paths relative to pathname', () => {
      const page = createMockPage('copilot/tutorials/basics.md')
      const context = createContext({
        '/en/copilot/tutorials/basics': page,
      })
      const result = resolvePath('/tutorials/basics', 'en', '/en/copilot', context)
      expect(result).toBe(page)
    })
  })

  describe('relative paths without leading slash', () => {
    test('resolves relative path by joining with pathname', () => {
      const page = createMockPage('copilot/quickstart.md')
      const context = createContext({
        '/en/copilot/quickstart': page,
      })
      const result = resolvePath('quickstart', 'en', '/en/copilot', context)
      expect(result).toBe(page)
    })
  })

  describe('versioned keys (endsWith matching)', () => {
    test('finds versioned page using endsWith strategy', () => {
      const page = createMockPage('copilot/index.md')
      const context = createContext({
        '/en/enterprise-cloud@latest/copilot': page,
      })
      const result = resolvePath('/copilot', 'en', '/en', context)
      expect(result).toBe(page)
    })

    test('finds page when key has trailing slash', () => {
      const page = createMockPage('copilot/index.md')
      const context = createContext({
        '/en/copilot/': page,
      })
      const result = resolvePath('/en/copilot', 'en', '/en', context)
      expect(result).toBe(page)
    })
  })

  describe('content-root absolute paths', () => {
    test('resolves /content/ href to the language-prefixed page', () => {
      const page = createMockPage('pull-requests/x.md')
      const context = createContext({
        '/en/pull-requests/x': page,
      })
      const result = resolvePath('/content/pull-requests/x', 'en', '/en/copilot', context)
      expect(result).toBe(page)
    })

    test('resolves /content/ href through a versioned key', () => {
      const page = createMockPage('admin/x.md')
      const context = createContext({
        '/en/enterprise-cloud@latest/admin/x': page,
      })
      const result = resolvePath('/content/admin/x/', 'en', '/en/copilot', context)
      expect(result).toBe(page)
    })

    test('resolves /content/ href for a non-English language', () => {
      const enPage = createMockPage('pull-requests/x.md')
      const jaPage = createMockPage('pull-requests/x.md')
      const context = createContext({
        '/en/pull-requests/x': enPage,
        '/ja/pull-requests/x': jaPage,
      })
      const result = resolvePath('/content/pull-requests/x', 'ja', '/ja/copilot', context)
      expect(result).toBe(jaPage)
    })

    test('skips /content/ children not available in the current version', () => {
      const ghesVersion = 'enterprise-server@3.20'
      const dotcomOnly = {
        ...createMockPage('pull-requests/dotcom-only.md'),
        applicableVersions: ['free-pro-team@latest', 'enterprise-cloud@latest'],
      } as unknown as Page
      const everywhere = {
        ...createMockPage('rest/everywhere.md'),
        applicableVersions: ['free-pro-team@latest', 'enterprise-cloud@latest', ghesVersion],
      } as unknown as Page
      const pages = {
        '/en/pull-requests/dotcom-only': dotcomOnly,
        '/en/rest/everywhere': everywhere,
      }
      const ghesContext = { pages, currentVersion: ghesVersion } as unknown as Context
      const dotcomContext = { pages, currentVersion: 'free-pro-team@latest' } as unknown as Context
      const pathname = `/en/${ghesVersion}/pull-requests`

      expect(
        resolvePath('/content/pull-requests/dotcom-only', 'en', pathname, ghesContext),
      ).toBeUndefined()
      expect(resolvePath('/content/rest/everywhere', 'en', pathname, ghesContext)).toBe(everywhere)
      expect(
        resolvePath('/content/pull-requests/dotcom-only', 'en', '/en/pull-requests', dotcomContext),
      ).toBe(dotcomOnly)
    })
  })

  describe('not found cases', () => {
    test('returns undefined when page does not exist', () => {
      const context = createContext({
        '/en/other': createMockPage('other.md'),
      })
      const result = resolvePath('/en/copilot', 'en', '/en', context)
      expect(result).toBeUndefined()
    })
  })
})

import { describe, expect, test } from 'vitest'
import { resolvePath } from '@/article-api/lib/resolve-path'
import type { Context, Page } from '@/types'

// Helper to create a minimal mock page
function createMockPage(relativePath: string): Page {
  return {
    relativePath,
    permalinks: [],
  } as unknown as Page
}

// Helper to create a minimal context with pages
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
      // The key ends with the path portion after the version string
      const context = createContext({
        '/en/enterprise-cloud@latest/copilot': page,
      })
      // When looking for /copilot, strategy 4 will find keys ending with /copilot
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

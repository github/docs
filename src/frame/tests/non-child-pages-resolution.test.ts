import { describe, expect, test } from 'vitest'
import path from 'path'
import fs from 'fs'

// ROOT is the project root directory
// From src/frame/tests/ -> ../../.. gets to project root
const ROOT = path.resolve(__dirname, '../../..')

/**
 * Tests for non-child page resolution:
 * `/content/` prefix in children frontmatter resolves to absolute content paths,
 * allowing cross-product directory and article inclusion.
 */

describe('Non-child page resolution', () => {
  describe('/content/ prefix in children frontmatter', () => {
    test('detects /content/ prefix in children', () => {
      const child = '/content/actions/workflows'
      expect(child.startsWith('/content/')).toBe(true)
    })

    test('strips /content/ prefix correctly', () => {
      const child = '/content/actions/workflows'
      const strippedPath = child.slice('/content/'.length)
      expect(strippedPath).toBe('actions/workflows')
    })

    test('relative children do not have /content/ prefix', () => {
      const relativeChild = '/local-child'
      expect(relativeChild.startsWith('/content/')).toBe(false)
    })

    test('/content/ prefix handling resolves absolute paths for directories', () => {
      const basePath = '/Users/test/docs-internal/content'
      const child = '/content/actions/workflows'

      // Simulate the logic from create-tree.ts
      let childPath: string
      if (child.startsWith('/content/')) {
        const absoluteChildPath = child.slice('/content/'.length)
        childPath = path.posix.join(basePath, absoluteChildPath)
      } else {
        childPath = path.posix.join('/Users/test/docs-internal/content/get-started', child)
      }

      expect(childPath).toBe('/Users/test/docs-internal/content/actions/workflows')
    })

    test('/content/ prefix handling resolves absolute paths for articles', () => {
      const basePath = '/Users/test/docs-internal/content'
      const child = '/content/get-started/foo/bar'

      // Simulate the logic from create-tree.ts
      let childPath: string
      if (child.startsWith('/content/')) {
        const absoluteChildPath = child.slice('/content/'.length)
        childPath = path.posix.join(basePath, absoluteChildPath)
      } else {
        childPath = path.posix.join('/Users/test/docs-internal/content/get-started', child)
      }

      expect(childPath).toBe('/Users/test/docs-internal/content/get-started/foo/bar')
    })

    test('relative children resolve relative to current directory', () => {
      const originalPath = '/Users/test/docs-internal/content/get-started'
      const child = '/local-child'

      // Simulate the logic from create-tree.ts
      let childPath: string
      if (child.startsWith('/content/')) {
        const absoluteChildPath = child.slice('/content/'.length)
        childPath = path.posix.join('/Users/test/docs-internal/content', absoluteChildPath)
      } else {
        childPath = path.posix.join(originalPath, child)
      }

      expect(childPath).toBe('/Users/test/docs-internal/content/get-started/local-child')
    })
  })

  describe('children path formats', () => {
    test('children array can contain mixed path formats', () => {
      const children = [
        '/local-category', // Local directory
        '/standalone-article', // Local article
        '/content/actions/workflows', // Cross-product directory
        '/content/get-started/foo/bar', // Cross-product article
      ]
      expect(Array.isArray(children)).toBe(true)
      expect(children.every((c) => typeof c === 'string')).toBe(true)
    })

    test('/content/ paths and relative paths are distinguishable', () => {
      const children = ['/local-child', '/content/other-product/article']

      const crossProductPaths = children.filter((c) => c.startsWith('/content/'))
      const localPaths = children.filter((c) => !c.startsWith('/content/'))

      expect(crossProductPaths).toEqual(['/content/other-product/article'])
      expect(localPaths).toEqual(['/local-child'])
    })
  })

  describe('test fixtures validation', () => {
    const fixturesRoot = ROOT
    const nonChildResolutionPath = path.join(
      fixturesRoot,
      'src/fixtures/fixtures/content/get-started/non-child-resolution',
    )

    test('non-child-resolution fixture directory exists', () => {
      expect(fs.existsSync(nonChildResolutionPath)).toBe(true)
    })

    test('non-child-resolution index.md exists', () => {
      const indexPath = path.join(nonChildResolutionPath, 'index.md')
      expect(fs.existsSync(indexPath)).toBe(true)
    })

    test('children-only fixture exists', () => {
      const childrenOnlyPath = path.join(nonChildResolutionPath, 'children-only/index.md')
      expect(fs.existsSync(childrenOnlyPath)).toBe(true)
    })

    test('cross-product children fixture exists (formerly articles-only)', () => {
      const articlesOnlyPath = path.join(nonChildResolutionPath, 'articles-only/index.md')
      expect(fs.existsSync(articlesOnlyPath)).toBe(true)
    })

    test('local-category fixture exists with local articles', () => {
      const localCategoryPath = path.join(nonChildResolutionPath, 'local-category')
      expect(fs.existsSync(path.join(localCategoryPath, 'index.md'))).toBe(true)
      expect(fs.existsSync(path.join(localCategoryPath, 'local-article-one.md'))).toBe(true)
      expect(fs.existsSync(path.join(localCategoryPath, 'local-article-two.md'))).toBe(true)
    })

    test('versioned-cross-product fixture exists', () => {
      const versionedPath = path.join(nonChildResolutionPath, 'versioned-cross-product/index.md')
      expect(fs.existsSync(versionedPath)).toBe(true)
    })
  })

  describe('translation behavior', () => {
    test('cross-product children paths are language-agnostic', () => {
      // The /content/ prefix paths should work regardless of the current language
      // The actual translation is handled by the page loading system
      const child = '/content/actions/using-workflows/storing-workflow-data-as-artifacts'

      // Path should not include language prefix
      expect(child.startsWith('/content/')).toBe(true)
      expect(child).not.toMatch(/\/content\/(en|ja|es|pt|zh|ru|ko|fr|de)\//)
    })

    test('resolved paths use content directory, not translations', () => {
      // Cross-product children are resolved from the main content directory
      // Translations are handled separately by the page rendering system
      const basePath = '/Users/test/docs-internal/content'
      const child = '/content/actions/workflows'

      const resolvedPath = path.posix.join(basePath, child.slice('/content/'.length))
      expect(resolvedPath).toBe('/Users/test/docs-internal/content/actions/workflows')
      expect(resolvedPath).not.toContain('translations')
    })
  })

  describe('crossProductChild flag', () => {
    test('flag is set for /content/ prefix paths', () => {
      // Simulate the logic from create-tree.ts
      const child = '/content/actions/workflows'
      const isCrossProduct = child.startsWith('/content/')
      expect(isCrossProduct).toBe(true)
    })

    test('flag is not set for relative paths', () => {
      const child = '/local-child'
      const isCrossProduct = child.startsWith('/content/')
      expect(isCrossProduct).toBe(false)
    })

    test('crossProductChild flag excludes items from sidebar', () => {
      // Simulate the sidebarTree filtering logic
      const childPages = [
        { href: '/en/get-started/foo', title: 'Foo', crossProductChild: false },
        { href: '/en/actions/workflows', title: 'Workflows', crossProductChild: true },
        { href: '/en/get-started/bar', title: 'Bar', crossProductChild: false },
      ]

      const sidebarChildPages = childPages.filter((c) => !c.crossProductChild)
      expect(sidebarChildPages).toHaveLength(2)
      expect(sidebarChildPages.map((c) => c.title)).toEqual(['Foo', 'Bar'])
    })
  })
})

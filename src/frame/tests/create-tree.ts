import fs from 'fs/promises'

import { describe, expect, test, vi } from 'vitest'

import createTree from '@/frame/lib/create-tree'
import { setCategoryApplicableVersions } from '@/frame/lib/page-data'
import type { Page, UnversionedTree } from '@/types'

const logger = vi.hoisted(() => ({ error: vi.fn(), warn: vi.fn(), info: vi.fn(), debug: vi.fn() }))
vi.mock('@/observability/logger', () => ({ createLogger: () => logger }))

const contentDir = 'src/fixtures/fixtures/content'

function flattenPages(tree: UnversionedTree): Page[] {
  return [tree.page, ...tree.childPages.flatMap(flattenPages)]
}

function stubTree(relativePath: string, versions: string[], childPages: UnversionedTree[] = []) {
  const page = {
    relativePath,
    languageCode: 'en',
    title: relativePath,
    applicableVersions: versions,
    permalinks: [],
  } as unknown as Page
  return { page, children: [], childPages } as UnversionedTree
}

describe('createTree', () => {
  test('reuses every unchanged page from the previous tree', async () => {
    const first = (await createTree(contentDir)) as UnversionedTree
    const second = (await createTree(contentDir, undefined, first)) as UnversionedTree

    const firstPages = flattenPages(first)
    const secondPages = flattenPages(second)
    expect(firstPages.length).toBeGreaterThan(1)
    expect(secondPages.length).toBe(firstPages.length)
    const notReused = secondPages.filter((page, i) => page !== firstPages[i])
    expect(notReused.map((page) => page.relativePath)).toEqual([])
  })

  test('revisits a declared child that an earlier build skipped', async () => {
    const first = (await createTree(contentDir)) as UnversionedTree
    const declared = [...first.children]
    const skipped = declared[1]
    // Missing early-access content leaves this shape: declared children kept, rendered list filtered.
    first.page.children = declared.filter((child) => child !== skipped)
    first.childPages.splice(1, 1)

    const second = (await createTree(contentDir, undefined, first)) as UnversionedTree

    expect(second.page).toBe(first.page)
    expect(second.children).toEqual(declared)
    expect(second.page.children).toEqual(declared)
    expect(second.childPages.length).toBe(declared.length)
    const previousPages = new Set(first.childPages.map((tree) => tree.page))
    const reused = second.childPages.filter((tree) => previousPages.has(tree.page))
    expect(reused.length).toBe(declared.length - 1)
  })

  test('warns once for missing early-access content across rebuilds', async () => {
    const missingPath = 'content/early-access/does-not-exist'
    logger.warn.mockClear()

    expect(await createTree(missingPath)).toBeUndefined()
    expect(await createTree(missingPath)).toBeUndefined()

    expect(logger.warn).toHaveBeenCalledTimes(1)
  })

  test('stores the file mtime on the page', async () => {
    const tree = (await createTree(contentDir)) as UnversionedTree
    const { mtimeMs } = await fs.stat(tree.page.fullPath)
    expect(tree.page.mtime).toBe(mtimeMs)
  })
})

describe('setCategoryApplicableVersions', () => {
  test('narrows a category to the versions of its children', () => {
    const category = stubTree(
      'rest/credentials/index.md',
      ['free-pro-team@latest', 'enterprise-cloud@latest', 'enterprise-server@3.20'],
      [
        stubTree('rest/credentials/article.md', [
          'free-pro-team@latest',
          'enterprise-cloud@latest',
        ]),
      ],
    )
    const root = stubTree('index.md', ['free-pro-team@latest'], [category])

    setCategoryApplicableVersions(root)

    expect(category.page.applicableVersions).toEqual([
      'free-pro-team@latest',
      'enterprise-cloud@latest',
    ])
    expect(category.page.permalinks.map((permalink) => permalink.pageVersion)).toEqual([
      'free-pro-team@latest',
      'enterprise-cloud@latest',
    ])
  })

  test('carries a leaf version change up through an already narrowed tree', () => {
    const allVersions = ['free-pro-team@latest', 'enterprise-cloud@latest']
    const article = stubTree('rest/credentials/article.md', ['free-pro-team@latest'])
    const category = stubTree('rest/credentials/index.md', allVersions, [article])
    const product = stubTree('rest/index.md', allVersions, [category])
    const root = stubTree('index.md', allVersions, [product])
    setCategoryApplicableVersions(root)
    expect(product.page.applicableVersions).toEqual(['free-pro-team@latest'])

    article.page.applicableVersions = allVersions
    setCategoryApplicableVersions(root)

    expect(category.page.applicableVersions).toEqual(allVersions)
    expect(product.page.applicableVersions).toEqual(allVersions)
  })

  test('skips a category without a childPages array, as in translated trees', () => {
    const leafCategory = stubTree('rest/empty/index.md', ['free-pro-team@latest'])
    delete (leafCategory as Partial<UnversionedTree>).childPages
    const root = stubTree('index.md', ['free-pro-team@latest'], [leafCategory])

    expect(() => setCategoryApplicableVersions(root)).not.toThrow()
    expect(leafCategory.page.applicableVersions).toEqual(['free-pro-team@latest'])
  })
})

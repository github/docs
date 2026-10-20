import path from 'path'
import { fileURLToPath } from 'url'

import { describe, expect, test } from 'vitest'

import getPopularPages, { buildRedirects } from '@/search/scripts/scrape/lib/popular-pages'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const fixturesDir = path.join(__dirname, 'fixtures/popular-pages')

const pages = [
  { relativePath: 'foo/new.md', redirect_from: ['/foo/old'] },
  { relativePath: 'actions/index.md', redirect_from: ['/old-actions/'] },
  { relativePath: 'bar/page.md', redirect_from: ['/bar/old-1', '/bar/old-2/'] },
  { relativePath: 'baz/legacy.md' },
  { relativePath: 'baz/new.md', redirect_from: ['/baz/legacy'] },
]

describe('buildRedirects', () => {
  test('maps redirect_from paths to the same key build-records uses for popularity', () => {
    expect(buildRedirects(pages)).toEqual({
      'foo/old': 'foo/new',
      'old-actions': 'actions',
      'bar/old-1': 'bar/page',
      'bar/old-2': 'bar/page',
    })
  })

  test('skips redirect_from paths that are still live pages', () => {
    expect(buildRedirects(pages)['baz/legacy']).toBeUndefined()
  })
})

describe('getPopularPages', () => {
  test('combines counts from old and new paths of a moved page', async () => {
    const popularPages = await getPopularPages(fixturesDir, buildRedirects(pages), 'fpt', 'en')
    expect(popularPages['get-started']).toBe(1)
    expect(popularPages['foo/new']).toBe(0.52)
    expect(popularPages['foo/old']).toBeUndefined()
  })

  test('combines counts from every redirect_from path of one page', async () => {
    const popularPages = await getPopularPages(fixturesDir, buildRedirects(pages), 'fpt', 'en')
    expect(popularPages['bar/page']).toBe(0.08)
    expect(popularPages['bar/old-1']).toBeUndefined()
    expect(popularPages['bar/old-2']).toBeUndefined()
  })

  test('applies redirects of index pages to the key without a trailing slash', async () => {
    const popularPages = await getPopularPages(fixturesDir, buildRedirects(pages), 'fpt', 'en')
    expect(popularPages.actions).toBe(0.4)
    expect(popularPages['actions/']).toBeUndefined()
  })

  test('keeps counts separate when a redirect_from path is still a live page', async () => {
    const popularPages = await getPopularPages(fixturesDir, buildRedirects(pages), 'fpt', 'en')
    expect(popularPages['baz/legacy']).toBe(0.2)
    expect(popularPages['baz/new']).toBe(0.005)
  })
})

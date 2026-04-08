import { describe, expect, test } from 'vitest'

import { flattenArticles, deriveStopWords, searchArticles } from '@/landings/lib/article-search'
import type { TocItem, ChildTocItem } from '@/landings/types'

const makeArticle = (
  title: string,
  intro: string,
  fullPath: string,
  category?: string[],
): ChildTocItem => ({
  title,
  intro,
  fullPath,
  category: category || null,
})

describe('flattenArticles', () => {
  test('flattens nested tocItems into leaf articles', () => {
    const items: TocItem[] = [
      {
        title: 'Parent',
        fullPath: '/parent',
        childTocItems: [
          { title: 'Child A', fullPath: '/parent/a', intro: 'Intro A' },
          { title: 'Child B', fullPath: '/parent/b', intro: 'Intro B' },
        ],
      },
    ]
    const result = flattenArticles(items)
    expect(result).toHaveLength(2)
    expect(result.map((a) => a.title)).toEqual(['Child A', 'Child B'])
  })

  test('deduplicates articles by fullPath', () => {
    const items: TocItem[] = [
      { title: 'Article', fullPath: '/same', intro: 'First' },
      { title: 'Article', fullPath: '/same', intro: 'Duplicate' },
    ]
    const result = flattenArticles(items)
    expect(result).toHaveLength(1)
  })

  test('sorts alphabetically by title', () => {
    const items: TocItem[] = [
      { title: 'Zebra', fullPath: '/z', intro: '' },
      { title: 'Alpha', fullPath: '/a', intro: '' },
      { title: 'Middle', fullPath: '/m', intro: '' },
    ]
    const result = flattenArticles(items)
    expect(result.map((a) => a.title)).toEqual(['Alpha', 'Middle', 'Zebra'])
  })

  test('excludes index pages (parents with children)', () => {
    const items: TocItem[] = [
      {
        title: 'Index page',
        fullPath: '/index',
        childTocItems: [{ title: 'Leaf', fullPath: '/index/leaf', intro: '' }],
      },
    ]
    const result = flattenArticles(items)
    expect(result).toHaveLength(1)
    expect(result[0].title).toBe('Leaf')
  })
})

describe('deriveStopWords', () => {
  test('finds words appearing in 80%+ of articles', () => {
    const articles = [
      makeArticle('GitHub Copilot agents', 'Use Copilot for coding', '/a'),
      makeArticle('GitHub Copilot billing', 'Manage Copilot billing', '/b'),
      makeArticle('GitHub Copilot extensions', 'Build Copilot extensions', '/c'),
      makeArticle('GitHub Copilot settings', 'Configure Copilot settings', '/d'),
      makeArticle('GitHub Copilot MCP', 'Use Copilot with MCP servers', '/e'),
    ]
    const stopWords = deriveStopWords(articles)
    expect(stopWords).toContain('copilot')
    expect(stopWords).toContain('github')
    expect(stopWords).not.toContain('agents')
    expect(stopWords).not.toContain('billing')
  })

  test('returns empty array for empty articles', () => {
    expect(deriveStopWords([])).toEqual([])
  })

  test('respects custom threshold', () => {
    const articles = [
      makeArticle('Copilot agents', 'Use agents', '/a'),
      makeArticle('Copilot billing', 'Manage billing', '/b'),
      makeArticle('Copilot settings', 'Configure settings', '/c'),
    ]
    // "copilot" appears in 3/3 = 100%, always a stop word
    expect(deriveStopWords(articles, 0.5)).toContain('copilot')
    // At threshold 1.0, only words in every single article qualify
    const strict = deriveStopWords(articles, 1.0)
    expect(strict).toContain('copilot')
    expect(strict).not.toContain('agents')
  })
})

describe('searchArticles', () => {
  const articles = [
    makeArticle('Copilot billing plans', 'Manage your billing', '/billing', ['Billing']),
    makeArticle('Copilot agent features', 'Use coding agents', '/agents', ['Agents']),
    makeArticle('Copilot extensions', 'Build and install extensions', '/ext', ['Extensions']),
  ]

  test('returns matching articles ranked by score', () => {
    const results = searchArticles(articles, 'billing', [])
    expect(results[0].title).toBe('Copilot billing plans')
  })

  test('returns all articles when query is only stop words', () => {
    const results = searchArticles(articles, 'copilot', ['copilot'])
    expect(results).toHaveLength(3)
  })

  test('strips stop words from query before matching', () => {
    const results = searchArticles(articles, 'copilot billing', ['copilot'])
    expect(results[0].title).toBe('Copilot billing plans')
  })

  test('returns empty array when no articles match', () => {
    const results = searchArticles(articles, 'xyznonexistent', [])
    expect(results).toHaveLength(0)
  })

  test('searches title, intro, and category fields', () => {
    const results = searchArticles(articles, 'agents', [])
    expect(results.length).toBeGreaterThan(0)
    expect(results.some((a) => a.title === 'Copilot agent features')).toBe(true)
  })
})

import { describe, expect, test } from 'vitest'

import {
  generate,
  pageExists,
  getPageTitle,
  getPageIntro,
  formatPageLine,
  renderLiquid,
  titleCase,
  loadConfig,
  type PageMap,
  type Rollup,
} from '../generate-llms-txt'
import type { Page } from '@/types'

function makePage(overrides: Partial<Page> = {}): Page {
  return {
    title: 'Test Page',
    shortTitle: '',
    intro: '',
    ...overrides,
  } as Page
}

function makePages(entries: Record<string, Partial<Page>>): PageMap {
  const pages: PageMap = {}
  for (const [path, overrides] of Object.entries(entries)) {
    pages[`/en/${path}`] = makePage(overrides)
  }
  return pages
}

function makeRollup(paths: string[], startScore = 1000): Rollup {
  const rollup: Rollup = {}
  for (let i = 0; i < paths.length; i++) {
    rollup[paths[i]] = startScore - i
  }
  return rollup
}

const baseConfig = {
  title: 'GitHub',
  description: 'Some description.',
  how_to_use_heading: 'How to use',
  how_to_use: 'Use the APIs below.',
  pinned_section_heading: 'Pinned',
  pinned_pages: [],
  top_n_popular_pages: 100,
  small_category_threshold: 3,
  excluded_categories: [],
  excluded_slugs: ['index'],
  more_pages_heading: 'More pages',
  auto_update_comment: '<!-- auto -->',
}

describe('titleCase', () => {
  test('capitalizes hyphenated words', () => {
    expect(titleCase('hello-world')).toBe('Hello World')
  })
  test('handles single word', () => {
    expect(titleCase('actions')).toBe('Actions')
  })
  test('handles empty string', () => {
    expect(titleCase('')).toBe('')
  })
})

describe('pageExists', () => {
  const pages = makePages({ 'actions/overview': {} })
  test('returns true for existing page', () => {
    expect(pageExists('actions/overview', pages)).toBe(true)
  })
  test('returns false for missing page', () => {
    expect(pageExists('actions/missing', pages)).toBe(false)
  })
})

describe('renderLiquid', () => {
  test('returns input unchanged when no liquid tags', async () => {
    expect(await renderLiquid('Plain title')).toBe('Plain title')
  })
  test('strips wrapping <p> tags from rendered output', async () => {
    const result = await renderLiquid('Hello {{ "world" }}')
    expect(result).not.toMatch(/^<p>/)
    expect(result).not.toMatch(/<\/p>$/)
  })
})

describe('getPageTitle', () => {
  test('returns shortTitle when present', async () => {
    const pages = makePages({ actions: { title: 'GitHub Actions', shortTitle: 'Actions' } })
    expect(await getPageTitle('/en/actions', pages)).toBe('Actions')
  })
  test('falls back to title when no shortTitle', async () => {
    const pages = makePages({ actions: { title: 'GitHub Actions' } })
    expect(await getPageTitle('/en/actions', pages)).toBe('GitHub Actions')
  })
  test('strips trailing " documentation"', async () => {
    const pages = makePages({ rest: { title: 'REST API documentation' } })
    expect(await getPageTitle('/en/rest', pages)).toBe('REST API')
  })
  test('falls back to title-cased slug for missing page', async () => {
    expect(await getPageTitle('/en/missing-page', {})).toBe('Missing Page')
  })
})

describe('getPageIntro', () => {
  test('returns intro when present', async () => {
    const pages = makePages({ actions: { intro: 'Automate workflows.' } })
    expect(await getPageIntro('/en/actions', pages)).toBe('Automate workflows.')
  })
  test('returns null when no intro', async () => {
    const pages = makePages({ actions: {} })
    expect(await getPageIntro('/en/actions', pages)).toBeNull()
  })
})

describe('formatPageLine', () => {
  test('formats with intro when present', async () => {
    const pages = makePages({ actions: { title: 'Actions', intro: 'About Actions.' } })
    expect(await formatPageLine('actions', pages)).toBe(
      '* [Actions](https://docs.github.com/en/actions): About Actions.',
    )
  })
  test('formats without intro', async () => {
    const pages = makePages({ actions: { title: 'Actions' } })
    expect(await formatPageLine('actions', pages)).toBe(
      '* [Actions](https://docs.github.com/en/actions)',
    )
  })
})

describe('loadConfig', () => {
  test('loads default config when no override path', () => {
    const cfg = loadConfig()
    expect(cfg.title).toBe('GitHub')
    expect(typeof cfg.description).toBe('string')
    expect(Array.isArray(cfg.pinned_pages)).toBe(true)
  })

  test('overrides default fields when override path is given', () => {
    const cfg = loadConfig('data/llms-txt/config-docs.yml')
    expect(cfg.title).toBe('GitHub Docs')
    expect(typeof cfg.description).toBe('string')
  })

  test('config-monolith inherits defaults', () => {
    const cfg = loadConfig('data/llms-txt/config-monolith.yml')
    expect(cfg.title).toBe('GitHub')
  })
})

describe('generate', () => {
  test('respects top_n_popular_pages limit', async () => {
    const pages = makePages({
      'actions/a': { title: 'A' },
      'actions/b': { title: 'B' },
      'actions/c': { title: 'C' },
      'actions/d': { title: 'D' },
    })
    const rollup = makeRollup(['actions/a', 'actions/b', 'actions/c', 'actions/d'])
    const out = await generate(pages, rollup, { ...baseConfig, top_n_popular_pages: 2 })
    expect(out).toMatch(/\[A\]/)
    expect(out).toMatch(/\[B\]/)
    expect(out).not.toMatch(/\[C\]/)
    expect(out).not.toMatch(/\[D\]/)
  })

  test('excludes categories from excluded_categories', async () => {
    const pages = makePages({
      'actions/overview': { title: 'Actions Overview' },
      'early-access/secret': { title: 'Secret' },
    })
    const rollup = makeRollup(['early-access/secret', 'actions/overview'])
    const out = await generate(pages, rollup, {
      ...baseConfig,
      excluded_categories: ['early-access'],
    })
    expect(out).toMatch(/Actions Overview/)
    expect(out).not.toMatch(/Secret/)
  })

  test('excludes slugs from excluded_slugs', async () => {
    const pages = makePages({
      'actions/overview': { title: 'Overview' },
      'actions/index': { title: 'Index page' },
    })
    const rollup = makeRollup(['actions/index', 'actions/overview'])
    const out = await generate(pages, rollup, baseConfig)
    expect(out).toMatch(/Overview/)
    expect(out).not.toMatch(/Index page/)
  })

  test('groups small categories under more_pages_heading', async () => {
    const pages = makePages({
      'big/a': { title: 'A' },
      'big/b': { title: 'B' },
      'big/c': { title: 'C' },
      'big/d': { title: 'D' },
      'small/x': { title: 'X' },
    })
    const rollup = makeRollup(['big/a', 'big/b', 'big/c', 'big/d', 'small/x'])
    const out = await generate(pages, rollup, { ...baseConfig, small_category_threshold: 3 })
    expect(out).toMatch(/## More pages/)
    const morePagesIdx = out.indexOf('## More pages')
    expect(out.slice(morePagesIdx)).toMatch(/\[X\]/)
  })

  test('emits pinned_section_heading and pinned pages when present', async () => {
    const pages = makePages({
      rest: { title: 'REST API' },
      'actions/a': { title: 'A' },
    })
    const rollup = makeRollup(['actions/a'])
    const out = await generate(pages, rollup, {
      ...baseConfig,
      pinned_section_heading: 'Featured',
      pinned_pages: ['rest'],
    })
    expect(out).toMatch(/## Featured/)
    expect(out).toMatch(/\[REST API\]/)
  })

  test('includes title, description, how_to_use, and auto_update_comment', async () => {
    const out = await generate(
      {},
      {},
      {
        ...baseConfig,
        title: 'My Title',
        description: 'My description.',
        how_to_use: 'Do this.',
        auto_update_comment: '<!-- generated -->',
      },
    )
    expect(out).toMatch(/^# My Title/m)
    expect(out).toMatch(/^> My description\./m)
    expect(out).toMatch(/^## How to use/m)
    expect(out).toMatch(/^Do this\./m)
    expect(out.trimEnd().endsWith('<!-- generated -->')).toBe(true)
  })
})

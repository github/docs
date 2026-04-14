import { beforeAll, describe, expect, test } from 'vitest'

import {
  generate,
  pageExists,
  getPageTitle,
  getPageIntro,
  formatPageLine,
  renderLiquid,
  titleCase,
  EXCLUDED_CATEGORIES,
  EXCLUDED_SLUGS,
  PINNED_PAGES,
  TOP_N,
  SMALL_CATEGORY_THRESHOLD,
  type PageMap,
  type Rollup,
} from '../generate-llms-txt'
import type { Page } from '@/types'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// titleCase
// ---------------------------------------------------------------------------

describe('titleCase', () => {
  test('capitalizes each word separated by hyphens', () => {
    expect(titleCase('hello-world')).toBe('Hello World')
  })

  test('handles single word', () => {
    expect(titleCase('actions')).toBe('Actions')
  })

  test('handles empty string', () => {
    expect(titleCase('')).toBe('')
  })
})

// ---------------------------------------------------------------------------
// pageExists
// ---------------------------------------------------------------------------

describe('pageExists', () => {
  const pages = makePages({ 'actions/overview': {} })

  test('returns true for existing page', () => {
    expect(pageExists('actions/overview', pages)).toBe(true)
  })

  test('returns false for missing page', () => {
    expect(pageExists('actions/missing', pages)).toBe(false)
  })
})

// ---------------------------------------------------------------------------
// getPageTitle
// ---------------------------------------------------------------------------

describe('getPageTitle', () => {
  test('returns shortTitle when available', async () => {
    const pages = makePages({
      'actions/overview': { shortTitle: 'Overview', title: 'Actions Overview' },
    })
    expect(await getPageTitle('/en/actions/overview', pages)).toBe('Overview')
  })

  test('falls back to title when no shortTitle', async () => {
    const pages = makePages({ 'actions/overview': { title: 'Actions Overview', shortTitle: '' } })
    expect(await getPageTitle('/en/actions/overview', pages)).toBe('Actions Overview')
  })

  test('strips " documentation" suffix', async () => {
    const pages = makePages({ actions: { title: 'Actions documentation' } })
    expect(await getPageTitle('/en/actions', pages)).toBe('Actions')
  })

  test('falls back to titleCase of slug for missing page', async () => {
    expect(await getPageTitle('/en/actions/cool-feature', {})).toBe('Cool Feature')
  })
})

// ---------------------------------------------------------------------------
// renderLiquid
// ---------------------------------------------------------------------------

describe('renderLiquid', () => {
  test('renders {% data %} variables', async () => {
    const result = await renderLiquid('{% data variables.product.prodname_copilot_short %}')
    expect(result).toBe('Copilot')
  })

  test('returns plain text unchanged', async () => {
    const result = await renderLiquid('No liquid here')
    expect(result).toBe('No liquid here')
  })
})

// ---------------------------------------------------------------------------
// getPageIntro
// ---------------------------------------------------------------------------

describe('getPageIntro', () => {
  test('returns intro text when present', async () => {
    const pages = makePages({ 'actions/overview': { intro: 'An intro sentence.' } })
    expect(await getPageIntro('/en/actions/overview', pages)).toBe('An intro sentence.')
  })

  test('returns null when no intro', async () => {
    const pages = makePages({ 'actions/overview': { intro: '' } })
    expect(await getPageIntro('/en/actions/overview', pages)).toBeNull()
  })

  test('returns null for missing page', async () => {
    expect(await getPageIntro('/en/actions/missing', {})).toBeNull()
  })
})

// ---------------------------------------------------------------------------
// formatPageLine
// ---------------------------------------------------------------------------

describe('formatPageLine', () => {
  test('formats with title and intro', async () => {
    const pages = makePages({ 'actions/overview': { title: 'Overview', intro: 'Learn about it.' } })
    const line = await formatPageLine('actions/overview', pages)
    expect(line).toBe('- [Overview](https://docs.github.com/en/actions/overview): Learn about it.')
  })

  test('formats without intro', async () => {
    const pages = makePages({ 'actions/overview': { title: 'Overview' } })
    const line = await formatPageLine('actions/overview', pages)
    expect(line).toBe('- [Overview](https://docs.github.com/en/actions/overview)')
  })
})

// ---------------------------------------------------------------------------
// Configuration sanity checks
// ---------------------------------------------------------------------------

describe('configuration', () => {
  test('early-access is always excluded', () => {
    expect(EXCLUDED_CATEGORIES.has('early-access')).toBe(true)
  })

  test('index slug is excluded', () => {
    expect(EXCLUDED_SLUGS.has('index')).toBe(true)
  })

  test('TOP_N is 100', () => {
    expect(TOP_N).toBe(100)
  })

  test('SMALL_CATEGORY_THRESHOLD is 3', () => {
    expect(SMALL_CATEGORY_THRESHOLD).toBe(3)
  })

  test('pinned pages include MCP and CLI', () => {
    const joined = PINNED_PAGES.join(' ')
    expect(joined).toContain('mcp')
    expect(joined).toContain('github-cli')
  })
})

// ---------------------------------------------------------------------------
// generate (end-to-end with mock data)
// ---------------------------------------------------------------------------

describe('generate', () => {
  // Build a mock page map and rollup with enough variety to exercise the logic
  const pagePaths = [
    'actions/overview',
    'actions/learn-github-actions',
    'actions/using-workflows',
    'actions/creating-actions',
    'copilot/overview',
    'copilot/quickstart',
    'copilot/using-copilot',
    'repositories/creating-a-repo',
    'repositories/cloning-a-repo',
    'repositories/managing-branches',
    'issues/tracking-work',
    // Small category (< threshold)
    'billing/managing-billing',
    'billing/viewing-usage',
    // Excluded category
    'early-access/secret-feature',
    // index slug
    'index',
  ]

  const pages = makePages(
    Object.fromEntries(
      pagePaths.map((p) => [
        p,
        { title: titleCase(p.split('/').pop() || p), intro: `Intro for ${p}.` },
      ]),
    ),
  )
  // Also add category-level pages for section headings
  for (const cat of ['actions', 'copilot', 'repositories', 'issues', 'billing']) {
    pages[`/en/${cat}`] = makePage({
      title: `${titleCase(cat)} documentation`,
      intro: `About ${cat}.`,
    })
  }

  // Add pinned pages so they appear
  for (const pinned of PINNED_PAGES) {
    pages[`/en/${pinned}`] = makePage({
      title: titleCase(pinned.split('/').pop() || pinned),
      intro: `Pinned intro for ${pinned}.`,
    })
  }

  const rollup = makeRollup(
    pagePaths.filter((p) => p !== 'early-access/secret-feature' && p !== 'index'),
  )

  let output: string

  beforeAll(async () => {
    output = await generate(pages, rollup)
  })

  test('generates without throwing', () => {
    expect(output).toBeTruthy()
  })

  test('starts with the header', () => {
    expect(output).toMatch(/^# GitHub\n/)
  })

  test('includes API section', () => {
    expect(output).toContain('Programmatic access')
    expect(output).toContain('/api/pagelist/')
    expect(output).toContain('/api/article')
    expect(output).toContain('/api/search')
  })

  test('includes pinned section', () => {
    expect(output).toContain('Building with GitHub')
  })

  test('excludes early-access content', () => {
    expect(output).not.toContain('secret-feature')
    expect(output).not.toContain('early-access')
  })

  test('excludes index slug', () => {
    // "index" as a standalone link should not appear
    expect(output).not.toMatch(/\(https:\/\/docs\.github\.com\/en\/index\)/)
  })

  test('groups pages by category with headings', () => {
    expect(output).toContain('## Actions')
    expect(output).toContain('## Copilot')
    expect(output).toContain('## Repositories')
  })

  test('small categories go under "More pages"', () => {
    // Billing has 2 pages (< threshold of 3)
    expect(output).toContain('## More pages')
    expect(output).toContain('managing-billing')
  })

  test('categories are sorted by number of links (most first)', () => {
    const actionsIdx = output.indexOf('## Actions')
    const copilotIdx = output.indexOf('## Copilot')
    // Actions has 4 pages, Copilot has 3 — Actions should come first
    expect(actionsIdx).toBeLessThan(copilotIdx)
  })

  test('pages are sorted alphabetically within categories', () => {
    // Extract all actions links in order
    const actionLines = output
      .split('\n')
      .filter((line) => line.startsWith('- [') && line.includes('/en/actions/'))
    const actionPaths = actionLines.map((l) => {
      const match = l.match(/\/en\/actions\/([^)]+)/)
      return match?.[1] || ''
    })
    const sorted = [...actionPaths].sort()
    expect(actionPaths).toEqual(sorted)
  })

  test('category headings strip " documentation" suffix', () => {
    expect(output).not.toContain('## Actions documentation')
    expect(output).toContain('## Actions')
  })

  test('category intros appear as blockquotes', () => {
    expect(output).toContain('> About copilot.')
  })

  test('page lines include intros after colon', () => {
    expect(output).toMatch(/\): Intro for actions\/overview\./)
  })

  test('ends with auto-update comment', () => {
    expect(output.trim()).toMatch(/<!-- .* not edit manually\. -->$/)
  })

  test('links point to docs.github.com', () => {
    const links = output.match(/https:\/\/docs\.github\.com\/en\/[^\s)]+/g) || []
    expect(links.length).toBeGreaterThan(0)
    for (const link of links) {
      expect(link).toMatch(/^https:\/\/docs\.github\.com\/en\//)
    }
  })
})

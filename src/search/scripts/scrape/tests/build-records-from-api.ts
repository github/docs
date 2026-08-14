import { describe, test, expect } from 'vitest'

import {
  articleApiResponseToRecord,
  extractFromMarkdown,
  type ArticleApiResponse,
} from '@/search/scripts/scrape/lib/build-records-from-api'

describe('articleApiResponseToRecord', () => {
  function makeApiResponse(overrides: Partial<ArticleApiResponse> = {}): ArticleApiResponse {
    return {
      meta: {
        title: 'Test Page',
        intro: 'An intro paragraph.',
        product: 'test-product',
        breadcrumbs: [
          { href: '/en', title: 'Home' },
          { href: '/en/test', title: 'Test' },
          { href: '/en/test/page', title: 'Test Page' },
        ],
        ...overrides.meta,
      },
      body: overrides.body ?? '## Getting started\n\nSome content here.',
    }
  }

  test('converts API response to a search record', () => {
    const record = articleApiResponseToRecord('/en/test/page', makeApiResponse())

    expect(record.objectID).toBe('/en/test/page')
    expect(record.title).toBe('Test Page')
    expect(record.intro).toBe('An intro paragraph.')
    expect(record.breadcrumbs).toBe('Home / Test')
    expect(record.toplevel).toBe('Home')
    expect(record.headings).toContain('Getting started')
    expect(record.content).toContain('Some content here.')
  })

  test('returns empty title when API response has empty title', () => {
    const record = articleApiResponseToRecord(
      '/en/test/page',
      makeApiResponse({ meta: { title: '', intro: '', product: 'test' } }),
    )

    expect(record.title).toBe('')
  })

  test('excludes navigational headings', () => {
    const record = articleApiResponseToRecord(
      '/en/test/page',
      makeApiResponse({
        body: '## In this article\n\n## Real heading\n\n## Further reading\n\nContent.',
      }),
    )

    expect(record.headings).toBe('Real heading')
  })

  test('handles missing breadcrumbs', () => {
    const response = makeApiResponse()
    response.meta.breadcrumbs = undefined
    const record = articleApiResponseToRecord('/en/test/page', response)

    expect(record.breadcrumbs).toBe('')
    expect(record.toplevel).toBe('')
  })

  test('prepends intro to content when not already present', () => {
    const record = articleApiResponseToRecord(
      '/en/test/page',
      makeApiResponse({
        meta: { title: 'T', intro: 'Unique intro.', product: 'p' },
        body: 'Body text only.',
      }),
    )

    expect(record.content).toMatch(/^Unique intro\.\nBody text only\.$/)
  })

  test('does not duplicate intro when body already contains it', () => {
    const record = articleApiResponseToRecord(
      '/en/test/page',
      makeApiResponse({
        meta: { title: 'T', intro: 'Body text', product: 'p' },
        body: 'Body text only.',
      }),
    )

    const occurrences = record.content.split('Body text').length - 1
    expect(occurrences).toBe(1)
  })
})

describe('extractFromMarkdown', () => {
  test('extracts h2 headings and plain text content', () => {
    const md = '## Heading One\n\nParagraph text.\n\n## Heading Two\n\nMore text.'
    const result = extractFromMarkdown(md)

    expect(result.headings).toBe('Heading One\nHeading Two')
    expect(result.content).toContain('Paragraph text.')
    expect(result.content).toContain('More text.')
  })

  test('skips ignored heading slugs', () => {
    const md = '## In this article\n\n## Prerequisites\n\n## Real heading'
    const result = extractFromMarkdown(md)

    expect(result.headings).toBe('Real heading')
  })

  test('skips ignored heading texts in non-English', () => {
    const md = '## 本文内容\n\n## 先决条件\n\n## 真正的标题'
    const result = extractFromMarkdown(md)

    expect(result.headings).toBe('真正的标题')
  })

  test('ignores h1 and h3+ headings', () => {
    const md = '# H1 Title\n\n## H2 Heading\n\n### H3 Subheading'
    const result = extractFromMarkdown(md)

    expect(result.headings).toBe('H2 Heading')
  })

  test('preserves code block text in content', () => {
    const md = '## Setup\n\n```bash\nssh_url=git@github.com\n```'
    const result = extractFromMarkdown(md)

    expect(result.content).toContain('ssh_url=git@github.com')
  })
})

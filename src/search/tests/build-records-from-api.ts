import { describe, expect, test, vi, beforeEach, afterEach } from 'vitest'

import {
  extractHeadingsFromMarkdown,
  extractFromMarkdown,
  markdownToPlainText,
  articleApiResponseToRecord,
  fetchArticleAsRecord,
  type ArticleApiResponse,
} from '@/search/scripts/scrape/lib/build-records-from-api'

import { fetchWithRetry } from '@/frame/lib/fetch-utils'

vi.mock('@/frame/lib/fetch-utils', () => ({
  fetchWithRetry: vi.fn(),
}))

const mockFetchWithRetry = vi.mocked(fetchWithRetry)

describe('extractHeadingsFromMarkdown', () => {
  test('extracts h2 headings', () => {
    const markdown = `# Title

Some intro text.

## First Section

Content here.

## Second Section

More content.

### Subsection

This should be ignored (h3).
`
    const headings = extractHeadingsFromMarkdown(markdown)
    expect(headings).toBe('First Section\nSecond Section')
  })

  test('filters out navigational headings', () => {
    const markdown = `# Title

## In this article

Navigation links.

## Main Content

The actual content.

## Further reading

More links.

## Prerequisites

Setup steps.
`
    const headings = extractHeadingsFromMarkdown(markdown)
    expect(headings).toBe('Main Content')
  })

  test('handles markdown formatting in headings', () => {
    const markdown = `# Title

## Using \`code\` in headings

## A [link](https://example.com) heading

## **Bold** heading
`
    const headings = extractHeadingsFromMarkdown(markdown)
    // Verify complete heading text with formatting stripped
    expect(headings).toContain('Using code in headings')
    expect(headings).toContain('A link heading')
    expect(headings).toContain('Bold heading')
    // Should not contain markdown syntax
    expect(headings).not.toContain('`')
    expect(headings).not.toContain('**')
    expect(headings).not.toContain('](')
  })

  test('returns empty string for no h2 headings', () => {
    const markdown = `# Just a title

Some content without sections.
`
    const headings = extractHeadingsFromMarkdown(markdown)
    expect(headings).toBe('')
  })

  test('filters out Japanese navigational headings', () => {
    const markdown = `# タイトル

## この記事の内容

ナビゲーション。

## メインコンテンツ

実際の内容。

## 参考資料

リンク。

## 前提条件

セットアップ。
`
    const headings = extractHeadingsFromMarkdown(markdown)
    expect(headings).toBe('メインコンテンツ')
  })

  test('filters out non-English navigational headings across languages', () => {
    // Chinese
    expect(extractHeadingsFromMarkdown('## 本文内容\n\n## 实际内容')).toBe('实际内容')
    expect(extractHeadingsFromMarkdown('## 延伸阅读\n\n## 实际内容')).toBe('实际内容')

    // Korean
    expect(extractHeadingsFromMarkdown('## 이 문서의 내용\n\n## 실제 내용')).toBe('실제 내용')
    expect(extractHeadingsFromMarkdown('## 추가 참고 자료\n\n## 실제 내용')).toBe('실제 내용')

    // Spanish
    expect(extractHeadingsFromMarkdown('## En este artículo\n\n## Contenido real')).toBe(
      'Contenido real',
    )
    expect(extractHeadingsFromMarkdown('## Información adicional\n\n## Contenido real')).toBe(
      'Contenido real',
    )

    // French
    expect(extractHeadingsFromMarkdown('## Dans cet article\n\n## Contenu réel')).toBe(
      'Contenu réel',
    )
    expect(extractHeadingsFromMarkdown('## Prérequis\n\n## Contenu réel')).toBe('Contenu réel')

    // German
    expect(extractHeadingsFromMarkdown('## Voraussetzungen\n\n## Echter Inhalt')).toBe(
      'Echter Inhalt',
    )
  })
})

describe('markdownToPlainText', () => {
  test('converts markdown to plain text', () => {
    const markdown = `# Title

This is **bold** and *italic* text.

- List item 1
- List item 2

[A link](https://example.com)
`
    const text = markdownToPlainText(markdown)
    expect(text).toContain('Title')
    expect(text).toContain('bold')
    expect(text).toContain('italic')
    expect(text).toContain('List item 1')
    expect(text).toContain('A link')
    // Should not contain markdown syntax
    expect(text).not.toContain('**')
    expect(text).not.toContain('](')
  })

  test('includes fenced code block content', () => {
    const markdown = `Some text.

\`\`\`javascript
const x = 1;
\`\`\`

More text.
`
    const text = markdownToPlainText(markdown)
    expect(text).toContain('Some text')
    expect(text).toContain('More text')
    expect(text).toContain('const x = 1')
  })

  test('preserves inline code', () => {
    const markdown = 'Use the `git commit` command to save changes.'
    const text = markdownToPlainText(markdown)
    expect(text).toContain('git commit')
    expect(text).toContain('Use the')
  })

  test('inserts whitespace between list items', () => {
    const markdown = `1. First item ends with SSH.

2. Make a request using the CLI.
`
    const text = markdownToPlainText(markdown)
    // "SSH." and "Make" must not merge into "SSH.Make"
    expect(text).not.toMatch(/SSH\.Make/)
    expect(text).toMatch(/SSH\.\n/)
    expect(text).toContain('Make a request')
  })

  test('inserts whitespace between nested block elements', () => {
    const markdown = `> First paragraph in blockquote.
>
> Second paragraph in blockquote.
`
    const text = markdownToPlainText(markdown)
    // Paragraphs within a blockquote should be separated
    expect(text).not.toMatch(/blockquote\.Second/)
    expect(text).toContain('First paragraph in blockquote.')
    expect(text).toContain('Second paragraph in blockquote.')
  })

  test('strips GitHub alert markers from plain text', () => {
    const markdown = `> [!NOTE]
> This is a note.

> [!TIP]
> This is a tip.

> [!WARNING]
> This is a warning.

> [!IMPORTANT]
> This is important.

> [!CAUTION]
> This is a caution.
`
    const text = markdownToPlainText(markdown)
    expect(text).not.toContain('[!NOTE]')
    expect(text).not.toContain('[!TIP]')
    expect(text).not.toContain('[!WARNING]')
    expect(text).not.toContain('[!IMPORTANT]')
    expect(text).not.toContain('[!CAUTION]')
    // The alert body text should still be present
    expect(text).toContain('This is a note.')
    expect(text).toContain('This is a tip.')
    expect(text).toContain('This is a warning.')
    expect(text).toContain('This is important.')
    expect(text).toContain('This is a caution.')
  })

  test('handles GFM tables cleanly', () => {
    const markdown = `Some intro.

| Column A | Column B |
| --- | --- |
| Cell 1 | Cell 2 |
| Cell 3 | Cell 4 |

More text.
`
    const text = markdownToPlainText(markdown)
    expect(text).toContain('Column A')
    expect(text).toContain('Cell 1')
    expect(text).toContain('More text')
    // Should not contain raw GFM table syntax artifacts
    expect(text).not.toContain('| ---')
    expect(text).not.toContain('---')
  })
})

describe('extractFromMarkdown', () => {
  test('returns both headings and content in a single pass', () => {
    const markdown = `# Title

## Section One

Some content.

## Further reading

Links here.

\`\`\`json
{ "key": "value" }
\`\`\`

## Section Two

More content.
`
    const result = extractFromMarkdown(markdown)

    // Headings should exclude "Further reading"
    expect(result.headings).toBe('Section One\nSection Two')

    // Content should include fenced code block text
    expect(result.content).toContain('Some content')
    expect(result.content).toContain('More content')
    expect(result.content).toContain('"key"')
  })

  test('produces same results as separate wrapper calls', () => {
    const markdown = `# Test

## Heading One

Body text here.

## Prerequisites

Setup info.
`
    const combined = extractFromMarkdown(markdown)
    const headingsOnly = extractHeadingsFromMarkdown(markdown)
    const contentOnly = markdownToPlainText(markdown)

    expect(combined.headings).toBe(headingsOnly)
    expect(combined.content).toBe(contentOnly)
  })
})

describe('articleApiResponseToRecord', () => {
  test('converts API response to search record', () => {
    const response: ArticleApiResponse = {
      meta: {
        title: 'About GitHub',
        intro: 'Learn about GitHub.',
        product: 'Get started',
        breadcrumbs: [
          { href: '/en/get-started', title: 'Get started' },
          { href: '/en/get-started/overview', title: 'Overview' },
          { href: '/en/get-started/overview/about-github', title: 'About GitHub' },
        ],
      },
      body: `# About GitHub

Learn about GitHub.

## What is GitHub?

GitHub is a platform for collaboration.

## Getting started

Here's how to begin.
`,
    }

    const record = articleApiResponseToRecord('/en/get-started/overview/about-github', response)

    expect(record.objectID).toBe('/en/get-started/overview/about-github')
    expect(record.title).toBe('About GitHub')
    expect(record.intro).toBe('Learn about GitHub.')
    expect(record.breadcrumbs).toBe('Get started / Overview')
    expect(record.toplevel).toBe('Get started')
    expect(record.headings).toBe('What is GitHub?\nGetting started')
    expect(record.content).toContain('GitHub is a platform')
  })

  test('handles missing breadcrumbs (archived pages)', () => {
    const response: ArticleApiResponse = {
      meta: {
        title: 'Archived Page',
        intro: 'This is archived.',
        product: 'Old product',
        // No breadcrumbs - simulating archived page
      },
      body: '# Archived Page\n\nContent here.',
    }

    const record = articleApiResponseToRecord('/en/archived/page', response)

    expect(record.breadcrumbs).toBe('')
    expect(record.toplevel).toBe('')
    expect(record.title).toBe('Archived Page')
  })

  test('handles single breadcrumb (product landing page)', () => {
    const response: ArticleApiResponse = {
      meta: {
        title: 'Get started',
        intro: 'Welcome to GitHub.',
        product: 'Get started',
        breadcrumbs: [{ href: '/en/get-started', title: 'Get started' }],
      },
      body: '# Get started\n\nWelcome.',
    }

    const record = articleApiResponseToRecord('/en/get-started', response)

    // For single breadcrumb, don't slice it off
    expect(record.breadcrumbs).toBe('Get started')
    expect(record.toplevel).toBe('Get started')
  })

  test('prepends intro to content if not already present', () => {
    const response: ArticleApiResponse = {
      meta: {
        title: 'Test',
        intro: 'Unique intro text.',
        product: 'Test',
        breadcrumbs: [],
      },
      body: '# Test\n\nDifferent body content.',
    }

    const record = articleApiResponseToRecord('/en/test', response)

    expect(record.content).toMatch(/^Unique intro text\./)
    expect(record.content).toContain('Different body content')
  })

  test('does not duplicate intro if already in body', () => {
    const response: ArticleApiResponse = {
      meta: {
        title: 'Test',
        intro: 'Same intro.',
        product: 'Test',
        breadcrumbs: [],
      },
      body: '# Test\n\nSame intro.\n\nMore content.',
    }

    const record = articleApiResponseToRecord('/en/test', response)

    // Intro should appear only once
    const introCount = (record.content.match(/Same intro/g) || []).length
    expect(introCount).toBe(1)
  })

  test('includes fenced code block content for search', () => {
    const response: ArticleApiResponse = {
      meta: {
        title: 'REST API',
        intro: 'API reference.',
        product: 'REST',
        breadcrumbs: [],
      },
      body: `# REST API

## Endpoints

Use the endpoint below.

\`\`\`json
{
  "ssh_url": "ssh://git@github.com/owner/repo.git",
  "properties": { "name": "string" }
}
\`\`\`

## Parameters

The \`name\` parameter is required.
`,
    }

    const record = articleApiResponseToRecord('/en/rest/api', response)

    expect(record.content).toContain('Use the endpoint below')
    expect(record.content).toContain('parameter is required')
    // Fenced code block content should be included for search
    expect(record.content).toContain('ssh_url')
    expect(record.content).toContain('ssh://git@github.com')
    // Inline code content should also be preserved
    expect(record.content).toContain('name')
  })
})

describe('fetchArticleAsRecord', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('returns record on successful API response', async () => {
    const mockResponse: ArticleApiResponse = {
      meta: {
        title: 'Test Article',
        intro: 'Test intro.',
        product: 'Test Product',
        breadcrumbs: [{ href: '/en/test', title: 'Test' }],
      },
      body: '# Test Article\n\nTest content.',
    }

    mockFetchWithRetry.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    } as Response)

    const result = await fetchArticleAsRecord('/en/test/article', 'http://localhost:4002')

    expect(result.record).not.toBeNull()
    expect(result.failure).toBeNull()
    expect(result.record?.title).toBe('Test Article')
    expect(result.record?.objectID).toBe('/en/test/article')
  })

  test('calls fetchWithRetry with correct options', async () => {
    const mockResponse: ArticleApiResponse = {
      meta: {
        title: 'Test',
        intro: 'Intro',
        product: 'Product',
        breadcrumbs: [],
      },
      body: '# Test',
    }

    mockFetchWithRetry.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    } as Response)

    await fetchArticleAsRecord('/en/test', 'http://localhost:4002')

    expect(mockFetchWithRetry).toHaveBeenCalledWith(
      'http://localhost:4002/api/article?pathname=%2Fen%2Ftest',
      undefined,
      {
        retries: 3,
        throwHttpErrors: false,
        timeout: 60000,
      },
    )
  })

  test('returns failure for HTTP 404', async () => {
    mockFetchWithRetry.mockResolvedValue({
      ok: false,
      status: 404,
      statusText: 'Not Found',
      json: () => Promise.reject(new Error('no body')),
    } as unknown as Response)

    const result = await fetchArticleAsRecord('/en/nonexistent', 'http://localhost:4002')

    expect(result.record).toBeNull()
    expect(result.failure).not.toBeNull()
    expect(result.failure?.errorType).toBe('HTTP 404')
    expect(result.failure?.error).toContain('404')
  })

  test('returns failure for HTTP 500', async () => {
    mockFetchWithRetry.mockResolvedValue({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
      json: () => Promise.reject(new Error('no body')),
    } as unknown as Response)

    const result = await fetchArticleAsRecord('/en/broken', 'http://localhost:4002')

    expect(result.record).toBeNull()
    expect(result.failure).not.toBeNull()
    expect(result.failure?.errorType).toBe('HTTP 500')
  })

  test('parses 403 response body for error message', async () => {
    mockFetchWithRetry.mockResolvedValue({
      ok: false,
      status: 403,
      statusText: 'Forbidden',
      json: () => Promise.resolve({ error: 'Page is archived and not available' }),
    } as unknown as Response)

    const result = await fetchArticleAsRecord('/en/archived/page', 'http://localhost:4002')

    expect(result.record).toBeNull()
    expect(result.failure).not.toBeNull()
    expect(result.failure?.errorType).toBe('API Error')
    expect(result.failure?.error).toBe('Page is archived and not available')
  })

  test('falls back to HTTP status when 403 body is not JSON', async () => {
    mockFetchWithRetry.mockResolvedValue({
      ok: false,
      status: 403,
      statusText: 'Forbidden',
      json: () => Promise.reject(new Error('Invalid JSON')),
    } as unknown as Response)

    const result = await fetchArticleAsRecord('/en/forbidden', 'http://localhost:4002')

    expect(result.record).toBeNull()
    expect(result.failure).not.toBeNull()
    expect(result.failure?.errorType).toBe('HTTP 403')
    expect(result.failure?.error).toBe('HTTP 403: Forbidden')
  })

  test('returns failure for API error response (archived pages)', async () => {
    mockFetchWithRetry.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ error: 'This page is archived' }),
    } as Response)

    const result = await fetchArticleAsRecord('/en/archived/page', 'http://localhost:4002')

    expect(result.record).toBeNull()
    expect(result.failure).not.toBeNull()
    expect(result.failure?.errorType).toBe('API Error')
    expect(result.failure?.error).toBe('This page is archived')
  })

  test('returns failure with Timeout errorType for AbortError', async () => {
    const abortError = new Error('The operation was aborted')
    abortError.name = 'AbortError'

    mockFetchWithRetry.mockRejectedValue(abortError)

    const result = await fetchArticleAsRecord('/en/slow/page', 'http://localhost:4002')

    expect(result.record).toBeNull()
    expect(result.failure).not.toBeNull()
    expect(result.failure?.errorType).toBe('Timeout')
  })

  test('returns failure with Timeout errorType for ETIMEDOUT', async () => {
    const timeoutError = new Error('Connection timed out') as Error & { code: string }
    timeoutError.code = 'ETIMEDOUT'

    mockFetchWithRetry.mockRejectedValue(timeoutError)

    const result = await fetchArticleAsRecord('/en/slow/page', 'http://localhost:4002')

    expect(result.record).toBeNull()
    expect(result.failure).not.toBeNull()
    expect(result.failure?.errorType).toBe('Timeout')
  })

  test('returns failure with Network Error for other errors', async () => {
    mockFetchWithRetry.mockRejectedValue(new Error('Connection refused'))

    const result = await fetchArticleAsRecord('/en/unreachable', 'http://localhost:4002')

    expect(result.record).toBeNull()
    expect(result.failure).not.toBeNull()
    expect(result.failure?.errorType).toBe('Network Error')
    expect(result.failure?.error).toBe('Connection refused')
  })

  test('FetchResult structure matches expected shape', async () => {
    const mockResponse: ArticleApiResponse = {
      meta: {
        title: 'Test',
        intro: 'Intro',
        product: 'Product',
        breadcrumbs: [],
      },
      body: '# Test',
    }

    mockFetchWithRetry.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    } as Response)

    const result = await fetchArticleAsRecord('/en/test', 'http://localhost:4002')

    // Verify the shape of FetchResult
    expect(result).toHaveProperty('record')
    expect(result).toHaveProperty('failure')

    // When successful, record should have all expected fields
    expect(result.record).toHaveProperty('objectID')
    expect(result.record).toHaveProperty('title')
    expect(result.record).toHaveProperty('intro')
    expect(result.record).toHaveProperty('content')
    expect(result.record).toHaveProperty('headings')
    expect(result.record).toHaveProperty('breadcrumbs')
    expect(result.record).toHaveProperty('toplevel')
  })
})

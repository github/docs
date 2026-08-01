import { describe, expect, test } from 'vitest'

import {
  aggregateFailures,
  type FailuresSummary,
} from '@/search/scripts/aggregate-search-index-failures'

describe('aggregateFailures', () => {
  test('returns no failures for empty input', () => {
    const result = aggregateFailures([])
    expect(result.hasFailures).toBe(false)
    expect(result.message).toBe('')
  })

  test('aggregates failures from single language', () => {
    const failures: FailuresSummary[] = [
      {
        totalFailedPages: 2,
        failures: [
          {
            indexName: 'github-docs-dotcom-en',
            languageCode: 'en',
            indexVersion: 'dotcom',
            failures: [
              { relativePath: 'content/copilot/page-1.md', error: 'timeout', errorType: 'TIMEOUT' },
              { relativePath: 'content/actions/page-2.md', error: 'render', errorType: 'RENDER' },
            ],
          },
        ],
      },
    ]

    const result = aggregateFailures(failures)
    expect(result.hasFailures).toBe(true)
    expect(result.totalCount).toBe(2)
    expect(result.message).toContain('2 page(s) failed')
    expect(result.message).toContain('content/copilot/page-1.md')
    expect(result.message).toContain('content/actions/page-2.md')
  })

  test('groups same page across multiple languages and versions', () => {
    const failures: FailuresSummary[] = [
      {
        totalFailedPages: 2,
        failures: [
          {
            indexName: 'github-docs-dotcom-en',
            languageCode: 'en',
            indexVersion: 'dotcom',
            failures: [
              { relativePath: 'content/copilot/page-1.md', error: 'timeout', errorType: 'TIMEOUT' },
            ],
          },
          {
            indexName: 'github-docs-ghes-3.19-en',
            languageCode: 'en',
            indexVersion: 'ghes-3.19',
            failures: [
              { relativePath: 'content/copilot/page-1.md', error: 'timeout', errorType: 'TIMEOUT' },
            ],
          },
        ],
      },
      {
        totalFailedPages: 1,
        failures: [
          {
            indexName: 'github-docs-dotcom-ja',
            languageCode: 'ja',
            indexVersion: 'dotcom',
            failures: [
              { relativePath: 'content/copilot/page-1.md', error: 'timeout', errorType: 'TIMEOUT' },
            ],
          },
        ],
      },
    ]

    const result = aggregateFailures(failures)
    expect(result.hasFailures).toBe(true)
    // Should count unique pages, not total failures
    expect(result.totalCount).toBe(1)
    expect(result.message).toContain('1 page(s) failed')
    expect(result.message).toContain('versions: dotcom, ghes-3.19')
    expect(result.message).toContain('languages: en, ja')
  })

  test('sorts pages alphabetically', () => {
    const failures: FailuresSummary[] = [
      {
        totalFailedPages: 2,
        failures: [
          {
            indexName: 'github-docs-dotcom-en',
            languageCode: 'en',
            indexVersion: 'dotcom',
            failures: [
              { relativePath: 'content/z-page.md', error: 'timeout', errorType: 'TIMEOUT' },
              { relativePath: 'content/a-page.md', error: 'timeout', errorType: 'TIMEOUT' },
            ],
          },
        ],
      },
    ]

    const result = aggregateFailures(failures)
    const aIndex = result.message.indexOf('content/a-page.md')
    const zIndex = result.message.indexOf('content/z-page.md')
    expect(aIndex).toBeLessThan(zIndex)
  })

  test('includes workflow URL when provided', () => {
    const failures: FailuresSummary[] = [
      {
        totalFailedPages: 1,
        failures: [
          {
            indexName: 'github-docs-dotcom-en',
            languageCode: 'en',
            indexVersion: 'dotcom',
            failures: [{ relativePath: 'content/page.md', error: 'timeout', errorType: 'TIMEOUT' }],
          },
        ],
      },
    ]

    const workflowUrl = 'https://github.com/github/docs-internal/actions/runs/123456'
    const result = aggregateFailures(failures, workflowUrl)
    expect(result.message).toContain(workflowUrl)
  })

  test('handles failures with url instead of relativePath', () => {
    const failures: FailuresSummary[] = [
      {
        totalFailedPages: 1,
        failures: [
          {
            indexName: 'github-docs-dotcom-en',
            languageCode: 'en',
            indexVersion: 'dotcom',
            failures: [{ url: '/en/copilot/overview', error: 'timeout', errorType: 'TIMEOUT' }],
          },
        ],
      },
    ]

    const result = aggregateFailures(failures)
    expect(result.message).toContain('/en/copilot/overview')
  })

  test('uses "unknown" for failures without path or url', () => {
    const failures: FailuresSummary[] = [
      {
        totalFailedPages: 1,
        failures: [
          {
            indexName: 'github-docs-dotcom-en',
            languageCode: 'en',
            indexVersion: 'dotcom',
            failures: [{ error: 'timeout', errorType: 'TIMEOUT' }],
          },
        ],
      },
    ]

    const result = aggregateFailures(failures)
    expect(result.message).toContain('unknown')
  })
})

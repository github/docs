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

  test('includes the error type and message for each page', () => {
    const failures: FailuresSummary[] = [
      {
        totalFailedPages: 1,
        failures: [
          {
            indexName: 'github-docs-dotcom-pt',
            languageCode: 'pt',
            indexVersion: 'dotcom',
            failures: [
              {
                relativePath: 'codespaces/index.md',
                error: 'tag "endif" not found, line:1, col:131',
                errorType: 'API Error',
              },
            ],
          },
        ],
      },
    ]

    const result = aggregateFailures(failures)
    expect(result.message).toContain('API Error: tag "endif" not found, line:1, col:131')
  })

  test('shows an identical error once per page rather than once per failure', () => {
    const versions = ['dotcom', 'ghes-3.19', 'ghes-3.20']
    const failures: FailuresSummary[] = [
      {
        totalFailedPages: versions.length,
        failures: versions.map((indexVersion) => ({
          indexName: `github-docs-${indexVersion}-ko`,
          languageCode: 'ko',
          indexVersion,
          failures: [
            {
              relativePath: 'organizations/index.md',
              error: 'tag "else" not found, line:1, col:16',
              errorType: 'API Error',
            },
          ],
        })),
      },
    ]

    const result = aggregateFailures(failures)
    const occurrences = result.message.split('tag "else" not found').length - 1
    expect(occurrences).toBe(1)
    expect(result.message).toContain('API Error: tag "else" not found, line:1, col:16 (×3)')
  })

  test('keeps distinct errors for the same page and caps the list', () => {
    const failures: FailuresSummary[] = [
      {
        totalFailedPages: 4,
        failures: [
          {
            indexName: 'github-docs-dotcom-en',
            languageCode: 'en',
            indexVersion: 'dotcom',
            failures: [
              { relativePath: 'content/page.md', error: 'first', errorType: 'API Error' },
              { relativePath: 'content/page.md', error: 'second', errorType: 'API Error' },
              { relativePath: 'content/page.md', error: 'third', errorType: 'Timeout' },
              { relativePath: 'content/page.md', error: 'fourth', errorType: 'Network Error' },
            ],
          },
        ],
      },
    ]

    const result = aggregateFailures(failures)
    expect(result.message).toContain('and 1 more distinct error(s)')
    expect(result.totalCount).toBe(1)
  })

  test('shows the most frequent error first', () => {
    const rare = { relativePath: 'content/page.md', error: 'aaa rare', errorType: 'API Error' }
    const common = { relativePath: 'content/page.md', error: 'zzz common', errorType: 'API Error' }
    const failures: FailuresSummary[] = [
      {
        totalFailedPages: 1,
        failures: [
          {
            indexName: 'github-docs-dotcom-en',
            languageCode: 'en',
            indexVersion: 'dotcom',
            failures: [rare, common, common, common],
          },
        ],
      },
    ]

    const result = aggregateFailures(failures)
    // Alphabetically 'aaa rare' sorts first, so ordering by count is what puts
    // the common error above it.
    expect(result.message.indexOf('zzz common')).toBeLessThan(result.message.indexOf('aaa rare'))
  })

  test('merges errors that render identically after truncation and counts them', () => {
    const prefix = 'x'.repeat(300)
    const failures: FailuresSummary[] = [
      {
        totalFailedPages: 2,
        failures: [
          {
            indexName: 'github-docs-dotcom-en',
            languageCode: 'en',
            indexVersion: 'dotcom',
            failures: [
              { relativePath: 'content/page.md', error: `${prefix}-one`, errorType: 'API Error' },
              { relativePath: 'content/page.md', error: `${prefix}-two`, errorType: 'API Error' },
            ],
          },
        ],
      },
    ]

    const result = aggregateFailures(failures)
    const errorLines = result.message.split('\n').filter((line) => line.includes('↳'))
    expect(errorLines).toHaveLength(1)
    expect(errorLines[0]).toContain('(×2)')
  })

  test('omits the count for an error reported only once', () => {
    const failures: FailuresSummary[] = [
      {
        totalFailedPages: 1,
        failures: [
          {
            indexName: 'github-docs-dotcom-en',
            languageCode: 'en',
            indexVersion: 'dotcom',
            failures: [{ relativePath: 'content/page.md', error: 'boom', errorType: 'API Error' }],
          },
        ],
      },
    ]

    const result = aggregateFailures(failures)
    expect(result.message).toContain('↳ API Error: boom')
    expect(result.message).not.toContain('(×')
  })

  test('escapes Slack control characters in the page path too', () => {
    const failures: FailuresSummary[] = [
      {
        totalFailedPages: 1,
        failures: [
          {
            indexName: 'github-docs-dotcom-en',
            languageCode: 'en',
            indexVersion: 'dotcom',
            failures: [
              { relativePath: 'content/<!channel>.md', error: 'boom', errorType: 'API Error' },
            ],
          },
        ],
      },
    ]

    const result = aggregateFailures(failures)
    expect(result.message).not.toContain('<!channel>')
    expect(result.message).toContain('content/&lt;!channel&gt;.md')
  })

  test('ignores malformed non-string error fields instead of throwing', () => {
    const failures = [
      {
        totalFailedPages: 1,
        failures: [
          {
            indexName: 'github-docs-dotcom-en',
            languageCode: 'en',
            indexVersion: 'dotcom',
            failures: [{ relativePath: 'content/page.md', error: { nested: true }, errorType: 42 }],
          },
        ],
      },
    ] as unknown as FailuresSummary[]

    const result = aggregateFailures(failures)
    expect(result.hasFailures).toBe(true)
    expect(result.message).toContain('content/page.md')
    expect(result.message).not.toContain('↳')
  })

  test('caps the overall message and says how many pages were left out', () => {
    const failures: FailuresSummary[] = [
      {
        totalFailedPages: 2000,
        failures: [
          {
            indexName: 'github-docs-dotcom-en',
            languageCode: 'en',
            indexVersion: 'dotcom',
            failures: Array.from({ length: 2000 }, (_, index) => ({
              relativePath: `content/page-${String(index).padStart(4, '0')}.md`,
              error: 'tag "endif" not found, line:1, col:131',
              errorType: 'API Error',
            })),
          },
        ],
      },
    ]

    const workflowUrl = 'https://github.com/github/docs-internal/actions/runs/12345678901'
    const result = aggregateFailures(failures, workflowUrl)
    expect(result.totalCount).toBe(2000)
    // The footer is reserved for up front, so the cap holds for the whole
    // message rather than just the page list.
    expect(result.message.length).toBeLessThanOrEqual(30000)
    expect(result.message).toContain(workflowUrl)
    expect(result.message).toMatch(/and \d+ more page\(s\) not listed/)
  })

  test('lists as many pages as fit before spending the budget on error text', () => {
    const pageCount = 2000
    const failures: FailuresSummary[] = [
      {
        totalFailedPages: pageCount,
        failures: [
          {
            indexName: 'github-docs-dotcom-en',
            languageCode: 'en',
            indexVersion: 'dotcom',
            failures: Array.from({ length: pageCount }, (_, index) => ({
              relativePath: `content/page-${String(index).padStart(4, '0')}.md`,
              error: 'x'.repeat(200),
              errorType: 'API Error',
            })),
          },
        ],
      },
    ]

    const result = aggregateFailures(failures)
    const bullets = result.message.split('\n').filter((line) => line.startsWith('•')).length
    const errorLines = result.message.split('\n').filter((line) => line.includes('↳')).length

    // Errors are only worth showing for the pages that fit, so the long ones
    // must not push pages out of the list.
    expect(bullets).toBeGreaterThan(400)
    expect(errorLines).toBeLessThan(bullets)
  })

  test('collapses newlines so an error cannot span multiple lines', () => {
    const failures: FailuresSummary[] = [
      {
        totalFailedPages: 1,
        failures: [
          {
            indexName: 'github-docs-dotcom-en',
            languageCode: 'en',
            indexVersion: 'dotcom',
            failures: [
              {
                relativePath: 'content/page.md',
                error: 'first line\nsecond line',
                errorType: 'API Error',
              },
            ],
          },
        ],
      },
    ]

    const result = aggregateFailures(failures)
    expect(result.message).toContain('API Error: first line second line')
    expect(result.message.split('\n').filter((line) => line.includes('↳'))).toHaveLength(1)
  })

  test('truncates a very long error', () => {
    const failures: FailuresSummary[] = [
      {
        totalFailedPages: 1,
        failures: [
          {
            indexName: 'github-docs-dotcom-en',
            languageCode: 'en',
            indexVersion: 'dotcom',
            failures: [
              { relativePath: 'content/page.md', error: 'x'.repeat(500), errorType: 'API Error' },
            ],
          },
        ],
      },
    ]

    const result = aggregateFailures(failures)
    const errorLine = result.message.split('\n').find((line) => line.includes('↳'))!
    expect(errorLine.length).toBeLessThan(250)
    expect(errorLine).toContain('...')
  })

  test('truncates on code point boundaries rather than splitting a character', () => {
    const failures: FailuresSummary[] = [
      {
        totalFailedPages: 1,
        failures: [
          {
            indexName: 'github-docs-dotcom-ja',
            languageCode: 'ja',
            indexVersion: 'dotcom',
            failures: [
              { relativePath: 'content/page.md', error: '🚀'.repeat(300), errorType: 'API Error' },
            ],
          },
        ],
      },
    ]

    const result = aggregateFailures(failures)
    const errorLine = result.message.split('\n').find((line) => line.includes('↳'))!

    // A lone surrogate in either direction means a rocket was cut in half.
    expect(errorLine).not.toMatch(/[\uD800-\uDBFF](?![\uDC00-\uDFFF])/)
    expect(errorLine).not.toMatch(/(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/)

    // 200 code points minus the '...' minus the 'API Error: ' prefix.
    expect((errorLine.match(/🚀/gu) || []).length).toBe(186)
    expect(errorLine).toContain('...')
  })

  test('escapes Slack control characters so an error cannot inject a mention', () => {
    const failures: FailuresSummary[] = [
      {
        totalFailedPages: 1,
        failures: [
          {
            indexName: 'github-docs-dotcom-en',
            languageCode: 'en',
            indexVersion: 'dotcom',
            failures: [
              {
                relativePath: 'content/page.md',
                error: 'unexpected <!channel> near <@U012ABCDEF> & <https://evil.test|click>',
                errorType: 'API Error',
              },
            ],
          },
        ],
      },
    ]

    const result = aggregateFailures(failures)
    expect(result.message).not.toContain('<!channel>')
    expect(result.message).not.toContain('<@U012ABCDEF>')
    expect(result.message).toContain('&lt;!channel&gt;')
    expect(result.message).toContain('&amp;')
  })
})

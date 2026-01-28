import { describe, expect, test } from 'vitest'
import {
  type BrokenLink,
  groupBrokenLinks,
  groupExternalLinksByDomain,
  generateInternalLinkReport,
  generateExternalLinkReport,
  reportToMarkdown,
  generatePRComment,
  generateSampleReports,
} from '../lib/link-report'

describe('groupBrokenLinks', () => {
  test('groups links by target href', () => {
    const links: BrokenLink[] = [
      { href: '/path/a', file: 'content/one.md', lines: [10] },
      { href: '/path/b', file: 'content/two.md', lines: [20] },
      { href: '/path/a', file: 'content/three.md', lines: [30] },
    ]

    const groups = groupBrokenLinks(links)

    expect(groups).toHaveLength(2)
    const groupA = groups.find((g) => g.target === '/path/a')
    expect(groupA?.occurrences).toHaveLength(2)
  })

  test('sorts occurrences by file path', () => {
    const links: BrokenLink[] = [
      { href: '/path/a', file: 'content/z-file.md', lines: [1] },
      { href: '/path/a', file: 'content/a-file.md', lines: [1] },
      { href: '/path/a', file: 'content/m-file.md', lines: [1] },
    ]

    const groups = groupBrokenLinks(links)

    expect(groups[0].occurrences[0].file).toBe('content/a-file.md')
    expect(groups[0].occurrences[1].file).toBe('content/m-file.md')
    expect(groups[0].occurrences[2].file).toBe('content/z-file.md')
  })

  test('marks redirect links as warnings', () => {
    const links: BrokenLink[] = [
      {
        href: '/old/path',
        file: 'content/one.md',
        lines: [10],
        isRedirect: true,
        redirectTarget: '/new/path',
      },
    ]

    const groups = groupBrokenLinks(links)

    expect(groups[0].isWarning).toBe(true)
    expect(groups[0].suggestion).toContain('/new/path')
  })

  test('sorts errors before warnings', () => {
    const links: BrokenLink[] = [
      { href: '/warning', file: 'a.md', lines: [1], isRedirect: true },
      { href: '/error', file: 'b.md', lines: [1] },
    ]

    const groups = groupBrokenLinks(links)

    expect(groups[0].target).toBe('/error')
    expect(groups[1].target).toBe('/warning')
  })

  test('creates suggestion from redirects map', () => {
    const links: BrokenLink[] = [{ href: '/old', file: 'a.md', lines: [1], isRedirect: true }]
    const redirects = { '/old': '/new' }

    const groups = groupBrokenLinks(links, redirects)

    expect(groups[0].suggestion).toContain('/new')
  })
})

describe('groupExternalLinksByDomain', () => {
  test('groups links by domain', () => {
    const links: BrokenLink[] = [
      { href: 'https://example.com/page1', file: 'a.md', lines: [1] },
      { href: 'https://example.com/page2', file: 'b.md', lines: [2] },
      { href: 'https://other.org/page', file: 'c.md', lines: [3] },
    ]

    const groups = groupExternalLinksByDomain(links)

    expect(groups).toHaveLength(2)
    const exampleGroup = groups.find((g) => g.target === 'example.com')
    expect(exampleGroup?.occurrences).toHaveLength(2)
  })

  test('sorts by occurrence count (most first)', () => {
    const links: BrokenLink[] = [
      { href: 'https://few.com/a', file: 'a.md', lines: [1] },
      { href: 'https://many.com/a', file: 'b.md', lines: [1] },
      { href: 'https://many.com/b', file: 'c.md', lines: [1] },
      { href: 'https://many.com/c', file: 'd.md', lines: [1] },
    ]

    const groups = groupExternalLinksByDomain(links)

    expect(groups[0].target).toBe('many.com')
    expect(groups[0].occurrences).toHaveLength(3)
  })

  test('handles invalid URLs', () => {
    const links: BrokenLink[] = [
      { href: 'not-a-valid-url', file: 'a.md', lines: [1] },
      { href: 'also-invalid', file: 'b.md', lines: [2] },
    ]

    const groups = groupExternalLinksByDomain(links)

    expect(groups).toHaveLength(1)
    expect(groups[0].target).toBe('invalid-urls')
    expect(groups[0].occurrences).toHaveLength(2)
  })
})

describe('generateInternalLinkReport', () => {
  test('generates correct title and counts', () => {
    const links: BrokenLink[] = [
      { href: '/broken', file: 'a.md', lines: [1] },
      { href: '/redirect', file: 'b.md', lines: [2], isRedirect: true },
    ]

    const report = generateInternalLinkReport(links)

    expect(report.title).toBe('Internal Link Check: 1 broken, 1 redirects')
    expect(report.uniqueTargets).toBe(2)
    expect(report.totalOccurrences).toBe(2)
  })

  test('generates correct summary for mixed issues', () => {
    const links: BrokenLink[] = [
      { href: '/broken1', file: 'a.md', lines: [1] },
      { href: '/broken2', file: 'b.md', lines: [2] },
      { href: '/redirect', file: 'c.md', lines: [3], isRedirect: true },
    ]

    const report = generateInternalLinkReport(links)

    expect(report.summary).toContain('2** broken link')
    expect(report.summary).toContain('1** redirect')
  })

  test('includes action URL when provided', () => {
    const report = generateInternalLinkReport([], { actionUrl: 'https://example.com/run/123' })

    expect(report.actionUrl).toBe('https://example.com/run/123')
  })

  test('handles empty links', () => {
    const report = generateInternalLinkReport([])

    expect(report.groups).toHaveLength(0)
    expect(report.summary).toContain('valid')
  })
})

describe('generateExternalLinkReport', () => {
  test('generates correct title with domain count', () => {
    const links: BrokenLink[] = [
      { href: 'https://a.com/page', file: 'a.md', lines: [1] },
      { href: 'https://b.org/page', file: 'b.md', lines: [2] },
    ]

    const report = generateExternalLinkReport(links)

    expect(report.title).toContain('2 domains')
    expect(report.uniqueTargets).toBe(2)
  })
})

describe('reportToMarkdown', () => {
  test('includes header with title and summary', () => {
    const report = generateInternalLinkReport([{ href: '/broken', file: 'a.md', lines: [1] }])

    const markdown = reportToMarkdown(report)

    expect(markdown).toContain('# Internal Link Check')
    expect(markdown).toContain('broken link')
  })

  test('includes action URL when provided', () => {
    const report = generateInternalLinkReport([{ href: '/broken', file: 'a.md', lines: [1] }], {
      actionUrl: 'https://github.com/org/repo/actions/runs/123',
    })

    const markdown = reportToMarkdown(report)

    expect(markdown).toContain('[View Details]')
    expect(markdown).toContain('actions/runs/123')
  })

  test('includes table of contents for large reports', () => {
    const links: BrokenLink[] = Array.from({ length: 10 }, (_, i) => ({
      href: `/path/${i}`,
      file: `content/${i}.md`,
      lines: [i],
    }))

    const report = generateInternalLinkReport(links)
    const markdown = reportToMarkdown(report)

    expect(markdown).toContain('Quick Navigation')
  })

  test('formats groups with file tables', () => {
    const links: BrokenLink[] = [
      { href: '/broken', file: 'content/actions/index.md', lines: [42, 55] },
    ]

    const report = generateInternalLinkReport(links)
    const markdown = reportToMarkdown(report)

    expect(markdown).toContain('| File | Line(s) |')
    expect(markdown).toContain('`content/actions/index.md`')
    expect(markdown).toContain('42, 55')
  })

  test('shows no issues message for empty report', () => {
    const report = generateInternalLinkReport([])
    const markdown = reportToMarkdown(report)

    expect(markdown).toContain('No issues found')
  })

  test('separates errors and warnings into sections', () => {
    const links: BrokenLink[] = [
      { href: '/broken', file: 'a.md', lines: [1] },
      { href: '/redirect', file: 'b.md', lines: [2], isRedirect: true },
    ]

    const report = generateInternalLinkReport(links)
    const markdown = reportToMarkdown(report)

    expect(markdown).toContain('## ❌ Broken Links')
    expect(markdown).toContain('## ⚠️ Redirects to Update')
  })
})

describe('generatePRComment', () => {
  test('returns empty string for no broken links', () => {
    const comment = generatePRComment([])

    expect(comment).toBe('')
  })

  test('includes broken link section for errors', () => {
    const links: BrokenLink[] = [{ href: '/broken', file: 'a.md', lines: [10] }]

    const comment = generatePRComment(links)

    expect(comment).toContain('Broken Link')
    expect(comment).toContain('`/broken`')
    expect(comment).toContain('`a.md`')
    expect(comment).toContain('line 10')
  })

  test('includes redirect section for warnings', () => {
    const links: BrokenLink[] = [
      { href: '/old', file: 'a.md', lines: [1], isRedirect: true, redirectTarget: '/new' },
    ]

    const comment = generatePRComment(links)

    // Redirects now show a compact summary with info icon
    expect(comment).toContain('redirect')
    expect(comment).toContain('ℹ️')
  })

  test('limits occurrences to 3 per group', () => {
    const links: BrokenLink[] = Array.from({ length: 5 }, (_, i) => ({
      href: '/broken',
      file: `file${i}.md`,
      lines: [i],
    }))

    const comment = generatePRComment(links)

    expect(comment).toContain('file0.md')
    expect(comment).toContain('file1.md')
    expect(comment).toContain('file2.md')
    expect(comment).not.toContain('file3.md')
    expect(comment).toContain('and 2 more')
  })

  test('includes hidden marker for comment updates', () => {
    const links: BrokenLink[] = [{ href: '/broken', file: 'a.md', lines: [1] }]

    const comment = generatePRComment(links)

    expect(comment).toContain('<!-- link-checker-pr-comment -->')
  })

  test('includes action URL when provided', () => {
    const links: BrokenLink[] = [{ href: '/broken', file: 'a.md', lines: [1] }]

    const comment = generatePRComment(links, { actionUrl: 'https://example.com/run' })

    expect(comment).toContain('[View full details]')
    expect(comment).toContain('https://example.com/run')
  })
})

describe('generateSampleReports', () => {
  test('generates valid sample reports', () => {
    const samples = generateSampleReports()

    // Internal report
    expect(samples.internal.report.groups.length).toBeGreaterThan(0)
    expect(samples.internal.markdown).toContain('Internal Link Check')
    expect(samples.internal.markdown).toContain('/old/broken/path')

    // External report
    expect(samples.external.report.groups.length).toBeGreaterThan(0)
    expect(samples.external.markdown).toContain('External Link Check')
    expect(samples.external.markdown).toContain('example.com')

    // PR comment
    expect(samples.prComment).toContain('Link Check Results')
    expect(samples.prComment).toContain('link-checker-pr-comment')
  })
})

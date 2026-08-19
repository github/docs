import { describe, expect, test } from 'vitest'
import {
  type BrokenLink,
  type GroupedBrokenLinks,
  groupBrokenLinks,
  groupExternalLinksByDomain,
  generateInternalLinkReport,
  generateExternalLinkReport,
  reportToMarkdown,
  generatePRComment,
  generateSampleReports,
  classifyFixStrategy,
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

  test('labels the title with version and language when supplied', () => {
    // The workflow concatenates every version's report into one issue, so an
    // unlabelled title leaves no way to tell the sections apart.
    const report = generateInternalLinkReport([{ href: '/broken', file: 'a.md', lines: [1] }], {
      version: 'enterprise-server@3.21',
      language: 'en',
    })

    expect(report.title).toBe(
      'Internal Link Check (enterprise-server@3.21 en): 1 broken, 0 redirects',
    )
  })

  test('omits the label when no version or language is supplied', () => {
    const report = generateInternalLinkReport([])

    expect(report.title).toBe('Internal Link Check: 0 broken, 0 redirects')
  })
})

describe('createRedirectSuggestion', () => {
  const linkTo = (href: string, redirectTarget: string): BrokenLink[] => [
    { href, file: 'a.md', lines: [1], isRedirect: true, redirectTarget },
  ]

  test('does not tell authors to hardcode a version', () => {
    // Following "update to the new path" here bakes 3.21 into content, which breaks
    // as soon as 3.22 ships.
    const report = generateInternalLinkReport(
      linkTo('/admin/all-releases', '/enterprise-server@3.21/admin/all-releases'),
    )

    const suggestion = report.groups[0].suggestion
    expect(suggestion).toContain('Leave the link versionless')
    expect(suggestion).not.toContain('Consider updating to the new path')
  })

  test('still suggests updating a genuine rename', () => {
    const report = generateInternalLinkReport(linkTo('/old-name', '/new-name'))

    expect(report.groups[0].suggestion).toContain('Consider updating to the new path')
  })

  test('treats a version-only change as version resolution, not a rename', () => {
    const report = generateInternalLinkReport(
      linkTo('/billing/set-up', '/enterprise-cloud@latest/billing/set-up'),
    )

    expect(report.groups[0].suggestion).toContain('Leave the link versionless')
  })

  test('treats a same-version path change as a rename', () => {
    const report = generateInternalLinkReport(
      linkTo('/enterprise-server@3.21/old', '/enterprise-server@3.21/new'),
    )

    expect(report.groups[0].suggestion).toContain('Consider updating to the new path')
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

  test('includes self-referential groups when provided', () => {
    const report = generateExternalLinkReport([], {
      selfReferentialLinks: [{ href: 'https://docs.github.com/en', file: 'a.md', lines: [1] }],
    })

    expect(report.selfReferentialGroups).toHaveLength(1)
    expect(report.selfReferentialGroups?.[0].target).toBe('https://docs.github.com/en')
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

  test('includes table of contents for large external reports', () => {
    const links: BrokenLink[] = Array.from({ length: 10 }, (_, i) => ({
      href: `https://example${i}.com/path`,
      file: `content/${i}.md`,
      lines: [i],
    }))

    const report = generateExternalLinkReport(links)
    const markdown = reportToMarkdown(report, true)

    expect(markdown).toContain('Quick Navigation')
  })

  test('internal reports navigate by fix strategy instead of a per-link table of contents', () => {
    const links: BrokenLink[] = Array.from({ length: 10 }, (_, i) => ({
      href: `/path/${i}`,
      file: `content/${i}.md`,
      lines: [i],
    }))

    const report = generateInternalLinkReport(links)
    const markdown = reportToMarkdown(report)

    expect(markdown).not.toContain('Quick Navigation')
    expect(markdown).toContain('## Start here')
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

  test('external reports still render a broken links section', () => {
    const links: BrokenLink[] = [
      { href: 'https://broken.example/page', file: 'a.md', lines: [1] },
      { href: 'https://other.example/page', file: 'b.md', lines: [2] },
    ]

    const report = generateExternalLinkReport(links)
    const markdown = reportToMarkdown(report, true)

    expect(markdown).toContain('## ❌ Broken Links')
    expect(markdown).toContain('broken.example')
  })

  test('includes potential internal links section with no broken links', () => {
    const report = generateExternalLinkReport([], {
      selfReferentialLinks: [{ href: 'https://docs.github.com/en', file: 'a.md', lines: [1] }],
    })
    const markdown = reportToMarkdown(report, true)

    expect(markdown).toContain('Potential Internal Links')
    expect(markdown).not.toContain('No issues found')
  })

  test('shows unique file count for potential internal links', () => {
    const report = generateExternalLinkReport([], {
      selfReferentialLinks: [
        { href: 'https://docs.github.com/en', file: 'a.md', lines: [1] },
        { href: 'https://docs.github.com/en', file: 'a.md', lines: [2] },
      ],
    })
    const markdown = reportToMarkdown(report, true)

    expect(markdown).toContain('Found in 1 file')
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

  test('renders a cross-page anchor section with versions', () => {
    const comment = generatePRComment([], {
      brokenAnchors: [
        {
          href: '/actions/foo#gone',
          file: 'content/actions/bar.md',
          lines: [12],
          versions: ['enterprise-server@3.17', 'free-pro-team@latest'],
        },
      ],
    })

    expect(comment).toContain('broken cross-page anchor')
    expect(comment).toContain('`/actions/foo#gone`')
    expect(comment).toContain('content/actions/bar.md')
    expect(comment).toContain('line 12')
    expect(comment).toContain('enterprise-server@3.17')
    expect(comment).toContain('<!-- link-checker-pr-comment -->')
  })

  test('returns a comment when only anchors are broken', () => {
    const comment = generatePRComment([], {
      brokenAnchors: [
        { href: '/a#x', file: 'content/a.md', lines: [1], versions: ['free-pro-team@latest'] },
      ],
    })

    expect(comment).not.toBe('')
    expect(comment).toContain('⚓')
  })

  test('limits anchor occurrences to 10', () => {
    const brokenAnchors = Array.from({ length: 13 }, (_, i) => ({
      href: `/a#x${i}`,
      file: `content/file${i}.md`,
      lines: [i],
      versions: ['free-pro-team@latest'],
    }))

    const comment = generatePRComment([], { brokenAnchors })

    expect(comment).toContain('file0.md')
    expect(comment).toContain('file9.md')
    expect(comment).not.toContain('file10.md')
    expect(comment).toContain('and 3 more')
  })

  test('anchor wording tracks the blocking mode', () => {
    // The comment must not claim the check is advisory once FAIL_ON_ANCHOR_FLAW flips it
    // to failing, and vice versa.
    const brokenAnchors = [
      { href: '/a#x', file: 'content/a.md', lines: [1], versions: ['free-pro-team@latest'] },
    ]

    const advisory = generatePRComment([], { brokenAnchors })
    expect(advisory).toContain('Not blocking yet')
    expect(advisory).not.toContain('This check is failing')

    const blocking = generatePRComment([], { brokenAnchors, anchorsBlocking: true })
    expect(blocking).toContain('This check is failing')
    expect(blocking).not.toContain('Not blocking yet')
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

describe('classifyFixStrategy', () => {
  const group = (over: Partial<Parameters<typeof classifyFixStrategy>[0]>) =>
    ({ target: '/x', occurrences: [], isWarning: false, ...over }) as Parameters<
      typeof classifyFixStrategy
    >[0]

  test('a redirect with a known destination is codemod work', () => {
    expect(
      classifyFixStrategy(
        group({
          isWarning: true,
          occurrences: [
            { href: '/old', file: 'a.md', lines: [1], isRedirect: true, redirectTarget: '/new' },
          ],
        }),
      ),
    ).toBe('codemod')
  })

  test('a redirect with no resolved destination is not codemod work', () => {
    expect(
      classifyFixStrategy(
        group({ isWarning: true, occurrences: [{ href: '/old', file: 'a.md', lines: [1] }] }),
      ),
    ).toBe('decide')
  })

  test('a link carrying a fragment is an anchor problem', () => {
    expect(
      classifyFixStrategy(
        group({
          target: '/page#gone',
          occurrences: [{ href: '/page#gone', file: 'a.md', lines: [1] }],
        }),
      ),
    ).toBe('anchor')
  })

  test('a plain broken link needs a human', () => {
    expect(
      classifyFixStrategy(group({ occurrences: [{ href: '/x', file: 'a.md', lines: [1] }] })),
    ).toBe('decide')
  })
})

describe('internal report grouped by fix strategy', () => {
  const links: BrokenLink[] = [
    {
      href: '/old-actions',
      file: 'actions/foo.md',
      lines: [1],
      isRedirect: true,
      redirectTarget: '/new-actions',
    },
    {
      href: '/old-admin',
      file: 'admin/bar.md',
      lines: [2],
      isRedirect: true,
      redirectTarget: '/new-admin',
    },
    { href: '/page#renamed', file: 'actions/baz.md', lines: [3] },
    { href: '/nowhere', file: 'issues/qux.md', lines: [4] },
  ]

  const markdown = reportToMarkdown(generateInternalLinkReport(links))

  test('leads with a summary of the buckets', () => {
    expect(markdown).toContain('## Start here')
    expect(markdown).toContain('1. Run the codemod')
    expect(markdown).toContain('2. Fix stale anchors')
    expect(markdown).toContain('3. Pick a destination')
  })

  test('gives a runnable command scoped to the affected docsets', () => {
    expect(markdown).toContain(
      'npm run update-internal-links -- content/actions --keep-stale-fragments --dont-set-autotitle',
    )
    expect(markdown).toContain(
      'npm run update-internal-links -- content/admin --keep-stale-fragments --dont-set-autotitle',
    )
    // content/issues only appears in the manual bucket, so it is not a codemod target.
    expect(markdown).not.toContain('npm run update-internal-links -- content/issues ')
  })

  test('collapses codemod work into one table instead of a section per link', () => {
    expect(markdown).toContain('| `/old-actions` | `/new-actions` | 1 |')
    expect(markdown).not.toContain('### ⚠️ `/old-actions`')
  })

  test('keeps per-file detail for the links a human has to judge', () => {
    expect(markdown).toContain('### ❌ `/nowhere`')
    expect(markdown).toContain('`issues/qux.md`')
  })
})

describe('codemod command scoping', () => {
  const redirectLink = (docset: string): BrokenLink => ({
    href: `/old-${docset}`,
    file: `${docset}/page.md`,
    lines: [1],
    isRedirect: true,
    redirectTarget: `/new-${docset}`,
  })

  test('paths are rooted at content, since the checker reports content-relative files', () => {
    const markdown = reportToMarkdown(generateInternalLinkReport([redirectLink('actions')]))

    expect(markdown).toContain('npm run update-internal-links -- content/actions ')
    expect(markdown).not.toContain('npm run update-internal-links -- actions ')
  })

  test('falls back to a single pass when too many docsets are affected', () => {
    const docsets = Array.from({ length: 12 }, (_, i) => `docset-${i}`)
    const markdown = reportToMarkdown(generateInternalLinkReport(docsets.map(redirectLink)))

    expect(markdown).toContain(
      'npm run update-internal-links -- content --keep-stale-fragments --dont-set-autotitle',
    )
    expect(markdown).toContain('That covers 12 docsets in one pass.')
    expect(markdown).toContain('`content/docset-0`')
  })
})

describe('version-only redirects', () => {
  const versionOnly: BrokenLink[] = [
    {
      href: '/admin/overview',
      file: 'actions/a.md',
      lines: [1],
      isRedirect: true,
      redirectTarget: '/enterprise-cloud@latest/admin/overview',
    },
  ]

  const renamed: BrokenLink[] = [
    {
      href: '/old-path',
      file: 'actions/b.md',
      lines: [2],
      isRedirect: true,
      redirectTarget: '/new-path',
    },
  ]

  test('a redirect that only adds a version is not codemod work', () => {
    const [group] = generateInternalLinkReport(versionOnly).groups
    expect(classifyFixStrategy(group)).toBe('versionless')
  })

  test('a redirect to a different path is still codemod work', () => {
    const [group] = generateInternalLinkReport(renamed).groups
    expect(classifyFixStrategy(group)).toBe('codemod')
  })

  test('version-only links are excluded from the codemod count and command', () => {
    const markdown = reportToMarkdown(generateInternalLinkReport([...versionOnly, ...renamed]))

    expect(markdown).toContain('## 1. Run the codemod (1 link, 1 occurrence)')
    expect(markdown).toContain('## 4. Version-only redirects (1 link, 1 occurrence)')
    // The codemod does not touch these, so it must not claim to fix them.
    expect(markdown).not.toContain(
      '| `/admin/overview` | `/enterprise-cloud@latest/admin/overview` | 1 |',
    )
  })

  test('tells writers to leave them versionless rather than hardcode a version', () => {
    const markdown = reportToMarkdown(generateInternalLinkReport(versionOnly))

    expect(markdown).toContain('Usually no action.')
    expect(markdown).toContain('ifversion')
    expect(markdown).not.toContain('## 1. Run the codemod')
  })
})

describe('version-only classification across versions', () => {
  test('a link that is version-only in one version and renamed in another is codemod work', () => {
    // Merged reports put every version's occurrences in one group. Classifying on the first
    // redirect target alone would file this under "no action" and hide the rename.
    const mixed: BrokenLink[] = [
      {
        href: '/admin/overview',
        file: 'actions/a.md',
        lines: [1],
        isRedirect: true,
        redirectTarget: '/enterprise-cloud@latest/admin/overview',
      },
      {
        href: '/admin/overview',
        file: 'actions/b.md',
        lines: [1],
        isRedirect: true,
        redirectTarget: '/admin/renamed-overview',
      },
    ]

    const [group] = generateInternalLinkReport(mixed).groups
    expect(group.occurrences).toHaveLength(2)
    expect(classifyFixStrategy(group)).toBe('codemod')
  })

  test('differing version prefixes for the same path stay versionless', () => {
    const perVersion: BrokenLink[] = [
      {
        href: '/admin/overview',
        file: 'actions/a.md',
        lines: [1],
        isRedirect: true,
        redirectTarget: '/enterprise-cloud@latest/admin/overview',
      },
      {
        href: '/admin/overview',
        file: 'actions/b.md',
        lines: [1],
        isRedirect: true,
        redirectTarget: '/enterprise-server@3.22/admin/overview',
      },
    ]

    const [group] = generateInternalLinkReport(perVersion).groups
    expect(classifyFixStrategy(group)).toBe('versionless')
  })
})

describe('redirects the codemod cannot resolve', () => {
  const occurrence = (extra: Partial<BrokenLink> = {}): BrokenLink => ({
    href: '/admin/old',
    file: 'admin/foo.md',
    lines: [3],
    isRedirect: true,
    redirectTarget: '/enterprise-server@3.21/admin/other',
    ...extra,
  })

  test('classifies a version-only redirect as manual work, not codemod work', () => {
    const group: GroupedBrokenLinks = {
      target: '/admin/old',
      occurrences: [occurrence({ requiresVersionContext: true })],
      isWarning: true,
    }
    expect(classifyFixStrategy(group)).toBe('decide')
  })

  test('still classifies a plain rename redirect as codemod work', () => {
    const group: GroupedBrokenLinks = {
      target: '/admin/old',
      occurrences: [occurrence()],
      isWarning: true,
    }
    expect(classifyFixStrategy(group)).toBe('codemod')
  })

  test('one unresolvable occurrence sends the whole merged group to a human', () => {
    const group: GroupedBrokenLinks = {
      target: '/admin/old',
      occurrences: [occurrence(), occurrence({ requiresVersionContext: true })],
      isWarning: true,
    }
    expect(classifyFixStrategy(group)).toBe('decide')
  })
})

describe('rename advice and inherited version prefixes', () => {
  const suggestionFor = (href: string, redirectTarget: string): string | undefined =>
    groupBrokenLinks([
      { href, file: 'admin/a.md', lines: [1], isRedirect: true, redirectTarget },
    ])[0].suggestion

  test('strips the inherited version from a versionless rename', () => {
    const s = suggestionFor('/admin/old', '/enterprise-server@3.21/admin/new')
    expect(s).toContain('`/admin/new`')
    expect(s).not.toContain('`/enterprise-server@3.21/admin/new`')
    expect(s).toContain('enterprise-server@3.21')
  })

  test('keeps the target verbatim when the link already named a version', () => {
    const s = suggestionFor(
      '/enterprise-server@3.21/admin/old',
      '/enterprise-cloud@latest/admin/new',
    )
    expect(s).toContain('`/enterprise-cloud@latest/admin/new`')
  })

  test('keeps the target verbatim when the redirect carries no version', () => {
    const s = suggestionFor('/admin/old', '/admin/new')
    expect(s).toContain('`/admin/new`')
  })

  test('still treats a pure version prefix as version-only', () => {
    const s = suggestionFor('/admin/same', '/enterprise-server@3.21/admin/same')
    expect(s).toContain('Leave the link versionless')
  })
})

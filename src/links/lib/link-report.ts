/**
 * Link report generation utilities.
 *
 * Creates actionable, well-grouped reports for the content team.
 * Reports are grouped by broken link target, showing all files affected.
 */

// ============================================================================
// Types
// ============================================================================

export interface BrokenLink {
  href: string
  file: string
  lines: number[]
  text?: string
  isAutotitle?: boolean
  isRedirect?: boolean
  redirectTarget?: string
  statusCode?: number
  errorMessage?: string
}

export interface GroupedBrokenLinks {
  target: string
  occurrences: BrokenLink[]
  suggestion?: string
  isWarning: boolean
}

export interface LinkReport {
  title: string
  summary: string
  groups: GroupedBrokenLinks[]
  uniqueTargets: number
  totalOccurrences: number
  timestamp: string
  actionUrl?: string
}

// ============================================================================
// Report Templates
// ============================================================================

const TEMPLATES = {
  // Main report header
  reportHeader: (title: string, summary: string, timestamp: string, actionUrl?: string) =>
    `
# ${title}

${summary}

---

**Generated:** ${timestamp}${actionUrl ? `\n**Action Run:** [View Details](${actionUrl})` : ''}
`.trim(),

  // Table of contents for large reports
  tableOfContents: (groups: GroupedBrokenLinks[]) => {
    const items = groups.map((g) => {
      const icon = g.isWarning ? '⚠️' : '❌'
      const anchor = g.target.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()
      return `- ${icon} [\`${g.target}\`](#${anchor}) (${g.occurrences.length})`
    })
    return `## Quick Navigation\n\n${items.join('\n')}`
  },

  // Section header (Broken Links or Redirects)
  sectionHeader: (isWarning: boolean) =>
    isWarning ? '## ⚠️ Redirects to Update' : '## ❌ Broken Links',

  // Individual group within a section
  group: (group: GroupedBrokenLinks, isExternal = false) => {
    const icon = group.isWarning ? '⚠️' : '❌'
    const count = group.occurrences.length
    const plural = count === 1 ? '' : 's'
    const first = group.occurrences[0]

    const statusInfo =
      isExternal && first?.statusCode
        ? `**Status:** ${first.statusCode}\n${first.errorMessage ? `**Error:** ${first.errorMessage}\n` : ''}\n`
        : ''

    const suggestion = group.suggestion ? `💡 ${group.suggestion}\n\n` : ''

    const tableRows = group.occurrences
      .map((occ) => `| \`${occ.file}\` | ${occ.lines.join(', ')} |`)
      .join('\n')

    return `### ${icon} \`${group.target}\`

${statusInfo}${suggestion}**Found in ${count} file${plural}:**

| File | Line(s) |
|------|---------|
${tableRows}`
  },

  // Empty report
  noIssues: () => 'No issues found! 🎉',

  // PR comment
  prComment: (errors: GroupedBrokenLinks[], warnings: GroupedBrokenLinks[], actionUrl?: string) => {
    const errorSection =
      errors.length > 0
        ? `### ❌ ${errors.length} Broken Link${errors.length === 1 ? '' : 's'}

${errors
  .map((group) => {
    const shown = group.occurrences.slice(0, 3)
    const remaining = group.occurrences.length - 3
    const occLines = shown
      .map((occ) => `  - \`${occ.file}\` line ${occ.lines.join(', ')}`)
      .join('\n')
    const moreLine = remaining > 0 ? `\n  - ... and ${remaining} more` : ''
    return `- \`${group.target}\`\n${occLines}${moreLine}`
  })
  .join('\n')}

`
        : ''

    const warningSection =
      warnings.length > 0
        ? `### ℹ️ ${warnings.length} redirect${warnings.length === 1 ? '' : 's'} to update

`
        : ''

    const detailsLink = actionUrl ? `[View full details](${actionUrl})\n` : ''

    return `## 🔗 Link Check Results

${errorSection}${warningSection}${detailsLink}
<!-- link-checker-pr-comment -->`
  },
}

// ============================================================================
// Grouping Functions
// ============================================================================

/**
 * Group links by href and determine if they are warnings (redirects)
 */
function groupByTarget(links: BrokenLink[]): Map<string, BrokenLink[]> {
  const groups = new Map<string, BrokenLink[]>()

  for (const link of links) {
    const existing = groups.get(link.href) || []
    existing.push(link)
    groups.set(link.href, existing)
  }

  return groups
}

/**
 * Create a suggestion message for a redirect
 */
function createRedirectSuggestion(
  target: string,
  occurrences: BrokenLink[],
  redirects?: Record<string, string>,
): string | undefined {
  if (redirects?.[target]) {
    return `This path redirects to \`${redirects[target]}\`. Consider updating to the new path.`
  }
  if (occurrences[0]?.redirectTarget) {
    return `This path redirects to \`${occurrences[0].redirectTarget}\`. Consider updating to the new path.`
  }
  return undefined
}

/**
 * Sort occurrences by file path for consistent output
 */
function sortOccurrencesByFile(occurrences: BrokenLink[]): BrokenLink[] {
  return [...occurrences].sort((a, b) => a.file.localeCompare(b.file))
}

/**
 * Group broken links by their target href
 */
export function groupBrokenLinks(
  brokenLinks: BrokenLink[],
  redirects?: Record<string, string>,
): GroupedBrokenLinks[] {
  const groupMap = groupByTarget(brokenLinks)

  const groups = Array.from(groupMap.entries()).map(([target, occurrences]) => {
    const isWarning = occurrences.some((o) => o.isRedirect)
    const suggestion = isWarning
      ? createRedirectSuggestion(target, occurrences, redirects)
      : undefined

    return {
      target,
      occurrences: sortOccurrencesByFile(occurrences),
      suggestion,
      isWarning,
    }
  })

  // Sort: errors first, then alphabetically
  return groups.sort((a, b) => {
    if (a.isWarning !== b.isWarning) return a.isWarning ? 1 : -1
    return a.target.localeCompare(b.target)
  })
}

/**
 * Extract domain from URL, handling invalid URLs
 */
function extractDomain(href: string): string {
  try {
    return new URL(href).hostname
  } catch {
    return 'invalid-urls'
  }
}

/**
 * Group external broken links by domain
 */
export function groupExternalLinksByDomain(brokenLinks: BrokenLink[]): GroupedBrokenLinks[] {
  const groups = new Map<string, BrokenLink[]>()

  for (const link of brokenLinks) {
    const domain = extractDomain(link.href)
    const existing = groups.get(domain) || []
    existing.push(link)
    groups.set(domain, existing)
  }

  return Array.from(groups.entries())
    .map(([target, occurrences]) => ({
      target,
      occurrences: sortOccurrencesByFile(occurrences),
      isWarning: false,
    }))
    .sort((a, b) => b.occurrences.length - a.occurrences.length)
}

// ============================================================================
// Report Generation
// ============================================================================

/**
 * Create summary text for a report
 */
function createSummary(errorCount: number, warningCount: number, totalOccurrences: number): string {
  if (errorCount === 0 && warningCount === 0) {
    return 'All links are valid! ✅'
  }

  const parts: string[] = []
  if (errorCount > 0) {
    parts.push(`**${errorCount}** broken link${errorCount === 1 ? '' : 's'}`)
  }
  if (warningCount > 0) {
    parts.push(`**${warningCount}** redirect${warningCount === 1 ? '' : 's'} to update`)
  }

  const plural = totalOccurrences === 1 ? '' : 's'
  return `Found ${parts.join(' and ')} across ${totalOccurrences} occurrence${plural}.`
}

/**
 * Generate a report for internal links
 */
export function generateInternalLinkReport(
  brokenLinks: BrokenLink[],
  options: {
    actionUrl?: string
    version?: string
    language?: string
    redirects?: Record<string, string>
  } = {},
): LinkReport {
  const groups = groupBrokenLinks(brokenLinks, options.redirects)
  const errors = groups.filter((g) => !g.isWarning)
  const warnings = groups.filter((g) => g.isWarning)

  return {
    title: `Internal Link Check: ${errors.length} broken, ${warnings.length} redirects`,
    summary: createSummary(errors.length, warnings.length, brokenLinks.length),
    groups,
    uniqueTargets: groups.length,
    totalOccurrences: brokenLinks.length,
    timestamp: new Date().toISOString(),
    actionUrl: options.actionUrl,
  }
}

/**
 * Generate a report for external links
 */
export function generateExternalLinkReport(
  brokenLinks: BrokenLink[],
  options: { actionUrl?: string } = {},
): LinkReport {
  const groups = groupExternalLinksByDomain(brokenLinks)
  const count = groups.length
  const plural = count === 1 ? '' : 's'

  return {
    title: `External Link Check: ${count} domain${plural} with issues`,
    summary:
      brokenLinks.length > 0
        ? `Found **${brokenLinks.length}** broken external link${brokenLinks.length === 1 ? '' : 's'} across **${count}** domain${plural}.`
        : 'All external links are valid! ✅',
    groups,
    uniqueTargets: count,
    totalOccurrences: brokenLinks.length,
    timestamp: new Date().toISOString(),
    actionUrl: options.actionUrl,
  }
}

// ============================================================================
// Markdown Rendering
// ============================================================================

/**
 * Render groups as markdown sections
 */
function renderGroups(groups: GroupedBrokenLinks[], isExternal: boolean): string {
  const errors = groups.filter((g) => !g.isWarning)
  const warnings = groups.filter((g) => g.isWarning)

  const sections: string[] = []

  if (errors.length > 0) {
    sections.push(TEMPLATES.sectionHeader(false))
    sections.push('')
    for (const group of errors) {
      sections.push(TEMPLATES.group(group, isExternal))
      sections.push('')
    }
  }

  if (warnings.length > 0) {
    sections.push(TEMPLATES.sectionHeader(true))
    sections.push('')
    for (const group of warnings) {
      sections.push(TEMPLATES.group(group, isExternal))
      sections.push('')
    }
  }

  return sections.join('\n')
}

/**
 * Convert a LinkReport to Markdown string
 */
export function reportToMarkdown(report: LinkReport, isExternal = false): string {
  const parts: string[] = []

  // Header
  parts.push(
    TEMPLATES.reportHeader(report.title, report.summary, report.timestamp, report.actionUrl),
  )
  parts.push('')

  if (report.groups.length === 0) {
    parts.push(TEMPLATES.noIssues())
    return parts.join('\n')
  }

  // Table of contents for large reports
  if (report.groups.length > 5) {
    parts.push(TEMPLATES.tableOfContents(report.groups))
    parts.push('')
  }

  // Groups
  parts.push(renderGroups(report.groups, isExternal))

  return parts.join('\n')
}

/**
 * Generate a compact PR comment for broken links
 */
export function generatePRComment(
  brokenLinks: BrokenLink[],
  options: { actionUrl?: string } = {},
): string {
  if (brokenLinks.length === 0) return ''

  const groups = groupBrokenLinks(brokenLinks)
  const errors = groups.filter((g) => !g.isWarning)
  const warnings = groups.filter((g) => g.isWarning)

  return TEMPLATES.prComment(errors, warnings, options.actionUrl)
}

// ============================================================================
// Demo / Sample Output
// ============================================================================

/**
 * Generate sample reports for testing and documentation
 */
export function generateSampleReports(): {
  internal: { report: LinkReport; markdown: string }
  external: { report: LinkReport; markdown: string }
  prComment: string
} {
  const internalLinks: BrokenLink[] = [
    { href: '/old/broken/path', file: 'content/actions/index.md', lines: [42] },
    { href: '/old/broken/path', file: 'content/repos/setup.md', lines: [15, 23] },
    {
      href: '/actions/reference/old-workflow',
      file: 'content/actions/guide.md',
      lines: [88],
      isRedirect: true,
      redirectTarget: '/actions/reference/workflow-syntax',
    },
  ]

  const externalLinks: BrokenLink[] = [
    {
      href: 'https://example.com/broken',
      file: 'content/get-started/index.md',
      lines: [10],
      statusCode: 404,
      errorMessage: 'Not Found',
    },
    {
      href: 'https://example.com/another',
      file: 'content/repos/index.md',
      lines: [55],
      statusCode: 404,
    },
    {
      href: 'https://oldsite.org/page',
      file: 'content/billing/index.md',
      lines: [33],
      statusCode: 503,
      errorMessage: 'Service Unavailable',
    },
  ]

  const internalReport = generateInternalLinkReport(internalLinks, {
    actionUrl: 'https://github.com/github/docs-internal/actions/runs/12345',
  })

  const externalReport = generateExternalLinkReport(externalLinks, {
    actionUrl: 'https://github.com/github/docs-internal/actions/runs/12345',
  })

  return {
    internal: {
      report: internalReport,
      markdown: reportToMarkdown(internalReport, false),
    },
    external: {
      report: externalReport,
      markdown: reportToMarkdown(externalReport, true),
    },
    prComment: generatePRComment(internalLinks, {
      actionUrl: 'https://github.com/github/docs-internal/actions/runs/12345',
    }),
  }
}

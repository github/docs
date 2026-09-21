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
  /**
   * The redirect was only found by resolving the href inside the version being checked.
   * `update-internal-links` looks the href up exactly as written, so it can't fix these.
   */
  requiresVersionContext?: boolean
  /**
   * Two checked versions resolved this href to genuinely different destinations, so no
   * single rewrite is correct for all of them. Merging keeps one target and drops the
   * rest, which would otherwise let the report name a destination that is only right for
   * one version.
   */
  hasConflictingRedirectTargets?: boolean
  statusCode?: number
  errorMessage?: string
  /**
   * The versions this link is broken in. Only set on a merged report, where the same link
   * usually breaks in every version checked.
   */
  versions?: string[]
}

/**
 * A cross-page anchor link (`/path#fragment`) whose fragment doesn't match any heading on
 * the target page, along with the versions it breaks in. Reported separately from broken
 * page links because the target page exists — only the fragment is stale.
 */
export interface CrossPageAnchorFlaw {
  href: string
  file: string
  lines: number[]
  text?: string
  versions: string[]
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
  selfReferentialGroups?: GroupedBrokenLinks[]
  uniqueTargets: number
  totalOccurrences: number
  timestamp: string
  actionUrl?: string
  /** Every version this report covers. Only set on a merged report. */
  versionsChecked?: string[]
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

    const listedOccurrences = group.occurrences.slice(0, MAX_FILES_PER_GROUP)
    const hiddenOccurrences = group.occurrences.length - listedOccurrences.length
    const tableRows = listedOccurrences
      .map((occ) => `| \`${occ.file}\` | ${occ.lines.join(', ')} |`)
      .join('\n')
    const moreFiles = hiddenOccurrences
      ? `\n\nAnd ${hiddenOccurrences} more file${hiddenOccurrences === 1 ? '' : 's'}, listed in the report attached to the workflow run.`
      : ''

    return `### ${icon} \`${group.target}\`

${statusInfo}${suggestion}**Found in ${count} file${plural}:**

| File | Line(s) |
|------|---------|
${tableRows}${moreFiles}`
  },

  // Self-referential links section
  selfReferentialLinks: (title: string, groups: GroupedBrokenLinks[]) => {
    const totalOccurrences = groups.reduce((sum, g) => sum + g.occurrences.length, 0)
    const rows = groups
      .map((g) => {
        const uniqueFileCount = new Set(g.occurrences.map((occ) => occ.file)).size
        const occRows = g.occurrences
          .map((occ) => `| \`${occ.file}\` | ${occ.lines.join(', ')} |`)
          .join('\n')
        return `### \`${g.target}\`\n\n**Found in ${uniqueFileCount} file${uniqueFileCount === 1 ? '' : 's'}:**\n\n| File | Line(s) |\n|------|---------|\n${occRows}`
      })
      .join('\n\n')
    return `## 🔗 ${title} (${groups.length} unique URL${groups.length === 1 ? '' : 's'}, ${totalOccurrences} occurrence${totalOccurrences === 1 ? '' : 's'})

The following links point to \`docs.github.com\`. Consider replacing them with relative internal links using the \`[AUTOTITLE](/path/to/article)\` syntax.

${rows}`
  },

  // Empty report
  noIssues: () => 'No issues found! 🎉',

  // PR comment
  prComment: (
    errors: GroupedBrokenLinks[],
    warnings: GroupedBrokenLinks[],
    anchorSection: string,
    actionUrl?: string,
  ) => {
    const errorSection =
      errors.length > 0
        ? `### ⚠️ ${errors.length} Broken Link${errors.length === 1 ? '' : 's'}

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

${errorSection}${warningSection}${anchorSection}${detailsLink}
<!-- link-checker-pr-comment -->`
  },

  // Cross-page anchor section. `blocking` reflects FAIL_ON_ANCHOR_FLAW so the wording
  // can't claim the check is advisory once the rollout flips it to failing.
  anchorSection: (anchors: CrossPageAnchorFlaw[], blocking = false) => {
    if (anchors.length === 0) return ''
    const shown = anchors.slice(0, 10)
    const remaining = anchors.length - shown.length
    const rows = shown
      .map(
        (a) =>
          `- \`${a.href}\`\n  - \`${a.file}\` line ${a.lines.join(', ')} (${a.versions.join(', ')})`,
      )
      .join('\n')
    const moreLine = remaining > 0 ? `\n- ... and ${remaining} more` : ''
    const status = blocking
      ? 'This check is failing.'
      : 'Not blocking yet, so this check still passes.'
    return `### ⚓ ${anchors.length} broken cross-page anchor${anchors.length === 1 ? '' : 's'}

These links resolve to a real page, but the \`#fragment\` no longer matches a heading on the target. ${status}

${rows}${moreLine}

`
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

const VERSION_PREFIX_RE = /^\/[a-z-]+@[^/]+/

/**
 * True when a redirect target is the same path with a version prefix bolted on.
 *
 * These aren't renames, they're the versionless link resolving into a version. Telling
 * an author to "update to the new path" here is actively wrong: hardcoding
 * `/enterprise-server@3.21/...` into content breaks as soon as 3.22 ships.
 */
function isVersionOnlyRedirect(target: string, redirectTarget: string): boolean {
  const withoutVersion = redirectTarget.replace(VERSION_PREFIX_RE, '')
  return withoutVersion === target
}

/**
 * Two redirect targets that differ only by version prefix are the same rename seen from
 * two versions, not a disagreement. `/enterprise-server@3.21/new` and
 * `/enterprise-server@3.17/new` both mean "the page moved to /new".
 */
function sameDestination(a: string, b: string): boolean {
  return a.replace(VERSION_PREFIX_RE, '') === b.replace(VERSION_PREFIX_RE, '')
}

/**
 * Create a suggestion message for a redirect
 */
function createRedirectSuggestion(
  target: string,
  occurrences: BrokenLink[],
  redirects?: Record<string, string>,
): string | undefined {
  const redirectTarget = redirects?.[target] ?? occurrences[0]?.redirectTarget
  if (!redirectTarget) return undefined

  if (isVersionOnlyRedirect(target, redirectTarget)) {
    return (
      `This path resolves to \`${redirectTarget}\` in this version. Leave the link versionless: ` +
      `hardcoding a version breaks when the next release ships. If it should point at a ` +
      `different version, use a Liquid \`ifversion\` gate.`
    )
  }

  // A versionless link that lands on a versioned path is a rename plus the version the
  // check happened to run in. Only the rename is real. Suggesting the target verbatim
  // would bake `enterprise-server@3.21` into content that never asked for a version.
  const sourceIsVersionless = !VERSION_PREFIX_RE.test(target)
  const versionPrefix = redirectTarget.match(VERSION_PREFIX_RE)?.[0]
  if (sourceIsVersionless && versionPrefix) {
    const withoutVersion = redirectTarget.slice(versionPrefix.length)
    return (
      `This path redirects to \`${withoutVersion}\`. Update the path but keep the link ` +
      `versionless: the \`${versionPrefix.slice(1)}\` prefix comes from the version being ` +
      `checked, not from the rename. Gate it with Liquid \`ifversion\` only if the new page ` +
      `really is version-specific.`
    )
  }

  return `This path redirects to \`${redirectTarget}\`. Consider updating to the new path.`
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
 * Describe which versions a link breaks in, but only when that is news.
 *
 * Nearly every broken link breaks in every version, so printing the full list on every
 * group is noise that also blows past the issue body size limit. Say something only when a
 * link is version-specific.
 */
export function describeVersions(
  versions: string[] | undefined,
  versionsChecked: string[] | undefined,
): string | undefined {
  if (!versions?.length || !versionsChecked?.length) return undefined
  if (versionsChecked.length === 1) return undefined
  if (versions.length >= versionsChecked.length) return undefined
  return versions.join(', ')
}

/**
 * Merge one report per version into a single report.
 *
 * The workflow used to concatenate each version's rendered Markdown, so a link broken in
 * every version produced an identical section per version. Merging on the link itself means
 * one section per real problem, with the versions recorded on the occurrence.
 */
export function mergeInternalLinkReports(
  reports: { version: string; report: LinkReport }[],
  options: { actionUrl?: string; versionsChecked?: string[] } = {},
): LinkReport {
  const merged = new Map<string, BrokenLink>()

  for (const { version, report } of reports) {
    for (const group of report.groups) {
      for (const occurrence of group.occurrences) {
        const href = occurrence.href || group.target
        const key = `${href}\u0000${occurrence.file}`
        const existing = merged.get(key)
        if (existing) {
          existing.lines = [...new Set([...existing.lines, ...occurrence.lines])].sort(
            (a, b) => a - b,
          )
          existing.versions = [...new Set([...(existing.versions ?? []), version])]
          // A link that redirects in any version is still worth rewriting everywhere.
          existing.isRedirect = existing.isRedirect || occurrence.isRedirect
          existing.requiresVersionContext =
            existing.requiresVersionContext || occurrence.requiresVersionContext
          // Keeping the first target and dropping the rest is only safe while every
          // version agrees on where the page went. Today they always do, but if that ever
          // stops being true the report would confidently name a destination that is
          // right for one version and wrong for the others. Flag it instead.
          if (
            existing.redirectTarget &&
            occurrence.redirectTarget &&
            !sameDestination(existing.redirectTarget, occurrence.redirectTarget)
          ) {
            existing.hasConflictingRedirectTargets = true
          }
          existing.redirectTarget = existing.redirectTarget ?? occurrence.redirectTarget
        } else {
          merged.set(key, { ...occurrence, href, versions: [version] })
        }
      }
    }
  }

  // A version with no broken links writes no report, so the files on disk undercount what
  // was actually checked. Callers that know the full matrix pass it in, otherwise fall back
  // to what was found.
  const versionsChecked = options.versionsChecked?.length
    ? options.versionsChecked
    : reports.map((r) => r.version)
  const report = generateInternalLinkReport([...merged.values()], options)
  const scope =
    versionsChecked.length > 1
      ? `\n\nChecked ${versionsChecked.length} versions: ${versionsChecked.join(', ')}. A link listed without a version breaks in all of them.`
      : ''
  return { ...report, versionsChecked, summary: report.summary + scope }
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

  // The workflow concatenates every version's report into one issue, so without this
  // label there's no way to tell which version a section covers.
  const scope = [options.version, options.language].filter(Boolean).join(' ')
  const scopeLabel = scope ? ` (${scope})` : ''

  return {
    title: `Internal Link Check${scopeLabel}: ${errors.length} broken, ${warnings.length} redirects`,
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
  options: { actionUrl?: string; selfReferentialLinks?: BrokenLink[] } = {},
): LinkReport {
  const groups = groupExternalLinksByDomain(brokenLinks)
  const selfReferentialGroups = options.selfReferentialLinks?.length
    ? groupBrokenLinks(options.selfReferentialLinks)
    : undefined
  const count = groups.length
  const plural = count === 1 ? '' : 's'

  return {
    title: `External Link Check: ${count} domain${plural} with issues`,
    summary:
      brokenLinks.length > 0
        ? `Found **${brokenLinks.length}** broken external link${brokenLinks.length === 1 ? '' : 's'} across **${count}** domain${plural}.`
        : 'All external links are valid! ✅',
    groups,
    selfReferentialGroups,
    uniqueTargets: count,
    totalOccurrences: brokenLinks.length,
    timestamp: new Date().toISOString(),
    actionUrl: options.actionUrl,
  }
}

// ============================================================================
// Fix strategy grouping
// ============================================================================

/**
 * How a writer actually fixes a group.
 *
 * Grouping by target URL produces one section per broken URL, which is why the report runs
 * to hundreds of sections that all look equally urgent. Grouping by fix strategy instead
 * means each section is one decision: run a command, repoint a heading anchor, or choose a
 * new destination by hand.
 */
export type FixStrategy = 'codemod' | 'versionless' | 'anchor' | 'decide'

/**
 * Past this many docsets, listing one command per docset is noisier than a single pass over
 * all of `content`.
 */
const MAX_LISTED_CODEMOD_PATHS = 8

/**
 * How many rows of the codemod table to print. The codemod does this work, so the full list
 * is reference material, not a task list. Printing all of it costs more than half the issue
 * body budget, and the complete list is in the workflow artifact either way.
 */
const MAX_CODEMOD_ROWS = 40

/**
 * How many stale anchors to print. This bucket is real work, but 70-plus entries is more
 * than anyone picks up in a week, and each entry costs several times a table row because it
 * lists every file the link appears in. The rest are in the workflow artifact.
 */
const MAX_ANCHOR_GROUPS = 25

/**
 * How many version-only redirects to print. This bucket needs no action at all, so the list
 * exists to show what was ruled out, not to be worked through.
 */
const MAX_VERSIONLESS_ROWS = 25

/**
 * How many files to list under a single broken link. Nothing bounds how many pages reuse
 * one link, so without this a single popular link could fill the issue body on its own. The
 * busiest link in the current eight-version data appears in 31 files, so this does not
 * trigger today.
 */
const MAX_FILES_PER_GROUP = 20

/**
 * Split a list at a cap and describe what is missing, so no section can grow without bound.
 * GitHub rejects issue bodies over 65,536 characters and the workflow truncates at 60,000
 * with a blind slice, which can cut a table in half.
 */
function capGroups(
  groups: GroupedBrokenLinks[],
  max: number,
): { listed: GroupedBrokenLinks[]; hidden: number } {
  // Most-used links first, so the truncated tail is the least interesting part.
  const byOccurrences = [...groups].sort((a, b) => b.occurrences.length - a.occurrences.length)
  return { listed: byOccurrences.slice(0, max), hidden: Math.max(0, groups.length - max) }
}

export function classifyFixStrategy(group: GroupedBrokenLinks): FixStrategy {
  const redirectTargets = group.occurrences
    .map((occ) => occ.redirectTarget)
    .filter((target): target is string => Boolean(target))

  if (group.isWarning && redirectTargets.length > 0) {
    // The path is unchanged and the redirect only adds a version. Rewriting these would
    // hardcode a version into content, which breaks when the next release ships. The
    // codemod leaves them alone, so promising that it fixes them is a lie.
    //
    // Every target has to be version-only, not just the first. A group can span versions,
    // and a link that merely gains a version prefix in one version but points at a renamed
    // page in another is real work. Ties go to the actionable bucket.
    if (redirectTargets.every((target) => isVersionOnlyRedirect(group.target, target))) {
      return 'versionless'
    }
    // A redirect to a genuinely different path. `update-internal-links` rewrites these
    // with no human judgment involved, but only when it can find the redirect from the
    // href as written. If any occurrence needed version context to resolve, the codemod
    // would be a no-op, so send the whole group to a human instead.
    if (group.occurrences.some((occ) => occ.requiresVersionContext)) {
      return 'decide'
    }
    // Versions disagree about where the page went, so there is no single correct rewrite.
    if (group.occurrences.some((occ) => occ.hasConflictingRedirectTargets)) {
      return 'decide'
    }
    return 'codemod'
  }
  // The link carries a fragment, so the stale part is likely a renamed heading.
  if (group.target.includes('#')) {
    return 'anchor'
  }
  return 'decide'
}

/**
 * The directories the codemod needs to be pointed at, derived from the files that actually
 * contain the links. Running it against all of `content` takes minutes; running it against
 * three docsets takes seconds.
 *
 * The checker records file paths relative to `content`, so `actions/foo.md` means
 * `content/actions/foo.md`. Paths that already name a top-level directory are left alone.
 */
function codemodPaths(groups: GroupedBrokenLinks[]): string[] {
  const paths = new Set<string>()
  for (const group of groups) {
    for (const occ of group.occurrences) {
      const segments = occ.file.split('/')
      const isRooted = segments[0] === 'content' || segments[0] === 'data'
      paths.add(isRooted ? segments.slice(0, 2).join('/') : `content/${segments[0]}`)
    }
  }
  return [...paths].sort()
}

/** The union of versions across a group's occurrences. */
function groupVersions(group: GroupedBrokenLinks): string[] {
  const versions = new Set<string>()
  for (const occ of group.occurrences) {
    for (const version of occ.versions ?? []) versions.add(version)
  }
  return [...versions]
}

function occurrenceCount(groups: GroupedBrokenLinks[]): number {
  return groups.reduce((sum, g) => sum + g.occurrences.length, 0)
}

function renderCodemodSection(groups: GroupedBrokenLinks[], versionsChecked?: string[]): string {
  const versionFor = (group: GroupedBrokenLinks) =>
    describeVersions(groupVersions(group), versionsChecked)
  const showVersions = groups.some((group) => versionFor(group))

  // Most-used links first, so the truncated tail is the least interesting part.
  const { listed, hidden } = capGroups(groups, MAX_CODEMOD_ROWS)

  const rows = listed
    .map((group) => {
      const target = group.occurrences.find((occ) => occ.redirectTarget)?.redirectTarget ?? ''
      const cells = [`\`${group.target}\``, `\`${target}\``, `${group.occurrences.length}`]
      if (showVersions) cells.push(versionFor(group) ?? 'all')
      return `| ${cells.join(' | ')} |`
    })
    .join('\n')

  const truncationNote = hidden
    ? `\n\nAnd ${hidden} more. The codemod fixes every one of them, so this list is reference only. The full report is attached to the workflow run.`
    : ''

  const flags = '--keep-stale-fragments --dont-set-autotitle'
  const paths = codemodPaths(groups)
  const tooManyToList = paths.length > MAX_LISTED_CODEMOD_PATHS
  const commands = tooManyToList
    ? `npm run update-internal-links -- content ${flags}`
    : paths.map((p) => `npm run update-internal-links -- ${p} ${flags}`).join('\n')
  const scopeNote = tooManyToList
    ? `\nThat covers ${paths.length} docsets in one pass. To split it into reviewable pull requests, run it against one docset at a time: ${paths.map((p) => `\`${p}\``).join(', ')}.\n`
    : ''

  const plural = groups.length === 1 ? '' : 's'
  const occurrences = occurrenceCount(groups)

  return `## 1. Run the codemod (${groups.length} link${plural}, ${occurrences} occurrence${occurrences === 1 ? '' : 's'})

Every link below redirects to a known destination, so no judgment is needed. Run:

\`\`\`bash
${commands}
\`\`\`
${scopeNote}
\`--keep-stale-fragments\` stops the codemod from silently deleting anchors it cannot verify.
That means a link like \`/old-page#heading\` becomes \`/new-page#heading\`, so if the heading
does not exist on the new page it shows up under stale anchors on the next run.
Review the diff, then open a pull request.

<details>
<summary>The ${groups.length} link${plural} this fixes</summary>

| From | To | Occurrences |${showVersions ? ' Versions |' : ''}
|------|-----|-------------|${showVersions ? '----------|' : ''}
${rows}${truncationNote}

</details>`
}

/**
 * Version-only redirects: the path is unchanged and the redirect just adds a version.
 *
 * These are not renames. A versionless link is supposed to resolve into whichever version
 * the reader is on, and that is exactly what the redirect does. Rewriting them would pin
 * content to a version that goes stale on the next release, so the codemod leaves them
 * alone and so should writers.
 */
function renderVersionlessSection(groups: GroupedBrokenLinks[]): string {
  const { listed, hidden } = capGroups(groups, MAX_VERSIONLESS_ROWS)
  const rows = listed
    .map((group) => {
      const target = group.occurrences.find((occ) => occ.redirectTarget)?.redirectTarget ?? ''
      return `| \`${group.target}\` | \`${target}\` |`
    })
    .join('\n')

  const truncationNote = hidden
    ? `\n\nAnd ${hidden} more in the same state. The list is cut short because this bucket is here to show what was ruled out, not to be worked through. The full report is attached to the workflow run.`
    : ''

  const plural = groups.length === 1 ? '' : 's'
  const occurrences = occurrenceCount(groups)

  return `## 4. Version-only redirects (${groups.length} link${plural}, ${occurrences} occurrence${occurrences === 1 ? '' : 's'})

**Usually no action.** The path is unchanged: the redirect only resolves the versionless
link into the version being checked, which is what it is supposed to do. Hardcoding the
version would break when the next release ships. Change one of these only if it should
point somewhere version-specific, and use a Liquid \`ifversion\` gate when the target
should differ per version.

<details>
<summary>The ${groups.length} link${plural} in this state</summary>

| Link | Resolves to |
|------|-------------|
${rows}${truncationNote}

</details>`
}

function renderManualSection(
  heading: string,
  blurb: string,
  groups: GroupedBrokenLinks[],
  isExternal: boolean,
  versionsChecked?: string[],
  maxGroups?: number,
): string {
  const { listed, hidden } = capGroups(groups, maxGroups ?? groups.length)
  const sections = listed
    .map((group) => {
      const versions = describeVersions(groupVersions(group), versionsChecked)
      const note = versions ? `\n\n**Only in:** ${versions}` : ''
      return TEMPLATES.group(group, isExternal) + note
    })
    .join('\n\n')
  const truncationNote = hidden
    ? `\n\nAnd ${hidden} more, listed in the report attached to the workflow run. Only the busiest are shown here, to keep the issue readable. Fixing the ones above moves some of the rest into view on the next run, but a link that is not shown is not fixed: use the artifact to work through the tail.`
    : ''
  return `## ${heading} (${groups.length} link${groups.length === 1 ? '' : 's'}, ${occurrenceCount(groups)} occurrence${occurrenceCount(groups) === 1 ? '' : 's'})

${blurb}

${sections}${truncationNote}`
}

/**
 * Render an internal report as four buckets ordered by how much work each one costs, from
 * one command down to nothing at all.
 */
function renderByFixStrategy(
  groups: GroupedBrokenLinks[],
  isExternal: boolean,
  versionsChecked?: string[],
): string {
  const codemod = groups.filter((g) => classifyFixStrategy(g) === 'codemod')
  const versionless = groups.filter((g) => classifyFixStrategy(g) === 'versionless')
  const anchors = groups.filter((g) => classifyFixStrategy(g) === 'anchor')
  const decide = groups.filter((g) => classifyFixStrategy(g) === 'decide')

  const summaryRows = [
    codemod.length > 0 &&
      `| 1. Run the codemod | ${codemod.length} | ${occurrenceCount(codemod)} | Mechanical. Run the command. |`,
    anchors.length > 0 &&
      `| 2. Fix stale anchors | ${anchors.length} | ${occurrenceCount(anchors)} | A heading was renamed. Repoint it. |`,
    decide.length > 0 &&
      `| 3. Pick a destination | ${decide.length} | ${occurrenceCount(decide)} | The codemod cannot resolve these. Needs a human. |`,
    versionless.length > 0 &&
      `| 4. Usually nothing | ${versionless.length} | ${occurrenceCount(versionless)} | Version-only redirects. Leave them versionless. |`,
  ].filter(Boolean) as string[]

  const parts = [
    `## Start here

| Bucket | Links | Occurrences | Effort |
|--------|-------|-------------|--------|
${summaryRows.join('\n')}

Work top to bottom. Bucket 1 is usually most of the report and costs one command.`,
  ]

  if (codemod.length > 0) parts.push(renderCodemodSection(codemod, versionsChecked))
  if (anchors.length > 0) {
    parts.push(
      renderManualSection(
        '2. Stale anchors',
        'The `#fragment` does not match a heading on the target page. Usually a heading was renamed: find it and repoint the link, or drop the fragment if the section is gone. Check that the page itself still exists first, since a missing page with a fragment also lands here.',
        anchors,
        isExternal,
        versionsChecked,
        MAX_ANCHOR_GROUPS,
      ),
    )
  }
  if (decide.length > 0) {
    parts.push(
      renderManualSection(
        '3. Links the codemod cannot fix',
        'The codemod looks each link up exactly as written, and for these that lookup finds nothing: either no redirect exists at all, or the redirect only exists under a version prefix the link does not carry. Choose a destination, or add a redirect from the path as written.',
        decide,
        isExternal,
        versionsChecked,
      ),
    )
  }

  if (versionless.length > 0) {
    parts.push(renderVersionlessSection(versionless))
  }

  return parts.join('\n\n')
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
  const hasBrokenOrRedirectGroups = report.groups.length > 0
  const hasSelfReferentialGroups = Boolean(report.selfReferentialGroups?.length)

  // Header
  parts.push(
    TEMPLATES.reportHeader(report.title, report.summary, report.timestamp, report.actionUrl),
  )
  parts.push('')

  if (!hasBrokenOrRedirectGroups && !hasSelfReferentialGroups) {
    parts.push(TEMPLATES.noIssues())
    return parts.join('\n')
  }

  // Table of contents for large reports. The internal report is grouped by fix strategy
  // instead, where the three bucket headings are the navigation.
  if (isExternal && report.groups.length > 5) {
    parts.push(TEMPLATES.tableOfContents(report.groups))
    parts.push('')
  }

  // Groups
  if (hasBrokenOrRedirectGroups) {
    parts.push(
      isExternal
        ? renderGroups(report.groups, isExternal)
        : renderByFixStrategy(report.groups, isExternal, report.versionsChecked),
    )
  }

  // Self-referential links section (external report only)
  if (hasSelfReferentialGroups) {
    parts.push(
      TEMPLATES.selfReferentialLinks('Potential Internal Links', report.selfReferentialGroups!),
    )
    parts.push('')
  }

  return parts.join('\n')
}

/**
 * Generate a compact PR comment for broken links
 */
export function generatePRComment(
  brokenLinks: BrokenLink[],
  options: {
    actionUrl?: string
    brokenAnchors?: CrossPageAnchorFlaw[]
    anchorsBlocking?: boolean
  } = {},
): string {
  const brokenAnchors = options.brokenAnchors ?? []
  if (brokenLinks.length === 0 && brokenAnchors.length === 0) return ''

  const groups = groupBrokenLinks(brokenLinks)
  const errors = groups.filter((g) => !g.isWarning)
  const warnings = groups.filter((g) => g.isWarning)
  const anchorSection = TEMPLATES.anchorSection(brokenAnchors, options.anchorsBlocking)

  return TEMPLATES.prComment(errors, warnings, anchorSection, options.actionUrl)
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

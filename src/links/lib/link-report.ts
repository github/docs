// Group broken links by target so one report section covers every file that links to it.

export interface BrokenLink {
  href: string
  file: string
  lines: number[]
  text?: string
  isAutotitle?: boolean
  isRedirect?: boolean
  redirectTarget?: string
  // update-internal-links cannot fix redirects found only inside the checked version.
  requiresVersionContext?: boolean
  // Conflicting redirect targets mean no single rewrite is correct for every version.
  hasConflictingRedirectTargets?: boolean
  statusCode?: number
  errorMessage?: string
  // Merged reports record broken versions; display logic hides them when all versions break.
  versions?: string[]
}

// Cross-page anchor flaws report stale fragments separately from missing pages because the
// target page exists.
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
  // Merged reports record every version they cover.
  versionsChecked?: string[]
}

const TEMPLATES = {
  reportHeader: (title: string, summary: string, timestamp: string, actionUrl?: string) =>
    `
# ${title}

${summary}

---

**Generated:** ${timestamp}${actionUrl ? `\n**Action Run:** [View Details](${actionUrl})` : ''}
`.trim(),

  tableOfContents: (groups: GroupedBrokenLinks[]) => {
    const items = groups.map((g) => {
      const icon = g.isWarning ? '⚠️' : '❌'
      const anchor = g.target.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()
      return `- ${icon} [\`${g.target}\`](#${anchor}) (${g.occurrences.length})`
    })
    return `## Quick Navigation\n\n${items.join('\n')}`
  },

  sectionHeader: (isWarning: boolean) =>
    isWarning ? '## ⚠️ Redirects to Update' : '## ❌ Broken Links',

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

  noIssues: () => 'No issues found! 🎉',

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

  // FAIL_ON_ANCHOR_FLAW controls blocking wording so advisory text cannot survive rollout.
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

// Version-only redirects are not renames. They let shared versionless links follow the
// reader's product version instead of hardcoding one product's path.
function isVersionOnlyRedirect(target: string, redirectTarget: string): boolean {
  const withoutVersion = redirectTarget.replace(VERSION_PREFIX_RE, '')
  return withoutVersion === target
}

// Redirect targets that differ only by version prefix describe the same rename from
// different checked versions.
function sameDestination(a: string, b: string): boolean {
  return a.replace(VERSION_PREFIX_RE, '') === b.replace(VERSION_PREFIX_RE, '')
}

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

  // Strip the checked-version prefix so versionless sources do not hardcode that release.
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

function sortOccurrencesByFile(occurrences: BrokenLink[]): BrokenLink[] {
  return [...occurrences].sort((a, b) => a.file.localeCompare(b.file))
}

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

  return groups.sort((a, b) => {
    if (a.isWarning !== b.isWarning) return a.isWarning ? 1 : -1
    return a.target.localeCompare(b.target)
  })
}

function extractDomain(href: string): string {
  try {
    return new URL(href).hostname
  } catch {
    return 'invalid-urls'
  }
}

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

// Mention versions only for version-specific breakage, because the common case breaks in
// every checked version and can push the issue body past its size limit.
export function describeVersions(
  versions: string[] | undefined,
  versionsChecked: string[] | undefined,
): string | undefined {
  if (!versions?.length || !versionsChecked?.length) return undefined
  if (versionsChecked.length === 1) return undefined
  if (versions.length >= versionsChecked.length) return undefined
  return versions.join(', ')
}

// Merge by link so one real problem produces one section, with affected versions recorded
// on the occurrence.
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
          // Keep the first redirect target and flag conflicts when later versions point elsewhere.
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

  // Supplied matrix versions preserve versions that produced no report file.
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

  // Per-version JSON reports also render standalone artifacts, so each title names its scope.
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

// Fix buckets replace hundreds of URL sections with decisions:
// run a command, repoint a heading anchor, or choose a new destination by hand.
export type FixStrategy = 'codemod' | 'versionless' | 'anchor' | 'decide'

// Past this cap, one content-wide command is clearer than one command per docset.
// Content-wide runs take minutes; three docsets take seconds.
const MAX_LISTED_CODEMOD_PATHS = 8

// The codemod handles this bucket, so the table is reference material, not a task list.
// Printing every row can consume more than half the issue body budget.
const MAX_CODEMOD_ROWS = 40

// Stale anchors need human work, but runs exceed 70 entries and each lists every file.
// The workflow artifact keeps entries over the cap.
const MAX_ANCHOR_GROUPS = 25

// Version-only redirect rows document ruled-out links, not writer tasks.
const MAX_VERSIONLESS_ROWS = 25

// Cap files per target so one reused link cannot fill the issue body. The busiest
// eight-version run found 31 files for one target, so this cap truncates known input.
const MAX_FILES_PER_GROUP = 20

// Split capped lists with an explicit hidden count. GitHub rejects issue bodies over
// 65,536 characters, and the workflow truncates at 60,000 with a blind slice.
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
    // Only all-version-only redirects land in the no-action bucket; mixed groups stay actionable.
    if (redirectTargets.every((target) => isVersionOnlyRedirect(group.target, target))) {
      return 'versionless'
    }
    // Version-context redirects need human review because the codemod looks up hrefs as written.
    if (group.occurrences.some((occ) => occ.requiresVersionContext)) {
      return 'decide'
    }
    // Conflicting redirect targets need human review because no single rewrite is correct.
    if (group.occurrences.some((occ) => occ.hasConflictingRedirectTargets)) {
      return 'decide'
    }
    return 'codemod'
  }
  // A fragment on a broken target usually means the heading moved, not the page.
  if (group.target.includes('#')) {
    return 'anchor'
  }
  return 'decide'
}

// Derive codemod directories from files that contain links so runs can stay scoped.
// Checker paths are relative to content, and already-rooted content or data paths stay as is.
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

// Version-only redirects are not renames. Versionless shared links follow the reader's
// product version, and rewriting them would pin content to one product path.
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

// Order internal report buckets from one command down to no action.
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

export function reportToMarkdown(report: LinkReport, isExternal = false): string {
  const parts: string[] = []
  const hasBrokenOrRedirectGroups = report.groups.length > 0
  const hasSelfReferentialGroups = Boolean(report.selfReferentialGroups?.length)

  parts.push(
    TEMPLATES.reportHeader(report.title, report.summary, report.timestamp, report.actionUrl),
  )
  parts.push('')

  if (!hasBrokenOrRedirectGroups && !hasSelfReferentialGroups) {
    parts.push(TEMPLATES.noIssues())
    return parts.join('\n')
  }

  // Large external reports need a table of contents; internal bucket headings navigate.
  if (isExternal && report.groups.length > 5) {
    parts.push(TEMPLATES.tableOfContents(report.groups))
    parts.push('')
  }

  if (hasBrokenOrRedirectGroups) {
    parts.push(
      isExternal
        ? renderGroups(report.groups, isExternal)
        : renderByFixStrategy(report.groups, isExternal, report.versionsChecked),
    )
  }

  // Self-referential links only appear in external reports.
  if (hasSelfReferentialGroups) {
    parts.push(
      TEMPLATES.selfReferentialLinks('Potential Internal Links', report.selfReferentialGroups!),
    )
    parts.push('')
  }

  return parts.join('\n')
}

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

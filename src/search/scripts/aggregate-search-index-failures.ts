#!/usr/bin/env tsx
/**
 * Aggregates search index failures from multiple language runs into a single
 * consolidated report. Groups failures by page path to show which versions
 * and languages failed for each page.
 *
 * Usage: tsx aggregate-search-index-failures.ts <artifacts-dir> [--workflow-url <url>]
 *
 * Reads failures-summary.json files from subdirectories and outputs a formatted
 * message suitable for Slack notifications.
 */

import fs from 'fs'
import path from 'path'

interface Failure {
  url?: string
  relativePath?: string
  error: string
  errorType: string
}

interface LanguageFailures {
  indexName: string
  languageCode: string
  indexVersion: string
  failures: Failure[]
}

export interface FailuresSummary {
  totalFailedPages: number
  failures: LanguageFailures[]
}

interface PageFailure {
  versions: Set<string>
  languages: Set<string>
  // Full error text to the number of failures reporting it, so the report can
  // lead with the dominant error rather than an alphabetically lucky one.
  errors: Map<string, number>
}

// A page usually fails identically across every version and language it appears
// in, so the same error repeats many times. Show a few distinct ones per page,
// keep each short, and keep the whole report inside the limits of the places it
// gets posted. A GitHub issue body is rejected outright over 65536 characters,
// which would lose the entire alert during the largest incidents.
const MAX_ERRORS_PER_PAGE = 3
const MAX_ERROR_LENGTH = 200
const MAX_MESSAGE_LENGTH = 30000

/**
 * Renders a failure as a single line of `errorType: error`, collapsing any
 * whitespace so one failure can never span multiple lines of the report.
 */
function formatError(failure: Failure): string {
  const normalize = (value: unknown) =>
    typeof value === 'string' ? value.replace(/\s+/g, ' ').trim() : ''

  const detail = normalize(failure.error)
  const errorType = normalize(failure.errorType)

  return errorType && detail ? `${errorType}: ${detail}` : errorType || detail
}

/**
 * Escapes the characters Slack treats as control syntax, so error text lifted
 * from an API response cannot inject a mention such as `<!channel>` into the
 * notification. The slack-alert action escapes its own interpolated fields for
 * this reason, but passes a caller-supplied message through verbatim.
 *
 * The same string is also posted as a GitHub issue body, where these entities
 * render back to the original characters.
 */
function escapeSlackControlCharacters(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/**
 * Truncates on code points so a multi-byte character is never split in half.
 * Docs content is translated, so error text routinely carries non-ASCII.
 */
function truncate(text: string, maxLength: number): string {
  const characters = Array.from(text)
  if (characters.length <= maxLength) return text
  return `${characters.slice(0, maxLength - 3).join('')}...`
}

export interface AggregationResult {
  hasFailures: boolean
  message: string
  totalCount?: number
}

/**
 * Aggregates failures from multiple summaries into a single report.
 * Groups failures by page path to show which versions and languages failed for each.
 */
export function aggregateFailures(
  allFailures: FailuresSummary[],
  workflowUrl?: string,
): AggregationResult {
  if (allFailures.length === 0) {
    return { hasFailures: false, message: '' }
  }

  // Group failures by page path
  const pageFailures = new Map<string, PageFailure>()

  for (const summary of allFailures) {
    for (const langFailures of summary.failures) {
      for (const failure of langFailures.failures) {
        const pagePath = failure.relativePath || failure.url || 'unknown'

        if (!pageFailures.has(pagePath)) {
          pageFailures.set(pagePath, {
            versions: new Set(),
            languages: new Set(),
            errors: new Map(),
          })
        }

        const pageData = pageFailures.get(pagePath)!
        pageData.versions.add(langFailures.indexVersion)
        pageData.languages.add(langFailures.languageCode)

        const error = formatError(failure)
        if (error) pageData.errors.set(error, (pageData.errors.get(error) || 0) + 1)
      }
    }
  }

  // Use unique page count, not total failure instances
  const uniquePageCount = pageFailures.size

  // Format the message
  const lines: string[] = [
    `:warning: ${uniquePageCount} page(s) failed to scrape for general search indexing`,
    '',
    'The indexing completed but some pages could not be scraped. This may affect search results for those pages.',
    '',
  ]

  // Sort pages alphabetically and format each
  const sortedPages = Array.from(pageFailures.entries()).sort((a, b) => a[0].localeCompare(b[0]))

  const renderedPages = sortedPages.map(([pagePath, data]) => {
    const versions = Array.from(data.versions).sort().join(', ')
    const languages = Array.from(data.languages).sort().join(', ')
    const bullet = `• \`${escapeSlackControlCharacters(pagePath)}\` (versions: ${versions}, languages: ${languages})`

    // Truncate before escaping so an entity is never cut in half, and so the
    // limit stays a limit on the error itself rather than on its encoding.
    // Merge counts after rendering: two errors that differ only past the
    // truncation point would otherwise print as two identical lines.
    const renderedErrors = new Map<string, number>()
    for (const [error, count] of data.errors) {
      const rendered = escapeSlackControlCharacters(truncate(error, MAX_ERROR_LENGTH))
      renderedErrors.set(rendered, (renderedErrors.get(rendered) || 0) + count)
    }

    // Most frequent error first, breaking ties alphabetically so the report is
    // stable across runs on the same input.
    const errors = Array.from(renderedErrors.entries()).sort(
      (a, b) => b[1] - a[1] || a[0].localeCompare(b[0]),
    )

    const errorLines = errors
      .slice(0, MAX_ERRORS_PER_PAGE)
      .map(([error, count]) => `  ↳ ${error}${count > 1 ? ` (×${count})` : ''}`)
    if (errors.length > MAX_ERRORS_PER_PAGE) {
      errorLines.push(`  ↳ ...and ${errors.length - MAX_ERRORS_PER_PAGE} more distinct error(s)`)
    }

    return { bullet, errorLines }
  })

  const truncatedPagesLine = (count: number) =>
    `...and ${count} more page(s) not listed. See the workflow run for the full set.`
  const footerLines = workflowUrl ? ['', `Workflow: ${workflowUrl}`] : []

  // Reserve room for the footer up front, using the longest the truncation
  // notice could get, so MAX_MESSAGE_LENGTH bounds the whole message rather
  // than just the part written inside the loop.
  const footerReserve =
    truncatedPagesLine(sortedPages.length).length +
    1 +
    footerLines.reduce((total, line) => total + line.length + 1, 0)
  const budget = MAX_MESSAGE_LENGTH - footerReserve

  let usedLength = lines.join('\n').length

  // Which pages get listed is decided before any error text is added, since the
  // page list is the report and the errors are the hint. Otherwise a handful of
  // long errors would crowd out most of the pages.
  const shownPages: { bullet: string; errorLines: string[]; shownErrorLines: string[] }[] = []
  for (const page of renderedPages) {
    const bulletLength = page.bullet.length + 1
    // Always show at least one page, even if that page alone blows the budget.
    if (shownPages.length > 0 && usedLength + bulletLength > budget) break
    usedLength += bulletLength
    shownPages.push({ ...page, shownErrorLines: [] })
  }

  errorLineBudget: for (const page of shownPages) {
    for (const errorLine of page.errorLines) {
      const errorLineLength = errorLine.length + 1
      if (usedLength + errorLineLength > budget) break errorLineBudget
      usedLength += errorLineLength
      page.shownErrorLines.push(errorLine)
    }
  }

  for (const page of shownPages) {
    lines.push(page.bullet, ...page.shownErrorLines)
  }

  if (shownPages.length < sortedPages.length) {
    lines.push(truncatedPagesLine(sortedPages.length - shownPages.length))
  }

  lines.push(...footerLines)

  const message = lines.join('\n')

  return { hasFailures: true, message, totalCount: uniquePageCount }
}

/**
 * Reads failure summaries from artifact directories.
 */
export function readFailureSummaries(artifactsDir: string): FailuresSummary[] {
  const allFailures: FailuresSummary[] = []
  const subdirs = fs.readdirSync(artifactsDir, { withFileTypes: true })

  for (const subdir of subdirs) {
    if (!subdir.isDirectory()) continue

    const summaryPath = path.join(artifactsDir, subdir.name, 'failures-summary.json')
    if (fs.existsSync(summaryPath)) {
      const content = fs.readFileSync(summaryPath, 'utf-8')
      try {
        allFailures.push(JSON.parse(content) as FailuresSummary)
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error)
        console.warn(`Warning: Failed to parse JSON in ${summaryPath}: ${message}`)
      }
    }
  }

  return allFailures
}

function main() {
  const args = process.argv.slice(2)
  const artifactsDir = args[0]
  const workflowUrlIndex = args.indexOf('--workflow-url')
  const workflowUrl = workflowUrlIndex !== -1 ? args[workflowUrlIndex + 1] : undefined

  if (!artifactsDir) {
    console.error(
      'Usage: tsx aggregate-search-index-failures.ts <artifacts-dir> [--workflow-url <url>]',
    )
    process.exit(1)
  }

  const allFailures = readFailureSummaries(artifactsDir)
  const result = aggregateFailures(allFailures, workflowUrl)
  console.log(JSON.stringify(result))
}

// Only run main when executed directly (not imported)
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}

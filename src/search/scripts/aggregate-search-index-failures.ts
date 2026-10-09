#!/usr/bin/env tsx
// Reads failures-summary.json files from language index jobs and prints an AggregationResult.
// The message groups failures by page path for index-general-search.yml to post to a
// GitHub issue and Slack.
//
// Usage: tsx aggregate-search-index-failures.ts <artifacts-dir> [--workflow-url <url>]

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
  // Maps full error text to failure count, so the report leads with the dominant error.
  errors: Map<string, number>
}

// Pages usually fail the same way across versions and languages. Keep a few short
// errors per page and the report below post limits. GitHub rejects issue bodies over
// 65536 characters, which would lose the alert during the largest incidents.
const MAX_ERRORS_PER_PAGE = 3
const MAX_ERROR_LENGTH = 200
const MAX_MESSAGE_LENGTH = 30000

// Renders a failure as one errorType: error line, so one failure cannot span report lines.
function formatError(failure: Failure): string {
  const normalize = (value: unknown) =>
    typeof value === 'string' ? value.replace(/\s+/g, ' ').trim() : ''

  const detail = normalize(failure.error)
  const errorType = normalize(failure.errorType)

  return errorType && detail ? `${errorType}: ${detail}` : errorType || detail
}

// Escapes Slack control syntax, so API error text cannot inject a mention such as <!channel>.
// The slack-alert action escapes its interpolated fields, but passes caller messages verbatim.
//
// The same string is also posted as a GitHub issue body, where these entities
// render back to the original characters.
function escapeSlackControlCharacters(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

// Truncates on code points so a multi-byte character is never split in half.
// Docs content is translated, so error text routinely carries non-ASCII.
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

export function aggregateFailures(
  allFailures: FailuresSummary[],
  workflowUrl?: string,
): AggregationResult {
  if (allFailures.length === 0) {
    return { hasFailures: false, message: '' }
  }

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

  // Count pages, not failure instances, because one page can fail per version and language.
  const uniquePageCount = pageFailures.size

  const lines: string[] = [
    `:warning: ${uniquePageCount} page(s) failed to scrape for general search indexing`,
    '',
    'The indexing completed but some pages could not be scraped. This may affect search results for those pages.',
    '',
  ]

  const sortedPages = Array.from(pageFailures.entries()).sort((a, b) => a[0].localeCompare(b[0]))

  const renderedPages = sortedPages.map(([pagePath, data]) => {
    const versions = Array.from(data.versions).sort().join(', ')
    const languages = Array.from(data.languages).sort().join(', ')
    const bullet = `• \`${escapeSlackControlCharacters(pagePath)}\` (versions: ${versions}, languages: ${languages})`

    // Truncate before escaping so entities stay whole and limits apply; merge identical lines.
    const renderedErrors = new Map<string, number>()
    for (const [error, count] of data.errors) {
      const rendered = escapeSlackControlCharacters(truncate(error, MAX_ERROR_LENGTH))
      renderedErrors.set(rendered, (renderedErrors.get(rendered) || 0) + count)
    }

    // Sort frequent errors first and break ties alphabetically for stable output.
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

  // Reserve longest notice and footer so the cap covers the full message; a forced page can exceed it.
  const footerReserve =
    truncatedPagesLine(sortedPages.length).length +
    1 +
    footerLines.reduce((total, line) => total + line.length + 1, 0)
  const budget = MAX_MESSAGE_LENGTH - footerReserve

  let usedLength = lines.join('\n').length

  // Choose pages before adding error text, so long errors cannot crowd pages out of the report.
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

if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}

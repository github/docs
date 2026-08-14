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
          })
        }

        const pageData = pageFailures.get(pagePath)!
        pageData.versions.add(langFailures.indexVersion)
        pageData.languages.add(langFailures.languageCode)
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

  for (const [pagePath, data] of sortedPages) {
    const versions = Array.from(data.versions).sort().join(', ')
    const languages = Array.from(data.languages).sort().join(', ')
    lines.push(`• \`${pagePath}\` (versions: ${versions}, languages: ${languages})`)
  }

  if (workflowUrl) {
    lines.push('')
    lines.push(`Workflow: ${workflowUrl}`)
  }

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

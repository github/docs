/**
 * External Link Checker
 *
 * Validates external URLs in content files.
 * Designed to run weekly with aggressive caching.
 *
 * Usage:
 *   npm run check-links-external
 *   npm run check-links-external -- --max 100
 *
 * Environment variables:
 *   GITHUB_TOKEN - For creating issue reports
 *   ACTION_RUN_URL - Link to the action run
 *   CREATE_REPORT - Whether to create an issue report (default: false)
 *   REPORT_REPOSITORY - Repository to create report issues in
 *   CACHE_MAX_AGE_DAYS - How long to cache URL check results (default: 7)
 */

import { program } from 'commander'
import chalk from 'chalk'
import fs from 'fs'
import { glob } from 'glob'
import { JSONFilePreset } from 'lowdb/node'

import { extractLinksFromMarkdown } from '@/links/lib/extract-links'
import {
  type BrokenLink,
  generateExternalLinkReport,
  reportToMarkdown,
} from '@/links/lib/link-report'
import { uploadArtifact } from '@/links/scripts/upload-artifact'
import { createReportIssue, linkReports } from '@/workflows/issue-report'
import github from '@/workflows/github'
import excludedLinks from '@/links/lib/excluded-links'
import coreLib from '@actions/core'

// Cache configuration
const CACHE_FILE = process.env.EXTERNAL_LINK_CACHE_FILE || 'external-link-cache.json'
const CACHE_MAX_AGE_DAYS = parseInt(process.env.CACHE_MAX_AGE_DAYS || '7', 10)
const CACHE_MAX_AGE_MS = CACHE_MAX_AGE_DAYS * 24 * 60 * 60 * 1000

// Request configuration
const REQUEST_TIMEOUT_MS = 30000 // 30 seconds
const REQUEST_DELAY_MS = 100 // 100ms between requests to avoid rate limiting

// Create a set for fast lookups of excluded links
const excludedLinksSet = new Set(excludedLinks.map(({ is }) => is).filter(Boolean))
const excludedLinksPrefixes = excludedLinks.map(({ startsWith }) => startsWith).filter(Boolean)

function isExcludedLink(href: string): boolean {
  if (excludedLinksSet.has(href)) return true
  return excludedLinksPrefixes.some((prefix) => prefix && href.startsWith(prefix))
}

// Cache type
interface CacheEntry {
  timestamp: number
  ok: boolean
  statusCode?: number
  error?: string
}

interface CacheData {
  urls: Record<string, CacheEntry>
}

/**
 * Sleep for a given number of milliseconds
 */
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Check a single external URL
 * Uses HEAD first, falls back to GET if HEAD returns 4xx/5xx
 */
async function checkUrl(
  url: string,
  cache: CacheData,
): Promise<{ ok: boolean; statusCode?: number; error?: string; cached: boolean }> {
  // Check cache first
  const cached = cache.urls[url]
  if (cached) {
    const age = Date.now() - cached.timestamp
    if (age < CACHE_MAX_AGE_MS) {
      return { ok: cached.ok, statusCode: cached.statusCode, error: cached.error, cached: true }
    }
  }

  const headers = { 'User-Agent': 'GitHub-Docs-Link-Checker/1.0' }

  // Try HEAD first (faster, less data)
  let response = await fetchWithTimeout(url, 'HEAD', headers)

  // Fall back to GET if HEAD fails (some servers don't support HEAD properly)
  if (response && !response.ok && response.status >= 400) {
    response = await fetchWithTimeout(url, 'GET', headers)
  }

  if (!response) {
    // Timeout or network error
    return { ok: false, error: 'Request timed out or failed', cached: false }
  }

  const result = {
    ok: response.ok,
    statusCode: response.status,
    error: response.ok ? undefined : `HTTP ${response.status}`,
    cached: false,
  }

  // Update cache
  cache.urls[url] = {
    timestamp: Date.now(),
    ok: result.ok,
    statusCode: result.statusCode,
    error: result.error,
  }

  return result
}

/**
 * Fetch with timeout, returns null on error
 */
async function fetchWithTimeout(
  url: string,
  method: 'HEAD' | 'GET',
  headers: Record<string, string>,
): Promise<Response | null> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    const response = await fetch(url, {
      method,
      signal: controller.signal,
      headers,
      redirect: 'follow',
    })
    clearTimeout(timeout)
    return response
  } catch {
    clearTimeout(timeout)
    return null
  }
}

/**
 * Extract all external links from content files
 */
async function extractAllExternalLinks(): Promise<Map<string, { file: string; line: number }[]>> {
  const links = new Map<string, { file: string; line: number }[]>()

  // Find all Markdown files
  const files = await glob('content/**/*.md')

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8')
    const result = extractLinksFromMarkdown(content)

    for (const link of result.externalLinks) {
      // Only check HTTPS links
      if (!link.href.startsWith('https://')) continue
      if (isExcludedLink(link.href)) continue

      // Normalize URL (remove anchors for checking)
      const url = link.href.split('#')[0]

      if (!links.has(url)) {
        links.set(url, [])
      }
      links.get(url)!.push({ file, line: link.line })
    }
  }

  return links
}

/**
 * Main entry point
 */
async function main() {
  program
    .name('check-links-external')
    .description('External link checker with caching')
    .option('--max <number>', 'Maximum number of URLs to check', parseInt)
    .option('--verbose', 'Verbose output')
    .option('--dry-run', "Extract links but don't check them")
    .parse()

  const options = program.opts()
  const startTime = Date.now()

  console.log(chalk.blue('🌐 External Link Checker'))
  console.log('')

  // Load cache
  const defaultData: CacheData = { urls: {} }
  const db = await JSONFilePreset<CacheData>(CACHE_FILE, defaultData)
  await db.read()

  // Report cache stats
  const now = Date.now()
  let freshCount = 0
  let staleCount = 0
  for (const entry of Object.values(db.data.urls)) {
    if (now - entry.timestamp < CACHE_MAX_AGE_MS) {
      freshCount++
    } else {
      staleCount++
    }
  }
  console.log(`Cache: ${freshCount} fresh, ${staleCount} stale entries`)
  console.log('')

  // Extract all external links
  console.log('Extracting external links from content files...')
  const allLinks = await extractAllExternalLinks()
  console.log(`Found ${allLinks.size} unique external URLs`)
  console.log('')

  if (options.dryRun) {
    console.log('Dry run mode - not checking URLs')
    // Show sample of URLs
    const sample = Array.from(allLinks.keys()).slice(0, 20)
    for (const url of sample) {
      console.log(`  ${url}`)
    }
    if (allLinks.size > 20) {
      console.log(`  ... and ${allLinks.size - 20} more`)
    }
    process.exit(0)
  }

  // Check URLs
  const brokenLinks: BrokenLink[] = []
  let checkedCount = 0
  let cachedCount = 0

  const urls = Array.from(allLinks.keys())
  const maxUrls = options.max ? Math.min(options.max, urls.length) : urls.length

  console.log(`Checking ${maxUrls} URLs (may take a while)...`)

  for (let i = 0; i < maxUrls; i++) {
    const url = urls[i]
    const occurrences = allLinks.get(url)!

    const result = await checkUrl(url, db.data)
    checkedCount++

    if (result.cached) {
      cachedCount++
    }

    if (!result.ok) {
      for (const occ of occurrences) {
        brokenLinks.push({
          href: url,
          file: occ.file,
          lines: [occ.line],
          statusCode: result.statusCode,
          errorMessage: result.error,
        })
      }

      if (options.verbose) {
        console.log(`  ❌ ${url} - ${result.error || `HTTP ${result.statusCode}`}`)
      }
    } else if (options.verbose && !result.cached) {
      console.log(`  ✅ ${url}`)
    }

    // Progress update every 100 URLs
    if (checkedCount % 100 === 0) {
      console.log(`  Checked ${checkedCount}/${maxUrls} URLs...`)
    }

    // Small delay between non-cached requests to avoid rate limiting
    if (!result.cached) {
      await sleep(REQUEST_DELAY_MS)
    }
  }

  // Save cache
  await db.write()

  // Report results
  const duration = ((Date.now() - startTime) / 1000).toFixed(1)
  console.log('')
  console.log(
    chalk.blue(`Checked ${checkedCount} URLs in ${duration}s (${cachedCount} from cache)`),
  )

  if (brokenLinks.length === 0) {
    console.log(chalk.green('✅ All external links valid!'))
    process.exit(0)
  }

  // Generate report
  const report = generateExternalLinkReport(brokenLinks, {
    actionUrl: process.env.ACTION_RUN_URL,
  })

  console.log('')
  console.log(chalk.red(`❌ ${report.uniqueTargets} domain(s) with broken links`))
  console.log(chalk.red(`   ${report.totalOccurrences} total occurrence(s)`))

  // Show summary by domain
  console.log('')
  console.log('Broken links by domain:')
  for (const group of report.groups.slice(0, 10)) {
    console.log(`  ${group.target}: ${group.occurrences.length} occurrence(s)`)
  }
  if (report.groups.length > 10) {
    console.log(`  ... and ${report.groups.length - 10} more domains`)
  }

  // Write artifact
  const markdown = reportToMarkdown(report, true)
  await uploadArtifact('external-link-report.md', markdown)
  await uploadArtifact('external-link-report.json', JSON.stringify(report, null, 2))

  // Create issue report if configured
  const createReport = process.env.CREATE_REPORT === 'true'
  const reportRepository = process.env.REPORT_REPOSITORY || 'github/docs-content'

  if (createReport && process.env.GITHUB_TOKEN) {
    console.log('')
    console.log('Creating issue report...')

    const octokit = github()
    const reportLabel = process.env.REPORT_LABEL || 'broken link report'
    const reportAuthor = process.env.REPORT_AUTHOR || 'docs-bot'

    const newReport = await createReportIssue({
      core: coreLib,
      octokit,
      reportTitle: report.title,
      reportBody: markdown,
      reportRepository,
      reportLabel,
    })

    // Link to previous reports
    await linkReports({
      core: coreLib,
      octokit,
      newReport,
      reportRepository,
      reportAuthor,
      reportLabel,
    })

    console.log(`Created report issue: ${newReport.html_url}`)
  }
}

// Run if invoked directly
;(async () => {
  try {
    await main()
  } catch (err: unknown) {
    console.error('Fatal error:', err)
    process.exit(1)
  }
})()

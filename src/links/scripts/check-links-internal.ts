/**
 * Internal Link Checker
 *
 * Comprehensive check of all internal links across all versions and languages.
 * Designed to run as a scheduled workflow (twice weekly).
 *
 * Usage:
 *   npm run check-links-internal
 *   npm run check-links-internal -- --version free-pro-team@latest --language en
 *
 * Environment variables:
 *   VERSION - Version to check (e.g., free-pro-team@latest)
 *   LANGUAGE - Language to check (e.g., en)
 *   GITHUB_TOKEN - For creating issue reports
 *   ACTION_RUN_URL - Link to the action run
 *   CREATE_REPORT - Whether to create an issue report (default: false)
 *   REPORT_REPOSITORY - Repository to create report issues in
 *   CHECK_ANCHORS - Whether to check anchor links (default: true)
 */

import { program } from 'commander'
import chalk from 'chalk'
import cheerio from 'cheerio'

import warmServer from '@/frame/lib/warm-server'
import { renderContent } from '@/content-render/index'
import { allVersions, allVersionKeys } from '@/versions/lib/all-versions'
import languages from '@/languages/lib/languages-server'
import {
  normalizeLinkPath,
  checkInternalLink,
  checkAssetLink,
  isAssetLink,
} from '@/links/lib/extract-links'
import {
  type BrokenLink,
  generateInternalLinkReport,
  reportToMarkdown,
} from '@/links/lib/link-report'
import { uploadArtifact } from '@/links/scripts/upload-artifact'
import { createReportIssue, linkReports } from '@/workflows/issue-report'
import github from '@/workflows/github'
import excludedLinks from '@/links/lib/excluded-links'
import type { Page, Permalink, Context } from '@/types'
import coreLib from '@actions/core'

// Create a set for fast lookups of excluded links
const excludedLinksSet = new Set(excludedLinks.map(({ is }) => is).filter(Boolean))
const excludedLinksPrefixes = excludedLinks.map(({ startsWith }) => startsWith).filter(Boolean)

function isExcludedLink(href: string): boolean {
  if (excludedLinksSet.has(href)) return true
  return excludedLinksPrefixes.some((prefix) => prefix && href.startsWith(prefix))
}

interface CheckResult {
  brokenLinks: BrokenLink[]
  redirectLinks: BrokenLink[]
  totalPagesChecked: number
  totalLinksChecked: number
}

/**
 * Render a page and extract all internal links from the HTML
 */
async function getLinksFromRenderedPage(
  page: Page,
  permalink: Permalink,
  context: Context,
): Promise<{ href: string; text: string }[]> {
  const links: { href: string; text: string }[] = []

  try {
    // Render the page content
    const html = await renderContent(page.markdown, context)
    const $ = cheerio.load(html)

    // Extract all anchor links
    $('a[href]').each((_, el) => {
      const href = $(el).attr('href')
      const text = $(el).text()

      if (href && href.startsWith('/')) {
        links.push({ href, text })
      }
    })
  } catch (error) {
    console.warn(`Failed to render ${page.relativePath} (${permalink.href}):`, error)
  }

  return links
}

/**
 * Check anchor links on a rendered page
 */
async function checkAnchorsOnPage(
  page: Page,
  permalink: Permalink,
  context: Context,
): Promise<BrokenLink[]> {
  const brokenAnchors: BrokenLink[] = []

  try {
    const html = await renderContent(page.markdown, context)
    const $ = cheerio.load(html)

    // Find all anchor links (same-page links)
    $('a[href^="#"]').each((_, el) => {
      const href = $(el).attr('href')
      if (!href || href === '#' || href === '#top') return

      // Check if the anchor target exists
      const targetId = href.slice(1)
      // Escape special CSS selector characters for jQuery/cheerio
      const escapedId = targetId.replace(/([!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~])/g, '\\$1')
      const targetExists = $(`#${escapedId}`).length > 0 || $(`[name="${targetId}"]`).length > 0

      if (!targetExists) {
        brokenAnchors.push({
          href,
          file: page.relativePath,
          lines: [0], // Line number not available from rendered HTML
          text: $(el).text(),
          isAutotitle: false,
        })
      }
    })
  } catch {
    // Rendering errors are logged elsewhere
  }

  return brokenAnchors
}

/**
 * Check all pages for a given version and language
 */
async function checkVersion(
  version: string,
  language: string,
  pageList: Page[],
  pageMap: Record<string, Page>,
  redirects: Record<string, string>,
  options: { checkAnchors: boolean; verbose: boolean },
): Promise<CheckResult> {
  const brokenLinks: BrokenLink[] = []
  const redirectLinks: BrokenLink[] = []
  let totalPagesChecked = 0
  let totalLinksChecked = 0

  const versionObj = allVersions[version]
  if (!versionObj) {
    throw new Error(`Unknown version: ${version}`)
  }

  // Filter pages for this version and language
  const relevantPages = pageList.filter((page) => {
    if (page.languageCode !== language) return false
    if (!page.applicableVersions?.includes(version)) return false
    return true
  })

  console.log(`  Checking ${relevantPages.length} pages for ${version}/${language}`)

  for (const page of relevantPages) {
    // Find the permalink for this version
    const permalink = page.permalinks?.find((p) => p.pageVersion === version)
    if (!permalink) continue

    totalPagesChecked++

    // Create context for rendering
    const context: Context = {
      currentVersion: version,
      currentLanguage: language,
      currentVersionObj: versionObj,
      page,
      pages: pageMap,
      redirects,
    } as Context

    // Get links from rendered page
    const links = await getLinksFromRenderedPage(page, permalink, context)
    totalLinksChecked += links.length

    // Check each link
    for (const link of links) {
      if (isExcludedLink(link.href)) continue

      // Check if this is an asset link (images, etc.) - verify file exists on disk
      if (isAssetLink(link.href)) {
        if (!checkAssetLink(link.href)) {
          brokenLinks.push({
            href: link.href,
            file: page.relativePath,
            lines: [0],
            text: link.text,
          })
        }
        continue
      }

      const normalized = normalizeLinkPath(link.href)
      const result = checkInternalLink(normalized, pageMap, redirects)

      if (!result.exists) {
        brokenLinks.push({
          href: link.href,
          file: page.relativePath,
          lines: [0],
          text: link.text,
        })
      } else if (result.isRedirect) {
        redirectLinks.push({
          href: link.href,
          file: page.relativePath,
          lines: [0],
          text: link.text,
          isRedirect: true,
          redirectTarget: result.redirectTarget,
        })
      }
    }

    // Check anchors if enabled
    if (options.checkAnchors) {
      const anchorFlaws = await checkAnchorsOnPage(page, permalink, context)
      brokenLinks.push(...anchorFlaws)
    }

    if (options.verbose && totalPagesChecked % 100 === 0) {
      console.log(`    Checked ${totalPagesChecked} pages...`)
    }
  }

  return { brokenLinks, redirectLinks, totalPagesChecked, totalLinksChecked }
}

/**
 * Main entry point
 */
async function main() {
  program
    .name('check-links-internal')
    .description('Comprehensive internal link checker')
    .option('-v, --version <version>', 'Version to check (e.g., free-pro-team@latest)')
    .option('-l, --language <language>', 'Language to check (e.g., en)')
    .option('--check-anchors', 'Check anchor links within pages', true)
    .option('--no-check-anchors', 'Skip anchor link checking')
    .option('--verbose', 'Verbose output')
    .parse()

  const options = program.opts()
  const startTime = Date.now()

  console.log(chalk.blue('🔗 Internal Link Checker'))
  console.log('')

  // Determine version and language to check
  const version = options.version || process.env.VERSION
  const language = options.language || process.env.LANGUAGE || 'en'
  const checkAnchors = options.checkAnchors && process.env.CHECK_ANCHORS !== 'false'

  if (!version) {
    console.error('Error: --version or VERSION env var required')
    console.error('Available versions:', allVersionKeys.join(', '))
    process.exit(1)
  }

  if (!allVersions[version]) {
    console.error(`Error: Unknown version "${version}"`)
    console.error('Available versions:', allVersionKeys.join(', '))
    process.exit(1)
  }

  if (!languages[language]) {
    console.error(`Error: Unknown language "${language}"`)
    console.error('Available languages:', Object.keys(languages).join(', '))
    process.exit(1)
  }

  console.log(`Version: ${version}`)
  console.log(`Language: ${language}`)
  console.log(`Check anchors: ${checkAnchors}`)
  console.log('')

  // Load page data
  console.log('Loading page data...')
  const { pages: pageMap, redirects, pageList } = await warmServer([language])
  console.log(`Loaded ${pageList.length} pages, ${Object.keys(redirects).length} redirects`)
  console.log('')

  // Run the check
  const result = await checkVersion(version, language, pageList, pageMap, redirects, {
    checkAnchors,
    verbose: options.verbose,
  })

  // Report results
  const duration = ((Date.now() - startTime) / 1000).toFixed(1)
  console.log('')
  console.log(
    chalk.blue(
      `Checked ${result.totalPagesChecked} pages, ${result.totalLinksChecked} links in ${duration}s`,
    ),
  )

  const allBrokenLinks = [...result.brokenLinks, ...result.redirectLinks]

  if (allBrokenLinks.length === 0) {
    console.log(chalk.green('✅ All internal links valid!'))
    process.exit(0)
  }

  // Generate report
  const report = generateInternalLinkReport(allBrokenLinks, {
    actionUrl: process.env.ACTION_RUN_URL,
    version,
    language,
    redirects,
  })

  console.log('')
  console.log(chalk.red(`❌ ${result.brokenLinks.length} broken link(s)`))
  console.log(chalk.yellow(`⚠️  ${result.redirectLinks.length} redirect(s) to update`))

  // Write artifact
  const markdown = reportToMarkdown(report)
  await uploadArtifact(`link-report-${version}-${language}.md`, markdown)
  await uploadArtifact(`link-report-${version}-${language}.json`, JSON.stringify(report, null, 2))

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

  // Don't exit with error - the issue report is the mechanism for docs-content to act on broken links
  // Exiting with error would trigger docs-alerts which only engineering monitors
  console.log('')
  console.log(
    chalk.yellow(
      'Note: Report generated. Broken links should be fixed via the issue created in docs-content.',
    ),
  )
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

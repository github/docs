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

import fs from 'fs'

import { program } from 'commander'
import chalk from 'chalk'
import { load } from 'cheerio'

import warmServer from '@/frame/lib/warm-server'
import { renderContent } from '@/content-render/index'
import { allVersions, allVersionKeys } from '@/versions/lib/all-versions'
import languages from '@/languages/lib/languages-server'
import {
  normalizeLinkPath,
  checkInternalLink,
  checkAssetLink,
  isAssetLink,
  extractLinksWithLiquid,
  extractLinksFromMarkdown,
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
import { getFeaturesByVersion } from '@/versions/middleware/features'
import type { Page, Permalink, Context } from '@/types'
import * as coreLib from '@actions/core'

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
 * Count how many lines the frontmatter block occupies in the raw source file.
 * `page.markdown` has frontmatter stripped, so line numbers from markdown
 * parsing are relative to the body. Adding this offset converts them to
 * actual file line numbers.
 *
 * Results are cached by fullPath — the file is read once per page across
 * both getLinksFromMarkdown() and checkAnchorsOnPage().
 */
const frontmatterLineOffsetCache = new Map<string, number>()

function getFrontmatterLineOffset(fullPath: string): number {
  const cached = frontmatterLineOffsetCache.get(fullPath)
  if (cached !== undefined) return cached

  let offset = 0
  try {
    const raw = fs.readFileSync(fullPath, 'utf8')
    if (raw.startsWith('---')) {
      const lines = raw.split('\n')
      for (let i = 1; i < lines.length; i++) {
        if (lines[i].trimEnd() === '---') {
          // i is the 0-based index of the closing `---`; adding 1 gives the
          // 1-based line number of that delimiter, which is the total number
          // of frontmatter lines. Body content starts on the next line.
          offset = i + 1
          break
        }
      }
    }
  } catch {
    // ignore — fall back to no offset
  }

  frontmatterLineOffsetCache.set(fullPath, offset)
  return offset
}

/**
 * Extract all internal links from the markdown source with accurate line numbers.
 *
 * Links are discovered from the Liquid-rendered content (which expands {% data reusables.xxx %}
 * and respects {% ifversion %} for the current version), so coverage matches the original
 * HTML-based checker. Line numbers are resolved against the raw markdown source to avoid
 * drift caused by Liquid post-processing (blank-line collapsing). Links that originate
 * from a reusable file rather than the page itself fall back to line 0.
 */
async function getLinksFromMarkdown(
  page: Page,
  context: Context,
): Promise<{ href: string; text: string | undefined; line: number }[]> {
  const fmOffset = getFrontmatterLineOffset(page.fullPath)

  // Build a map of raw-markdown line numbers per href, plus a parallel index
  // map to consume them in encounter order without shifting (O(1) per lookup).
  //
  // When a raw href contains Liquid tags (e.g. `/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}/path`),
  // the rendered href will differ from the raw string, so rawLinesByHref.get() would miss.
  // To fix this, we lazily import renderLiquid once and use it to resolve those hrefs to
  // their canonical (rendered) form before keying the map — matching what extractLinksWithLiquid produces.
  const rawResult = extractLinksFromMarkdown(page.markdown)

  const needsLiquidHrefResolution =
    rawResult.internalLinks.some((l) => l.href.includes('{%') || l.href.includes('{{')) ||
    rawResult.liquidPrefixedLinks.length > 0
  type RenderLiquidFn = (template: string, context: unknown) => Promise<string>
  let renderLiquidFn: RenderLiquidFn | null = null
  if (needsLiquidHrefResolution) {
    const mod = await import('@/content-render/liquid/index')
    renderLiquidFn = mod.renderLiquid
  }

  const rawLinesByHref = new Map<string, number[]>()
  for (const link of rawResult.internalLinks) {
    let canonicalHref = link.href
    if (renderLiquidFn && (canonicalHref.includes('{%') || canonicalHref.includes('{{'))) {
      try {
        // Render only the href string so we get the same canonical href that
        // extractLinksWithLiquid will produce, without affecting line positions.
        canonicalHref = (await renderLiquidFn(canonicalHref, context)).trim()
      } catch {
        // fall back to raw href if rendering fails
      }
    }
    const existing = rawLinesByHref.get(canonicalHref)
    if (existing) {
      existing.push(link.line + fmOffset)
    } else {
      rawLinesByHref.set(canonicalHref, [link.line + fmOffset])
    }
  }

  // Liquid-prefixed links (href starts with `{%`) are absent from internalLinks because
  // INTERNAL_LINK_PATTERN requires a leading '/'. Render each href to its canonical form
  // and, if the result is an internal path, add it to the map so lookups don't miss.
  if (renderLiquidFn) {
    for (const link of rawResult.liquidPrefixedLinks) {
      try {
        const rendered = (await renderLiquidFn(link.href, context)).trim().split('#')[0]
        if (rendered.startsWith('/')) {
          const existing = rawLinesByHref.get(rendered)
          if (existing) {
            existing.push(link.line + fmOffset)
          } else {
            rawLinesByHref.set(rendered, [link.line + fmOffset])
          }
        }
      } catch {
        // skip — can't resolve line number for this link
      }
    }
  }
  // Tracks how many line numbers have been consumed for each href.
  const rawLinesIndex = new Map<string, number>()

  // The Liquid-rendered set drives which links are actually checked (expands
  // reusables, excludes version-gated links that don't apply here).
  // extractLinksWithLiquid already catches Liquid render failures internally and
  // falls back to raw extraction with a warning, so no outer try/catch is needed.
  const renderedResult = await extractLinksWithLiquid(page.markdown, context)
  const renderedLinks = renderedResult.internalLinks.map((l) => ({ href: l.href, text: l.text }))

  return renderedLinks.map((link) => {
    const lines = rawLinesByHref.get(link.href)
    const idx = rawLinesIndex.get(link.href) ?? 0
    const line = lines && idx < lines.length ? lines[idx] : 0
    rawLinesIndex.set(link.href, idx + 1)
    return { href: link.href, text: link.text, line }
  })
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

  // Skip anchor checking on auto-generated pages (e.g., REST, GraphQL, webhooks).
  // These pages have headings generated from OpenAPI/schema data at render time
  // by transformers that aren't run during link checking, so same-page anchor
  // links to those headings would always appear broken.
  if (page.autogenerated) {
    return brokenAnchors
  }

  try {
    // Extract anchor links from markdown first to get accurate line numbers
    const mdResult = extractLinksFromMarkdown(page.markdown)
    const fmOffset = getFrontmatterLineOffset(page.fullPath)
    const anchorLineMap = new Map<string, number>()
    for (const link of mdResult.anchorLinks) {
      // Store the first occurrence of each anchor href
      if (!anchorLineMap.has(link.href)) {
        anchorLineMap.set(link.href, link.line + fmOffset)
      }
    }

    const html = await renderContent(page.markdown, context)
    const $ = load(html)

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
        // Look up the line number from the markdown source
        const line = anchorLineMap.get(href) ?? 0
        brokenAnchors.push({
          href,
          file: page.relativePath,
          lines: [line],
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

  // Build a base context once per version — feature flags and version info are the same for all pages
  const baseContext: Context = {
    currentVersion: version,
    currentLanguage: language,
    currentVersionObj: versionObj,
    [versionObj.shortName]: true,
    pages: pageMap,
    redirects,
    ...getFeaturesByVersion(version),
  } as Context

  for (const page of relevantPages) {
    // Find the permalink for this version
    const permalink = page.permalinks?.find((p) => p.pageVersion === version)
    if (!permalink) continue

    totalPagesChecked++

    // Mutate the page property in place — safe because the loop is sequential (each iteration
    // awaits before the next begins), so there is no concurrent access to baseContext.
    baseContext.page = page

    // Get links from markdown source (preserves accurate line numbers)
    const links = await getLinksFromMarkdown(page, baseContext)
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
            lines: [link.line],
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
          lines: [link.line],
          text: link.text,
        })
      } else if (result.isRedirect) {
        redirectLinks.push({
          href: link.href,
          file: page.relativePath,
          lines: [link.line],
          text: link.text,
          isRedirect: true,
          redirectTarget: result.redirectTarget,
        })
      }
    }

    // Check anchors if enabled
    if (options.checkAnchors) {
      const anchorFlaws = await checkAnchorsOnPage(page, permalink, baseContext)
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

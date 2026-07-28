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
import os from 'os'

import { program } from 'commander'
import chalk from 'chalk'

import warmServer from '@/frame/lib/warm-server'
import { allVersions, allVersionKeys } from '@/versions/lib/all-versions'
import languages from '@/languages/lib/languages-server'
import {
  normalizeLinkPath,
  checkInternalLink,
  resolveInternalLinkKey,
  checkAssetLink,
  isAssetLink,
  extractLinksWithLiquid,
  extractLinksFromMarkdown,
  renderAndExtractLinks,
  type LinkExtractionResult,
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
import {
  validateCrossPageAnchors,
  type PendingCrossPageAnchor,
} from '@/links/lib/cross-page-anchors'
import { computeHeadingIds } from '@/links/lib/heading-anchors'
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
  precomputedRawResult?: LinkExtractionResult,
  prerenderedResult?: LinkExtractionResult,
): Promise<{ href: string; text: string | undefined; line: number; fragment?: string }[]> {
  const fmOffset = getFrontmatterLineOffset(page.fullPath)

  // Build a map of raw-markdown line numbers per href, plus a parallel index
  // map to consume them in encounter order without shifting (O(1) per lookup).
  //
  // When a raw href contains Liquid tags (e.g. `/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}/path`),
  // the rendered href will differ from the raw string, so rawLinesByHref.get() would miss.
  // To fix this, we lazily import renderLiquid once and use it to resolve those hrefs to
  // their canonical (rendered) form before keying the map — matching what extractLinksWithLiquid produces.
  const rawResult = precomputedRawResult ?? extractLinksFromMarkdown(page.markdown)

  const needsLiquidHrefResolution =
    rawResult.internalLinks.some((l) => l.href.includes('{%') || l.href.includes('{{')) ||
    rawResult.liquidPrefixedLinks.length > 0
  type RenderLiquidFn = (template: string, context: Context) => Promise<string>
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
  const renderedResult = prerenderedResult ?? (await extractLinksWithLiquid(page.markdown, context))
  const renderedLinks = renderedResult.internalLinks.map((l) => ({
    href: l.href,
    text: l.text,
    fragment: l.fragment,
  }))

  return renderedLinks.map((link) => {
    const lines = rawLinesByHref.get(link.href)
    const idx = rawLinesIndex.get(link.href) ?? 0
    const line = lines && idx < lines.length ? lines[idx] : 0
    rawLinesIndex.set(link.href, idx + 1)
    return { href: link.href, text: link.text, line, fragment: link.fragment }
  })
}

/**
 * Check anchor links on a page using fast heading ID computation from Liquid-rendered
 * markdown. Avoids the expensive full HTML render previously used.
 *
 * Uses github-slugger (the same library as rehype-slug in the render pipeline) to compute
 * heading anchor IDs, producing results that match the live site.
 *
 * `headingIds` is precomputed once per page in checkPage and shared with the cross-page
 * anchor cache, so this function only checks same-page (`#fragment`) links here.
 */
function checkAnchorsFromHeadings(
  page: Page,
  rawResult: LinkExtractionResult,
  renderedResult: LinkExtractionResult,
  headingIds: Set<string>,
): BrokenLink[] {
  const fmOffset = getFrontmatterLineOffset(page.fullPath)

  // Build line-number map from the raw (pre-Liquid) source for accurate file line numbers.
  const anchorLineMap = new Map<string, number>()
  for (const link of rawResult.anchorLinks) {
    if (!anchorLineMap.has(link.href)) {
      anchorLineMap.set(link.href, link.line + fmOffset)
    }
  }

  // Check only the anchor links that actually appear in the Liquid-rendered output
  // (respects {% ifversion %} gates — links in non-applicable blocks are not checked).
  const brokenAnchors: BrokenLink[] = []
  for (const link of renderedResult.anchorLinks) {
    const { href } = link
    if (href === '#' || href === '#top') continue
    const targetId = href.slice(1)
    if (!headingIds.has(targetId)) {
      brokenAnchors.push({
        href,
        file: page.relativePath,
        lines: [anchorLineMap.get(href) ?? 0],
        isAutotitle: false,
      })
    }
  }

  return brokenAnchors
}

/**
 * Process a single page: extract links, validate them, and optionally check anchors.
 * Receives its own context object so it is safe to run concurrently with other pages.
 */
async function checkPage(
  page: Page,
  permalink: Permalink,
  pageContext: Context,
  pageMap: Record<string, Page>,
  redirects: Record<string, string>,
  options: { checkAnchors: boolean },
): Promise<{
  brokenLinks: BrokenLink[]
  redirectLinks: BrokenLink[]
  linksChecked: number
  headingIds: Set<string> | null
  crossPageAnchors: PendingCrossPageAnchor[]
}> {
  const brokenLinks: BrokenLink[] = []
  const redirectLinks: BrokenLink[] = []
  const crossPageAnchors: PendingCrossPageAnchor[] = []

  const rawMarkdownLinks = extractLinksFromMarkdown(page.markdown)

  // Render through Liquid once; share the result between link extraction and anchor
  // checking to avoid paying the Liquid render cost twice per page.
  const { renderedMarkdown, result: renderedLinkResult } = await renderAndExtractLinks(
    page.markdown,
    pageContext,
  )

  // Compute this page's heading anchor IDs once from the Liquid-rendered markdown.
  // Autogenerated pages (REST/GraphQL/webhooks) derive their anchors from OpenAPI
  // operation IDs, not markdown headings, so we can't compute them here — leave them
  // out of the cache so links into them are never flagged (they resolve at runtime).
  // Skip the work entirely when anchor checking is disabled: nothing downstream reads
  // the heading cache in that mode.
  const headingIds =
    options.checkAnchors && !page.autogenerated ? computeHeadingIds(renderedMarkdown) : null

  const links = await getLinksFromMarkdown(page, pageContext, rawMarkdownLinks, renderedLinkResult)

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
    } else if (options.checkAnchors && link.fragment) {
      // Direct (non-redirect) hit with a fragment: defer a cross-page anchor check.
      // We can't validate it now because the target page may not have been rendered
      // yet, so collect it and validate after the whole version finishes.
      const targetKey = resolveInternalLinkKey(link.href, pageMap)
      if (targetKey) {
        crossPageAnchors.push({
          targetKey,
          fragment: link.fragment,
          href: `${link.href}#${link.fragment}`,
          file: page.relativePath,
          line: link.line,
          text: link.text,
        })
      }
    }
  }

  if (options.checkAnchors && headingIds) {
    const anchorFlaws = checkAnchorsFromHeadings(
      page,
      rawMarkdownLinks,
      renderedLinkResult,
      headingIds,
    )
    brokenLinks.push(...anchorFlaws)
  }

  return { brokenLinks, redirectLinks, linksChecked: links.length, headingIds, crossPageAnchors }
}

/**
 * Check all pages for a given version and language, processing pages concurrently
 * up to `concurrency` at a time.
 */
async function checkVersion(
  version: string,
  language: string,
  pageList: Page[],
  pageMap: Record<string, Page>,
  redirects: Record<string, string>,
  options: { checkAnchors: boolean; verbose: boolean; concurrency: number },
): Promise<CheckResult> {
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

  console.log(
    `  Checking ${relevantPages.length} pages for ${version}/${language} (concurrency: ${options.concurrency})`,
  )

  // Build a base context once per version — feature flags and version info are the same for all pages.
  // Each page gets a shallow copy so concurrent tasks don't share the mutable `page` property.
  const baseContext = {
    currentVersion: version,
    currentLanguage: language,
    currentVersionObj: versionObj,
    [versionObj.shortName]: true,
    pages: pageMap,
    redirects,
    ...getFeaturesByVersion(version),
  } as Context

  const allBrokenLinks: BrokenLink[] = []
  const allRedirectLinks: BrokenLink[] = []
  let totalPagesChecked = 0
  let totalLinksChecked = 0

  // Cross-page anchor validation is a two-pass process within the version:
  //   pass 1 — render every page, caching its heading IDs and collecting the
  //            cross-page anchor links it contains (target may not be rendered yet)
  //   pass 2 — after all pages are rendered, validate each collected anchor against
  //            the now-complete heading cache
  // The cache is keyed by pageMap key (lang + version + path). A link whose target
  // resolves to a different version isn't in this run's cache and is skipped here;
  // it's validated when the workflow runs the checker for that target version.
  const headingIdsByPageKey = new Map<string, Set<string>>()
  const pendingCrossPageAnchors: PendingCrossPageAnchor[] = []

  // Bounded concurrency: process up to `options.concurrency` pages simultaneously.
  // All workers drain from the same shared iterator — no page is processed twice.
  const queue = relevantPages.entries()

  async function worker() {
    for (const [, page] of queue) {
      const permalink = page.permalinks?.find((p) => p.pageVersion === version)
      if (!permalink) continue

      // Each concurrent task gets its own context copy with the page set.
      // pageMap and redirects are read-only and safe to share.
      const pageContext = { ...baseContext, page } as Context

      const result = await checkPage(page, permalink, pageContext, pageMap, redirects, options)

      // Merging results here is safe: JS is single-threaded so array pushes
      // between await points cannot interleave with another worker's pushes.
      allBrokenLinks.push(...result.brokenLinks)
      allRedirectLinks.push(...result.redirectLinks)
      if (result.headingIds) headingIdsByPageKey.set(permalink.href, result.headingIds)
      if (result.crossPageAnchors.length) {
        pendingCrossPageAnchors.push(...result.crossPageAnchors)
      }
      totalPagesChecked++
      totalLinksChecked += result.linksChecked

      if (options.verbose && totalPagesChecked % 100 === 0) {
        console.log(`    Checked ${totalPagesChecked} pages...`)
      }
    }
  }

  // Launch `concurrency` workers that all drain from the same shared queue iterator.
  await Promise.all(Array.from({ length: options.concurrency }, worker))

  // Pass 2: validate cross-page anchors now that every page's headings are cached.
  if (options.checkAnchors) {
    allBrokenLinks.push(...validateCrossPageAnchors(pendingCrossPageAnchors, headingIdsByPageKey))
  }

  return {
    brokenLinks: allBrokenLinks,
    redirectLinks: allRedirectLinks,
    totalPagesChecked,
    totalLinksChecked,
  }
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
    .option(
      '--concurrency <number>',
      'Number of pages to process concurrently',
      String(Math.max(1, os.cpus().length - 1)),
    )
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
  const concurrency = Math.max(1, parseInt(process.env.CONCURRENCY || options.concurrency, 10))
  const result = await checkVersion(version, language, pageList, pageMap, redirects, {
    checkAnchors,
    verbose: options.verbose,
    concurrency,
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

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

import GithubSlugger from 'github-slugger'

import warmServer from '@/frame/lib/warm-server'
import { allVersions, allVersionKeys } from '@/versions/lib/all-versions'
import languages from '@/languages/lib/languages-server'
import {
  normalizeLinkPath,
  checkInternalLink,
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
): Promise<{ href: string; text: string | undefined; line: number }[]> {
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
  const renderedResult = prerenderedResult ?? (await extractLinksWithLiquid(page.markdown, context))
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
 * Strip inline Markdown markup from a heading to get plain text for slug computation.
 * Matches what hast-util-to-string produces on a heading node after remark parsing.
 *
 * Key design decisions:
 * - Inline code spans (backtick) are extracted verbatim so that `<job_id>` inside them
 *   is not incorrectly stripped by the HTML-tag regex (which is needed for octicon SVGs).
 * - HTML stripping only removes valid HTML element names (no underscores) to avoid stripping
 *   angle-bracket placeholders like <job_id> that appear in code-span heading text.
 * - No final .trim() — trailing whitespace from stripped SVGs becomes trailing hyphens via
 *   github-slugger, reproducing the live site's heading IDs (e.g. `allow--`).
 */
function headingTextToPlain(text: string): string {
  // Strip HTML tags using a state machine rather than a regex so that CodeQL can verify
  // the stripping is complete. Tags like <script\n...> or tags with '>' in attribute values
  // are handled correctly. Output is only used for slug computation, never rendered as HTML.
  function stripHtmlTags(s: string): string {
    let out = ''
    let inTag = false
    for (let i = 0; i < s.length; i++) {
      if (!inTag && s[i] === '<') {
        // Peek ahead: if this looks like an underscore-containing placeholder (e.g. <job_id>),
        // emit the inner text instead of dropping it entirely so the slug stays correct.
        const close = s.indexOf('>', i + 1)
        if (close !== -1) {
          const inner = s.slice(i + 1, close)
          if (/^[a-zA-Z][a-zA-Z0-9]*(?:_[a-zA-Z0-9]+)+$/.test(inner)) {
            out += inner
            i = close
            continue
          }
        }
        inTag = true
      } else if (inTag && s[i] === '>') {
        inTag = false
        // Don't emit a replacement space — surrounding whitespace in the source markdown
        // already provides the correct spacing for github-slugger (e.g. `allow ` from
        // the space before an octicon tag).
      } else if (!inTag) {
        out += s[i]
      }
    }
    return out
  }

  // Process non-code portions: strip HTML and inline formatting markup.
  function processNonCode(s: string): string {
    return stripHtmlTags(s)
      .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1') // images: ![alt](url) → alt
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links: [text](url) → text
      .replace(/\*\*([^*]+)\*\*/g, '$1') // bold **text**
      .replace(/\*([^*]+)\*/g, '$1') // italic *text*
      .replace(/(?<![a-zA-Z0-9_])__([^_]+)__(?![a-zA-Z0-9_])/g, '$1') // bold __text__
      .replace(/(?<![a-zA-Z0-9_])_([^_]+)_(?![a-zA-Z0-9_])/g, '$1') // italic _text_
  }

  // Split text into alternating non-code / code-span segments.
  // Code spans are extracted verbatim (hast-util-to-string returns their raw text content).
  const parts: string[] = []
  let remaining = text
  while (remaining.length > 0) {
    const open = remaining.indexOf('`')
    if (open === -1) {
      parts.push(processNonCode(remaining))
      break
    }
    if (open > 0) parts.push(processNonCode(remaining.slice(0, open)))
    const close = remaining.indexOf('`', open + 1)
    if (close === -1) {
      // Unclosed backtick — treat remainder as non-code
      parts.push(processNonCode(remaining.slice(open)))
      break
    }
    parts.push(remaining.slice(open + 1, close)) // code content verbatim
    remaining = remaining.slice(close + 1)
  }
  return parts.join('')
  // Note: no .trim() — see comment above.
}

/**
 * Check anchor links on a page using fast heading ID computation from Liquid-rendered
 * markdown. Avoids the expensive full HTML render previously used.
 *
 * Uses github-slugger (the same library as rehype-slug in the render pipeline) to compute
 * heading anchor IDs, producing results that match the live site.
 */
function checkAnchorsFromHeadings(
  page: Page,
  rawResult: LinkExtractionResult,
  renderedResult: LinkExtractionResult,
  renderedMarkdown: string,
): BrokenLink[] {
  if (page.autogenerated) return []

  const fmOffset = getFrontmatterLineOffset(page.fullPath)

  // Compute heading anchor IDs from the Liquid-rendered markdown in document order.
  // github-slugger deduplicates identical headings with -1, -2, ... suffixes,
  // matching the behaviour of rehype-slug in the full render pipeline.
  const slugger = new GithubSlugger()
  const headingIds = new Set<string>()

  // ATX headings: ## Heading text (optional trailing ##)
  const ATX_HEADING_RE = /^#{1,6}\s+(.+?)(?:\s+#+)?\s*$/gm
  let m: RegExpExecArray | null
  while ((m = ATX_HEADING_RE.exec(renderedMarkdown)) !== null) {
    headingIds.add(slugger.slug(headingTextToPlain(m[1])))
  }

  // Setext headings: text line followed by === or --- underline
  const SETEXT_HEADING_RE = /^([^\n]+)\n[=-]{2,}\s*$/gm
  while ((m = SETEXT_HEADING_RE.exec(renderedMarkdown)) !== null) {
    headingIds.add(slugger.slug(headingTextToPlain(m[1])))
  }

  // Explicit <a name="..."> and <a id="..."> anchors embedded in the markdown.
  // Some pages (e.g. site-policy) use raw HTML anchors instead of headings.
  const NAMED_ANCHOR_RE = /<a\s[^>]*(?:name|id)="([^"]+)"[^>]*>/gi
  while ((m = NAMED_ANCHOR_RE.exec(renderedMarkdown)) !== null) {
    headingIds.add(m[1])
  }

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
): Promise<{ brokenLinks: BrokenLink[]; redirectLinks: BrokenLink[]; linksChecked: number }> {
  const brokenLinks: BrokenLink[] = []
  const redirectLinks: BrokenLink[] = []

  const rawMarkdownLinks = extractLinksFromMarkdown(page.markdown)

  // Render through Liquid once; share the result between link extraction and anchor
  // checking to avoid paying the Liquid render cost twice per page.
  const { renderedMarkdown, result: renderedLinkResult } = await renderAndExtractLinks(
    page.markdown,
    pageContext,
  )

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
    }
  }

  if (options.checkAnchors) {
    const anchorFlaws = checkAnchorsFromHeadings(
      page,
      rawMarkdownLinks,
      renderedLinkResult,
      renderedMarkdown,
    )
    brokenLinks.push(...anchorFlaws)
  }

  return { brokenLinks, redirectLinks, linksChecked: links.length }
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
      totalPagesChecked++
      totalLinksChecked += result.linksChecked

      if (options.verbose && totalPagesChecked % 100 === 0) {
        console.log(`    Checked ${totalPagesChecked} pages...`)
      }
    }
  }

  // Launch `concurrency` workers that all drain from the same shared queue iterator.
  await Promise.all(Array.from({ length: options.concurrency }, worker))

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

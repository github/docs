// Checks all internal links across all versions and languages on a schedule.
// Usage: npm run check-links-internal
// Usage: npm run check-links-internal -- --version free-pro-team@latest --language en
// VERSION sets the version to check, for example free-pro-team@latest.
// LANGUAGE sets the language to check, default en.
// GITHUB_TOKEN creates issue reports.
// ACTION_RUN_URL links to the action run.
// CREATE_REPORT creates an issue report when true, default false.
// REPORT_REPOSITORY sets the repository for report issues.
// CHECK_ANCHORS controls anchor link checks, default true.

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

// page.markdown has frontmatter stripped, so source positions need the raw-file offset.
// Cache by fullPath so each page file is read once for link and anchor checks.
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
          // Offset points body links at their raw-file source positions.
          offset = i + 1
          break
        }
      }
    }
  } catch {
    // Fall back to no offset when the raw file cannot be read.
  }

  frontmatterLineOffsetCache.set(fullPath, offset)
  return offset
}

// Extract links from Liquid-rendered content, then map each one to the raw Markdown source.
// Raw source positions avoid drift from Liquid post-processing, such as blank-line collapsing.
// Example: /{% ifversion fpt %}enterprise-cloud@latest/{% endif %}/path renders before lookup.
// Reusable-origin links fall back to 0 because this file has no matching source position.
async function getLinksFromMarkdown(
  page: Page,
  context: Context,
  precomputedRawResult?: LinkExtractionResult,
  prerenderedResult?: LinkExtractionResult,
): Promise<{ href: string; text: string | undefined; line: number; fragment?: string }[]> {
  const fmOffset = getFrontmatterLineOffset(page.fullPath)

  // Render Liquid hrefs before keying the map so raw and rendered extraction use the same href.
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
        // Render only the href so Liquid changes do not shift raw source positions.
        canonicalHref = (await renderLiquidFn(canonicalHref, context)).trim()
      } catch {
        // Keep the raw href when Liquid rendering fails.
      }
    }
    const existing = rawLinesByHref.get(canonicalHref)
    if (existing) {
      existing.push(link.line + fmOffset)
    } else {
      rawLinesByHref.set(canonicalHref, [link.line + fmOffset])
    }
  }

  // Render Liquid-prefixed hrefs because the raw extractor only treats leading slashes as internal paths.
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
        // Skip links with no resolvable source position.
      }
    }
  }
  // Track repeated hrefs so each rendered occurrence gets the next raw source position.
  const rawLinesIndex = new Map<string, number>()

  // The Liquid-rendered set controls checks; extractLinksWithLiquid handles render failures.
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

// Check same-page anchors with Liquid-rendered headings and github-slugger, matching the live site.
// checkPage shares headingIds with cross-page validation, so this only checks same-page fragments.
function checkAnchorsFromHeadings(
  page: Page,
  rawResult: LinkExtractionResult,
  renderedResult: LinkExtractionResult,
  headingIds: Set<string>,
): BrokenLink[] {
  const fmOffset = getFrontmatterLineOffset(page.fullPath)

  // Raw source positions point same-page anchor flaws at the file a writer edits.
  const anchorLineMap = new Map<string, number>()
  for (const link of rawResult.anchorLinks) {
    if (!anchorLineMap.has(link.href)) {
      anchorLineMap.set(link.href, link.line + fmOffset)
    }
  }

  // Check only anchors that survive Liquid version gates.
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

// Each page gets its own context object, so concurrent checks cannot share mutable page state.
async function checkPage(
  page: Page,
  permalink: Permalink,
  pageContext: Context,
  pageMap: Record<string, Page>,
  redirects: Record<string, string>,
  options: { checkAnchors: boolean; version?: string; language?: string },
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

  // Share one Liquid render between link extraction and anchor checks.
  const { renderedMarkdown, result: renderedLinkResult } = await renderAndExtractLinks(
    page.markdown,
    pageContext,
  )

  // REST, GraphQL, and webhook pages use OpenAPI operation IDs, so cache only Markdown headings.
  const headingIds =
    options.checkAnchors && !page.autogenerated ? computeHeadingIds(renderedMarkdown) : null

  const links = await getLinksFromMarkdown(page, pageContext, rawMarkdownLinks, renderedLinkResult)

  for (const link of links) {
    if (isExcludedLink(link.href)) continue

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
    const result = checkInternalLink(
      normalized,
      pageMap,
      redirects,
      options.version,
      options.language,
    )

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
        requiresVersionContext: result.requiresVersionContext,
      })
    } else if (options.checkAnchors && link.fragment) {
      // Defer cross-page fragments until this version finishes; some targets have no cache entry.
      const targetKey = resolveInternalLinkKey(
        link.href,
        pageMap,
        options.version,
        options.language,
      )
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

// checkVersion renders every page before validating cross-page anchors.
// Target pages may not have cached headings when an earlier page links to them.
// Skip targets outside this run; the scheduled matrix does not cover every version.
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

  const relevantPages = pageList.filter((page) => {
    if (page.languageCode !== language) return false
    if (!page.applicableVersions?.includes(version)) return false
    return true
  })

  console.log(
    `  Checking ${relevantPages.length} pages for ${version}/${language} (concurrency: ${options.concurrency})`,
  )

  // Give each page a shallow context copy so concurrent workers do not share mutable page state.
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

  const headingIdsByPageKey = new Map<string, Set<string>>()
  const pendingCrossPageAnchors: PendingCrossPageAnchor[] = []

  // All workers drain a shared iterator, so bounded concurrency never processes a page twice.
  const queue = relevantPages.entries()

  async function worker() {
    for (const [, page] of queue) {
      const permalink = page.permalinks?.find((p) => p.pageVersion === version)
      if (!permalink) continue

      // Each worker gets a context copy with its own page; pageMap and redirects are read-only.
      const pageContext = { ...baseContext, page } as Context

      const result = await checkPage(page, permalink, pageContext, pageMap, redirects, {
        ...options,
        version,
        language,
      })

      // JS runs between awaits without interleaving another worker's array pushes.
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

  await Promise.all(Array.from({ length: options.concurrency }, worker))

  // Validate cross-page anchors after every page has cached its headings.
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

  console.log('Loading page data...')
  const { pages: pageMap, redirects, pageList } = await warmServer([language])
  console.log(`Loaded ${pageList.length} pages, ${Object.keys(redirects).length} redirects`)
  console.log('')

  const concurrency = Math.max(1, parseInt(process.env.CONCURRENCY || options.concurrency, 10))
  const result = await checkVersion(version, language, pageList, pageMap, redirects, {
    checkAnchors,
    verbose: options.verbose,
    concurrency,
  })

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

  const report = generateInternalLinkReport(allBrokenLinks, {
    actionUrl: process.env.ACTION_RUN_URL,
    version,
    language,
    redirects,
  })

  console.log('')
  console.log(chalk.red(`❌ ${result.brokenLinks.length} broken link(s)`))
  console.log(chalk.yellow(`⚠️  ${result.redirectLinks.length} redirect(s) to update`))

  const markdown = reportToMarkdown(report)
  await uploadArtifact(`link-report-${version}-${language}.md`, markdown)
  await uploadArtifact(`link-report-${version}-${language}.json`, JSON.stringify(report, null, 2))

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

  // Avoid a failing exit code; report issues notify docs-content, while failures only notify docs-alerts.
  console.log('')
  console.log(
    chalk.yellow(
      'Note: Report generated. Broken links should be fixed via the issue created in docs-content.',
    ),
  )
}

;(async () => {
  try {
    await main()
  } catch (err: unknown) {
    console.error('Fatal error:', err)
    process.exit(1)
  }
})()

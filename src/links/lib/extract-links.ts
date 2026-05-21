/**
 * Link extraction utilities for the link checker system.
 *
 * This module provides functions to extract internal and external links
 * from Markdown content, with support for Liquid template rendering.
 */

import fs from 'fs'
import path from 'path'

import { allVersions } from '@/versions/lib/all-versions'
import { latestStable } from '@/versions/lib/enterprise-server-releases'
import { getDataByLanguage } from '@/data-directory/lib/get-data'
import type { Context, Page } from '@/types'

// Link patterns for Markdown
const INTERNAL_LINK_PATTERN = /\]\(\/[^)]+\)/g
const AUTOTITLE_LINK_PATTERN = /\[AUTOTITLE\]\(([^)]+)\)/g
// Handles one level of balanced parentheses in URLs (e.g., Wikipedia links).
// Uses an unrolled loop to avoid catastrophic backtracking on malformed URLs.
const EXTERNAL_LINK_PATTERN = /\]\((https?:\/\/[^()\s]*(?:\([^()]*\)[^()\s]*)*)\)/g
const IMAGE_LINK_PATTERN = /!\[[^\]]*\]\(([^)]+)\)/g

// Anchor link patterns (for same-page links)
const ANCHOR_LINK_PATTERN = /\]\(#[^)]+\)/g

// Reference-style link definitions: [id]: /path or [id]: /path "title"
// Captures the URL from lines like: [ssh-agent-forwarding]: /authentication/...
const LINK_DEFINITION_PATTERN = /^\[[^\]]+\]:\s+(\/[^\s"'(<>]*)/gm

// Links whose href starts with a Liquid tag rather than a literal '/'
// e.g. ]({%  ifversion fpt %}/enterprise-cloud@latest{% endif %}/path)
// None of these Liquid tags contain ')' in practice, so [^)]+ is safe.
const LIQUID_HREF_PATTERN = /\]\(({%[^)]+)\)/g

export interface ExtractedLink {
  href: string
  line: number
  column: number
  text?: string
  isAutotitle?: boolean
  isImage?: boolean
  isAnchor?: boolean
}

export interface LinkExtractionResult {
  internalLinks: ExtractedLink[]
  externalLinks: ExtractedLink[]
  anchorLinks: ExtractedLink[]
  imageLinks: ExtractedLink[]
  /**
   * Links whose href begins with a Liquid tag (e.g. `]({%  ifversion ... %}/path)`).
   * The `href` field contains the raw unrendered Liquid string. Callers that need
   * to validate these links must render the href to obtain its canonical path.
   */
  liquidPrefixedLinks: ExtractedLink[]
}

/**
 * Build an array of character offsets at which each line starts.
 * offsets[0] is always 0. Called once per extractLinksFromMarkdown invocation
 * so that getLineAndColumn can use binary search instead of repeated splits.
 */
function buildLineOffsets(content: string): number[] {
  const offsets = [0]
  for (let i = 0; i < content.length; i++) {
    if (content[i] === '\n') offsets.push(i + 1)
  }
  return offsets
}

/**
 * Get line and column number for a match using a precomputed line-offset index.
 * Binary search gives O(log L) per call instead of O(matchIndex).
 */
function getLineAndColumn(
  lineOffsets: number[],
  matchIndex: number,
): { line: number; column: number } {
  let lo = 0
  let hi = lineOffsets.length - 1
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1
    if (lineOffsets[mid] <= matchIndex) lo = mid
    else hi = mid - 1
  }
  return { line: lo + 1, column: matchIndex - lineOffsets[lo] + 1 }
}

/**
 * Extract the link text before a Markdown link
 * For `[link text](/path)`, matchIndex points to the `]` in `](/path)`
 */
function extractLinkText(content: string, matchIndex: number): string | undefined {
  // matchIndex points to ](/...), so we need to find the opening [
  // Scan backwards to find the matching [
  let start = matchIndex - 1

  // Simple scan back to find opening bracket
  // (nested brackets in link text are rare and handled approximately)
  while (start >= 0 && content[start] !== '[') {
    start--
  }

  if (start >= 0 && content[start] === '[') {
    // Extract text between [ and ]
    // matchIndex points to the start of ](, so the ] is at matchIndex
    const text = content.substring(start + 1, matchIndex)
    return text.length > 0 ? text : undefined
  }
  return undefined
}

/**
 * Extract all links from raw Markdown content (before Liquid rendering)
 */
export function extractLinksFromMarkdown(content: string): LinkExtractionResult {
  const internalLinks: ExtractedLink[] = []
  const externalLinks: ExtractedLink[] = []
  const anchorLinks: ExtractedLink[] = []
  const imageLinks: ExtractedLink[] = []
  const liquidPrefixedLinks: ExtractedLink[] = []

  // Strip fenced code blocks to avoid checking example/placeholder URLs
  // Replaces non-newline characters with spaces to preserve line numbers and positions
  const strippedContent = content.replace(
    /^ {0,3}(`{3,})[^\n]*\n[\s\S]*?^ {0,3}\1\s*$/gm,
    (match) => {
      return match.replace(/[^\n]/g, ' ')
    },
  )

  // Precompute line-start offsets once so every getLineAndColumn call is O(log L).
  const lineOffsets = buildLineOffsets(strippedContent)

  // Extract AUTOTITLE links first (they're a special case of internal links)
  let match
  while ((match = AUTOTITLE_LINK_PATTERN.exec(strippedContent)) !== null) {
    const { line, column } = getLineAndColumn(lineOffsets, match.index)
    const href = match[1].split('#')[0] // Remove anchor if present
    if (href.startsWith('/')) {
      internalLinks.push({
        href,
        line,
        column,
        text: 'AUTOTITLE',
        isAutotitle: true,
      })
    }
  }

  // Reset regex
  AUTOTITLE_LINK_PATTERN.lastIndex = 0

  // Extract regular internal links
  while ((match = INTERNAL_LINK_PATTERN.exec(strippedContent)) !== null) {
    // Skip if this is an AUTOTITLE link (already captured)
    const fullMatch = match[0]
    if (strippedContent.substring(match.index - 10, match.index).includes('AUTOTITLE')) {
      continue
    }

    const { line, column } = getLineAndColumn(lineOffsets, match.index)
    // Extract href from ](/path) format
    const href = fullMatch.substring(2, fullMatch.length - 1).split('#')[0]
    const text = extractLinkText(strippedContent, match.index)

    internalLinks.push({
      href,
      line,
      column,
      text,
      isAutotitle: false,
    })
  }

  // Reset regex
  INTERNAL_LINK_PATTERN.lastIndex = 0

  // Extract external links
  while ((match = EXTERNAL_LINK_PATTERN.exec(strippedContent)) !== null) {
    const { line, column } = getLineAndColumn(lineOffsets, match.index)
    const href = match[1]
    const text = extractLinkText(strippedContent, match.index)

    externalLinks.push({
      href,
      line,
      column,
      text,
    })
  }

  // Reset regex
  EXTERNAL_LINK_PATTERN.lastIndex = 0

  // Extract anchor links
  while ((match = ANCHOR_LINK_PATTERN.exec(strippedContent)) !== null) {
    const { line, column } = getLineAndColumn(lineOffsets, match.index)
    const href = match[0].substring(2, match[0].length - 1)

    anchorLinks.push({
      href,
      line,
      column,
      isAnchor: true,
    })
  }

  // Reset regex
  ANCHOR_LINK_PATTERN.lastIndex = 0

  // Extract image links
  while ((match = IMAGE_LINK_PATTERN.exec(strippedContent)) !== null) {
    const { line, column } = getLineAndColumn(lineOffsets, match.index)
    const href = match[1]

    // Only include internal images (starting with /)
    if (href.startsWith('/')) {
      imageLinks.push({
        href,
        line,
        column,
        isImage: true,
      })
    }
  }

  // Reset regex
  IMAGE_LINK_PATTERN.lastIndex = 0

  // Extract reference-style link definitions ([id]: /path)
  // These are distinct from inline links but point to the same targets that need validating.
  while ((match = LINK_DEFINITION_PATTERN.exec(strippedContent)) !== null) {
    const { line, column } = getLineAndColumn(lineOffsets, match.index)
    const href = match[1].split('#')[0]
    internalLinks.push({
      href,
      line,
      column,
      isAutotitle: false,
    })
  }

  // Reset regex
  LINK_DEFINITION_PATTERN.lastIndex = 0

  // Extract links whose href starts with a Liquid tag
  while ((match = LIQUID_HREF_PATTERN.exec(strippedContent)) !== null) {
    const { line, column } = getLineAndColumn(lineOffsets, match.index)
    liquidPrefixedLinks.push({
      href: match[1],
      line,
      column,
    })
  }

  // Reset regex
  LIQUID_HREF_PATTERN.lastIndex = 0

  return {
    internalLinks,
    externalLinks,
    anchorLinks,
    imageLinks,
    liquidPrefixedLinks,
  }
}

/**
 * Create a minimal context for Liquid rendering
 */
export function createLiquidContext(
  version: string = 'free-pro-team@latest',
  language: string = 'en',
): Context {
  const versionObj = allVersions[version]
  if (!versionObj) {
    throw new Error(`Unknown version: ${version}`)
  }

  // Load data for the language
  const siteData = getDataByLanguage('variables', language)

  return {
    currentVersion: version,
    currentLanguage: language,
    currentVersionObj: versionObj,
    // Feature flags and version checks
    enterpriseServerVersions: Object.values(allVersions)
      .filter((v) => v.plan === 'enterprise-server')
      .map((v) => v.currentRelease),
    // Site data for variable interpolation
    site: siteData,
    // Empty pages/redirects - not needed for link extraction
    pages: {},
    redirects: {},
  } as Context
}

// Cached reference to renderLiquid — avoids repeated dynamic-import overhead on every call.
// A dynamic import is still used (not a top-level import) to prevent circular dependency issues.
type RenderLiquidModule = (template: string, context: unknown) => Promise<string>
let _renderLiquid: RenderLiquidModule | null = null
async function getCachedRenderLiquid(): Promise<RenderLiquidModule> {
  if (!_renderLiquid) {
    const mod = await import('@/content-render/liquid/index')
    _renderLiquid = mod.renderLiquid
  }
  return _renderLiquid
}

/**
 * Render Liquid templates in content and extract links
 *
 * This renders the Liquid tags (like {% ifversion %}) to get the actual
 * content that would appear for a given version, then extracts links.
 */
export async function extractLinksWithLiquid(
  content: string,
  context: Context,
): Promise<LinkExtractionResult> {
  try {
    // Dynamic import to avoid circular dependency issues (cached after first load)
    const renderLiquid = await getCachedRenderLiquid()
    // Render Liquid to expand conditionals
    const rendered = await renderLiquid(content, context)
    return extractLinksFromMarkdown(rendered)
  } catch (error) {
    // If Liquid rendering fails, fall back to raw extraction
    // This can happen with malformed templates
    console.warn('Liquid rendering failed, falling back to raw extraction:', error)
    return extractLinksFromMarkdown(content)
  }
}

/**
 * Render Liquid templates in content, returning both the rendered markdown string and
 * extracted links. Use this when both are needed to avoid rendering the same content twice.
 */
export async function renderAndExtractLinks(
  content: string,
  context: Context,
): Promise<{ renderedMarkdown: string; result: LinkExtractionResult }> {
  try {
    const renderLiquid = await getCachedRenderLiquid()
    const renderedMarkdown = await renderLiquid(content, context)
    return { renderedMarkdown, result: extractLinksFromMarkdown(renderedMarkdown) }
  } catch (error) {
    console.warn('Liquid rendering failed, falling back to raw extraction:', error)
    return { renderedMarkdown: content, result: extractLinksFromMarkdown(content) }
  }
}

/**
 * Read a file and extract links
 */
export async function extractLinksFromFile(
  filePath: string,
  context?: Context,
): Promise<LinkExtractionResult> {
  const content = fs.readFileSync(filePath, 'utf-8')

  if (context) {
    return extractLinksWithLiquid(content, context)
  }

  return extractLinksFromMarkdown(content)
}

/**
 * Get relative path from content root
 */
export function getRelativePath(filePath: string): string {
  const contentRoot = path.resolve('content')
  const dataRoot = path.resolve('data')

  if (filePath.startsWith(contentRoot)) {
    return path.relative(contentRoot, filePath)
  }
  if (filePath.startsWith(dataRoot)) {
    return path.relative(dataRoot, filePath)
  }

  return filePath
}

/**
 * Normalize a link path for comparison with pageMap
 *
 * - Removes query strings
 * - Removes trailing slashes
 * - Removes anchor fragments
 * - Ensures leading slash
 */
export function normalizeLinkPath(href: string): string {
  // Remove query string
  let normalized = href.split('?')[0]

  // Remove anchor
  normalized = normalized.split('#')[0]

  // Remove trailing slash
  if (normalized.endsWith('/') && normalized.length > 1) {
    normalized = normalized.slice(0, -1)
  }

  // Ensure leading slash
  if (!normalized.startsWith('/')) {
    normalized = `/${normalized}`
  }

  return normalized
}

/**
 * Check if a path exists in the pageMap or redirects
 */
export function checkInternalLink(
  href: string,
  pageMap: Record<string, Page>,
  redirects: Record<string, string>,
): { exists: boolean; isRedirect: boolean; redirectTarget?: string } {
  const normalized = normalizeLinkPath(href)

  // Resolve enterprise-server@latest to actual version, mirroring runtime behavior.
  // Handle both /enterprise-server@latest/... and /en/enterprise-server@latest/...
  const latestPrefix = '/enterprise-server@latest'
  const stablePrefix = `/enterprise-server@${latestStable}`
  const resolved =
    normalized.startsWith(latestPrefix) || normalized.startsWith(`/en${latestPrefix}`)
      ? normalized.replace(latestPrefix, stablePrefix)
      : normalized

  // Check if it's a direct page
  if (pageMap[resolved]) {
    return { exists: true, isRedirect: false }
  }

  // Check if it's a redirect
  if (redirects[resolved]) {
    return {
      exists: true,
      isRedirect: true,
      redirectTarget: redirects[resolved],
    }
  }

  // Check with /en prefix (FPT pages are stored with language prefix)
  const withLang = `/en${resolved}`
  if (pageMap[withLang]) {
    return { exists: true, isRedirect: false }
  }

  if (redirects[withLang]) {
    return {
      exists: true,
      isRedirect: true,
      redirectTarget: redirects[withLang],
    }
  }

  // Strip language prefix and check redirects (which are stored without it)
  const langPrefixMatch = resolved.match(/^\/[a-z]{2}\//)
  if (langPrefixMatch) {
    const withoutLang = resolved.slice(langPrefixMatch[0].length - 1)
    if (redirects[withoutLang]) {
      return {
        exists: true,
        isRedirect: true,
        redirectTarget: redirects[withoutLang],
      }
    }
  }

  return { exists: false, isRedirect: false }
}

/**
 * Check if an asset link points to an existing file on disk
 */
export function checkAssetLink(href: string): boolean {
  if (!href.startsWith('/assets/')) {
    return false // Not an asset link
  }
  const assetPath = path.resolve(href.slice(1)) // Remove leading /
  return fs.existsSync(assetPath)
}

/**
 * Check if a link is an asset link (starts with /assets/)
 */
export function isAssetLink(href: string): boolean {
  return href.startsWith('/assets/')
}

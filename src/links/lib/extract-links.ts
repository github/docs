/**
 * Link extraction utilities for the link checker system.
 *
 * This module provides functions to extract internal and external links
 * from Markdown content, with support for Liquid template rendering.
 */

import fs from 'fs'
import path from 'path'

import { allVersions } from '@/versions/lib/all-versions'
import { getDataByLanguage } from '@/data-directory/lib/get-data'
import type { Context, Page } from '@/types'

// Link patterns for Markdown
const INTERNAL_LINK_PATTERN = /\]\(\/[^)]+\)/g
const AUTOTITLE_LINK_PATTERN = /\[AUTOTITLE\]\(([^)]+)\)/g
const EXTERNAL_LINK_PATTERN = /\]\((https?:\/\/[^)]+)\)/g
const IMAGE_LINK_PATTERN = /!\[[^\]]*\]\(([^)]+)\)/g

// Anchor link patterns (for same-page links)
const ANCHOR_LINK_PATTERN = /\]\(#[^)]+\)/g

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
}

/**
 * Get line and column number for a match in content
 */
function getLineAndColumn(content: string, matchIndex: number): { line: number; column: number } {
  const lines = content.substring(0, matchIndex).split('\n')
  const line = lines.length
  const column = lines[lines.length - 1].length + 1
  return { line, column }
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

  // Extract AUTOTITLE links first (they're a special case of internal links)
  let match
  while ((match = AUTOTITLE_LINK_PATTERN.exec(content)) !== null) {
    const { line, column } = getLineAndColumn(content, match.index)
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
  while ((match = INTERNAL_LINK_PATTERN.exec(content)) !== null) {
    // Skip if this is an AUTOTITLE link (already captured)
    const fullMatch = match[0]
    if (content.substring(match.index - 10, match.index).includes('AUTOTITLE')) {
      continue
    }

    const { line, column } = getLineAndColumn(content, match.index)
    // Extract href from ](/path) format
    const href = fullMatch.substring(2, fullMatch.length - 1).split('#')[0]
    const text = extractLinkText(content, match.index)

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
  while ((match = EXTERNAL_LINK_PATTERN.exec(content)) !== null) {
    const { line, column } = getLineAndColumn(content, match.index)
    const href = match[1]
    const text = extractLinkText(content, match.index)

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
  while ((match = ANCHOR_LINK_PATTERN.exec(content)) !== null) {
    const { line, column } = getLineAndColumn(content, match.index)
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
  while ((match = IMAGE_LINK_PATTERN.exec(content)) !== null) {
    const { line, column } = getLineAndColumn(content, match.index)
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

  return {
    internalLinks,
    externalLinks,
    anchorLinks,
    imageLinks,
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
    // Dynamic import to avoid circular dependency issues
    const { renderLiquid } = await import('@/content-render/liquid/index')
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
 * - Removes trailing slashes
 * - Removes anchor fragments
 * - Ensures leading slash
 */
export function normalizeLinkPath(href: string): string {
  // Remove anchor
  let normalized = href.split('#')[0]

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

  // Check if it's a direct page
  if (pageMap[normalized]) {
    return { exists: true, isRedirect: false }
  }

  // Check if it's a redirect
  if (redirects[normalized]) {
    return {
      exists: true,
      isRedirect: true,
      redirectTarget: redirects[normalized],
    }
  }

  // Check with /en prefix (FPT pages are stored with language prefix)
  const withLang = `/en${normalized}`
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

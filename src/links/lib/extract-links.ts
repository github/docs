import fs from 'fs'
import path from 'path'

import { createLogger } from '@/observability/logger'
import { allVersions } from '@/versions/lib/all-versions'
import { latestStable } from '@/versions/lib/enterprise-server-releases'
import removeFPTFromPath from '@/versions/lib/remove-fpt-from-path'
import { getDataByLanguage } from '@/data-directory/lib/get-data'
import getRedirect from '@/redirects/lib/get-redirect'
import { isArchivedVersionByPath } from '@/archives/lib/is-archived-version'
import type { Context, Page } from '@/types'

const logger = createLogger(import.meta.url)

const INTERNAL_LINK_PATTERN = /\]\((\/[^()\s]+(?:\([^()]*\)[^()\s]*)*)\)/g
const AUTOTITLE_LINK_PATTERN = /\[AUTOTITLE\]\(([^)\s]+)\)/g
// One balanced parenthesis level covers URLs like https://example.com/a_(b)
// without catastrophic backtracking.
const EXTERNAL_LINK_PATTERN = /\]\((https?:\/\/[^()\s]*(?:\([^()]*\)[^()\s]*)*)\)/g
const IMAGE_LINK_PATTERN = /!\[[^\]]*\]\(([^)]+)\)/g

const ANCHOR_LINK_PATTERN = /\]\(#[^)]+\)/g

// Reference-style definitions look like [id]: /path or [id]: /path "title".
const LINK_DEFINITION_PATTERN = /^\[[^\]]+\]:\s+(\/[^\s"'(<>]*)/gm

// Liquid-prefixed hrefs look like ]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/path).
// Tag bodies exclude ) in practice, so the match stops at the link's closing parenthesis.
const LIQUID_HREF_PATTERN = /\]\(({%[^)]+)\)/g

export interface ExtractedLink {
  href: string
  line: number
  column: number
  text?: string
  isAutotitle?: boolean
  isImage?: boolean
  isAnchor?: boolean
  // Internal links keep fragments separate so path resolution ignores them and anchor
  // validation can still check them against the destination page.
  // Example: /foo/bar#some-heading stores href /foo/bar and fragment some-heading.
  fragment?: string
}

export interface LinkExtractionResult {
  internalLinks: ExtractedLink[]
  externalLinks: ExtractedLink[]
  anchorLinks: ExtractedLink[]
  imageLinks: ExtractedLink[]
  // Liquid-prefixed hrefs keep the raw unrendered value because validation needs the
  // rendered canonical path.
  liquidPrefixedLinks: ExtractedLink[]
}

// Precomputing line starts lets each match resolve line and column by binary search
// instead of repeated splits.
function buildLineOffsets(content: string): number[] {
  const offsets = [0]
  for (let i = 0; i < content.length; i++) {
    if (content[i] === '\n') offsets.push(i + 1)
  }
  return offsets
}

// Binary search gives logarithmic lookup for each match position.
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

function extractLinkText(content: string, matchIndex: number): string | undefined {
  // Scan back from the closing bracket; nested brackets in link text stay approximate.
  let start = matchIndex - 1

  while (start >= 0 && content[start] !== '[') {
    start--
  }

  if (start >= 0 && content[start] === '[') {
    const text = content.substring(start + 1, matchIndex)
    return text.length > 0 ? text : undefined
  }
  return undefined
}

// extractLinksFromMarkdown masks code first because Markdown never renders links inside
// code blocks or inline code spans. Inline spans require matching maximal backtick runs,
// so malformed backticks stay literal and real links between them still get checked.
export function extractLinksFromMarkdown(content: string): LinkExtractionResult {
  const internalLinks: ExtractedLink[] = []
  const externalLinks: ExtractedLink[] = []
  const anchorLinks: ExtractedLink[] = []
  const imageLinks: ExtractedLink[] = []
  const liquidPrefixedLinks: ExtractedLink[] = []

  // Path resolution needs hrefs without fragments; a trailing bare # counts as no fragment.
  const splitFragment = (raw: string): { href: string; fragment?: string } => {
    const hashIndex = raw.indexOf('#')
    if (hashIndex === -1) return { href: raw }
    const fragment = raw.slice(hashIndex + 1)
    return { href: raw.slice(0, hashIndex), fragment: fragment.length ? fragment : undefined }
  }

  // Mask backtick-fenced code so placeholder links stay ignored without shifting positions.
  const withoutFences = content.replace(
    /^ {0,3}(`{3,})[^\n]*\n[\s\S]*?^ {0,3}\1\s*$/gm,
    (match) => {
      return match.replace(/[^\n]/g, ' ')
    },
  )

  // Mask inline code with same-length spaces so examples like `[AUTOTITLE](/PATH)` stay ignored.
  const strippedContent = withoutFences.replace(/(?<!`)(`+)(?!`)[^\n]*?(?<!`)\1(?!`)/g, (match) => {
    return match.replace(/[^\n]/g, ' ')
  })

  // Precompute offsets once so every line and column lookup stays logarithmic.
  const lineOffsets = buildLineOffsets(strippedContent)

  // AUTOTITLE links need the first pass so the generic internal-link pass can skip them.
  let match
  while ((match = AUTOTITLE_LINK_PATTERN.exec(strippedContent)) !== null) {
    const { line, column } = getLineAndColumn(lineOffsets, match.index)
    const { href, fragment } = splitFragment(match[1])
    if (href.startsWith('/')) {
      internalLinks.push({
        href,
        line,
        column,
        text: 'AUTOTITLE',
        isAutotitle: true,
        fragment,
      })
    }
  }

  // These patterns are module-level and global, so lastIndex survives between calls.
  AUTOTITLE_LINK_PATTERN.lastIndex = 0

  while ((match = INTERNAL_LINK_PATTERN.exec(strippedContent)) !== null) {
    // The AUTOTITLE pass already recorded this link.
    if (strippedContent.substring(match.index - 10, match.index).includes('AUTOTITLE')) {
      continue
    }

    const { line, column } = getLineAndColumn(lineOffsets, match.index)
    // Group 1 handles destinations with one level of balanced parentheses, such as files/(fr).pdf.
    const { href, fragment } = splitFragment(match[1])
    const text = extractLinkText(strippedContent, match.index)

    internalLinks.push({
      href,
      line,
      column,
      text,
      isAutotitle: false,
      fragment,
    })
  }

  INTERNAL_LINK_PATTERN.lastIndex = 0

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

  EXTERNAL_LINK_PATTERN.lastIndex = 0

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

  ANCHOR_LINK_PATTERN.lastIndex = 0

  while ((match = IMAGE_LINK_PATTERN.exec(strippedContent)) !== null) {
    const { line, column } = getLineAndColumn(lineOffsets, match.index)
    const href = match[1]

    if (href.startsWith('/')) {
      imageLinks.push({
        href,
        line,
        column,
        isImage: true,
      })
    }
  }

  IMAGE_LINK_PATTERN.lastIndex = 0

  // Reference-style definitions point to the same targets that inline links do.
  while ((match = LINK_DEFINITION_PATTERN.exec(strippedContent)) !== null) {
    const { line, column } = getLineAndColumn(lineOffsets, match.index)
    const { href, fragment } = splitFragment(match[1])
    internalLinks.push({
      href,
      line,
      column,
      isAutotitle: false,
      fragment,
    })
  }

  LINK_DEFINITION_PATTERN.lastIndex = 0

  while ((match = LIQUID_HREF_PATTERN.exec(strippedContent)) !== null) {
    const { line, column } = getLineAndColumn(lineOffsets, match.index)
    liquidPrefixedLinks.push({
      href: match[1],
      line,
      column,
    })
  }

  LIQUID_HREF_PATTERN.lastIndex = 0

  return {
    internalLinks,
    externalLinks,
    anchorLinks,
    imageLinks,
    liquidPrefixedLinks,
  }
}

export function createLiquidContext(
  version: string = 'free-pro-team@latest',
  language: string = 'en',
): Context {
  const versionObj = allVersions[version]
  if (!versionObj) {
    throw new Error(`Unknown version: ${version}`)
  }

  const siteData = getDataByLanguage('variables', language)

  return {
    currentVersion: version,
    currentLanguage: language,
    currentVersionObj: versionObj,
    enterpriseServerVersions: Object.values(allVersions)
      .filter((v) => v.plan === 'enterprise-server')
      .map((v) => v.currentRelease),
    site: siteData,
    // Link extraction only renders Liquid here, so redirects and pages can stay empty.
    pages: {},
    redirects: {},
  } as Context
}

// Cache renderLiquid after a dynamic import to avoid circular imports and repeated import overhead.
type RenderLiquidModule = (template: string, context: Context) => Promise<string>
let _renderLiquid: RenderLiquidModule | null = null
async function getCachedRenderLiquid(): Promise<RenderLiquidModule> {
  if (!_renderLiquid) {
    const mod = await import('@/content-render/liquid/index')
    _renderLiquid = mod.renderLiquid
  }
  return _renderLiquid
}

// Unlike extractLinksWithLiquid and renderAndExtractLinks, render failures propagate here.
// Fragment validation needs this: raw Liquid gives wrong heading IDs and deletes valid fragments.
export async function renderMarkdownLiquid(content: string, context: Context): Promise<string> {
  const renderLiquid = await getCachedRenderLiquid()
  return renderLiquid(content, context)
}

// Rendered output reflects what a version shows; failed renders fall back to raw Markdown.
export async function extractLinksWithLiquid(
  content: string,
  context: Context,
): Promise<LinkExtractionResult> {
  try {
    const renderLiquid = await getCachedRenderLiquid()
    const rendered = await renderLiquid(content, context)
    return extractLinksFromMarkdown(rendered)
  } catch (error) {
    // Malformed templates are the usual cause.
    logger.warn('Liquid rendering failed, falling back to raw extraction', { error })
    return extractLinksFromMarkdown(content)
  }
}

// Callers that need both outputs avoid a second Liquid render.
export async function renderAndExtractLinks(
  content: string,
  context: Context,
): Promise<{ renderedMarkdown: string; result: LinkExtractionResult }> {
  try {
    const renderLiquid = await getCachedRenderLiquid()
    const renderedMarkdown = await renderLiquid(content, context)
    return { renderedMarkdown, result: extractLinksFromMarkdown(renderedMarkdown) }
  } catch (error) {
    logger.warn('Liquid rendering failed, falling back to raw extraction', { error })
    return { renderedMarkdown: content, result: extractLinksFromMarkdown(content) }
  }
}

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

export function normalizeLinkPath(href: string): string {
  let normalized = href.split('?')[0]

  normalized = normalized.split('#')[0]

  if (normalized.endsWith('/') && normalized.length > 1) {
    normalized = normalized.slice(0, -1)
  }

  if (!normalized.startsWith('/')) {
    normalized = `/${normalized}`
  }

  return normalized
}

// Resolve only direct pageMap hits, matching checkInternalLink's bare and language-prefixed
// branches. Anchor checks need the target page's precomputed heading IDs, and redirects
// stay excluded because their final anchor is ambiguous.
export function resolveInternalLinkKey(
  href: string,
  pageMap: Record<string, Page>,
  version?: string,
  language = 'en',
): string | null {
  const normalized = normalizeLinkPath(href)

  const latestPrefix = '/enterprise-server@latest'
  const stablePrefix = `/enterprise-server@${latestStable}`
  const resolved =
    normalized.startsWith(latestPrefix) || normalized.startsWith(`/en${latestPrefix}`)
      ? normalized.replace(latestPrefix, stablePrefix)
      : normalized

  if (pageMap[resolved]) return resolved

  // Prefer the requested version before the bare /en key so GHES anchors hit the GHES cache.
  const versioned = versionedPageKey(resolved, version, language)
  if (versioned && pageMap[versioned.key]) return versioned.key

  const withLang = `/${language}${resolved}`
  if (pageMap[withLang]) return withLang

  return null
}

// Versionless links need a pageMap key inside the checked version. Paths that already
// carry a version or language prefix mean something specific and stay unchanged. The
// redirect table stores the language-stripped form, while pageMap stores the prefix.
function versionedPageKey(
  resolved: string,
  version: string | undefined,
  language: string,
): { key: string; withoutLanguage: string } | null {
  if (!version) return null
  // Version-qualified paths already name their target version.
  if (/^\/[a-z-]+@/.test(resolved)) return null
  // Language-qualified paths already had their direct pageMap lookup.
  if (/^\/[a-z]{2}(-[a-z]{2})?(\/|$)/.test(resolved)) return null

  const withoutLanguage = removeFPTFromPath(path.posix.join('/', version, resolved))
  return { key: `/${language}${withoutLanguage}`, withoutLanguage }
}

// Resolve versionless links inside the checked version first, matching runtime rendering.
// Without version context, non-FPT versionless links can fall through to fallback redirects
// and look like links that need updating.
export function checkInternalLink(
  href: string,
  pageMap: Record<string, Page>,
  redirects: Record<string, string>,
  version?: string,
  language = 'en',
): {
  exists: boolean
  isRedirect: boolean
  redirectTarget?: string
  requiresVersionContext?: boolean
} {
  const normalized = normalizeLinkPath(href)

  // enterprise-server@latest resolves to the latest stable version at runtime.
  const latestPrefix = '/enterprise-server@latest'
  const stablePrefix = `/enterprise-server@${latestStable}`
  const resolved =
    normalized.startsWith(latestPrefix) || normalized.startsWith(`/en${latestPrefix}`)
      ? normalized.replace(latestPrefix, stablePrefix)
      : normalized

  if (pageMap[resolved]) {
    return { exists: true, isRedirect: false }
  }

  // Version-scoped pages must beat fallback redirects on the versionless form.
  const versioned = versionedPageKey(resolved, version, language)
  if (versioned) {
    // Redirect middleware wins over versioned pages, but self-redirects are no-ops.
    const versionedRedirect = redirects[versioned.withoutLanguage]
    if (versionedRedirect && versionedRedirect !== versioned.withoutLanguage) {
      // update-internal-links cannot fix redirects that exist only under a version prefix.
      return {
        exists: true,
        isRedirect: true,
        redirectTarget: versionedRedirect,
        requiresVersionContext: !(resolved in redirects),
      }
    }
    if (pageMap[versioned.key]) {
      return { exists: true, isRedirect: false }
    }
  }

  if (redirects[resolved]) {
    return {
      exists: true,
      isRedirect: true,
      redirectTarget: redirects[resolved],
    }
  }

  // FPT pages live under language-prefixed pageMap keys.
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

  // Redirects omit locale prefixes, including hyphenated locales like /pt-br and /zh-cn.
  const langPrefixMatch = resolved.match(/^\/[a-z]{2}(-[a-z]{2})?\//)
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

  // Runtime resolvers need a language prefix, but locale-prefixed links already have one.
  const withEn = langPrefixMatch ? resolved : withLang

  // /enterprise-server@x.y and legacy /enterprise/x.y paths resolve outside pageMap.
  if (isArchivedVersionByPath(withEn).isArchived) {
    return { exists: true, isRedirect: false }
  }

  // Runtime redirect resolution catches algorithmic redirects missing from the flat map.
  try {
    // getRedirect only reads redirects, userLanguage, and pages here.
    const context: Pick<Context, 'redirects' | 'userLanguage' | 'pages'> = {
      redirects,
      userLanguage: 'en',
      pages: pageMap,
    }
    const redirect = getRedirect(withEn, context as unknown as Context)
    if (redirect) {
      // Strip locale prefixes to match flat-map branches; a bare locale root normalizes to /.
      return {
        exists: true,
        isRedirect: true,
        redirectTarget: redirect.replace(/^\/[a-z]{2}(-[a-z]{2})?(?=\/|$)/, '') || '/',
      }
    }
  } catch {
    // Fully deprecated shapes such as github-ae stay unresolvable instead of crashing.
  }

  return { exists: false, isRedirect: false }
}

// checkAssetLink verifies the asset exists on disk; isAssetLink only checks the prefix.
export function checkAssetLink(href: string): boolean {
  if (!href.startsWith('/assets/')) {
    return false
  }
  const assetPath = path.resolve(href.slice(1))
  return fs.existsSync(assetPath)
}

export function isAssetLink(href: string): boolean {
  return href.startsWith('/assets/')
}

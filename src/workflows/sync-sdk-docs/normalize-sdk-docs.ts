#!/usr/bin/env node

// Normalizes Copilot SDK docs for publishing on docs.github.com. The steps are
// called at the bottom of this file, roughly but not exactly in numeric order:
// Step 0a runs before Step 0, and Step 1b after Step 1. Where the ordering
// matters, the step's own comment says why.
//
// Adapted from the spike normalization script in docs-internal#60525.
//
// Usage:
//   npx tsx src/workflows/sync-sdk-docs/normalize-sdk-docs.ts --content-dir <path> \
//     --sdk-docs-dir <path>

import fs from 'node:fs'
import path from 'node:path'
import { parseArgs } from 'node:util'
import matter from '@gr2m/gray-matter'

import { stripHiddenBlocks, nextFenceState, type OpenFence } from './strip-hidden-blocks'

const { values: args } = parseArgs({
  options: {
    'content-dir': { type: 'string' },
    'sdk-docs-dir': { type: 'string' },
  },
})

const CONTENT_DIR = path.resolve(args['content-dir'] as string)
const SDK_DOCS_DIR = path.resolve(args['sdk-docs-dir'] as string)

/**
 * Pages that have been relocated OUT of the synced SDK docs tree into
 * hand-authored content elsewhere in docs-internal.
 *
 * Keys are paths relative to the SDK docs root, exactly as they appear upstream
 * in github/copilot-sdk's `docs/` directory. Values are the docs.github.com URL
 * the page now lives at.
 *
 * Each entry does two inseparable things on every sync:
 *   1. Deletes the upstream copy after it is rsynced in (Step 0a), so the page
 *      is not republished at its old URL. That URL is now a `redirect_from` on
 *      the hand-authored page and must stay vacant.
 *   2. Teaches the internal-link rewriter (Step 3) to point inbound relative
 *      links at the new URL, instead of logging "target missing" and leaving a
 *      raw `../getting-started.md` link in published content.
 *
 * Both halves must stay together, which is why this lives here rather than as an
 * rsync `--exclude` in .github/workflows/sync-sdk-docs.yml: excluding the file
 * at copy time without remapping its links would ship ~17 broken links.
 *
 * Destinations are validated on every run; see validateRelocatedDestinations().
 */
const RELOCATED_PAGES: Record<string, string> = {
  'getting-started.md': '/copilot/get-started/sdk-quickstart',
}

// Relocated pages whose upstream source file was not found during this sync.
const missingRelocatedSources: string[] = []

if (!fs.existsSync(CONTENT_DIR)) {
  console.error(`Content directory not found: ${CONTENT_DIR}`)
  process.exit(1)
}
if (!fs.existsSync(SDK_DOCS_DIR)) {
  console.error(`SDK docs directory not found: ${SDK_DOCS_DIR}`)
  process.exit(1)
}

// Recursively collect all .md files in a directory.
function getAllMarkdownFiles(dir: string): string[] {
  const results: string[] = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      results.push(...getAllMarkdownFiles(fullPath))
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      results.push(fullPath)
    }
  }
  return results
}

/**
 * Step 0: Rename `README.md` files to `index.md`.
 *
 * The copilot-sdk repo uses `README.md` as the landing page for each docs
 * directory (the GitHub convention). docs-internal instead requires `index.md`
 * for directory pages, referenced by the parent's `children` frontmatter.
 *
 * This step:
 *   - Renames every `README.md` to `index.md` (skipping any directory that
 *     already has an `index.md`, to avoid clobbering).
 *   - Rewrites relative Markdown links that point at `README.md` so they target
 *     `index.md`, keeping later link-rewriting steps able to resolve them.
 */
function convertReadmesToIndex(): void {
  const renamedDirs = new Set<string>()

  function walk(dir: string): void {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        walk(fullPath)
      } else if (entry.isFile() && entry.name === 'README.md') {
        const indexPath = path.join(dir, 'index.md')
        if (fs.existsSync(indexPath)) {
          console.log(`  SKIP (index.md already exists): ${path.relative(SDK_DOCS_DIR, fullPath)}`)
          continue
        }
        fs.renameSync(fullPath, indexPath)
        renamedDirs.add(dir)
        console.log(`  RENAMED: ${path.relative(SDK_DOCS_DIR, fullPath)} -> index.md`)
      }
    }
  }

  walk(SDK_DOCS_DIR)

  if (renamedDirs.size === 0) return

  // Rewrite relative links that target a README.md *inside the docs tree* to
  // point at index.md, so the internal-link rewriter (Step 3) resolves them to
  // the directory URL. Links to README.md files *outside* the docs tree (e.g.
  // sibling language-SDK dirs like ../nodejs/README.md) are left untouched so
  // Step 3b can link them to the real README on GitHub.
  const readmeLinkRegex = /\[([^\]]+)\]\(((?:\.{1,2}\/)[^)]*README\.md(?:#[^)]*)?)\)/g
  for (const file of getAllMarkdownFiles(SDK_DOCS_DIR)) {
    const raw = fs.readFileSync(file, 'utf8')
    if (!raw.includes('README.md')) continue
    const dir = path.dirname(file)

    let changed = false
    const updated = raw.replace(readmeLinkRegex, (match: string, text: string, href: string) => {
      const [rawPath, anchor] = href.split('#', 2)
      const resolved = path.resolve(dir, rawPath)
      const renamed = resolved.replace(/README\.md$/, 'index.md')

      // Only rewrite when the target now exists as an index.md inside the docs tree.
      if (
        !renamed.startsWith(SDK_DOCS_DIR + path.sep) &&
        renamed !== path.join(SDK_DOCS_DIR, 'index.md')
      )
        return match
      if (!fs.existsSync(renamed)) return match

      changed = true
      const newHref = rawPath.replace(/README\.md$/, 'index.md')
      const anchorSuffix = anchor ? `#${anchor}` : ''
      return `[${text}](${newHref}${anchorSuffix})`
    })

    if (changed) {
      fs.writeFileSync(file, updated, 'utf8')
      console.log(`  README-LINKS: ${path.relative(SDK_DOCS_DIR, file)}`)
    }
  }
}

// Returns the new URL for a relocated page, or undefined for a page that has
// not been relocated.
function relocatedUrlFor(absPath: string): string | undefined {
  return RELOCATED_PAGES[path.relative(SDK_DOCS_DIR, absPath)]
}

/**
 * Step 0a: Delete pages that have been relocated out of the synced tree.
 *
 * The sync `rm -rf`s and re-rsyncs this whole directory every run, so a page
 * moved into hand-authored content elsewhere in docs-internal would otherwise
 * reappear at its old URL on the next sync and collide with the `redirect_from`
 * that now claims it. (Redirect compilation resolves that collision by dropping
 * the redirect, so the deletion is a hard invariant, not a tidiness measure.)
 *
 * This runs before every other step, so keys stay expressed in upstream terms:
 * before Step 0 renames `README.md` to `index.md`, and before Step 1 so that
 * `getChildren()` never sees the file and the parent index.md's `children`
 * array is free of dangling entries.
 *
 * A missing source is reported rather than ignored: it usually means upstream
 * renamed the file, in which case the page silently republishes under a new URL
 * and the vacated URL may be reclaimed. It does not fail the sync, because
 * github/copilot-sdk is a separate repo that may legitimately delete the page
 * once docs-internal is canonical.
 */
function removeRelocatedPages(): void {
  for (const [relPath, newUrl] of Object.entries(RELOCATED_PAGES)) {
    const absPath = path.join(SDK_DOCS_DIR, relPath)
    if (!fs.existsSync(absPath)) {
      missingRelocatedSources.push(relPath)
      console.log(`  WARN (relocated source missing upstream): ${relPath}`)
      continue
    }
    fs.rmSync(absPath)
    console.log(`  RELOCATED: ${relPath} -> ${newUrl}`)
  }
}

/**
 * Validate that every relocated page's destination actually exists in the
 * hand-authored content tree. A typo or an unrelated rename would otherwise
 * silently repoint every inbound link at a 404.
 *
 * Unlike a missing upstream source, this is entirely within docs-internal's
 * control, so it fails the sync. It runs before anything mutates the tree.
 */
function validateRelocatedDestinations(): void {
  const broken: string[] = []

  for (const [relPath, newUrl] of Object.entries(RELOCATED_PAGES)) {
    const base = path.join(CONTENT_DIR, newUrl)
    if (!fs.existsSync(`${base}.md`) && !fs.existsSync(path.join(base, 'index.md'))) {
      broken.push(`${relPath} -> ${newUrl}`)
    }
  }

  if (broken.length === 0) return

  console.error('RELOCATED_PAGES points at destinations that do not exist in the content tree:')
  for (const entry of broken) console.error(`  ${entry}`)
  console.error('Update RELOCATED_PAGES in src/workflows/sync-sdk-docs/normalize-sdk-docs.ts.')
  process.exit(1)
}

/**
 * Report relocated pages whose upstream source vanished, to the Actions job
 * summary linked from the generated PR. Mirrors reportUnbalancedMarkers(): the
 * run log alone is not something a PR reviewer will see.
 */
function reportMissingRelocatedSources(): void {
  const summaryPath = process.env.GITHUB_STEP_SUMMARY
  if (missingRelocatedSources.length === 0 || !summaryPath) return

  const lines = [
    '### ⚠️ Relocated page missing from upstream',
    '',
    'These pages are listed in `RELOCATED_PAGES` but no longer exist in',
    '[copilot-sdk docs](https://github.com/github/copilot-sdk/tree/main/docs).',
    'If upstream **renamed** the file, it is now republishing under a new URL and may have',
    'reclaimed the URL this move vacated. Update `RELOCATED_PAGES`. If upstream',
    '**deleted** it deliberately, remove the entry instead.',
    '',
    ...missingRelocatedSources.map((source) => `* \`${source}\``),
    '',
  ]

  fs.appendFileSync(summaryPath, lines.join('\n'))
}

// Convert a filename slug to a title-case short title.
function slugToTitle(slug: string): string {
  const ACRONYMS: Record<string, string> = {
    cli: 'CLI',
    oauth: 'OAuth',
    github: 'GitHub',
    mcp: 'MCP',
    api: 'API',
    sdk: 'SDK',
    tcp: 'TCP',
    byok: 'BYOK',
  }

  return slug
    .split('-')
    .map((word) => ACRONYMS[word] || word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// Return the children entries for an index.md file.
function getChildren(indexPath: string): string[] {
  const dir = path.dirname(indexPath)
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const children: string[] = []

  for (const entry of entries) {
    if (entry.name === 'index.md') continue
    if (entry.name.startsWith('.')) continue

    if (entry.isDirectory()) {
      const subFiles = fs.readdirSync(path.join(dir, entry.name))
      if (subFiles.some((f) => f.endsWith('.md'))) {
        children.push(`/${entry.name}`)
      }
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      children.push(`/${entry.name.replace(/\.md$/, '')}`)
    }
  }

  return children.sort()
}

// Converts an absolute file path to a docs URL path, so
// <repo>/content/copilot/sdk-docs/setup/local-cli.md becomes
// /copilot/sdk-docs/setup/local-cli.
function filePathToUrlPath(absPath: string): string {
  let rel = path.relative(CONTENT_DIR, absPath)
  rel = rel.replace(/\.md$/, '')
  rel = rel.replace(/\/index$/, '')
  return `/${rel}`
}

// Step 1: Add frontmatter, taking the title from the first H1 and the intro
// from the first paragraph.
function addFrontmatter(filePath: string): void {
  const raw = fs.readFileSync(filePath, 'utf8')

  if (raw.startsWith('---')) {
    console.log(`  SKIP (has frontmatter): ${path.relative(SDK_DOCS_DIR, filePath)}`)
    return
  }

  const lines = raw.split('\n')

  let title = ''
  let titleLineIndex = -1
  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(/^#\s+(.+)$/)
    if (match) {
      title = match[1].trim()
      titleLineIndex = i
      break
    }
  }

  if (!title) {
    console.log(`  WARN (no H1): ${path.relative(SDK_DOCS_DIR, filePath)}`)
    title = path.basename(filePath, '.md')
  }

  let intro = ''
  let introEndIndex = titleLineIndex
  if (titleLineIndex >= 0) {
    let i = titleLineIndex + 1
    while (i < lines.length && lines[i].trim() === '') i++

    const paraLines = []
    while (i < lines.length && lines[i].trim() !== '' && !lines[i].startsWith('#')) {
      paraLines.push(lines[i].trim())
      i++
    }
    introEndIndex = i
    intro = paraLines.join(' ')
  }

  // shortTitle comes from the filename so the slugified-title test passes.
  const basename = path.basename(filePath, '.md')
  const shortTitle = basename === 'index' ? undefined : slugToTitle(basename)

  const frontmatterData: Record<string, unknown> = {
    title,
    ...(shortTitle && { shortTitle }),
    ...(intro && { intro }),
    versions: { fpt: '*', ghec: '*' },
    contentType: 'how-tos',
  }

  const isIndex = path.basename(filePath) === 'index.md'
  if (isIndex) {
    frontmatterData.children = getChildren(filePath)
  }

  const bodyLines = [...lines]
  if (titleLineIndex >= 0) {
    bodyLines.splice(titleLineIndex, introEndIndex - titleLineIndex)
    while (bodyLines.length > 0 && bodyLines[0].trim() === '') {
      bodyLines.shift()
    }
  }

  // For index.md files, strip all body content (docs-internal convention:
  // index pages are frontmatter-only, navigation is generated from children)
  const body = isIndex ? '' : bodyLines.join('\n')
  const output = matter.stringify(body, frontmatterData)

  fs.writeFileSync(filePath, output, 'utf8')
  console.log(`  OK: ${path.relative(SDK_DOCS_DIR, filePath)}`)
}

// Step 3: Rewrite internal relative .md links to [AUTOTITLE](/url-path).
function rewriteInternalLinks(filePath: string): void {
  const raw = fs.readFileSync(filePath, 'utf8')
  const dir = path.dirname(filePath)

  // Match any relative Markdown link whose target ends in .md, including bare
  // same-directory links written without a leading "./" (e.g. `[Hooks](hooks.md)`).
  const linkRegex = /\[([^\]]+)\]\(([^)]+\.md(?:#[^)]*)?)\)/g

  let changed = false
  const updated = raw.replace(linkRegex, (_match: string, _text: string, href: string) => {
    // Only handle relative links: skip absolute paths, anchors, and external URLs.
    if (href.startsWith('/') || href.startsWith('#') || /^[a-z][a-z0-9+.-]*:\/\//i.test(href)) {
      return _match
    }

    const [rawPath, anchor] = href.split('#', 2)
    const resolved = path.resolve(dir, rawPath)

    if (!resolved.startsWith(CONTENT_DIR)) return _match

    // Pages relocated out of the synced tree no longer exist on disk, so the
    // existence check below would leave a raw relative link. Repoint them at
    // their new home instead.
    const relocatedUrl = relocatedUrlFor(resolved)
    if (relocatedUrl) {
      changed = true
      return `[AUTOTITLE](${relocatedUrl}${anchor ? `#${anchor}` : ''})`
    }

    if (!fs.existsSync(resolved)) {
      console.log(`  WARN (target missing): ${href} in ${path.relative(SDK_DOCS_DIR, filePath)}`)
      return _match
    }

    const urlPath = filePathToUrlPath(resolved)
    const anchorSuffix = anchor ? `#${anchor}` : ''
    changed = true
    return `[AUTOTITLE](${urlPath}${anchorSuffix})`
  })

  if (changed) {
    fs.writeFileSync(filePath, updated, 'utf8')
    console.log(`  LINKS: ${path.relative(SDK_DOCS_DIR, filePath)}`)
  }
}

// Step 3b: Rewrite the ./ and ../ .md links Step 3 could not resolve into
// links to the SDK repo on GitHub. Mostly these point outside the docs tree,
// such as ../nodejs/README.md, but a missing in-tree target lands here too.
function rewriteRepoRelativeLinks(filePath: string): void {
  const raw = fs.readFileSync(filePath, 'utf8')
  const dir = path.dirname(filePath)
  const SDK_REPO_URL = 'https://github.com/github/copilot-sdk/tree/main'

  const linkRegex = /\[([^\]]+)\]\((\.{1,2}\/[^)]*\.md(?:#[^)]*)?)\)/g

  let changed = false
  const updated = raw.replace(linkRegex, (_match: string, text: string, href: string) => {
    const [rawPath, anchor] = href.split('#', 2)
    const resolved = path.resolve(dir, rawPath)

    if (fs.existsSync(resolved)) return _match

    // content/copilot/sdk-docs/ maps to copilot-sdk/docs/, so a link from
    // content/copilot/sdk-docs/getting-started.md to ../nodejs/README.md
    // resolves to content/copilot/nodejs/README.md, which in the SDK repo is
    // nodejs/README.md.
    const relFromSdkDocs = path.relative(SDK_DOCS_DIR, resolved)

    // One leading ../ reaches the repo root, so relFromSdkDocs looks like
    // "../nodejs/README.md". Strip the leading ../ segments. A target more than
    // one level above SDK_DOCS_DIR is outside the repo entirely and still gets
    // a plausible-looking repo URL.
    const parts = relFromSdkDocs.split(path.sep)
    let upCount = 0
    for (const part of parts) {
      if (part === '..') upCount++
      else break
    }
    const repoPath = parts.slice(upCount).join('/')

    const anchorSuffix = anchor ? `#${anchor}` : ''
    changed = true
    return `[${text}](${SDK_REPO_URL}/${repoPath}${anchorSuffix})`
  })

  if (changed) {
    fs.writeFileSync(filePath, updated, 'utf8')
    console.log(`  REPO-LINKS: ${path.relative(SDK_DOCS_DIR, filePath)}`)
  }
}

// Step 4: Strip the docs.github.com domain from markdown links. A target found
// in CONTENT_DIR also gets its link text replaced with AUTOTITLE.
function rewriteDocsGitHubLinks(filePath: string): void {
  const raw = fs.readFileSync(filePath, 'utf8')

  const docsLinkRegex = /\[([^\]]+)\]\((https:\/\/docs\.github\.com\/(?:en\/)?([^)]*))\)/g

  let changed = false
  const updated = raw.replace(
    docsLinkRegex,
    (_match: string, _text: string, _fullUrl: string, pathAndAnchor: string) => {
      const [rawPath, anchor] = pathAndAnchor.split('#', 2)
      const urlPath = `/${rawPath}`
      const contentPath = path.join(CONTENT_DIR, `${rawPath}.md`)
      const contentIndexPath = path.join(CONTENT_DIR, rawPath, 'index.md')

      if (!fs.existsSync(contentPath) && !fs.existsSync(contentIndexPath)) {
        console.log(
          `  STRIP-DOMAIN (target not in content tree): ${urlPath} in ${path.relative(SDK_DOCS_DIR, filePath)}`,
        )
        // Strip the docs.github.com domain even if the target doesn't exist
        // locally. The path may be valid at runtime (e.g. versioned pages).
        const anchorSuffix = anchor ? `#${anchor}` : ''
        changed = true
        return `[${_text}](${urlPath}${anchorSuffix})`
      }

      const anchorSuffix = anchor ? `#${anchor}` : ''
      changed = true
      return `[AUTOTITLE](${urlPath}${anchorSuffix})`
    },
  )

  if (changed) {
    fs.writeFileSync(filePath, updated, 'utf8')
    console.log(`  DOCS-LINKS: ${path.relative(SDK_DOCS_DIR, filePath)}`)
  }
}

// Step 5: Create missing index.md files for subdirectories.
function createMissingIndexFiles(): string[] {
  const created: string[] = []

  function walk(dir: string): void {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    for (const entry of entries) {
      if (!entry.isDirectory() || entry.name.startsWith('.')) continue
      const dirPath = path.join(dir, entry.name)
      const indexPath = path.join(dirPath, 'index.md')

      walk(dirPath)

      if (fs.existsSync(indexPath)) continue

      const dirFiles = fs.readdirSync(dirPath)
      if (!dirFiles.some((f) => f.endsWith('.md'))) continue

      const title = slugToTitle(entry.name)
      const children = getChildren(indexPath)

      const frontmatterData: Record<string, unknown> = {
        title,
        versions: { fpt: '*', ghec: '*' },
        contentType: 'how-tos',
        children,
      }

      const content = matter.stringify('', frontmatterData)
      fs.writeFileSync(indexPath, content, 'utf8')
      created.push(indexPath)
      console.log(`  CREATED: ${path.relative(SDK_DOCS_DIR, indexPath)}`)
    }
  }

  walk(SDK_DOCS_DIR)
  return created
}

// Step 6: Replace ```go with ```golang and ```ts with ```typescript.
function fixCodeFenceLanguages(filePath: string): void {
  const raw = fs.readFileSync(filePath, 'utf8')

  const REPLACEMENTS: Record<string, string> = {
    go: 'golang',
    ts: 'typescript',
  }

  let changed = false
  const updated = raw.replace(
    /^(\s*```)(go|ts)\s*$/gm,
    (_match: string, backticks: string, lang: string) => {
      if (REPLACEMENTS[lang]) {
        changed = true
        return `${backticks}${REPLACEMENTS[lang]}`
      }
      return _match
    },
  )

  if (changed) {
    fs.writeFileSync(filePath, updated, 'utf8')
    console.log(`  LANGS: ${path.relative(SDK_DOCS_DIR, filePath)}`)
  }
}

// Step 7: Renumber ordered lists so every item uses "1.".
function normalizeOrderedLists(filePath: string): void {
  const raw = fs.readFileSync(filePath, 'utf8')
  const lines = raw.split('\n')

  let changed = false
  let inCodeBlock = false

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trimStart().startsWith('```')) {
      inCodeBlock = !inCodeBlock
      continue
    }
    if (inCodeBlock) continue

    const match = lines[i].match(/^(\s*)(\d+)\.\s/)
    if (match && match[2] !== '1') {
      lines[i] = lines[i].replace(/^(\s*)\d+\.\s/, '$11. ')
      changed = true
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8')
    console.log(`  LISTS: ${path.relative(SDK_DOCS_DIR, filePath)}`)
  }
}

// Step 8: MD040 wants a language on every fence, so label a bare one ```text.
function fixBareCodeFences(filePath: string): void {
  const raw = fs.readFileSync(filePath, 'utf8')
  const lines = raw.split('\n')

  let changed = false
  let inCodeBlock = false

  for (let i = 0; i < lines.length; i++) {
    const isBare = /^\s*```\s*$/.test(lines[i])
    if (isBare) {
      if (inCodeBlock) {
        // Closing fence, leave as-is.
        inCodeBlock = false
      } else {
        // Opening fence with no language, so add 'text'.
        lines[i] = lines[i].replace(/```/, '```text')
        inCodeBlock = true
        changed = true
      }
    } else if (/^\s*```\w/.test(lines[i])) {
      inCodeBlock = true
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8')
    console.log(`  FENCES: ${path.relative(SDK_DOCS_DIR, filePath)}`)
  }
}

// Step 9: MD031 wants a blank line before and after every fenced code block.
function fixBlanksAroundFences(filePath: string): void {
  const raw = fs.readFileSync(filePath, 'utf8')
  const lines = raw.split('\n')
  const result: string[] = []
  let changed = false
  let inCodeBlock = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const isFence = /^\s*```/.test(line)

    if (isFence) {
      if (!inCodeBlock) {
        // Opening fence, so add a blank line before it unless this is the start
        // of the file or the previous line is already blank.
        if (result.length > 0 && result[result.length - 1].trim() !== '') {
          result.push('')
          changed = true
        }
        result.push(line)
        inCodeBlock = true
      } else {
        // Closing fence, so push it and then add a blank line after.
        result.push(line)
        inCodeBlock = false
        if (i + 1 < lines.length && lines[i + 1].trim() !== '') {
          result.push('')
          changed = true
        }
      }
    } else {
      result.push(line)
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, result.join('\n'), 'utf8')
    console.log(`  BLANKS: ${path.relative(SDK_DOCS_DIR, filePath)}`)
  }
}

/**
 * Step 1b: Remove `docs-validate: hidden` ranges.
 * These wrap validation-only code samples that the SDK's docs-validate workflow
 * compiles in place of the reader-facing fragment that follows them. The markers
 * are HTML comments with no rendering semantics, so without this step the
 * validation sample publishes alongside the real one and readers see the same
 * example twice. Runs before the codetabs conversion so the ranges are gone
 * before any <details> group is rewritten.
 *
 * An unbalanced marker is left in place rather than swallowing the rest of the
 * file. Because this workflow opens its PR automatically, those warnings are
 * also written to the job summary so they survive outside the run log.
 */
const unbalancedMarkerWarnings: string[] = []

function stripHiddenValidationBlocks(filePath: string): void {
  const raw = fs.readFileSync(filePath, 'utf8')
  const { content, removed, unbalanced } = stripHiddenBlocks(raw)
  const relativePath = path.relative(SDK_DOCS_DIR, filePath)

  if (unbalanced > 0) {
    const message = `${relativePath}: ${unbalanced} unclosed "docs-validate: hidden" marker(s), left in place`
    unbalancedMarkerWarnings.push(message)
    console.log(`  WARN (${message})`)
  }

  if (removed > 0) {
    fs.writeFileSync(filePath, content, 'utf8')
    console.log(`  HIDDEN (removed ${removed}): ${relativePath}`)
  }
}

/**
 * Write unbalanced-marker warnings to the Actions job summary, which is linked
 * from the generated PR. Without this the only record is the run log, which a
 * PR reviewer will not see.
 */
function reportUnbalancedMarkers(): void {
  const summaryPath = process.env.GITHUB_STEP_SUMMARY
  if (unbalancedMarkerWarnings.length === 0 || !summaryPath) return

  const lines = [
    '### ⚠️ Unclosed `docs-validate: hidden` markers',
    '',
    'These markers have no matching `<!-- /docs-validate: hidden -->`, so the validation-only',
    'code sample they open was published instead of being removed. Fix the pair in',
    '[copilot-sdk docs](https://github.com/github/copilot-sdk/tree/main/docs).',
    '',
    ...unbalancedMarkerWarnings.map((warning) => `* \`${warning}\``),
    '',
  ]

  fs.appendFileSync(summaryPath, lines.join('\n'), 'utf8')
}

// Step 2: SDK source docs use <details><summary><strong>Language</strong>
// </summary> blocks for multi-language examples. Convert a group of two or
// more consecutive ones to {% codetabs %}/{% codetab %} Liquid syntax. A block
// whose label has no codetab key is warned about and dropped from the output.

// Maps <summary> label text to codetab language keys
const LABEL_TO_CODETAB_KEY: Record<string, string> = {
  'Node.js / TypeScript': 'typescript',
  'Node.js / TypeScript (standalone SDK)': 'typescript',
  'Node.js': 'javascript',
  TypeScript: 'typescript',
  Python: 'python',
  Go: 'go',
  '.NET': 'dotnet',
  'C# / .NET': 'csharp',
  Java: 'java',
  Ruby: 'ruby',
  Shell: 'shell',
  JavaScript: 'javascript',
  Rust: 'rust',
}

interface DetailsBlock {
  label: string
  codetabKey: string | null
  innerLines: string[]
  startLine: number
  endLine: number
}

function convertDetailsToCodetabs(filePath: string): void {
  const raw = fs.readFileSync(filePath, 'utf8')
  const lines = raw.split('\n')
  const result: string[] = []
  let changed = false
  let openFence: OpenFence | null = null
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    // A bare toggle counts any ``` line as a delimiter, so a fenced content
    // line such as ```<details> flips the state mid-block. That used to
    // self-correct only because a stalled cursor re-toggled the same line.
    // Now that every line is visited once, track fences the CommonMark way.
    openFence = nextFenceState(line, openFence)

    if (openFence || !/<details[\s>]/.test(line)) {
      result.push(line)
      i++
      continue
    }

    // A <details> tag outside a code block, so try to collect a group.
    const group: DetailsBlock[] = []
    const groupStartLine = i

    while (i < lines.length && /<details[\s>]/.test(lines[i])) {
      const block = parseDetailsBlock(lines, i)
      if (!block) break
      group.push(block)
      i = block.endLine + 1

      // Skip blank lines between consecutive details blocks,
      // but remember where we started in case the next line isn't <details>
      const blankStart = i
      while (i < lines.length && lines[i].trim() === '') {
        i++
      }
      // If the next non-blank line isn't <details>, restore index to after
      // the </details> so the blank lines are preserved for later output
      if (i >= lines.length || !/<details[\s>]/.test(lines[i])) {
        i = blankStart
        break
      }
    }

    if (group.length < 2) {
      // When the first block fails to parse, `i` never moved — which happens
      // for an inline `<details>` mention in prose, since fence tracking does
      // not cover code spans. Step over the line so the loop can't stall.
      if (i === groupStartLine) {
        result.push(lines[i])
        i++
        continue
      }
      for (let j = groupStartLine; j < i; j++) {
        result.push(lines[j])
      }
      continue
    }

    const unsupported = group.filter((b) => !b.codetabKey)
    if (unsupported.length > 0) {
      for (const b of unsupported) {
        console.log(
          `  WARN (unknown codetab language "${b.label}"): ${path.relative(SDK_DOCS_DIR, filePath)} line ${b.startLine + 1}`,
        )
      }
    }

    // Unsupported blocks are dropped, not passed through.
    const convertible = group.filter((b) => b.codetabKey)
    if (convertible.length < 2) {
      // Not enough convertible tabs, so emit the original lines.
      for (let j = groupStartLine; j < i; j++) {
        result.push(lines[j])
      }
      continue
    }

    changed = true
    result.push('{% codetabs %}')
    for (const block of convertible) {
      result.push(`{% codetab ${block.codetabKey} %}`)
      result.push('')
      for (const innerLine of block.innerLines) {
        result.push(innerLine)
      }
      result.push('')
      result.push('{% endcodetab %}')
    }
    result.push('{% endcodetabs %}')
  }

  if (changed) {
    fs.writeFileSync(filePath, result.join('\n'), 'utf8')
    console.log(`  CODETABS: ${path.relative(SDK_DOCS_DIR, filePath)}`)
  }
}

// Parses one <details> block starting at line index `start`, returning null
// when the block does not match the expected structure.
function parseDetailsBlock(lines: string[], start: number): DetailsBlock | null {
  if (!/<details[\s>]/.test(lines[start])) return null

  let i = start + 1
  let label = ''

  while (i < lines.length) {
    const summaryMatch = lines[i].match(/<summary><strong>(.*?)<\/strong><\/summary>/)
    if (summaryMatch) {
      label = summaryMatch[1]
      i++
      break
    }
    // If we hit </details> or another <details> before finding summary, bail
    if (/<\/details>/.test(lines[i]) || /<details[\s>]/.test(lines[i])) {
      return null
    }
    i++
  }

  if (!label) return null

  const innerLines: string[] = []
  while (i < lines.length) {
    if (/<\/details>/.test(lines[i])) {
      break
    }
    innerLines.push(lines[i])
    i++
  }

  if (i >= lines.length) return null // No closing </details> found

  const endLine = i // The </details> line

  // Step 1b already removed the balanced hidden ranges. An unbalanced one is
  // left in place deliberately, so only blank-line trimming is needed here.
  const cleaned = [...innerLines]

  while (cleaned.length > 0 && cleaned[0].trim() === '') cleaned.shift()
  while (cleaned.length > 0 && cleaned[cleaned.length - 1].trim() === '') cleaned.pop()

  const codetabKey = LABEL_TO_CODETAB_KEY[label] ?? null

  return {
    label,
    codetabKey,
    innerLines: cleaned,
    startLine: start,
    endLine,
  }
}

// Step 10: Rewrite the raw docs.github.com URLs left over from Step 4, which
// are the ones not inside markdown link syntax.
function rewriteBareDocsUrls(filePath: string): void {
  const raw = fs.readFileSync(filePath, 'utf8')

  let changed = false
  const updated = raw.replace(
    /(?<!\()(https:\/\/docs\.github\.com\/(?:en\/)?[^\s)>\]]+)/g,
    (match: string, _p1: string, offset: number) => {
      // Skip if this URL is inside a markdown link (preceded by `](`)
      if (offset > 1 && raw.substring(offset - 2, offset) === '](') return match

      changed = true
      return match
        .replace('https://docs.github.com/en/', '/')
        .replace('https://docs.github.com/', '/')
    },
  )

  if (changed) {
    fs.writeFileSync(filePath, updated, 'utf8')
    console.log(`  BARE-URLS: ${path.relative(SDK_DOCS_DIR, filePath)}`)
  }
}

// Step 11: Add a markdownlint-disable comment after the frontmatter for the
// rules that don't apply to SDK docs, per the docs pipeline proposal.
function suppressSdkLintRules(filePath: string): void {
  const raw = fs.readFileSync(filePath, 'utf8')
  const SUPPRESS_COMMENT =
    '<!-- markdownlint-disable GHD046 GHD005 -->\n' +
    '<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->\n'

  if (raw.includes('markdownlint-disable GHD046')) return

  const fmEnd = raw.indexOf('---', raw.indexOf('---') + 3)
  if (fmEnd === -1) return

  const insertPos = fmEnd + 4 // After --- and newline
  const updated = `${raw.slice(0, insertPos)}\n${SUPPRESS_COMMENT}\n${raw.slice(insertPos)}`

  fs.writeFileSync(filePath, updated, 'utf8')
  console.log(`  SUPPRESS: ${path.relative(SDK_DOCS_DIR, filePath)}`)
}

console.log(`Normalizing SDK docs in: ${SDK_DOCS_DIR}`)
console.log(`Content directory: ${CONTENT_DIR}\n`)

// Step 0a: Remove pages relocated out of the synced tree (see RELOCATED_PAGES).
// Runs first so keys stay expressed in upstream terms (before README->index
// renaming) and so getChildren() never lists a relocated page.
validateRelocatedDestinations()
console.log('--- Removing relocated pages ---\n')
removeRelocatedPages()
reportMissingRelocatedSources()

// Step 0: Rename README.md files to index.md (copilot-sdk uses README.md as
// directory landing pages; docs-internal requires index.md).
console.log('\n--- Renaming README.md files to index.md ---\n')
convertReadmesToIndex()

console.log('\n--- Adding frontmatter ---\n')
const files = getAllMarkdownFiles(SDK_DOCS_DIR)
console.log(`Found ${files.length} markdown files.\n`)
for (const file of files) {
  addFrontmatter(file)
}

// Step 1b: Remove docs-validate: hidden ranges before the codetabs conversion
// rewrites the <details> groups that contain them.
console.log('\n--- Removing docs-validate: hidden blocks ---\n')
for (const file of files) {
  stripHiddenValidationBlocks(file)
}
reportUnbalancedMarkers()

console.log('\n--- Converting details blocks to codetabs ---\n')
for (const file of files) {
  convertDetailsToCodetabs(file)
}

console.log('\n--- Rewriting internal links ---\n')
const allFiles = getAllMarkdownFiles(SDK_DOCS_DIR)
for (const file of allFiles) {
  rewriteInternalLinks(file)
}

console.log('\n--- Rewriting repo-relative links ---\n')
for (const file of allFiles) {
  rewriteRepoRelativeLinks(file)
}

console.log('\n--- Rewriting docs.github.com links ---\n')
for (const file of allFiles) {
  rewriteDocsGitHubLinks(file)
}

console.log('\n--- Creating missing index.md files ---\n')
createMissingIndexFiles()

console.log('\n--- Fixing code fence languages ---\n')
const updatedFiles = getAllMarkdownFiles(SDK_DOCS_DIR)
for (const file of updatedFiles) {
  fixCodeFenceLanguages(file)
}

console.log('\n--- Normalizing ordered lists ---\n')
for (const file of updatedFiles) {
  normalizeOrderedLists(file)
}

console.log('\n--- Fixing bare code fences ---\n')
for (const file of updatedFiles) {
  fixBareCodeFences(file)
}

console.log('\n--- Fixing blank lines around fences ---\n')
for (const file of updatedFiles) {
  fixBlanksAroundFences(file)
}

console.log('\n--- Rewriting bare docs.github.com URLs ---\n')
for (const file of updatedFiles) {
  rewriteBareDocsUrls(file)
}

console.log('\n--- Suppressing SDK-specific lint rules ---\n')
const finalFiles = getAllMarkdownFiles(SDK_DOCS_DIR)
for (const file of finalFiles) {
  suppressSdkLintRules(file)
}

console.log('\n✅ Normalization complete.')

#!/usr/bin/env node

// Normalizes Copilot SDK docs for docs.github.com, including README landing
// pages, frontmatter, links, code fences, ordered lists, hidden validation
// samples, codetabs, and SDK-specific markdownlint suppressions.
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

// These paths moved out of the synced SDK docs tree into hand-authored content.
// Keys match github/copilot-sdk docs paths relative to the SDK docs root.
// Values are their docs.github.com destinations.
//
// Each entry deletes the upstream copy after rsync, so the old URL stays vacant
// for redirect_from, and it remaps inbound links to the new URL.
//
// Keep the delete and remap together here. An rsync exclude in
// .github/workflows/sync-sdk-docs.yml would ship about 17 broken links because
// the internal-link rewriter would still point at raw relative paths such as
// ../getting-started.md.
//
// validateRelocatedDestinations() checks these destinations on every run.
const RELOCATED_PAGES: Record<string, string> = {
  'getting-started.md': '/copilot/get-started/sdk-quickstart',
}

// Track missing relocated sources because an upstream rename can republish at a new URL.
const missingRelocatedSources: string[] = []

if (!fs.existsSync(CONTENT_DIR)) {
  console.error(`Content directory not found: ${CONTENT_DIR}`)
  process.exit(1)
}
if (!fs.existsSync(SDK_DOCS_DIR)) {
  console.error(`SDK docs directory not found: ${SDK_DOCS_DIR}`)
  process.exit(1)
}

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

// copilot-sdk uses README.md as directory landing pages. docs-internal requires
// index.md pages referenced by the parent's children frontmatter.
//
// Rewrite in-tree README.md links to index.md here, so later link rewriting can
// resolve them to directory URLs. Directories that already have index.md keep
// their README.md to avoid clobbering content.
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

  // Rewrite only in-tree README.md links, so SDK repo links still point at GitHub.
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

      // Rewrite only when an in-tree index.md target exists.
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

function relocatedUrlFor(absPath: string): string | undefined {
  return RELOCATED_PAGES[path.relative(SDK_DOCS_DIR, absPath)]
}

// The sync rebuilds this directory on every run, so relocated upstream pages
// would otherwise reappear at their old URLs and collide with redirect_from on
// hand-authored pages. Redirect compilation drops the redirect on collision.
//
// Delete relocated pages before README.md becomes index.md and before getChildren()
// reads parents, so RELOCATED_PAGES stays in upstream terms and children arrays
// do not point at removed pages.
//
// Report missing sources because upstream may republish the page at a new URL
// and leave the previous URL open for reuse. Do not fail, because
// github/copilot-sdk may delete a page once docs-internal owns it.
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

// Fail before mutating files if a relocated destination would send inbound links to a 404.
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

// Put missing relocated sources in the generated PR's Actions summary, not only the run log.
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

// The docs URL drops the content root, .md extension, and trailing index.
// <repo>/content/copilot/sdk-docs/setup/local-cli.md becomes
// /copilot/sdk-docs/setup/local-cli.
function filePathToUrlPath(absPath: string): string {
  let rel = path.relative(CONTENT_DIR, absPath)
  rel = rel.replace(/\.md$/, '')
  rel = rel.replace(/\/index$/, '')
  return `/${rel}`
}

// SDK source files lack docs-internal frontmatter.
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

  // Derive shortTitle from the filename so its slug passes the slugified-title test.
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

  // docs-internal index pages are frontmatter-only; children generates navigation.
  const body = isIndex ? '' : bodyLines.join('\n')
  const output = matter.stringify(body, frontmatterData)

  fs.writeFileSync(filePath, output, 'utf8')
  console.log(`  OK: ${path.relative(SDK_DOCS_DIR, filePath)}`)
}

function rewriteInternalLinks(filePath: string): void {
  const raw = fs.readFileSync(filePath, 'utf8')
  const dir = path.dirname(filePath)

  // Also match bare same-directory links such as [Hooks](hooks.md).
  const linkRegex = /\[([^\]]+)\]\(([^)]+\.md(?:#[^)]*)?)\)/g

  let changed = false
  const updated = raw.replace(linkRegex, (_match: string, _text: string, href: string) => {
    // Skip absolute paths, anchors, and external URLs.
    if (href.startsWith('/') || href.startsWith('#') || /^[a-z][a-z0-9+.-]*:\/\//i.test(href)) {
      return _match
    }

    const [rawPath, anchor] = href.split('#', 2)
    const resolved = path.resolve(dir, rawPath)

    if (!resolved.startsWith(CONTENT_DIR)) return _match

    // Relocated pages no longer exist on disk, so point them at their new home.
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

// Missing ./ and ../ Markdown targets can point outside the docs tree, such as
// ../nodejs/README.md, so rewrite them to the SDK repo on GitHub.
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

    // content/copilot/sdk-docs maps ../nodejs/README.md to nodejs/README.md in the SDK repo.
    const relFromSdkDocs = path.relative(SDK_DOCS_DIR, resolved)

    // Strip leading ../ segments; higher targets still get a plausible SDK repo URL.
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

// docs.github.com Markdown links publish as root-relative links.
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
        // Keep runtime-only paths such as versioned pages.
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

// Markdownlint allows golang and typescript, not go and ts.
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

// Markdownlint expects ordered-list items to use 1. for every item.
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

// MD040 requires a language on opening fences; closing fences stay unchanged.
function fixBareCodeFences(filePath: string): void {
  const raw = fs.readFileSync(filePath, 'utf8')
  const lines = raw.split('\n')

  let changed = false
  let inCodeBlock = false

  for (let i = 0; i < lines.length; i++) {
    const isBare = /^\s*```\s*$/.test(lines[i])
    if (isBare) {
      if (inCodeBlock) {
        // Leave closing fences unchanged.
        inCodeBlock = false
      } else {
        // Label bare opening fences as text.
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

// MD031 requires blank lines around fenced code blocks.
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
        // Add a blank line before opening fences when content precedes them.
        if (result.length > 0 && result[result.length - 1].trim() !== '') {
          result.push('')
          changed = true
        }
        result.push(line)
        inCodeBlock = true
      } else {
        // Add a blank line after closing fences when content follows them.
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

// docs-validate: hidden ranges wrap validation-only samples that compile in
// place of the reader-facing fragment. Remove them before codetabs conversion,
// so validation samples do not publish beside the real examples.
//
// Leave unbalanced markers in place rather than swallowing the rest of the file,
// and write warnings to the job summary because this workflow opens its PR.
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

// Put unbalanced-marker warnings in the generated PR's Actions summary, not only the run log.
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

// SDK source docs use consecutive details blocks for multi-language examples.
// Convert groups with at least two supported labels to codetabs. Keep original
// details blocks when fewer than two labels are supported. Otherwise warn and
// drop unsupported labels to avoid mixed rendering patterns.

// These labels come from summary text in upstream SDK docs.
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

    // CommonMark fence tracking keeps a ```<details> content line from toggling the state.
    openFence = nextFenceState(line, openFence)

    if (openFence || !/<details[\s>]/.test(line)) {
      result.push(line)
      i++
      continue
    }

    // Outside code fences, <details> can start a convertible codetabs group.
    const group: DetailsBlock[] = []
    const groupStartLine = i

    while (i < lines.length && /<details[\s>]/.test(lines[i])) {
      const block = parseDetailsBlock(lines, i)
      if (!block) break
      group.push(block)
      i = block.endLine + 1

      // Skip blank lines between consecutive details blocks.
      const blankStart = i
      while (i < lines.length && lines[i].trim() === '') {
        i++
      }
      // Restore trailing blanks when the next block does not continue the group.
      if (i >= lines.length || !/<details[\s>]/.test(lines[i])) {
        i = blankStart
        break
      }
    }

    if (group.length < 2) {
      // Advance i after an inline <details> parse fails, or the outer loop stalls.
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

    // Drop unsupported blocks only after at least two supported tabs can render.
    const convertible = group.filter((b) => b.codetabKey)
    if (convertible.length < 2) {
      // Emit originals when fewer than two tabs can render.
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
    // Bail if the block ends or another <details> starts before its summary.
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

  if (i >= lines.length) return null

  const endLine = i

  // Balanced hidden ranges are already gone; trim blanks without touching unbalanced ranges.
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

// Raw docs.github.com URLs outside Markdown link syntax also publish as root-relative links.
function rewriteBareDocsUrls(filePath: string): void {
  const raw = fs.readFileSync(filePath, 'utf8')

  let changed = false
  const updated = raw.replace(
    /(?<!\()(https:\/\/docs\.github\.com\/(?:en\/)?[^\s)>\]]+)/g,
    (match: string, _p1: string, offset: number) => {
      // Markdown links were already rewritten.
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

// SDK docs keep source release terminology and hardcoded data-variable text.
// GHD046 and GHD005 reject those respectively.
function suppressSdkLintRules(filePath: string): void {
  const raw = fs.readFileSync(filePath, 'utf8')
  const SUPPRESS_COMMENT =
    '<!-- markdownlint-disable GHD046 GHD005 -->\n' +
    '<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->\n'

  if (raw.includes('markdownlint-disable GHD046')) return

  const fmEnd = raw.indexOf('---', raw.indexOf('---') + 3)
  if (fmEnd === -1) return

  // Add 4 for the closing frontmatter delimiter's three dashes and newline.
  const insertPos = fmEnd + 4
  const updated = `${raw.slice(0, insertPos)}\n${SUPPRESS_COMMENT}\n${raw.slice(insertPos)}`

  fs.writeFileSync(filePath, updated, 'utf8')
  console.log(`  SUPPRESS: ${path.relative(SDK_DOCS_DIR, filePath)}`)
}

console.log(`Normalizing SDK docs in: ${SDK_DOCS_DIR}`)
console.log(`Content directory: ${CONTENT_DIR}\n`)

// Remove relocated pages before README.md renaming and children generation.
validateRelocatedDestinations()
console.log('--- Removing relocated pages ---\n')
removeRelocatedPages()
reportMissingRelocatedSources()

// Rename README.md files to the docs-internal index.md convention.
console.log('\n--- Renaming README.md files to index.md ---\n')
convertReadmesToIndex()

console.log('\n--- Adding frontmatter ---\n')
const files = getAllMarkdownFiles(SDK_DOCS_DIR)
console.log(`Found ${files.length} markdown files.\n`)
for (const file of files) {
  addFrontmatter(file)
}

// Hidden validation ranges must be gone before converting details groups to codetabs.
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

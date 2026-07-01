#!/usr/bin/env node

/**
 * Normalizes Copilot SDK docs for publishing on docs.github.com.
 *
 * For every .md file in the SDK docs directory, this script:
 *   - Adds YAML frontmatter (title, intro, shortTitle, versions, contentType)
 *   - Adds `children` arrays to index.md files
 *   - Converts consecutive <details> language blocks to {% codetabs %} syntax
 *   - Rewrites internal relative .md links to [AUTOTITLE](/path) format
 *   - Rewrites absolute docs.github.com links to [AUTOTITLE](/path) format
 *   - Creates missing index.md files for subdirectories
 *   - Fixes code fence language aliases (go → golang, ts → typescript)
 *   - Normalizes ordered list prefixes to 1.
 *
 * Adapted from the spike normalization script in docs-internal#60525.
 *
 * Usage:
 *   node normalize-sdk-docs.mjs --content-dir <path> --sdk-docs-dir <path>
 */

import fs from 'node:fs'
import path from 'node:path'
import { parseArgs } from 'node:util'
import matter from '@gr2m/gray-matter'

// Parse CLI arguments
const { values: args } = parseArgs({
  options: {
    'content-dir': { type: 'string' },
    'sdk-docs-dir': { type: 'string' },
  },
})

const CONTENT_DIR = path.resolve(args['content-dir'] as string)
const SDK_DOCS_DIR = path.resolve(args['sdk-docs-dir'] as string)

if (!fs.existsSync(CONTENT_DIR)) {
  console.error(`Content directory not found: ${CONTENT_DIR}`)
  process.exit(1)
}
if (!fs.existsSync(SDK_DOCS_DIR)) {
  console.error(`SDK docs directory not found: ${SDK_DOCS_DIR}`)
  process.exit(1)
}

// --- Helpers ---

/** Recursively collect all .md files in a directory. */
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

/** Convert a filename slug to a title-case short title. */
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

/** Return the children entries for an index.md file. */
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

/**
 * Convert a resolved absolute file path to a docs URL path.
 * e.g. /…/content/copilot/sdk-docs/setup/local-cli.md → /copilot/sdk-docs/setup/local-cli
 */
function filePathToUrlPath(absPath: string): string {
  let rel = path.relative(CONTENT_DIR, absPath)
  rel = rel.replace(/\.md$/, '')
  rel = rel.replace(/\/index$/, '')
  return `/${rel}`
}

// --- Processing steps ---

/**
 * Step 1: Add frontmatter to a markdown file.
 * Extracts title from the first H1, intro from the first paragraph.
 */
function addFrontmatter(filePath: string): void {
  const raw = fs.readFileSync(filePath, 'utf8')

  // Skip files that already have frontmatter
  if (raw.startsWith('---')) {
    console.log(`  SKIP (has frontmatter): ${path.relative(SDK_DOCS_DIR, filePath)}`)
    return
  }

  const lines = raw.split('\n')

  // Extract title from first H1
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

  // Extract intro: first non-empty paragraph after the title
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

  // Compute shortTitle from filename for slugified-title test compatibility
  const basename = path.basename(filePath, '.md')
  const shortTitle = basename === 'index' ? undefined : slugToTitle(basename)

  // Build frontmatter
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

  // Remove the title line and intro paragraph from the body
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

/**
 * Step 3: Rewrite internal relative .md links to [AUTOTITLE](/url-path) format.
 */
function rewriteInternalLinks(filePath: string): void {
  const raw = fs.readFileSync(filePath, 'utf8')
  const dir = path.dirname(filePath)

  const linkRegex = /\[([^\]]+)\]\((\.{1,2}\/[^)]*\.md(?:#[^)]*)?)\)/g

  let changed = false
  const updated = raw.replace(linkRegex, (_match: string, _text: string, href: string) => {
    const [rawPath, anchor] = href.split('#', 2)
    const resolved = path.resolve(dir, rawPath)

    if (!resolved.startsWith(CONTENT_DIR)) return _match
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

/**
 * Step 3b: Rewrite repo-relative links that point outside the docs tree.
 * These are links like ../nodejs/README.md that should point to the SDK repo on GitHub.
 * Catches any remaining relative .md links that Step 3 didn't convert to AUTOTITLE.
 */
function rewriteRepoRelativeLinks(filePath: string): void {
  const raw = fs.readFileSync(filePath, 'utf8')
  const dir = path.dirname(filePath)
  const SDK_REPO_URL = 'https://github.com/github/copilot-sdk/tree/main'

  // Match relative .md links that were NOT already rewritten to AUTOTITLE
  const linkRegex = /\[([^\]]+)\]\((\.{1,2}\/[^)]*\.md(?:#[^)]*)?)\)/g

  let changed = false
  const updated = raw.replace(linkRegex, (_match: string, text: string, href: string) => {
    const [rawPath, anchor] = href.split('#', 2)
    const resolved = path.resolve(dir, rawPath)

    // Skip if the file actually exists in the content tree (should have been handled by Step 3)
    if (fs.existsSync(resolved)) return _match

    // Compute where this file would be in the SDK repo.
    // SDK docs are at content/copilot/sdk-docs/ which maps to copilot-sdk/docs/
    // So a link from content/copilot/sdk-docs/getting-started.md to ../nodejs/README.md
    // resolves to content/copilot/nodejs/README.md → which in the SDK repo is nodejs/README.md
    const relFromSdkDocs = path.relative(SDK_DOCS_DIR, resolved)

    // Links starting with ../ from SDK_DOCS_DIR go up to the repo root
    // e.g. ../nodejs/README.md from sdk-docs/ → ../../nodejs/README.md from content/copilot/sdk-docs/
    // relFromSdkDocs would be like "../nodejs/README.md"
    // We strip leading ../ segments to get the repo-root-relative path
    const parts = relFromSdkDocs.split(path.sep)
    let upCount = 0
    for (const part of parts) {
      if (part === '..') upCount++
      else break
    }
    // The repo path is everything after the ".." segments
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

/**
 * Step 4: Rewrite absolute docs.github.com links to [AUTOTITLE](/url-path).
 */
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

/**
 * Step 5: Create missing index.md files for subdirectories.
 */
function createMissingIndexFiles(): string[] {
  const created: string[] = []

  function walk(dir: string): void {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    for (const entry of entries) {
      if (!entry.isDirectory() || entry.name.startsWith('.')) continue
      const dirPath = path.join(dir, entry.name)
      const indexPath = path.join(dirPath, 'index.md')

      // Recurse into subdirectories
      walk(dirPath)

      if (fs.existsSync(indexPath)) continue

      // Check that the directory has at least one .md file
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

/**
 * Step 6: Fix code fence language aliases.
 * Replaces ```go with ```golang and ```ts with ```typescript.
 */
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

/**
 * Step 7: Normalize ordered list prefixes to all use 1.
 * Changes "2. foo", "3. bar" etc. to "1. foo", "1. bar".
 */
function normalizeOrderedLists(filePath: string): void {
  const raw = fs.readFileSync(filePath, 'utf8')
  const lines = raw.split('\n')

  let changed = false
  let inCodeBlock = false

  for (let i = 0; i < lines.length; i++) {
    // Track code blocks to avoid modifying code
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

/**
 * Step 8: Add language to bare code fences.
 * Fences without a language (```) get labeled as ```text.
 */
function fixBareCodeFences(filePath: string): void {
  const raw = fs.readFileSync(filePath, 'utf8')
  const lines = raw.split('\n')

  let changed = false
  let inCodeBlock = false

  for (let i = 0; i < lines.length; i++) {
    const isBare = /^\s*```\s*$/.test(lines[i])
    if (isBare) {
      if (inCodeBlock) {
        // Closing fence — leave as-is
        inCodeBlock = false
      } else {
        // Opening fence with no language — add 'text'
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

/**
 * Step 9: Ensure blank lines around code fences.
 * MD031 requires a blank line before and after fenced code blocks.
 */
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
        // Opening fence — ensure blank line before (unless start of file or already blank)
        if (result.length > 0 && result[result.length - 1].trim() !== '') {
          result.push('')
          changed = true
        }
        result.push(line)
        inCodeBlock = true
      } else {
        // Closing fence — push as-is, then ensure blank line after
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
 * Step 2: Convert consecutive <details> language blocks to codetabs.
 * SDK source docs use <details><summary><strong>Language</strong></summary>
 * blocks for multi-language examples. This converts groups of 2+ consecutive
 * details blocks into {% codetabs %}/{% codetab %} Liquid syntax.
 */

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
  let inCodeBlock = false
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    // Track code fences to avoid matching <details> inside code blocks
    if (/^\s*```/.test(line)) {
      inCodeBlock = !inCodeBlock
    }

    if (inCodeBlock || !/<details[\s>]/.test(line)) {
      result.push(line)
      i++
      continue
    }

    // Found a <details> tag outside a code block — try to collect a group
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

    // Only convert groups of 2+ blocks
    if (group.length < 2) {
      // Emit original lines unchanged
      for (let j = groupStartLine; j < i; j++) {
        result.push(lines[j])
      }
      continue
    }

    // Check if all blocks have valid codetab keys
    const unsupported = group.filter((b) => !b.codetabKey)
    if (unsupported.length > 0) {
      for (const b of unsupported) {
        console.log(
          `  WARN (unknown codetab language "${b.label}"): ${path.relative(SDK_DOCS_DIR, filePath)} line ${b.startLine + 1}`,
        )
      }
    }

    // Filter to only supported tabs
    const convertible = group.filter((b) => b.codetabKey)
    if (convertible.length < 2) {
      // Not enough convertible tabs — emit original lines
      for (let j = groupStartLine; j < i; j++) {
        result.push(lines[j])
      }
      continue
    }

    // Emit codetabs
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

/**
 * Parse a single <details> block starting at line index `start`.
 * Returns the block info or null if the block doesn't match expected structure.
 */
function parseDetailsBlock(lines: string[], start: number): DetailsBlock | null {
  if (!/<details[\s>]/.test(lines[start])) return null

  let i = start + 1
  let label = ''

  // Find the <summary> line
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

  // Collect inner content until </details>
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

  // Clean up inner lines: strip docs-validate comments, trim leading/trailing blanks
  const cleaned = innerLines.filter((l) => !/^\s*<!--\s*\/?docs-validate:\s*hidden\s*-->/.test(l))

  // Trim leading and trailing blank lines
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

/**
 * Step 10: Rewrite remaining raw docs.github.com URLs (not in markdown links).
 * Catches bare URLs and URLs in other contexts that the link rewriter missed.
 */
function rewriteBareDocsUrls(filePath: string): void {
  const raw = fs.readFileSync(filePath, 'utf8')

  // Match bare docs.github.com URLs NOT already inside markdown link syntax
  // Skip URLs that are already in [text](url) format (handled by Step 4)
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

/**
 * Step 11: Suppress SDK-specific lint rules.
 * Adds a markdownlint-disable comment after frontmatter for rules that
 * don't apply to SDK docs (per docs pipeline proposal tradeoffs).
 */
function suppressSdkLintRules(filePath: string): void {
  const raw = fs.readFileSync(filePath, 'utf8')
  const SUPPRESS_COMMENT =
    '<!-- markdownlint-disable GHD046 GHD005 -->\n' +
    '<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->\n'

  // Skip if already has the suppression
  if (raw.includes('markdownlint-disable GHD046')) return

  // Insert after the closing frontmatter ---
  const fmEnd = raw.indexOf('---', raw.indexOf('---') + 3)
  if (fmEnd === -1) return

  const insertPos = fmEnd + 4 // After --- and newline
  const updated = `${raw.slice(0, insertPos)}\n${SUPPRESS_COMMENT}\n${raw.slice(insertPos)}`

  fs.writeFileSync(filePath, updated, 'utf8')
  console.log(`  SUPPRESS: ${path.relative(SDK_DOCS_DIR, filePath)}`)
}

// --- Main ---

console.log(`Normalizing SDK docs in: ${SDK_DOCS_DIR}`)
console.log(`Content directory: ${CONTENT_DIR}\n`)

// Step 1: Add frontmatter
console.log('--- Adding frontmatter ---\n')
const files = getAllMarkdownFiles(SDK_DOCS_DIR)
console.log(`Found ${files.length} markdown files.\n`)
for (const file of files) {
  addFrontmatter(file)
}

// Step 2: Convert <details> language blocks to codetabs
console.log('\n--- Converting details blocks to codetabs ---\n')
for (const file of files) {
  convertDetailsToCodetabs(file)
}

// Step 3: Rewrite internal links
console.log('\n--- Rewriting internal links ---\n')
const allFiles = getAllMarkdownFiles(SDK_DOCS_DIR)
for (const file of allFiles) {
  rewriteInternalLinks(file)
}

// Step 3b: Rewrite repo-relative links (outside content tree)
console.log('\n--- Rewriting repo-relative links ---\n')
for (const file of allFiles) {
  rewriteRepoRelativeLinks(file)
}

// Step 4: Rewrite docs.github.com links
console.log('\n--- Rewriting docs.github.com links ---\n')
for (const file of allFiles) {
  rewriteDocsGitHubLinks(file)
}

// Step 5: Create missing index files
console.log('\n--- Creating missing index.md files ---\n')
createMissingIndexFiles()

// Step 6: Fix code fence languages
console.log('\n--- Fixing code fence languages ---\n')
const updatedFiles = getAllMarkdownFiles(SDK_DOCS_DIR)
for (const file of updatedFiles) {
  fixCodeFenceLanguages(file)
}

// Step 7: Normalize ordered lists
console.log('\n--- Normalizing ordered lists ---\n')
for (const file of updatedFiles) {
  normalizeOrderedLists(file)
}

// Step 8: Fix bare code fences (MD040)
console.log('\n--- Fixing bare code fences ---\n')
for (const file of updatedFiles) {
  fixBareCodeFences(file)
}

// Step 9: Ensure blank lines around fences (MD031)
console.log('\n--- Fixing blank lines around fences ---\n')
for (const file of updatedFiles) {
  fixBlanksAroundFences(file)
}

// Step 10: Rewrite remaining bare docs.github.com URLs
console.log('\n--- Rewriting bare docs.github.com URLs ---\n')
for (const file of updatedFiles) {
  rewriteBareDocsUrls(file)
}

// Step 11: Suppress SDK-specific lint rules (GHD046, GHD005)
console.log('\n--- Suppressing SDK-specific lint rules ---\n')
const finalFiles = getAllMarkdownFiles(SDK_DOCS_DIR)
for (const file of finalFiles) {
  suppressSdkLintRules(file)
}

console.log('\n✅ Normalization complete.')

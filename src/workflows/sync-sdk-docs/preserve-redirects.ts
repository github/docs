#!/usr/bin/env node

// Preserves and generates redirect_from frontmatter for synced Copilot SDK docs.
// The sync deletes the SDK content directory and rebuilds it from upstream
// Markdown that has no redirect_from, while the normalizer rebuilds frontmatter
// from scratch.
//
// Run this after normalization to reconcile the rebuilt tree with pre-sync git
// state. Surviving pages recover redirects. Reshaped pages keep redirects by URL
// identity. Pages that lose their URL need a human decision.
//
// This script normalizes and deduplicates redirects before writing. A redirect
// added by hand in docs-internal survives future syncs unless it duplicates
// another entry or redirects the page to itself.
//
// Usage:
//   npx tsx preserve-redirects.ts --sdk-docs-dir <path> [--git-ref HEAD] [--fail-on-unresolved]

import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { parseArgs } from 'node:util'
import matter from '@gr2m/gray-matter'

// Repo-relative content paths become docs.github.com URLs.
// content/copilot/how-tos/copilot-sdk/features/mcp.md becomes
// /copilot/how-tos/copilot-sdk/features/mcp.
// content/copilot/how-tos/copilot-sdk/auth/index.md becomes
// /copilot/how-tos/copilot-sdk/auth.
export function contentPathToUrl(repoRelativePath: string): string {
  const withoutPrefix = repoRelativePath
    .replace(/\\/g, '/')
    .replace(/^content\//, '')
    .replace(/\.md$/, '')
  const withoutIndex = withoutPrefix.replace(/(^|\/)index$/, '')
  return `/${withoutIndex}`.replace(/\/$/, '') || '/'
}

// Existing frontmatter can store redirect_from as a string or an array.
export function readRedirects(data: Record<string, unknown>): string[] {
  const raw = data.redirect_from
  if (!raw) return []
  const list = Array.isArray(raw) ? raw : [raw]
  return list.filter((entry): entry is string => typeof entry === 'string')
}

// redirect-orphans fails on trailing slashes, so normalize while preserving order.
export function mergeRedirects(...lists: string[][]): string[] {
  const seen = new Set<string>()
  const merged: string[] = []
  for (const entry of lists.flat()) {
    const normalized = entry.trim().replace(/\/+$/, '')
    if (!normalized || seen.has(normalized)) continue
    seen.add(normalized)
    merged.push(normalized)
  }
  return merged
}

// index.md identifies a directory, so match it by parent directory instead of basename.
export function successorKey(repoPath: string): { key: string; reason: string } {
  const basename = path.basename(repoPath)
  return basename === 'index.md'
    ? { key: `dir:${path.basename(path.dirname(repoPath))}`, reason: 'directory name' }
    : { key: `file:${basename}`, reason: 'file name' }
}

// A same-name successor is only a hint for a human to confirm, so never write it
// automatically. Require one match on both sides so two removed pages that share
// a basename cannot point at the same survivor.
export function findSuccessor(
  removedPath: string,
  currentPaths: string[],
  removedPaths: string[],
): { path: string; reason: string } | null {
  const { key, reason } = successorKey(removedPath)

  // Several removed pages with this key cannot claim one survivor.
  if (removedPaths.filter((p) => successorKey(p).key === key).length !== 1) return null

  const matches = currentPaths.filter((p) => successorKey(p).key === key)
  return matches.length === 1 ? { path: matches[0], reason } : null
}

// git ls-tree exits 0 with no output when a valid ref lacks the path, so an
// empty list means the first sync. A thrown error means the ref is unreadable;
// treating that as empty would drop every redirect in the tree.
function listFilesAtRef(repoRoot: string, ref: string, dirRelativeToRoot: string): string[] {
  let out: string
  try {
    out = execFileSync('git', ['ls-tree', '-r', '--name-only', ref, '--', dirRelativeToRoot], {
      encoding: 'utf8',
      cwd: repoRoot,
    })
  } catch (error) {
    throw new Error(
      `Could not read the baseline tree at ref '${ref}'. Refusing to continue, because ` +
        `treating an unreadable baseline as empty would silently drop every redirect ` +
        `under ${dirRelativeToRoot}.\n  ${(error as Error).message}`,
    )
  }
  return out
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.endsWith('.md'))
}

// Paths from listFilesAtRef at the same ref must be readable.
function readFileAtRef(repoRoot: string, ref: string, repoRelativePath: string): string {
  try {
    return execFileSync('git', ['show', `${ref}:${repoRelativePath}`], {
      encoding: 'utf8',
      cwd: repoRoot,
      maxBuffer: 20 * 1024 * 1024,
    })
  } catch (error) {
    throw new Error(
      `Could not read '${repoRelativePath}' at ref '${ref}', although it is listed there. ` +
        `Refusing to continue, because skipping it would silently drop its redirects.\n  ` +
        `${(error as Error).message}`,
    )
  }
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

type PreSyncPage = {
  url: string
  redirects: string[]
}

// Edit redirect_from as text because YAML round-trips rewrap long values such
// as intro and bury redirect changes in unrelated reflow noise. Place the block
// before contentType to match existing SDK docs frontmatter, or append it when
// contentType is absent.
export function upsertRedirectBlock(rawFrontmatter: string, redirects: string[]): string {
  const lines = rawFrontmatter.split('\n')
  const isListItem = (line: string | undefined) => line !== undefined && /^\s+-\s/.test(line)
  const kept: string[] = []

  // Drop any existing redirect_from, in block form or inline form.
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (/^redirect_from:\s*$/.test(line)) {
      // Preserve blank lines that belong to whatever follows the redirect_from block.
      let j = i + 1
      while (j < lines.length) {
        if (isListItem(lines[j])) {
          j++
          continue
        }
        if (lines[j].trim() === '') {
          let k = j
          while (k < lines.length && lines[k].trim() === '') k++
          if (isListItem(lines[k])) {
            j = k
            continue
          }
        }
        break
      }
      i = j - 1
      continue
    }

    if (/^redirect_from:\s*\S/.test(line)) continue
    kept.push(line)
  }

  if (redirects.length === 0) return kept.join('\n')

  const block = ['redirect_from:', ...redirects.map((url) => `  - ${url}`)]
  const contentTypeIndex = kept.findIndex((line) => /^contentType:/.test(line))
  const insertAt = contentTypeIndex === -1 ? kept.length : contentTypeIndex

  kept.splice(insertAt, 0, ...block)
  return kept.join('\n')
}

function writeRedirects(absolutePath: string, redirects: string[]): boolean {
  const raw = fs.readFileSync(absolutePath, 'utf8')
  const match = raw.match(/^(---\r?\n)([\s\S]*?)(\r?\n---\r?\n)([\s\S]*)$/)
  if (!match) {
    throw new Error(
      `Cannot add redirects to '${absolutePath}' because it has no frontmatter block. ` +
        `Refusing to continue, because skipping the write would silently drop the ` +
        `redirects meant for this page:\n  ${redirects.join('\n  ')}`,
    )
  }
  const [, open, frontmatterText, close, body] = match
  const updated = upsertRedirectBlock(frontmatterText, redirects)
  if (updated === frontmatterText) return false
  fs.writeFileSync(absolutePath, `${open}${updated}${close}${body}`, 'utf8')
  return true
}

function main() {
  const { values: args } = parseArgs({
    options: {
      'sdk-docs-dir': { type: 'string' },
      'git-ref': { type: 'string', default: 'HEAD' },
      'fail-on-unresolved': { type: 'boolean', default: false },
    },
  })

  const sdkDocsDirArg = args['sdk-docs-dir']
  if (!sdkDocsDirArg) {
    console.error('Missing required argument: --sdk-docs-dir')
    process.exit(1)
  }

  const resolvedArg = path.resolve(sdkDocsDirArg)
  if (!fs.existsSync(resolvedArg)) {
    console.error(`SDK docs directory not found: ${resolvedArg}`)
    process.exit(1)
  }

  const sdkDocsDir = fs.realpathSync(resolvedArg)
  const gitRef = args['git-ref'] as string
  const failOnUnresolved = args['fail-on-unresolved'] as boolean

  // Resolve from the docs directory and canonicalize symlinks such as macOS /var.
  const repoRoot = fs.realpathSync(
    path.resolve(
      execFileSync('git', ['rev-parse', '--show-toplevel'], {
        encoding: 'utf8',
        cwd: sdkDocsDir,
      }).trim(),
    ),
  )

  const sdkDirRelative = path.relative(repoRoot, sdkDocsDir).replace(/\\/g, '/')

  // Read the pre-sync state from git before looking at the rebuilt tree.
  const preSyncPaths = listFilesAtRef(repoRoot, gitRef, sdkDirRelative)
  const preSyncPages = new Map<string, PreSyncPage>()
  for (const repoPath of preSyncPaths) {
    const raw = readFileAtRef(repoRoot, gitRef, repoPath)
    let data: Record<string, unknown>
    try {
      data = matter(raw).data as Record<string, unknown>
    } catch (error) {
      throw new Error(
        `Could not parse the frontmatter of '${repoPath}' at ref '${gitRef}'. Refusing to ` +
          `continue, because treating it as empty would silently drop any redirects it ` +
          `carries.\n  ${(error as Error).message}`,
      )
    }
    preSyncPages.set(repoPath, {
      url: contentPathToUrl(repoPath),
      redirects: readRedirects(data),
    })
  }

  if (preSyncPaths.length === 0) {
    console.log(`No SDK docs exist at ${gitRef} yet — nothing to preserve.`)
    return
  }

  // Read the rebuilt working tree.
  const currentRepoPaths = getAllMarkdownFiles(sdkDocsDir).map((p) =>
    path.relative(repoRoot, p).replace(/\\/g, '/'),
  )
  const currentRepoPathSet = new Set(currentRepoPaths)
  const currentUrls = new Set(currentRepoPaths.map(contentPathToUrl))

  // guide.md and guide/index.md both serve .../guide, so map URLs to many paths.
  const currentPathsByUrl = new Map<string, string[]>()
  for (const repoPath of currentRepoPaths) {
    const url = contentPathToUrl(repoPath)
    currentPathsByUrl.set(url, [...(currentPathsByUrl.get(url) ?? []), repoPath])
  }

  // Key additions by the repo-relative path of the page receiving them.
  const additions = new Map<string, string[]>()
  const addFor = (repoPath: string, urls: string[]) => {
    additions.set(repoPath, mergeRedirects(additions.get(repoPath) ?? [], urls))
  }

  // Preserve redirects for pages that survived the sync at the same path.
  let preservedPages = 0
  for (const repoPath of currentRepoPaths) {
    const before = preSyncPages.get(repoPath)
    if (!before || before.redirects.length === 0) continue
    addFor(repoPath, before.redirects)
    preservedPages++
  }

  const allRemoved = [...preSyncPages.keys()].filter((p) => !currentRepoPathSet.has(p))

  // Transfer reshaped-page redirects by URL identity instead of guessing a successor.
  const needSuccessor: string[] = []
  let reshaped = 0
  for (const removedPath of allRemoved) {
    const before = preSyncPages.get(removedPath)!
    const servingPaths = currentPathsByUrl.get(before.url)
    if (!servingPaths) {
      needSuccessor.push(removedPath)
      continue
    }
    // Do not carry before.url over, because the serving file already owns that URL.
    if (before.redirects.length === 0) continue
    if (servingPaths.length > 1) {
      throw new Error(
        `The URL '${before.url}' is served by more than one file after the sync ` +
          `(${servingPaths.join(', ')}), so there is no single place to move the ` +
          `redirects that '${removedPath}' was carrying:\n  ${before.redirects.join('\n  ')}`,
      )
    }
    addFor(servingPaths[0], before.redirects)
    reshaped++
    console.log(`  RESHAPED: ${before.url} still served by ${servingPaths[0]}, redirects moved`)
  }

  // URL loss needs human review because render-changed-and-deleted-files only checks resolution.
  const unresolved: { repoPath: string; urls: string[]; candidate: string | null }[] = []
  for (const removedPath of needSuccessor) {
    const before = preSyncPages.get(removedPath)!
    const successor = findSuccessor(removedPath, currentRepoPaths, needSuccessor)
    unresolved.push({
      repoPath: removedPath,
      // Every carried redirect 404s too, because no other page owns it.
      urls: [before.url, ...before.redirects],
      candidate: successor ? contentPathToUrl(successor.path) : null,
    })
  }

  // Write the merged frontmatter back.
  let written = 0
  let addedEntries = 0
  for (const [repoPath, incoming] of additions) {
    const absolutePath = path.join(repoRoot, repoPath)
    if (!fs.existsSync(absolutePath)) {
      throw new Error(
        `Expected to add redirects to '${repoPath}', but it is not on disk. Refusing to ` +
          `continue, because skipping the write would silently drop these redirects:\n  ` +
          `${incoming.join('\n  ')}`,
      )
    }

    const existing = readRedirects(matter.read(absolutePath).data as Record<string, unknown>)
    const selfUrl = contentPathToUrl(repoPath)

    const merged = mergeRedirects(existing, incoming).filter((url) => {
      // A page must never redirect to itself.
      if (url === selfUrl) return false
      // redirect-orphans rejects live-page shadows; keep existing conflicts additive.
      if (currentUrls.has(url) && !existing.includes(url)) {
        console.log(`  SKIP (live page): ${url} would shadow an existing page`)
        return false
      }
      return true
    })

    if (merged.length === existing.length && merged.every((v, i) => v === existing[i])) continue

    if (writeRedirects(absolutePath, merged)) {
      addedEntries += merged.length - existing.length
      written++
    }
  }

  const lostUrlCount = unresolved.reduce((n, entry) => n + entry.urls.length, 0)

  console.log('\n--- Redirect preservation summary ---')
  console.log(`  Pages kept in place with redirects:   ${preservedPages}`)
  console.log(`  Pages reshaped but same URL:          ${reshaped}`)
  console.log(`  Files rewritten:                      ${written}`)
  console.log(`  Redirect entries added:               ${addedEntries}`)

  if (unresolved.length > 0) {
    console.log(
      `\n  Removed pages needing a redirect decision (${unresolved.length} pages, ${lostUrlCount} URLs):`,
    )
    for (const entry of unresolved) {
      console.log(`    was ${entry.repoPath}`)
      for (const url of entry.urls) console.log(`      ${url}`)
      if (entry.candidate) console.log(`      possible replacement: ${entry.candidate}`)
    }
    console.log(
      '\n  Add the URLs above to the `redirect_from` of whichever page replaced\n' +
        '  them, or confirm they were never published. Any "possible replacement"\n' +
        '  is a same-name match only and has not been verified.',
    )

    // Put unresolved redirects in the Actions summary because log output is easy to miss.
    if (process.env.GITHUB_STEP_SUMMARY) {
      const summary = [
        `### Copilot SDK docs sync: ${lostUrlCount} URLs need a redirect decision`,
        '',
        'These pages were removed upstream. The URLs below will 404 once this sync',
        'merges unless they are added to whichever page replaced them. Each entry lists',
        'the removed page followed by every URL that depended on it, including redirects',
        'it had inherited from earlier renames.',
        '',
        ...unresolved.flatMap((entry) => [
          `- \`${entry.repoPath}\``,
          ...entry.urls.map((url) => `  - \`${url}\``),
          ...(entry.candidate
            ? [`  - Possible replacement (same name only, **unverified**): \`${entry.candidate}\``]
            : []),
        ]),
        '',
        'To fix, add the URLs to the replacement page:',
        '',
        '```yaml',
        'redirect_from:',
        ...unresolved.flatMap((entry) => entry.urls.map((url) => `  - ${url}`)),
        '```',
        '',
        'A same-name match is only a suggestion. Redirecting to the wrong page is not',
        'caught by any test, so confirm each target before adding it.',
        '',
      ].join('\n')
      fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary, 'utf8')
    }

    if (failOnUnresolved) process.exit(1)
  }
}

// Keep helper exports unit-testable by running main only for direct execution.
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(import.meta.filename)) {
  try {
    main()
  } catch (error) {
    // Every thrown error marks a case where continuing would silently drop redirects.
    console.error(`\nRedirect preservation failed.\n\n${(error as Error).message}\n`)
    process.exit(1)
  }
}

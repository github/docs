#!/usr/bin/env node

/**
 * Preserves and generates `redirect_from` frontmatter for synced Copilot SDK docs.
 *
 * The sync workflow deletes the SDK content directory and rebuilds it from the
 * upstream repo on every run. Upstream markdown has no `redirect_from`, and the
 * normalizer builds frontmatter from scratch, so every redirect previously added
 * in docs-internal is silently dropped. Each sync since the May 2026 restructure
 * has needed a manual "restore redirects" commit to avoid shipping live 404s.
 *
 * This script runs after normalization and reconciles the rebuilt tree against
 * the pre-sync state recorded in git:
 *
 *   - Preserve: redirects on a page that still exists are merged back in.
 *   - Generate: when a page disappears (renamed or moved upstream), its URL —
 *     plus any redirects it had accumulated — are transferred to its successor,
 *     so redirect chains are never broken.
 *
 * The script only ever adds redirects. It never removes one, so a redirect added
 * by hand in docs-internal survives indefinitely.
 *
 * Usage:
 *   npx tsx preserve-redirects.ts --sdk-docs-dir <path> [--git-ref HEAD] [--fail-on-unresolved]
 */

import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { parseArgs } from 'node:util'
import matter from '@gr2m/gray-matter'

/**
 * Convert a repo-relative content path to the URL docs.github.com serves it at.
 *
 * `content/copilot/how-tos/copilot-sdk/features/mcp.md` -> `/copilot/how-tos/copilot-sdk/features/mcp`
 * `content/copilot/how-tos/copilot-sdk/auth/index.md`   -> `/copilot/how-tos/copilot-sdk/auth`
 */
export function contentPathToUrl(repoRelativePath: string): string {
  const withoutPrefix = repoRelativePath
    .replace(/\\/g, '/')
    .replace(/^content\//, '')
    .replace(/\.md$/, '')
  const withoutIndex = withoutPrefix.replace(/(^|\/)index$/, '')
  return `/${withoutIndex}`.replace(/\/$/, '') || '/'
}

/** Read `redirect_from` from a frontmatter blob, tolerating string or array form. */
export function readRedirects(data: Record<string, unknown>): string[] {
  const raw = data.redirect_from
  if (!raw) return []
  const list = Array.isArray(raw) ? raw : [raw]
  return list.filter((entry): entry is string => typeof entry === 'string')
}

/**
 * Merge redirect lists, preserving first-seen order and dropping duplicates and
 * trailing slashes. `redirect-orphans` fails the build on a trailing slash.
 */
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

/**
 * The key a page is matched on when looking for its successor.
 *
 * An `index.md` identifies a directory rather than a page, so matching it on
 * its basename would pair unrelated directories. Those match on the parent
 * directory name instead.
 */
export function successorKey(repoPath: string): { key: string; reason: string } {
  const basename = path.basename(repoPath)
  return basename === 'index.md'
    ? { key: `dir:${path.basename(path.dirname(repoPath))}`, reason: 'directory name' }
    : { key: `file:${basename}`, reason: 'file name' }
}

/**
 * Suggest a candidate successor for a page that no longer exists.
 *
 * Upstream restructures move files between directories but rarely rename the
 * file itself, so an unambiguous name match is a useful hint. It is only a
 * hint: matching names are not evidence that one page replaced another, so the
 * result is reported for a human to confirm and is never written automatically.
 *
 * The key must identify exactly one page on *both* sides. Requiring uniqueness
 * among `removedPaths` as well as `currentPaths` stops two removed pages that
 * share a basename from both being pointed at the same survivor.
 */
export function findSuccessor(
  removedPath: string,
  currentPaths: string[],
  removedPaths: string[],
): { path: string; reason: string } | null {
  const { key, reason } = successorKey(removedPath)

  // Ambiguous on the removed side: several pages disappeared under this name,
  // so no single one of them can claim the survivor.
  if (removedPaths.filter((p) => successorKey(p).key === key).length !== 1) return null

  const matches = currentPaths.filter((p) => successorKey(p).key === key)
  return matches.length === 1 ? { path: matches[0], reason } : null
}

/**
 * List the .md files present under a directory at a given git ref.
 *
 * `git ls-tree` exits 0 with no output when the ref is valid but the path is
 * absent, so an empty list genuinely means "nothing there yet" (the first sync).
 * A throw therefore means the ref itself could not be read, which must fail the
 * run rather than be mistaken for a first sync — silently treating a broken
 * baseline as empty would drop every redirect in the tree.
 */
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

/**
 * Read a file's contents at a given git ref.
 *
 * Callers only ask for paths that `listFilesAtRef` just reported at this same
 * ref, so a failure here is a real error, not a missing file.
 */
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

/** Recursively collect .md files from the working tree. */
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

/**
 * Insert or replace the `redirect_from` block in a raw frontmatter string.
 *
 * The block is edited as text rather than re-serialized from a parsed object.
 * Round-tripping through YAML rewraps long values — the `intro` field in
 * particular — which would bury the redirect change in unrelated reflow noise
 * on every sync. Editing the lines directly leaves every other byte untouched.
 *
 * The block is placed just before `contentType` to match how these files are
 * already written, falling back to the end of the frontmatter.
 */
export function upsertRedirectBlock(rawFrontmatter: string, redirects: string[]): string {
  const lines = rawFrontmatter.split('\n')
  const isListItem = (line: string | undefined) => line !== undefined && /^\s+-\s/.test(line)
  const kept: string[] = []

  // Drop any existing redirect_from, in block form or inline form.
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (/^redirect_from:\s*$/.test(line)) {
      // Consume the indented list that follows. A blank line is only part of
      // the block if another list item comes after it; otherwise it belongs to
      // whatever follows and must be preserved.
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

/**
 * Rewrite a file's `redirect_from` in place. Returns true if the file changed.
 */
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

  // Resolve the root from the docs directory so the script works against any
  // checkout, not just the process's current working directory. Both sides are
  // canonicalized so a symlinked path (macOS /var -> /private/var) still yields
  // a correct relative path.
  const repoRoot = fs.realpathSync(
    path.resolve(
      execFileSync('git', ['rev-parse', '--show-toplevel'], {
        encoding: 'utf8',
        cwd: sdkDocsDir,
      }).trim(),
    ),
  )

  const sdkDirRelative = path.relative(repoRoot, sdkDocsDir).replace(/\\/g, '/')

  // 1. Record the pre-sync state from git.
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

  // 2. Read the post-sync working tree.
  const currentRepoPaths = getAllMarkdownFiles(sdkDocsDir).map((p) =>
    path.relative(repoRoot, p).replace(/\\/g, '/'),
  )
  const currentRepoPathSet = new Set(currentRepoPaths)
  const currentUrls = new Set(currentRepoPaths.map(contentPathToUrl))

  // Several files can resolve to one URL (`guide.md` and `guide/index.md` both
  // serve `.../guide`), so the reverse mapping is one-to-many.
  const currentPathsByUrl = new Map<string, string[]>()
  for (const repoPath of currentRepoPaths) {
    const url = contentPathToUrl(repoPath)
    currentPathsByUrl.set(url, [...(currentPathsByUrl.get(url) ?? []), repoPath])
  }

  // Redirects to add, keyed by the repo-relative path of the page receiving them.
  const additions = new Map<string, string[]>()
  const addFor = (repoPath: string, urls: string[]) => {
    additions.set(repoPath, mergeRedirects(additions.get(repoPath) ?? [], urls))
  }

  // 3. Preserve redirects for pages that survived the sync at the same path.
  let preservedPages = 0
  for (const repoPath of currentRepoPaths) {
    const before = preSyncPages.get(repoPath)
    if (!before || before.redirects.length === 0) continue
    addFor(repoPath, before.redirects)
    preservedPages++
  }

  const allRemoved = [...preSyncPages.keys()].filter((p) => !currentRepoPathSet.has(p))

  // 4. A page can lose its file while keeping its URL, because `guide.md` and
  // `guide/index.md` serve the same URL. The URL itself stays live, so nothing
  // 404s and no successor guess is needed — but the redirects it inherited are
  // still stranded, since the file now serving that URL has never carried them.
  // Transfer those by URL identity rather than by inference.
  const needSuccessor: string[] = []
  let reshaped = 0
  for (const removedPath of allRemoved) {
    const before = preSyncPages.get(removedPath)!
    const servingPaths = currentPathsByUrl.get(before.url)
    if (!servingPaths) {
      needSuccessor.push(removedPath)
      continue
    }
    // `before.url` is deliberately not carried over: it is the URL these files
    // already serve, so adding it would create a self-redirect.
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

  // 5. Pages that lost their URL outright need a human decision.
  //
  // A same-named page elsewhere in the tree is reported as a candidate but is
  // never written. Matching names is not evidence of succession, and a redirect
  // aimed at the wrong live page is worse than a 404 because nothing catches
  // it: `render-changed-and-deleted-files` asserts the old URL resolves, but
  // never checks where it lands.
  const unresolved: { repoPath: string; urls: string[]; candidate: string | null }[] = []
  for (const removedPath of needSuccessor) {
    const before = preSyncPages.get(removedPath)!
    const successor = findSuccessor(removedPath, currentRepoPaths, needSuccessor)
    unresolved.push({
      repoPath: removedPath,
      // Every URL here 404s, not just the page's own: the redirects it carried
      // have no other home either.
      urls: [before.url, ...before.redirects],
      candidate: successor ? contentPathToUrl(successor.path) : null,
    })
  }

  // 6. Write the merged frontmatter back.
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
      // `redirect-orphans` fails if a live page's URL is another page's
      // redirect_from. Keep entries we already had so this stays additive, and
      // let that test flag any pre-existing conflict.
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

    // Surface this in the Actions run summary. Buried log output is how the
    // earlier 404s went unnoticed until they reached production.
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

// Only run when executed directly, so the helpers above stay unit-testable.
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(import.meta.filename)) {
  try {
    main()
  } catch (error) {
    // Every throw in this script marks a case where continuing would silently
    // drop redirects, so failing the sync is the intended outcome.
    console.error(`\nRedirect preservation failed.\n\n${(error as Error).message}\n`)
    process.exit(1)
  }
}

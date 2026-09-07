import fs from 'fs'
import path from 'path'
import { addError } from 'markdownlint-rule-helpers'

import { getFrontmatter } from '../helpers/utils'
import { contentTypesEnum } from '@/frame/lib/frontmatter'
import type { RuleParams, RuleErrorCallback } from '@/content-linter/types'

const RESPONSIBLE_USE_STRING = 'responsible-use'
const GETTING_STARTED_STRING = 'getting-started'

// Directory names that correspond to a known content type.
// This includes the canonical contentType values (minus the special-purpose
// ones: homepage, landing, rai, other) plus directory-name aliases:
//   - "responsible-use" → contentType "rai"
//   - "getting-started" → contentType "get-started" (some products use this variant)
const KNOWN_CONTENT_TYPE_DIRS = new Set([
  ...contentTypesEnum.filter((t) => !['homepage', 'landing', 'rai', 'other'].includes(t)),
  RESPONSIBLE_USE_STRING,
  GETTING_STARTED_STRING,
])

// Lazily computed set of product directories whose subdirectories all follow
// the content-type directory pattern.  Once computed the set is reused for
// every file processed in the same lint run.
let qualifyingProducts: Set<string> | null = null

/**
 * Scan `content/` and return the set of product directory names whose
 * **immediate** subdirectories are all in `KNOWN_CONTENT_TYPE_DIRS`.
 */
function getQualifyingProducts(): Set<string> {
  if (qualifyingProducts) return qualifyingProducts

  const contentDir = path.resolve(process.env.ROOT || '.', 'content')
  const products = new Set<string>()

  for (const entry of fs.readdirSync(contentDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    if (entry.name === 'early-access') continue

    const productPath = path.join(contentDir, entry.name)
    const subdirs = fs
      .readdirSync(productPath, { withFileTypes: true })
      .filter((e) => e.isDirectory())

    // Skip products with no subdirectories (e.g. flat products)
    if (subdirs.length === 0) continue

    // A product qualifies when ALL of its subdirectories are known
    // content-type directories.  Use .includes() for responsible-use so
    // that variations like "responsible-use-of-…" are recognised, matching
    // the logic in dirToContentType().
    const isKnownDir = (name: string) =>
      KNOWN_CONTENT_TYPE_DIRS.has(name) || name.includes(RESPONSIBLE_USE_STRING)
    if (subdirs.every((sub) => isKnownDir(sub.name))) {
      products.add(entry.name)
    }
  }

  qualifyingProducts = products
  return products
}

/** Map a directory name to its expected `contentType` value. */
function dirToContentType(dirName: string): string {
  if (dirName.includes(RESPONSIBLE_USE_STRING)) return 'rai'
  if (dirName === GETTING_STARTED_STRING) return 'get-started'
  if (contentTypesEnum.includes(dirName)) return dirName
  return 'other'
}

/**
 * Reset the cached qualifying-products set. Exported so that tests can
 * call it between test cases if the filesystem fixture changes.
 */
export function resetCache(): void {
  qualifyingProducts = null
}

export const frontmatterContentType = {
  names: ['GHD065', 'frontmatter-content-type'],
  description:
    'Content files in content-type directories must have a contentType frontmatter property that matches the parent directory.',
  tags: ['frontmatter', 'content-type'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    const filePath = params.name
    const contentDir = path.resolve(process.env.ROOT || '.', 'content')

    // Resolve the params.name relative to the content directory.
    // When markdownlint runs with `strings`, params.name is the key
    // (often a relative path like "content/copilot/how-tos/file.md").
    // When it runs with `files`, params.name is the real file path.
    // Resolve non-absolute paths against ROOT (not CWD) so the rule
    // works correctly when process.env.ROOT differs from the working directory.
    const rootDir = process.env.ROOT || '.'
    const resolved = path.isAbsolute(filePath) ? filePath : path.resolve(rootDir, filePath)
    const relativePath = path.relative(contentDir, resolved)

    // Skip files that aren't under content/
    if (relativePath.startsWith('..')) return

    const segments = relativePath.split(path.sep)
    // Need at least product/something (e.g. copilot/index.md)
    if (segments.length < 2) return

    const product = segments[0]
    if (!getQualifyingProducts().has(product)) return

    const fm = getFrontmatter(params.lines)
    if (!fm) return

    // Determine expected contentType
    let expectedType: string
    if (segments.length === 2 && segments[1] === 'index.md') {
      // Product-level index.md is always a landing page
      expectedType = 'landing'
    } else if (segments.length === 2) {
      // Non-index files directly under content/<product>/ are unusual
      // in qualifying products — skip them rather than requiring
      // contentType: other.
      return
    } else {
      expectedType = dirToContentType(segments[1])
    }

    // Find the best line number for the error.
    // Prefer the contentType line; fall back to the opening `---`.
    const contentTypeLine = params.lines.findIndex((line) =>
      line.trimStart().startsWith('contentType'),
    )
    const fmOpenLine = params.lines.indexOf('---')
    const errorLine =
      contentTypeLine !== -1 ? contentTypeLine + 1 : fmOpenLine !== -1 ? fmOpenLine + 1 : 1

    const fixHint = `Run \`npx tsx src/content-render/scripts/add-content-type.ts --paths ${product}\` to fix.`

    // Check: contentType must exist
    if (!fm.contentType) {
      addError(
        onError,
        errorLine,
        `Missing contentType frontmatter. Expected: "${expectedType}". ${fixHint}`,
        undefined,
        undefined,
        undefined,
      )
      return
    }

    // Check: contentType must match the directory-derived value
    if (fm.contentType !== expectedType) {
      addError(
        onError,
        errorLine,
        `contentType "${fm.contentType}" does not match expected "${expectedType}" based on directory. ${fixHint}`,
        undefined,
        undefined,
        undefined,
      )
    }
  },
}

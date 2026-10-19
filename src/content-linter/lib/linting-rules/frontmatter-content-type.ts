import fs from 'fs'
import path from 'path'
import { addError } from 'markdownlint-rule-helpers'

import { getFrontmatter } from '../helpers/utils'
import { contentTypesEnum } from '@/frame/lib/frontmatter'
import type { RuleParams, RuleErrorCallback } from '@/content-linter/types'

const RESPONSIBLE_USE_STRING = 'responsible-use'
const GETTING_STARTED_STRING = 'getting-started'

// Recognize canonical contentType values except homepage, landing, rai, and other.
// Aliases map responsible-use to rai and getting-started to get-started.
const KNOWN_CONTENT_TYPE_DIRS = new Set([
  ...contentTypesEnum.filter((t) => !['homepage', 'landing', 'rai', 'other'].includes(t)),
  RESPONSIBLE_USE_STRING,
  GETTING_STARTED_STRING,
])

// Products qualify when they have all of these, even if they also have other directories.
const REQUIRED_CONTENT_TYPE_DIRS = ['concepts', 'how-tos', 'reference', 'tutorials']

// responsible-use-of... variants resolve to rai, matching dirToContentType.
function isKnownDir(name: string): boolean {
  return KNOWN_CONTENT_TYPE_DIRS.has(name) || name.includes(RESPONSIBLE_USE_STRING)
}

// Cache qualifying products so every file in the lint run reuses the directory scan.
let qualifyingProducts: Set<string> | null = null

function getQualifyingProducts(): Set<string> {
  if (qualifyingProducts) return qualifyingProducts

  const contentDir = path.resolve(process.env.ROOT || '.', 'content')
  const products = new Set<string>()

  for (const entry of fs.readdirSync(contentDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    if (entry.name === 'early-access') continue

    const productPath = path.join(contentDir, entry.name)
    const subdirs = new Set(
      fs
        .readdirSync(productPath, { withFileTypes: true })
        .filter((e) => e.isDirectory())
        .map((e) => e.name),
    )

    if (REQUIRED_CONTENT_TYPE_DIRS.every((dir) => subdirs.has(dir))) {
      products.add(entry.name)
    }
  }

  qualifyingProducts = products
  return products
}

function dirToContentType(dirName: string): string {
  if (dirName.includes(RESPONSIBLE_USE_STRING)) return 'rai'
  if (dirName === GETTING_STARTED_STRING) return 'get-started'
  if (contentTypesEnum.includes(dirName)) return dirName
  return 'other'
}

// Tests reset the cache when filesystem fixtures change.
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

    // Resolve relative params.name against ROOT because strings mode passes content-relative keys.
    const rootDir = process.env.ROOT || '.'
    const resolved = path.isAbsolute(filePath) ? filePath : path.resolve(rootDir, filePath)
    const relativePath = path.relative(contentDir, resolved)

    if (relativePath.startsWith('..')) return

    const segments = relativePath.split(path.sep)
    if (segments.length < 2) return

    const product = segments[0]
    if (!getQualifyingProducts().has(product)) return

    const fm = getFrontmatter(params.lines)
    if (!fm) return

    let expectedType: string
    if (segments.length === 2 && segments[1] === 'index.md') {
      // Product index pages require contentType landing.
      expectedType = 'landing'
    } else if (segments.length === 2) {
      // Skip non-index files under a qualifying product instead of requiring contentType other.
      return
    } else if (!isKnownDir(segments[1])) {
      // Skip directories that are not content types instead of requiring contentType other.
      return
    } else {
      expectedType = dirToContentType(segments[1])
    }

    // Missing contentType has no source line, so report at the frontmatter start.
    const contentTypeLine = params.lines.findIndex((line) =>
      line.trimStart().startsWith('contentType'),
    )
    const fmOpenLine = params.lines.indexOf('---')
    const errorLine =
      contentTypeLine !== -1 ? contentTypeLine + 1 : fmOpenLine !== -1 ? fmOpenLine + 1 : 1

    // Scope the fix to this file because a product-wide run rewrites pages this rule skips.
    const fixPath = path.posix.join('content', ...segments)
    const fixHint = `Run \`npx tsx src/content-render/scripts/add-content-type.ts --paths ${fixPath}\` to fix.`

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

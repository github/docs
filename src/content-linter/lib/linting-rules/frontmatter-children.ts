import fs from 'fs'
import path from 'path'
import { addError } from 'markdownlint-rule-helpers'

import { getFrontmatter } from '../helpers/utils'
import type { RuleParams, RuleErrorCallback } from '@/content-linter/types'

interface Frontmatter {
  children?: string[]
  [key: string]: unknown
}

// Child paths such as /local-child resolve relative to the current file.
// Paths such as /content/actions/workflows resolve from the content root.
function isValidChildPath(childPath: string, currentFilePath: string): boolean {
  const ROOT = process.env.ROOT || '.'
  const contentDir = path.resolve(ROOT, 'content')

  let resolvedPath: string

  if (childPath.startsWith('/content/')) {
    const absoluteChildPath = childPath.slice('/content/'.length)
    resolvedPath = path.resolve(contentDir, absoluteChildPath)
  } else {
    const currentDir: string = path.dirname(currentFilePath)
    const normalizedPath = childPath.startsWith('/') ? childPath.substring(1) : childPath
    resolvedPath = path.resolve(currentDir, normalizedPath)
  }

  // Reject paths that resolve outside content to prevent traversal with ../.
  if (!resolvedPath.startsWith(contentDir + path.sep) && resolvedPath !== contentDir) {
    return false
  }

  const mdPath = `${resolvedPath}.md`
  if (fs.existsSync(mdPath) && fs.statSync(mdPath).isFile()) {
    return true
  }

  const indexPath = path.join(resolvedPath, 'index.md')
  if (fs.existsSync(indexPath) && fs.statSync(indexPath).isFile()) {
    return true
  }

  // Accept directories because they may contain nested children.
  if (fs.existsSync(resolvedPath) && fs.statSync(resolvedPath).isDirectory()) {
    return true
  }

  return false
}

export const frontmatterChildren = {
  names: ['GHD063', 'frontmatter-children'],
  description:
    'Children frontmatter paths must exist. Supports relative paths and absolute /content/ paths for cross-product inclusion.',
  tags: ['frontmatter', 'children'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    const fm = getFrontmatter(params.lines) as Frontmatter | null
    if (!fm || !fm.children) return

    const childrenLine: string | undefined = params.lines.find((line) =>
      line.startsWith('children:'),
    )

    if (!childrenLine) return

    const lineNumber: number = params.lines.indexOf(childrenLine) + 1

    if (Array.isArray(fm.children)) {
      const invalidPaths: string[] = []

      for (const child of fm.children) {
        if (!isValidChildPath(child, params.name)) {
          invalidPaths.push(child)
        }
      }

      if (invalidPaths.length > 0) {
        addError(
          onError,
          lineNumber,
          `Found invalid children paths: ${invalidPaths.join(', ')}. For cross-product paths, use /content/ prefix (e.g., /content/actions/workflows).`,
          childrenLine,
          [1, childrenLine.length],
          null,
        )
      }
    }
  },
}

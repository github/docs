import fs from 'fs'
import path from 'path'
import { addError } from 'markdownlint-rule-helpers'

import { getFrontmatter } from '../helpers/utils'
import type { RuleParams, RuleErrorCallback } from '@/content-linter/types'

interface Frontmatter {
  children?: string[]
  [key: string]: unknown
}

/**
 * Check if a child path is valid.
 * Supports both:
 * - Relative paths (e.g., /local-child) resolved from current directory
 * - Absolute /content/ paths (e.g., /content/actions/workflows) resolved from content root
 */
function isValidChildPath(childPath: string, currentFilePath: string): boolean {
  const ROOT = process.env.ROOT || '.'
  const contentDir = path.resolve(ROOT, 'content')

  let resolvedPath: string

  if (childPath.startsWith('/content/')) {
    // Absolute path from content root - strip /content/ prefix
    const absoluteChildPath = childPath.slice('/content/'.length)
    resolvedPath = path.resolve(contentDir, absoluteChildPath)
  } else {
    // Relative path from current file's directory
    const currentDir: string = path.dirname(currentFilePath)
    const normalizedPath = childPath.startsWith('/') ? childPath.substring(1) : childPath
    resolvedPath = path.resolve(currentDir, normalizedPath)
  }

  // Security check: ensure resolved path stays within content directory
  // This prevents path traversal attacks using sequences like '../'
  if (!resolvedPath.startsWith(contentDir + path.sep) && resolvedPath !== contentDir) {
    return false
  }

  // Check for direct .md file
  const mdPath = `${resolvedPath}.md`
  if (fs.existsSync(mdPath) && fs.statSync(mdPath).isFile()) {
    return true
  }

  // Check for index.md file in directory
  const indexPath = path.join(resolvedPath, 'index.md')
  if (fs.existsSync(indexPath) && fs.statSync(indexPath).isFile()) {
    return true
  }

  // Check if the path exists as a directory (may have children)
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

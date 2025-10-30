import fs from 'fs'
import path from 'path'
// @ts-ignore - markdownlint-rule-helpers doesn't provide TypeScript declarations
import { addError } from 'markdownlint-rule-helpers'

import { getFrontmatter } from '../helpers/utils'
import type { RuleParams, RuleErrorCallback } from '@/content-linter/types'

function isValidArticlePath(articlePath: string, currentFilePath: string): boolean {
  const ROOT = process.env.ROOT || '.'

  // Strategy 1: Always try as an absolute path from content root first
  const contentDir = path.join(ROOT, 'content')
  const normalizedPath = articlePath.startsWith('/') ? articlePath.substring(1) : articlePath

  // Check for direct .md file
  const absolutePath: string = path.join(contentDir, `${normalizedPath}.md`)
  if (fs.existsSync(absolutePath) && fs.statSync(absolutePath).isFile()) {
    return true
  }

  // Check for index.md file in directory (for landing pages)
  const indexPath: string = path.join(contentDir, normalizedPath, 'index.md')
  if (fs.existsSync(indexPath) && fs.statSync(indexPath).isFile()) {
    return true
  }

  // Strategy 2: Fall back to relative path from current file's directory
  const currentDir: string = path.dirname(currentFilePath)

  // Check for relative .md file
  const relativePath: string = path.join(currentDir, `${normalizedPath}.md`)
  try {
    if (fs.existsSync(relativePath) && fs.statSync(relativePath).isFile()) {
      return true
    }
  } catch {
    // Continue to next strategy
  }

  // Check for relative index.md file
  const relativeIndexPath: string = path.join(currentDir, normalizedPath, 'index.md')
  try {
    return fs.existsSync(relativeIndexPath) && fs.statSync(relativeIndexPath).isFile()
  } catch {
    return false
  }
}

export const frontmatterLandingRecommended = {
  names: ['GHD056', 'frontmatter-landing-recommended'],
  description:
    'Only landing pages can have recommended articles, there should be no duplicate recommended articles, and all recommended articles must exist',
  tags: ['frontmatter', 'landing', 'recommended'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    // Using any for frontmatter as it's a dynamic YAML object with varying properties
    const fm: any = getFrontmatter(params.lines)
    if (!fm || !fm.recommended) return

    const recommendedLine: string | undefined = params.lines.find((line) =>
      line.startsWith('recommended:'),
    )

    if (!recommendedLine) return

    const lineNumber: number = params.lines.indexOf(recommendedLine) + 1

    if (!fm.layout || !fm.layout.includes('landing')) {
      addError(
        onError,
        lineNumber,
        'recommended frontmatter key is only valid for landing pages',
        recommendedLine,
        [1, recommendedLine.length],
        null,
      )
    }

    // Check for duplicate recommended items and invalid paths
    if (Array.isArray(fm.recommended)) {
      const seen = new Set<string>()
      const duplicates: string[] = []
      const invalidPaths: string[] = []

      fm.recommended.forEach((item: string) => {
        if (seen.has(item)) {
          duplicates.push(item)
        } else {
          seen.add(item)
        }

        // Validate that the article path exists
        if (!isValidArticlePath(item, params.name)) {
          invalidPaths.push(item)
        }
      })

      if (duplicates.length > 0) {
        addError(
          onError,
          lineNumber,
          `Found duplicate recommended articles: ${duplicates.join(', ')}`,
          recommendedLine,
          [1, recommendedLine.length],
          null,
        )
      }

      if (invalidPaths.length > 0) {
        addError(
          onError,
          lineNumber,
          `Found invalid recommended article paths: ${invalidPaths.join(', ')}`,
          recommendedLine,
          [1, recommendedLine.length],
          null,
        )
      }
    }
  },
}

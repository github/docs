import fs from 'fs'
import path from 'path'
import { addError } from 'markdownlint-rule-helpers'

import { getFrontmatter } from '../helpers/utils'
import type { RuleParams, RuleErrorCallback } from '@/content-linter/types'

interface Frontmatter {
  carousels?: Record<string, string[]>
  layout?: string
  [key: string]: unknown
}

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

export const frontmatterLandingCarousels = {
  names: ['GHD056', 'frontmatter-landing-carousels'],
  description:
    'Only landing pages can have carousels, there should be no duplicate articles, and all articles must exist',
  tags: ['frontmatter', 'landing', 'carousels'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    // Using any for frontmatter as it's a dynamic YAML object with varying properties
    const fm = getFrontmatter(params.lines) as Frontmatter | null
    if (!fm) return

    const hasCarousels = fm.carousels && typeof fm.carousels === 'object'

    if (!hasCarousels) return

    const carouselsLine: string | undefined = params.lines.find((line) =>
      line.startsWith('carousels:'),
    )

    if (!carouselsLine) return

    const lineNumber: number = params.lines.indexOf(carouselsLine) + 1

    if (!fm.layout || !fm.layout.includes('landing')) {
      addError(
        onError,
        lineNumber,
        'carousels frontmatter key is only valid for landing pages',
        carouselsLine,
        [1, carouselsLine.length],
        null,
      )
    }

    // Check each carousel for duplicates and invalid paths
    for (const [carouselKey, articles] of Object.entries(fm.carousels!)) {
      if (!Array.isArray(articles)) continue

      const seen = new Set<string>()
      const duplicates: string[] = []
      const invalidPaths: string[] = []

      for (const item of articles) {
        if (seen.has(item)) {
          duplicates.push(item)
        } else {
          seen.add(item)
        }

        // Validate that the article path exists
        if (!isValidArticlePath(item, params.name)) {
          invalidPaths.push(item)
        }
      }

      if (duplicates.length > 0) {
        addError(
          onError,
          lineNumber,
          `Found duplicate articles in carousel '${carouselKey}': ${duplicates.join(', ')}`,
          carouselsLine,
          [1, carouselsLine.length],
          null,
        )
      }

      if (invalidPaths.length > 0) {
        addError(
          onError,
          lineNumber,
          `Found invalid article paths in carousel '${carouselKey}': ${invalidPaths.join(', ')}`,
          carouselsLine,
          [1, carouselsLine.length],
          null,
        )
      }
    }
  },
}

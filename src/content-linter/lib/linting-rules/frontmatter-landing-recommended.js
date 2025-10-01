import fs from 'fs'
import path from 'path'
import { addError } from 'markdownlint-rule-helpers'

import { getFrontmatter } from '../helpers/utils'

function isValidArticlePath(articlePath, currentFilePath) {
  // Article paths in recommended are relative to the current page's directory
  const relativePath = articlePath.startsWith('/') ? articlePath.substring(1) : articlePath
  const currentDir = path.dirname(currentFilePath)
  const fullPath = path.join(currentDir, `${relativePath}.md`)

  try {
    return fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()
  } catch {
    return false
  }
}

export const frontmatterLandingRecommended = {
  names: ['GHD056', 'frontmatter-landing-recommended'],
  description:
    'Only landing pages can have recommended articles, there should be no duplicate recommended articles, and all recommended articles must exist',
  tags: ['frontmatter', 'landing', 'recommended'],
  function: (params, onError) => {
    const fm = getFrontmatter(params.lines)
    if (!fm || !fm.recommended) return

    const recommendedLine = params.lines.find((line) => line.startsWith('recommended:'))

    if (!recommendedLine) return

    const lineNumber = params.lines.indexOf(recommendedLine) + 1

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
      const seen = new Set()
      const duplicates = []
      const invalidPaths = []

      fm.recommended.forEach((item) => {
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

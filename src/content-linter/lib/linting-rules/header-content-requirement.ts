// @ts-ignore - markdownlint-rule-helpers doesn't provide TypeScript declarations
import { addError, filterTokens } from 'markdownlint-rule-helpers'

import type { RuleParams, RuleErrorCallback, MarkdownToken } from '@/content-linter/types'

interface HeadingInfo {
  token: MarkdownToken
  lineNumber: number
  level: number
  line: string
}

export const headerContentRequirement = {
  names: ['GHD053', 'header-content-requirement'],
  description: 'Headers must have content between them, such as an introduction',
  tags: ['headers', 'structure', 'content'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    const headings: HeadingInfo[] = []

    // Collect all heading tokens with their line numbers and levels
    filterTokens(params, 'heading_open', (token: MarkdownToken) => {
      headings.push({
        token,
        lineNumber: token.lineNumber,
        level: parseInt(token.tag!.slice(1)), // Extract number from h1, h2, etc.
        line: params.lines[token.lineNumber - 1],
      })
    })

    // Check each pair of consecutive headings
    for (let i = 0; i < headings.length - 1; i++) {
      const currentHeading = headings[i]
      const nextHeading = headings[i + 1]

      // Only check if next heading is a subheading (higher level number)
      if (nextHeading.level > currentHeading.level) {
        const hasContent = checkForContentBetweenHeadings(
          params.lines,
          currentHeading.lineNumber,
          nextHeading.lineNumber,
        )

        if (!hasContent) {
          addError(
            onError,
            nextHeading.lineNumber,
            `Header must have introductory content before subheader. Add content between "${currentHeading.line.trim()}" and "${nextHeading.line.trim()}".`,
            nextHeading.line,
            null, // No specific range within the line
            null, // No fix possible - requires manual content addition
          )
        }
      }
    }
  },
}

/**
 * Check if there is meaningful content between two headings
 * Returns true if content exists, false if only whitespace/empty lines
 */
function checkForContentBetweenHeadings(
  lines: string[],
  startLineNumber: number,
  endLineNumber: number,
): boolean {
  // Convert to 0-based indexes and skip the heading lines themselves
  const startIndex = startLineNumber // Skip the current heading line
  const endIndex = endLineNumber - 2 // Stop before the next heading line

  // Check each line between the headings
  for (let i = startIndex; i <= endIndex; i++) {
    if (i >= lines.length) break

    const line = lines[i].trim()

    // Skip empty lines
    if (line === '') continue

    // Skip frontmatter delimiters
    if (line === '---') continue

    // Skip Liquid tags that don't produce visible content
    if (isNonContentLiquidTag(line)) continue

    // If we find any other content, consider it valid
    if (line.length > 0) {
      return true
    }
  }

  return false
}

/**
 * Check if a line contains only Liquid tags that don't produce visible content
 * This helps avoid false positives for conditional blocks
 */
function isNonContentLiquidTag(line: string): boolean {
  // Match common non-content Liquid tags
  const nonContentTags = [
    /^{%\s*ifversion\s+.*%}$/,
    /^{%\s*elsif\s+.*%}$/,
    /^{%\s*else\s*%}$/,
    /^{%\s*endif\s*%}$/,
    /^{%\s*if\s+.*%}$/,
    /^{%\s*unless\s+.*%}$/,
    /^{%\s*endunless\s*%}$/,
    /^{%\s*comment\s*%}$/,
    /^{%\s*endcomment\s*%}$/,
  ]

  return nonContentTags.some((pattern) => pattern.test(line))
}

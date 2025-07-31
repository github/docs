import { addError } from 'markdownlint-rule-helpers'
import { getFrontmatter } from '@/content-linter/lib/helpers/utils'

export const frontmatterVersionsWhitespace = {
  names: ['GHD051', 'frontmatter-versions-whitespace'],
  description: 'Versions frontmatter should not contain unnecessary whitespace',
  tags: ['frontmatter', 'versions'],
  function: (params, onError) => {
    const fm = getFrontmatter(params.lines)
    if (!fm || !fm.versions) return

    const versionsObj = fm.versions
    if (typeof versionsObj !== 'object') return

    // Find the frontmatter section in the file
    const fmStartIndex = params.lines.findIndex((line) => line.trim() === '---')
    if (fmStartIndex === -1) return

    // Check each version entry for whitespace issues
    Object.entries(versionsObj).forEach(([key, value]) => {
      if (typeof value !== 'string') return

      const hasUnwantedWhitespace = checkForUnwantedWhitespace(value)
      if (hasUnwantedWhitespace) {
        // Find the line containing this version key
        const versionLineIndex = params.lines.findIndex((line, index) => {
          return index > fmStartIndex && line.trim().startsWith(`${key}:`) && line.includes(value)
        })

        if (versionLineIndex !== -1) {
          const line = params.lines[versionLineIndex]
          const lineNumber = versionLineIndex + 1
          const cleanedValue = getCleanedValue(value)

          // Create fix info to remove unwanted whitespace
          const fixInfo = {
            editColumn: line.indexOf(value) + 1,
            deleteCount: value.length,
            insertText: cleanedValue,
          }

          addError(
            onError,
            lineNumber,
            `Versions frontmatter should not contain leading or trailing whitespace. Found: '${value}', expected: '${cleanedValue}'`,
            line,
            [line.indexOf(value) + 1, value.length],
            fixInfo,
          )
        }
      }
    })
  },
}

/**
 * Check if a version string has unwanted whitespace
 * Allows whitespace in complex expressions like '<3.6 >3.8'
 * but disallows leading/trailing whitespace
 */
function checkForUnwantedWhitespace(value) {
  // Don't flag if the value is just whitespace or empty
  if (!value || value.trim() === '') return false

  // Check for leading or trailing whitespace
  if (value !== value.trim()) return true

  // Allow whitespace around operators in complex expressions
  // This regex matches patterns like '<3.6 >3.8', '>=2.19', etc.
  const hasOperators = /[<>=]/.test(value)
  if (hasOperators) {
    // For operator expressions, we're more lenient about internal whitespace
    // Only flag if there's leading/trailing whitespace (already checked above)
    return false
  }

  // For simple version strings (like 'fpt', 'ghec'), no internal whitespace should be allowed
  // This catches cases like 'f pt' where there's whitespace in the middle
  return /\s/.test(value)
}

/**
 * Get the cleaned version of a value by removing appropriate whitespace
 */
function getCleanedValue(value) {
  // For values with operators, just trim leading/trailing whitespace
  const hasOperators = /[<>=]/.test(value)
  if (hasOperators) {
    return value.trim()
  }

  // For simple version strings, remove all whitespace
  return value.replace(/\s/g, '')
}

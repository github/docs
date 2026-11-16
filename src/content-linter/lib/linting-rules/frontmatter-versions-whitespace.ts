import { addError } from 'markdownlint-rule-helpers'
import { getFrontmatter } from '@/content-linter/lib/helpers/utils'
import type { RuleParams, RuleErrorCallback, Rule } from '@/content-linter/types'

interface Frontmatter {
  versions?: Record<string, string | string[]>
  [key: string]: unknown
}

export const frontmatterVersionsWhitespace: Rule = {
  names: ['GHD051', 'frontmatter-versions-whitespace'],
  description: 'Versions frontmatter should not contain unnecessary whitespace',
  tags: ['frontmatter', 'versions'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    const fm = getFrontmatter(params.lines) as Frontmatter | null
    if (!fm || !fm.versions) return

    const versionsObj = fm.versions
    if (typeof versionsObj !== 'object') return

    const fmStartIndex = params.lines.findIndex((line) => line.trim() === '---')
    if (fmStartIndex === -1) return

    for (const [key, value] of Object.entries(versionsObj)) {
      if (typeof value !== 'string') continue

      const hasUnwantedWhitespace = checkForUnwantedWhitespace(value)
      if (hasUnwantedWhitespace) {
        const versionLineIndex = params.lines.findIndex((line, index) => {
          return index > fmStartIndex && line.trim().startsWith(`${key}:`) && line.includes(value)
        })

        if (versionLineIndex !== -1) {
          const line = params.lines[versionLineIndex]
          const lineNumber = versionLineIndex + 1
          const cleanedValue = getCleanedValue(value)

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
    }
  },
}

// Complex ranges like '<3.6 >3.8' keep internal spaces.
// Empty or whitespace-only values pass unchanged, and no other value keeps edge spaces.
function checkForUnwantedWhitespace(value: string): boolean {
  if (!value || value.trim() === '') return false

  if (value !== value.trim()) return true

  // Operators <, >, and = make internal spacing meaningful.
  const hasOperators = /[<>=]/.test(value)
  if (hasOperators) {
    return false
  }

  // Simple version aliases cannot contain internal spaces such as f pt.
  return /\s/.test(value)
}

function getCleanedValue(value: string): string {
  // Range expressions keep internal operator spacing and trim only the ends.
  const hasOperators = /[<>=]/.test(value)
  if (hasOperators) {
    return value.trim()
  }

  return value.replace(/\s/g, '')
}

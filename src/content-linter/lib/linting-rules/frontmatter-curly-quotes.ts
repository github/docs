import { addError } from 'markdownlint-rule-helpers'

import { getFrontmatterLines } from '../helpers/utils'
import type { RuleParams, RuleErrorCallback, Rule } from '@/content-linter/types'

const CURLY_QUOTE_PATTERN = /[\u2018\u2019\u201c\u201d]/g
const CURLY_QUOTE_MAP: Record<string, string> = {
  '\u2018': "'",
  '\u2019': "'",
  '\u201c': '"',
  '\u201d': '"',
}

const CHECKED_FIELDS = ['title', 'intro']
const BLOCK_SCALAR_PATTERN = /^\s*[|>][-+1-9]*\s*(#.*)?$/

export const frontmatterCurlyQuotes: Rule = {
  names: ['GHD034', 'frontmatter-curly-quotes'],
  description: 'Frontmatter title and intro should not contain curly quotes',
  tags: ['frontmatter', 'format'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    const fmLines = getFrontmatterLines(params.lines)
    if (fmLines.length === 0) return

    const fmStart = params.lines.indexOf('---')

    const checkLine = (line: string, lineNumber: number, field: string) => {
      if (!CURLY_QUOTE_PATTERN.test(line)) return
      CURLY_QUOTE_PATTERN.lastIndex = 0

      const fixedLine = line.replace(CURLY_QUOTE_PATTERN, (ch) => CURLY_QUOTE_MAP[ch] || ch)

      addError(
        onError,
        lineNumber,
        `Curly quotes in '${field}' cause mojibake in plain-text contexts like llms.txt. Use straight quotes instead.`,
        line,
        [1, line.length],
        {
          lineNumber,
          editColumn: 1,
          deleteCount: line.length,
          insertText: fixedLine,
        },
      )
    }

    for (const field of CHECKED_FIELDS) {
      const idx = fmLines.findIndex((ln: string) => ln.trim().startsWith(`${field}:`))
      if (idx === -1) continue

      const line = fmLines[idx]
      checkLine(line, fmStart + idx + 1, field)

      const value = line.trim().slice(field.length + 1)
      if (!BLOCK_SCALAR_PATTERN.test(value)) continue

      // Block scalar text sits on the following lines, indented deeper than the key.
      const keyIndent = line.length - line.trimStart().length
      for (let j = idx + 1; j < fmLines.length - 1; j++) {
        const next = fmLines[j]
        if (next.trim() && next.length - next.trimStart().length <= keyIndent) break
        checkLine(next, fmStart + j + 1, field)
      }
    }
  },
}

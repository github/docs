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

export const frontmatterCurlyQuotes: Rule = {
  names: ['GHD034', 'frontmatter-curly-quotes'],
  description: 'Frontmatter title and intro should not contain curly quotes',
  tags: ['frontmatter', 'format'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    const fmLines = getFrontmatterLines(params.lines)
    if (fmLines.length === 0) return

    const fmStart = params.lines.indexOf('---')

    for (const field of CHECKED_FIELDS) {
      const idx = fmLines.findIndex((ln: string) => ln.trim().startsWith(`${field}:`))
      if (idx === -1) continue

      const line = fmLines[idx]
      if (!CURLY_QUOTE_PATTERN.test(line)) continue
      CURLY_QUOTE_PATTERN.lastIndex = 0

      const lineNumber = fmStart + idx + 1
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
  },
}

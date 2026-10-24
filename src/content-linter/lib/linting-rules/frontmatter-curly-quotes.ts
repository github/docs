import { isDeepStrictEqual } from 'node:util'
import { addError } from 'markdownlint-rule-helpers'
import { load } from 'js-yaml'

import { getFrontmatterLines } from '../helpers/utils'
import type { RuleParams, RuleErrorCallback, Rule } from '@/content-linter/types'

const CURLY_QUOTE_PATTERN = /[\u2018\u2019\u201c\u201d]/g

const CHECKED_FIELDS = ['title', 'intro']
const BLOCK_SCALAR_PATTERN = /^\s*[|>][-+1-9]*\s*(#.*)?$/

function toStraight(text: string, single: string, double: string): string {
  return text.replace(CURLY_QUOTE_PATTERN, (ch) =>
    ch === '\u2018' || ch === '\u2019' ? single : double,
  )
}

// The replacement must respect the YAML quote style, or a bare quote can end the string early.
function getFixedLine(fmLines: string[], idx: number, field: string): string | undefined {
  const line = fmLines[idx]
  const match = line.match(new RegExp(`^(\\s*${field}:\\s*)(.*)$`))
  if (!match) return undefined
  const [, prefix, value] = match

  let fixedValue: string
  if (value.startsWith("'")) {
    fixedValue = toStraight(value, "''", '"')
  } else if (value.startsWith('"')) {
    fixedValue = toStraight(value, "'", '\\"')
  } else {
    fixedValue = toStraight(value, "'", '"')
    if (fixedValue.startsWith("'") || fixedValue.startsWith('"')) {
      fixedValue = `'${fixedValue.replace(/'/g, "''")}'`
    }
  }
  const fixedLine = prefix + fixedValue

  // Parse the whole frontmatter because a value can continue onto the next lines.
  const fixedLines = [...fmLines]
  fixedLines[idx] = fixedLine
  try {
    const original = load(fmLines.slice(1, -1).join('\n')) as Record<string, unknown>
    const fixed = load(fixedLines.slice(1, -1).join('\n'))
    const originalValue = original[field]
    if (typeof originalValue !== 'string') return undefined
    const expected = { ...original, [field]: toStraight(originalValue, "'", '"') }
    if (!isDeepStrictEqual(fixed, expected)) return undefined
  } catch {
    return undefined
  }
  return fixedLine
}

export const frontmatterCurlyQuotes: Rule = {
  names: ['GHD034', 'frontmatter-curly-quotes'],
  description: 'Frontmatter title and intro should not contain curly quotes',
  tags: ['frontmatter', 'format'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    const fmLines = getFrontmatterLines(params.lines)
    if (fmLines.length === 0) return

    const fmStart = params.lines.indexOf('---')

    const checkLine = (
      line: string,
      lineNumber: number,
      field: string,
      getFix: () => string | undefined,
    ) => {
      if (!CURLY_QUOTE_PATTERN.test(line)) return
      CURLY_QUOTE_PATTERN.lastIndex = 0

      const fixedLine = getFix()

      addError(
        onError,
        lineNumber,
        `Curly quotes in '${field}' cause mojibake in plain-text contexts like llms.txt. Use straight quotes instead.`,
        line,
        [1, line.length],
        fixedLine === undefined
          ? undefined
          : {
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
      checkLine(line, fmStart + idx + 1, field, () => getFixedLine(fmLines, idx, field))

      const value = line.trim().slice(field.length + 1)
      if (!BLOCK_SCALAR_PATTERN.test(value)) continue

      // Block scalar text sits on the following lines, indented deeper than the key.
      const keyIndent = line.length - line.trimStart().length
      for (let j = idx + 1; j < fmLines.length - 1; j++) {
        const next = fmLines[j]
        if (next.trim() && next.length - next.trimStart().length <= keyIndent) break
        // Block scalar text is literal, so straight quotes need no YAML escaping.
        checkLine(next, fmStart + j + 1, field, () => toStraight(next, "'", '"'))
      }
    }
  },
}

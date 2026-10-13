import { addError } from 'markdownlint-rule-helpers'

import type { RuleParams, RuleErrorCallback, Rule } from '@/content-linter/types'

const delimiterRegexPure = /(\s)*(:)?(-+)(:)?(\s)*(\|)/
const delimiterRegex = /(\s)*(:)?(-+)(:)?(\s)*(\|).*({%.*(ifversion|else|endif).*%})/
const liquidRegex = /^{%-?\s*(ifversion|else|endif).*-?%}/
const liquidAfterRowRegex = /(\|{1}).*(\|{1}).*{%\s*(ifversion|else|endif).*%}$/

export const tableLiquidVersioning: Rule = {
  names: ['GHD040', 'table-liquid-versioning'],
  description: 'Tables must use the correct liquid versioning format',
  severity: 'error',
  tags: ['tables'],

  function: function GHD040(params: RuleParams, onError: RuleErrorCallback) {
    const lines = params.lines
    let inTable = false
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]

      if (inTable && (!line || isPreviousLineIndented(lines[i], lines[i - 1]))) {
        inTable = false
        continue
      }

      if (delimiterRegexPure.test(line)) {
        // A table needs a header, delimiter, and body row.
        if (lines[i - 1] && lines[i + 1]) {
          inTable = true
          if (liquidAfterRowRegex.test(lines[i - 1])) {
            addError(
              onError,
              i,
              'Liquid conditionals that version rows of data should be placed on their own line in the format `| {% ifversion enterprise %} |`.',
              lines[i - 1],
              null,
            )
          }
          if (delimiterRegex.test(line)) {
            addError(
              onError,
              i + 1,
              'Liquid conditionals that version rows of data should be placed on their own line in the format `| {% ifversion enterprise %} |`.',
              line,
              null,
            )
          }
          continue
        }
      }
      if (inTable) {
        if (liquidRegex.test(line)) {
          addError(
            onError,
            i + 1,
            'Liquid conditionals that version rows of data should be placed on their own line in the format `| {% ifversion enterprise %} |`. If the conditional is on its own line but is not related to the table, ensure there is one new line beween a Liquid version tag and the table.',
            line,
            null,
          )
        }
        if (liquidAfterRowRegex.test(line)) {
          addError(
            onError,
            i + 1,
            'Liquid conditionals that version rows of data should be placed on their own line in the format `| {% ifversion enterprise %} |`.',
            line,
            null,
          )
        }
      }
    }
  },
}

function isPreviousLineIndented(line: string, previousLine: string): boolean {
  if (!line || !previousLine) return false
  const numWhitespaceLine = line.length - line.trimLeft().length
  const numWhitespacePrevLine = previousLine.length - previousLine.trimLeft().length
  return numWhitespaceLine < numWhitespacePrevLine
}

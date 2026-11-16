import { TokenKind } from 'liquidjs'
import type { TagToken } from 'liquidjs'
import { addError } from 'markdownlint-rule-helpers'

import { getLiquidTokens, conditionalTags, getPositionData } from '../helpers/liquid-utils'
import { isStringQuoted } from '../helpers/utils'
import type { RuleParams, RuleErrorCallback, Rule } from '../../types'

// Quoted Liquid conditional arguments always evaluate to true; comparison operands can stay quoted.

const comparisonOperators = new Set(['==', '!=', '<>', '<', '>', '<=', '>=', 'contains'])

function isQuotedConditionalArg(args: string[], index: number): boolean {
  if (!isStringQuoted(args[index])) return false
  // A quoted string is valid as an operand of a comparison operator.
  const prev = index > 0 ? args[index - 1] : ''
  const next = index < args.length - 1 ? args[index + 1] : ''
  return !comparisonOperators.has(prev) && !comparisonOperators.has(next)
}

export const liquidQuotedConditionalArg: Rule = {
  names: ['GHD016', 'liquid-quoted-conditional-arg'],
  description: 'Liquid conditional tags should not quote the conditional argument',
  tags: ['liquid', 'format'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    const content = params.lines.join('\n')
    const tokens = getLiquidTokens(content)
      .filter((token): token is TagToken => token.kind === TokenKind.Tag)
      .filter((token) => conditionalTags.includes(token.name))
      .filter((token) => {
        const args = token.args.split(/\s+/g)
        return args.some((_, index) => isQuotedConditionalArg(args, index))
      })

    if (!tokens.length) return

    for (const token of tokens) {
      const lines = params.lines
      const { lineNumber, column, length } = getPositionData(token, lines)
      // lineNumber starts at 1, but lines indexes from 0.
      const line = lines[lineNumber - 1].slice(column - 1, column - 1 + length)
      // Splitting on a capture group keeps the whitespace at odd indexes so the args rejoin unchanged.
      const parts = token.args.split(/(\s+)/)
      const args = parts.filter((_, index) => index % 2 === 0)
      const replaceWith = parts
        .map((part, index) =>
          index % 2 === 0 && isQuotedConditionalArg(args, index / 2)
            ? part.replace(/^['"](.*)['"]([?!]?)$/, '$1$2')
            : part,
        )
        .join('')
      const replaceString = line.replace(token.args, () => replaceWith)

      addError(
        onError,
        lineNumber,
        "A conditional Liquid tag's argument is quoted, meaning it will always evaluate to true. Remove the quotes to allow Liquid to evaluate the variable.",
        token.content,
        [column, length],
        {
          lineNumber,
          editColumn: column,
          deleteCount: length,
          insertText: replaceString,
        },
      )
    }
  },
}

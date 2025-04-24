import { TokenKind } from 'liquidjs'
import { addError } from 'markdownlint-rule-helpers'

import { getLiquidTokens, conditionalTags, getPositionData } from '../helpers/liquid-utils.js'
import { isStringQuoted } from '../helpers/utils.js'

/*
  Checks for instances where a Liquid conditional tag's argument is
   quoted because it will always evaluate to true.

  For example, the following would be flagged:
  {% if "foo" %}
  {% ifversion "bar" %}
*/
export const liquidQuotedConditionalArg = {
  names: ['GHD016', 'liquid-quoted-conditional-arg'],
  description: 'Liquid conditional tags should not quote the conditional argument',
  tags: ['liquid', 'format'],
  function: (params, onError) => {
    const content = params.lines.join('\n')
    const tokens = getLiquidTokens(content)
      .filter((token) => token.kind === TokenKind.Tag)
      .filter((token) => conditionalTags.includes(token.name))
      .filter((token) => {
        const tokensArray = token.args.split(/\s+/g)
        if (tokensArray.some((arg) => isStringQuoted(arg))) return true
        return false
      })

    if (!tokens.length) return

    for (const token of tokens) {
      const lines = params.lines
      const { lineNumber, column, length } = getPositionData(token, lines)
      // LineNumber starts at 1, but lines is 0-based
      const line = lines[lineNumber - 1].slice(column - 1, column + length)
      // Trim the first and last character off of the token args
      const replaceWith = token.args.slice(1, token.args.length - 1)
      const replaceString = line.replace(token.args, replaceWith)

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

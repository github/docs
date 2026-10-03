import { TokenKind } from 'liquidjs'
import type { TopLevelToken } from 'liquidjs'

import { getLiquidTokens, getPositionData } from '../helpers/liquid-utils'
import { addFixErrorDetail } from '../helpers/utils'
import type { RuleParams, RuleErrorCallback, Rule } from '../../types'

interface LiquidToken {
  kind: number
  content: string
  contentRange: [number, number]
  begin: number
  end: number
}

// Liquid tag delimiters and arguments each need one separating space.

export const liquidTagWhitespace: Rule = {
  names: ['GHD042', 'liquid-tag-whitespace'],
  description:
    'Liquid tags should start and end with one whitespace. Liquid tag arguments should be separated by only one whitespace.',
  tags: ['liquid', 'format'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    const content = params.lines.join('\n')
    const tokens = (getLiquidTokens(content) as LiquidToken[]).filter(
      (token: LiquidToken) => token.kind === TokenKind.Tag,
    )
    for (const token of tokens) {
      const { lineNumber, column, length } = getPositionData(
        token as unknown as TopLevelToken,
        params.lines,
      )

      const range = [column, length]
      const tag = params.lines[lineNumber - 1].slice(column - 1, column - 1 + length)

      // openTag and closeTag preserve whitespace around the tag name and arguments.
      const openTag = tag.slice(0, token.contentRange[0] - token.begin)
      const closeTag = tag.slice(-(token.end - token.contentRange[1]))

      const isOpenTagOneSpace = openTag !== `${openTag.trim()} `
      const isCloseTagOneSpace = closeTag !== ` ${closeTag.trim()}`

      const moreThanOneSpace = /\s{2,}/
      const isArgOneSpace = moreThanOneSpace.test(tag)

      const fixedContent = `${openTag.trim()} ${token.content.replace(moreThanOneSpace, ' ')} ${closeTag.trim()}`

      if (isOpenTagOneSpace || isCloseTagOneSpace || isArgOneSpace) {
        addFixErrorDetail(
          onError,
          lineNumber,
          fixedContent,
          params.lines[lineNumber - 1].slice(column - 1, column - 1 + length),
          range,
          {
            lineNumber,
            editColumn: column,
            deleteCount: length,
            insertText: fixedContent,
          },
        )
      }
    }
  },
}

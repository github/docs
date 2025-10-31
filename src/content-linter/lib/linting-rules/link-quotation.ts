// @ts-ignore - markdownlint-rule-helpers doesn't have TypeScript declarations
import { addError, filterTokens } from 'markdownlint-rule-helpers'
import { getRange, quotePrecedesLinkOpen } from '../helpers/utils'
import { escapeRegExp } from 'lodash-es'
import type { RuleParams, RuleErrorCallback, MarkdownToken, Rule } from '../../types'

export const linkQuotation: Rule = {
  names: ['GHD043', 'link-quotation'],
  description: 'Internal link titles must not be surrounded by quotations',
  tags: ['links', 'url'],
  parser: 'markdownit',
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    filterTokens(params, 'inline', (token: MarkdownToken) => {
      const { children } = token
      if (!children) return
      let previous_child: MarkdownToken = children[0]
      let inLinkWithPrecedingQuotes = false
      let linkUrl = ''
      let content: string[] = []
      for (let i = 1; i < children.length; i++) {
        const child = children[i]
        if (child.type === 'link_open' && quotePrecedesLinkOpen(previous_child.content || '')) {
          if (!child.attrs) continue
          inLinkWithPrecedingQuotes = true
          linkUrl = escapeRegExp(child.attrs[0][1])
        } else if (inLinkWithPrecedingQuotes && child.type === 'text') {
          content.push(escapeRegExp((child.content || '').trim()))
        } else if (inLinkWithPrecedingQuotes && child.type === 'code_inline') {
          content.push(`\`${escapeRegExp((child.content || '').trim())}\``)
        } else if (child.type === 'link_close') {
          const title = content.join(' ')
          const regex = new RegExp(`"\\[${title}\\]\\(${linkUrl}\\)({%.*%})?(!|\\.|\\?|,)?"`)
          if (regex.test(child.line)) {
            const matchResult = child.line.match(regex)
            if (!matchResult) continue
            const match = matchResult[0]
            const range = getRange(child.line, match)
            if (!range) continue
            let newLine = match
            if (newLine.startsWith('"')) {
              newLine = newLine.slice(1)
            }
            if (newLine.endsWith('"')) {
              newLine = newLine.slice(0, -1)
            }
            if (newLine.endsWith('".')) {
              newLine = `${newLine.slice(0, -2)}.`
            }
            const lineNumber = child.lineNumber
            addError(
              onError,
              lineNumber,
              'Remove quotes surrounding the link title.',
              match,
              range,
              {
                lineNumber,
                editColumn: range[0],
                deleteCount: range[1],
                insertText: newLine,
              },
            )
          }
          inLinkWithPrecedingQuotes = false
          content = []
          linkUrl = ''
        }
        previous_child = child
      }
    })
  },
}

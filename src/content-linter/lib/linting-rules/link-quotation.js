import { addError, filterTokens } from 'markdownlint-rule-helpers'
import { getRange, quotePrecedesLinkOpen } from '../helpers/utils.js'
import { escapeRegExp } from 'lodash-es'

export const linkQuotation = {
  names: ['GHD043', 'link-quotation'],
  description: 'Internal link titles must not be surrounded by quotations',
  tags: ['links', 'url'],
  parser: 'markdownit',
  function: (params, onError) => {
    filterTokens(params, 'inline', (token) => {
      const { children } = token
      let previous_child = children[0]
      let inLinkWithPrecedingQuotes = false
      let linkUrl = ''
      let content = []
      let line = ''
      for (let i = 1; i < children.length; i++) {
        const child = children[i]
        if (child.type === 'link_open' && quotePrecedesLinkOpen(previous_child.content)) {
          inLinkWithPrecedingQuotes = true
          linkUrl = escapeRegExp(child.attrs[0][1])
          line = child.line
        } else if (inLinkWithPrecedingQuotes && child.type === 'text') {
          content.push(escapeRegExp(child.content.trim()))
        } else if (inLinkWithPrecedingQuotes && child.type === 'code_inline') {
          content.push('`' + escapeRegExp(child.content.trim()) + '`')
        } else if (child.type === 'link_close') {
          const title = content.join(' ')
          const regex = new RegExp(`"\\[${title}\\]\\(${linkUrl}\\)({%.*%})?(!|\\.|\\?|,)?"`)
          if (regex.test(child.line)) {
            const match = child.line.match(regex)[0]
            const range = getRange(child.line, match)
            let newLine = match
            if (newLine.startsWith('"')) {
              newLine = newLine.slice(1)
            }
            if (newLine.endsWith('"')) {
              newLine = newLine.slice(0, -1)
            }
            if (newLine.endsWith('".')) {
              newLine = newLine.slice(0, -2) + '.'
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
          line = ''
          linkUrl = ''
        }
        previous_child = child
      }
    })
  },
}

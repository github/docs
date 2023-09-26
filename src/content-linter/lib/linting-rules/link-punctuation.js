import { filterTokens, addError } from 'markdownlint-rule-helpers'

import { getRange, isStringQuoted, doesStringEndWithPeriod } from '../helpers/utils.js'

export const linkPunctuation = {
  names: ['GHD008', 'link-punctuation'],
  description: 'Internal link titles must not contain punctuation',
  tags: ['links', 'url'],
  information: new URL('https://github.com/github/docs/blob/main/src/content-linter/README.md'),
  function: function GHD008(params, onError) {
    filterTokens(params, 'inline', (token) => {
      const { children, line } = token
      let inLink = false
      for (const child of children) {
        if (child.type === 'link_open') {
          inLink = true
        } else if (child.type === 'link_close') {
          inLink = false
        } else if (inLink && child.type === 'text') {
          const content = child.content.trim()
          const hasPeriod = doesStringEndWithPeriod(content)
          const hasQuotes = isStringQuoted(content)

          if (hasPeriod || hasQuotes) {
            const range = getRange(line, content)
            addError(
              onError,
              child.lineNumber,
              'Remove quotes and/or period punctuation from the link title.',
              child.content,
              range,
              null, // No fix possible
            )
          }
        }
      }
    })
  },
}

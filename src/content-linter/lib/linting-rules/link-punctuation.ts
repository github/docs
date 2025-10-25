// @ts-ignore - markdownlint-rule-helpers doesn't have TypeScript declarations
import { addError, filterTokens } from 'markdownlint-rule-helpers'
import type { RuleParams, RuleErrorCallback, Rule } from '../../types'

import { doesStringEndWithPeriod, getRange, isStringQuoted } from '../helpers/utils'

export const linkPunctuation: Rule = {
  names: ['GHD001', 'link-punctuation'],
  description: 'Internal link titles must not contain punctuation',
  tags: ['links', 'url'],
  parser: 'markdownit',
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    // Using 'any' type for token as markdownlint-rule-helpers doesn't provide TypeScript types
    filterTokens(params, 'inline', (token: any) => {
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

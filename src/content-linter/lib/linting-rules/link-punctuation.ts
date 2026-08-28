import { addError, filterTokens } from 'markdownlint-rule-helpers'
import type { RuleParams, RuleErrorCallback, Rule } from '../../types'

import { doesStringEndWithPeriod, getRange, isStringQuoted } from '../helpers/utils'

// Minimal type for markdownit tokens used in this rule
interface MarkdownToken {
  children?: MarkdownToken[]
  line?: string
  type?: string
  content?: string
  lineNumber?: number
}

export const linkPunctuation: Rule = {
  names: ['GHD001', 'link-punctuation'],
  description: 'Internal link titles must not contain punctuation',
  tags: ['links', 'url'],
  parser: 'markdownit',
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    filterTokens(params, 'inline', (token: MarkdownToken) => {
      const { children, line } = token
      let inLink = false
      for (const child of children || []) {
        if (child.type === 'link_open') {
          inLink = true
        } else if (child.type === 'link_close') {
          inLink = false
        } else if (inLink && child.type === 'text' && child.content) {
          const content = child.content.trim()
          const hasPeriod = doesStringEndWithPeriod(content)
          const hasQuotes = isStringQuoted(content)

          if (hasPeriod || hasQuotes) {
            const range = line ? getRange(line, content) : []
            addError(
              onError,
              child.lineNumber || 1,
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

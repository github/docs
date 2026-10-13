import { addError, newLineRe } from 'markdownlint-rule-helpers'

import type { RuleParams, RuleErrorCallback, MarkdownToken, Rule } from '@/content-linter/types'

// Expired ranges wrap content in matching HTML comments:
// This content <!-- expires yyyy-mm-dd --> expires <!-- end expires yyyy-mm-dd --> here.
// The closing comment identifies the content to remove with the expired range.
export const expiredContent: Rule = {
  names: ['GHD038', 'expired-content'],
  description: 'Expired content must be remediated.',
  tags: ['expired'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    const tokensToCheck = (params.tokens || []).filter(
      (token: MarkdownToken) => token.type === 'inline' || token.type === 'html_block',
    )

    for (const token of tokensToCheck) {
      const match = token.content?.match(/<!--\s*expires\s(\d\d\d\d)-(\d\d)-(\d\d)\s*-->/)
      if (!match || !token.content) continue

      const expireDate = new Date(match.splice(1, 3).join(' '))
      const today = new Date()
      if (today < expireDate) continue

      // Markdownlint reports inline token content by line, so range calculations follow that split.
      const contentByLine = token.content.replace(/^\uFEFF/, '').split(newLineRe)
      const lineOfMatch = contentByLine.findIndex((element) => element.includes(match[0]))
      const startRange = lineOfMatch !== -1 ? contentByLine[lineOfMatch].indexOf(match[0]) + 1 : 1
      const lineNumber = lineOfMatch !== -1 ? token.lineNumber + lineOfMatch : token.lineNumber
      addError(
        onError,
        lineNumber,
        `Content marked with an expiration date has now expired. The content exists between 2 HTML comment tags in the format <!-- expires yyyy-mm-dd --> and <!-- end expires yyyy-mm-dd -->. You should remove or rewrite this content, and delete the expiration comments. Alternatively, choose a new expiration date.`,
        match[0],
        [startRange, match[0].length],
        null, // No fix possible
      )
    }
  },
}

export const DAYS_TO_WARN_BEFORE_EXPIRED = 14

// Expiring-soon checks the same expires range once the date falls in the warning window.
export const expiringSoon: Rule = {
  names: ['GHD039', 'expiring-soon'],
  description: 'Content that expires soon should be proactively addressed.',
  tags: ['expired'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    const tokensToCheck = (params.tokens || []).filter(
      (token: MarkdownToken) => token.type === 'inline' || token.type === 'html_block',
    )

    for (const token of tokensToCheck) {
      const match = token.content?.match(/<!--\s*expires\s(\d\d\d\d)-(\d\d)-(\d\d)\s*-->/)
      if (!match || !token.content) continue

      const expireDate = new Date(match.splice(1, 3).join(' '))
      const today = new Date()
      const futureDate = new Date()
      futureDate.setDate(today.getDate() + DAYS_TO_WARN_BEFORE_EXPIRED)
      // Skip content that already expired or expires after the warning window.
      if (today > expireDate || expireDate > futureDate) continue

      addError(
        onError,
        token.lineNumber,
        `Content marked with an expiration date will expire soon. The content exists between 2 HTML comment tags in the format <!-- expires yyyy-mm-dd --> and <!-- end expires yyyy-mm-dd -->. Check whether this content can be removed or rewritten before it expires.`,
        match[0],
        [token.content.indexOf(match[0]) + 1, match[0].length],
        null, // No fix possible
      )
    }
  },
}

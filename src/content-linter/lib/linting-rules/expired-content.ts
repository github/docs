import { addError, newLineRe } from 'markdownlint-rule-helpers'

import type { RuleParams, RuleErrorCallback, MarkdownToken, Rule } from '@/content-linter/types'

interface ExpiresTag {
  text: string
  expireDate: Date
  lineNumber: number
  column: number
}

// Markdownlint validates ranges against the reported line, so each tag gets its own line and column.
function findExpiresTags(tokens: MarkdownToken[] = []): ExpiresTag[] {
  const tags: ExpiresTag[] = []
  for (const token of tokens) {
    if (token.type !== 'inline' && token.type !== 'html_block') continue
    const content = (token.content || '').replace(/^\uFEFF/, '')
    for (const match of content.matchAll(/<!--\s*expires\s(\d\d\d\d)-(\d\d)-(\d\d)\s*-->/g)) {
      const linesBefore = content.slice(0, match.index).split(newLineRe)
      tags.push({
        // Markdownlint rejects a range that runs past the end of the reported line.
        text: match[0].split(newLineRe)[0],
        expireDate: new Date([match[1], match[2], match[3]].join(' ')),
        lineNumber: token.lineNumber + linesBefore.length - 1,
        column: linesBefore[linesBefore.length - 1].length + 1,
      })
    }
  }
  return tags
}

// Expired ranges wrap content in matching HTML comments:
// This content <!-- expires yyyy-mm-dd --> expires <!-- end expires yyyy-mm-dd --> here.
// The closing comment identifies the content to remove with the expired range.
export const expiredContent: Rule = {
  names: ['GHD038', 'expired-content'],
  description: 'Expired content must be remediated.',
  tags: ['expired'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    for (const tag of findExpiresTags(params.tokens)) {
      const today = new Date()
      if (today < tag.expireDate) continue

      addError(
        onError,
        tag.lineNumber,
        `Content marked with an expiration date has now expired. The content exists between 2 HTML comment tags in the format <!-- expires yyyy-mm-dd --> and <!-- end expires yyyy-mm-dd -->. You should remove or rewrite this content, and delete the expiration comments. Alternatively, choose a new expiration date.`,
        tag.text,
        [tag.column, tag.text.length],
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
    for (const tag of findExpiresTags(params.tokens)) {
      const today = new Date()
      const futureDate = new Date()
      futureDate.setDate(today.getDate() + DAYS_TO_WARN_BEFORE_EXPIRED)
      // Skip content that already expired or expires after the warning window.
      if (today > tag.expireDate || tag.expireDate > futureDate) continue

      addError(
        onError,
        tag.lineNumber,
        `Content marked with an expiration date will expire soon. The content exists between 2 HTML comment tags in the format <!-- expires yyyy-mm-dd --> and <!-- end expires yyyy-mm-dd -->. Check whether this content can be removed or rewritten before it expires.`,
        tag.text,
        [tag.column, tag.text.length],
        null, // No fix possible
      )
    }
  },
}

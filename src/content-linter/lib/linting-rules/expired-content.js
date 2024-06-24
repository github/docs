import { addError, newLineRe } from 'markdownlint-rule-helpers'

// This rule looks for opening and closing HTML comment tags that
// contain an expiration date in the format:
//
// This is content <!-- expires yyyy-mm-dd --> that is
// expired <!-- end expires yyyy-mm-dd --> that does not expire.
//
// The `end expires` closing tag closes the content that is expired
// and must be removed.
export const expiredContent = {
  names: ['GHD038', 'expired-content'],
  description: 'Expired content must be remediated.',
  tags: ['expired'],
  function: (params, onError) => {
    const tokensToCheck = params.tokens.filter(
      (token) => token.type === 'inline' || token.type === 'html_block',
    )

    tokensToCheck.forEach((token) => {
      // Looking for just opening tag with format:
      // <!-- expires yyyy-mm-dd -->
      const match = token.content.match(/<!--\s*expires\s(\d\d\d\d)-(\d\d)-(\d\d)\s*-->/)
      if (!match) return

      const expireDate = new Date(match.splice(1, 3).join(' '))
      const today = new Date()
      if (today < expireDate) return

      // We want the content split by line since not all token.content is in one line
      // to get the correct range of the expired content. Below is how markdownlint
      // grabs the token.content by line.
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
    })
  },
}

export const DAYS_TO_WARN_BEFORE_EXPIRED = 14

// This rule looks for content that will expire in `DAYS_TO_WARN_BEFORE_EXPIRED`
// days. The rule looks for opening and closing HTML comment tags that
// contain an expiration date in the format:
//
// This is content <!-- expires yyyy-mm-dd --> that is
// expired <!-- end expires yyyy-mm-dd --> that does not expire.
//
// The `end expires` closing tag closes the content that is expired
// and must be removed.
export const expiringSoon = {
  names: ['GHD039', 'expiring-soon'],
  description: 'Content that expires soon should be proactively addressed.',
  tags: ['expired'],
  function: (params, onError) => {
    const tokensToCheck = params.tokens.filter(
      (token) => token.type === 'inline' || token.type === 'html_block',
    )

    tokensToCheck.forEach((token) => {
      // Looking for just opening tag with format:
      // <!-- expires yyyy-mm-dd -->
      const match = token.content.match(/<!--\s*expires\s(\d\d\d\d)-(\d\d)-(\d\d)\s*-->/)
      if (!match) return

      const expireDate = new Date(match.splice(1, 3).join(' '))
      const today = new Date()
      const futureDate = new Date()
      futureDate.setDate(today.getDate() + DAYS_TO_WARN_BEFORE_EXPIRED)
      // Don't set warning if the content is already expired or
      // if the content expires later than the DAYS_TO_WARN_BEFORE_EXPIRED
      if (today > expireDate || expireDate > futureDate) return

      addError(
        onError,
        token.lineNumber,
        `Content marked with an expiration date will expire soon. The content exists between 2 HTML comment tags in the format <!-- expires yyyy-mm-dd --> and <!-- end expires yyyy-mm-dd -->. Check whether this content can be removed or rewritten before it expires.`,
        match[0],
        [token.content.indexOf(match[0]) + 1, match[0].length],
        null, // No fix possible
      )
    })
  },
}

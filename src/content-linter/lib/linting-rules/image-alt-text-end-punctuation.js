import { forEachInlineChild } from 'markdownlint-rule-helpers'

import {
  addFixErrorDetail,
  getRange,
  isStringQuoted,
  isStringPunctuated,
} from '../helpers/utils.js'

export const imageAltTextEndPunctuation = {
  names: ['GHD002', 'image-alt-text-end-punctuation'],
  description: 'Alternate text for images should end with a punctuation.',
  severity: 'error',
  tags: ['accessibility', 'images'],
  information: new URL('https://github.com/github/docs/blob/main/src/content-linter/README.md'),
  function: function GHD003(params, onError) {
    forEachInlineChild(params, 'image', function forToken(token) {
      const imageAltText = token.content.trim()
      const range = getRange(token.line, imageAltText)
      if (isStringPunctuated(imageAltText)) return

      addFixErrorDetail(onError, token.lineNumber, imageAltText + '.', imageAltText, range, {
        lineNumber: token.lineNumber,
        editColumn: isStringQuoted(imageAltText)
          ? token.line.indexOf(']')
          : token.line.indexOf(']') + 1,
        deleteCount: 0,
        insertText: '.',
      })
    })
  },
}

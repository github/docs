import { addError, forEachInlineChild } from 'markdownlint-rule-helpers'

export const imageAltTextEndPunctuation = {
  names: ['MD112', 'image-alt-text-end-punctuation'],
  description: 'Images alternate text should end with a punctuation.',
  severity: 'error',
  tags: ['accessibility', 'images'],
  function: function MD112(params, onError) {
    forEachInlineChild(params, 'image', function forToken(token) {
      const quoteRegex = /[.?!]['"]$/
      const endRegex = /[.?!]$/
      const imageAltText = token.content.trim()
      if (
        (!imageAltText.endsWith('"') && !imageAltText.slice(-1).match(endRegex)) ||
        (imageAltText.endsWith('"') && !imageAltText.slice(-2).match(quoteRegex))
      ) {
        addError(
          onError,
          token.lineNumber,
          `On line ${token.lineNumber}, the image alt text '${imageAltText}' must have punctuation at the end of the sentence.`,
          undefined,
          undefined,
          {
            lineNumber: token.lineNumber,
            editColumn: token.line.indexOf(']') + 1,
            deleteCount: 0,
            insertText: '.',
          }
        )
      }
    })
  },
}

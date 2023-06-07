import { addError, forEachInlineChild } from 'markdownlint-rule-helpers'

export const imageAltTextPeriod = {
  names: ['MD112', 'image-alt-text-period'],
  description: 'Images alternate text should have a period',
  tags: ['accessibility', 'images'],
  function: function MD112(params, onError) {
    forEachInlineChild(params, 'image', function forToken(token) {
      const imageAltText = token.content.trim()
      if (!imageAltText.endsWith('.') && !imageAltText.endsWith('."')) {
        addError(
          onError,
          token.lineNumber,
          `On line ${token.lineNumber}, the image alt text: "${imageAltText}" must have a period at the end of it.`
        )
      }
    })
  },
}

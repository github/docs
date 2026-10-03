import { addError } from 'markdownlint-rule-helpers'

import { forEachInlineChild, getRange } from '../helpers/utils'
import type { RuleParams, RuleErrorCallback, MarkdownToken, Rule } from '../../types'

const excludeStartWords = ['image', 'graphic']

export const imageAltTextExcludeStartWords: Rule = {
  names: ['GHD031', 'image-alt-text-exclude-words'],
  description: 'Alternate text for images should not begin with words like "image" or "graphic"',
  tags: ['accessibility', 'images'],
  parser: 'markdownit',
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    forEachInlineChild(params, 'image', function forToken(token: MarkdownToken) {
      // Empty alt text belongs to image-alt-text-length and cannot produce a range.
      if (!token.content) return

      const imageAltText = token.content.trim()

      const range = getRange(token.line, imageAltText)
      if (
        excludeStartWords.some((excludeWord) => imageAltText.toLowerCase().startsWith(excludeWord))
      ) {
        addError(
          onError,
          token.lineNumber,
          `Image alternate text should not start with "image" or "graphic".`,
          imageAltText,
          range,
          null, // No fix possible
        )
      }
    })
  },
}

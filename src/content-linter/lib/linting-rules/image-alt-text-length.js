import { addError } from 'markdownlint-rule-helpers'

import { liquid } from '#src/content-render/index.js'
import { allVersions } from '#src/versions/lib/all-versions.js'
import { forEachInlineChild, getRange } from '../helpers/utils.js'

export const incorrectAltTextLength = {
  names: ['GHD033', 'incorrect-alt-text-length'],
  description: 'Images alternate text should be between 40-150 characters',
  tags: ['accessibility', 'images'],
  parser: 'markdownit',
  asynchronous: true,
  function: (params, onError) => {
    forEachInlineChild(params, 'image', async function forToken(token) {
      let renderedString = token.content

      if (token.content.includes('{%') || token.content.includes('{{')) {
        const context = {
          currentLanguage: 'en',
          currentVersionObj: allVersions['free-pro-team@latest'],
        }
        renderedString = await liquid.parseAndRender(token.content, context)
      }

      // You can't compute a range if the content is empty
      // because getRange() would throw an error. It's because it assumes to
      // be able to find one string in another string.
      const range = token.content ? getRange(token.line, token.content) : null

      if (renderedString.length < 40 || renderedString.length > 150) {
        addError(
          onError,
          token.lineNumber,
          `Image alternate text is ${renderedString.length} characters long.`,
          renderedString,
          range,
          null, // No fix possible
        )
      }
    })
  },
}

import { addError, forEachInlineChild } from 'markdownlint-rule-helpers'

import { liquid } from '#src/content-render/index.js'
import { allVersions } from '../../../../lib/all-versions.js'
import { getRange } from '../helpers/utils.js'

export const incorrectAltTextLength = {
  names: ['GHD003', 'incorrect-alt-text-length'],
  severity: 'warning',
  description: 'Images alternate text should be between 40-150 characters',
  tags: ['accessibility', 'images'],
  information: new URL('https://github.com/github/docs/blob/main/src/content-linter/README.md'),
  function: function GHD004(params, onError) {
    forEachInlineChild(params, 'image', async function forToken(token) {
      let renderedString = token.content
      const range = getRange(token.line, token.content)
      if (token.content.includes('{%') || token.content.includes('{{')) {
        const context = {
          currentLanguage: 'en',
          currentVersionObj: allVersions['free-pro-team@latest'],
        }
        renderedString = await liquid.parseAndRender(token.content, context)
      }

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

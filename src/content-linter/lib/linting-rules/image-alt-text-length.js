import { addError, forEachInlineChild } from 'markdownlint-rule-helpers'
import renderContent from '../../../../lib/render-content/index.js'

export const incorrectAltTextLength = {
  names: ['MD111', 'incorrect-alt-text-length'],
  description: 'Images alternate text should be between 40-150 characters',
  tags: ['accessibility', 'images'],
  function: function MD111(params, onError) {
    forEachInlineChild(params, 'image', async function forToken(token) {
      let renderedString = token.content
      if (token.content.includes('{%') || token.content.includes('{{')) {
        const context = { currentLanguage: 'en' }
        renderedString = await renderContent.liquid.parseAndRender(token.content, context)
      }

      if (renderedString.length < 40 || renderedString.length > 150) {
        addError(
          onError,
          token.lineNumber,
          `The alt text: ${renderedString}, is ${renderedString.length} characters long`
        )
      }
    })
  },
}

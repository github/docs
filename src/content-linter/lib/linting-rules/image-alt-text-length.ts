// @ts-ignore - markdownlint-rule-helpers doesn't have TypeScript declarations
import { addError } from 'markdownlint-rule-helpers'
import type { RuleParams, RuleErrorCallback } from '../../types'

import { liquid } from '@/content-render/index'
import { allVersions } from '@/versions/lib/all-versions'
import { forEachInlineChild, getRange } from '../helpers/utils'

interface ImageToken {
  content: string
  lineNumber: number
  line: string
  range: [number, number]
}

export const incorrectAltTextLength = {
  names: ['GHD033', 'incorrect-alt-text-length'],
  description: 'Images alternate text should be between 40-150 characters',
  tags: ['accessibility', 'images'],
  parser: 'markdownit',
  asynchronous: true,
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    forEachInlineChild(params, 'image', async function forToken(token: ImageToken) {
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

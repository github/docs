// @ts-ignore - markdownlint-rule-helpers doesn't provide TypeScript declarations
import { addError } from 'markdownlint-rule-helpers'

import { forEachInlineChild } from '@/content-linter/lib/helpers/utils'
import type { RuleParams, RuleErrorCallback, MarkdownToken } from '@/content-linter/types'

export const imageNoGif = {
  names: ['GHD036', 'image-no-gif'],
  description:
    'Image must not be a gif, styleguide reference: contributing/style-guide-and-content-model/style-guide.md#images',
  tags: ['images'],
  parser: 'markdownit' as const,
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    forEachInlineChild(params, 'image', function forToken(token: MarkdownToken) {
      const imageFileName = token.attrs?.[0]?.[1]
      if (imageFileName && imageFileName.endsWith('.gif')) {
        addError(
          onError,
          token.lineNumber,
          `Images cannot be gifs, change: ${imageFileName} to an accepted image file.`,
          '',
          [token.line.indexOf(imageFileName) + 1, imageFileName.length],
          null,
        )
      }
    })
  },
}

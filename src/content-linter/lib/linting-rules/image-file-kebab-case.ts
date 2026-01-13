import { addFixErrorDetail, forEachInlineChild } from '@/content-linter/lib/helpers/utils'
import type { RuleParams, RuleErrorCallback, MarkdownToken } from '@/content-linter/types'

export const imageFileKebabCase = {
  names: ['GHD004', 'image-file-kebab-case'],
  description: 'Image file names must use kebab-case',
  tags: ['images'],
  parser: 'markdownit' as const,
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    forEachInlineChild(params, 'image', async function forToken(token: MarkdownToken) {
      const imageFileName = token.attrs?.[0]?.[1]?.split('/').pop()?.split('.')[0] || ''
      const nonKebabRegex = /([A-Z]|_)/
      const suggestedFileName = imageFileName.toLowerCase().replace(/_/g, '-')
      if (imageFileName.match(nonKebabRegex)) {
        addFixErrorDetail(
          onError,
          token.lineNumber,
          suggestedFileName,
          imageFileName,
          [token.line.indexOf(imageFileName) + 1, imageFileName.length],
          null,
        )
      }
    })
  },
}

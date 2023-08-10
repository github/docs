import { forEachInlineChild } from 'markdownlint-rule-helpers'

import { addFixErrorDetail } from '../helpers/utils.js'

export const imageFileKebab = {
  names: ['GHD004', 'image-file-kebab'],
  description: 'Image file names should always be lowercase kebab case',
  severity: 'warning',
  tags: ['accessibility', 'images'],
  information: new URL('https://github.com/github/docs/blob/main/src/content-linter/README.md'),
  function: function GHD005(params, onError) {
    forEachInlineChild(params, 'image', async function forToken(token) {
      const imageFileName = token.attrs[0][1].split('/').pop().split('.')[0]
      const nonKebabRegex = /([A-Z]|_)/
      const suggestedFileName = imageFileName.toLowerCase().replace(/_/g, '-')
      if (imageFileName.match(nonKebabRegex)) {
        addFixErrorDetail(
          onError,
          token.lineNumber,
          imageFileName,
          suggestedFileName,
          [token.line.indexOf(imageFileName) + 1, imageFileName.length],
          null, // Todo add fix
        )
      }
    })
  },
}

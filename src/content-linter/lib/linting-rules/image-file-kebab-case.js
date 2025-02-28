import { addFixErrorDetail, forEachInlineChild } from '../helpers/utils.js'

export const imageFileKebabCase = {
  names: ['GHD004', 'image-file-kebab-case'],
  description: 'Image file names must use kebab-case',
  tags: ['images'],
  parser: 'markdownit',
  function: (params, onError) => {
    forEachInlineChild(params, 'image', async function forToken(token) {
      const imageFileName = token.attrs[0][1].split('/').pop().split('.')[0]
      const nonKebabRegex = /([A-Z]|_)/
      const suggestedFileName = imageFileName.toLowerCase().replace(/_/g, '-')
      if (imageFileName.match(nonKebabRegex)) {
        addFixErrorDetail(
          onError,
          token.lineNumber,
          suggestedFileName,
          imageFileName,
          [token.line.indexOf(imageFileName) + 1, imageFileName.length],
          null, // Todo add fix
        )
      }
    })
  },
}

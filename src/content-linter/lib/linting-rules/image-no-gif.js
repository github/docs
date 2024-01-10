import { addError, forEachInlineChild } from 'markdownlint-rule-helpers'

export const imageNoGif = {
  names: ['GHD036', 'image-no-gif'],
  description:
    'Image must not be a gif, styleguide reference: contributing/style-guide-and-content-model/style-guide.md#images',
  tags: ['images'],
  function: (params, onError) => {
    forEachInlineChild(params, 'image', function forToken(token) {
      const imageFileName = token.attrs[0][1]
      if (imageFileName.endsWith('.gif')) {
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

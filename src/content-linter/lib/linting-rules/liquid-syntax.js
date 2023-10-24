import { addError } from 'markdownlint-rule-helpers'

import { getFrontmatter } from '../helpers/utils.js'
import { liquid } from '#src/content-render/index.js'
import { isLiquidError } from '../../../../lib/render-with-fallback.js'

/*
  Attempts to parse all liquid in the frontmatter of a file
  to verify the syntax is correct.
*/
export const frontmatterLiquidSyntax = {
  names: ['GHD017', 'frontmatter-liquid-syntax'],
  description: 'Frontmatter properties must use valid Liquid',
  tags: ['liquid', 'frontmatter'],
  function: (params, onError) => {
    const fm = getFrontmatter(params.lines)
    if (!fm) return

    // Currently this list is hardcoded, but in the future we plan to
    // use a custom key in the frontmatter to determine which keys
    // contain Liquid.
    const keysWithLiquid = ['title', 'shortTitle', 'intro', 'product', 'permissions'].filter(
      (key) => Boolean(fm[key]),
    )

    for (const key of keysWithLiquid) {
      const value = fm[key]
      try {
        liquid.parse(value)
      } catch (error) {
        // If the error source is not a Liquid error but rather a
        // ReferenceError or bad type we should allow that error to be thrown
        if (!isLiquidError(error)) throw error
        const { errorDescription, columnNumber } = getErrorMessageInfo(error.message)
        const lineNumber = params.lines.findIndex((line) => line.trim().startsWith(`${key}:`)) + 1
        // Add the key length plus 3 to the column number to account colon and
        // for the  space after the key and column number starting at 1.
        // If there is no space after the colon, a YAMLException will be thrown.
        const range = [columnNumber + key.length + 3, value.length]
        addError(
          onError,
          lineNumber,
          'Liquid syntax error: ' + errorDescription,
          value,
          range,
          null, // No fix possible
        )
      }
    }
  },
}

/*
  Attempts to parse all liquid in the Markdown content of a file
  to verify the syntax is correct.
*/
export const liquidSyntax = {
  names: ['GHD018', 'liquid-syntax'],
  description: 'Markdown content must use valid Liquid',
  tags: ['liquid'],
  function: function GHD018(params, onError) {
    try {
      liquid.parse(params.lines.join('\n'))
    } catch (error) {
      // If the error source is not a Liquid error but rather a
      // ReferenceError or bad type we should allow that error to be thrown
      if (!isLiquidError(error)) throw error
      const { errorDescription, lineNumber, columnNumber } = getErrorMessageInfo(error.message)
      const line = params.lines[lineNumber - 1]
      // We don't have enough information to know the length of the full
      // liquid tag without doing some regex testing and making assumptions
      // about if the end tag is correctly formed, so we just give a
      // range from the start of the tag to the end of the line.
      const range = [columnNumber, line.slice(columnNumber - 1).length]
      addError(
        onError,
        lineNumber,
        'Liquid syntax error: ' + errorDescription,
        line,
        range,
        null, // No fix possible
      )
    }
  },
}

function getErrorMessageInfo(message) {
  const [errorDescription, lineString, columnString] = message.split(',')
  // There has to be a line number so we'll default to line 1 if the message
  // doesn't contain a line number.
  if (!columnString || !lineString)
    throw new Error('Liquid error message does not contain line or column number')
  const lineNumber = parseInt(lineString.trim().replace('line:', ''), 10)
  const columnNumber = parseInt(columnString.trim().replace('col:', ''), 10)
  return { errorDescription, lineNumber, columnNumber }
}

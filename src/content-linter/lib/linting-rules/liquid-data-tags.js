import { TokenKind } from 'liquidjs'
import { addError } from 'markdownlint-rule-helpers'

import { getDataByLanguage } from '../../../../lib/get-data.js'
import { getLiquidTokens, getPositionData } from '../helpers/liquid-utils.js'

/*
  Checks for instances where a Liquid data or indented_data_reference
  tag is used but is not defined.
*/
export const liquidDataReferencesDefined = {
  names: ['GHD014', 'liquid-data-references-defined'],
  description:
    'Liquid data or indented data references were found in content that have no value or do not exist in the data directory',
  tags: ['liquid'],
  function: (params, onError) => {
    const content = params.lines.join('\n')
    const tokens = getLiquidTokens(content)
      .filter((token) => token.kind === TokenKind.Tag)
      .filter((token) => token.name === 'data' || token.name === 'indented_data_reference')

    if (!tokens.length) return

    for (const token of tokens) {
      // When the liquid tag is indented_data_reference, there are
      // two arguments: the path in the data directory and the number
      // of spaces to indent. We only want the first argument to
      // validate if the data reference is defined.
      const dataDirectoryReference = token.args.split(/\s+/)[0]
      if (hasData(dataDirectoryReference)) continue

      const lines = params.lines
      const { lineNumber, column, length } = getPositionData(token, lines)
      addError(
        onError,
        lineNumber,
        `The Liquid data reference {% ${token.content} %} is used in content but either does not exist or has no value.`,
        token.content,
        [column, length],
        null, // No fix available
      )
    }
  },
}

export const liquidDataTagFormat = {
  names: ['GHD015', 'liquid-data-tag-format'],
  description:
    'Liquid data or indented data references tags must have the correct number of arguments and spacing',
  tags: ['liquid', 'format'],
  function: (params, onError) => {
    const content = params.lines.join('\n')
    const tokenTags = getLiquidTokens(content).filter((token) => token.kind === TokenKind.Tag)
    const dataTags = tokenTags.filter((token) => token.name === 'data')
    const indentedDataTags = tokenTags.filter((token) => token.name === 'indented_data_reference')

    for (const token of dataTags) {
      // A data tag has only one argument, the data directory path.
      const args = token.args.split(/\s+/)
      // When the string is empty and a non-empty separator is specified,
      // split() returns [''], so we need to check for that case.
      if (args.length === 1 && token.args !== '') continue

      const lines = params.lines
      const { lineNumber, column, length } = getPositionData(token, lines)

      addError(
        onError,
        lineNumber,
        `The Liquid data tag {% ${token.content} %} can only have one argument but includes ${args.length}.`,
        token.content,
        [column, length],
        null, // No fix available
      )
    }

    for (const token of indentedDataTags) {
      // When the liquid tag is indented_data_reference, there are
      // two arguments: the path in the data directory and the number
      // of spaces to indent.
      const args = token.args.split(/\s+/)
      const isSpacesArgOk = /^spaces=\d{1,2}$/.test(args[1])
      if (args.length === 2 && isSpacesArgOk) continue

      const lines = params.lines
      const { lineNumber, column, length } = getPositionData(token, lines)

      addError(
        onError,
        lineNumber,
        `The Liquid indented_data_reference tag {% ${token.content} %} must have two arguments. The second argument must be in the format 'spaces=<number>'.`,
        token.content,
        [column, length],
        null, // No fix available
      )
    }
  },
}

// Convenient wrapper because linting is always about English content
const getData = (liquidRef) => getDataByLanguage(liquidRef, 'en')

const hasData = (liquidRef) => {
  try {
    // If a reusable contains a non-existent data reference, it will
    // return undefined. If the data reference is inherently broken
    // (e.g., {% data reus.foo %}), it will throw an error.
    const data = getData(liquidRef)
    return data !== undefined
  } catch {
    return false
  }
}

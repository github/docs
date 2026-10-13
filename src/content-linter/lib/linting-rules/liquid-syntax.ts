import { addError } from 'markdownlint-rule-helpers'

import { getFrontmatter } from '../helpers/utils'
import { liquid } from '@/content-render/index'
import { isLiquidError } from '@/languages/lib/render-with-fallback'

import type { RuleParams, RuleErrorCallback } from '@/content-linter/types'

interface ErrorMessageInfo {
  errorDescription: string
  lineNumber: number
  columnNumber: number
}

export const frontmatterLiquidSyntax = {
  names: ['GHD017', 'frontmatter-liquid-syntax'],
  description: 'Frontmatter properties must use valid Liquid',
  tags: ['liquid', 'frontmatter'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    const fm = getFrontmatter(params.lines)
    if (!fm) return

    const keysWithLiquid = ['title', 'shortTitle', 'intro', 'product', 'permissions'].filter(
      (key) => Boolean(fm[key]),
    )

    for (const key of keysWithLiquid) {
      const value = fm[key]
      if (typeof value !== 'string') continue
      try {
        liquid.parse(value)
      } catch (error) {
        // Let non-Liquid parser errors propagate.
        if (!isLiquidError(error)) throw error
        const { errorDescription, columnNumber } = getErrorMessageInfo((error as Error).message)
        const lineNumber = params.lines.findIndex((line) => line.trim().startsWith(`${key}:`)) + 1
        // Offset for the key, colon, space, and 1-based column; missing spaces throw YAMLException.
        const startRange = columnNumber + key.length + 3
        // Clamp the range to the line length when Liquid reports past the end.
        const endRange =
          startRange + value.length - 1 > params.lines[lineNumber - 1].length
            ? params.lines[lineNumber - 1].length - startRange + 1
            : value.length
        const range: [number, number] = [startRange, endRange]
        addError(
          onError,
          lineNumber,
          `Liquid syntax error: ${errorDescription}`,
          value,
          range,
          null, // No fix possible
        )
      }
    }
  },
}

export const liquidSyntax = {
  names: ['GHD018', 'liquid-syntax'],
  description: 'Markdown content must use valid Liquid',
  tags: ['liquid'],
  function: function GHD018(params: RuleParams, onError: RuleErrorCallback) {
    try {
      liquid.parse(params.lines.join('\n'))
    } catch (error) {
      // Let non-Liquid parser errors propagate.
      if (!isLiquidError(error)) throw error
      const { errorDescription, lineNumber, columnNumber } = getErrorMessageInfo(
        (error as Error).message,
      )
      const line = params.lines[lineNumber - 1]
      // Without a trustworthy closing tag, report from the tag start through the line end.
      const range: [number, number] = [columnNumber, line.slice(columnNumber - 1).length]
      addError(
        onError,
        lineNumber,
        `Liquid syntax error: ${errorDescription}`,
        line,
        range,
        null, // No fix possible
      )
    }
  },
}

function getErrorMessageInfo(message: string): ErrorMessageInfo {
  const [errorDescription, lineString, columnString] = message.split(',')
  if (!columnString || !lineString)
    throw new Error('Liquid error message does not contain line or column number')
  const lineNumber = parseInt(lineString.trim().replace('line:', ''), 10)
  const columnNumber = parseInt(columnString.trim().replace('col:', ''), 10)
  return { errorDescription, lineNumber, columnNumber }
}

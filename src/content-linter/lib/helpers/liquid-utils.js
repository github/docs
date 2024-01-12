import { Tokenizer } from 'liquidjs'

const liquidTokenCache = new Map()

export function getLiquidTokens(content) {
  if (!content) return []

  if (liquidTokenCache.has(content)) {
    return liquidTokenCache.get(content)
  }

  const tokenizer = new Tokenizer(content)
  const tokens = tokenizer.readTopLevelTokens()
  liquidTokenCache.set(content, tokens)
  return liquidTokenCache.get(content)
}

export const OUTPUT_OPEN = '{%'
export const OUTPUT_CLOSE = '%}'
export const TAG_OPEN = '{{'
export const TAG_CLOSE = '}}'

export const conditionalTags = ['if', 'elseif', 'unless', 'case', 'ifversion']

export function getPositionData(token, lines) {
  // Liquid indexes are 0-based, but we want to
  // covert to the system used by Markdownlint
  const begin = token.begin + 1
  const end = token.end + 1
  // Account for the newline character at the end
  // of each line that is not represented in the
  // `lines` array
  const lineLengths = lines.map((line) => line.length + 1)

  let count = begin
  let lineNumber = 1
  for (const lineLength of lineLengths) {
    if (count - lineLength <= 0) break
    count = count - lineLength
    lineNumber++
  }
  return { lineNumber, column: count, length: end - begin }
}

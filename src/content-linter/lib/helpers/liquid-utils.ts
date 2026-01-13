import { Tokenizer, TokenKind } from 'liquidjs'
import type { TopLevelToken, TagToken } from 'liquidjs'

import { deprecated } from '@/versions/lib/enterprise-server-releases'

// Cache for liquid tokens to improve performance
const liquidTokenCache = new Map<string, TopLevelToken[]>()

// Returns TopLevelToken array from liquidjs which is a union of TagToken, OutputToken, and HTMLToken
export function getLiquidTokens(
  content: string,
  { noCache = false }: { noCache?: boolean } = {},
): TopLevelToken[] {
  if (!content) return []

  if (noCache) {
    const tokenizer = new Tokenizer(content)
    return tokenizer.readTopLevelTokens()
  }

  if (liquidTokenCache.has(content)) {
    return liquidTokenCache.get(content)!
  }

  const tokenizer = new Tokenizer(content)
  const tokens = tokenizer.readTopLevelTokens()
  liquidTokenCache.set(content, tokens)
  return liquidTokenCache.get(content)!
}

export const OUTPUT_OPEN = '{%'
export const OUTPUT_CLOSE = '%}'
export const TAG_OPEN = '{{'
export const TAG_CLOSE = '}}'

export const conditionalTags = ['if', 'elseif', 'unless', 'case', 'ifversion']

// Token parameter uses TopLevelToken which has begin and end properties
export function getPositionData(
  token: TopLevelToken,
  lines: string[],
): { lineNumber: number; column: number; length: number } {
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

/* When looking for unused Liquid `ifversion` tags, there
 * are a few ways content can be updated to remove
 * deprecated conditional statements. This function is
 * specific to tags in a statement that are removed along
 * with the content in the statement. For example:
 *
 * {% ifversion < 1.0 %}This is removed{% endif %}
 *
 * Returns an array of error objects in the format expected
 * by Markdownlint:
 * [ { lineNumber: 1, column: 1, deleteCount: 3, }]
 */
// Token parameter uses TopLevelToken from liquidjs
export function getContentDeleteData(
  token: TopLevelToken,
  tokenEnd: number,
  lines: string[],
): Array<{ lineNumber: number; column: number; deleteCount: number }> {
  const { lineNumber, column } = getPositionData(token, lines)
  const errorInfo: Array<{ lineNumber: number; column: number; deleteCount: number }> = []
  let begin = column - 1
  // Subtract one from end of next token tag. The end of the
  // current tag is one position before that.
  const length = tokenEnd - token.begin

  if (lines[lineNumber - 1].slice(begin).length >= length) {
    return [{ lineNumber, column, deleteCount: length }]
  }

  let remainingLength = length
  let incLineNumber = 0
  while (remainingLength > 0) {
    const zeroBasedLineNumber = lineNumber - 1 + incLineNumber
    const line = lines[zeroBasedLineNumber]
    const lineLength = line.length
    let deleteCount
    if (begin !== 0) {
      deleteCount = line.slice(begin).length
      remainingLength -= deleteCount + 1
    } else if (remainingLength >= lineLength) {
      deleteCount = -1
      remainingLength -= lineLength + 1
    } else {
      deleteCount = remainingLength
      remainingLength -= deleteCount
    }
    errorInfo.push({ lineNumber: zeroBasedLineNumber + 1, column: begin + 1, deleteCount })
    begin = 0
    incLineNumber++
  }
  return errorInfo
}

// This function returns all ifversion conditional statement tags
// and filters out any `if` conditional statements (including the
// related elsif, else, and endif tags).
// Docs doesn't use the standard `if` tag for versioning, instead the
// `ifversion` tag is used.
// Returns TagToken array since we filter to only Tag tokens
export function getLiquidIfVersionTokens(content: string): TagToken[] {
  // Include 'case' and 'endcase' so we can filter out `else` tags that belong to case statements
  const IFVERSION_TAG_NAMES = ['if', 'ifversion', 'elsif', 'else', 'endif', 'case', 'endcase']
  const tokens = getLiquidTokens(content)
    .filter((token): token is TagToken => token.kind === TokenKind.Tag)
    .filter((token) => IFVERSION_TAG_NAMES.includes(token.name))

  let inIfStatement = false
  let inCaseStatement = false
  const ifVersionTokens: TagToken[] = []
  for (const token of tokens) {
    // Filter out `if` statements and their related tags
    if (token.name === 'if') {
      inIfStatement = true
      continue
    }
    if (inIfStatement && token.name !== 'endif') continue
    if (inIfStatement && token.name === 'endif') {
      inIfStatement = false
      continue
    }
    // Filter out `case` statements and their related tags (including `else`)
    if (token.name === 'case') {
      inCaseStatement = true
      continue
    }
    if (inCaseStatement && token.name !== 'endcase') continue
    if (inCaseStatement && token.name === 'endcase') {
      inCaseStatement = false
      continue
    }
    ifVersionTokens.push(token)
  }
  return ifVersionTokens
}

export function getSimplifiedSemverRange(release: string): string {
  // Liquid conditionals only use the format > or < but not
  // >= or <=. Not sure exactly why.
  // if startswith >, we'll check to see if the release number
  // is in the deprecated list, meaning the > case can be removed
  // or changed to '*'.
  const releaseStrings = release.split(' ')
  const releaseToCheckIndex = releaseStrings.indexOf('>') + 1
  const releaseToCheck = releaseStrings[releaseToCheckIndex]

  // If the release is not part of a range and the release number
  // is deprecated, return '*' to indicate all ghes releases.
  if (deprecated.includes(releaseToCheck) && releaseStrings.length === 2) {
    return '*'
  }

  // When the release is a range and the lower range (e.g., `ghes > 3.12`)
  // is now deprecated, return an empty string.
  // Otherwise, return the release as-is.
  const newRelease = deprecated.includes(releaseToCheck)
    ? release.replace(`> ${releaseToCheck}`, '')
    : release

  return newRelease
}

import { Tokenizer, TokenKind } from 'liquidjs'
import type { TopLevelToken, TagToken } from 'liquidjs'

import { deprecated } from '@/versions/lib/enterprise-server-releases'

const liquidTokenCache = new Map<string, TopLevelToken[]>()

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

export const conditionalTags = ['if', 'elseif', 'unless', 'case', 'ifversion']

export function getPositionData(
  token: TopLevelToken,
  lines: string[],
): { lineNumber: number; column: number; length: number } {
  // Liquid offsets are 0-based, but markdownlint reports 1-based positions.
  const begin = token.begin + 1
  const end = token.end + 1
  // Add one character per newline because lines exclude newline characters.
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

// ifversion statements whose tags and content are deleted together need markdownlint
// delete ranges for each touched line.
// Example: {% ifversion < 1.0 %}This is removed{% endif %}.
export function getContentDeleteData(
  token: TopLevelToken,
  tokenEnd: number,
  lines: string[],
): Array<{ lineNumber: number; column: number; deleteCount: number }> {
  const { lineNumber, column } = getPositionData(token, lines)
  const errorInfo: Array<{ lineNumber: number; column: number; deleteCount: number }> = []
  let begin = column - 1
  // tokenEnd is the next tag's start, except an endif uses its own end.
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

// Docs versioning reads ifversion tags, so skip regular if subtrees and case statements.
export function getLiquidIfVersionTokens(content: string): TagToken[] {
  // Include case and endcase so else tags inside case statements do not look like ifversion tags.
  const IFVERSION_TAG_NAMES = ['if', 'ifversion', 'elsif', 'else', 'endif', 'case', 'endcase']
  const tokens = getLiquidTokens(content)
    .filter((token): token is TagToken => token.kind === TokenKind.Tag)
    .filter((token) => IFVERSION_TAG_NAMES.includes(token.name))

  let ifDepth = 0
  let inCaseStatement = false
  const ifVersionTokens: TagToken[] = []
  for (const token of tokens) {
    // Skip regular if statements and their related tags, including nested ones.
    if (token.name === 'if') {
      ifDepth++
      continue
    }
    // A regular if subtree can contain ifversion tags, and endif can close either one.
    if (ifDepth > 0 && token.name === 'ifversion') {
      ifDepth++
      continue
    }
    if (ifDepth > 0 && token.name === 'endif') {
      ifDepth--
      continue
    }
    if (ifDepth > 0) continue
    // Skip case statements and their related tags, including else.
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
  // Liquid conditionals use > and <, so only the lower bound needs deprecation checks.
  const releaseStrings = release.split(' ')
  const releaseToCheckIndex = releaseStrings.indexOf('>') + 1
  const releaseToCheck = releaseStrings[releaseToCheckIndex]

  // A deprecated single lower bound covers all GHES releases, so return *.
  if (deprecated.includes(releaseToCheck) && releaseStrings.length === 2) {
    return '*'
  }

  // If the lower bound in a range, such as ghes > 3.12, is deprecated, remove it.
  const newRelease = deprecated.includes(releaseToCheck)
    ? release.replace(`> ${releaseToCheck}`, '')
    : release

  return newRelease
}

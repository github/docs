import { addError, ellipsify, filterTokens } from 'markdownlint-rule-helpers'

import type { MarkdownToken, Rule, RuleErrorCallback, RuleParams } from '@/content-linter/types'

interface MarkdownItToken extends MarkdownToken {
  info?: string
  map?: [number, number]
}

interface DuplicateWordMatch {
  firstWord: string
  secondWord: string
  start: number
  text: string
  whitespaceLength: number
}

const DUPLICATE_WORD_PATTERN =
  /(?<![\p{L}\p{M}'’-])([\p{L}][\p{L}\p{M}'’-]*)([^\S\r\n]+)(\1)(?![\p{L}\p{M}'’-])/giu

function isAllUppercase(word: string): boolean {
  const letters = word.match(/\p{L}/gu)?.join('') || ''
  return (
    letters.length > 0 && letters === letters.toUpperCase() && letters !== letters.toLowerCase()
  )
}

function isPlaceholderOrOperatorPair(firstWord: string, secondWord: string): boolean {
  return firstWord !== secondWord && (isAllUppercase(firstWord) || isAllUppercase(secondWord))
}

function findDuplicateWords(text: string): DuplicateWordMatch[] {
  const matches: DuplicateWordMatch[] = []

  DUPLICATE_WORD_PATTERN.lastIndex = 0
  let match: RegExpExecArray | null
  while ((match = DUPLICATE_WORD_PATTERN.exec(text)) !== null) {
    const [, firstWord, whitespace, secondWord] = match
    if (isPlaceholderOrOperatorPair(firstWord, secondWord)) continue

    matches.push({
      firstWord,
      secondWord,
      start: match.index,
      text: match[0],
      whitespaceLength: whitespace.length,
    })
  }

  return matches
}

function reportDuplicateWords(
  text: string,
  sourceLine: string,
  lineNumber: number,
  sourceOffset: number,
  onError: RuleErrorCallback,
  reportedLocations: Set<string>,
): void {
  for (const match of findDuplicateWords(text)) {
    const expectedMatchOffset = sourceOffset + match.start
    const sourceMatchOffset =
      sourceLine.slice(expectedMatchOffset, expectedMatchOffset + match.text.length) === match.text
        ? expectedMatchOffset
        : sourceLine.indexOf(match.text, sourceOffset)
    const resolvedMatchOffset = sourceMatchOffset >= 0 ? sourceMatchOffset : expectedMatchOffset
    const duplicateOffset = match.start + match.firstWord.length + match.whitespaceLength
    const duplicateColumn = resolvedMatchOffset + duplicateOffset - match.start + 1
    const location = `${lineNumber}:${duplicateColumn}`
    if (reportedLocations.has(location)) continue
    reportedLocations.add(location)

    addError(
      onError,
      lineNumber,
      `Check whether the repeated word "${match.secondWord}" is intentional.`,
      ellipsify(sourceLine),
      [duplicateColumn, match.secondWord.length],
      null,
    )
  }
}

function isSentenceLikeText(line: string): boolean {
  return /[.!?]["')\]}]*$/.test(line.trim())
}

export const consecutiveDuplicateWords: Rule = {
  names: ['GHD068', 'consecutive-duplicate-words'],
  description: 'Consecutive words must not be repeated',
  tags: ['format'],
  parser: 'markdownit',
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    const reportedLocations = new Set<string>()

    filterTokens(params, 'inline', (token: MarkdownItToken) => {
      let currentLineNumber = token.lineNumber || 1
      let sourceCursor = 0

      for (const child of token.children || []) {
        const childLineNumber = child.lineNumber || token.lineNumber || 1
        const sourceLine = child.line || token.line || params.lines[childLineNumber - 1] || ''

        if (childLineNumber !== currentLineNumber) {
          currentLineNumber = childLineNumber
          sourceCursor = 0
        }

        const childContent = child.content || ''
        const childOffset = childContent ? sourceLine.indexOf(childContent, sourceCursor) : -1

        if (child.type === 'text' && childContent) {
          const sourceOffset = childOffset >= 0 ? childOffset : 0
          reportDuplicateWords(
            childContent,
            sourceLine,
            childLineNumber,
            sourceOffset,
            onError,
            reportedLocations,
          )
        }

        if (childOffset >= 0) sourceCursor = childOffset + childContent.length
      }
    })

    filterTokens(params, 'fence', (token: MarkdownItToken) => {
      const language = token.info?.trim().split(/\s+/)[0]?.toLowerCase()
      if (language !== 'text' || !token.map) return

      const contentLines = (token.content || '').split('\n')
      const firstContentLineIndex = token.map[0] + 1

      for (const [offset, contentLine] of contentLines.entries()) {
        if (!contentLine || !isSentenceLikeText(contentLine)) continue

        const sourceLineIndex = firstContentLineIndex + offset
        const sourceLine = params.lines[sourceLineIndex] || contentLine
        const sourceOffset = Math.max(0, sourceLine.indexOf(contentLine))
        reportDuplicateWords(
          contentLine,
          sourceLine,
          sourceLineIndex + 1,
          sourceOffset,
          onError,
          reportedLocations,
        )
      }
    })
  },
}

// @ts-ignore - markdownlint-rule-helpers doesn't provide TypeScript declarations
import { addError, filterTokens } from 'markdownlint-rule-helpers'

import type { RuleParams, RuleErrorCallback, MarkdownToken } from '@/content-linter/types'

export const codeAnnotationCommentSpacing = {
  names: ['GHD045', 'code-annotation-comment-spacing'],
  description:
    'Code comments in annotation blocks must have exactly one space after the comment character(s)',
  tags: ['code', 'comments', 'annotate', 'spacing'],
  parser: 'markdownit' as const,
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    filterTokens(params, 'fence', (token: MarkdownToken) => {
      if (!token.info?.includes('annotate')) return

      const content = token.content
      if (!content) return

      const lines = content.split('\n')

      lines.forEach((line: string, index: number) => {
        const trimmedLine = line.trim()
        if (!trimmedLine) return

        // Define a map of comment patterns
        const commentPatterns: Record<string, RegExp> = {
          '//': /^(\/\/)(.*)/, // JavaScript/TypeScript/Java/C# style comments
          '#': /^(#)(.*)/, // Python/Ruby/Shell/YAML style comments
          '--': /^(--)(.*)/, // SQL/Lua style comments
        }

        // Check for different comment patterns
        let commentMatch: RegExpMatchArray | null = null
        let commentChar: string | null = null
        let restOfLine: string | null = null

        // Iterate over the map to find a matching comment style
        for (const [char, pattern] of Object.entries(commentPatterns)) {
          if (trimmedLine.startsWith(char)) {
            commentMatch = trimmedLine.match(pattern)
            commentChar = char
            restOfLine = commentMatch ? commentMatch[2] : ''
            break
          }
        }

        if (commentMatch && restOfLine !== null && commentChar !== null) {
          // Skip shebang lines (#!/...)
          if (trimmedLine.startsWith('#!')) {
            return
          }

          // Allow empty comments or comments with exactly one space
          if (restOfLine === '' || restOfLine.startsWith(' ')) {
            // If it starts with a space, make sure it's exactly one space
            if (restOfLine.startsWith(' ') && restOfLine.length > 1 && restOfLine[1] === ' ') {
              // Multiple spaces - this is an error
              const lineNumber: number = token.lineNumber + index + 1
              const fixedLine: string = line.replace(
                new RegExp(`^(\\s*${commentChar.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\s+`),
                `$1 `,
              )

              addError(
                onError,
                lineNumber,
                `Comment must have exactly one space after '${commentChar}', found multiple spaces`,
                line,
                [1, line.length],
                {
                  lineNumber,
                  editColumn: 1,
                  deleteCount: line.length,
                  insertText: fixedLine,
                },
              )
            }
            // Single space or empty - this is correct
            return
          } else {
            // No space after comment character - this is an error
            const lineNumber: number = token.lineNumber + index + 1
            const leadingWhitespace: string = line.match(/^\s*/)![0]
            const fixedLine: string = `${leadingWhitespace + commentChar} ${restOfLine}`

            addError(
              onError,
              lineNumber,
              `Comment must have exactly one space after '${commentChar}'`,
              line,
              [1, line.length],
              {
                lineNumber,
                editColumn: 1,
                deleteCount: line.length,
                insertText: fixedLine,
              },
            )
          }
        }
      })
    })
  },
}

import fs from 'fs'
import { load } from 'js-yaml'
import { addError, filterTokens } from 'markdownlint-rule-helpers'

import type { RuleParams, RuleErrorCallback, MarkdownToken } from '@/content-linter/types'

const languages = load(fs.readFileSync('data/code-languages.yml', 'utf8')) as Record<
  string,
  { comment?: string }
>

// Match the annotate renderer, which only treats the language's own comment syntax as a comment.
const commentPrefixes: Record<string, string> = {
  number: '#',
  slash: '//',
  hyphen: '--',
}

export const codeAnnotationCommentSpacing = {
  names: ['GHD045', 'code-annotation-comment-spacing'],
  description:
    'Code comments in annotation blocks must have exactly one space after the comment character(s)',
  tags: ['code', 'comments', 'annotate', 'spacing'],
  parser: 'markdownit' as const,
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    filterTokens(params, 'fence', (token: MarkdownToken) => {
      if (!token.info?.includes('annotate')) return

      const lang = token.info.trim().split(/\s+/)[0]
      const commentChar = commentPrefixes[languages[lang]?.comment ?? '']
      if (!commentChar) return

      const content = token.content
      if (!content) return

      const lines = content.split('\n')

      for (let index = 0; index < lines.length; index++) {
        const line: string = lines[index]
        const trimmedLine = line.trim()
        if (!trimmedLine) continue

        if (trimmedLine.startsWith(commentChar)) {
          const restOfLine = trimmedLine.slice(commentChar.length)

          // Treat shebang lines as executable directives, not code comments.
          if (trimmedLine.startsWith('#!')) {
            continue
          }

          if (restOfLine === '' || restOfLine.startsWith(' ')) {
            if (restOfLine.startsWith(' ') && restOfLine.length > 1 && restOfLine[1] === ' ') {
              const lineNumber: number = token.lineNumber + index + 1
              const fixedLine: string = line.replace(
                new RegExp(`^(\\s*${RegExp.escape(commentChar)})\\s+`),
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
            continue
          } else {
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
      }
    })
  },
}

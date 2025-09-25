// @ts-ignore - markdownlint-rule-helpers doesn't provide TypeScript declarations
import { addError, filterTokens, newLineRe } from 'markdownlint-rule-helpers'

import type { RuleParams, RuleErrorCallback, MarkdownToken, Rule } from '@/content-linter/types'

export const codeFenceLineLength: Rule = {
  names: ['GHD030', 'code-fence-line-length'],
  description: 'Code fence lines should not exceed a maximum length',
  tags: ['code', 'accessibility'],
  parser: 'markdownit',
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    const MAX_LINE_LENGTH: number = params.config?.maxLength || 60
    filterTokens(params, 'fence', (token: MarkdownToken) => {
      if (!token.content) return
      const lines: string[] = token.content.split(newLineRe)
      lines.forEach((line: string, index: number) => {
        if (line.length > MAX_LINE_LENGTH) {
          // The token line number is the line number of the first line of the
          // code fence. We want to report the line number of the content within
          // the code fence so we need to add 1 + the index.
          const lineNumber: number = token.lineNumber + index + 1
          addError(
            onError,
            lineNumber,
            `Code fence line exceeds ${MAX_LINE_LENGTH} characters.`,
            line,
            [1, line.length],
            null, // No fix possible
          )
        }
      })
    })
  },
}

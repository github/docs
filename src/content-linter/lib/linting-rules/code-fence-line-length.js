import { addError, filterTokens, newLineRe } from 'markdownlint-rule-helpers'

export const codeFenceLineLength = {
  names: ['GHD030', 'code-fence-line-length'],
  description: 'Code fence lines should not exceed a maximum length',
  tags: ['code', 'accessibility'],
  function: (params, onError) => {
    const MAX_LINE_LENGTH = String(params.config.maxLength || 60)
    filterTokens(params, 'fence', (token) => {
      const lines = token.content.split(newLineRe)
      lines.forEach((line, index) => {
        if (line.length > MAX_LINE_LENGTH) {
          // The token line number is the line number of the first line of the
          // code fence. We want to report the line number of the content within
          // the code fence so we need to add 1 + the index.
          const lineNumber = token.lineNumber + index + 1
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

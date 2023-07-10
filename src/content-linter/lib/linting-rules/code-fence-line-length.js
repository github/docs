import { addError } from 'markdownlint-rule-helpers'

import { getCodeFenceTokens, getCodeFenceLines } from '../markdownlint-helpers.js'

export const codeFenceLineLength = {
  names: ['MD117', 'code-fence-line-length'],
  description: 'Code fence lines should not exceed a maximum length',
  tags: ['code'],
  severity: 'warning',
  function: function MD117(params, onError) {
    const MAX_LINE_LENGTH = String(params.config.maxLength || 60)
    const codeFenceTokens = getCodeFenceTokens(params)
    codeFenceTokens.forEach((token) => {
      const lines = getCodeFenceLines(token)
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
            undefined, // N/A
            undefined // N/A
          )
        }
      })
    })
  },
}

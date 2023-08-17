import { addError, ellipsify } from 'markdownlint-rule-helpers'

import { getCodeFenceTokens, getCodeFenceLines } from '../helpers/utils.js'

export const codeFenceLineLength = {
  names: ['GHD001', 'code-fence-line-length'],
  description: 'Code fence lines should not exceed a maximum length',
  tags: ['code'],
  severity: 'warning',
  information: new URL('https://github.com/github/docs/blob/main/src/content-linter/README.md'),
  function: function GHD001(params, onError) {
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
            ellipsify(line),
            [1, line.length],
            null, // No fix possible
          )
        }
      })
    })
  },
}

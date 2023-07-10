import { addError } from 'markdownlint-rule-helpers'

import { getCodeFenceTokens, getCodeFenceLines } from '../markdownlint-helpers.js'

const dollarCommandRe = /^(\s*)(\$\s+)/

export const codeFenceUsesCopyDirective = {
  names: ['MD116', 'code-fences-use-copy-directive'],
  description: 'Code fence blocks should use the copy directive when no output is shown',
  tags: ['code'],
  severity: 'error',
  function: function MD116(params, onError) {
    const codeFenceTokens = getCodeFenceTokens(params)
    codeFenceTokens.forEach((token) => {
      const lines = getCodeFenceLines(token)
      let dollarsExist = false
      lines.forEach((line, index) => {
        const lineTrim = line.trim()
        if (lineTrim) {
          const match = dollarCommandRe.exec(line)
          if (match) {
            dollarsExist = true
          }
        }
      })
      if (!dollarsExist && !token.info.trim().includes('copy')) {
        addError(
          onError,
          token.lineNumber,
          'Code fence block should include the copy directive.',
          undefined,
          undefined
        )
      }
      if (dollarsExist && token.info.trim().includes('copy')) {
        addError(
          onError,
          token.lineNumber,
          'Code fence block should NOT include the copy directive.',
          undefined,
          undefined
        )
      }
    })
  },
}

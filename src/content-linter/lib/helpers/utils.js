import { addError, newLineRe } from 'markdownlint-rule-helpers'

// Adds an error object with details conditionally via the onError callback
export function addFixErrorDetail(onError, lineNumber, expected, actual, range, fixInfo) {
  addError(onError, lineNumber, `Expected: ${expected}`, ` Actual: ${actual}`, range, fixInfo)
}

export function getCodeFenceTokens(params) {
  return params.tokens.filter((t) => t.type === 'fence')
}

export function getCodeFenceLines(token) {
  return token.content.split(newLineRe)
}

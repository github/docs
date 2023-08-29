import { addError } from 'markdownlint-rule-helpers'

// Adds an error object with details conditionally via the onError callback
export function addFixErrorDetail(onError, lineNumber, expected, actual, range, fixInfo) {
  addError(onError, lineNumber, `Expected: ${expected}`, ` Actual: ${actual}`, range, fixInfo)
}

export function getRange(line, content) {
  const startColumnIndex = line.indexOf(content)
  return startColumnIndex ? [startColumnIndex + 1, content.length] : null
}

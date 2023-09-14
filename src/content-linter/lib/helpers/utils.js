import { addError } from 'markdownlint-rule-helpers'

// Adds an error object with details conditionally via the onError callback
export function addFixErrorDetail(onError, lineNumber, expected, actual, range, fixInfo) {
  addError(onError, lineNumber, `Expected: ${expected}`, ` Actual: ${actual}`, range, fixInfo)
}

export function getRange(line, content) {
  const startColumnIndex = line.indexOf(content)
  return startColumnIndex !== -1 ? [startColumnIndex + 1, content.length] : null
}

export function isStringQuoted(text) {
  // String starts with either a single or double quote
  // ends with either a single or double quote
  // and optionally ends with a question mark or exclamation point
  // because that punctuation can exist outside of the quoted string
  return /^['"].*['"][?!]?$/.test(text)
}

export function isStringPunctuated(text) {
  // String ends with punctuation of either
  // . ? ! and optionally ends with single
  // or double quotes. This also allows
  // for single or double quotes before
  // the punctuation.
  return /^.*[.?!]['"]?$/.test(text)
}

// Filters a list of tokens by token type only when they match
// a specific token type order.
// For example, if a list of tokens contains:
// [ { type: 'inline'}, { type: 'list_item_close'}, { type: 'list_item_open'},
// { type: 'paragraph_open'}, { type: 'inline'}, { type: 'paragraph_close'}]
// And if the tokenOrder being looked for is
// `tokenOrder` defined ['list_item_open', 'paragraph_open', 'inline']
// Then the return value would be the items that match that seaquence:
// Index 2-4:
// [{ type: 'list_item_open'}, { type: 'paragraph_open'}, { type: 'inline'}]
export function filterTokensByOrder(tokens, tokenOrder) {
  const matches = []

  // Get a list of token indexes that match the
  // first token (root) in the tokenOrder array
  const tokenRootIndexes = []
  tokens.forEach((token, index) => {
    if (token.type === tokenOrder[0]) {
      return tokenRootIndexes.push(index)
    }
  })

  // Loop through each root token index and check if
  // the order matches the tokenOrder array
  for (const tokenRootIndex of tokenRootIndexes) {
    for (let i = 1; i < tokenOrder.length; i++) {
      if (tokens[tokenRootIndex + i].type !== tokenOrder[i]) {
        return
      }
      if (i === tokenOrder.length - 1) {
        matches.push(...tokens.slice(tokenRootIndex, tokenRootIndex + i + 1))
      }
    }
  }
  return matches
}

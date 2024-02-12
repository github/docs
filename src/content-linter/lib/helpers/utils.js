import { addError } from 'markdownlint-rule-helpers'
import matter from 'gray-matter'

// Adds an error object with details conditionally via the onError callback
export function addFixErrorDetail(onError, lineNumber, expected, actual, range, fixInfo) {
  addError(onError, lineNumber, `Expected: ${expected}`, ` Actual: ${actual}`, range, fixInfo)
}

export function getRange(line, content) {
  if (content.length === 0) {
    // This function assumes that the content is something. If it's an
    // empty string it can never produce a valid range.
    throw new Error('invalid content (empty)')
  }
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

export function doesStringEndWithPeriod(text) {
  // String ends with punctuation of either
  // . ? ! and optionally ends with single
  // or double quotes. This also allows
  // for single or double quotes before
  // the punctuation.
  return /^.*\.['"]?$/.test(text)
}

// Filters a list of tokens by token type only when they match
// a specific token type order.
// For example, if a list of tokens contains:
//
//   [
//      { type: 'inline'},
//      { type: 'list_item_close'},
//      { type: 'list_item_open'},
//      { type: 'paragraph_open'},
//      { type: 'inline'},
//      { type: 'paragraph_close'},
//   ]
//
// And if the `tokenOrder` being looked for is:
//
//   [
//      'list_item_open',
//      'paragraph_open',
//      'inline'
//    ]
//
// Then the return value would be the items that match that seaquence:
// Index 2-4:
//   [
//      { type: 'inline'},            <-- Index 0 - NOT INCLUDED
//      { type: 'list_item_close'},   <-- Index 1 - NOT INCLUDED
//      { type: 'list_item_open'},    <-- Index 2 - INCLUDED
//      { type: 'paragraph_open'},    <-- Index 3 - INCLUDED
//      { type: 'inline'},            <-- Index 4 - INCLUDED
//      { type: 'paragraph_close'},   <-- Index 5 - NOT INCLUDED
//   ]
//
export function filterTokensByOrder(tokens, tokenOrder) {
  const matches = []

  // Get a list of token indexes that match the
  // first token (root) in the tokenOrder array
  const tokenRootIndexes = []
  const firstTokenOrderType = tokenOrder[0]
  tokens.forEach((token, index) => {
    if (token.type === firstTokenOrderType) {
      tokenRootIndexes.push(index)
    }
  })

  // Loop through each root token index and check if
  // the order matches the tokenOrder array
  for (const tokenRootIndex of tokenRootIndexes) {
    for (let i = 1; i < tokenOrder.length; i++) {
      if (tokens[tokenRootIndex + i].type !== tokenOrder[i]) {
        // This tokenRootIndex was a possible start,
        // but doesn't match the tokenOrder perfectly, so break out
        // of the inner loop before it reaches the end.
        break
      }
      if (i === tokenOrder.length - 1) {
        matches.push(...tokens.slice(tokenRootIndex, tokenRootIndex + i + 1))
      }
    }
  }
  return matches
}

export const docsDomains = ['docs.github.com', 'help.github.com', 'developer.github.com']

// Lines is an array of strings read from a
// Markdown file a split around new lines.
// This is the format we get from Markdownlint.
// Returns null if the lines do not contain
// frontmatter properties.
export function getFrontmatter(lines) {
  const fmString = lines.join('\n')
  const { data } = matter(fmString)
  // If there is no frontmatter or the frontmatter contains
  // no keys, matter will return an empty object.
  if (Object.keys(data).length === 0) return null
  return data
}

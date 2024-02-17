import { addFixErrorDetail, getRange, filterTokensByOrder } from '../helpers/utils.js'

export const listFirstWordCapitalization = {
  names: ['GHD034', 'list-first-word-capitalization'],
  description: 'First word of list item should be capitalized',
  tags: ['ul', 'ol'],
  function: (params, onError) => {
    // We're going to look for a sequence of 3 tokens. If the markdown
    // is a really small string, it might not even have that many tokens
    // in it. Can bail early.
    if (params.tokens.length < 3) return

    const inlineListItems = filterTokensByOrder(params.tokens, [
      'list_item_open',
      'paragraph_open',
      'inline',
    ]).filter((token) => token.type === 'inline')

    inlineListItems.forEach((token) => {
      // Only proceed if all of the token's children start with a text
      // node that is not empty.
      // This filters out cases where the list item is inline code, or
      // a link, or an image, etc.
      // This also avoids cases like `- **bold** text` where the first
      // child is a text node string but the text node content is empty.
      const firstWordTextNode =
        token.children.length > 0 &&
        token.children[0].type === 'text' &&
        token.children[0].content !== ''
      if (!firstWordTextNode) return

      const content = token.content.trim()
      const firstWord = content.trim().split(' ')[0]

      // If the first character in the first word is not an alphanumeric,
      // don't bother. For example `"ubunut-latest"` or `{% data ... %}`.
      if (/^[^a-z]/i.test(firstWord)) return
      // If the first letter is capitalized, it's not an error
      // And any special characters (like @) that can't be capitalized
      if (/[A-Z@]/.test(firstWord[0])) return
      // There are items that start with a number or words that contain numbers
      // e.g., x64
      if (/\d/.test(firstWord)) return
      // Catches proper nouns like macOS or openSUSE
      if (/[A-Z]/.test(firstWord.slice(1))) return

      const lineNumber = token.lineNumber
      const range = getRange(token.line, firstWord)
      addFixErrorDetail(
        onError,
        lineNumber,
        `${firstWord[0].toUpperCase()}${firstWord.slice(1)}`,
        firstWord,
        range,
        {
          lineNumber,
          editColumn: range[0],
          deleteCount: 1,
          insertText: firstWord[0].toUpperCase(),
        },
      )
    })
  },
}

// HTML also closes a comment with --!>, and treats <!--> and <!---> as empty comments.
// An unclosed <!-- doesn't match, so the text after it stays.
const HTML_COMMENT = /<!--(?:-?>|[\s\S]*?--!?>)/g

// Removing a comment joins the text on either side, and the join can form a new comment,
// so repeat until nothing changes.
// That can remove a little more than a browser would, such as a `<` right before a comment,
// but no comment survives.
export function stripHtmlComments(content: string): string {
  let previous
  do {
    previous = content
    content = content.replace(HTML_COMMENT, '')
  } while (content !== previous)

  return content.trim()
}

// Strips HTML comments, then collapses the blank lines their removal leaves behind.
export function stripHtmlCommentsAndNormalizeWhitespace(content: string): string {
  let cleaned = stripHtmlComments(content)

  // Normalize multiple consecutive blank lines to at most 2 blank lines
  cleaned = cleaned.replace(/\n{3,}/g, '\n\n')

  return cleaned.trim()
}

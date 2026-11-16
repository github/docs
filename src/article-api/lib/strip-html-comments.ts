// HTML closes comments with --> or --!>, and treats <!--> and <!---> as empty comments.
// Unclosed <!-- text stays because it does not match.
const HTML_COMMENT = /<!--(?:-?>|[\s\S]*?--!?>)/g

// Removing a comment can form another comment at the join, so repeat until nothing changes.
// This can remove a little more than a browser would, such as a < right before a comment,
// but no comment survives.
export function stripHtmlComments(content: string): string {
  let previous
  do {
    previous = content
    content = content.replace(HTML_COMMENT, '')
  } while (content !== previous)

  return content.trim()
}

export function stripHtmlCommentsAndNormalizeWhitespace(content: string): string {
  let cleaned = stripHtmlComments(content)

  // Removed comments can leave visually noisy blank-line runs.
  cleaned = cleaned.replace(/\n{3,}/g, '\n\n')

  return cleaned.trim()
}

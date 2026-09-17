// Removes single-line HTML comments such as <!-- markdownlint-disable GHD053 -->.
export function stripHtmlComments(content: string): string {
  return content.replace(/<!--.*?-->/g, '').trim()
}

// Strips HTML comments, then collapses the blank lines their removal leaves behind.
export function stripHtmlCommentsAndNormalizeWhitespace(content: string): string {
  let cleaned = stripHtmlComments(content)

  // Normalize multiple consecutive blank lines to at most 2 blank lines
  cleaned = cleaned.replace(/\n{3,}/g, '\n\n')

  return cleaned.trim()
}

/**
 * Strips HTML comments from markdown content.
 * Removes single-line HTML comments like <!-- markdownlint-disable GHD053 -->
 * while preserving other content.
 *
 * @param content - The markdown content to process
 * @returns The content with HTML comments removed
 */
export function stripHtmlComments(content: string): string {
  // Remove single-line HTML comments (<!-- ... -->)
  // This matches comments that are on their own line or inline
  return content.replace(/<!--.*?-->/g, '').trim()
}

/**
 * Strips HTML comments and cleans up extra blank lines.
 * Useful for cleaning up rendered markdown content where HTML comments
 * were on separate lines and their removal creates gaps.
 *
 * @param content - The markdown content to process
 * @returns The content with HTML comments removed and blank lines normalized
 */
export function stripHtmlCommentsAndNormalizeWhitespace(content: string): string {
  // Remove HTML comments
  let cleaned = stripHtmlComments(content)

  // Normalize multiple consecutive blank lines to at most 2 blank lines
  cleaned = cleaned.replace(/\n{3,}/g, '\n\n')

  return cleaned.trim()
}

// Centralizes cleanup for transformer output returned by .md URLs and Accept: text/markdown.
// The article-body API uses the same path, so every transformer gets the same rules.
// Empty conditional sections often leave visually noisy blank lines in markdown output.
export function collapseBlankLines(content: string): string {
  return content.replace(/\n{3,}/g, '\n\n')
}

export function normalizeRenderedMarkdown(content: string): string {
  return collapseBlankLines(content)
}

// File paths come from untrusted fork PRs, so render each one as an inert code span.
export function formatFileList(files: string[]): string {
  return files.map((file) => `\n - ${toCodeSpan(String(file))}`).join('')
}

function toCodeSpan(text: string): string {
  // A line break would end the list item and let the rest render as Markdown.
  const singleLine = text.replace(/[\r\n]+/g, ' ')
  const longestBacktickRun = Math.max(0, ...(singleLine.match(/`+/g) || []).map((r) => r.length))
  const fence = '`'.repeat(longestBacktickRun + 1)
  const padding = longestBacktickRun > 0 ? ' ' : ''
  return `${fence}${padding}${singleLine}${padding}${fence}`
}

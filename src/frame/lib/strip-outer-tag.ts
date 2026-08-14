// Remove the outermost tag from an HTML string, preserving inner content.
// E.g. `<p>Hello <strong>world</strong></p>` → `Hello <strong>world</strong>`
// Only unwraps when the string is exactly one element with matching open/close tags.
// Returns the original string unchanged for multiple top-level elements or malformed HTML.
export function stripOuterTag(html: string): string {
  if (!html) return ''

  // Extract opening tag and tag name
  const openMatch = html.match(/^<([a-z][a-z0-9]*)\b[^>]*>/i)
  if (!openMatch) return html

  const tagName = openMatch[1]
  const closeTag = `</${tagName}>`

  // Must end with matching close tag
  if (html.slice(-closeTag.length).toLowerCase() !== closeTag.toLowerCase()) return html

  // Verify single top-level element by checking that same-name tags
  // in the inner content are balanced. If depth goes negative, there
  // are sibling elements (e.g. `<p>a</p><p>b</p>`).
  const inner = html.slice(openMatch[0].length, html.length - closeTag.length)
  const tagRe = new RegExp(`<(/?)(${tagName})\\b[^>]*>`, 'gi')
  let depth = 0
  let m
  while ((m = tagRe.exec(inner)) !== null) {
    depth += m[1] === '/' ? -1 : 1
    if (depth < 0) return html
  }
  if (depth !== 0) return html

  return inner
}

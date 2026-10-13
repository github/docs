// Unwrap one matching outer tag unless same-name inner tags reveal a sibling.
// Other malformed inner HTML can still unwrap.
// Example: <p>Hello <strong>world</strong></p> becomes Hello <strong>world</strong>.
export function stripOuterTag(html: string): string {
  if (!html) return ''

  const openMatch = html.match(/^<([a-z][a-z0-9]*)\b[^>]*>/i)
  if (!openMatch) return html

  const tagName = openMatch[1]
  const closeTag = `</${tagName}>`

  // The outer element must end with its matching close tag.
  if (html.slice(-closeTag.length).toLowerCase() !== closeTag.toLowerCase()) return html

  // Balanced same-name inner tags prove the outer element has no sibling.
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

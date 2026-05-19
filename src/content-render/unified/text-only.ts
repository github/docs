import { decode } from 'html-entities'

// Strip all HTML tags, leaving only text content.
// Handles nested tags like `<p>text with <code>code</code></p>`.
const TAG_RE = /<[^>]+>/g

// Given a piece of HTML return it without HTML. E.g.
// `<p>Foo &amp; bar</p>` becomes `Foo & bar`
// and `A <a href="">link</a> and <code>code</code>` becomes `A link and code`.
//
// This operates on trusted rendered HTML from our own render pipeline,
// not user-supplied input. The output is used for plain-text display only
// (mini-TOC items, search descriptions, etc.).
export function fastTextOnly(html: string): string {
  if (!html) return ''
  // Fast path: simple `<p>text</p>` with no inner tags
  if (html.startsWith('<p>') && html.endsWith('</p>')) {
    const middle = html.slice(3, -4)
    if (!middle.includes('<')) return decode(middle.trim())
  }
  // Strip all tags and decode entities.
  return decode(html.replace(TAG_RE, '').trim()) // lgtm[js/incomplete-multi-character-sanitization]
}

import { decode } from 'html-entities'

const TAG_RE = /<[^>]+>/g

// Operates on trusted rendered HTML from our pipeline. The output feeds
// plain-text mini-TOC items and search descriptions.
// <p>Foo &amp; bar</p> becomes Foo & bar.
// A <a href="">link</a> and <code>code</code> becomes A link and code.
export function fastTextOnly(html: string): string {
  if (!html) return ''
  // Fast path avoids regex work for a plain paragraph with no inner tags.
  if (html.startsWith('<p>') && html.endsWith('</p>')) {
    const middle = html.slice(3, -4)
    if (!middle.includes('<')) return decode(middle.trim())
  }
  return decode(html.replace(TAG_RE, '').trim()) // lgtm[js/incomplete-multi-character-sanitization]
}

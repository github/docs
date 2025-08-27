import cheerio from 'cheerio'
import { decode } from 'html-entities'

// Given a piece of HTML return it without HTML. E.g.
// `<p>Foo &amp; bar</p>` becomes `Foo & bar`
// and `A <a href="">link</a> and <code>code</code>` becomes `A link and code`.
// Take advantage of the subtle fact that a lot of the times, the html value
// we get here is a single line that starts with `<p>` and ends with `</p>`
// and contains no longer HTML tags.
export function fastTextOnly(html) {
  if (!html) return ''
  if (html.startsWith('<p>') && html.endsWith('</p>')) {
    const middle = html.slice(3, -4)
    if (!middle.includes('<')) return decode(middle.trim())
  }
  return cheerio.load(html, { xmlMode: true }).text().trim()
}

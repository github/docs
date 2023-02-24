import liquid from './liquid.js'
import cheerio from 'cheerio'
import { decode } from 'html-entities'
import stripHtmlComments from 'strip-html-comments'
import createProcessor from './create-processor.js'

// used below to remove extra newlines in TOC lists
const endLine = '</a>\r?\n'
const blankLine = '\\s*?[\r\n]*'
const startNextLine = '[^\\S\r\n]*?[-\\*] <a'
const blankLineInList = new RegExp(`(${endLine})${blankLine}(${startNextLine})`, 'mg')

// parse multiple times because some templates contain more templates. :]
async function renderContent(template = '', context = {}, options = {}) {
  // If called with a falsy template, it can't ever become something
  // when rendered. We can exit early to save some pointless work.
  if (!template) return template
  try {
    // remove any newlines that precede html comments, then remove the comments
    if (template) {
      template = stripHtmlComments(template.replace(/\n<!--/g, '<!--'))
    }

    template = await liquid.parseAndRender(template, context)

    // this workaround loses syntax highlighting but correctly handles tags like <em> and entities like &lt;
    template = template.replace(
      /``` ?shell\r?\n\s*?(\S[\s\S]*?)\r?\n.*?```/gm,
      '<pre><code class="hljs language-shell">$1</code></pre>'
    )

    // clean up empty lines in TOC lists left by unrendered list items (due to productVersions)
    // for example, remove the blank line here:
    //    - <a>foo</a>
    //
    //    - <a>bar</a>
    if (template.includes('</a>')) {
      template = template.replace(blankLineInList, '$1$2')
    }

    // this removes any extra newlines left by (now resolved) liquid
    // statements so that extra space doesn't mess with list numbering
    template = template.replace(/(\r?\n){3}/g, '\n\n')

    const processor = createProcessor(context)
    const vFile = await processor.process(template)
    let html = vFile.toString()

    if (options.textOnly) {
      html = fastTextOnly(html)
    }

    return html.trim()
  } catch (error) {
    if (options.filename) {
      console.error(`renderContent failed on file: ${options.filename}`)
    }
    throw error
  }
}

// Given a piece of HTML return it without HTML. E.g.
// `<p>Foo &amp; bar</p>` becomes `Foo & bar`
// and `A <a href="">link</a> and <code>code</code>` becomes `A link and code`.
// Take advantage of the subtle fact that a lot of the times, the html value
// we get here is a single line that starts with `<p>` and ends with `</p>`
// and contains no longer HTML tags.
function fastTextOnly(html) {
  if (!html) return ''
  if (html.startsWith('<p>') && html.endsWith('</p>')) {
    const middle = html.slice(3, -4)
    if (!middle.includes('<')) return decode(middle.trim())
  }
  return cheerio.load(html, { xmlMode: true }).text().trim()
}

renderContent.liquid = liquid

export default renderContent

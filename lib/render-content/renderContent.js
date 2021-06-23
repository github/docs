const liquid = require('./liquid')
const cheerio = require('cheerio')
const Entities = require('html-entities').XmlEntities
const entities = new Entities()
const stripHtmlComments = require('strip-html-comments')
const createProcessor = require('./create-processor')

// used below to remove extra newlines in TOC lists
const endLine = '</a>\r?\n'
const blankLine = '\\s*?[\r\n]*'
const startNextLine = '[^\\S\r\n]*?[-\\*] <a'
const blankLineInList = new RegExp(
  `(${endLine})${blankLine}(${startNextLine})`,
  'mg'
)

// used below to remove unwanted newlines from inline tags in tables
const inlineTags = ['a', 'code', 'em']
const inlineTagString = `(?:${inlineTags.join('|')})`
const inlineTagRegex = new RegExp(`\n?(</?${inlineTagString}>?)\n?`, 'gm')

// parse multiple times because some templates contain more templates. :]
module.exports = async function renderContent (
  template = '',
  context = {},
  options = {}
) {
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

    // Remove unwanted newlines (which appear as spaces) from inline tags inside tables
    if (html.includes('<table>')) html = removeNewlinesFromInlineTags(html)

    if (options.textOnly) {
      html = cheerio
        .load(html)
        .text()
        .trim()
    }

    if (options.cheerioObject) {
      return cheerio.load(html, { xmlMode: true })
    }

    if (options.encodeEntities) html = entities.encode(html)

    return html.trim()
  } catch (error) {
    if (options.filename) {
      console.error(`renderContent failed on file: ${options.filename}`)
    }
    throw error
  }
}

function removeNewlinesFromInlineTags (html) {
  const $ = cheerio.load(html)

  // see https://cheerio.js.org/#html-htmlstring-
  $(inlineTags.join(','))
    .parents('td')
    .get()
    .map(tag =>
      $(tag).html(
        $(tag)
          .html()
          .replace(inlineTagRegex, '$1')
      )
    )

  return $('body').html()
}

Object.assign(module.exports, {
  liquid
})

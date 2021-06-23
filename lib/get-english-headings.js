const astFromMarkdown = require('mdast-util-from-markdown')
const toString = require('mdast-util-to-string')
const visit = require('unist-util-visit')
const findPage = require('./find-page')

// for any translated page, first get corresponding English markdown
// then get the headings on both the translated and English pageMap
// finally, create a map of translation:English for all headings on the page
module.exports = function getEnglishHeadings (page, context) {
  // Special handling for glossaries, because their headings are
  // generated programatically.
  if (page.relativePath.endsWith('/github-glossary.md')) {
    // Return an object of `{ localized-term: english-slug }`
    const languageGlossary = context.site.data.glossaries.external
    return languageGlossary.reduce((prev, curr) => {
      prev[curr.term] = curr.slug
      return prev
    }, {})
  }

  const translatedHeadings = getHeadings(page.markdown)
  if (!translatedHeadings.length) return

  const englishPage = findPage(`/en/${page.relativePath.replace(/.md$/, '')}`, context.pages, context.redirects)
  if (!englishPage) return

  // FIX  there may be bugs if English headings are updated before Crowdin syncs up :/
  const englishHeadings = getHeadings(englishPage.markdown)
  if (!englishHeadings.length) return

  // return a map from translation:English
  return Object.assign(...translatedHeadings.map((k, i) => ({
    [k]: englishHeadings[i]
  })))
}

function getHeadings (markdown) {
  const ast = astFromMarkdown(markdown)
  const headings = []

  visit(ast, node => {
    if (node.type !== 'heading') return
    if (![2, 3, 4].includes(node.depth)) return
    headings.push(toString(node))
  })

  return headings
}

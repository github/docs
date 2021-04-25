const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const { liquid } = require('../../../lib/render-content')
const getMiniTocItems = require('../../../lib/get-mini-toc-items')
const rewriteLocalLinks = require('../../../lib/rewrite-local-links')
const includes = path.join(process.cwd(), 'includes')
const inputObjectIncludeFile = fs.readFileSync(path.join(includes, 'graphql-input-object.html'), 'utf8')

module.exports = async function prerenderInputObjects (context) {
  const inputObjectsArray = []

  // render the graphql-object.html layout for every object
  for (const inputObject of context.graphql.schemaForCurrentVersion.inputObjects) {
    context.item = inputObject
    const inputObjectHtml = await liquid.parseAndRender(inputObjectIncludeFile, context)
    const $ = cheerio.load(inputObjectHtml, { xmlMode: true })
    rewriteLocalLinks($, context.currentVersion, context.currentLanguage)
    const htmlWithVersionedLinks = $.html()
    inputObjectsArray.push(htmlWithVersionedLinks)
  }

  const inputObjectsHtml = inputObjectsArray.join('\n')

  return {
    html: inputObjectsHtml,
    miniToc: getMiniTocItems(inputObjectsHtml)
  }
}

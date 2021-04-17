const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const { liquid } = require('../../../lib/render-content')
const getMiniTocItems = require('../../../lib/get-mini-toc-items')
const rewriteLocalLinks = require('../../../lib/rewrite-local-links')
const includes = path.join(process.cwd(), 'includes')
const objectIncludeFile = fs.readFileSync(path.join(includes, 'graphql-object.html'), 'utf8')

module.exports = async function prerenderObjects (context) {
  const objectsArray = []

  // render the graphql-object.html layout for every object
  for (const object of context.graphql.schemaForCurrentVersion.objects) {
    context.item = object
    const objectHtml = await liquid.parseAndRender(objectIncludeFile, context)
    const $ = cheerio.load(objectHtml, { xmlMode: true })
    rewriteLocalLinks($, context.currentVersion, context.currentLanguage)
    const htmlWithVersionedLinks = $.html()
    objectsArray.push(htmlWithVersionedLinks)
  }

  const objectsHtml = objectsArray.join('\n')

  return {
    html: objectsHtml,
    miniToc: getMiniTocItems(objectsHtml)
  }
}

const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const { liquid } = require('../../../lib/render-content')
const getMiniTocItems = require('../../../lib/get-mini-toc-items')
const rewriteLocalLinks = require('../../../lib/rewrite-local-links')
const includes = path.join(process.cwd(), 'includes')
const inputObjectIncludeFile = fs.readFileSync(path.join(includes, 'graphql-input-object.html'), 'utf8')
// TODO need to localize
const currentLanguage = 'en'

module.exports = async function prerenderInputObjects (schemaJsonPerVersion, version) {
  const site = await require('../../../lib/site-data')()

  // create a bare minimum context for rendering the graphql-object.html layout
  const context = {
    currentLanguage,
    site: site[currentLanguage].site,
    graphql: { schemaForCurrentVersion: schemaJsonPerVersion }
  }

  const inputObjectsArray = []

  // render the graphql-object.html layout for every object
  for (const inputObject of schemaJsonPerVersion.inputObjects) {
    context.item = inputObject
    const inputObjectHtml = await liquid.parseAndRender(inputObjectIncludeFile, context)
    const $ = cheerio.load(inputObjectHtml, { xmlMode: true })
    rewriteLocalLinks($, version, currentLanguage)
    const htmlWithVersionedLinks = $.html()
    inputObjectsArray.push(htmlWithVersionedLinks)
  }

  const inputObjectsHtml = inputObjectsArray.join('\n')

  return {
    html: inputObjectsHtml,
    miniToc: getMiniTocItems(inputObjectsHtml)
  }
}

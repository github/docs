const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const { liquid } = require('../../../lib/render-content')
const getMiniTocItems = require('../../../lib/get-mini-toc-items')
const rewriteLocalLinks = require('../../../lib/rewrite-local-links')
const includes = path.join(process.cwd(), 'includes')
const objectIncludeFile = fs.readFileSync(path.join(includes, 'graphql-object.html'), 'utf8')
// TODO need to localize
const currentLanguage = 'en'

module.exports = async function prerenderObjects (schemaJsonPerVersion, version) {
  const site = await require('../../../lib/site-data')()

  // create a bare minimum context for rendering the graphql-object.html layout
  const context = {
    currentLanguage,
    site: site[currentLanguage].site,
    graphql: { schemaForCurrentVersion: schemaJsonPerVersion }
  }

  const objectsArray = []

  // render the graphql-object.html layout for every object
  for (const object of schemaJsonPerVersion.objects) {
    context.item = object
    const objectHtml = await liquid.parseAndRender(objectIncludeFile, context)
    const $ = cheerio.load(objectHtml, { xmlMode: true })
    rewriteLocalLinks($, version, currentLanguage)
    const htmlWithVersionedLinks = $.html()
    objectsArray.push(htmlWithVersionedLinks)
  }

  const objectsHtml = objectsArray.join('\n')

  return {
    html: objectsHtml,
    miniToc: getMiniTocItems(objectsHtml)
  }
}

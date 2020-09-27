const fs = require('fs')
const path = require('path')
const { liquid } = require('../../../lib/render-content')
const getMiniTocItems = require('../../../lib/get-mini-toc-items')
const includes = path.join(process.cwd(), 'includes')
const objectIncludeFile = fs.readFileSync(path.join(includes, 'graphql-object.html'), 'utf8')
// TODO need to localize
const currentLanguage = 'en'

module.exports = async function prerenderObjects (schemaJsonPerVersion) {
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
    objectsArray.push(objectHtml)
  }

  const objectsHtml = objectsArray.join('\n')

  return {
    html: objectsHtml,
    miniToc: getMiniTocItems(objectsHtml)
  }
}

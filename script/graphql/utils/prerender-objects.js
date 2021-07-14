#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import cheerio from 'cheerio'
import { liquid } from '../../../lib/render-content/index.js'
import getMiniTocItems from '../../../lib/get-mini-toc-items.js'
import rewriteLocalLinks from '../../../lib/rewrite-local-links.js'
const includes = path.join(process.cwd(), 'includes')
const objectIncludeFile = fs.readFileSync(path.join(includes, 'graphql-object.html'), 'utf8')

export default async function prerenderObjects(context) {
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
    miniToc: getMiniTocItems(objectsHtml),
  }
}

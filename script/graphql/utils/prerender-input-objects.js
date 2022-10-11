#!/usr/bin/env node
import fs from 'fs/promises'
import path from 'path'
import cheerio from 'cheerio'
import { liquid } from '../../../lib/render-content/index.js'
import getMiniTocItems from '../../../lib/get-mini-toc-items.js'
import rewriteLocalLinks from '../../../lib/rewrite-local-links.js'
const includes = path.join(process.cwd(), 'includes')
const inputObjectIncludeFile = await fs.readFile(
  path.join(includes, 'graphql-input-object.html'),
  'utf8'
)

export default async function prerenderInputObjects(context) {
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
    miniToc: getMiniTocItems(inputObjectsHtml),
  }
}

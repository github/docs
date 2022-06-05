#!/usr/bin/env node
import fs from 'fs/promises'
import path from 'path'
import cheerio from 'cheerio'
import { liquid } from '../../../lib/render-content/index.js'
import getMiniTocItems from '../../../lib/get-mini-toc-items.js'
import rewriteLocalLinks from '../../../lib/rewrite-local-links.js'
const includes = path.join(process.cwd(), 'includes')

export default async function prerender(context, type, includeFilename) {
  const htmlArray = []

  const includeFile = await fs.readFile(path.join(includes, includeFilename), 'utf8')
  // render the layout for every object
  for (const item of context.graphql.schemaForCurrentVersion[type]) {
    context.item = item
    const itemHtml = await liquid.parseAndRender(includeFile, context)
    const $ = cheerio.load(itemHtml, { xmlMode: true })
    rewriteLocalLinks($, context.currentVersion, context.currentLanguage)
    const htmlWithVersionedLinks = $.html()
    htmlArray.push(htmlWithVersionedLinks)
  }

  const html = htmlArray.join('\n')

  return {
    html,
    miniToc: getMiniTocItems(html),
  }
}

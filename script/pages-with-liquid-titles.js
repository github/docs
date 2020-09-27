#!/usr/bin/env node

// [start-readme]
//
// This is a temporary script to visualize which pages have liquid
// (and conditionals) in their `title` frontmatter
//
// [end-readme]

const loadPages = require('../lib/pages')
const patterns = require('../lib/patterns')

async function main () {
  const pages = await loadPages()
  const liquidPages = pages
    .filter(page => page.title && patterns.hasLiquid.test(page.title))
    .map(({ relativePath, title }) => {
      return { relativePath, title }
    })

  console.log(`\n\n${liquidPages.length} pages with liquid titles`)
  console.log(JSON.stringify(liquidPages, null, 2))

  const conditionalPages = liquidPages
    .filter(page => page.title.includes('{% if'))

  console.log(`\n\n\n\n${conditionalPages.length} pages with conditionals in their titles`)
  console.log(JSON.stringify(conditionalPages, null, 2))
}

main()

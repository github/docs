#!/usr/bin/env node
import { loadPages } from '#src/frame/lib/page-data.js'

export default async function findIndexablePages(match = '') {
  const allPages = await loadPages()
  const indexablePages = allPages
    // exclude hidden pages
    .filter((page) => !page.hidden)
    // exclude pages that are part of WIP or hidden products
    .filter((page) => !page.parentProduct || !page.parentProduct.wip || page.parentProduct.hidden)
    // exclude absolute home page (e.g. /en or /ja)
    .filter((page) => page.relativePath !== 'index.md')
    .filter((page) => !match || page.relativePath.includes(match))

  console.log('total pages', allPages.length)
  console.log('indexable pages', indexablePages.length)
  return indexablePages
}

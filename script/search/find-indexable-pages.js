const { loadPages } = require('../../lib/pages')

module.exports = async function findIndexablePages () {
  const allPages = await loadPages()
  const indexablePages = allPages
    // exclude hidden pages
    .filter(page => !page.hidden)
    // exclude pages that are part of WIP or hidden products
    .filter(page => !page.parentProduct || !page.parentProduct.wip || page.parentProduct.hidden)
    // exclude index homepages
    .filter(page => !page.relativePath.endsWith('index.md'))

  console.log('total pages', allPages.length)
  console.log('indexable pages', indexablePages.length)
  return indexablePages
}

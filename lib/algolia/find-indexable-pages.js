const loadPages = require('../pages')

module.exports = async function findIndexablePages () {
  const allPages = await loadPages()
  const indexablePages = allPages
    // exclude pages that are part of WIP products
    .filter(page => !page.parentProduct || !page.parentProduct.wip)
    // exclude index homepages
    .filter(page => !page.relativePath.endsWith('index.md'))

  console.log('total pages', allPages.length)
  console.log('indexable pages', indexablePages.length)
  return indexablePages
}

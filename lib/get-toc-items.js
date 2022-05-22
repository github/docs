const { productMap } = require('./all-products')
const productTOCs = Object.values(productMap)
  .filter(product => !product.external)
  .map(product => product.toc.replace('content/', ''))

const linkString = /{% [^}]*?link.*? \/(.*?) ?%}/m
const linksArray = new RegExp(linkString.source, 'gm')

// return an array of objects like { type: 'category|maptopic|article', href: 'path' }
module.exports = function getTocItems (page) {
  // only process product and category tocs
  if (!page.relativePath.endsWith('index.md')) return
  if (page.relativePath === 'index.md') return

  // ignore content above Table of Contents heading
  const pageContent = page.markdown.replace(/[\s\S]*?# Table of contents\n/im, '')

  // find array of TOC link strings
  const rawItems = pageContent.match(linksArray)

  // return an empty array if this is a localized page
  if (!rawItems) {
    return []
  }

  return rawItems.map(item => {
    const tocItem = {}

    // a product's toc items are always categories
    // whereas a category's toc items can be either maptopics or articles
    tocItem.type = productTOCs.includes(page.relativePath)
      ? 'category'
      : item.includes('topic_') ? 'maptopic' : 'article'

    tocItem.href = item.match(linkString)[1]

    return tocItem
  })
}

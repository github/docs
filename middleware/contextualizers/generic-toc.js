const findPageInSiteTree = require('../../lib/find-page-in-site-tree')

// This module adds either flatTocItems or nestedTocItems to the context object for
// product, categorie, and map topic TOCs that don't have other layouts specified.
// They are rendered by includes/generic-toc-flat.html or inclueds/generic-toc-nested.html.
module.exports = async function genericToc (req, res, next) {
  if (!req.context.page) return next()
  if (req.context.currentLayoutName !== 'default') return next()
  // This middleware can only run on product, category, and map topics.
  if (req.context.page.documentType === 'homepage' || req.context.page.documentType === 'article') return next()

  // This one product TOC is weird.
  const isOneOffProductToc = req.context.page.relativePath === 'github/index.md'

  // There are different types of TOC depending on the document type.
  const tocTypes = {
    product: 'flat',
    category: 'nested',
    mapTopic: 'flat'
  }

  // Find the current TOC type based on the current document type.
  const currentTocType = tocTypes[req.context.page.documentType]

  // Find the part of the site tree that corresponds to the current path.
  const treePage = findPageInSiteTree(req.context.currentProductTree, req.path)

  // Conditionally run getTocItems() recursively.
  let isRecursive

  // Get an array of child links with intros and add it to the context object.
  if (currentTocType === 'flat' && !isOneOffProductToc) {
    isRecursive = false
    req.context.flatTocItems = await getTocItems(treePage.childPages, isRecursive)
  }

  // Get an array of child map topics and their child articles and add it to the context object.
  if (currentTocType === 'nested' || isOneOffProductToc) {
    isRecursive = !isOneOffProductToc
    req.context.nestedTocItems = await getTocItems(treePage.childPages, isRecursive)
  }

  return next()
}

async function getTocItems (pagesArray, isRecursive) {
  return await Promise.all(pagesArray.map(async (child) => {
    return {
      title: child.renderedFullTitle,
      fullPath: child.href,
      intro: child.renderedIntro,
      childTocItems: isRecursive && child.childPages ? getTocItems(child.childPages, isRecursive) : null
    }
  }))
}

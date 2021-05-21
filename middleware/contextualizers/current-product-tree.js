const findPageInSiteTree = require('../../lib/find-page-in-site-tree')

// This module adds currentProductTree to the context object for use in layouts.
module.exports = function currentProductTree (req, res, next) {
  if (!req.context.page) return next()
  if (req.context.page.documentType === 'homepage') return next()

  const currentRootTree = req.context.siteTree[req.context.currentLanguage][req.context.currentVersion]
  const currentProductPath = `/${req.context.currentLanguage}/${req.context.currentProduct}`
  const currentProductTree = findPageInSiteTree(currentRootTree, currentProductPath)

  req.context.currentProductTree = currentProductTree

  return next()
}

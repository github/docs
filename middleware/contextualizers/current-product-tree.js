const path = require('path')
const findPageInSiteTree = require('../../lib/find-page-in-site-tree')
const removeFPTFromPath = require('../../lib/remove-fpt-from-path')

// This module adds currentProductTree to the context object for use in layouts.
module.exports = function currentProductTree (req, res, next) {
  if (!req.context.page) return next()
  if (req.context.page.documentType === 'homepage') return next()

  // We need this so we can fall back to English if localized pages are out of sync.
  req.context.currentEnglishTree = req.context.siteTree.en[req.context.currentVersion]

  const currentRootTree = req.context.siteTree[req.context.currentLanguage][req.context.currentVersion]
  const currentProductPath = removeFPTFromPath(path.posix.join('/', req.context.currentLanguage, req.context.currentVersion, req.context.currentProduct))
  const currentProductTree = findPageInSiteTree(currentRootTree, req.context.currentEnglishTree, currentProductPath)

  req.context.currentProductTree = currentProductTree

  return next()
}

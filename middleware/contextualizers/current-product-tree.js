module.exports = function currentProductTree (req, res, next) {
  if (!req.context.page) return next()
  if (req.context.page.documentType === 'homepage') return next()

  const currentSiteTree = req.context.siteTree[req.context.currentLanguage][req.context.currentVersion]

  req.context.currentProductTree = currentSiteTree.childPages.find(page => req.context.currentPath.startsWith(page.href))

  return next()
}

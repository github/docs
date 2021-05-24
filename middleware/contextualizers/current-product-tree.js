module.exports = function currentProductTree (req, res, next) {
  if (!req.context.page) return next()
  if (req.context.page.documentType === 'homepage') return next()

  const currentSiteTree = req.context.siteTree[req.context.currentLanguage][req.context.currentVersion]

  req.context.currentProductTree = currentSiteTree.childPages.find(page => {
    // Find a product path that matches at least an initial part of the current path
    const regex = new RegExp(`^${page.href}($|/)`, 'm')
    return regex.test(req.context.currentPath)
  })

  return next()
}

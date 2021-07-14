// This middleware uses the request path to find a page in the preloaded context.pages object

module.exports = async function findPage (req, res, next) {
  let page = req.context.pages[req.pagePath]

  // if this is a localized request that can't be found, try finding an English variant
  if (!page && req.language !== 'en') {
    const englishPath = req.pagePath.replace(new RegExp(`^/${req.language}`), '/en')
    // NOTE the fallback page will have page.languageCode = 'en'
    page = req.context.pages[englishPath]
  }

  if (page) {
    req.context.page = page
    req.context.page.version = req.context.currentVersion
  }

  return next()
}

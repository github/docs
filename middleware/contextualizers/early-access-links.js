const { uniq } = require('lodash')

module.exports = function earlyAccessContext (req, res, next) {
  if (process.env.NODE_ENV === 'production') {
    return next(404)
  }

  // Get a list of all hidden pages per version
  const earlyAccessPageLinks = uniq(Object.values(req.context.pages)
    .filter(page => page.hidden && page.relativePath.startsWith('early-access') && page.relativePath !== 'early-access/index.md')
    .map(page => page.permalinks)
    .flat())
    // Get links for the current version
    .filter(permalink => req.context.currentVersion === permalink.pageVersion)
    .sort()
    // Create Markdown links
    .map(permalink => `- [${permalink.title}](${permalink.href})`)

  // Add to the rendering context
  // This is only used in the separate EA repo on local development
  req.context.earlyAccessPageLinks = earlyAccessPageLinks.length
    ? earlyAccessPageLinks.join('\n')
    : '_None for this version!_'

  return next()
}

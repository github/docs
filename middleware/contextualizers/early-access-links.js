const { uniq } = require('lodash')

module.exports = function earlyAccessContext (req, res, next) {
  if (process.env.NODE_ENV === 'production') {
    return next(404)
  }

  // Get a list of all hidden pages per version
  const earlyAccessPageLinks = uniq(Object.values(req.context.pages)
    .filter(page => page.hidden)
    // Do not include early access landing page
    .filter(page => page.relativePath !== 'early-access/index.md')
    // Create Markdown links
    .map(page => {
      return page.permalinks.map(permalink => `- [${permalink.title}](${permalink.href})`)
    })
    .flat())
    // Get links for the current version
    .filter(link => link.includes(req.context.currentVersion))
    .sort()

  // Add to the rendering context
  // This is only used in the separate EA repo on local development
  req.context.earlyAccessPageLinks = earlyAccessPageLinks.length
    ? earlyAccessPageLinks.join('\n')
    : '_None for this version!_'

  return next()
}

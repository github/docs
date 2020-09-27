const { chain } = require('lodash')
let paths

// This middleware finds all pages with `hidden: true` frontmatter
// and responds with a JSON array of all requests paths (and redirects) that lead to those pages.

// Requesting this path from EARLY_ACCESS_HOSTNAME will respond with an array of Early Access paths.
// Requesting this path from docs.github.com (production) will respond with an empty array (no Early Access paths).

module.exports = async (req, res, next) => {
  if (req.path !== '/early-access-paths.json') return next()

  if (
    !req.headers ||
    !req.headers['early-access-shared-secret'] ||
    req.headers['early-access-shared-secret'] !== process.env.EARLY_ACCESS_SHARED_SECRET
  ) {
    return res.status(401).send({ error: '401 Unauthorized' })
  }

  paths = paths || chain(req.context.pages)
    .filter(page => page.hidden && page.languageCode === 'en')
    .map(page => {
      const permalinks = page.permalinks.map(permalink => permalink.href)
      const redirects = Object.keys(page.redirects)
      return permalinks.concat(redirects)
    })
    .flatten()
    .uniq()
    .value()

  return res.json(paths)
}

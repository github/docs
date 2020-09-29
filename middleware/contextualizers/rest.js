const rest = require('../../lib/rest')
const { getVersionedPathWithLanguage } = require('../../lib/path-utils')
const { getOldVersionFromNewVersion } = require('../../lib/old-versions-utils')

module.exports = async function (req, res, next) {
  req.context.rest = rest

  // TODO need to update this to the new versions in coordination with the updater scripts
  const currentOldVersion = getOldVersionFromNewVersion(req.context.currentVersion)

  // link to include in `Works with GitHub Apps` notes
  // e.g. /ja/rest/reference/apps or /en/enterprise/2.20/user/rest/reference/apps
  req.context.restGitHubAppsLink = getVersionedPathWithLanguage(
    '/developers/apps',
    req.context.currentVersion,
    req.context.currentLanguage
  )

  // ignore requests to non-REST reference paths
  if (!req.path.includes('rest/reference')) return next()

  // e.g. the `activity` from `/en/rest/reference/activity#events`
  const category = req.path
    .split('rest/reference')[1]
    .replace(/^\//, '') // remove leading slash
    .split('/')[0]

  // ignore empty strings or bare `/`
  if (!category || category.length < 2) return next()

  const operationsForCurrentProduct = req.context.rest.operations[currentOldVersion] || []

  // find all operations with a category matching the current path
  req.context.currentRestOperations = operationsForCurrentProduct.filter(operation => operation.category === category)

  return next()
}

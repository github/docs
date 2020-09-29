const previews = require('../../lib/graphql/static/previews')
const upcomingChanges = require('../../lib/graphql/static/upcoming-changes')
const changelog = require('../../lib/graphql/static/changelog')
const prerenderedObjects = require('../../lib/graphql/static/prerendered-objects')
const { getOldVersionFromNewVersion } = require('../../lib/old-versions-utils')

// TODO do we need to support staging? https://graphql-stage.github.com/explorer
const explorerUrl = process.env.NODE_ENV === 'production'
  ? 'https://graphql.github.com/explorer'
  : 'http://localhost:3000'

module.exports = async (req, res, next) => {
  // ignore requests to non-GraphQL reference paths
  if (!req.path.includes('/graphql/')) return next()

  // TODO need to update this to the new versions in coordination with the updater scripts
  const currentOldVersion = getOldVersionFromNewVersion(req.context.currentVersion)

  req.context.graphql = {
    schemaForCurrentVersion: require(`../../lib/graphql/static/schema-${currentOldVersion}`),
    previewsForCurrentVersion: previews[currentOldVersion],
    upcomingChangesForCurrentVersion: upcomingChanges[currentOldVersion],
    prerenderedObjectsForCurrentVersion: prerenderedObjects[currentOldVersion],
    explorerUrl,
    changelog
  }

  return next()
}

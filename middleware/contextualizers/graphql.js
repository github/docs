const previews = require('../../lib/graphql/static/previews')
const upcomingChanges = require('../../lib/graphql/static/upcoming-changes')
const changelog = require('../../lib/graphql/static/changelog')
const prerenderedObjects = require('../../lib/graphql/static/prerendered-objects')
const allVersions = require('../../lib/all-versions')

const explorerUrl = process.env.NODE_ENV === 'production'
  ? 'https://graphql.github.com/explorer'
  : 'http://localhost:3000'

module.exports = function graphqlContext (req, res, next) {
  const currentVersionObj = allVersions[req.context.currentVersion]
  // ignore requests to non-GraphQL reference paths
  // and to versions that don't exist
  if (!req.path.includes('/graphql/') || !currentVersionObj) {
    return next()
  }
  // Get the relevant name of the GraphQL schema files for the current version
  // For example, free-pro-team@latest corresponds to dotcom,
  // enterprise-server@2.22 corresponds to ghes-2.22,
  // and github-ae@latest corresponds to ghae
  const graphqlVersion = currentVersionObj.miscVersionName

  req.context.graphql = {
    schemaForCurrentVersion: require(`../../lib/graphql/static/schema-${graphqlVersion}`),
    previewsForCurrentVersion: previews[graphqlVersion],
    upcomingChangesForCurrentVersion: upcomingChanges[graphqlVersion],
    prerenderedObjectsForCurrentVersion: prerenderedObjects[graphqlVersion],
    explorerUrl,
    changelog
  }

  return next()
}

import { readCompressedJsonFileFallback } from '../../lib/read-json-file.js'
import { allVersions } from '../../lib/all-versions.js'
const previews = readCompressedJsonFileFallback('./lib/graphql/static/previews.json')
const upcomingChanges = readCompressedJsonFileFallback('./lib/graphql/static/upcoming-changes.json')
const changelog = readCompressedJsonFileFallback('./lib/graphql/static/changelog.json')
const prerenderedObjects = readCompressedJsonFileFallback(
  './lib/graphql/static/prerendered-objects.json'
)
const prerenderedInputObjects = readCompressedJsonFileFallback(
  './lib/graphql/static/prerendered-input-objects.json'
)
const prerenderedMutations = readCompressedJsonFileFallback(
  './lib/graphql/static/prerendered-mutations.json'
)

const explorerUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://graphql.github.com/explorer'
    : 'http://localhost:3000'

export default function graphqlContext(req, res, next) {
  const currentVersionObj = allVersions[req.context.currentVersion]
  // ignore requests to non-GraphQL reference paths
  // and to versions that don't exist
  if (!req.pagePath.includes('/graphql/') || !currentVersionObj) {
    return next()
  }
  // Get the relevant name of the GraphQL schema files for the current version
  // For example, free-pro-team@latest corresponds to dotcom,
  // enterprise-server@2.22 corresponds to ghes-2.22,
  // and github-ae@latest corresponds to ghae
  const graphqlVersion = currentVersionObj.miscVersionName

  req.context.graphql = {
    schemaForCurrentVersion: readCompressedJsonFileFallback(
      `lib/graphql/static/schema-${graphqlVersion}.json`
    ),
    previewsForCurrentVersion: previews[graphqlVersion],
    upcomingChangesForCurrentVersion: upcomingChanges[graphqlVersion],
    prerenderedObjectsForCurrentVersion: prerenderedObjects[graphqlVersion],
    prerenderedInputObjectsForCurrentVersion: prerenderedInputObjects[graphqlVersion],
    prerenderedMutationsForCurrentVersion: prerenderedMutations[graphqlVersion],
    explorerUrl,
    changelog,
  }

  return next()
}

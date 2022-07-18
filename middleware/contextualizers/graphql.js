import {
  readCompressedJsonFileFallbackLazily,
  readCompressedJsonFileFallback,
} from '../../lib/read-json-file.js'
import { allVersions } from '../../lib/all-versions.js'
const previews = readCompressedJsonFileFallbackLazily('./lib/graphql/static/previews.json')
const upcomingChanges = readCompressedJsonFileFallbackLazily(
  './lib/graphql/static/upcoming-changes.json'
)
const changelog = readCompressedJsonFileFallbackLazily('./lib/graphql/static/changelog.json')
const prerenderedObjects = readCompressedJsonFileFallbackLazily(
  './lib/graphql/static/prerendered-objects.json'
)
const prerenderedInputObjects = readCompressedJsonFileFallbackLazily(
  './lib/graphql/static/prerendered-input-objects.json'
)
const prerenderedMutations = readCompressedJsonFileFallbackLazily(
  './lib/graphql/static/prerendered-mutations.json'
)

const explorerUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://graphql.github.com/explorer'
    : 'http://localhost:3000'

const graphQLVersionSchemaCache = new Map()
function readGraphQLVersionSchema(graphqlVersion) {
  if (!graphQLVersionSchemaCache.has(graphqlVersion)) {
    graphQLVersionSchemaCache.set(
      graphqlVersion,
      readCompressedJsonFileFallback(`lib/graphql/static/schema-${graphqlVersion}.json`)
    )
  }
  return graphQLVersionSchemaCache.get(graphqlVersion)
}

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
    schemaForCurrentVersion: readGraphQLVersionSchema(graphqlVersion),
    previewsForCurrentVersion: previews()[graphqlVersion],
    upcomingChangesForCurrentVersion: upcomingChanges()[graphqlVersion],
    prerenderedObjectsForCurrentVersion: prerenderedObjects()[graphqlVersion],
    prerenderedInputObjectsForCurrentVersion: prerenderedInputObjects()[graphqlVersion],
    prerenderedMutationsForCurrentVersion: prerenderedMutations()[graphqlVersion],
    explorerUrl,
    changelog: changelog(),
  }

  return next()
}

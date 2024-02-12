import {
  readCompressedJsonFileFallbackLazily,
  readCompressedJsonFileFallback,
} from '../../../lib/read-json-file.js'
import { getAutomatedPageMiniTocItems } from '../../../lib/get-mini-toc-items.js'
import languages from '#src/languages/lib/languages.js'
import { allVersions } from '#src/versions/lib/all-versions.js'

export const GRAPHQL_DATA_DIR = 'src/graphql/data'
/* ADD LANGUAGE KEY */
const previews = new Map()
const upcomingChanges = new Map()
const changelog = new Map()
const graphqlSchema = new Map()
const miniTocs = new Map()

Object.keys(languages).forEach((language) => {
  miniTocs.set(language, new Map())
})

export function getGraphqlSchema(version, type) {
  const graphqlVersion = getGraphqlVersion(version)
  if (!graphqlSchema.has(graphqlVersion)) {
    graphqlSchema.set(
      graphqlVersion,
      readCompressedJsonFileFallback(`${GRAPHQL_DATA_DIR}/${graphqlVersion}/schema.json`),
    )
  }
  return graphqlSchema.get(graphqlVersion)[type]
}

export function getGraphqlChangelog(version) {
  const graphqlVersion = getGraphqlVersion(version)
  if (!changelog.has(graphqlVersion)) {
    changelog.set(
      graphqlVersion,
      readCompressedJsonFileFallbackLazily(
        `${GRAPHQL_DATA_DIR}/${graphqlVersion}/changelog.json`,
      )(),
    )
  }

  return changelog.get(graphqlVersion)
}

export function getGraphqlBreakingChanges(version) {
  const graphqlVersion = getGraphqlVersion(version)
  if (!upcomingChanges.has(graphqlVersion)) {
    const data = readCompressedJsonFileFallbackLazily(
      `${GRAPHQL_DATA_DIR}/${graphqlVersion}/upcoming-changes.json`,
    )()
    upcomingChanges.set(graphqlVersion, data)
  }
  return upcomingChanges.get(graphqlVersion)
}

export function getPreviews(version) {
  const graphqlVersion = getGraphqlVersion(version)
  if (!previews.has(graphqlVersion)) {
    const data = readCompressedJsonFileFallbackLazily(
      `${GRAPHQL_DATA_DIR}/${graphqlVersion}/previews.json`,
    )()
    previews.set(graphqlVersion, data)
  }
  return previews.get(graphqlVersion)
}

export async function getMiniToc(context, type, items, depth = 2, markdownHeading = '') {
  const { currentLanguage, currentVersion } = context
  const graphqlVersion = getGraphqlVersion(currentVersion)
  if (!miniTocs.get(currentLanguage).has(graphqlVersion)) {
    miniTocs.get(currentLanguage).set(graphqlVersion, new Map())
  }
  if (!miniTocs.get(currentLanguage).get(graphqlVersion).has(type)) {
    const graphqlMiniTocItems = await getAutomatedPageMiniTocItems(
      items,
      context,
      depth,
      markdownHeading,
    )
    miniTocs.get(currentLanguage).get(graphqlVersion).set(type, graphqlMiniTocItems)
  }
  return miniTocs.get(currentLanguage).get(graphqlVersion).get(type)
}

export async function getChangelogMiniTocs(items, context, depth = 2, markdownHeading = '') {
  if (!changelog.has('toc')) {
    changelog.set('toc', await getAutomatedPageMiniTocItems(items, context, depth, markdownHeading))
  }
  return changelog.get('toc')
}

function getGraphqlVersion(version) {
  if (!(version in allVersions)) {
    throw new Error(`Unrecognized version '${version}'. Not found in ${Object.keys(allVersions)}`)
  }
  return allVersions[version].openApiVersionName
}

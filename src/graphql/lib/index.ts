import {
  readCompressedJsonFileFallbackLazily,
  readCompressedJsonFileFallback,
} from '@/frame/lib/read-json-file'
import { getAutomatedPageMiniTocItems } from '@/frame/lib/get-mini-toc-items'
import languages from '@/languages/lib/languages-server'
import { allVersions } from '@/versions/lib/all-versions'
interface GraphqlContext {
  currentLanguage: string
  currentVersion: string
  [key: string]: any
}

export const GRAPHQL_DATA_DIR = 'src/graphql/data'
/* ADD LANGUAGE KEY */
const previews = new Map<string, any>()
const upcomingChanges = new Map<string, any>()
const changelog = new Map<string, any>()
const graphqlSchema = new Map<string, any>()
const miniTocs = new Map<string, Map<string, Map<string, any[]>>>()

Object.keys(languages).forEach((language) => {
  miniTocs.set(language, new Map())
})

// Using any for return type as the GraphQL schema structure is complex and dynamically loaded from JSON
export function getGraphqlSchema(version: string, type: string): any {
  const graphqlVersion: string = getGraphqlVersion(version)
  if (!graphqlSchema.has(graphqlVersion)) {
    graphqlSchema.set(
      graphqlVersion,
      readCompressedJsonFileFallback(`${GRAPHQL_DATA_DIR}/${graphqlVersion}/schema.json`),
    )
  }
  return graphqlSchema.get(graphqlVersion)[type]
}

// Using any for return type as the changelog structure is dynamically loaded from JSON
export function getGraphqlChangelog(version: string): any {
  const graphqlVersion: string = getGraphqlVersion(version)
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

// Using any for return type as the breaking changes structure is dynamically loaded from JSON
export function getGraphqlBreakingChanges(version: string): any {
  const graphqlVersion: string = getGraphqlVersion(version)
  if (!upcomingChanges.has(graphqlVersion)) {
    // Using any as the JSON structure is not typed
    const data: any = readCompressedJsonFileFallbackLazily(
      `${GRAPHQL_DATA_DIR}/${graphqlVersion}/upcoming-changes.json`,
    )()
    upcomingChanges.set(graphqlVersion, data)
  }
  return upcomingChanges.get(graphqlVersion)
}

// Using any for return type as the previews structure is dynamically loaded from JSON
export function getPreviews(version: string): any {
  const graphqlVersion: string = getGraphqlVersion(version)
  if (!previews.has(graphqlVersion)) {
    // Using any as the JSON structure is not typed
    const data: any = readCompressedJsonFileFallbackLazily(
      `${GRAPHQL_DATA_DIR}/${graphqlVersion}/previews.json`,
    )()
    previews.set(graphqlVersion, data)
  }
  return previews.get(graphqlVersion)
}

export async function getMiniToc(
  context: GraphqlContext,
  type: string,
  items: string[],
  depth: number = 2,
  markdownHeading: string = '',
): Promise<any[]> {
  const { currentLanguage, currentVersion } = context
  const graphqlVersion: string = getGraphqlVersion(currentVersion)
  const languageMap = miniTocs.get(currentLanguage)
  if (!languageMap) {
    throw new Error(`Language ${currentLanguage} not found in miniTocs`)
  }
  if (!languageMap.has(graphqlVersion)) {
    languageMap.set(graphqlVersion, new Map())
  }
  const versionMap = languageMap.get(graphqlVersion)!
  if (!versionMap.has(type)) {
    // Using any[] as the mini TOC item structure is not yet typed in the codebase
    const graphqlMiniTocItems: any[] = await getAutomatedPageMiniTocItems(
      items,
      context,
      depth,
      markdownHeading,
    )
    versionMap.set(type, graphqlMiniTocItems)
  }
  return versionMap.get(type)!
}

export async function getChangelogMiniTocs(
  items: string[],
  context: GraphqlContext,
  depth: number = 2,
  markdownHeading: string = '',
): Promise<any[]> {
  if (!changelog.has('toc')) {
    changelog.set('toc', await getAutomatedPageMiniTocItems(items, context, depth, markdownHeading))
  }
  return changelog.get('toc')
}

function getGraphqlVersion(version: string): string {
  if (!(version in allVersions)) {
    throw new Error(`Unrecognized version '${version}'. Not found in ${Object.keys(allVersions)}`)
  }
  return allVersions[version].openApiVersionName
}

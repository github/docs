import {
  readCompressedJsonFileFallbackLazily,
  readCompressedJsonFileFallback,
} from '@/frame/lib/read-json-file'
import { getAutomatedPageMiniTocItems } from '@/frame/lib/get-mini-toc-items'
import languages from '@/languages/lib/languages-server'
import { allVersions } from '@/versions/lib/all-versions'
import { ALL_KIND_KEYS, CATEGORIES, isValidCategory, type SchemaKindKey } from './categories'

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
// Per-category schema files. Key: `${graphqlVersion}:${category}` → bucket.
const graphqlCategorySchemas = new Map<string, any>()
// All objects across categories (for interface implementer lookup).
const allObjectsByVersion = new Map<string, any[]>()
const miniTocs = new Map<string, Map<string, Map<string, any[]>>>()

for (const language of Object.keys(languages)) {
  miniTocs.set(language, new Map())
}

// Returns the per-category schema bucket `{queries, mutations, ...}` for a
// given category slug (e.g. 'repos', 'issues'). Throws via the loader if the
// category slug is not valid for this version.
export function getGraphqlSchema(version: string, category: string): any {
  if (!isValidCategory(category)) {
    throw new Error(`Invalid GraphQL category: ${category}`)
  }
  const graphqlVersion: string = getGraphqlVersion(version)
  return getGraphqlSchemaByCategory(graphqlVersion, category)
}

function getGraphqlSchemaByCategory(graphqlVersion: string, category: string): any {
  const key = `${graphqlVersion}:${category}`
  if (!graphqlCategorySchemas.has(key)) {
    graphqlCategorySchemas.set(
      key,
      readCompressedJsonFileFallback(
        `${GRAPHQL_DATA_DIR}/${graphqlVersion}/schema-${category}.json`,
      ),
    )
  }
  return graphqlCategorySchemas.get(key)
}

// Returns all object-kind items across every category for the given version.
// Used by the interface renderer to list implementers regardless of which
// category page is being rendered.
export function getAllGraphqlObjects(version: string): any[] {
  const graphqlVersion: string = getGraphqlVersion(version)
  if (!allObjectsByVersion.has(graphqlVersion)) {
    const all: any[] = []
    for (const category of CATEGORIES) {
      const bucket = getGraphqlSchemaByCategory(graphqlVersion, category)
      if (bucket?.objects) all.push(...bucket.objects)
    }
    allObjectsByVersion.set(graphqlVersion, all)
  }
  return allObjectsByVersion.get(graphqlVersion)!
}

// Returns the canonical render order of kinds within a category page.
export function getKindOrder(): SchemaKindKey[] {
  return ALL_KIND_KEYS
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

/**
 * Return changelog entries filtered by year.
 */
export function getGraphqlChangelogByYear(version: string, year: number): any[] {
  const all = getGraphqlChangelog(version) as Array<{ date: string }>
  return all.filter((entry) => entry.date.startsWith(String(year)))
}

/**
 * Return the distinct years present in the changelog, sorted descending (newest first).
 */
export function getGraphqlChangelogYears(version: string): number[] {
  const all = getGraphqlChangelog(version) as Array<{ date: string }>
  const years = new Set<number>()
  for (const entry of all) {
    years.add(Number(entry.date.slice(0, 4)))
  }
  return [...years].sort((a, b) => b - a)
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

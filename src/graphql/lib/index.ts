import {
  readCompressedJsonFileFallbackLazily,
  readCompressedJsonFileFallback,
} from '@/frame/lib/read-json-file'
import { getAutomatedPageMiniTocItems, type MiniTocItem } from '@/frame/lib/get-mini-toc-items'
import languages from '@/languages/lib/languages-server'
import { allVersions } from '@/versions/lib/all-versions'
import type {
  GraphqlT,
  PreviewT,
  ChangelogItemT,
  BreakingChangesT,
} from '@/graphql/components/types'
import { ALL_KIND_KEYS, CATEGORIES, isValidCategory, type SchemaKindKey } from './categories'

// GraphqlContext describes the per-request context object that getMiniToc and
// getGraphqlSchema read language/version from.
export interface GraphqlContext {
  currentLanguage: string
  currentVersion: string
  [key: string]: unknown
}

// The GraphQL schema JSON is keyed by member type (e.g. "queries", "objects",
// "enums"), each holding a list of schema members.
type GraphqlSchemaData = Record<string, GraphqlT[]>

export const GRAPHQL_DATA_DIR = 'src/graphql/data'
/* ADD LANGUAGE KEY */
const previews = new Map<string, PreviewT[]>()
const upcomingChanges = new Map<string, BreakingChangesT>()
const changelog = new Map<string, ChangelogItemT[]>()
const changelogMiniTocs = new Map<string, MiniTocItem[]>()
// Per-category schema files. Key: `${graphqlVersion}:${category}` → bucket.
const graphqlCategorySchemas = new Map<string, GraphqlSchemaData>()
// All objects across categories (for interface implementer lookup).
const allObjectsByVersion = new Map<string, GraphqlT[]>()
const miniTocs = new Map<string, Map<string, Map<string, MiniTocItem[]>>>()

for (const language of Object.keys(languages)) {
  miniTocs.set(language, new Map())
}

// Returns the per-category schema bucket `{queries, mutations, ...}` for a
// given category slug (e.g. 'repos', 'issues'). Throws via the loader if the
// category slug is not valid for this version.
export function getGraphqlSchema(version: string, category: string): GraphqlSchemaData {
  if (!isValidCategory(category)) {
    throw new Error(`Invalid GraphQL category: ${category}`)
  }
  const graphqlVersion: string = getGraphqlVersion(version)
  return getGraphqlSchemaByCategory(graphqlVersion, category)
}

function getGraphqlSchemaByCategory(graphqlVersion: string, category: string): GraphqlSchemaData {
  const key = `${graphqlVersion}:${category}`
  if (!graphqlCategorySchemas.has(key)) {
    graphqlCategorySchemas.set(
      key,
      readCompressedJsonFileFallback(
        `${GRAPHQL_DATA_DIR}/${graphqlVersion}/schema-${category}.json`,
      ) as GraphqlSchemaData,
    )
  }
  return graphqlCategorySchemas.get(key)!
}

// Returns all object-kind items across every category for the given version.
// Used by the interface renderer to list implementers regardless of which
// category page is being rendered.
export function getAllGraphqlObjects(version: string): GraphqlT[] {
  const graphqlVersion: string = getGraphqlVersion(version)
  if (!allObjectsByVersion.has(graphqlVersion)) {
    const all: GraphqlT[] = []
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

export function getGraphqlChangelog(version: string): ChangelogItemT[] {
  const graphqlVersion: string = getGraphqlVersion(version)
  if (!changelog.has(graphqlVersion)) {
    changelog.set(
      graphqlVersion,
      readCompressedJsonFileFallbackLazily(
        `${GRAPHQL_DATA_DIR}/${graphqlVersion}/changelog.json`,
      )() as ChangelogItemT[],
    )
  }

  return changelog.get(graphqlVersion)!
}

/**
 * Return changelog entries filtered by year.
 */
export function getGraphqlChangelogByYear(version: string, year: number): ChangelogItemT[] {
  const all = getGraphqlChangelog(version)
  return all.filter((entry) => entry.date.startsWith(String(year)))
}

/**
 * Return the distinct years present in the changelog, sorted descending (newest first).
 */
export function getGraphqlChangelogYears(version: string): number[] {
  const all = getGraphqlChangelog(version)
  const years = new Set<number>()
  for (const entry of all) {
    years.add(Number(entry.date.slice(0, 4)))
  }
  return [...years].sort((a, b) => b - a)
}

export function getGraphqlBreakingChanges(version: string): BreakingChangesT {
  const graphqlVersion: string = getGraphqlVersion(version)
  if (!upcomingChanges.has(graphqlVersion)) {
    const data = readCompressedJsonFileFallbackLazily(
      `${GRAPHQL_DATA_DIR}/${graphqlVersion}/upcoming-changes.json`,
    )() as BreakingChangesT
    upcomingChanges.set(graphqlVersion, data)
  }
  return upcomingChanges.get(graphqlVersion)!
}

export function getPreviews(version: string): PreviewT[] {
  const graphqlVersion: string = getGraphqlVersion(version)
  if (!previews.has(graphqlVersion)) {
    const data = readCompressedJsonFileFallbackLazily(
      `${GRAPHQL_DATA_DIR}/${graphqlVersion}/previews.json`,
    )() as PreviewT[]
    previews.set(graphqlVersion, data)
  }
  return previews.get(graphqlVersion)!
}

export async function getMiniToc(
  context: GraphqlContext,
  type: string,
  items: string[],
  depth: number = 2,
  markdownHeading: string = '',
): Promise<MiniTocItem[]> {
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
    const graphqlMiniTocItems = await getAutomatedPageMiniTocItems(
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
): Promise<MiniTocItem[]> {
  if (!changelogMiniTocs.has('toc')) {
    changelogMiniTocs.set(
      'toc',
      await getAutomatedPageMiniTocItems(items, context, depth, markdownHeading),
    )
  }
  return changelogMiniTocs.get('toc')!
}

function getGraphqlVersion(version: string): string {
  if (!(version in allVersions)) {
    throw new Error(`Unrecognized version '${version}'. Not found in ${Object.keys(allVersions)}`)
  }
  return allVersions[version].openApiVersionName
}

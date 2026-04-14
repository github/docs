import fs, { promises as fsPromises } from 'fs'
import path from 'path'

import QuickLRU from 'quick-lru'
import { brotliDecompress } from 'zlib'
import { promisify } from 'util'
import { getAutomatedPageMiniTocItems } from '@/frame/lib/get-mini-toc-items'
import { allVersions, getOpenApiVersion } from '@/versions/lib/all-versions'
import languages from '@/languages/lib/languages-server'
import type { Context } from '@/types'
import type { Operation } from '@/rest/components/types'

export const REST_DATA_DIR = 'src/rest/data'
const REST_CONTENT_DIR = 'content/rest'

// Type definitions for REST operations
export interface RestOperationCategory {
  [subcategory: string]: Operation[]
}

interface RestMiniTocData {
  restOperationsMiniTocItems: any[]
}

/*
  Loads the schemas from the static/decorated folder into a single
  object organized by version. Not all products are calendar date
  versioned.
  Example:
  {
    free-pro-team@latest: {
      2022-08-09: {
        category: {
          subcategory: [operations],
        }
      },
      2022-11-14: {
        category: {
          subcategory: [operations],
        }
      }
    }
    enterprise-server@3.2: {
      'not_api_versioned': {
        category: {
          subcategory: [operations],
        }
      }
    }
  }
*/
const NOT_API_VERSIONED = 'not_api_versioned'
const brotliDecompressAsync = promisify(brotliDecompress)
const restOperationData = new Map<
  string,
  Map<string, Map<string, Map<string, Map<string, RestMiniTocData>>>>
>()

// Two-tier cache: fpt and ghec are pinned in a plain Map (never evicted) because
// they account for >90% of traffic and each version needs ~100 slots alone.
// All other versions (ghes) go into a bounded LRU cache.
const PINNED_OPEN_API_VERSIONS = new Set(['fpt', 'ghec'])
export const pinnedCache = new Map<string, RestOperationCategory>() // @internal
const LRU_MAX_SIZE = Math.max(1, parseInt(process.env.REST_SCHEMA_LRU_SIZE ?? '', 10) || 96)
export const lruCache = new QuickLRU<string, RestOperationCategory>({ maxSize: LRU_MAX_SIZE }) // @internal

// In-flight deduplication: concurrent cache misses for the same key share one read.
const inflight = new Map<string, Promise<RestOperationCategory>>()

for (const language of Object.keys(languages)) {
  restOperationData.set(language, new Map())
  for (const version of Object.keys(allVersions)) {
    // setting to undefined will allow us to perform checks
    // more easily later on
    restOperationData.get(language)!.set(version, new Map())
    if (allVersions[version].apiVersions && allVersions[version].apiVersions.length > 0) {
      for (const date of allVersions[version].apiVersions) {
        restOperationData.get(language)!.get(version)!.set(date, new Map())
      }
    } else {
      // Products that are not been calendar date versioned
      restOperationData.get(language)!.get(version)!.set(NOT_API_VERSIONED, new Map())
    }
  }
}

export const categoriesWithoutSubcategories: string[] = fs
  .readdirSync(REST_CONTENT_DIR)
  .filter((file: string) => {
    return file.endsWith('.md') && !file.includes('index.md') && !file.includes('README.md')
  })
  .map((filteredFile: string) => filteredFile.replace('.md', ''))

// version: plan + release e.g. For ghes-3.5, ghes is the plan and 3.5 is the release
// apiVersion (not all versions have apiVersions): REST API Calendar Dates
// openApiVersion (below, every version has an openApiVersion mapping): There's a mapping between our Docs versions
// and the OpenApi Version bc it's not the same

export default async function getRest(
  version: string,
  apiVersion: string | undefined,
  category: string,
): Promise<RestOperationCategory> {
  const openApiVersion = getOpenApiVersion(version)
  const apiDate = apiVersion || NOT_API_VERSIONED
  const openapiSchemaName = apiVersion ? `${openApiVersion}-${apiVersion}` : `${openApiVersion}`
  const lruKey = `${openApiVersion}:${apiDate}:${category}`

  const cache = PINNED_OPEN_API_VERSIONS.has(openApiVersion) ? pinnedCache : lruCache

  if (!cache.has(lruKey)) {
    const basePath = path.join(REST_DATA_DIR, openapiSchemaName, `${category}.json`)
    if (!inflight.has(lruKey)) {
      inflight.set(
        lruKey,
        loadCategoryFile(basePath).finally(() => inflight.delete(lruKey)),
      )
    }
    cache.set(lruKey, await inflight.get(lruKey)!)
  }

  return cache.get(lruKey)!
}

// Read asynchronously to avoid blocking the event loop on a cache miss.
// A synchronous read + JSON.parse of a category file (1–2 MB) would stall
// all in-flight requests on this pod for the duration of the parse.
// Try the brotli-compressed variant first (used in staging), then plain JSON.
async function loadCategoryFile(basePath: string): Promise<RestOperationCategory> {
  try {
    const compressed = await fsPromises.readFile(`${basePath}.br`)
    const decompressed = await brotliDecompressAsync(compressed)
    return JSON.parse(decompressed.toString()) as RestOperationCategory
  } catch {
    // .br missing, corrupt, or unreadable — fall back to plain JSON
    const raw = await fsPromises.readFile(basePath, 'utf-8')
    return JSON.parse(raw) as RestOperationCategory
  }
}

export function getRestCategories(version: string, apiVersion?: string): string[] {
  const openApiVersion = getOpenApiVersion(version)
  const openapiSchemaName = apiVersion ? `${openApiVersion}-${apiVersion}` : `${openApiVersion}`
  return fs
    .readdirSync(path.join(REST_DATA_DIR, openapiSchemaName))
    .filter((f) => f.endsWith('.json') && f !== 'schema.json')
    .map((f) => f.replace('.json', ''))
    .sort()
}

// Generates the miniToc for a rest reference page.
export async function getRestMiniTocItems(
  category: string,
  subCategory: string,
  apiVersion: string | undefined,
  operations: Operation[],
  language: string,
  version: string,
  context: Context,
): Promise<RestMiniTocData> {
  const apiDate = apiVersion || NOT_API_VERSIONED

  const languageData = restOperationData.get(language)
  if (!languageData) {
    throw new Error(`Language ${language} not found in rest operation data`)
  }

  const versionData = languageData.get(version)
  if (!versionData) {
    throw new Error(`Version ${version} not found for language ${language}`)
  }

  const apiData = versionData.get(apiDate)
  if (!apiData) {
    throw new Error(`API date ${apiDate} not found for version ${version} and language ${language}`)
  }

  if (!apiData.has(category)) {
    apiData.set(category, new Map())
  }

  const categoryData = apiData.get(category)!
  if (!categoryData.get(subCategory)) {
    const titles = operations.map((operation: Operation) => operation.title)
    const restOperationsMiniTocItems = await getAutomatedPageMiniTocItems(titles, context, 3)
    categoryData.set(subCategory, {
      restOperationsMiniTocItems,
    })
  }

  return categoryData.get(subCategory)!
}

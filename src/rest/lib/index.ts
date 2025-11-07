import fs from 'fs'
import path from 'path'

import { readCompressedJsonFileFallback } from '@/frame/lib/read-json-file'
import { getAutomatedPageMiniTocItems } from '@/frame/lib/get-mini-toc-items'
import { allVersions, getOpenApiVersion } from '@/versions/lib/all-versions'
import languages from '@/languages/lib/languages-server'
import type { Context } from '@/types'
import type { Operation } from '@/rest/components/types'

export const REST_DATA_DIR = 'src/rest/data'
export const REST_SCHEMA_FILENAME = 'schema.json'
const REST_CONTENT_DIR = 'content/rest'

// Type definitions for REST operations
interface RestOperationCategory {
  [subcategory: string]: Operation[]
}

interface RestOperationData {
  [category: string]: RestOperationCategory
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
const restOperationData = new Map<
  string,
  Map<string, Map<string, Map<string, Map<string, RestMiniTocData>>>>
>()
const restOperations = new Map<string, Map<string, RestOperationData>>()

Object.keys(languages).forEach((language: string) => {
  restOperationData.set(language, new Map())
  Object.keys(allVersions).forEach((version: string) => {
    // setting to undefined will allow us to perform checks
    // more easily later on
    restOperationData.get(language)!.set(version, new Map())
    if (allVersions[version].apiVersions && allVersions[version].apiVersions.length > 0) {
      allVersions[version].apiVersions.forEach((date: string) => {
        restOperationData.get(language)!.get(version)!.set(date, new Map())
      })
    } else {
      // Products that are not been calendar date versioned
      restOperationData.get(language)!.get(version)!.set(NOT_API_VERSIONED, new Map())
    }
  })
})

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
  apiVersion?: string,
): Promise<RestOperationData> {
  const openApiVersion = getOpenApiVersion(version)
  const openapiSchemaName = apiVersion ? `${openApiVersion}-${apiVersion}` : `${openApiVersion}`
  const apiDate = apiVersion || NOT_API_VERSIONED
  const fileName = path.join(REST_DATA_DIR, openapiSchemaName, REST_SCHEMA_FILENAME)

  if (!restOperations.has(openApiVersion)) {
    restOperations.set(openApiVersion, new Map())
    // The `readCompressedJsonFileFallback()` function
    // will check for both a .br and .json extension.
    restOperations
      .get(openApiVersion)!
      .set(apiDate, readCompressedJsonFileFallback(fileName) as RestOperationData)
  } else if (!restOperations.get(openApiVersion)!.has(apiDate)) {
    // The `readCompressedJsonFileFallback()` function
    // will check for both a .br and .json extension.
    restOperations
      .get(openApiVersion)!
      .set(apiDate, readCompressedJsonFileFallback(fileName) as RestOperationData)
  }

  return restOperations.get(openApiVersion)!.get(apiDate)!
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

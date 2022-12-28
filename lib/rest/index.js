import { fileURLToPath } from 'url'
import fs from 'fs'
import path from 'path'

import { readCompressedJsonFileFallback } from '../read-json-file.js'
import { getAutomatedPageMiniTocItems } from '../get-mini-toc-items.js'
import { allVersions } from '../all-versions.js'
import languages from '../languages.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const schemasPath = path.join(__dirname, 'static/decorated')
const ENABLED_APPS_FILENAME = path.join(__dirname, 'static/apps/enabled-for-apps.json')
const contentPath = path.join(process.cwd(), 'content/rest')

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
const restOperationData = new Map()
const restOperations = new Map()

Object.keys(languages).forEach((language) => {
  restOperationData.set(language, new Map())
  Object.keys(allVersions).forEach((version) => {
    // setting to undefined will allow us to perform checks
    // more easily later on
    restOperationData.get(language).set(version, new Map())
    if (allVersions[version].apiVersions && allVersions[version].apiVersions.length > 0) {
      allVersions[version].apiVersions.forEach((date) => {
        restOperationData.get(language).get(version).set(date, new Map())
      })
    } else {
      // Products that are not been calendar date versioned
      restOperationData.get(language).get(version).set(NOT_API_VERSIONED, new Map())
    }
  })
})

export const categoriesWithoutSubcategories = fs
  .readdirSync(contentPath)
  .filter((file) => {
    return file.endsWith('.md') && !file.includes('index.md') && !file.includes('README.md')
  })
  .map((filteredFile) => filteredFile.replace('.md', ''))

// version: plan + release e.g. For ghes-3.5, ghes is the plan and 3.5 is the release
// apiVersion (not all versions have apiVersions): REST API Calendar Dates
// openApiVersion (below, every version has an openApiVersion mapping): There's a mapping between our Docs versions
// and the OpenApi Version bc it's not the same
export default async function getRest(version, apiVersion, category, subCategory) {
  const openApiVersion = getOpenApiVersion(version)
  const filename = apiVersion ? `${openApiVersion}.${apiVersion}.json` : `${openApiVersion}.json`
  const apiDate = apiVersion || NOT_API_VERSIONED

  if (!restOperations.has(openApiVersion)) {
    restOperations.set(openApiVersion, new Map())
    restOperations.get(openApiVersion).set(apiDate, new Map())
    // The `readCompressedJsonFileFallback()` function
    // will check for both a .br and .json extension.
    restOperations
      .get(openApiVersion)
      .set(apiDate, readCompressedJsonFileFallback(path.join(schemasPath, filename)))
  } else if (!restOperations.get(openApiVersion).has(apiDate)) {
    restOperations.get(openApiVersion).set(apiDate, new Map())
    // The `readCompressedJsonFileFallback()` function
    // will check for both a .br and .json extension.
    restOperations
      .get(openApiVersion)
      .set(apiDate, readCompressedJsonFileFallback(path.join(schemasPath, filename)))
  }

  if (subCategory) {
    return restOperations.get(openApiVersion).get(apiDate)[category][subCategory]
  } else if (category) {
    return restOperations.get(openApiVersion).get(apiDate)[category]
  } else {
    return restOperations.get(openApiVersion).get(apiDate)
  }
}

function getOpenApiVersion(version) {
  if (!(version in allVersions)) {
    throw new Error(`Unrecognized version '${version}'. Not found in ${Object.keys(allVersions)}`)
  }
  return allVersions[version].openApiVersionName
}

// Generates the miniToc for a rest reference page.
export async function getRestMiniTocItems(
  category,
  subCategory,
  apiVersion,
  restOperations,
  language,
  version,
  context
) {
  const apiDate = apiVersion || NOT_API_VERSIONED

  if (!restOperationData.get(language).get(version).get(apiDate).has(category)) {
    restOperationData.get(language).get(version).get(apiDate).set(category, new Map())
  }

  if (!restOperationData.get(language).get(version).get(apiDate).get(category).get(subCategory)) {
    const languageTree = restOperationData.get(language)
    const titles = restOperations.map((operation) => operation.title)
    const restOperationsMiniTocItems = await getAutomatedPageMiniTocItems(titles, context, 3)
    languageTree.get(version).get(apiDate).get(category).set(subCategory, {
      restOperationsMiniTocItems,
    })
    restOperationData.set(restOperationData, languageTree)
  }
  return restOperationData.get(language).get(version).get(apiDate).get(category).get(subCategory)
}

const enabledForApps = {}
export async function getEnabledForApps(docsVersion, apiVersion) {
  if (Object.keys(enabledForApps).length === 0) {
    // The `readCompressedJsonFileFallback()` function
    // will check for both a .br and .json extension.
    Object.assign(enabledForApps, readCompressedJsonFileFallback(ENABLED_APPS_FILENAME))
  }
  const openApiVersion = getOpenApiVersion(docsVersion) + (apiVersion ? `.${apiVersion}` : '')

  return enabledForApps[openApiVersion]
}

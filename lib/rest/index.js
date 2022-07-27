import { fileURLToPath } from 'url'
import fs from 'fs'
import path from 'path'

import { readCompressedJsonFileFallback } from '../read-json-file.js'
import renderContent from '../render-content/index.js'
import getMiniTocItems from '../get-mini-toc-items.js'
import { allVersions } from '../all-versions.js'
import languages from '../languages.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const schemasPath = path.join(__dirname, 'static/decorated')
const ENABLED_APPS_FILENAME = path.join(__dirname, 'static/apps/enabled-for-apps.json')
const contentPath = path.join(process.cwd(), 'content/rest')

/*
  Loads the schemas from the static/decorated folder into a single
  object organized by version.

  Example:
  {
    version: {
      category: {
        subcategory: [operations],
      }
    }
  }
*/
const restOperationData = new Map()
Object.keys(languages).forEach((language) => {
  restOperationData.set(language, new Map())
  Object.keys(allVersions).forEach((version) => {
    // setting to undefined will allow us to perform checks
    // more easily later on
    restOperationData.get(language).set(version, new Map())
  })
})

export const categoriesWithoutSubcategories = fs
  .readdirSync(contentPath)
  .filter((file) => {
    return file.endsWith('.md') && !file.includes('index.md') && !file.includes('README.md')
  })
  .map((filteredFile) => filteredFile.replace('.md', ''))

const restOperations = new Map()
export default async function getRest(version, category, subCategory) {
  const openApiVersion = getOpenApiVersion(version)
  if (!restOperations.has(openApiVersion)) {
    const filename = `${openApiVersion}.json`

    // The `readCompressedJsonFileFallback()` function
    // will check for both a .br and .json extension.
    restOperations.set(
      openApiVersion,
      readCompressedJsonFileFallback(path.join(schemasPath, filename))
    )
  }

  if (subCategory) {
    return restOperations.get(openApiVersion)[category][subCategory]
  } else if (category) {
    return restOperations.get(openApiVersion)[category]
  } else {
    return restOperations.get(openApiVersion)
  }
}

// Right now there is not a 1:1 mapping of openapi to docs versions,
// so we need to return an array of versions. The enterprise-cloud
// version doesn't yet exist in openapi so we map it to free-pro-team.
function getDocsVersions(openApiVersion) {
  const versions = Object.values(allVersions)
    .filter((version) => version.openApiVersionName === openApiVersion)
    .map((item) => item.version)
  return versions
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
  restOperations,
  language,
  version,
  context
) {
  if (!restOperationData.get(language).get(version).has(category)) {
    restOperationData.get(language).get(version).set(category, new Map())
  }

  if (!restOperationData.get(language).get(version).get(category).get(subCategory)) {
    const languageTree = restOperationData.get(language)
    let toc = ''
    // only a string with the raw HTML of each heading level 3
    // is needed to generate the toc
    const titles = restOperations.map((operation) => `### ${operation.title}\n`).join('')
    toc += await renderContent(titles, context)
    const restOperationsMiniTocItems = getMiniTocItems(toc, 3, '')
    languageTree.get(version).get(category).set(subCategory, {
      restOperationsMiniTocItems,
    })
    restOperationData.set(restOperationData, languageTree)
  }
  return restOperationData.get(language).get(version).get(category).get(subCategory)
}

export async function getEnabledForApps() {
  // The `readCompressedJsonFileFallback()` function
  // will check for both a .br and .json extension.
  const appsData = readCompressedJsonFileFallback(ENABLED_APPS_FILENAME)
  for (const version in appsData) {
    const docsVersions = getDocsVersions(version)
    docsVersions.forEach((docsVersion) => {
      appsData[docsVersion] = appsData[version]
    })
    delete appsData[version]
  }
  return appsData
}

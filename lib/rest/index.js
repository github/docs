import { fileURLToPath } from 'url'
import path from 'path'
import { readCompressedJsonFileFallback } from '../read-json-file.js'
import renderContent from '../render-content/index.js'
import getMiniTocItems from '../get-mini-toc-items.js'
import { allVersions } from '../all-versions.js'
import languages from '../languages.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const schemasPath = path.join(__dirname, 'static/decorated')
const ENABLED_APPS_FILENAME = path.join(__dirname, 'static/apps/enabled-for-apps.json')
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

const restOperations = new Map()
export default async function getRest(version, category) {
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

  return category
    ? restOperations.get(openApiVersion)[category]
    : restOperations.get(openApiVersion)
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

// Generates the rendered Markdown from the data files in the
// data/reusables/rest-reference directory for a given category
// and generates the miniToc for a rest reference page.
export async function getRestOperationData(category, language, version, context) {
  if (!restOperationData.get(language).get(version).has(category)) {
    const languageTree = restOperationData.get(language)
    const descriptions = {}
    let toc = ''
    const reusablePath = context.site.data.reusables
    const categoryOperations = await getRest(version, category)
    const subcategories = Object.keys(categoryOperations)
    let introContent = null
    for (const subcategory of subcategories) {
      const markdown = reusablePath['rest-reference']?.[category]?.[subcategory]
      const renderedMarkdown = await renderContent(markdown, context)
      descriptions[subcategory] = renderedMarkdown
      // only a string with the raw HTML of each heading level 2 and 3
      // is needed to generate the toc
      const titles = categoryOperations[subcategory]
        .map((operation) => `### ${operation.summary}\n`)
        .join('')
      toc += renderedMarkdown + (await renderContent(titles, context))
    }
    // Usually a Markdown file in
    // data/resuables/rest-reference/<category>/<subcategory>
    // will always map to a set of operations. But sometimes we have
    // introductory text that doesn't map to any operations.
    // When that is the case, the category and subcategory are the same.
    // Example data/resuables/rest-reference/actions/actions
    // The content in this file is called introContent and is displayed
    // at the top of the rest reference page.
    if (reusablePath['rest-reference']?.[category]?.[category] && !categoryOperations[category]) {
      const markdown = reusablePath['rest-reference']?.[category]?.[category]
      introContent = await renderContent(markdown, context)
    }
    const miniTocItems = getMiniTocItems(toc, 3)
    languageTree.get(version).set(category, {
      descriptions,
      miniTocItems,
      introContent,
    })
    restOperationData.set(restOperationData, languageTree)
  }
  return restOperationData.get(language).get(version).get(category)
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

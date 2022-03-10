import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import { readCompressedJsonFileFallback } from '../read-json-file.js'
import renderContent from '../render-content/index.js'
import getMiniTocItems from '../get-mini-toc-items.js'
import { allVersions } from '../all-versions.js'
import { get } from 'lodash-es'

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
export default async function getRest() {
  const operations = {}
  fs.readdirSync(schemasPath).forEach((filename) => {
    // In staging deploys, the `.json` files might have been converted to
    // to `.json.br`. In that case, we need to also remove the `.json`
    // extension from the key
    const key = path.parse(filename).name.replace('.json', '')
    // The `readCompressedJsonFileFallback()` function
    // will check for both a .br and .json extension.
    const value = readCompressedJsonFileFallback(path.join(schemasPath, filename))
    const docsVersions = getDocsVersions(key)
    docsVersions.forEach((docsVersion) => {
      operations[docsVersion] = value
    })
  })

  return operations
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

// Used for units tests
export function getFlatListOfOperations(operations) {
  const flatList = []
  Object.keys(operations).forEach((version) => {
    Object.keys(operations[version]).forEach((category) => {
      Object.keys(operations[version][category]).forEach((subcategory) => {
        flatList.push(...operations[version][category][subcategory])
      })
    })
  })
  return flatList
}

// Generates the rendered Markdown from the data files in the
// data/reusables/rest-reference directory for a given category
// and generates the miniToc for a rest reference page.
export async function getRestOperationData(category, categoryOperations, context) {
  const descriptions = {}
  let toc = ''
  const reusablePath = context.site.data.reusables
  const subcategories = Object.keys(categoryOperations)
  let introContent = null
  for (const subcategory of subcategories) {
    const markdown = get(reusablePath['rest-reference'][category], subcategory)
    const renderedMarkdown = await renderContent(markdown, context)
    descriptions[subcategory] = renderedMarkdown
    // only a string with the raw HTML of each heading level 2 and 3
    // is needed to generate the toc
    const titles = categoryOperations[subcategory]
      .map((operation) => `### ${operation.summary}\n`)
      .join('')
    toc += renderedMarkdown + (await renderContent(titles, context))
  }
  // This is Markdown content at the path
  // data/reusables/rest-reference/<category>/<subcategory>
  // that doesn't map directory to a group of operations.
  if (get(reusablePath['rest-reference'][category], category) && !categoryOperations[category]) {
    const markdown = get(reusablePath['rest-reference'][category], category)
    introContent = await renderContent(markdown, context)
  }
  const miniTocItems = getMiniTocItems(toc, 3)
  return { descriptions, miniTocItems, introContent }
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

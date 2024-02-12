import path from 'path'
import { readFile } from 'fs/promises'

import { readCompressedJsonFileFallback } from '../../../lib/read-json-file.js'
import { getOpenApiVersion } from '#src/versions/lib/all-versions.js'
import { categoriesWithoutSubcategories } from '../../rest/lib/index.js'

const ENABLED_APPS_DIR = 'src/github-apps/data'
const githubAppsData = new Map()

// Initialize the Map with the page type keys listed under `pages`
// in the config.json file.
const appsDataConfig = JSON.parse(await readFile('src/github-apps/lib/config.json', 'utf8'))
for (const pageType of Object.keys(appsDataConfig.pages)) {
  githubAppsData.set(pageType, new Map())
}

export async function getAppsData(pageType, docsVersion, apiVersion) {
  const pageTypeMap = githubAppsData.get(pageType)
  const filename = `${pageType}.json`
  const openApiVersion = getOpenApiVersion(docsVersion) + (apiVersion ? `-${apiVersion}` : '')
  if (!pageTypeMap.has(openApiVersion)) {
    // The `readCompressedJsonFileFallback()` function
    // will check for both a .br and .json extension.
    const appDataPath = path.join(ENABLED_APPS_DIR, openApiVersion, filename)
    const data = readCompressedJsonFileFallback(appDataPath)
    pageTypeMap.set(openApiVersion, data)
  }

  return pageTypeMap.get(openApiVersion)
}

export async function getAppsServerSideProps(context, pageType, { useDisplayTitle = false }) {
  const { getAutomatedPageMiniTocItems } = await import('lib/get-mini-toc-items')
  const { getAutomatedPageContextFromRequest } = await import(
    'src/automated-pipelines/components/AutomatedPageContext'
  )
  const currentVersion = context.query.versionId
  const allVersions = context.req.context.allVersions
  const queryApiVersion = context.query.apiVersion
  const apiVersion = allVersions[currentVersion].apiVersions.includes(queryApiVersion)
    ? queryApiVersion
    : allVersions[currentVersion].latestApiVersion

  const appsItems = await getAppsData(pageType, currentVersion, apiVersion)
  // Create minitoc
  const { miniTocItems } = getAutomatedPageContextFromRequest(context.req)
  const titles = useDisplayTitle
    ? Object.values(appsItems).map((item) => item.displayTitle)
    : Object.keys(appsItems)
  const appMiniToc = await getAutomatedPageMiniTocItems(titles, context)
  appMiniToc && miniTocItems.push(...appMiniToc)

  return { currentVersion, appsItems, categoriesWithoutSubcategories }
}

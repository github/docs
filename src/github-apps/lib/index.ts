import path from 'path'
import fs from 'fs'

import { readCompressedJsonFileFallback } from '@/frame/lib/read-json-file'
import { getOpenApiVersion } from '@/versions/lib/all-versions'
import { categoriesWithoutSubcategories } from '../../rest/lib/index'

interface AppsConfig {
  pages: Record<string, unknown>
}

// Note: Using 'any' for AppsData to maintain compatibility with existing consumers that expect different shapes
type AppsData = any

const DEBUG = process.env.RUNNER_DEBUG === '1' || process.env.DEBUG === '1'
const ENABLED_APPS_DIR = 'src/github-apps/data'
const githubAppsData = new Map<string, Map<string, AppsData>>()

// Initialize the Map with the page type keys listed under `pages`
// in the config.json file.
const appsDataConfig: AppsConfig = JSON.parse(
  fs.readFileSync('src/github-apps/lib/config.json', 'utf8'),
)
for (const pageType of Object.keys(appsDataConfig.pages)) {
  githubAppsData.set(pageType, new Map<string, AppsData>())
}

export async function getAppsData(
  pageType: string,
  docsVersion: string,
  apiVersion?: string,
): Promise<AppsData> {
  if (DEBUG) {
    console.log(
      `[DEBUG] getAppsData: ROOT=${process.env.ROOT || '(not set)'}, path=${ENABLED_APPS_DIR}`,
    )
  }

  const pageTypeMap = githubAppsData.get(pageType)!
  const filename = `${pageType}.json`
  const openApiVersion = getOpenApiVersion(docsVersion) + (apiVersion ? `-${apiVersion}` : '')
  if (!pageTypeMap.has(openApiVersion)) {
    // The `readCompressedJsonFileFallback()` function
    // will check for both a .br and .json extension.
    const appDataPath = path.join(ENABLED_APPS_DIR, openApiVersion, filename)
    const data = readCompressedJsonFileFallback(appDataPath)
    pageTypeMap.set(openApiVersion, data)
  }

  return pageTypeMap.get(openApiVersion)!
}

export async function getAppsServerSideProps(
  context: any,
  pageType: string,
  { useDisplayTitle = false }: { useDisplayTitle?: boolean },
): Promise<{
  currentVersion: string
  appsItems: AppsData
  categoriesWithoutSubcategories: string[]
}> {
  const { getAutomatedPageMiniTocItems } = await import('@/frame/lib/get-mini-toc-items')
  const { getAutomatedPageContextFromRequest } = await import(
    '@/automated-pipelines/components/AutomatedPageContext'
  )
  const currentVersion: string = context.query.versionId
  const allVersions = context.req.context.allVersions
  const queryApiVersion: string = context.query.apiVersion
  const apiVersion: string = allVersions[currentVersion].apiVersions.includes(queryApiVersion)
    ? queryApiVersion
    : allVersions[currentVersion].latestApiVersion

  const appsItems: AppsData = await getAppsData(pageType, currentVersion, apiVersion)
  // Create minitoc
  const { miniTocItems } = getAutomatedPageContextFromRequest(context.req)
  const titles: string[] = useDisplayTitle
    ? Object.values(appsItems).map((item: any) => item.displayTitle!)
    : Object.keys(appsItems)
  const appMiniToc = await getAutomatedPageMiniTocItems(titles, context)
  if (appMiniToc) {
    miniTocItems.push(...appMiniToc)
  }

  return { currentVersion, appsItems, categoriesWithoutSubcategories }
}

import path from 'path'
import fs from 'fs'
import type { GetServerSidePropsContext } from 'next'

import { readCompressedJsonFileFallback } from '@/frame/lib/read-json-file'
import { getOpenApiVersion } from '@/versions/lib/all-versions'
import { categoriesWithoutSubcategories } from '../../rest/lib/index'
import type { Context, ExtendedRequest } from '@/types'

interface AppsConfig {
  pages: Record<string, unknown>
}

// Per-page apps data shapes vary (enabled lists, permissions, etc.), so callers
// are expected to provide the concrete shape via the generic parameter.
type AppsData = Record<string, unknown>

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

export async function getAppsData<T extends AppsData = AppsData>(
  pageType: string,
  docsVersion: string,
  apiVersion?: string,
): Promise<T> {
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
    const data = readCompressedJsonFileFallback(appDataPath) as AppsData
    pageTypeMap.set(openApiVersion, data)
  }

  return pageTypeMap.get(openApiVersion)! as T
}

type AppsItemWithDisplayTitle = { displayTitle?: string }

export async function getAppsServerSideProps(
  context: GetServerSidePropsContext,
  pageType: string,
  { useDisplayTitle = false }: { useDisplayTitle?: boolean },
): Promise<{
  currentVersion: string
  appsItems: unknown
  categoriesWithoutSubcategories: string[]
}> {
  const { getAutomatedPageMiniTocItems } = await import('@/frame/lib/get-mini-toc-items')
  const { getAutomatedPageContextFromRequest } =
    await import('@/automated-pipelines/components/AutomatedPageContext')
  const req = context.req as unknown as ExtendedRequest
  const currentVersion = context.query.versionId as string
  const allVersions = req.context!.allVersions!
  const queryApiVersion = context.query.apiVersion as string
  const apiVersion: string = allVersions[currentVersion].apiVersions.includes(queryApiVersion)
    ? queryApiVersion
    : allVersions[currentVersion].latestApiVersion

  const appsItems: AppsData = await getAppsData(pageType, currentVersion, apiVersion)
  // Create minitoc
  const { miniTocItems } = getAutomatedPageContextFromRequest(req)
  const titles: string[] = useDisplayTitle
    ? Object.values(appsItems).map((item) => (item as AppsItemWithDisplayTitle).displayTitle!)
    : Object.keys(appsItems)
  // Note: getAutomatedPageMiniTocItems expects a `Context`, but this code path
  // historically passed Next.js's GetServerSidePropsContext at runtime. Keep
  // that runtime behavior but document the divergence via the assertion below.
  const appMiniToc = await getAutomatedPageMiniTocItems(titles, context as unknown as Context)
  if (appMiniToc) {
    miniTocItems.push(...appMiniToc)
  }

  return { currentVersion, appsItems, categoriesWithoutSubcategories }
}

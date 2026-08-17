import path from 'path'
import fs from 'fs'
import type { GetServerSidePropsContext } from 'next'

import { readCompressedJsonFileFallback } from '@/frame/lib/read-json-file'
import { createLogger } from '@/observability/logger'
import { getOpenApiVersion } from '@/versions/lib/all-versions'
import { categoriesWithoutSubcategories } from '../../rest/lib/index'
import type { Context, ExtendedRequest } from '@/types'

interface AppsConfig {
  pages: Record<string, unknown>
}

// Per-page apps data shapes vary (enabled lists, permissions, etc.), so callers
// are expected to provide the concrete shape via the generic parameter.
type AppsData = Record<string, unknown>

// Deduplicated on-disk format types.
// A leaf entry in the shared pool — an operation or permission object. Kept
// loose because consumers expect different shapes, but typed enough to convey
// intent and replace bare `unknown`.
type SharedAppsEntry = Record<string, unknown>

// Per-page index for permission pages: permName → metadata + indices into the pool.
interface PermissionsPageIndex {
  [permName: string]: {
    title: string
    displayTitle: string
    indices: number[]
  }
}

// Per-page index for rest pages: category → indices into the pool.
interface RestPageIndex {
  [category: string]: number[]
}

type AppsPageIndex = PermissionsPageIndex | RestPageIndex

// version-index.json: version → pageType → page index.
type AppsVersionIndex = Record<string, Record<string, AppsPageIndex>>

const logger = createLogger(import.meta.url)
const ENABLED_APPS_DIR = 'src/github-apps/data'
const githubAppsData = new Map<string, Map<string, AppsData>>()

// Shared dedup data — loaded once, shared across all versions
let sharedEntries: SharedAppsEntry[] | null = null
let sharedVersionIndex: AppsVersionIndex | null = null
let sharedFormatAvailable: boolean | null = null

// A missing shared-format file is expected (per-version files are the fallback),
// but a corrupt or unparseable file should fail loudly rather than silently
// degrade to the per-version files and hide bad generated data.
function isFileNotFoundError(err: unknown): boolean {
  if (!(err instanceof Error) || !('code' in err)) return false
  const code = (err as NodeJS.ErrnoException).code
  return code === 'ENOENT' || code === 'ENOTDIR'
}

function loadSharedAppsFormat(): boolean {
  if (sharedFormatAvailable !== null) return sharedFormatAvailable
  try {
    sharedEntries = readCompressedJsonFileFallback(
      path.join(ENABLED_APPS_DIR, 'shared', 'entries.json'),
    ) as SharedAppsEntry[]
    sharedVersionIndex = readCompressedJsonFileFallback(
      path.join(ENABLED_APPS_DIR, 'version-index.json'),
    ) as AppsVersionIndex
    // Freeze pool data so reconstructed objects (which return references into
    // the pool) can't be mutated by downstream code and leak across versions.
    Object.freeze(sharedEntries)
    for (const entry of sharedEntries) Object.freeze(entry)
    sharedFormatAvailable = true
  } catch (err) {
    if (isFileNotFoundError(err)) {
      // Shared files don't exist — fall back to per-version files silently.
      sharedFormatAvailable = false
    } else {
      // Corrupt JSON, schema mismatch, etc. — surface this instead of hiding it.
      logger.error('Failed to load shared GitHub Apps dedup format (corrupt data?)', {
        error: err instanceof Error ? err : new Error(String(err)),
      })
      throw err
    }
  }
  return sharedFormatAvailable
}

// Resolves a pool index into its entry, throwing a clear error if the index is
// out of bounds (e.g. from a stale or corrupt version-index.json).
function resolveSharedEntry(
  idx: number,
  pageType: string,
  openApiVersion: string,
): SharedAppsEntry {
  if (idx < 0 || idx >= sharedEntries!.length) {
    throw new RangeError(
      `GitHub Apps version-index references entry ${idx} for ${openApiVersion}/${pageType}, ` +
        `but the entries pool only has ${sharedEntries!.length} entries. ` +
        `The shared dedup data may be stale or corrupt.`,
    )
  }
  return sharedEntries![idx]
}

function reconstructAppsFromSharedFormat(
  pageType: string,
  openApiVersion: string,
): AppsData | null {
  if (!loadSharedAppsFormat()) return null
  const versionData = sharedVersionIndex?.[openApiVersion]
  if (!versionData) return null
  const pageData = versionData[pageType]
  if (!pageData) return null

  const isPermissions = pageType.includes('permissions')

  if (isPermissions) {
    // Reconstruct permission data: { permName: { title, displayTitle, permissions: [...] } }
    const result: Record<string, { title: string; displayTitle: string; permissions: unknown[] }> =
      {}
    for (const [permName, meta] of Object.entries(pageData as PermissionsPageIndex)) {
      result[permName] = {
        title: meta.title,
        displayTitle: meta.displayTitle,
        permissions: meta.indices.map((idx) => resolveSharedEntry(idx, pageType, openApiVersion)),
      }
    }
    return result
  } else {
    // Reconstruct rest data: { category: [...operations] }
    const result: Record<string, unknown[]> = {}
    for (const [category, indices] of Object.entries(pageData as RestPageIndex)) {
      result[category] = indices.map((idx) => resolveSharedEntry(idx, pageType, openApiVersion))
    }
    return result
  }
}

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
  logger.debug('getAppsData', { root: process.env.ROOT || '(not set)', path: ENABLED_APPS_DIR })

  const pageTypeMap = githubAppsData.get(pageType)!
  const filename = `${pageType}.json`
  const openApiVersion = getOpenApiVersion(docsVersion) + (apiVersion ? `-${apiVersion}` : '')
  if (!pageTypeMap.has(openApiVersion)) {
    // Try shared deduplicated format first
    const data = reconstructAppsFromSharedFormat(pageType, openApiVersion)
    if (data) {
      pageTypeMap.set(openApiVersion, data)
    } else {
      // Fall back to per-version JSON file. The `readCompressedJsonFileFallback()`
      // function will check for both a .br and .json extension.
      const appDataPath = path.join(ENABLED_APPS_DIR, openApiVersion, filename)
      pageTypeMap.set(openApiVersion, readCompressedJsonFileFallback(appDataPath) as AppsData)
    }
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

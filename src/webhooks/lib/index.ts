import fs, { promises as fsPromises } from 'fs'
import path from 'path'
import { brotliDecompress } from 'zlib'
import { promisify } from 'util'

import QuickLRU from 'quick-lru'

import { getOpenApiVersion } from '@/versions/lib/all-versions'
import { createLogger } from '@/observability/logger'

const logger = createLogger(import.meta.url)

export const WEBHOOK_DATA_DIR = 'src/webhooks/data'

interface WebhookBodyParameter {
  name?: string
  type?: string
  description?: string
  isRequired?: boolean
  childParamsGroups?: unknown[]
  [key: string]: unknown
}

interface WebhookActionData {
  bodyParameters?: WebhookBodyParameter[]
  summaryHtml?: string
  descriptionHtml?: string
  availability?: string[]
  payloadExample?: unknown
  [key: string]: unknown
}

type WebhookCategory = Record<string, WebhookActionData>
type WebhookData = Record<string, WebhookCategory>

// Pin fpt and ghec because they receive most traffic.
// Bound all GHES versions with LRU so schema cache memory cannot grow without limit.
const PINNED_OPEN_API_VERSIONS = new Set(['fpt', 'ghec'])
const pinnedCache = new Map<string, WebhookCategory>()
const LRU_MAX_SIZE = Math.max(1, parseInt(process.env.WEBHOOK_SCHEMA_LRU_SIZE ?? '', 10) || 96)
const lruCache = new QuickLRU<string, WebhookCategory>({ maxSize: LRU_MAX_SIZE })

// Concurrent cache misses for the same key share one file read.
const inflight = new Map<string, Promise<WebhookCategory>>()

const brotliDecompressAsync = promisify(brotliDecompress)

// Landing-page data has every webhook for a version, one action type each, and no nested params.
const initialWebhooksCache = new Map<string, InitialWebhook[]>()

interface InitialWebhook {
  name: string
  actionTypes: string[]
  data: WebhookActionData
}

export async function getInitialPageWebhooks(version: string): Promise<InitialWebhook[]> {
  if (initialWebhooksCache.has(version)) {
    return initialWebhooksCache.get(version) || []
  }
  const allWebhooks = await getWebhooks(version)
  const initialWebhooks: InitialWebhook[] = []

  // Show one action type per webhook on the landing page; the full payload loads on drill-down.
  for (const [key, webhook] of Object.entries(allWebhooks)) {
    const actionTypes = Object.keys(webhook)
    const defaultAction = actionTypes.length > 0 ? actionTypes[0] : ''

    const initialWebhook: InitialWebhook = {
      name: key,
      actionTypes,
      data: defaultAction ? webhook[defaultAction] : {},
    }

    // Sync stores childParamsGroups in sidecar files, so base category files need no stripping.
    initialWebhooks.push(initialWebhook)
  }
  initialWebhooksCache.set(version, initialWebhooks)
  return initialWebhooks
}

// Allow only lowercase letters, digits, and underscores in webhook category names.
// This blocks path traversal such as ../secret in user-supplied query parameters.
const SAFE_CATEGORY_RE = /^[a-z0-9_]+$/

// Loads one webhook category, such as check_run, on demand. Drill-down requests
// also merge the child-params sidecar so nested parameter data stays off the landing page.
export async function getWebhook(
  version: string,
  webhookCategory: string,
  { includeChildParams = true }: { includeChildParams?: boolean } = {},
): Promise<WebhookCategory | undefined> {
  if (!SAFE_CATEGORY_RE.test(webhookCategory)) return undefined

  const openApiVersion = getOpenApiVersion(version)

  // Use a filesystem-derived category name so unknown categories 404 and requests cannot traverse paths.
  const safeCategory = getWebhookCategories(version).find((name) => name === webhookCategory)
  if (!safeCategory) return undefined

  const cacheKey = `${openApiVersion}:${safeCategory}`
  const cache = PINNED_OPEN_API_VERSIONS.has(openApiVersion) ? pinnedCache : lruCache

  if (!cache.has(cacheKey)) {
    const basePath = path.join(WEBHOOK_DATA_DIR, openApiVersion, `${safeCategory}.json`)
    if (!inflight.has(cacheKey)) {
      inflight.set(
        cacheKey,
        loadWebhookFile(basePath).finally(() => inflight.delete(cacheKey)),
      )
    }
    cache.set(cacheKey, await inflight.get(cacheKey)!)
  }

  const slimData = cache.get(cacheKey)
  if (!slimData || !includeChildParams) return slimData

  // Drill-down childParamsGroups stay uncached because they are large and needed per request.
  const childParamsPath = path.join(
    WEBHOOK_DATA_DIR,
    openApiVersion,
    `${safeCategory}.child-params.json`,
  )
  const childParams = await loadChildParamsFile(childParamsPath)
  if (!childParams) return slimData

  return mergeChildParams(slimData, childParams)
}

// Loads landing-page data for every category in parallel, without childParamsGroups.
export async function getWebhooks(version: string): Promise<WebhookData> {
  const categories = getWebhookCategories(version)
  const entries = await Promise.all(
    categories.map(async (category) => [
      category,
      await getWebhook(version, category, { includeChildParams: false }),
    ]),
  )
  return Object.fromEntries(entries)
}

// Mirrors getRestCategories in src/rest/lib/index.ts.
// Cache the static data-directory listing because getWebhook uses it as a path-injection allowlist.
const categoriesCache = new Map<string, string[]>()
export function getWebhookCategories(version: string): string[] {
  const openApiVersion = getOpenApiVersion(version)
  const cached = categoriesCache.get(openApiVersion)
  if (cached) return cached
  const categories = fs
    .readdirSync(path.join(WEBHOOK_DATA_DIR, openApiVersion))
    .filter((f) => f.endsWith('.json') && !f.endsWith('.child-params.json'))
    .map((f) => f.replace('.json', ''))
    .sort()
  categoriesCache.set(openApiVersion, categories)
  return categories
}

type ChildParamsData = Record<string, Record<string, unknown[]>>

// Child-params sidecars are optional; categories without nested groups return null.
// getWebhook passes a filesystem-derived path, never raw request input.
async function loadChildParamsFile(filePath: string): Promise<ChildParamsData | null> {
  try {
    const compressed = await fsPromises.readFile(`${filePath}.br`)
    const decompressed = await brotliDecompressAsync(compressed)
    return JSON.parse(decompressed.toString()) as ChildParamsData
  } catch {
    // Missing sidecars return null; corrupt or unreadable plain JSON logs before dropping nested params.
    try {
      const raw = await fsPromises.readFile(filePath, 'utf-8')
      return JSON.parse(raw) as ChildParamsData
    } catch (err) {
      if ((err as NodeJS.ErrnoException)?.code !== 'ENOENT') {
        logger.error(`Failed to load child params from ${filePath}`, err as Error)
      }
      return null
    }
  }
}

function mergeChildParams(
  slimData: WebhookCategory,
  childParams: ChildParamsData,
): WebhookCategory {
  const merged: WebhookCategory = {}
  for (const [action, actionData] of Object.entries(slimData)) {
    const actionChildParams = childParams[action]
    if (!actionChildParams || !actionData.bodyParameters) {
      merged[action] = actionData
      continue
    }
    merged[action] = {
      ...actionData,
      bodyParameters: actionData.bodyParameters.map((param) => {
        const paramChildGroups = param.name ? actionChildParams[param.name] : undefined
        if (paramChildGroups) {
          return { ...param, childParamsGroups: paramChildGroups }
        }
        return param
      }),
    }
  }
  return merged
}

// Read category files asynchronously so cache misses do not block the event loop.
// Staging can serve Brotli files; plain JSON remains the fallback.
// getWebhook passes a filesystem-derived basePath, never raw request input.
async function loadWebhookFile(basePath: string): Promise<WebhookCategory> {
  try {
    const compressed = await fsPromises.readFile(`${basePath}.br`)
    const decompressed = await brotliDecompressAsync(compressed)
    return JSON.parse(decompressed.toString()) as WebhookCategory
  } catch {
    // Missing or unreadable Brotli files fall back to plain JSON.
    const raw = await fsPromises.readFile(basePath, 'utf-8')
    return JSON.parse(raw) as WebhookCategory
  }
}

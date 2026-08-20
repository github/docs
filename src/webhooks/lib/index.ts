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

// Two-tier cache: fpt and ghec are pinned in a plain Map (never evicted) because
// they account for the vast majority of traffic. All other versions (ghes) go
// into a bounded LRU cache to prevent unbounded memory growth.
const PINNED_OPEN_API_VERSIONS = new Set(['fpt', 'ghec'])
const pinnedCache = new Map<string, WebhookCategory>()
const LRU_MAX_SIZE = Math.max(1, parseInt(process.env.WEBHOOK_SCHEMA_LRU_SIZE ?? '', 10) || 96)
const lruCache = new QuickLRU<string, WebhookCategory>({ maxSize: LRU_MAX_SIZE })

// In-flight deduplication: concurrent cache misses for the same key share one
// file read instead of each triggering their own.
const inflight = new Map<string, Promise<WebhookCategory>>()

const brotliDecompressAsync = promisify(brotliDecompress)

// cache for webhook data for when you first visit the webhooks page where we
// show all webhooks for the current version but only 1 action type per webhook
// and also no nested parameters
const initialWebhooksCache = new Map<string, InitialWebhook[]>()

interface InitialWebhook {
  name: string
  actionTypes: string[]
  data: WebhookActionData
}

// return the webhoook data as described for `initialWebhooksCache` for the given
// version
export async function getInitialPageWebhooks(version: string): Promise<InitialWebhook[]> {
  if (initialWebhooksCache.has(version)) {
    return initialWebhooksCache.get(version) || []
  }
  const allWebhooks = await getWebhooks(version)
  const initialWebhooks: InitialWebhook[] = []

  // The webhooks page shows all webhooks but for each webhook only a single
  // webhook action type at a time.  We pick the first webhook type from each
  // webhook's set of action types to show.
  for (const [key, webhook] of Object.entries(allWebhooks)) {
    const actionTypes = Object.keys(webhook)
    const defaultAction = actionTypes.length > 0 ? actionTypes[0] : ''

    const initialWebhook: InitialWebhook = {
      name: key,
      actionTypes,
      data: defaultAction ? webhook[defaultAction] : {},
    }

    // The base category files no longer contain childParamsGroups (they are
    // split into separate .child-params.json files at sync time), so no
    // stripping is needed here.

    initialWebhooks.push(initialWebhook)
  }
  initialWebhooksCache.set(version, initialWebhooks)
  return initialWebhooks
}

// Allowlist pattern for webhook category names: only lowercase letters, digits,
// and underscores. This prevents path traversal (e.g. "../secret") when the
// category comes from user-supplied query parameters.
const SAFE_CATEGORY_RE = /^[a-z0-9_]+$/

// returns the webhook data for the given version and webhook category (e.g.
// `check_run`) -- this includes all the data per webhook action type and all
// nested parameters. Loads only the requested category file on demand.
// When `includeChildParams` is true (default), also loads and merges the
// separate child-params file so drill-down pages get full nested parameter data.
export async function getWebhook(
  version: string,
  webhookCategory: string,
  { includeChildParams = true }: { includeChildParams?: boolean } = {},
): Promise<WebhookCategory | undefined> {
  if (!SAFE_CATEGORY_RE.test(webhookCategory)) return undefined

  const openApiVersion = getOpenApiVersion(version)

  // Resolve the requested category against the on-disk category list so every
  // file path below is built from a filesystem-derived name rather than the
  // raw request value. This both 404s unknown categories and severs the
  // user-input taint chain (defeats path traversal / CodeQL path-injection).
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

  // Merge childParamsGroups from the separate file for drill-down requests.
  // This data is not cached — it's large and only needed per-request.
  const childParamsPath = path.join(
    WEBHOOK_DATA_DIR,
    openApiVersion,
    `${safeCategory}.child-params.json`,
  )
  const childParams = await loadChildParamsFile(childParamsPath)
  if (!childParams) return slimData

  return mergeChildParams(slimData, childParams)
}

// returns all the webhook data for the given version by loading each category
// file in parallel. Does NOT include childParamsGroups — this is used for
// the landing page. Use getWebhook() for drill-down with full nested params.
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

// returns the list of webhook category names available for the given version
// by reading the data directory. Mirrors getRestCategories() in src/rest/lib/index.ts.
// Memoized per openApiVersion: the data directory is static at runtime, and
// getWebhook() consults this on every call as a path-injection allowlist, so we
// must not pay a readdirSync on each lookup.
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

// Load the child-params file for a webhook category. Returns null if the file
// does not exist (some webhooks have no childParamsGroups).
// The filePath is built from a filesystem-derived category name (validated
// against getWebhookCategories in getWebhook), never directly from request input.
async function loadChildParamsFile(filePath: string): Promise<ChildParamsData | null> {
  try {
    const compressed = await fsPromises.readFile(`${filePath}.br`)
    const decompressed = await brotliDecompressAsync(compressed)
    return JSON.parse(decompressed.toString()) as ChildParamsData
  } catch {
    // The brotli variant is optional; fall back to plain JSON. A genuine
    // missing-file (ENOENT) means this category simply has no childParamsGroups,
    // so we return null. Any other error (malformed JSON, truncated/corrupt
    // read, permission denied) is a real failure that would silently drop
    // nested params on drill-down, so we log it loudly before returning null.
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

// Merge childParamsGroups back into slim webhook data for drill-down responses.
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

// Read asynchronously to avoid blocking the event loop on a cache miss.
// Try the brotli-compressed variant first (used in staging), then plain JSON.
// basePath is built from a filesystem-derived category name (validated against
// getWebhookCategories in getWebhook), never directly from request input.
async function loadWebhookFile(basePath: string): Promise<WebhookCategory> {
  try {
    const compressed = await fsPromises.readFile(`${basePath}.br`)
    const decompressed = await brotliDecompressAsync(compressed)
    return JSON.parse(decompressed.toString()) as WebhookCategory
  } catch {
    // .br missing or unreadable — fall back to plain JSON
    const raw = await fsPromises.readFile(basePath, 'utf-8')
    return JSON.parse(raw) as WebhookCategory
  }
}

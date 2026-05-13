import fs, { promises as fsPromises } from 'fs'
import path from 'path'
import { brotliDecompress } from 'zlib'
import { promisify } from 'util'

import QuickLRU from 'quick-lru'

import { getOpenApiVersion } from '@/versions/lib/all-versions'

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

    // Remove all nested params for the initial webhooks page — we'll load
    // them on demand via the /api/webhooks/v1 endpoint. Shallow-clone the
    // data object and each body parameter first so we don't mutate the
    // objects cached by getWebhooks(), which would cause the lazy-loaded
    // fetch to return empty childParamsGroups.
    if (initialWebhook.data.bodyParameters) {
      initialWebhook.data = {
        ...initialWebhook.data,
        bodyParameters: initialWebhook.data.bodyParameters.map((bodyParam) => ({
          ...bodyParam,
          ...(bodyParam.childParamsGroups ? { childParamsGroups: [] } : {}),
        })),
      }
    }

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
export async function getWebhook(
  version: string,
  webhookCategory: string,
): Promise<WebhookCategory | undefined> {
  if (!SAFE_CATEGORY_RE.test(webhookCategory)) return undefined

  const openApiVersion = getOpenApiVersion(version)
  const cacheKey = `${openApiVersion}:${webhookCategory}`
  const cache = PINNED_OPEN_API_VERSIONS.has(openApiVersion) ? pinnedCache : lruCache

  if (!cache.has(cacheKey)) {
    const basePath = path.join(WEBHOOK_DATA_DIR, openApiVersion, `${webhookCategory}.json`)
    if (!inflight.has(cacheKey)) {
      inflight.set(
        cacheKey,
        loadWebhookFile(basePath).finally(() => inflight.delete(cacheKey)),
      )
    }
    cache.set(cacheKey, await inflight.get(cacheKey)!)
  }

  return cache.get(cacheKey)
}

// returns all the webhook data for the given version by loading each category
// file in parallel. Results are cached per-category so repeated calls are cheap.
export async function getWebhooks(version: string): Promise<WebhookData> {
  const categories = getWebhookCategories(version)
  const entries = await Promise.all(
    categories.map(async (category) => [category, await getWebhook(version, category)]),
  )
  return Object.fromEntries(entries)
}

// returns the list of webhook category names available for the given version
// by reading the data directory. Mirrors getRestCategories() in src/rest/lib/index.ts.
export function getWebhookCategories(version: string): string[] {
  const openApiVersion = getOpenApiVersion(version)
  return fs
    .readdirSync(path.join(WEBHOOK_DATA_DIR, openApiVersion))
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace('.json', ''))
    .sort()
}

// Read asynchronously to avoid blocking the event loop on a cache miss.
// Try the brotli-compressed variant first (used in staging), then plain JSON.
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

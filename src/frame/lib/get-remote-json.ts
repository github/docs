import path from 'path'
import fs from 'fs'
import crypto from 'crypto'
import zlib from 'zlib'

import { fetchWithRetry } from './fetch-utils'
import statsd from '@/observability/lib/statsd'

// Cache deflated raw redirect JSON strings for every URL.
// Raw files of up to 20 MB compress to under 1 MB with deflate.
export const cache = new Map<string, Buffer>()

// Also keep recently used parsed objects, bounded by raw JSON size.
// Inflating and parsing a 6-20 MB file costs about 15-40 ms per call.
// Parsed heap use is about 1.4 times the raw size.
export const PARSED_CACHE_MAX_BYTES = 24 * 1024 * 1024
export const parsedCache = new Map<string, { value: unknown; bytes: number }>()
let parsedCacheBytes = 0

const inProd = process.env.NODE_ENV === 'production'

interface GetRemoteJSONConfig {
  retry?: {
    limit?: number
  }
  timeout?: {
    response?: number
  }
}

function compressStringToCache(cacheKey: string, jsonString: string): void {
  cache.set(cacheKey, zlib.deflateSync(Buffer.from(jsonString)))
}

function forgetParsed(cacheKey: string): void {
  const entry = parsedCache.get(cacheKey)
  if (!entry) return
  parsedCache.delete(cacheKey)
  parsedCacheBytes -= entry.bytes
}

function rememberParsed(cacheKey: string, value: unknown, bytes: number): void {
  forgetParsed(cacheKey)
  if (bytes > PARSED_CACHE_MAX_BYTES) return
  // Callers share this object, so freeze it to prevent accidental mutation.
  if (value && typeof value === 'object') Object.freeze(value)
  parsedCache.set(cacheKey, { value, bytes })
  parsedCacheBytes += bytes
  // Map iteration follows insertion order, so the first key is least recently used.
  for (const [key] of parsedCache) {
    if (parsedCacheBytes <= PARSED_CACHE_MAX_BYTES) break
    forgetParsed(key)
  }
}

function getParsed(cacheKey: string): { value: unknown } | undefined {
  const entry = parsedCache.get(cacheKey)
  if (!entry) return undefined
  // Reinsert to mark as most recently used.
  parsedCache.delete(cacheKey)
  parsedCache.set(cacheKey, entry)
  return entry
}

function decompressFromCache(cacheKey: string): unknown {
  const compressed = cache.get(cacheKey)
  if (!compressed) return undefined
  const raw = zlib.inflateSync(compressed)
  const value = JSON.parse(raw.toString())
  rememberParsed(cacheKey, value, raw.length)
  return value
}

// Archived redirects.json files from docs-ghes-<release> repos are large and static.
// Lookup checks memory, then .remotejson-cache, then downloads and caches the file.
// Production reads the prewarmed disk cache but never writes to disk.
export default async function getRemoteJSON(
  url: string,
  config?: GetRemoteJSONConfig,
): Promise<unknown> {
  // The URL is enough for archived enterprise JSON because config only affects cache misses.
  const cacheKey = url

  // Metrics assume a memory hit until lookup proves otherwise.
  let fromCache = 'memory'

  if (!cache.has(cacheKey)) {
    fromCache = 'not'

    let foundOnDisk = false
    const tempFilename = crypto.createHash('md5').update(url).digest('hex')

    // Runtime lookup lets unit tests override the disk cache root.
    const ROOT = process.env.GET_REMOTE_JSON_DISK_CACHE_ROOT || '.remotejson-cache'

    const onDisk = path.join(ROOT, `${tempFilename}.json`)

    try {
      const body = fs.readFileSync(onDisk, 'utf-8')
      // Empty disk files count as cache misses.
      if (body) {
        try {
          // Compress the raw string after validation to avoid parse-stringify overhead.
          const parsed = JSON.parse(body)
          compressStringToCache(cacheKey, body)
          rememberParsed(cacheKey, parsed, Buffer.byteLength(body))
          fromCache = 'disk'
          foundOnDisk = true
        } catch (error) {
          if (!(error instanceof SyntaxError)) {
            throw error
          }
        }
      }
    } catch (error) {
      if (
        !(
          error instanceof SyntaxError ||
          (error instanceof Error &&
            'code' in error &&
            (error as NodeJS.ErrnoException).code === 'ENOENT')
        )
      ) {
        throw error
      }
    }

    if (!foundOnDisk) {
      // A 2xx response can still be non-JSON, so content type gates deserialization.
      const retries = config?.retry?.limit || 0
      const timeout = config?.timeout?.response

      const res = await fetchWithRetry(
        url,
        {},
        {
          retries,
          timeout,
          throwHttpErrors: true,
          // Large cached redirects.json files need a short TTFB budget without a body deadline.
          timeoutMode: 'ttfb',
        },
      )

      const contentType = res.headers.get('content-type')
      if (!contentType || !contentType.startsWith('application/json')) {
        throw new Error(`Fetching '${url}' resulted in a non-JSON response (${contentType})`)
      }

      const body = await res.text()
      const parsed = JSON.parse(body)
      compressStringToCache(cacheKey, body)
      rememberParsed(cacheKey, parsed, Buffer.byteLength(body))

      // Local review and tests persist downloads so later runs can reuse them.
      if (!inProd) {
        fs.mkdirSync(path.dirname(onDisk), { recursive: true })
        fs.writeFileSync(onDisk, body, 'utf-8')
      }
    }
  }
  const parsed = getParsed(cacheKey)
  const tags = [`from_cache:${fromCache}`]
  if (fromCache === 'memory') tags.push(`parsed_cache:${parsed ? 'hit' : 'miss'}`)
  statsd.increment('middleware.get_remote_json', 1, tags)
  return parsed ? parsed.value : decompressFromCache(cacheKey)
}

import path from 'path'
import fs from 'fs'
import crypto from 'crypto'
import zlib from 'zlib'

import { fetchWithRetry } from './fetch-utils'
import statsd from '@/observability/lib/statsd'

// Cache deflated raw redirect JSON strings instead of parsed objects.
// Parsed 5-10 MB files compress to about 1-2 MB with deflate. Each access pays
// about 1 ms to inflate and parse, which is small beside the memory savings.
export const cache = new Map<string, Buffer>()

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

function decompressFromCache(cacheKey: string): unknown {
  const compressed = cache.get(cacheKey)
  if (!compressed) return undefined
  return JSON.parse(zlib.inflateSync(compressed).toString())
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
          JSON.parse(body)
          compressStringToCache(cacheKey, body)
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
      JSON.parse(body)
      compressStringToCache(cacheKey, body)

      // Local review and tests persist downloads so later runs can reuse them.
      if (!inProd) {
        fs.mkdirSync(path.dirname(onDisk), { recursive: true })
        fs.writeFileSync(onDisk, body, 'utf-8')
      }
    }
  }
  const tags = [`from_cache:${fromCache}`]
  statsd.increment('middleware.get_remote_json', 1, tags)
  return decompressFromCache(cacheKey)
}

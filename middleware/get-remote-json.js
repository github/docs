import path from 'path'
import fs from 'fs'
import crypto from 'crypto'

import got from 'got'
import statsd from '#src/observability/lib/statsd.js'

// The only reason this is exported is for the sake of the unit tests'
// ability to test in-memory miss after purging this with a mutation
export const cache = new Map()

const inProd = process.env.NODE_ENV === 'production'

// Wrapper on `got()` that is able to both cache in memory and on disk.
// The on-disk caching is in `.remotejson/`.
// We use this for downloading `redirects.json` files from the
// help-docs-archived-enterprise-versions repo as a proxy. A lot of those
// .json files are large and they're also static which makes them
// ideal for caching.
// Note that there's 2 layers of caching here:
//  1. Is it in memory cache?
//  2. No, is it on disk?
//  3. No, download from the internet then store responses in memory and disk
export default async function getRemoteJSON(url, config) {
  // We could get fancy and make the cache key depend on the `config` too
  // given that this is A) only used for archived enterprise stuff,
  // and B) the config is only applicable on cache miss when doing the `got()`.
  const cacheKey = url

  // Assume it's in the in-memory cache first.
  // Later we'll update this if we find we need to.
  let fromCache = 'memory'

  if (!cache.has(cacheKey)) {
    fromCache = 'not'

    let foundOnDisk = false
    const tempFilename = crypto.createHash('md5').update(url).digest('hex')

    // Do this here instead of at the top of the file so that it becomes
    // possible to override this in unit tests.
    const ROOT = process.env.GET_REMOTE_JSON_DISK_CACHE_ROOT || '.remotejson-cache'

    const onDisk = path.join(ROOT, `${tempFilename}.json`)

    try {
      const body = fs.readFileSync(onDisk, 'utf-8')
      // It might exist on disk, but it could be empty
      if (body) {
        try {
          // It might be corrupted JSON.
          cache.set(cacheKey, JSON.parse(body))
          fromCache = 'disk'
          foundOnDisk = true
        } catch (error) {
          if (!(error instanceof SyntaxError)) {
            throw error
          }
        }
      }
    } catch (error) {
      if (!(error instanceof SyntaxError || error.code === 'ENOENT')) {
        throw error
      }
    }

    if (!foundOnDisk) {
      // got will, by default, follow redirects and it will throw if the ultimate
      // response is not a 2xx.
      // But it's possible that the page is a 200 OK but it's just not a JSON
      // page at all. Then we can't assume we can deserialize it.
      const res = await got(url, config)
      if (!res.headers['content-type'].startsWith('application/json')) {
        throw new Error(
          `Fetching '${url}' resulted in a non-JSON response (${res.headers['content-type']})`,
        )
      }
      cache.set(cacheKey, JSON.parse(res.body))

      // Only write to disk for testing and local preview.
      // In production, we never write to disk. Only in-memory.
      if (!inProd) {
        fs.mkdirSync(path.dirname(onDisk), { recursive: true })
        fs.writeFileSync(onDisk, res.body, 'utf-8')
      }
    }
  }
  const tags = [`url:${url}`, `from_cache:${fromCache}`]
  statsd.increment('middleware.get_remote_json', 1, tags)
  return cache.get(cacheKey)
}

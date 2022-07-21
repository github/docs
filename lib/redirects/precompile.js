import assert from 'assert'
import fs from 'fs/promises'
import path from 'path'
import { isPromise } from 'util/types'
import { fileURLToPath } from 'url'

import { readCompressedJsonFileFallback } from '../read-json-file.js'
import getExceptionRedirects from './exception-redirects.js'

import { latest } from '../enterprise-server-releases.js'

function diskMemoize(filePath, asyncFn, maxAgeSeconds = 60 * 60) {
  // The logging that the disk memoizer does is pretty useful to humans,
  // but it's only really useful when you're running `npm run dev` or
  // something.
  const log = (...args) => {
    if (process.env.NODE_ENV === 'development') console.log(...args)
  }
  return async (...args) => {
    try {
      const stats = await fs.stat(filePath)
      const ageSeconds = (new Date().getTime() - stats.mtime.getTime()) / 1000
      if (ageSeconds < maxAgeSeconds) {
        const value = JSON.parse(await fs.readFile(filePath, 'utf-8'))
        log(`Redirects disk-cache HIT on ${filePath}`)
        return value
      }
      log(`Redirects disk-cache ${filePath} too old`)
    } catch (err) {
      if (err instanceof SyntaxError) {
        console.warn(`Syntax error when trying to JSON parse the ${filePath}`, err)
      } else if (err.code !== 'ENOENT') throw err
    }
    log(`Redirects disk-cache MISS on ${filePath}`)
    const promise = asyncFn(...args)
    assert(isPromise(promise), "memoized function didn't return a promise")
    return promise.then(async (value) => {
      await fs.writeFile(
        filePath,
        JSON.stringify(value, undefined, process.env.NODE_ENV === 'development' ? 2 : 0),
        'utf-8'
      )

      return value
    })
  }
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DISK_CACHE_FILEPATH = path.join(__dirname, '.redirects-cache.json')

// This function runs at server warmup and precompiles possible redirect routes.
// It outputs them in key-value pairs within a neat Javascript object: { oldPath: newPath }
const precompileRedirects = diskMemoize(DISK_CACHE_FILEPATH, async (pageList) => {
  const allRedirects = readCompressedJsonFileFallback('./lib/redirects/static/developer.json')

  const externalRedirects = readCompressedJsonFileFallback('./lib/redirects/external-sites.json')
  Object.assign(allRedirects, externalRedirects)

  // Exception redirects are those that are essentially unicorn one-offs.
  // For example, we have redirects for documents that used to be on
  // `free-pro-team@latest` but have now been moved to
  // `enterprise-cloud@latest`. The advantage of the exception redirects
  // file is that it's encoded in plain text so it's possible to write
  // comments and it's also possible to write 1 destination URL once
  // for each N redirect origins
  const exceptions = getExceptionRedirects()
  Object.assign(allRedirects, exceptions)

  // CURRENT PAGES PERMALINKS AND FRONTMATTER
  // create backwards-compatible old paths for page permalinks and frontmatter redirects
  pageList
    .filter((page) => page.languageCode === 'en')
    .forEach((page) => Object.assign(allRedirects, page.buildRedirects()))

  Object.entries(allRedirects).forEach(([fromURI, toURI]) => {
    // If the destination URL has a hardcoded `enterprise-server@latest` in
    // it we need to rewrite that now.
    // We never want to redirect to that as the final URL (in the 301 response)
    // but it might make sense for it to be in the `developer.json`
    // file since that it static.
    //
    //
    if (toURI.includes('/enterprise-server@latest')) {
      allRedirects[fromURI] = toURI.replace(
        '/enterprise-server@latest',
        `/enterprise-server@${latest}`
      )
    }
  })

  return allRedirects
})
export default precompileRedirects

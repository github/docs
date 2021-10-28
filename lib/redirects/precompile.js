import assert from 'assert'
import fs from 'fs/promises'
import path from 'path'
import { isPromise } from 'util/types'
import { fileURLToPath } from 'url'

import readJsonFile from '../read-json-file.js'
import { latest } from '../../lib/enterprise-server-releases.js'
import getExceptionRedirects from './exception-redirects.js'
import { languageKeys } from '../languages.js'

function diskMemoize(filePath, asyncFn, maxAgeSeconds = 60 * 60) {
  return async (...args) => {
    try {
      const stats = await fs.stat(filePath)
      const ageSeconds = (new Date().getTime() - stats.mtime.getTime()) / 1000
      if (ageSeconds < maxAgeSeconds) {
        const value = JSON.parse(await fs.readFile(filePath, 'utf-8'))
        console.log(`Redirects disk-cache HIT on ${filePath}`)
        return value
      }
      console.log(`Redirects disk-cache ${filePath} too old`)
    } catch (err) {
      if (err.code !== 'ENOENT') throw err
    }
    console.log(`Redirects disk-cache MISS on ${filePath}`)
    const promise = asyncFn(...args)
    assert(isPromise(promise), "memoized function didn't return a promise")
    return promise.then(async (value) => {
      await fs.writeFile(filePath, JSON.stringify(value), 'utf-8')
      return value
    })
  }
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DISK_CACHE_FILEPATH = path.join(__dirname, `.redirects-cache_${languageKeys.join('_')}.json`)

// This function runs at server warmup and precompiles possible redirect routes.
// It outputs them in key-value pairs within a neat Javascript object: { oldPath: newPath }
const precompileRedirects = diskMemoize(DISK_CACHE_FILEPATH, async (pageList) => {
  const allRedirects = readJsonFile('./lib/redirects/static/developer.json')

  // Replace hardcoded 'latest' with real value in the redirected path
  Object.entries(allRedirects).forEach(([oldPath, newPath]) => {
    allRedirects[oldPath] = newPath.replace(
      'enterprise-server@latest',
      `enterprise-server@${latest}`
    )
  })

  // Exception redirects are those that are essentially unicorn one-offs.
  // For example, we have redirects for documents that used to be on
  // `free-pro-team@latest` but have now been moved to
  // `enterprise-cloud@latest`. The advantage of the exception redirects
  // file is that it's encoded in plain text so it's possible to write
  // comments and it's also possible to write 1 destination URL once
  // for each N redirect origins
  const exceptions = getExceptionRedirects()
  Object.entries(exceptions).forEach(([fromURL, toURL]) => {
    allRedirects[fromURL] = `/en${toURL}`
    for (const languageCode of languageKeys) {
      allRedirects[`/${languageCode}${fromURL}`] = `/${languageCode}${toURL}`
    }
  })

  // CURRENT PAGES PERMALINKS AND FRONTMATTER
  // create backwards-compatible old paths for page permalinks and frontmatter redirects
  pageList.forEach((page) => Object.assign(allRedirects, page.buildRedirects()))

  return allRedirects
})
export default precompileRedirects

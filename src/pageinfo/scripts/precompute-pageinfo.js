#!/usr/bin/env node

/**
 * This script gathers all English pages, computes each page's
 * 'title', 'intro' and 'product' properties. These things are then stored
 * in a JSON file (and gzipped) on disk. Then, the pageinfo middleware
 * can load in that JSON file to have a cache of pageinfo for all English
 * pages.
 * Now, when someone requests `/api/pageinfo?pathname=/en/foo/bar`, for the
 * backend, it just needs to read from a precomputed cache file instead
 * of having to do this computation on every request. Time saved, up front.
 *
 * Why cache?: Despite being a fast computation (3 Liquid + Markdown renders),
 * it still adds up. And it's safe and cheap to precompute in advance.
 *
 * Why only the English?: To make the file not too large.
 * Given how good these things compress, we might consider, in the
 * future, to do all languages.
 *
 * Why brotli?: Because the file gets included in the Docker container and
 * there every byte counts.
 *
 * When is this script run?: On every push to main, it gets computed
 * and uses actions/cache to store the result. Meaning, it's not run
 * during deployment. (During the deploy it only *downloads* from
 * actions/cache).
 */

import fs from 'fs'
import { brotliCompressSync } from 'zlib'

import { loadPages, loadUnversionedTree } from '#src/frame/lib/page-data.js'
import { CACHE_FILE_PATH, getPageInfo } from '../middleware.js'

main()

const CI = Boolean(JSON.parse(process.env.CI || 'false'))

async function main() {
  const unversionedTree = await loadUnversionedTree(['en'])
  const pageList = await loadPages(unversionedTree, ['en'])

  let label = `Compute pageinfos for ${pageList.length.toLocaleString()} pages`
  console.time(label)
  const pageinfos = {}
  for (const page of pageList) {
    const pathname = page.permalinks[0].href
    try {
      const computed = await getPageInfo(page, pathname)
      if (computed) {
        pageinfos[pathname] = computed
      }
    } catch (error) {
      console.error(`Error computing pageinfo for ${page.fullPath} (${pathname})`)
      throw error
    }
  }
  console.timeEnd(label)

  label = `Serialize, compress, and write to ${CACHE_FILE_PATH}`
  console.time(label)
  const payload = CI ? JSON.stringify(pageinfos) : JSON.stringify(pageinfos, null, 2)
  const payloadBuffer = Buffer.from(payload, 'utf-8')
  const payloadCompressed = brotliCompressSync(payloadBuffer)
  fs.writeFileSync(CACHE_FILE_PATH, payloadCompressed)
  console.timeEnd(label)
  console.log(
    `Wrote ${Object.keys(pageinfos).length.toLocaleString()} pageinfos to ${CACHE_FILE_PATH}`,
  )
}

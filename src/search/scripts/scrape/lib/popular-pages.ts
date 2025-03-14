import { join } from 'path'
import { existsSync } from 'fs'
import fs from 'fs/promises'

import { getPlanVersionFromIndexVersion } from '@/search/lib/elasticsearch-versions.js'

import type { Redirects, PopularPages } from '@/search/scripts/scrape/types'

export default async function getPopularPages(
  dirPath: string,
  redirects: Redirects,
  indexVersion: string,
  language: string,
): Promise<PopularPages> {
  const planVersion = getPlanVersionFromIndexVersion(indexVersion)
  let filePath = join(dirPath, 'hydro/rollups/pageviews', language, planVersion, 'rollup.json')
  if (!existsSync(filePath) && language !== 'en') {
    console.warn("Trying the rollup for 'en'")
    language = 'en'
    filePath = join(dirPath, 'hydro/rollups/pageviews', language, planVersion, 'rollup.json')
  }
  if (!existsSync(filePath)) {
    throw new Error(`No rollup found for version '${planVersion}'. Tried ${filePath}`)
  }
  const rollupRaw = await fs.readFile(filePath, 'utf-8')

  // First iterate through the array of objects, not making an assumption
  // that the first one is the biggest one.
  const all: { [key: string]: number } = {}
  for (const [path, count] of Object.entries(JSON.parse(rollupRaw))) {
    if (!path) {
      // Can happen if the SQL query is, for some unknown reason, finding
      // a path that is either `null` or an empty string. Treat it as a
      // junk entry and skip it.
      continue
    }
    if (path === 'index') {
      // That's the home page which doesn't count. It doesn't count because
      // people don't arrive on that for the information they seek. It's
      // merely a navigation tool.
      continue
    }
    if (path.startsWith('early-access/')) {
      // We never index these anyway so their popularity is never relevant.
      continue
    }
    all[path] = count as number
  }

  const biggestCount = Math.max(...Object.values(all))
  const popularPages: PopularPages = {}
  for (const [path, count] of Object.entries(all)) {
    // Don't bother writing massively long floating point numbers
    // because reducing it makes the JSON records smaller and we don't
    // need any more precision than 7 significant figures.
    const ratio = Number((count / biggestCount).toFixed(7))

    // The reason we're heeding redirects is because it's possible
    // that the JSON file is older/"staler" than the
    // content itself.
    popularPages[redirects[path] || path] = ratio
  }

  return popularPages
}

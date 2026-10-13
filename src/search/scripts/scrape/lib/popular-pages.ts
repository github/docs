import { join } from 'path'
import { existsSync } from 'fs'
import fs from 'fs/promises'

import { getPlanVersionFromIndexVersion } from '@/search/lib/elasticsearch-versions'

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

  // Find the biggest count after filtering because rollups are not guaranteed to be sorted.
  const all: { [key: string]: number } = {}
  for (const [path, count] of Object.entries(JSON.parse(rollupRaw))) {
    if (!path) {
      // Skip null or empty SQL rollup paths as junk entries.
      continue
    }
    if (path === 'index') {
      // Skip the homepage because it serves navigation rather than specific search intent.
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
    // Seven decimal places keep records smaller without useful popularity precision loss.
    const ratio = Number((count / biggestCount).toFixed(7))

    // Apply redirects because rollups can lag behind content changes.
    popularPages[redirects[path] || path] = ratio
  }

  return popularPages
}

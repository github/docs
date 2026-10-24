import { join } from 'path'
import { existsSync } from 'fs'
import fs from 'fs/promises'

import { getPlanVersionFromIndexVersion } from '@/search/lib/elasticsearch-versions'

import type { Page, Redirects, PopularPages } from '@/search/scripts/scrape/types'

export function buildRedirects(pages: Pick<Page, 'relativePath' | 'redirect_from'>[]): Redirects {
  // Match the popularity lookup key in build-records-from-api, so actions/index.md becomes actions.
  const toKey = (page: Pick<Page, 'relativePath'>) =>
    page.relativePath.replace('/index.md', '').replace('.md', '')
  const pageKeys = new Set(pages.map(toKey))
  const redirects: Redirects = {}
  for (const page of pages) {
    const href = toKey(page)
    for (let redirectFrom of page.redirect_from || []) {
      // redirect_from values start with / and often end with /.
      if (redirectFrom.startsWith('/')) redirectFrom = redirectFrom.slice(1)
      if (redirectFrom.endsWith('/')) redirectFrom = redirectFrom.slice(0, -1)
      // Some live pages appear in another page's redirect_from for other versions, so keep their counts separate.
      if (pageKeys.has(redirectFrom)) continue
      redirects[redirectFrom] = href
    }
  }
  return redirects
}

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
    // Combine old and new paths because rollups can lag behind content changes.
    const key = redirects[path] || path
    all[key] = (all[key] || 0) + (count as number)
  }

  const biggestCount = Math.max(...Object.values(all))
  const popularPages: PopularPages = {}
  for (const [path, count] of Object.entries(all)) {
    // Seven decimal places keep records smaller without useful popularity precision loss.
    popularPages[path] = Number((count / biggestCount).toFixed(7))
  }

  return popularPages
}

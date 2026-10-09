// The app loads the full tree at startup for sidebars, breadcrumbs, landing pages, and ToC pages.
// This development-only middleware rereads individual English pages per request.
// Rereading all 1k+ pages per request would be too slow.
// createTree receives the previous tree, so navigation refreshes without restarting the server.

import path from 'path'

import type { Response, NextFunction } from 'express'

import type { ExtendedRequest, UnversionedTree, SiteTree } from '@/types'
import languages, { languageKeys } from '@/languages/lib/languages-server'
import createTree from '@/frame/lib/create-tree'
import warmServer from '@/frame/lib/warm-server'
import { loadSiteTree, loadPages, loadPageMap } from '@/frame/lib/page-data'
import loadRedirects from '@/redirects/lib/precompile'

const languagePrefixRegex = new RegExp(`^/(${languageKeys.join('|')})(/|$)`)
const englishPrefixRegex = /^\/en(\/|$)/

const isDev = process.env.NODE_ENV === 'development'

export default async function reloadTree(req: ExtendedRequest, res: Response, next: NextFunction) {
  if (!isDev) return next()
  // Only language-prefixed content paths can refresh the tree; /will/redirect continues.
  if (!req.pagePath || !languagePrefixRegex.test(req.pagePath)) return next()
  // Only English content can refresh the development tree.
  if (!englishPrefixRegex.test(req.pagePath)) return next()

  const warmed = await warmServer([])

  // createTree below usually takes 30-60ms for real English content on an Intel MacBook Pro.
  const before = getMtimes(warmed.unversionedTree.en)
  warmed.unversionedTree.en = (await createTree(
    path.join(languages.en.dir, 'content'),
    undefined,
    warmed.unversionedTree.en,
  )) as UnversionedTree
  const after = getMtimes(warmed.unversionedTree.en)
  // Dependent maps take about 140ms after a 40ms tree refresh, so skip them when mtimes match.
  if (before !== after) {
    warmed.siteTree = (await loadSiteTree(warmed.unversionedTree)) as SiteTree
    warmed.pageList = await loadPages(warmed.unversionedTree)
    warmed.pages = await loadPageMap(warmed.pageList)
    warmed.redirects = await loadRedirects(warmed.pageList)
  }

  return next()
}

// Summing mtimes lets reloadTree detect page changes before rebuilding slower maps.
function getMtimes(tree: UnversionedTree) {
  let mtimes = tree.page.mtime
  for (const child of tree.childPages || []) {
    mtimes += getMtimes(child)
  }
  return mtimes
}

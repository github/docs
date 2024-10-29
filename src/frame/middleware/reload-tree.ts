/**
 * This exists for local previewing. Only.
 * We load in the entire tree on startup, then that's used for things like
 * sidebars and breadcrumbs and landing pages and ToC pages (and possibly
 * more).
 * When an individual page is requested, we always reload it from disk
 * in case it has changed. But that's not feasible with all 1k+ pages.
 *
 * The core of this middleware calls `createTree()` but by passing the
 * optional previous tree so that within `createTree` it can opt to
 * re-use those that haven't changed on disk.
 *
 * The intention here is so that things like sidebars can refresh
 * without having to restart the entire server.
 */

import path from 'path'

import type { Response, NextFunction } from 'express'

import type { ExtendedRequest, UnversionedTree, SiteTree } from '@/types'
import languages, { languageKeys } from '@/languages/lib/languages.js'
import createTree from '@/frame/lib/create-tree.js'
import warmServer from '@/frame/lib/warm-server'
import { loadSiteTree, loadPages, loadPageMap } from '@/frame/lib/page-data.js'
import loadRedirects from '@/redirects/lib/precompile.js'

const languagePrefixRegex = new RegExp(`^/(${languageKeys.join('|')})(/|$)`)
const englishPrefixRegex = /^\/en(\/|$)/

const isDev = process.env.NODE_ENV === 'development'

export default async function reloadTree(req: ExtendedRequest, res: Response, next: NextFunction) {
  if (!isDev) return next()
  // Filter out things like `/will/redirect` or `/_next/data/...`
  if (!req.pagePath || !languagePrefixRegex.test(req.pagePath)) return next()
  // We only bother if the loaded URL is something `/en/...`
  if (!englishPrefixRegex.test(req.pagePath)) return next()

  const warmed = await warmServer([])

  // For all the real English content, this usually takes about 30-60ms on
  // an Intel MacBook Pro.
  const before = getMtimes(warmed.unversionedTree.en)
  warmed.unversionedTree.en = (await createTree(
    path.join(languages.en.dir, 'content'),
    undefined,
    warmed.unversionedTree.en,
  )) as UnversionedTree // Note! Have to use `as` until create-tree.js is JS
  const after = getMtimes(warmed.unversionedTree.en)
  // The next couple of operations are much slower (in total) than
  // refreshing the tree. So we want to know if the tree changed before
  // bothering.
  // If refreshing of the `.en` part of the `unversionedTree` takes 40ms
  // then the following operations takes about 140ms.
  if (before !== after) {
    warmed.siteTree = (await loadSiteTree(warmed.unversionedTree)) as SiteTree
    warmed.pageList = await loadPages(warmed.unversionedTree)
    warmed.pages = await loadPageMap(warmed.pageList)
    warmed.redirects = await loadRedirects(warmed.pageList)
  }

  return next()
}

// Given a tree, return a number that represents the mtimes for all pages
// in the tree.
// You can use this to compute it before and after the tree is (maybe)
// mutated and if the numbers *change* you can know the tree changed.
function getMtimes(tree: UnversionedTree) {
  let mtimes = tree.page.mtime
  for (const child of tree.childPages || []) {
    mtimes += getMtimes(child)
  }
  return mtimes
}

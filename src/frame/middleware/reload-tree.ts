// This exists for local reviewing only.
//
// We load the entire tree on startup and use it for sidebars, breadcrumbs,
// landing pages, and ToC pages. In development, an individual English page is
// reread from disk on each request in case it changed, but doing that for all
// 1k+ pages is not feasible.
//
// So this middleware calls `createTree()` with the previous tree, letting
// `createTree` reuse the pages that haven't changed on disk. That way things
// like sidebars refresh without restarting the server.

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
  )) as UnversionedTree
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

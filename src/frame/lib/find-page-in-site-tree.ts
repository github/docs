import type { Tree } from '@/types'
import { getLanguageCode } from './patterns'

export default function findPageInSiteTree(
  treePage: Tree,
  englishTree: Tree,
  originalPath: string,
  modifiedPath?: string,
): Tree {
  if (Array.isArray(treePage)) throw new Error('received array instead of object')

  if (treePage.href === originalPath || !treePage.childPages) {
    return treePage
  }

  if (!modifiedPath) {
    modifiedPath = originalPath
  }

  const foundIndex = treePage.childPages.findIndex(({ href }) => href === modifiedPath)

  const foundPage = treePage.childPages[foundIndex]

  if (foundPage) {
    return modifiedPath === originalPath
      ? foundPage
      : findPageInSiteTree(foundPage, englishTree, originalPath)
  }

  // Trim path segments until a parent tree node matches.
  modifiedPath = modifiedPath.replace(/\/[^/]+?$/, '')

  // Stop before recursion exhausts the stack.
  if (!modifiedPath) {
    const matched = originalPath.match(getLanguageCode)
    if (!matched) throw new Error('language code not found in path')
    const langCode = matched[1]

    // Localized paths fall back to English when their tree page is missing.
    if (langCode === 'en') {
      throw new Error(`can't find ${originalPath} in site tree`)
    } else {
      // English fallback serves English links at a localized path instead of throwing.
      originalPath = originalPath.replace(`/${langCode}`, '/en')
      return findPageInSiteTree(englishTree, englishTree, originalPath)
    }
  }

  // The matched parent lets callers traverse down toward the original path.
  return findPageInSiteTree(treePage, englishTree, originalPath, modifiedPath)
}

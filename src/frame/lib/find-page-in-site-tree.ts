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

  // Try again with the last path segment removed.
  modifiedPath = modifiedPath.replace(/\/[^/]+?$/, '')

  // Error out or we'll just recurse forever until the stack size is exceeded.
  if (!modifiedPath) {
    const matched = originalPath.match(getLanguageCode)
    if (!matched) throw new Error('language code not found in path')
    const langCode = matched[1]

    // Fall back to English if this is a localized path.
    if (langCode === 'en') {
      throw new Error(`can't find ${originalPath} in site tree`)
    } else {
      // This isn't ideal because it will serve up English content at a localized path,
      // including links with `/en` in them. But it seems like the only way to not throw errors.
      originalPath = originalPath.replace(`/${langCode}`, '/en')
      return findPageInSiteTree(englishTree, englishTree, originalPath)
    }
  }

  // This will return a higher segment of the tree, so we can traverse down the tree until we find the original path.
  return findPageInSiteTree(treePage, englishTree, originalPath, modifiedPath)
}

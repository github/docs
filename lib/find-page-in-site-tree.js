import { getLanguageCode } from './patterns.js'

// This module recursively searches a given part of the site tree by iterating through child
// pages and finding a path that matches the original path provided.
export default function findPageInSiteTree(treePage, englishTree, originalPath, modifiedPath) {
  if (Array.isArray(treePage)) throw new Error('received array instead of object')

  // If the tree page already matches the path, or if it has no child pages, return the page itself.
  if (treePage.href === originalPath || !treePage.childPages) {
    return treePage
  }

  // If no modified path is provided, set it to the original path.
  if (!modifiedPath) {
    modifiedPath = originalPath
  }

  // Find the index of the modified path in the array of child pages.
  const foundIndex = treePage.childPages.findIndex(({ href }) => href === modifiedPath)

  // Use that index to find the child page that matches the path.
  const foundPage = treePage.childPages[foundIndex]

  // If we found a page...
  if (foundPage) {
    return modifiedPath === originalPath
      ? // Check if it matches the _original_ path, and return it if so.
        foundPage
      : // If we found a page with the modified path, keep going down the tree until we find the original path.
        findPageInSiteTree(foundPage, englishTree, originalPath)
  }

  // If no page was found at the path we tried, try again by removing the last segment of the path.
  modifiedPath = modifiedPath.replace(/\/[^/]+?$/, '')

  // Error out or we'll just recurse forever until the stack size is exceeded.
  if (!modifiedPath) {
    const langCode = originalPath.match(getLanguageCode)[1]

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

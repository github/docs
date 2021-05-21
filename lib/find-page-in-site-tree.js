// This module recursively searches a given part of the site tree by iterating through child
// pages and finding a path that matches the original path provided.
module.exports = function findPageInSiteTree (treePage, originalPath, modifiedPath) {
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
  const foundIndex = treePage.childPages
    .map(page => page.href)
    .indexOf(modifiedPath)

  // Use that index to find the child page that matches the path.
  const foundPage = treePage.childPages[foundIndex]

  // If we found a page...
  if (foundPage) {
    return modifiedPath === originalPath
      // Check if it matches the _original_ path, and return it if so.
      ? foundPage
      // If we found a page with the modified path, keep going down the tree until we find the original path.
      : findPageInSiteTree(foundPage, originalPath)
  }

  // If no page was found at the path we tried, try again by removing the last segment of the path.
  // This will return a higher segment of the tree, and we can traverse down the tree until we find the original path.
  return findPageInSiteTree(treePage, originalPath, modifiedPath.replace(/\/[^/]+?$/, ''))
}

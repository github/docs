const patterns = require('../patterns')
const { getVersionedPathWithLanguage } = require('../path-utils')
const getOldPathsFromPermalink = require('./get-old-paths-from-permalink')

module.exports = function generateRedirectsForPermalinks (permalinks, redirectFrontmatter) {
  // account for Array or String frontmatter entries
  const redirectFrontmatterOldPaths = redirectFrontmatter
    ? Array.from([redirectFrontmatter]).flat()
    : []

  const redirects = {}

  // for every permalink...
  permalinks.forEach(permalink => {
    // get an array of possible old paths, e.g., /desktop/guides/ from current permalink /desktop/
    const possibleOldPaths = getOldPathsFromPermalink(permalink.href, permalink.languageCode, permalink.pageVersion)

    // for each old path, add a redirect to the current permalink
    possibleOldPaths.forEach(oldPath => {
      redirects[oldPath] = permalink.href
    })

    // for every redirect frontmatter old path...
    redirectFrontmatterOldPaths.forEach(frontmatterOldPath => {
      // remove trailing slashes (sometimes present in frontmatter)
      frontmatterOldPath = frontmatterOldPath.replace(patterns.trailingSlash, '$1')

      // get the old path for the current permalink version
      const versionedFrontmatterOldPath = getVersionedPathWithLanguage(frontmatterOldPath, permalink.pageVersion, permalink.languageCode)

      // add it to the redirects object
      redirects[versionedFrontmatterOldPath] = permalink.href

      // then get an array of possible alternative old paths from the current versioned old path
      const possibleOldPathsForVersionedOldPaths = getOldPathsFromPermalink(versionedFrontmatterOldPath, permalink.languageCode, permalink.pageVersion)

      // and add each one to the redirects object
      possibleOldPathsForVersionedOldPaths.forEach(oldPath => {
        redirects[oldPath] = permalink.href
      })
    })
  })

  // filter for uniqe entries only
  Object.entries(redirects).forEach(([oldPath, newPath]) => {
    if (oldPath === newPath) delete redirects[oldPath]
  })

  return redirects
}

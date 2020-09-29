const slash = require('slash')
const patterns = require('./patterns')
const allVersions = Object.keys(require('./all-versions'))
const { getVersionedPathWithLanguage } = require('./path-utils')

module.exports = function findPage (href, pages, redirects = {}, languageCode = 'en', sourceLanguage = null) {
  // Convert Windows backslashes to forward slashes
  // remove trailing slash
  href = slash(href).replace(patterns.trailingSlash, '$1')

  // check all potential versions
  const versionedPathsToCheck = [...new Set(allVersions.map(version => {
    return getVersionedPathWithLanguage(href, version, languageCode)
  }))]

  // get the first found path of the page (account for redirects)
  let pathToPage = versionedPathsToCheck.find(path => {
    path = redirects[path] || path
    return pages[removeFragment(path)]
  })

  // need to account for redirects again
  pathToPage = redirects[pathToPage] || pathToPage

  // find the page
  const page = pages[removeFragment(pathToPage)]

  if (page) return page

  if (process.env.NODE_ENV !== 'test' && languageCode === 'en') {
    const error = sourceLanguage
      ? `href not found in ${sourceLanguage} pages (no English fallback found)`
      : 'href not found'

    // if English page can't be found, throw an error
    // because these errors should be surfaced and fixed right away
    if (sourceLanguage === 'en') {
      throw new Error(`${error}: ${href}`)
    } else {
      console.error(`${error}: ${href}`)
    }
  }

  // if English page can't be found in tests, don't throw an error
  // or the tests will stall
  if (process.env.NODE_ENV === 'test' && languageCode === 'en') {
    if (sourceLanguage === 'en') console.log(`href not found: ${href}`)
    return null
  }

  // if localized page can't be found, fall back to English
  // because localized content is not yet synced
  if (languageCode !== 'en') {
    // pass the source language so we can surface it in error messages
    return findPage(href, pages, redirects, 'en', languageCode)
  }
}

// some redirects include fragments
// need to remove the fragment to find the page
function removeFragment (path) {
  if (!path) return

  return path.replace(/#.*$/, '')
}

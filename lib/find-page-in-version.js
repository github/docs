const findPage = require('./find-page')
const getApplicableVersions = require('./get-applicable-versions')

module.exports = function findPageInVersion (href, pages, redirects, languageCode, version, isDotcomOnly = false) {
  // findPage() will throw an error if an English page can't be found
  const page = findPage(href, pages, redirects, languageCode)
  if (!page) return null

  // if the link is on the homepage, return the page as soon as it's found
  if (version === 'homepage') return page

  // if the link is dotcom-only, return the page as soon as it's found
  if (isDotcomOnly) return page

  // otherwise, get the versions that the found page is available in
  const applicableVersions = getApplicableVersions(page.versions, page.fullPath)

  // return null if the found page's available versions do not include the specified version
  if (!applicableVersions.includes(version)) return null

  return page
}

const assert = require('assert')
const path = require('path')
const { getPathWithoutLanguage, getVersionStringFromPath } = require('./path-utils')
const { getNewVersionedPath } = require('./old-versions-utils')
const patterns = require('./patterns')
const { deprecated, latest } = require('./enterprise-server-releases')
const nonEnterpriseDefaultVersion = require('./non-enterprise-default-version')
const allVersions = require('./all-versions')
const supportedVersions = Object.keys(allVersions)
const supportedPlans = Object.values(allVersions).map(v => v.plan)
const removeFPTFromPath = require('./remove-fpt-from-path')
const readJsonFile = require('./read-json-file')
const externalRedirects = readJsonFile('./lib/redirects/external-sites.json')

// Content authors write links like `/some/article/path`, but they need to be
// rewritten on the fly to match the current language and page version
module.exports = function rewriteLocalLinks ($, version, languageCode) {
  assert(languageCode, 'languageCode is required')

  $('a[href^="/"]').each((i, el) => {
    getNewHref($(el), languageCode, version)
  })
}

function getNewHref (link, languageCode, version) {
  const href = link.attr('href')

  // Exceptions to link rewriting
  if (href.startsWith('/assets')) return
  if (href.startsWith('/public')) return
  if (externalRedirects.includes(href)) return

  let newHref = href
  // If the link has a hardcoded plan or version in it, do not update other than adding a language code
  // Examples:
  // /enterprise-server@2.20/rest/reference/oauth-authorizations
  // /enterprise-server/rest/reference/oauth-authorizations (this redirects to the latest version)
  // /enterprise-server@latest/rest/reference/oauth-authorizations (this redirects to the latest version)
  const firstLinkSegment = href.split('/')[1]
  if ([...supportedPlans, ...supportedVersions, 'enterprise-server@latest'].includes(firstLinkSegment)) {
    newHref = path.join('/', languageCode, href)
  }

  // If the link includes a deprecated version, do not update other than adding a language code
  // Example: /enterprise/11.10.340/admin/articles/upgrading-to-the-latest-release
  const oldEnterpriseVersionNumber = href.match(patterns.getEnterpriseVersionNumber)
  if (oldEnterpriseVersionNumber && deprecated.includes(oldEnterpriseVersionNumber[1])) {
    newHref = path.join('/', languageCode, href)
  }

  if (newHref === href) {
    // start clean with no language (TOC pages already include the lang codes via lib/liquid-tags/link.js)
    const hrefWithoutLang = getPathWithoutLanguage(href)

    // normalize any legacy links so they conform to new link structure
    newHref = path.posix.join('/', languageCode, getNewVersionedPath(hrefWithoutLang))

    // get the current version from the link
    const versionFromHref = getVersionStringFromPath(newHref)

    // ------ BEGIN ONE-OFF OVERRIDES ------//
    // dotcom-only links always point to dotcom
    if (link.hasClass('dotcom-only')) {
      version = nonEnterpriseDefaultVersion
    }

    // desktop links always point to dotcom
    if (patterns.desktop.test(hrefWithoutLang)) {
      version = nonEnterpriseDefaultVersion
    }

    // admin links on dotcom always point to Enterprise
    if (patterns.adminProduct.test(hrefWithoutLang) && version === nonEnterpriseDefaultVersion) {
      version = `enterprise-server@${latest}`
    }

    // insights links on dotcom always point to Enterprise
    if (patterns.insightsProduct.test(hrefWithoutLang) && version === nonEnterpriseDefaultVersion) {
      version = `enterprise-server@${latest}`
    }
    // ------ END ONE-OFF OVERRIDES ------//

    // update the version in the link
    newHref = removeFPTFromPath(newHref.replace(versionFromHref, version))
  }

  newHref = newHref.replace(patterns.trailingSlash, '$1')

  if (href !== newHref) link.attr('href', newHref)
}

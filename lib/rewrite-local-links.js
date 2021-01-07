const assert = require('assert')
const path = require('path')
const externalRedirects = Object.keys(require('./redirects/external-sites'))
const { getPathWithoutLanguage, getVersionStringFromPath } = require('./path-utils')
const { getNewVersionedPath } = require('./old-versions-utils')
const patterns = require('./patterns')
const { latest } = require('./enterprise-server-releases')
const nonEnterpriseDefaultVersion = require('./non-enterprise-default-version')
const removeFPTFromPath = require('./remove-fpt-from-path')
const allVersions = require('./all-versions')
const supportedVersions = Object.keys(allVersions)
const supportedPlans = Object.values(allVersions).map(v => v.plan)

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

  // these links should not be rewritten
  if (href.startsWith('/assets')) return
  if (href.startsWith('/public')) return

  // Leave old redirected URLs intact
  // e.g. `/contact` should not be replaced with `/en/contact`
  if (externalRedirects.includes(href)) return

  let newHref
  // If the link has a hardcoded plan or version in it, do not update the version, just add the language code
  // Examples:
  // /enterprise-server@2.20/rest/reference/oauth-authorizations
  // /enterprise-server/rest/reference/oauth-authorizations (this redirects to the latest version)
  // /enterprise-server@latest/rest/reference/oauth-authorizations (this redirects to the latest version)
  const firstLinkSegment = href.split('/')[1]
  if ([...supportedPlans, ...supportedVersions, 'enterprise-server@latest'].includes(firstLinkSegment)) {
    newHref = path.join('/', languageCode, href)
  }

  // If link is dotcom-only, just get the language code
  // Otherwise, get the versioned path with language code
  if (!newHref) {
    // start clean with no language (TOC pages already include the lang codes via lib/liquid-tags/link.js)
    const hrefWithoutLang = getPathWithoutLanguage(href).replace(patterns.trailingSlash, '$1')

    // normalize any legacy links so they conform to new link structure
    newHref = path.join('/', languageCode, getNewVersionedPath(hrefWithoutLang))

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

    // admin links always point to Enterprise
    if (patterns.adminProduct.test(hrefWithoutLang)) {
      version = `enterprise-server@${latest}`
    }
    // ------ END ONE-OFF OVERRIDES ------//

    // update the version in the link
    newHref = removeFPTFromPath(newHref.replace(versionFromHref, version))
  }

  if (href !== newHref) link.attr('href', newHref)
}

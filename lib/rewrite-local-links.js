const externalRedirects = Object.keys(require('./redirects/external-sites'))
const pathUtils = require('./path-utils')
const assert = require('assert')
const nonEnterpriseDefaultVersion = require('./non-enterprise-default-version')
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
    newHref = pathUtils.getPathWithLanguage(href, languageCode)
  }

  // If link is dotcom-only, just get the language code
  // Otherwise, get the versioned path with language code
  if (!newHref) {
    newHref = link.hasClass('dotcom-only')
      ? pathUtils.getVersionedPathWithLanguage(href, nonEnterpriseDefaultVersion, languageCode)
      : pathUtils.getVersionedPathWithLanguage(href, version, languageCode)
  }

  if (href !== newHref) link.attr('href', newHref)
}

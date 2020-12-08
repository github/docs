const externalRedirects = Object.keys(require('./redirects/external-sites'))
const pathUtils = require('./path-utils')
const assert = require('assert')
const nonEnterpriseDefaultVersion = require('./non-enterprise-default-version')
const supportedPlans = Object.values(require('./all-versions')).map(v => v.plan)

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

  // If the link has a hardcoded plan name in it (e.g., /enterprise-server/rest/reference/oauth-authorizations),
  // only rewrite it with a language code
  if (supportedPlans.includes(href.split('/')[1])) {
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

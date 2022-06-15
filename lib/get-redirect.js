import { languageKeys } from './languages.js'
import nonEnterpriseDefaultVersion from './non-enterprise-default-version.js'

import { allVersions } from './all-versions.js'
import {
  latest,
  supported,
  deprecatedWithFunctionalRedirects,
} from './enterprise-server-releases.js'

const languagePrefixRegex = new RegExp(`^/(${languageKeys.join('|')})/`)
const nonEnterpriseDefaultVersionPrefix = `/${nonEnterpriseDefaultVersion}`

const supportedAndRecentlyDeprecated = [...supported, ...deprecatedWithFunctionalRedirects]

export function splitPathByLanguage(uri, userLanguage) {
  let language = userLanguage || 'en'
  let withoutLanguage = uri
  if (languagePrefixRegex.test(uri)) {
    language = uri.match(languagePrefixRegex)[1]
    withoutLanguage = uri.replace(languagePrefixRegex, '/')
  }
  return [language, withoutLanguage]
}

// Return the new URI if there is one, otherwise return undefined.
export default function getRedirect(uri, context) {
  const { redirects, userLanguage } = context

  const [language, withoutLanguage] = splitPathByLanguage(uri, userLanguage)

  let destination

  // `redirects` is sourced from more than one thing. The primary use
  // case is gathering up the `redirect_from` frontmatter key.
  // But we also has `developer.json` which contains legacy redirects.
  // For example, the `developer.json` will have entries such
  // `/enterprise/v4/enum/auditlogorderfield` which clearly is using
  // the old formatting of the version. So to leverage the redirects
  // from `developer.json` we'll look at it right away.
  if (withoutLanguage in redirects) {
    // But only inject the language if it's NOT an external redirect
    if (redirects[withoutLanguage].includes('://')) {
      return redirects[withoutLanguage]
    }
    return `/${language}` + redirects[withoutLanguage]
  }

  let basicCorrection

  if (withoutLanguage.startsWith(nonEnterpriseDefaultVersionPrefix)) {
    // E.g. '/free-pro-team@latest/foo/bar' or '/free-pro-team@latest'
    basicCorrection =
      `/${language}` + withoutLanguage.replace(nonEnterpriseDefaultVersionPrefix, '')
  } else if (withoutLanguage.replace('/', '') in allVersions && !languagePrefixRegex.test(uri)) {
    // E.g. just '/github-ae@latest' or '/enterprise-cloud@latest'
    basicCorrection = `/${language}` + withoutLanguage
    return basicCorrection
  }

  if (
    withoutLanguage === '/enterprise-server' ||
    withoutLanguage.startsWith('/enterprise-server/')
  ) {
    // E.g. '/enterprise-server' or '/enterprise-server/3.0/foo'
    basicCorrection =
      `/${language}` + withoutLanguage.replace('/enterprise-server', `/enterprise-server@${latest}`)
    // If it's now just the version, without anything after, exit here
    if (withoutLanguage === '/enterprise-server') {
      return basicCorrection
    }
  } else if (withoutLanguage.startsWith('/enterprise-server@latest')) {
    // E.g. '/enterprise-server@latest' or '/enterprise-server@latest/3.3/foo'
    basicCorrection =
      `/${language}` +
      withoutLanguage.replace('/enterprise-server@latest', `/enterprise-server@${latest}`)
    // If it was *just* '/enterprise-server@latest' all that's needed is
    // the language but with 'latest' replaced with the value of `latest`
    if (withoutLanguage === '/enterprise-server@latest') {
      return basicCorrection
    }
  } else if (
    withoutLanguage.startsWith('/enterprise/') &&
    supportedAndRecentlyDeprecated.includes(withoutLanguage.split('/')[2])
  ) {
    // E.g. '/enterprise/3.3' or '/enterprise/3.3/foo' or '/enterprise/3.0/foo

    // If the URL is without a language, and no redirect is necessary,
    // but it has as version prefix, the language has to be there
    // otherwise it will never be found in `req.context.pages`
    const version = withoutLanguage.split('/')[2]
    if (withoutLanguage === `/enterprise/${version}`) {
      // E.g. `/enterprise/3.0`
      basicCorrection =
        `/${language}` +
        withoutLanguage.replace(`/enterprise/${version}`, `/enterprise-server@${version}`)
      return basicCorrection
    } else {
      basicCorrection =
        `/${language}` +
        withoutLanguage.replace(`/enterprise/${version}/`, `/enterprise-server@${version}/`)
    }
  } else if (withoutLanguage === '/enterprise') {
    // E.g. `/enterprise` exactly
    basicCorrection = `/${language}/enterprise-server@${latest}`
    return basicCorrection
  } else if (
    withoutLanguage.startsWith('/enterprise/') &&
    !supported.includes(withoutLanguage.split('/')[2])
  ) {
    // E.g. '/en/enterprise/user/github/foo'
    // If the URL is without a language, and no redirect is necessary,
    // but it has as version prefix, the language has to be there
    // otherwise it will never be found in `req.context.pages`
    basicCorrection =
      `/${language}` +
      withoutLanguage
        .replace(`/enterprise/`, `/enterprise-server@${latest}/`)
        .replace('/user/', '/')
  } else if (withoutLanguage.startsWith('/insights')) {
    // E.g. '/insights/foo'
    basicCorrection = uri.replace('/insights', `${language}/enterprise-server@${latest}/insights`)
  }

  if (basicCorrection) {
    return getRedirect(basicCorrection, context) || basicCorrection
  }

  if (withoutLanguage.startsWith('/admin/')) {
    const prefix = `/enterprise-server@${latest}`
    let suffix = withoutLanguage
    if (suffix.startsWith('/admin/guides/')) {
      suffix = suffix.replace('/admin/guides/', '/admin/')
    }
    const newURL = prefix + suffix
    destination = redirects[newURL] || newURL
  } else if (
    withoutLanguage.split('/')[1].includes('@') &&
    withoutLanguage.split('/')[1] in allVersions
  ) {
    // E.g. '/enterprise-server@latest' or '/github-ae@latest'  or '/enterprise-server@3.3'
    const majorVersion = withoutLanguage.split('/')[1].split('@')[0]
    const split = withoutLanguage.split('/')
    const version = split[1].split('@')[1]
    let prefix
    let suffix

    if (supported.includes(version) || version === 'latest') {
      prefix = `/${majorVersion}@${version}`
      suffix = '/' + split.slice(2).join('/')

      if (
        suffix.includes('/user') ||
        suffix.startsWith('/admin/guide') ||
        suffix.startsWith('/articles/user')
      ) {
        suffix = tryReplacements(prefix, suffix, context) || suffix
      }
    }

    const newURL = prefix + suffix
    if (newURL !== withoutLanguage) {
      // At least the prefix changed!
      destination = redirects[newURL] || newURL
    } else {
      destination = redirects[newURL]
    }
  } else if (withoutLanguage.startsWith('/desktop/guides/')) {
    // E.g. /desktop/guides/contributing-and-collaborat
    const newURL = withoutLanguage.replace('/desktop/guides/', '/desktop/')
    destination = redirects[newURL] || newURL
  } else {
    destination = redirects[withoutLanguage]
  }

  if (destination !== undefined) {
    // There's hope! Now we just need to attach the correct language
    // to the destination URL.
    return `/${language}${destination}`
  }
}

// Over time, we've developed multiple ambiguous patterns of URLs
// You can't simply assume that all `/admin/guides` should become
// `/admin` for example.
// This function tries different string replacement on the suffix
// (the pathname after the language and version part) until it
// finds one string replacement that yields either a page or a redirect.
function tryReplacements(prefix, suffix, { pages, redirects }) {
  const test = (suffix) => {
    // This is a generally broad search and replace and this particular
    // replacement has never been present in api documentation only enterprise
    // admin documentation, so we're excluding the REST api pages
    if (suffix.includes('/rest')) {
      return false
    }
    const candidateAsRedirect = prefix + suffix
    const candidateAsURL = '/en' + candidateAsRedirect
    return candidateAsRedirect in redirects || candidateAsURL in pages
  }

  let attempt = suffix.replace('/user', '/github')
  if (test(attempt)) return attempt

  attempt = suffix.replace('/user', '')
  if (test(attempt)) return attempt

  attempt = suffix.replace('/admin/guides', '/admin')
  if (test(attempt)) return attempt

  attempt = suffix.replace('/admin/guides/user', '/admin/github')
  if (test(attempt)) return attempt

  attempt = suffix.replace('/admin/guides', '/admin').replace('/user', '/github')
  if (test(attempt)) return attempt
}

import { languageKeys } from '#src/languages/lib/languages.js'
import nonEnterpriseDefaultVersion from '#src/versions/lib/non-enterprise-default-version.js'
import { allVersions } from '#src/versions/lib/all-versions.js'
import {
  latest,
  latestStable,
  supported,
  deprecatedWithFunctionalRedirects,
} from '#src/versions/lib/enterprise-server-releases.js'
import { getPathWithLanguage, getVersionStringFromPath } from '#src/frame/lib/path-utils.js'

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

  if (withoutLanguage.startsWith('/github-ae@latest')) {
    // It has a different business logic that the rest because it's a
    // version that now will always redirect. Just a question of where to
    // exactly.
    const nonAERedirect = githubAERedirect(uri, context)
    if (nonAERedirect.includes('/github-ae@latest')) {
      // If this happened some redirect in there didn't completely
      // get away from github-ae.
      throw new Error('Still going to github-ae@latest URL')
    }
    return nonAERedirect
  }

  let destination

  // `redirects` is sourced from more than one thing. The primary use
  // case is gathering up the `redirect_from` frontmatter key.
  // But we also have `developer.json` which contains legacy redirects.
  // For example, the `developer.json` will have entries such
  // `/enterprise/v4/enum/auditlogorderfield` which clearly is using
  // the old formatting of the version. So to leverage the redirects
  // from `developer.json` we'll look at it right away.
  if (withoutLanguage in redirects) {
    // But only inject the language if it's NOT an external redirect
    if (redirects[withoutLanguage].includes('://')) {
      return redirects[withoutLanguage]
    }
    return getPathWithLanguage(redirects[withoutLanguage], language)
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
      `/${language}` +
      withoutLanguage.replace('/enterprise-server', `/enterprise-server@${latestStable}`)
    // If it's now just the version, without anything after, exit here
    if (withoutLanguage === '/enterprise-server') {
      return basicCorrection
    }
  } else if (withoutLanguage.startsWith('/enterprise-server@latest')) {
    // E.g. '/enterprise-server@latest' or '/enterprise-server@latest/3.3/foo'
    basicCorrection =
      `/${language}` +
      withoutLanguage.replace('/enterprise-server@latest', `/enterprise-server@${latestStable}`)
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

function githubAERedirect(uri, context) {
  const { redirects, userLanguage, pages } = context

  const [language, withoutLanguage] = splitPathByLanguage(uri, userLanguage)

  // From now on, github-ae@latest redirects to enterprise-cloud or
  // fpt or the home page.
  const cloudEquivalent = uri.replace('/github-ae@latest', '/enterprise-cloud@latest')
  const fptEquivalent = uri.replace('/github-ae@latest', '')
  const withoutVersion = withoutLanguage.replace('/github-ae@latest', '')
  if (!withoutVersion) {
    // That means the version home page.
    // Don't even need to check if that exists.
    // But if it was without language, inject the language as
    // we go to the enterprise-cloud equivalent
    if (uri.startsWith('/github-ae@latest')) {
      return `/${language}${cloudEquivalent}`
    }
    return cloudEquivalent
  }

  // What if the only missing thing is a language prefix, then
  // it's easy too.
  if (uri.startsWith('/github-ae@latest')) {
    const languageCloudEquivalent = `/${language}${cloudEquivalent}`
    if (languageCloudEquivalent in pages) {
      return languageCloudEquivalent
    }

    const languageFptEquivalent = `/${language}${fptEquivalent}`
    if (languageFptEquivalent in pages) {
      return languageFptEquivalent
    }
  } else {
    // If you're here it means the URL did start with a language.
    if (cloudEquivalent in pages) {
      return cloudEquivalent
    }
    if (fptEquivalent in pages) {
      return fptEquivalent
    }
  }

  // There are redirect exceptions the specifically spell out github-ae
  // in the redirect.
  const legacyRedirect = redirects[withoutLanguage]
  if (legacyRedirect && !legacyRedirect.includes('/github-ae@latest')) {
    if (legacyRedirect.includes('://')) {
      return legacyRedirect
    }
    return `/${language}${legacyRedirect}`
  }

  // The `redirects` are "pure" and don't specific a specific version.
  // For example `/articles/stuff` to `/get-started/new/name`
  // We look for those and try enterprise-cloud in it.
  if (redirects[withoutVersion]) {
    const cloudCandidate = `/${language}/enterprise-cloud@latest${redirects[withoutVersion]}`
    if (cloudCandidate in pages) {
      return cloudCandidate
    }

    const fptCandidate = `/${language}${redirects[withoutVersion]}`
    // The lookup of redirects might yield a versioned URL, whose version
    // might be github-ae or enterprise-server. Skip those.
    if (fptCandidate in pages) {
      const versionFromCandidate = getVersionStringFromPath(fptCandidate)
      if (
        !(
          versionFromCandidate.startsWith('enterprise-server@') ||
          versionFromCandidate === 'github-ae@latest'
        )
      ) {
        return fptCandidate
      }
    }
  }

  // Note that this includes completely unknown pages
  return `/${language}`
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

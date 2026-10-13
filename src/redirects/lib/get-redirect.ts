import { languageKeys } from '@/languages/lib/languages-server'
import nonEnterpriseDefaultVersion from '@/versions/lib/non-enterprise-default-version'
import { allVersions } from '@/versions/lib/all-versions'
import {
  latest,
  latestStable,
  supported,
  deprecatedWithFunctionalRedirects,
} from '@/versions/lib/enterprise-server-releases'
import { getPathWithLanguage, getVersionStringFromPath } from '@/frame/lib/path-utils'

import type { Context } from '@/types'

const languagePrefixRegex = new RegExp(`^/(${languageKeys.join('|')})/`)
const nonEnterpriseDefaultVersionPrefix = `/${nonEnterpriseDefaultVersion}`

const supportedAndRecentlyDeprecated = [...supported, ...deprecatedWithFunctionalRedirects]

export function splitPathByLanguage(uri: string, userLanguage?: string): [string, string] {
  let language = userLanguage || 'en'
  let withoutLanguage = uri
  if (languagePrefixRegex.test(uri)) {
    const match = uri.match(languagePrefixRegex)
    if (match) {
      language = match[1]
      withoutLanguage = uri.replace(languagePrefixRegex, '/')
    }
  }
  return [language, withoutLanguage]
}

export default function getRedirect(uri: string, context: Context): string | undefined {
  const { redirects, userLanguage } = context

  if (!redirects) {
    return undefined
  }

  const [language, withoutLanguage] = splitPathByLanguage(uri, userLanguage)

  if (withoutLanguage.startsWith('/github-ae@latest')) {
    // githubAERedirect maps GitHub AE URLs to a non-AE destination.
    const nonAERedirect = githubAERedirect(uri, context)
    if (nonAERedirect.includes('/github-ae@latest')) {
      // GitHub AE redirects must not point back to GitHub AE.
      throw new Error('Still going to github-ae@latest URL')
    }
    return nonAERedirect
  }

  let destination: string | undefined

  // Check redirects first because developer.json has /enterprise/v4/enum/auditlogorderfield.
  if (withoutLanguage in redirects) {
    // External redirects already include their full destination.
    if (redirects[withoutLanguage].includes('://')) {
      return redirects[withoutLanguage]
    }
    return getPathWithLanguage(redirects[withoutLanguage], language)
  }

  let basicCorrection: string | undefined

  if (withoutLanguage.startsWith(nonEnterpriseDefaultVersionPrefix)) {
    // Example: /free-pro-team@latest/actions or /free-pro-team@latest
    basicCorrection = `/${language}${withoutLanguage.replace(nonEnterpriseDefaultVersionPrefix, '')}`
  } else if (withoutLanguage.replace('/', '') in allVersions && !languagePrefixRegex.test(uri)) {
    // Example: /enterprise-cloud@latest
    basicCorrection = `/${language}${withoutLanguage}`
    return basicCorrection
  }

  if (
    withoutLanguage === '/enterprise-server' ||
    withoutLanguage.startsWith('/enterprise-server/')
  ) {
    // Example: /enterprise-server or /enterprise-server/3.0/admin
    basicCorrection = `/${language}${withoutLanguage.replace(
      '/enterprise-server',
      `/enterprise-server@${latestStable}`,
    )}`
    // Version home pages need no redirect lookup.
    if (withoutLanguage === '/enterprise-server') {
      return basicCorrection
    }
  } else if (withoutLanguage.startsWith('/enterprise-server@latest')) {
    // Example: /enterprise-server@latest or /enterprise-server@latest/3.3/admin
    basicCorrection = `/${language}${withoutLanguage.replace(
      '/enterprise-server@latest',
      `/enterprise-server@${latestStable}`,
    )}`
    // Version home pages need only the language and resolved latest version.
    if (withoutLanguage === '/enterprise-server@latest') {
      return basicCorrection
    }
  } else if (
    withoutLanguage.startsWith('/enterprise/') &&
    supportedAndRecentlyDeprecated.includes(withoutLanguage.split('/')[2])
  ) {
    // Example: /enterprise/3.3/admin needs a language prefix for req.context.pages lookup.
    const version = withoutLanguage.split('/')[2]
    if (withoutLanguage === `/enterprise/${version}`) {
      // Example: /enterprise/3.0
      basicCorrection = `/${language}${withoutLanguage.replace(
        `/enterprise/${version}`,
        `/enterprise-server@${version}`,
      )}`
      return basicCorrection
    } else {
      basicCorrection = `/${language}${withoutLanguage.replace(
        `/enterprise/${version}/`,
        `/enterprise-server@${version}/`,
      )}`
    }
  } else if (withoutLanguage === '/enterprise') {
    // Example: /enterprise
    basicCorrection = `/${language}/enterprise-server@${latest}`
    return basicCorrection
  } else if (
    withoutLanguage.startsWith('/enterprise/') &&
    !supported.includes(withoutLanguage.split('/')[2])
  ) {
    // Example after language removal: /enterprise/user/github/actions needs a language prefix.
    basicCorrection = `/${language}${withoutLanguage
      .replace(`/enterprise/`, `/enterprise-server@${latest}/`)
      .replace('/user/', '/')}`
  } else if (withoutLanguage.startsWith('/insights')) {
    // Example: /insights/admin
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
    // The first segment is a known version, such as /enterprise-server@3.XX.
    const majorVersion = withoutLanguage.split('/')[1].split('@')[0]
    const split = withoutLanguage.split('/')
    const version = split[1].split('@')[1]
    let prefix: string
    let suffix: string

    if (supported.includes(version) || version === 'latest') {
      prefix = `/${majorVersion}@${version}`
      suffix = `/${split.slice(2).join('/')}`

      if (
        suffix.includes('/user') ||
        suffix.startsWith('/admin/guide') ||
        suffix.startsWith('/articles/user')
      ) {
        suffix = tryReplacements(prefix, suffix, context) || suffix
      }
    } else {
      // Unsupported versions still need prefix and suffix values for the fallback lookup.
      prefix = `/${majorVersion}@${version}`
      suffix = `/${split.slice(2).join('/')}`
    }

    const newURL = prefix + suffix
    if (newURL !== withoutLanguage) {
      // Prefix changes can target either a redirect or a live URL.
      destination = redirects[newURL] || newURL
    } else {
      destination = redirects[newURL]
    }
  } else if (withoutLanguage.startsWith('/desktop/guides/')) {
    // Example: /desktop/guides/contributing-and-collaboration
    const newURL = withoutLanguage.replace('/desktop/guides/', '/desktop/')
    destination = redirects[newURL] || newURL
  } else {
    destination = redirects[withoutLanguage]
  }

  if (destination !== undefined) {
    // Redirect destinations need the resolved language prefix.
    return `/${language}${destination}`
  }

  return undefined
}

function githubAERedirect(uri: string, context: Context): string {
  const { redirects, userLanguage, pages } = context

  if (!redirects || !pages) {
    // Incomplete context cannot choose an equivalent GitHub AE page.
    const [language] = splitPathByLanguage(uri, userLanguage)
    return `/${language}`
  }

  const [language, withoutLanguage] = splitPathByLanguage(uri, userLanguage)

  // Try Enterprise Cloud and Free/Pro/Team equivalents before redirect and home-page fallbacks.
  const cloudEquivalent = uri.replace('/github-ae@latest', '/enterprise-cloud@latest')
  const fptEquivalent = uri.replace('/github-ae@latest', '')
  const withoutVersion = withoutLanguage.replace('/github-ae@latest', '')
  if (!withoutVersion) {
    // GitHub AE home redirects to Enterprise Cloud without checking pages.
    if (uri.startsWith('/github-ae@latest')) {
      return `/${language}${cloudEquivalent}`
    }
    return cloudEquivalent
  }

  // Language-less GitHub AE URLs can still match a translated equivalent.
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
    // Language-prefixed GitHub AE URLs can check equivalent pages directly.
    if (cloudEquivalent in pages) {
      return cloudEquivalent
    }
    if (fptEquivalent in pages) {
      return fptEquivalent
    }
  }

  // Exception redirects can point GitHub AE URLs to a non-AE destination.
  const legacyRedirect = redirects[withoutLanguage]
  if (legacyRedirect && !legacyRedirect.includes('/github-ae@latest')) {
    if (legacyRedirect.includes('://')) {
      return legacyRedirect
    }
    return `/${language}${legacyRedirect}`
  }

  // Versionless redirects can still land on Enterprise Cloud or Free/Pro/Team equivalents.
  if (redirects[withoutVersion]) {
    const cloudCandidate = `/${language}/enterprise-cloud@latest${redirects[withoutVersion]}`
    if (cloudCandidate in pages) {
      return cloudCandidate
    }

    const fptCandidate = `/${language}${redirects[withoutVersion]}`
    // GitHub AE and Enterprise Server candidates would keep the reader on the wrong version.
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

  // Unknown GitHub AE pages fall back to the localized home page.
  return `/${language}`
}

// Ambiguous suffixes like /admin/guides need the first replacement that hits a page or redirect.
function tryReplacements(prefix: string, suffix: string, context: Context): string | undefined {
  const { pages, redirects } = context

  if (!pages || !redirects) {
    return undefined
  }

  const test = (testSuffix: string): boolean => {
    // REST API paths are outside the Enterprise Admin replacement patterns.
    if (testSuffix.includes('/rest')) {
      return false
    }
    const candidateAsRedirect = prefix + testSuffix
    const candidateAsURL = `/en${candidateAsRedirect}`
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

  return undefined
}

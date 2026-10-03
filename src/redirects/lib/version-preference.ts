import { allVersions, allVersionKeys } from '@/versions/lib/all-versions'
import nonEnterpriseDefaultVersion from '@/versions/lib/non-enterprise-default-version'
import { getPathWithoutLanguage } from '@/frame/lib/path-utils'

// detect-version.ts rejects cookie values outside allVersionKeys.
const alternateVersions = allVersionKeys.filter((v) => v !== nonEnterpriseDefaultVersion)

// Explicit version URLs must beat the cookie. allVersions omits enterprise-server@latest,
// deprecated releases like enterprise-server@3.0, and legacy shapes like /enterprise/3.3/
// and /enterprise-server/3.9/.
const VERSION_PLANS = new Set([
  ...Object.values(allVersions).map((v) => v.plan),
  'github-ae',
  'enterprise',
])

// A path naming a version beats the cookie.
// Anything with @ is a version segment, because article slugs do not contain it.
// The plan names cover the legacy unsuffixed shapes.
export function pathNamesAVersion(path: string): boolean {
  const firstSegment = getPathWithoutLanguage(path).split('/')[1]
  if (!firstSegment) return false
  return firstSegment.includes('@') || VERSION_PLANS.has(firstSegment)
}

export type VersionPreference = {
  // True when any cookie could change the response, even when this reader has none.
  // Without this Vary, caches can serve a no-cookie response to a reader who needs a redirect.
  vary: boolean
  // Preference destination, when the article exists there.
  redirectTo?: string
}

const NOTHING: VersionPreference = { vary: false }

// A version cookie behaves like language: it is only the default.
//
// A version named in the URL wins, and missing preferred-version articles stay put.
//
// requestPath decides whether the URL named a version because getRedirect strips an
// explicit /free-pro-team@latest prefix before this point.
//
// resolvedPath builds the versioned candidate so renamed articles resolve in one hop.
export function getVersionPreference(
  requestPath: string,
  resolvedPath: string,
  userVersion: string | undefined,
  pages: Record<string, unknown>,
): VersionPreference {
  // External redirects are not ours to version.
  if (resolvedPath.includes('://')) return NOTHING

  if (pathNamesAVersion(requestPath) || pathNamesAVersion(resolvedPath)) return NOTHING

  // Language-less paths read a slug as the language and miss the language-prefixed pages lookup.
  const language = resolvedPath.split('/')[1]
  const withoutLanguage = getPathWithoutLanguage(resolvedPath)

  // pages keys omit .md, but .md requests must redirect to .md versioned articles.
  const extension = withoutLanguage.endsWith('.md') ? '.md' : ''
  const lookupSuffix = extension ? withoutLanguage.slice(0, -extension.length) : withoutLanguage

  let vary = false
  let redirectTo: string | undefined

  for (const version of alternateVersions) {
    if (!(`/${language}/${version}${lookupSuffix}` in pages)) continue
    // Any selectable version makes the response depend on x-user-version.
    vary = true
    if (version === userVersion) {
      redirectTo = `/${language}/${version}${lookupSuffix}${extension}`
    }
  }

  return { vary, redirectTo }
}

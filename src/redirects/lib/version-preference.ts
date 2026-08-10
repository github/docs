import { allVersions, allVersionKeys } from '@/versions/lib/all-versions'
import nonEnterpriseDefaultVersion from '@/versions/lib/non-enterprise-default-version'
import { getPathWithoutLanguage } from '@/frame/lib/path-utils'

// Every version the reader can actually prefer over the unversioned form.
// `detect-version.ts` already refuses cookie values outside `allVersionKeys`,
// so anything reaching here is a real version.
const alternateVersions = allVersionKeys.filter((v) => v !== nonEnterpriseDefaultVersion)

// Segments that name a version rather than a product, in any form we have ever
// served. `allVersions` is not enough on its own: it has no key for
// `enterprise-server@latest`, for deprecated releases like `enterprise-server@3.0`,
// or for the older `/enterprise/3.3/` and `/enterprise-server/3.9/` shapes. Those
// still have to count as an explicit request, because a URL naming a version must
// beat the cookie even when we no longer publish that version.
const VERSION_PLANS = new Set([
  ...Object.values(allVersions).map((v) => v.plan),
  'github-ae',
  'enterprise',
])

/**
 * Does this path name a version itself, rather than leaving it implied?
 *
 * Anything with an `@` is a version segment; no article slug contains one. The plan
 * names cover the legacy unsuffixed shapes.
 */
export function pathNamesAVersion(path: string): boolean {
  const firstSegment = getPathWithoutLanguage(path).split('/')[1]
  if (!firstSegment) return false
  return firstSegment.includes('@') || VERSION_PLANS.has(firstSegment)
}

export type VersionPreference = {
  /**
   * True when some version cookie value would have changed the response, so the
   * response has to vary on `x-user-version` even when this particular reader has
   * no cookie. Varying only for cookie holders would let a no-cookie reader's
   * cached page be served to someone who should have been redirected.
   */
  vary: boolean
  /** Where to send this reader, if their preference applies and the article exists there. */
  redirectTo?: string
}

const NOTHING: VersionPreference = { vary: false }

/**
 * Work out whether a reader's version preference applies to a request.
 *
 * The rule, decided in github/docs-team#7227, is that version behaves exactly like
 * language: the cookie is only a default, a version named in the URL always wins, and
 * an article that does not exist in the preferred version silently stays where it is.
 *
 * `requestPath` is the URL as asked for, and is what decides whether a version was named.
 * It has to be, because `getRedirect` strips an explicit `/free-pro-team@latest` prefix
 * before we get here. Reading the resolved path instead would make an explicit request
 * for Free/Pro/Team indistinguishable from no request at all, and a reader who has set a
 * cookie could never deliberately look at the Free/Pro/Team article again.
 *
 * `resolvedPath` is where the ordinary redirect logic decided to send them, and is what
 * the versioned candidate is built from, so a renamed article resolves in one hop instead
 * of two.
 */
export function getVersionPreference(
  requestPath: string,
  resolvedPath: string,
  userVersion: string | undefined,
  pages: Record<string, unknown>,
): VersionPreference {
  // External redirects are not ours to version.
  if (resolvedPath.includes('://')) return NOTHING

  if (pathNamesAVersion(requestPath) || pathNamesAVersion(resolvedPath)) return NOTHING

  // Always a `URL.pathname` from the caller, so it always starts with `/` and this is
  // always the first segment. On a path that never got a language prefix this reads some
  // article slug as the language, and the candidate lookup below simply misses, because
  // every key in `pages` is language-prefixed.
  const language = resolvedPath.split('/')[1]
  const withoutLanguage = getPathWithoutLanguage(resolvedPath)

  // `pages` is keyed by permalink, which carries no `.md` extension. Keep the extension
  // aside so a `.md` request redirects to the `.md` form of the versioned article.
  const extension = withoutLanguage.endsWith('.md') ? '.md' : ''
  const lookupSuffix = extension ? withoutLanguage.slice(0, -extension.length) : withoutLanguage

  let vary = false
  let redirectTo: string | undefined

  for (const version of alternateVersions) {
    if (!(`/${language}/${version}${lookupSuffix}` in pages)) continue
    // At least one version of this article exists that the cookie could select, so the
    // response depends on the cookie whether or not this reader has one.
    vary = true
    if (version === userVersion) {
      redirectTo = `/${language}/${version}${lookupSuffix}${extension}`
    }
  }

  return { vary, redirectTo }
}

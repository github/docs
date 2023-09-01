import languages from '#src/languages/lib/languages.js'
import { defaultCacheControl } from '../../../middleware/cache-control.js'

const redirectPatterns = Object.values(languages)
  .map((language) => language.redirectPatterns || [])
  .flat()
// If the enabled languages have `.redirectPatterns`, combine them
// into one which we only need to use to determine if we should bother
// doing the redirect at all.
const combinedRedirectPatternRegex =
  redirectPatterns.length > 0
    ? new RegExp(redirectPatterns.map((rex) => rex.source).join('|'))
    : null

const allRedirectPatterns = Object.values(languages)
  .map((language) =>
    (language.redirectPatterns || []).map((redirectPattern) => [language.code, redirectPattern]),
  )
  .flat()

// This middleware handles redirects for mistyped language codes
//
// Examples:
// /jp*    -> /ja*
// /zh-TW* -> /zh*
export default function languageCodeRedirects(req, res, next) {
  // Only in the unlikely event that the `req.path` starts with one of these
  // prefixes do we bother looking up what the redirect should be.
  if (req.path.startsWith('/_next/static')) return next()
  if (!combinedRedirectPatternRegex) return next()
  if (!combinedRedirectPatternRegex.test(req.path)) return next()

  // This loop is almost never ever used so it doesn't have to be
  // particularly smart or fast.
  const [code, pattern] = allRedirectPatterns.find(([, pattern]) => pattern.test(req.path))
  if (code && pattern) {
    defaultCacheControl(res)
    return res.redirect(301, req.path.replace(pattern, `/${code}`))
  }
  return next()
}

import languages from '../../lib/languages.js'

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

// This middleware handles redirects for mistyped language codes
//
// Examples:
// /jp*    -> /ja*
// /zh-TW* -> /cn*
export default function languageCodeRedirects(req, res, next) {
  // Only in the unlikely event that the `req.path` starts with one of these
  // prefixes do we bother looking up what the redirect should be.
  if (
    !req.path.startsWith('/_next/static') &&
    combinedRedirectPatternRegex &&
    combinedRedirectPatternRegex.test(req.path)
  ) {
    // This loop is almost never ever used to it doesn't have to be
    // particularly smart or fast.
    for (const language of Object.values(languages)) {
      const redirectPatterns = language.redirectPatterns || []
      for (const redirectPattern of redirectPatterns) {
        if (redirectPattern.test(req.path)) {
          return res.redirect(301, req.path.replace(redirectPattern, `/${language.code}`))
        }
      }
    }
  }

  return next()
}

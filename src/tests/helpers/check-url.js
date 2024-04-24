import getRedirect from '#src/redirects/lib/get-redirect.js'
import { getPathWithoutLanguage, getPathWithoutVersion } from '#src/frame/lib/path-utils.js'

const liquidStartRex = /^{%-?\s*ifversion .+?\s*%}/
const liquidEndRex = /{%-?\s*endif\s*-?%}$/

// Return
//
//    /foo/bar
//
// if the text input was
//
//   {% ifversion ghes%}/foo/bar{%endif %}
//
// And if no liquid, just return as is.
function stripLiquid(text) {
  if (liquidStartRex.test(text) && liquidEndRex.test(text)) {
    return text.replace(liquidStartRex, '').replace(liquidEndRex, '').trim()
  } else if (text.includes('{')) {
    throw new Error(`Unsupported Liquid in frontmatter link list (${text})`)
  }
  return text
}

// Given a URI that does not start with a specific language,
// return undefined if it can found as a known page.
// Otherwise, return an object with information that is used to
// print a useful test error message in the assertion.
export function checkURL(uri, index, redirectsContext) {
  const url = `/en${stripLiquid(uri).split('#')[0]}`
  if (!(url in redirectsContext.pages)) {
    // Some are written without a version, but don't work with the
    // default version.
    let redirects = getRedirect(url, redirectsContext)
    // If it does indeed redirect to a different version,
    // strip that and compare again.
    if (redirects) {
      const withoutVersion = getPathWithoutVersion(redirects)
      if (withoutVersion === url) {
        // That means, it's actually fine
        return null
      }
      redirects = getPathWithoutLanguage(withoutVersion)
    }
    return { uri, index, redirects }
  }
  return null // Falsy value will be filtered out later
}

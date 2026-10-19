import getRedirect from '@/redirects/lib/get-redirect'
import { getPathWithoutLanguage, getPathWithoutVersion } from '@/frame/lib/path-utils'

import type { Context } from '@/types'

const liquidStartRex = /^{%-?\s*ifversion .+?\s*%}/
const liquidEndRex = /{%-?\s*endif\s*-?%}$/

// Frontmatter link lists sometimes wrap paths in ifversion Liquid; checks need the raw path.
// Example input: {% ifversion ghes%}/foo/bar{%endif %}
// Output: /foo/bar
function stripLiquid(text: string): string {
  if (liquidStartRex.test(text) && liquidEndRex.test(text)) {
    return text.replace(liquidStartRex, '').replace(liquidEndRex, '').trim()
  } else if (text.includes('{')) {
    throw new Error(`Unsupported Liquid in frontmatter link list (${text})`)
  }
  return text
}

// Return details for assertion errors when a language-free URI cannot resolve to a known page.
export function checkURL(uri: string, index: number, redirectsContext: Context) {
  const url = `/en${stripLiquid(uri).split('#')[0]}`
  if (!redirectsContext.pages || !(url in redirectsContext.pages)) {
    // Some unversioned links resolve only after redirects add a version.
    let redirects = getRedirect(url, redirectsContext)
    if (redirects) {
      const withoutVersion = getPathWithoutVersion(redirects)
      if (withoutVersion === url) {
        return null
      }
      redirects = getPathWithoutLanguage(withoutVersion)
    }
    return { uri, index, redirects }
  }
  return null
}

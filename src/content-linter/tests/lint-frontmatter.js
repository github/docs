import { loadPages, loadPageMap } from '../../../lib/page-data.js'
import getRedirect from '#src/redirects/lib/get-redirect.js'
import loadRedirects from '#src/redirects/lib/precompile.js'
import { getPathWithoutLanguage, getPathWithoutVersion } from '../../../lib/path-utils.js'

const pageList = await loadPages(undefined, ['en'])
const pages = await loadPageMap(pageList)
const redirects = await loadRedirects(pageList)

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

describe('front matter', () => {
  // Given a URI that does not start with a specific language,
  // return undefined if it can found as a known page.
  // Otherwise, return an object with information that is used to
  // print a useful jest error message in the assertion.
  function checkURL(uri, index, redirectsContext) {
    const url = `/en${stripLiquid(uri).split('#')[0]}`
    if (!(url in pages)) {
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

  function makeCustomErrorMessage(page, trouble, key) {
    let customErrorMessage = `In the front matter of ${page.relativePath} `
    if (trouble.length > 0) {
      if (trouble.length === 1) {
        customErrorMessage += `there is 1 .${key} front matter entry that is not correct.`
      } else {
        customErrorMessage += `there are ${trouble.length} .${key} front matter entries that are not correct.`
      }
      const nonWarnings = trouble.filter((t) => !t.warning)
      for (const { uri, index, redirects } of nonWarnings) {
        customErrorMessage += `\nindex: ${index} URI: ${uri}`
        if (redirects) {
          customErrorMessage += `\n\tredirects to ${redirects}`
        } else {
          customErrorMessage += '\tPage not found'
        }
      }
      if (trouble.find((t) => t.redirects)) {
        customErrorMessage += `\n\nNOTE! To automatically fix the redirects run this command:\n`
        customErrorMessage += `\n\t./src/links/scripts/update-internal-links.js content/${page.relativePath}\n\n`
      }
    }
    return customErrorMessage
  }

  // Test content with .includeGuides front matter
  const pagesWithIncludeGuides = pageList.filter((page) => page.includeGuides)
  test.each(pagesWithIncludeGuides)(
    '$relativePath .includeGuides have pristine links',
    async (page) => {
      const redirectsContext = { redirects, pages }

      const trouble = page.includeGuides
        .map((uri, i) => checkURL(uri, i, redirectsContext))
        .filter(Boolean)

      const customErrorMessage = makeCustomErrorMessage(page, trouble, 'includeGuides')
      expect(trouble.length, customErrorMessage).toEqual(0)
    },
  )

  // Test content with .featuredLinks front matter

  const pagesWithFeaturedLinks = pageList.filter((page) => page.featuredLinks)
  test.each(pagesWithFeaturedLinks)(
    '$relativePath .featuredLinks have pristine links',
    async (page) => {
      const redirectsContext = { redirects, pages }

      const trouble = []
      for (const links of Object.values(page.featuredLinks)) {
        // Some thing in `.featuredLinks` are not arrays.
        // For example `popularHeading`. So just skip them.
        if (!Array.isArray(links)) continue

        trouble.push(...links.map((uri, i) => checkURL(uri, i, redirectsContext)).filter(Boolean))
      }

      const customErrorMessage = makeCustomErrorMessage(page, trouble, 'featuredLinks')
      expect(trouble.length, customErrorMessage).toEqual(0)
    },
  )
})

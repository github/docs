import { loadPages, loadPageMap } from '../../../lib/page-data.js'
import getRedirect from '#src/redirects/lib/get-redirect.js'
import loadRedirects from '#src/redirects/lib/precompile.js'
import { getPathWithoutLanguage, getPathWithoutVersion } from '../../../lib/path-utils.js'

const pageList = await loadPages(undefined, ['en'])
const pages = await loadPageMap(pageList)
const redirects = await loadRedirects(pageList)

describe('front matter', () => {
  const pagesWithIncludeGuides = pageList.filter((page) => page.includeGuides)
  test.each(pagesWithIncludeGuides)(
    '$relativePath .includeGuides have pristine links',
    async (page) => {
      const redirectsContext = { redirects, pages }

      const trouble = page.includeGuides
        .map((uri, i) => {
          const url = `/en${uri}`
          if (!(url in pages)) {
            // Some are written without a verion, but don't work with the
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
            return { uri, index: i, redirects }
          }
          return null // Falsy value will be filtered out later
        })
        .filter(Boolean)

      let customErrorMessage = `In the front matter of ${page.relativePath} `
      if (trouble.length > 0) {
        if (trouble.length === 1) {
          customErrorMessage += `there is 1 .includeGuides front matter entry that is not correct.`
        } else {
          customErrorMessage += `there are ${trouble.length} .includeGuides front matter entries that are not correct.`
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
          customErrorMessage += `\n\t./scripts/update-internal-links.js ${page.relativePath}\n\n`
        }
      }
      expect(trouble.length, customErrorMessage).toEqual(0)
    },
  )
})

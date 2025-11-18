import { describe, expect, test } from 'vitest'

import { loadPages, loadPageMap } from '@/frame/lib/page-data'
import loadRedirects from '@/redirects/lib/precompile'
import { checkURL } from '@/tests/helpers/check-url'

const pageList = await loadPages(undefined, ['en'])
const pages = await loadPageMap(pageList)
const redirects = await loadRedirects(pageList)

const liquidElsif = /{%\s*elsif/
const containsLiquidElseIf = (text: string) => liquidElsif.test(text)

describe('front matter', () => {
  // Using any type for page because it comes from loadPages which returns dynamic page objects with varying properties
  // Using any[] for trouble because the error objects have different shapes depending on the validation that failed
  function makeCustomErrorMessage(page: any, trouble: any[], key: string) {
    let customErrorMessage = `In the front matter of ${page.relativePath} `
    if (trouble.length > 0) {
      if (trouble.length === 1) {
        customErrorMessage += `there is 1 .${key} front matter entry that is not correct.`
      } else {
        customErrorMessage += `there are ${trouble.length} .${key} front matter entries that are not correct.`
      }
      // Using any type because trouble array contains objects with varying error properties
      const nonWarnings = trouble.filter((t: any) => !t.warning)
      for (const { uri, index, redirects: redirectTo } of nonWarnings) {
        customErrorMessage += `\nindex: ${index} URI: ${uri}`
        if (redirectTo) {
          customErrorMessage += `\n\tredirects to ${redirectTo}`
        } else {
          customErrorMessage += '\tPage not found'
        }
      }
      // Using any type because trouble array contains objects with varying error properties
      if (trouble.find((t: any) => t.redirects)) {
        customErrorMessage += `\n\nNOTE! To automatically fix the redirects run this command:\n`
        customErrorMessage += `\n\t./src/links/scripts/update-internal-links.ts content/${page.relativePath}\n\n`
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

      const trouble = page
        .includeGuides! // Using any type for uri because includeGuides can contain various URI formats
        .map((uri: any, i: number) => checkURL(uri, i, redirectsContext))
        .filter(Boolean)

      const customErrorMessage = makeCustomErrorMessage(page, trouble, 'includeGuides')
      expect(trouble.length, customErrorMessage).toEqual(0)

      const counts = new Map()
      for (const guide of page.includeGuides!) {
        counts.set(guide, (counts.get(guide) || 0) + 1)
      }
      const countUnique = counts.size
      let notDistinctMessage = `In ${page.relativePath} there are duplicate links in .includeGuides`
      const dupes = [...counts.entries()].filter(([, count]) => count > 1).map(([entry]) => entry)
      notDistinctMessage += `\nTo fix this, remove: ${dupes.join(' and ')}`
      expect(page.includeGuides!.length, notDistinctMessage).toEqual(countUnique)
    },
  )

  // Test content with .featuredLinks front matter

  const pagesWithFeaturedLinks = pageList.filter((page) => page.featuredLinks)
  test.each(pagesWithFeaturedLinks)(
    '$relativePath .featuredLinks have pristine links',
    async (page) => {
      const redirectsContext = { redirects, pages }

      const trouble = []
      for (const links of Object.values(page.featuredLinks!)) {
        // Some thing in `.featuredLinks` are not arrays.
        // For example `popularHeading`. So just skip them.
        if (!Array.isArray(links)) continue

        trouble.push(
          ...links
            .filter((link) => link.href)
            .map((link, i) => checkURL(link.href, i, redirectsContext))
            .filter(Boolean),
        )
      }

      const customErrorMessage = makeCustomErrorMessage(page, trouble, 'featuredLinks')
      expect(trouble.length, customErrorMessage).toEqual(0)
    },
  )

  // Test content with .introLinks front matter

  const pagesWithIntroLinks = pageList.filter((page) => page.introLinks)
  test.each(pagesWithIntroLinks)('$relativePath .introLinks have pristine links', async (page) => {
    const redirectsContext = { redirects, pages }

    const trouble = []
    for (const linksRaw of Object.values(page.introLinks!)) {
      const links = Array.isArray(linksRaw) ? linksRaw : [linksRaw]
      trouble.push(
        ...links
          // At the present, we're not able to check when the URI
          // contains an `elsif` Liquid tag. So just skip them.
          .filter((uri) => !containsLiquidElseIf(uri))
          // On /en/enterprise-cloud@latest/admin we have,
          //
          //   try_ghec_for_free: '{% ifversion ghec %}https://github.com/account/enterprises/new{% endif %}'
          //
          // Ignore those too.
          .filter((uri) => !uri.includes('https://'))
          .map((uri, i) => checkURL(uri, i, redirectsContext))
          .filter(Boolean),
      )
    }
    const customErrorMessage = makeCustomErrorMessage(page, trouble, 'introLinks')
    expect(trouble.length, customErrorMessage).toEqual(0)
  })
})

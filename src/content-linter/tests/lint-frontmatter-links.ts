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
  function makeCustomErrorMessage(
    page: { relativePath: string },
    trouble: Array<{ warning?: boolean; uri?: string; index?: number; redirects?: string }>,
    key: string,
  ) {
    let customErrorMessage = `In the front matter of ${page.relativePath} `
    if (trouble.length > 0) {
      if (trouble.length === 1) {
        customErrorMessage += `there is 1 .${key} front matter entry that is not correct.`
      } else {
        customErrorMessage += `there are ${trouble.length} .${key} front matter entries that are not correct.`
      }
      const nonWarnings = trouble.filter((t) => !t.warning)
      for (const { uri, index, redirects: redirectTo } of nonWarnings) {
        customErrorMessage += `\nindex: ${index} URI: ${uri}`
        if (redirectTo) {
          customErrorMessage += `\n\tredirects to ${redirectTo}`
        } else {
          customErrorMessage += '\tPage not found'
        }
      }
      if (trouble.find((t) => t.redirects)) {
        customErrorMessage += `\n\nNOTE! To automatically fix the redirects run this command:\n`
        customErrorMessage += `\n\t./src/links/scripts/update-internal-links.ts content/${page.relativePath}\n\n`
      }
    }
    return customErrorMessage
  }

  const pagesWithFeaturedLinks = pageList.filter((page) => page.featuredLinks)
  test.each(pagesWithFeaturedLinks)(
    '$relativePath .featuredLinks have pristine links',
    async (page) => {
      const redirectsContext = { redirects, pages }

      const trouble = []
      for (const links of Object.values(page.featuredLinks!)) {
        // .featuredLinks includes scalars such as popularHeading, so only check arrays.
        if (!Array.isArray(links)) continue

        trouble.push(
          ...links
            .filter((link) => link.href)
            .map((link, i) => checkURL(link.href, i, redirectsContext))
            .filter((item): item is NonNullable<typeof item> => Boolean(item)),
        )
      }

      const customErrorMessage = makeCustomErrorMessage(page, trouble, 'featuredLinks')
      expect(trouble.length, customErrorMessage).toEqual(0)
    },
  )

  // Intro links can include conditional absolute CTA URLs such as try_ghec_for_free:
  // https://github.com/account/enterprises/new on /en/enterprise-cloud@latest/admin.
  // checkURL only handles docs-relative URLs.
  const pagesWithIntroLinks = pageList.filter((page) => page.introLinks)
  test.each(pagesWithIntroLinks)('$relativePath .introLinks have pristine links', async (page) => {
    const redirectsContext = { redirects, pages }

    const trouble = []
    for (const linksRaw of Object.values(page.introLinks!)) {
      const links = Array.isArray(linksRaw) ? linksRaw : [linksRaw]
      trouble.push(
        ...links
          // Skip URIs with elsif Liquid because checkURL cannot resolve conditional targets.
          .filter((uri) => !containsLiquidElseIf(uri))
          .filter((uri) => !uri.includes('https://'))
          .map((uri, i) => checkURL(uri, i, redirectsContext))
          .filter((item): item is NonNullable<typeof item> => Boolean(item)),
      )
    }
    const customErrorMessage = makeCustomErrorMessage(page, trouble, 'introLinks')
    expect(trouble.length, customErrorMessage).toEqual(0)
  })
})

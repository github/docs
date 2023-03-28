import { languageKeys } from '../../lib/languages'
import { getDOM } from '../helpers/e2etest.js'

const langs = languageKeys.filter((lang) => lang !== 'en')

// Temporary solution until the translations correct out-of-date details
// in translated pages.
// We can delete this when we've locally asserted that the `.replaceAll`
// achieves nothing in any language.
// See internal issue # 2894
describe('githubs-ssh-key-fingerprints page', () => {
  test.each(langs)('search in %s', async (lang) => {
    const $ = await getDOM(
      `/${lang}/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints`
    )
    const articleText = $('#article-contents').text()
    expect(articleText).toMatch(/SHA256:uNiVztksCsDhcc0u9e8BujQXVUpKZIDTMczCvj3tD2s/)
    expect(articleText).toMatch(
      /ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCj7ndNxQowgcQnjshcLrqPEiiphnt/
    )
  })
})

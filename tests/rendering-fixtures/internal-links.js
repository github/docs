import { getDOM } from '../helpers/e2etest.js'
import enterpriseServerReleases from '../../lib/enterprise-server-releases.js'
import { allVersions } from '../../lib/all-versions.js'

describe('autotitle', () => {
  test('internal links with AUTOTITLE resolves', async () => {
    const $ = await getDOM('/get-started/foo/autotitling')
    const firstLink = $('#article-contents a[href]')
    expect(firstLink.text()).toBe('Hello World')
  })
})

describe('cross-version-links', () => {
  test.each(Object.keys(allVersions))(
    'links to free-pro-team should be implicit even on %p',
    async (version) => {
      const URL = `/${version}/get-started/foo/cross-version-linking`
      const $ = await getDOM(URL)
      const links = $('#article-contents a[href]')

      // Tests that the hardcoded prefix is always removed
      const firstLink = links.filter(function () {
        return $(this).text() === 'Hello world always in free-pro-team'
      })
      expect(firstLink.attr('href')).toBe('/en/get-started/quickstart/hello-world')

      // Tests that the second link always goes to enterprise-server@X.Y
      const secondLink = links.filter(function () {
        return $(this).text() === 'Autotitling page always in enterprise-server latest'
      })
      expect(secondLink.attr('href')).toBe(
        `/en/enterprise-server@${enterpriseServerReleases.latest}/get-started/quickstart/hello-world`
      )
    }
  )
})

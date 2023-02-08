import { get, getDOM } from '../helpers/e2etest.js'
import enterpriseServerReleases from '../../lib/enterprise-server-releases.js'
import { allVersions } from '../../lib/all-versions.js'

describe('autotitle', () => {
  test('internal links with AUTOTITLE resolves', async () => {
    const $ = await getDOM('/get-started/foo/autotitling')
    const links = $('#article-contents a[href]')
    links.each((i, element) => {
      if ($(element).attr('href').includes('/get-started/quickstart/hello-world')) {
        expect($(element).text()).toBe('Hello World')
      }
    })
    // There are 4 links on the `autotitling.md` content.
    expect.assertions(4)
  })

  test('typos lead to error when NODE_ENV !== production', async () => {
    // The fixture typo-autotitling.md contains two different typos
    // of the word "AUTOTITLE", separated by `{% if version ghes %}`
    {
      const res = await get('/get-started/foo/typo-autotitling', { followRedirects: true })
      expect(res.statusCode).toBe(500)
    }
    {
      const res = await get('/enterprise-server@latest/get-started/foo/typo-autotitling', {
        followRedirects: true,
      })
      expect(res.statusCode).toBe(500)
    }
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

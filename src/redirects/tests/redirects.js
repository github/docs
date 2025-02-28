import { fileURLToPath } from 'url'
import path from 'path'

import { isPlainObject } from 'lodash-es'
import { beforeAll, describe, expect, test, vi } from 'vitest'

import enterpriseServerReleases, {
  deprecatedWithFunctionalRedirects,
} from '#src/versions/lib/enterprise-server-releases.js'
import Page from '#src/frame/lib/page.js'
import { get, head } from '#src/tests/helpers/e2etest.js'
import versionSatisfiesRange from '#src/versions/lib/version-satisfies-range.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

describe('redirects', () => {
  vi.setConfig({ testTimeout: 3 * 60 * 1000 })

  let redirects
  beforeAll(async () => {
    const res = await get('/en?json=redirects')
    redirects = JSON.parse(res.body)
  })

  test('page.buildRedirects() returns an array', async () => {
    const page = await Page.init({
      relativePath:
        'pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches.md',
      basePath: path.join(__dirname, '../../../content'),
      languageCode: 'en',
    })
    const pageRedirects = page.buildRedirects()
    expect(isPlainObject(pageRedirects)).toBe(true)
  })

  test('dotcom homepage page.buildRedirects()', async () => {
    const page = await Page.init({
      relativePath: 'issues/index.md',
      basePath: path.join(__dirname, '../../../content'),
      languageCode: 'en',
    })
    const pageRedirects = page.buildRedirects()
    expect(pageRedirects['/about-issues']).toBe('/issues')
    expect(pageRedirects['/creating-an-issue']).toBe('/issues')
    expect(
      pageRedirects[`/enterprise-server@${enterpriseServerReleases.latestStable}/about-issues`],
    ).toBe(`/enterprise-server@${enterpriseServerReleases.latestStable}/issues`)
    expect(
      pageRedirects[`/enterprise-server@${enterpriseServerReleases.latest}/creating-an-issue`],
    ).toBe(`/enterprise-server@${enterpriseServerReleases.latest}/issues`)
  })

  describe('query params', () => {
    test('are preserved in redirected URLs', async () => {
      const res = await get('/enterprise/admin?query=pulls')
      expect(res.statusCode).toBe(301)
      const expected = `/en/enterprise-server@${enterpriseServerReleases.latest}/search?query=pulls`
      expect(res.headers.location).toBe(expected)
    })

    test('have q= converted to query=', async () => {
      const res = await get('/en/enterprise/admin?q=pulls')
      expect(res.statusCode).toBe(301)
      const expected = `/en/enterprise-server@${enterpriseServerReleases.latest}/search?query=pulls`
      expect(res.headers.location).toBe(expected)
    })

    test('convert q= to query= on search page', async () => {
      const res = await get('/en/search?q=pulls')
      expect(res.statusCode).toBe(301)
      const expected = '/en/search?query=pulls'
      expect(res.headers.location).toBe(expected)
    })

    test('have faq= not converted to query=', async () => {
      // Don't confuse `?faq=` for `?q=` just because they both start with `q=`
      // Docs internal #21945
      const res = await get('/en/enterprise/admin?faq=pulls')
      expect(res.statusCode).toBe(301)
      const expected = `/en/enterprise-server@${enterpriseServerReleases.latest}/admin?faq=pulls`
      expect(res.headers.location).toBe(expected)
    })

    test('do not work on other paths that include "search"', async () => {
      const reqPath = `/en/enterprise-server@${enterpriseServerReleases.latest}/admin/configuring-settings/configuring-github-connect/enabling-unified-search-for-your-enterprise`
      const res = await get(reqPath)
      expect(res.statusCode).toBe(200)
    })

    test('Do not redirect to search if on GraphQL Explorer "search"', async () => {
      const res = await get('/en/graphql/overview/explorer?query=anything')
      expect(res.statusCode).toBe(200)
    })
  })

  describe('trailing slashes', () => {
    test('are absent from all redirected URLs', async () => {
      const keys = Object.keys(redirects)
      expect(keys.length).toBeGreaterThan(100)
      expect(keys.every((key) => !key.endsWith('/') || key === '/')).toBe(true)
    })

    test('are absent from all destination URLs', async () => {
      const values = Object.entries(redirects)
        .filter(([, to]) => !to.includes('://'))
        .map(([from_]) => from_)
      expect(values.length).toBeGreaterThan(100)
      expect(values.every((value) => !value.endsWith('/'))).toBe(true)
    })

    test('are redirected for HEAD requests (not just GET requests)', async () => {
      const res = await head('/articles/closing-issues-via-commit-messages/')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe('/articles/closing-issues-via-commit-messages')
    })
  })

  describe('home page redirects', () => {
    test('homepage redirects to english by default', async () => {
      const res = await get('/')
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe('/en')
      // language specific caching
      expect(res.headers['cache-control']).toContain('public')
      expect(res.headers['cache-control']).toMatch(/max-age=\d+/)
      expect(res.headers.vary).toContain('accept-language')
      expect(res.headers.vary).toContain('x-user-language')
    })

    test('trailing slash on languaged homepage should permanently redirect', async () => {
      const res = await get('/en/')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe('/en')
      expect(res.headers['set-cookie']).toBeUndefined()
      expect(res.headers['cache-control']).toContain('public')
      expect(res.headers['cache-control']).toMatch(/max-age=\d+/)
    })
  })

  describe('external redirects', () => {
    test('no external redirect starts with a language prefix', () => {
      const values = Object.entries(redirects)
        .filter(([, to]) => to.includes('://'))
        .map(([from_]) => from_)
        .filter((from_) => from_.startsWith('/en/'))
      expect(values.length).toBe(0)
    })

    test('no external redirect should go to developer.github.com', () => {
      const values = Object.values(redirects)
        .filter((to) => to.includes('://'))
        .filter((to) => new URL(to).hostname === 'developer.github.com')
      expect(values.length).toBe(0)
    })

    test('work for top-level request paths', async () => {
      const res = await get('/git-ready')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe('https://gitready.com/')
      expect(res.headers['set-cookie']).toBeUndefined()
      expect(res.headers['cache-control']).toContain('public')
      expect(res.headers['cache-control']).toMatch(/max-age=\d+/)
    })

    test('work for top-level request paths with /en/ prefix', async () => {
      const res = await get('/en/git-ready')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe('https://gitready.com/')
    })
  })

  describe('enterprise home page', () => {
    const enterpriseHome = `/en/enterprise-server@${enterpriseServerReleases.latest}`
    const enterpriseStableHome = `/en/enterprise-server@${enterpriseServerReleases.latestStable}`

    test('/enterprise', async () => {
      const res = await get('/enterprise')
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe(enterpriseHome)
    })

    test('no language code redirects to english', async () => {
      const res = await get(`/enterprise/${enterpriseServerReleases.latest}`)
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe(enterpriseHome)
    })

    test('no version redirects to latest version', async () => {
      const res = await get('/en/enterprise')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(enterpriseHome)
    })

    test('hardcoded @latest redirects to latest stable version', async () => {
      const res = await get('/en/enterprise-server@latest')
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe(enterpriseStableHome)
    })
  })

  describe('2.13+ deprecated enterprise', () => {
    test('no language code redirects to english', async () => {
      const res = await get('/enterprise/2.13')
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe('/en/enterprise/2.13')
    })

    test('admin/guides redirects to admin', async () => {
      const res = await get('/en/enterprise/2.13/admin/guides')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe('/en/enterprise/2.13/admin')
    })
  })

  describe('<2.12 deprecated enterprise', () => {
    test('english language code redirects to no language code', async () => {
      const res = await get('/en/enterprise/2.12')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe('/enterprise/2.12')
    })

    test('frontmatter redirect', async () => {
      const res = await get('/enterprise/2.12/user/articles/github-flavored-markdown')
      expect(res.statusCode).toBe(302) // because it doesn't have a language
      expect(res.headers.location).toBe('/enterprise/2.12/user/categories/writing-on-github/')
    })
  })

  describe('enterprise admin', () => {
    // firstRestoredAdminGuides = 2.21
    // lastBeforeRestoredAdminGuides = 2.20
    // (these won't change but it's more convenient to use constants)
    const { firstRestoredAdminGuides, getPreviousReleaseNumber, latest } = enterpriseServerReleases
    const lastBeforeRestoredAdminGuides = getPreviousReleaseNumber(firstRestoredAdminGuides)
    const enterpriseAdmin = `/en/enterprise-server@${latest}/admin`

    test('no language code redirects to english', async () => {
      const res = await get(`/enterprise/${latest}/admin`)
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe(enterpriseAdmin)
    })

    test('no version redirects to latest version', async () => {
      const res = await get('/en/enterprise/admin')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(enterpriseAdmin)
    })

    test('admin/guides redirects to admin on <2.21', async () => {
      const res = await get(`/en/enterprise-server@${lastBeforeRestoredAdminGuides}/admin/guides`)
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(
        enterpriseAdmin.replace(latest, lastBeforeRestoredAdminGuides),
      )
    })

    test('admin/guides does not redirect to admin on >=2.21', async () => {
      const res = await get(`/en/enterprise-server@${firstRestoredAdminGuides}/admin/guides`)
      expect(res.statusCode).toBe(200)
    })

    test('no version plus admin/guides redirects to the right place on latest version', async () => {
      const shouldRedirect = versionSatisfiesRange(latest, `<${firstRestoredAdminGuides}`)
      const expectedStatusCode = shouldRedirect ? 301 : 200
      const res = await get(`/en/enterprise-server@${latest}/admin/guides`)
      expect(res.statusCode).toBe(expectedStatusCode)
    })

    test('admin/guides redirects to admin in deep links on <2.21', async () => {
      const res = await get(
        `/en/enterprise-server@${lastBeforeRestoredAdminGuides}/admin/guides/installation/upgrading-github-enterprise`,
      )
      expect(res.statusCode).toBe(301)
      const redirectRes = await get(res.headers.location)
      expect(redirectRes.statusCode).toBe(200)
      const expected = `/en/enterprise-server@${lastBeforeRestoredAdminGuides}/admin/enterprise-management/upgrading-github-enterprise-server`
      expect(res.headers.location).toBe(expected)
    })

    test('admin/guides still redirects to admin in deep links on >=2.21', async () => {
      const res = await get(
        `/en/enterprise-server@${firstRestoredAdminGuides}/admin/guides/installation/upgrading-github-enterprise`,
      )
      expect(res.statusCode).toBe(301)
      const redirectRes = await get(res.headers.location)
      expect(redirectRes.statusCode).toBe(200)
      const expected = `/en/enterprise-server@${firstRestoredAdminGuides}/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server`
      expect(res.headers.location).toBe(expected)
    })
  })

  describe('enterprise user homepage', () => {
    const enterpriseUser = `/en/enterprise-server@${enterpriseServerReleases.latest}`

    test('no product redirects to GitHub.com product', async () => {
      const res = await get(`/en/enterprise/${enterpriseServerReleases.latest}/user`)
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(enterpriseUser)
    })

    test('no language code redirects to english', async () => {
      const res = await get(`/enterprise/${enterpriseServerReleases.latest}/user`)
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe(enterpriseUser)
    })

    test('no version redirects to latest version', async () => {
      const res = await get('/en/enterprise/user/github')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(enterpriseUser)
    })
  })

  describe('enterprise user article', () => {
    const userArticle = `/en/enterprise-server@${enterpriseServerReleases.latest}/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo`

    test('no product redirects to GitHub.com product on the latest version', async () => {
      const res = await get(
        `/en/enterprise/${enterpriseServerReleases.latest}/user/articles/fork-a-repo`,
      )
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(userArticle)
    })

    // 2.16 was the first version where we moved /articles/foo to /github/<category>/foo
    test('no product does not redirect to GitHub.com product in <=2.15', async () => {
      const res = await get('/en/enterprise/2.15/user/articles/set-up-git')
      expect(res.statusCode).toBe(200)
    })

    test('no language code redirects to english', async () => {
      const res = await get(
        `/enterprise/${enterpriseServerReleases.latest}/user/articles/fork-a-repo`,
      )
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe(userArticle)
    })

    test('no version redirects to latest version', async () => {
      const res = await get('/en/enterprise/articles/fork-a-repo')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(userArticle)
    })
  })

  describe('enterprise user article with frontmatter redirect', () => {
    const userArticle = `/en/enterprise-server@${enterpriseServerReleases.latest}/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo`
    const redirectFromPath = '/articles/fork-a-repo'

    test('redirects to expected article', async () => {
      const res = await get(
        `/en/enterprise/${enterpriseServerReleases.latest}/user${redirectFromPath}`,
      )
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(userArticle)
    })

    test('no language code redirects to english', async () => {
      const res = await get(
        `/enterprise/${enterpriseServerReleases.latest}/user${redirectFromPath}`,
      )
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe(userArticle)
    })

    test('no version redirects to latest version', async () => {
      const res = await get(`/en/enterprise/user${redirectFromPath}`)
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(userArticle)
    })
  })

  describe('desktop guide', () => {
    const desktopGuide =
      '/en/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request-from-github-desktop'

    test('no language code redirects to english', async () => {
      const res = await get(
        '/desktop/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request',
      )
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe(desktopGuide)
    })

    test('desktop/guides redirects to desktop', async () => {
      const res = await get(
        '/en/desktop/guides/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request',
      )
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(desktopGuide)
    })
  })

  describe('recently deprecated ghes version redirects that lack language', () => {
    test('test redirect to an active enterprise-server version', async () => {
      const url = `/enterprise-server@${enterpriseServerReleases.latest}/admin/release-notes`
      const res = await get(url)
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe(`/en${url}`)
    })
    test('test redirect to a deprecated old enterprise-server version', async () => {
      const url = `/enterprise-server@2.22/admin/release-notes`
      const res = await get(url)
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe(`/en${url}`)
    })
    test('test redirect to a recently deprecated enterprise-server version', async () => {
      const url = `/enterprise-server@${deprecatedWithFunctionalRedirects[0]}/admin/release-notes`
      const res = await get(url)
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe(`/en${url}`)
    })
    test('any enterprise-server deprecated with functional redirects', async () => {
      const url = `/enterprise-server@${deprecatedWithFunctionalRedirects[0]}`
      const res = await get(url)
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe(`/en${url}`)
    })
  })

  describe('redirects with double-slashes', () => {
    test('prefix double-slash', async () => {
      const res = await get(`//en`)
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(`/en`)
    })

    test('double-slash elsewhere in the URL', async () => {
      const res = await get(`/en//rest`)
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(`/en/rest`)
    })

    test('double-slash trailing in the URL', async () => {
      const res = await get(`/en//`)
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(`/en`)
    })
  })
})

import { fileURLToPath } from 'url'
import path from 'path'
import { isPlainObject } from 'lodash-es'
import supertest from 'supertest'
import createApp from '../../lib/app.js'
import enterpriseServerReleases from '../../lib/enterprise-server-releases.js'
import nonEnterpriseDefaultVersion from '../../lib/non-enterprise-default-version.js'
import Page from '../../lib/page.js'
import { get } from '../helpers/supertest.js'
import versionSatisfiesRange from '../../lib/version-satisfies-range.js'
import { jest } from '@jest/globals'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

describe('redirects', () => {
  jest.setTimeout(5 * 60 * 1000)

  let redirects
  beforeAll(async () => {
    const res = await get('/en?json=redirects')
    redirects = JSON.parse(res.text)
  })

  test('page.redirects is an array', async () => {
    const page = await Page.init({
      relativePath:
        'github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches.md',
      basePath: path.join(__dirname, '../../content'),
      languageCode: 'en',
    })
    page.buildRedirects()
    expect(isPlainObject(page.redirects)).toBe(true)
  })

  test('dotcom homepage page.redirects', async () => {
    const page = await Page.init({
      relativePath: 'github/index.md',
      basePath: path.join(__dirname, '../../content'),
      languageCode: 'en',
    })
    page.buildRedirects()
    expect(page.redirects[`/en/${nonEnterpriseDefaultVersion}/github`]).toBe('/en/github')
    expect(page.redirects['/articles']).toBe('/en/github')
    expect(page.redirects['/en/articles']).toBe('/en/github')
    expect(page.redirects[`/en/${nonEnterpriseDefaultVersion}/articles`]).toBe('/en/github')
    expect(page.redirects['/common-issues-and-questions']).toBe('/en/github')
    expect(page.redirects['/en/common-issues-and-questions']).toBe('/en/github')
    expect(page.redirects[`/en/enterprise/${enterpriseServerReleases.latest}/user/articles`]).toBe(
      `/en/enterprise-server@${enterpriseServerReleases.latest}/github`
    )
    expect(
      page.redirects[
        `/en/enterprise/${enterpriseServerReleases.latest}/user/common-issues-and-questions`
      ]
    ).toBe(`/en/enterprise-server@${enterpriseServerReleases.latest}/github`)
  })

  test('converts single `redirect_from` strings values into arrays', async () => {
    const page = await Page.init({
      relativePath: 'article-with-redirect-from-string.md',
      basePath: path.join(__dirname, '../fixtures'),
      languageCode: 'en',
    })
    page.buildRedirects()
    expect(page.redirects['/redirect-string']).toBe('/en/article-with-redirect-from-string')
  })

  describe('query params', () => {
    test('are preserved in redirected URLs', async () => {
      const res = await get('/enterprise/admin?query=pulls')
      expect(res.statusCode).toBe(301)
      const expected = `/en/enterprise-server@${enterpriseServerReleases.latest}/admin?query=pulls`
      expect(res.headers.location).toBe(expected)
    })

    test('have q= converted to query=', async () => {
      const res = await get('/en/enterprise/admin?q=pulls')
      expect(res.statusCode).toBe(301)
      const expected = `/en/enterprise-server@${enterpriseServerReleases.latest}/admin?query=pulls`
      expect(res.headers.location).toBe(expected)
    })

    test('work with redirected search paths', async () => {
      const res = await get('/en/enterprise/admin/search?utf8=%E2%9C%93&query=pulls')
      expect(res.statusCode).toBe(301)
      const expected = `/en/enterprise-server@${enterpriseServerReleases.latest}/admin?utf8=%E2%9C%93&query=pulls`
      expect(res.headers.location).toBe(expected)
    })

    test('do not work on other paths that include "search"', async () => {
      const reqPath = `/en/enterprise-server@${enterpriseServerReleases.latest}/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-unified-search-between-github-enterprise-server-and-githubcom`
      const res = await get(reqPath)
      expect(res.statusCode).toBe(200)
    })

    test('work on deprecated versions', async () => {
      const res = await get('/enterprise/2.12/admin/search?utf8=%E2%9C%93&q=pulls')
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
      const values = Object.values(redirects)
      expect(values.length).toBeGreaterThan(100)
      expect(values.every((value) => !value.endsWith('/'))).toBe(true)
    })

    test('are redirected for HEAD requests (not just GET requests)', async () => {
      const res = await supertest(createApp()).head('/articles/closing-issues-via-commit-messages/')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe('/articles/closing-issues-via-commit-messages')
    })
  })

  describe('external redirects', () => {
    test('work for top-level request paths', async () => {
      const res = await get('/git-ready')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe('http://gitready.com/')
    })

    test('work for article-level request paths', async () => {
      const res = await get('/articles/testing-webhooks')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe('http://developer.github.com/webhooks/testing/')
    })
  })

  describe('localized redirects', () => {
    test('redirect_from for renamed pages', async () => {
      const { res } = await get(
        '/ja/desktop/contributing-to-projects/changing-a-remote-s-url-from-github-desktop'
      )
      expect(res.statusCode).toBe(301)
      const expected =
        '/ja/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/changing-a-remotes-url-from-github-desktop'
      expect(res.headers.location).toBe(expected)
    })
  })

  describe('enterprise home page', () => {
    const enterpriseHome = `/en/enterprise-server@${enterpriseServerReleases.latest}`
    const japaneseEnterpriseHome = enterpriseHome.replace('/en/', '/ja/')

    test('/enterprise', async () => {
      const res = await get('/enterprise')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(enterpriseHome)
    })

    test('no language code redirects to english', async () => {
      const res = await get(`/enterprise/${enterpriseServerReleases.latest}`)
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(enterpriseHome)
    })

    test('no version redirects to latest version', async () => {
      const res = await get('/en/enterprise')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(enterpriseHome)
    })

    test('no version redirects to latest version (japanese)', async () => {
      const res = await get('/ja/enterprise')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(japaneseEnterpriseHome)
    })

    test('hardcoded @latest redirects to latest version', async () => {
      const res = await get('/en/enterprise-server@latest')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(enterpriseHome)
    })
  })

  describe('2.13+ deprecated enterprise', () => {
    test('no language code redirects to english', async () => {
      const res = await get('/enterprise/2.13')
      expect(res.statusCode).toBe(301)
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
      expect(res.statusCode).toBe(301)
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
    const japaneseEnterpriseAdmin = enterpriseAdmin.replace('/en/', '/ja/')

    test('no language code redirects to english', async () => {
      const res = await get(`/enterprise/${latest}/admin`)
      expect(res.statusCode).toBe(301)
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
        enterpriseAdmin.replace(latest, lastBeforeRestoredAdminGuides)
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
        `/en/enterprise-server@${lastBeforeRestoredAdminGuides}/admin/guides/installation/upgrading-github-enterprise`
      )
      expect(res.statusCode).toBe(301)
      const redirectRes = await get(res.headers.location)
      expect(redirectRes.statusCode).toBe(200)
      const expected = `/en/enterprise-server@${lastBeforeRestoredAdminGuides}/admin/enterprise-management/upgrading-github-enterprise-server`
      expect(res.headers.location).toBe(expected)
    })

    test('admin/guides still redirects to admin in deep links on >=2.21', async () => {
      const res = await get(
        `/en/enterprise-server@${firstRestoredAdminGuides}/admin/guides/installation/upgrading-github-enterprise`
      )
      expect(res.statusCode).toBe(301)
      const redirectRes = await get(res.headers.location)
      expect(redirectRes.statusCode).toBe(200)
      const expected = `/en/enterprise-server@${firstRestoredAdminGuides}/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server`
      expect(res.headers.location).toBe(expected)
    })

    test('no version redirects to latest version (japanese)', async () => {
      const res = await get('/ja/enterprise/admin')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(japaneseEnterpriseAdmin)
    })

    test('admin/guides redirects to admin on <2.21 (japanese)', async () => {
      const res = await get(`/ja/enterprise-server@${lastBeforeRestoredAdminGuides}/admin/guides`)
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(
        japaneseEnterpriseAdmin.replace(latest, lastBeforeRestoredAdminGuides)
      )
    })

    test('admin/guides does not redirect to admin on >=2.21 (japanese)', async () => {
      const res = await get(`/ja/enterprise-server@${firstRestoredAdminGuides}/admin/guides`)
      expect(res.statusCode).toBe(200)
    })
  })

  describe('enterprise user homepage', () => {
    const enterpriseUser = `/en/enterprise-server@${enterpriseServerReleases.latest}/github`
    const japaneseEnterpriseUser = enterpriseUser.replace('/en/', '/ja/')

    test('no product redirects to GitHub.com product', async () => {
      const res = await get(`/en/enterprise/${enterpriseServerReleases.latest}/user`)
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(enterpriseUser)
    })

    test('no language code redirects to english', async () => {
      const res = await get(`/enterprise/${enterpriseServerReleases.latest}/user/github`)
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(enterpriseUser)
    })

    test('no version redirects to latest version', async () => {
      const res = await get('/en/enterprise/user/github')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(enterpriseUser)
    })

    test('no version redirects to latest version (japanese)', async () => {
      const res = await get('/ja/enterprise/user/github')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(japaneseEnterpriseUser)
    })
  })

  describe('enterprise user article', () => {
    const userArticle = `/en/enterprise-server@${enterpriseServerReleases.latest}/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-strong-password`
    const japaneseUserArticle = userArticle.replace('/en/', '/ja/')

    test('no product redirects to GitHub.com product on the latest version', async () => {
      const res = await get(
        `/en/enterprise/${enterpriseServerReleases.latest}/user/articles/creating-a-strong-password`
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
        `/enterprise/${enterpriseServerReleases.latest}/user/articles/creating-a-strong-password`
      )
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(userArticle)
    })

    test('no version redirects to latest version', async () => {
      const res = await get('/en/enterprise/user/articles/creating-a-strong-password')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(userArticle)
    })

    test('no version redirects to latest version (japanese)', async () => {
      const res = await get('/ja/enterprise/user/articles/creating-a-strong-password')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(japaneseUserArticle)
    })
  })

  describe('enterprise user article with frontmatter redirect', () => {
    const userArticle = `/en/enterprise-server@${enterpriseServerReleases.latest}/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-ssh-keys`
    const redirectFromPath = '/articles/reviewing-your-ssh-keys'
    const japaneseUserArticle = userArticle.replace('/en/', '/ja/')

    test('redirects to expected article', async () => {
      const res = await get(
        `/en/enterprise/${enterpriseServerReleases.latest}/user${redirectFromPath}`
      )
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(userArticle)
    })

    test('no language code redirects to english', async () => {
      const res = await get(
        `/enterprise/${enterpriseServerReleases.latest}/user${redirectFromPath}`
      )
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(userArticle)
    })

    test('no version redirects to latest version', async () => {
      const res = await get(`/en/enterprise/user${redirectFromPath}`)
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(userArticle)
    })

    test('no version redirects to latest version (japanese)', async () => {
      const res = await get(`/ja/enterprise/user${redirectFromPath}`)
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(japaneseUserArticle)
    })
  })

  describe('desktop guide', () => {
    const desktopGuide =
      '/en/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request'
    const japaneseDesktopGuides = desktopGuide.replace('/en/', '/ja/')

    test('no language code redirects to english', async () => {
      const res = await get(
        '/desktop/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request'
      )
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(desktopGuide)
    })

    test('desktop/guides redirects to desktop', async () => {
      const res = await get(
        '/en/desktop/guides/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request'
      )
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(desktopGuide)
    })

    test('desktop/guides redirects to desktop (japanese)', async () => {
      const res = await get(
        '/ja/desktop/guides/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request'
      )
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(japaneseDesktopGuides)
    })
  })
})

import { fileURLToPath } from 'url'
import path from 'path'
import { isPlainObject } from 'lodash-es'
import { describe, expect, jest, test } from '@jest/globals'

import enterpriseServerReleases from '../../lib/enterprise-server-releases.js'
import Page from '../../lib/page.js'
import { get, head } from '../helpers/e2etest.js'
import versionSatisfiesRange from '../../lib/version-satisfies-range.js'
import { PREFERRED_LOCALE_COOKIE_NAME } from '../../middleware/detect-language.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

describe('redirects', () => {
  jest.setTimeout(5 * 60 * 1000)

  let redirects
  beforeAll(async () => {
    const res = await get('/en?json=redirects')
    redirects = JSON.parse(res.text)
  })

  test('page.buildRedirects() returns an array', async () => {
    const page = await Page.init({
      relativePath:
        'pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches.md',
      basePath: path.join(__dirname, '../../content'),
      languageCode: 'en',
    })
    const pageRedirects = page.buildRedirects()
    expect(isPlainObject(pageRedirects)).toBe(true)
  })

  test('dotcom homepage page.buildRedirects()', async () => {
    const page = await Page.init({
      relativePath: 'issues/index.md',
      basePath: path.join(__dirname, '../../content'),
      languageCode: 'en',
    })
    const pageRedirects = page.buildRedirects()
    expect(pageRedirects['/about-issues']).toBe('/issues')
    expect(pageRedirects['/creating-an-issue']).toBe('/issues')
    expect(
      pageRedirects[`/enterprise-server@${enterpriseServerReleases.latest}/about-issues`]
    ).toBe(`/enterprise-server@${enterpriseServerReleases.latest}/issues`)
    expect(
      pageRedirects[`/enterprise-server@${enterpriseServerReleases.latest}/creating-an-issue`]
    ).toBe(`/enterprise-server@${enterpriseServerReleases.latest}/issues`)
  })

  test('converts single `redirect_from` strings values into arrays', async () => {
    const page = await Page.init({
      relativePath: 'article-with-redirect-from-string.md',
      basePath: path.join(__dirname, '../fixtures'),
      languageCode: 'en',
    })
    const pageRedirects = page.buildRedirects()
    expect(pageRedirects['/redirect-string']).toBe('/article-with-redirect-from-string')
  })

  describe('query params', () => {
    test('are preserved in redirected URLs', async () => {
      const res = await get('/enterprise/admin?query=pulls')
      expect(res.statusCode).toBe(302)
      const expected = `/en/enterprise-server@${enterpriseServerReleases.latest}/admin?query=pulls`
      expect(res.headers.location).toBe(expected)
    })

    test('have q= converted to query=', async () => {
      const res = await get('/en/enterprise/admin?q=pulls')
      expect(res.statusCode).toBe(301)
      const expected = '/en/enterprise/admin?query=pulls'
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

    test('work with redirected search paths', async () => {
      const res = await get('/en/enterprise/admin/search?utf8=%E2%9C%93&query=pulls')
      expect(res.statusCode).toBe(301)
      const expected = `/en/enterprise-server@${enterpriseServerReleases.latest}/admin?utf8=%E2%9C%93&query=pulls`
      expect(res.headers.location).toBe(expected)
    })

    test('do not work on other paths that include "search"', async () => {
      const reqPath = `/en/enterprise-server@${enterpriseServerReleases.latest}/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise`
      const res = await get(reqPath)
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
        .filter(([from_, to]) => !to.includes('://'))
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
      expect(res.headers['cache-control']).toBe('private, no-store')
    })

    test('homepage redirects to preferred language', async () => {
      const res = await get('/', { headers: { 'Accept-Language': 'ja' }, followRedirects: false })
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe('/ja')
      expect(res.headers['cache-control']).toBe('private, no-store')
    })

    test('homepage redirects to preferred language by cookie', async () => {
      const res = await get('/', {
        headers: {
          Cookie: `${PREFERRED_LOCALE_COOKIE_NAME}=ja`,
          'Accept-Language': 'es', // note how this is going to be ignored
        },
        followRedirects: false,
      })
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe('/ja')
      expect(res.headers['cache-control']).toBe('private, no-store')
    })

    test('homepage redirects to preferred language by cookie if valid', async () => {
      const res = await get('/', {
        headers: {
          Cookie: `${PREFERRED_LOCALE_COOKIE_NAME}=xy`,
          'Accept-Language': 'ja', // note how this is going to be ignored
        },
        followRedirects: false,
      })
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe('/ja')
      expect(res.headers['cache-control']).toBe('private, no-store')
    })

    test('trailing slash on languaged homepage should permantently redirect', async () => {
      const res = await get('/en/')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe('/en')
      expect(res.headers['set-cookie']).toBeUndefined()
      expect(res.headers['cache-control']).toContain('public')
      expect(res.headers['cache-control']).toMatch(/max-age=\d+/)
    })

    test('trailing slash with query string on languaged homepage should permantently redirect', async () => {
      const res = await get('/ja/?foo=bar&bar=foo')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe('/ja?foo=bar&bar=foo')
      expect(res.headers['set-cookie']).toBeUndefined()
      expect(res.headers['cache-control']).toContain('public')
      expect(res.headers['cache-control']).toMatch(/max-age=\d+/)
    })
  })

  describe('external redirects', () => {
    test('no external redirect starts with a language prefix', () => {
      const values = Object.entries(redirects)
        .filter(([from_, to]) => to.includes('://'))
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

    test('work for top-level request paths with /ja/ prefix', async () => {
      const res = await get('/ja/git-ready')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe('https://gitready.com/')
    })
  })

  describe('localized redirects', () => {
    const redirectFrom =
      '/desktop/contributing-to-projects/changing-a-remote-s-url-from-github-desktop'
    const redirectTo =
      '/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/changing-a-remotes-url-from-github-desktop'

    test('redirect_from for renamed pages', async () => {
      const res = await get(`/ja${redirectFrom}`)
      expect(res.statusCode).toBe(301)
      const expected = `/ja${redirectTo}`
      expect(res.headers.location).toBe(expected)
    })

    test('redirect_from for renamed pages by Accept-Language header', async () => {
      const res = await get(redirectFrom, {
        headers: {
          'Accept-Language': 'ja',
        },
        followRedirects: false,
      })
      expect(res.statusCode).toBe(302)
      const expected = `/ja${redirectTo}`
      expect(res.headers.location).toBe(expected)
      expect(res.headers['cache-control']).toBe('private, no-store')
    })

    test('redirect_from for renamed pages but ignore Accept-Language header if not recognized', async () => {
      const res = await get(redirectFrom, {
        headers: {
          // None of these are recognized
          'Accept-Language': 'sv,fr,gr',
        },
        followRedirects: false,
      })
      expect(res.statusCode).toBe(302)
      const expected = `/en${redirectTo}`
      expect(res.headers.location).toBe(expected)
      expect(res.headers['cache-control']).toBe('private, no-store')
    })

    test('redirect_from for renamed pages but ignore unrecognized Accept-Language header values', async () => {
      const res = await get(redirectFrom, {
        headers: {
          // Only the last one is recognized
          'Accept-Language': 'sv,ja',
        },
        followRedirects: false,
      })
      expect(res.statusCode).toBe(302)
      const expected = `/ja${redirectTo}`
      expect(res.headers.location).toBe(expected)
      expect(res.headers['cache-control']).toBe('private, no-store')
    })

    test('will inject the preferred language from cookie', async () => {
      const res = await get(redirectFrom, {
        headers: {
          Cookie: `${PREFERRED_LOCALE_COOKIE_NAME}=ja`,
          'Accept-Language': 'es', // note how this is going to be ignored
        },
        followRedirects: false,
      })
      // 302 because the redirect depended on cookie
      expect(res.statusCode).toBe(302)
      const expected = `/ja${redirectTo}`
      expect(res.headers.location).toBe(expected)
      expect(res.headers['cache-control']).toBe('private, no-store')
    })
  })

  describe('enterprise home page', () => {
    const enterpriseHome = `/en/enterprise-server@${enterpriseServerReleases.latest}`
    const japaneseEnterpriseHome = enterpriseHome.replace('/en/', '/ja/')

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

    test('no version redirects to latest version (japanese)', async () => {
      const res = await get('/ja/enterprise')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(japaneseEnterpriseHome)
    })

    test('hardcoded @latest redirects to latest version', async () => {
      const res = await get('/en/enterprise-server@latest')
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe(enterpriseHome)
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
    const japaneseEnterpriseAdmin = enterpriseAdmin.replace('/en/', '/ja/')

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
    const enterpriseUser = `/en/enterprise-server@${enterpriseServerReleases.latest}`
    const japaneseEnterpriseUser = enterpriseUser.replace('/en/', '/ja/')

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

    test('no version redirects to latest version (japanese)', async () => {
      const res = await get('/ja/enterprise/user/github')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(japaneseEnterpriseUser)
    })
  })

  describe('enterprise user article', () => {
    const userArticle = `/en/enterprise-server@${enterpriseServerReleases.latest}/get-started/quickstart/fork-a-repo`
    const japaneseUserArticle = userArticle.replace('/en/', '/ja/')

    test('no product redirects to GitHub.com product on the latest version', async () => {
      const res = await get(
        `/en/enterprise/${enterpriseServerReleases.latest}/user/articles/fork-a-repo`
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
        `/enterprise/${enterpriseServerReleases.latest}/user/articles/fork-a-repo`
      )
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe(userArticle)
    })

    test('no version redirects to latest version', async () => {
      const res = await get('/en/enterprise/articles/fork-a-repo')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(userArticle)
    })

    test('no version redirects to latest version (japanese)', async () => {
      const res = await get('/ja/enterprise/articles/fork-a-repo')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(japaneseUserArticle)
    })
  })

  describe('enterprise user article with frontmatter redirect', () => {
    const userArticle = `/en/enterprise-server@${enterpriseServerReleases.latest}/get-started/quickstart/fork-a-repo`
    const redirectFromPath = '/articles/fork-a-repo'
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
      expect(res.statusCode).toBe(302)
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
      expect(res.statusCode).toBe(302)
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

  // These tests exists because of issue #1960
  describe('rest reference redirects with default product', () => {
    test('rest subcategory with fpt in URL', async () => {
      for (const category of [
        'migrations',
        'actions',
        'activity',
        'apps',
        'billing',
        'checks',
        'codes-of-conduct',
        'code-scanning',
        'codespaces',
        'emojis',
        'gists',
        'git',
        'gitignore',
        'interactions',
        'issues',
        'licenses',
        'markdown',
        'meta',
        'orgs',
        'projects',
        'pulls',
        'rate-limit',
        'reactions',
        'repos',
        'scim',
        'search',
        'teams',
        'users',
      ]) {
        // Without language prefix
        {
          const res = await get(`/free-pro-team@latest/rest/reference/${category}`)
          expect(res.statusCode).toBe(302)
          expect(res.headers.location).toBe(`/en/rest/${category}`)
        }
        // With language prefix
        {
          const res = await get(`/en/free-pro-team@latest/rest/reference/${category}`)
          expect(res.statusCode).toBe(301)
          expect(res.headers.location).toBe(`/en/rest/${category}`)
        }
      }
    })
  })
})

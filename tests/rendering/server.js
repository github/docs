import lodash from 'lodash-es'
import enterpriseServerReleases from '../../lib/enterprise-server-releases.js'
import { get, getDOM, head, post } from '../helpers/e2etest.js'
import { describeViaActionsOnly } from '../helpers/conditional-runs.js'
import { loadPages } from '../../lib/page-data.js'
import CspParse from 'csp-parse'
import { productMap } from '../../lib/all-products.js'
import {
  SURROGATE_ENUMS,
  makeLanguageSurrogateKey,
} from '../../middleware/set-fastly-surrogate-key.js'
import { getPathWithoutVersion } from '../../lib/path-utils.js'
import { describe, jest } from '@jest/globals'

const AZURE_STORAGE_URL = 'githubdocs.azureedge.net'
const activeProducts = Object.values(productMap).filter(
  (product) => !product.wip && !product.hidden
)

jest.useFakeTimers({ legacyFakeTimers: true })

describe('server', () => {
  jest.setTimeout(60 * 1000)

  beforeAll(async () => {
    // The first page load takes a long time so let's get it out of the way in
    // advance to call out that problem specifically rather than misleadingly
    // attributing it to the first test
    const res = await get('/en')
    expect(res.statusCode).toBe(200)
  })

  test('supports HEAD requests', async () => {
    const res = await head('/en')
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-length']).toBe('0')
    expect(res.text).toBe('')
    // Because the HEAD requests can't be different no matter what's
    // in the request headers (Accept-Language or Cookies)
    // it's safe to let it cache. The only key is the URL.
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=\d+/)
  })

  test('renders the homepage', async () => {
    const res = await get('/en')
    expect(res.statusCode).toBe(200)
  })

  test('renders the homepage with links to expected products in both the sidebar and page body', async () => {
    const $ = await getDOM('/en')
    const sidebarItems = $('[data-testid=sidebar] li a').get()
    const sidebarTitles = sidebarItems.map((el) => $(el).text().trim())
    const sidebarHrefs = sidebarItems.map((el) => $(el).attr('href'))

    const productTitles = activeProducts.map((prod) => prod.name)
    const productHrefs = activeProducts.map((prod) =>
      prod.external ? prod.href : `/en${prod.href}`
    )

    const titlesInSidebarButNotProducts = lodash.difference(sidebarTitles, productTitles)
    const titlesInProductsButNotSidebar = lodash.difference(productTitles, sidebarTitles)

    const hrefsInSidebarButNotProducts = lodash.difference(sidebarHrefs, productHrefs)
    const hrefsInProductsButNotSidebar = lodash.difference(productHrefs, sidebarHrefs)

    expect(
      titlesInSidebarButNotProducts.length,
      `Found unexpected titles in sidebar: ${titlesInSidebarButNotProducts.join(', ')}`
    ).toBe(0)
    expect(
      titlesInProductsButNotSidebar.length,
      `Found titles missing from sidebar: ${titlesInProductsButNotSidebar.join(', ')}`
    ).toBe(0)
    expect(
      hrefsInSidebarButNotProducts.length,
      `Found unexpected hrefs in sidebar: ${hrefsInSidebarButNotProducts.join(', ')}`
    ).toBe(0)
    expect(
      hrefsInProductsButNotSidebar.length,
      `Found hrefs missing from sidebar: ${hrefsInProductsButNotSidebar.join(', ')}`
    ).toBe(0)
  })

  test('renders the Enterprise homepages with links to expected products in both the sidebar and page body', async () => {
    const enterpriseProducts = [
      `enterprise-server@${enterpriseServerReleases.latest}`,
      'enterprise-cloud@latest',
    ]

    for (const ep of enterpriseProducts) {
      const $ = await getDOM(`/en/${ep}`)
      const sidebarItems = $('[data-testid=sidebar] li a').get()
      const sidebarTitles = sidebarItems.map((el) => $(el).text().trim())
      const sidebarHrefs = sidebarItems.map((el) => $(el).attr('href'))
      const productItems = activeProducts.filter(
        (prod) => prod.external || prod.versions.includes(ep)
      )
      const productTitles = productItems.map((prod) => prod.name)
      const productHrefs = productItems.map((prod) =>
        prod.external ? prod.href : `/en/${ep}${getPathWithoutVersion(prod.href)}`
      )

      const titlesInProductsButNotSidebar = lodash.difference(productTitles, sidebarTitles)
      const hrefsInProductsButNotSidebar = lodash.difference(productHrefs, sidebarHrefs)

      expect(
        titlesInProductsButNotSidebar.length,
        `Found titles missing from sidebar: ${titlesInProductsButNotSidebar.join(', ')}`
      ).toBe(0)
      expect(
        hrefsInProductsButNotSidebar.length,
        `Found hrefs missing from sidebar: ${hrefsInProductsButNotSidebar.join(', ')}`
      ).toBe(0)
    }
  })

  test('sets Content Security Policy (CSP) headers', async () => {
    const res = await get('/en')
    expect(res.statusCode).toBe(200)
    expect('content-security-policy' in res.headers).toBe(true)

    const csp = new CspParse(res.headers['content-security-policy'])
    expect(csp.get('default-src')).toBe("'none'")

    expect(csp.get('font-src').includes("'self'")).toBe(true)
    expect(csp.get('font-src').includes(AZURE_STORAGE_URL)).toBe(true)

    expect(csp.get('connect-src').includes("'self'")).toBe(true)

    expect(csp.get('img-src').includes("'self'")).toBe(true)
    expect(csp.get('img-src').includes(AZURE_STORAGE_URL)).toBe(true)

    expect(csp.get('script-src').includes("'self'")).toBe(true)

    expect(csp.get('style-src').includes("'self'")).toBe(true)
    expect(csp.get('style-src').includes("'unsafe-inline'")).toBe(true)
  })

  test('sets Fastly cache control headers', async () => {
    const res = await get('/en')
    expect(res.statusCode).toBe(200)
    expect(res.headers['cache-control']).toMatch(/public, max-age=/)

    const surrogateKeySplit = res.headers['surrogate-key'].split(/\s/g)
    expect(surrogateKeySplit.includes(SURROGATE_ENUMS.DEFAULT)).toBeTruthy()
    expect(surrogateKeySplit.includes(makeLanguageSurrogateKey('en'))).toBeTruthy()
  })

  test('does not render duplicate <html> or <body> tags', async () => {
    const $ = await getDOM('/en')
    expect($('html').length).toBe(1)
    expect($('body').length).toBe(1)
  })

  test('renders a 404 page', async () => {
    const $ = await getDOM('/not-a-real-page', { allow404: true })
    expect($('h1').text()).toBe('Ooops!')
    expect($.text().includes("It looks like this page doesn't exist.")).toBe(true)
    expect(
      $.text().includes(
        'We track these errors automatically, but if the problem persists please feel free to contact us.'
      )
    ).toBe(true)
    expect($.res.statusCode).toBe(404)
  })

  // When using `got()` to send full end-to-end URLs, you can't use
  // URLs like in this test because got will
  // throw `RequestError: URI malformed`.
  // So for now, this test is skipped.
  test.skip('renders a 400 for invalid paths', async () => {
    const $ = await getDOM('/en/%7B%')
    expect($.res.statusCode).toBe(400)
  })

  test('renders a 500 page when errors are thrown', async () => {
    const $ = await getDOM('/_500', { allow500s: true })
    expect($('h1').text()).toBe('Ooops!')
    expect($.text().includes('It looks like something went wrong.')).toBe(true)
    expect(
      $.text().includes(
        'We track these errors automatically, but if the problem persists please feel free to contact us.'
      )
    ).toBe(true)
    expect($.res.statusCode).toBe(500)
  })

  test('returns a 400 when POST-ed invalid JSON', async () => {
    const res = await post('/', {
      body: 'not real JSON',
      headers: {
        'content-type': 'application/json',
      },
    })
    expect(res.statusCode).toBe(400)
  })

  // see issue 9678
  test('does not use cached intros in map topics', async () => {
    let $ = await getDOM(
      '/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-git-repository-using-the-command-line'
    )
    const articleIntro = $('[data-testid="lead"]').text()
    $ = await getDOM(
      '/en/enterprise/2.16/user/importing-your-projects-to-github/importing-source-code-to-github'
    )
    const mapTopicIntro = $('.map-topic').first().next().text()
    expect(articleIntro).not.toEqual(mapTopicIntro)
  })

  test('serves /categories.json for support team usage', async () => {
    const res = await get('/categories.json')
    expect(res.statusCode).toBe(200)

    // check for CORS header
    expect(res.headers['access-control-allow-origin']).toBe('*')

    // Check that it can be cached at the CDN
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)

    const categories = JSON.parse(res.text)
    expect(Array.isArray(categories)).toBe(true)
    expect(categories.length).toBeGreaterThan(1)
    categories.forEach((category) => {
      expect('name' in category).toBe(true)
      expect('published_articles' in category).toBe(true)
    })
  })

  test('renders liquid within liquid within liquid in body text', async () => {
    const $ = await getDOM('/en/github/administering-a-repository/enabling-required-status-checks')
    expect($('ol li').first().text().trim()).toBe(
      'On GitHub.com, navigate to the main page of the repository.'
    )
  })

  test('renders liquid within liquid within liquid in intros', async () => {
    const $ = await getDOM('/en/github/administering-a-repository/about-merge-methods-on-github')
    expect(
      $('[data-testid="lead"]').first().text().includes('merge their pull requests on GitHub')
    ).toBe(true)
  })

  test('renders product frontmatter callouts', async () => {
    const $ = await getDOM('/en/articles/about-branch-restrictions')
    const note = $('[data-testid=callout]').eq(0)
    expect(note).toBeTruthy()
  })

  test('renders liquid within liquid within product frontmatter callouts', async () => {
    const $ = await getDOM('/en/articles/about-branch-restrictions')
    const note = $('[data-testid=callout]').eq(0)
    expect(
      note
        .first()
        .text()
        .trim()
        .startsWith('Protected branches are available in public repositories with GitHub Free')
    ).toBe(true)
  })

  test('renders liquid within liquid within liquid', async () => {
    const $ = await getDOM('/en/articles/enabling-required-status-checks')
    expect($('ol li').first().text().trim()).toBe(
      'On GitHub.com, navigate to the main page of the repository.'
    )
  })

  test('displays links to categories on product TOCs', async () => {
    const $ = await getDOM('/en/authentication')
    expect($('a[href="/en/authentication/keeping-your-account-and-data-secure"]')).toHaveLength(1)
  })

  describe('English local links', () => {
    const latestEnterprisePath = `/en/enterprise-server@${enterpriseServerReleases.latest}`

    test('dotcom articles on dotcom have links that include "en"', async () => {
      const $ = await getDOM('/en/articles/set-up-git')
      expect($('a[href="/en/repositories/working-with-files/managing-files"]').length).toBe(1)
    })

    // Any links expressed in Markdown as '.../enterprise-server@latest/...'
    // should become '.../enterprise-server@<VERSION>/...' when rendered out.
    test('enterprise-server@latest links get rewritten to include the latest GHE version', async () => {
      const $ = await getDOM(
        '/en/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server'
      )
      expect(
        $(`a[href="${latestEnterprisePath}/billing/managing-your-license-for-github-enterprise"]`)
          .length
      ).toBe(1)
    })

    test('dotcom articles on GHE have Enterprise user links', async () => {
      const $ = await getDOM(
        `${latestEnterprisePath}/github/getting-started-with-github/set-up-git`
      )
      expect(
        $(`a[href="${latestEnterprisePath}/repositories/working-with-files/managing-files"]`).length
      ).toBe(1)
    })

    test('dotcom categories on GHE have Enterprise user links', async () => {
      const $ = await getDOM(`${latestEnterprisePath}/get-started/writing-on-github`)
      expect(
        $(
          `ul.list-style-circle li a[href="${latestEnterprisePath}/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github"]`
        ).length
      ).toBe(1)
    })

    test('dotcom-only links on GHE are dotcom-only', async () => {
      const $ = await getDOM(
        `${latestEnterprisePath}/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud`
      )
      expect(
        $(
          'a[href="/en/site-policy/github-terms/github-terms-for-additional-products-and-features#connect"]'
        ).length
      ).toBe(1)
    })

    test('desktop links on GHE are dotcom-only', async () => {
      const $ = await getDOM(
        `${latestEnterprisePath}/github/getting-started-with-github/set-up-git`
      )
      expect($('a[href="/en/desktop/installing-and-configuring-github-desktop"]').length).toBe(1)
    })

    test('admin articles that link to non-admin articles have Enterprise user links', async () => {
      const $ = await getDOM(
        `${latestEnterprisePath}/admin/installation/configuring-the-default-visibility-of-new-repositories-on-your-appliance`
      )
      expect(
        $(
          `a[href="${latestEnterprisePath}/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility"]`
        ).length
      ).toBeGreaterThan(0)
    })

    test('admin articles that link to Enterprise user articles have Enterprise user links', async () => {
      const $ = await getDOM(
        `${latestEnterprisePath}/admin/user-management/customizing-user-messages-for-your-enterprise`
      )
      expect($('a[href*="about-writing-and-formatting-on-github"]').length).toBe(1)
    })

    test('articles that link to external links that contain /articles/ are not rewritten', async () => {
      const $ = await getDOM(
        `${latestEnterprisePath}/admin/installation/upgrading-github-enterprise-server`
      )
      expect(
        $('a[href="https://docs.microsoft.com/azure/backup/backup-azure-vms-first-look-arm"]')
          .length
      ).toBe(1)
    })
  })

  describe('article versions', () => {
    test('includes links to all versions of each article', async () => {
      const articlePath =
        'get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-git-repository-using-the-command-line'
      const $ = await getDOM(
        `/en/enterprise-server@${enterpriseServerReleases.latest}/${articlePath}`
      )
      // 2.13 predates this feature, so it should be excluded:
      expect(
        $(`[data-testid=version-picker] a[href="/en/enterprise/2.13/user/${articlePath}"]`).length
      ).toBe(0)
    })

    test('is not displayed if dotcom article has only one version', async () => {
      const $ = await getDOM('/en/articles/signing-up-for-a-new-github-account')
      expect($('.article-versions').length).toBe(0)
    })

    test('is not displayed if ghec article has only one version', async () => {
      const $ = await getDOM(
        '/en/enterprise-cloud@latest/admin/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users',
        { allow404: true }
      )
      expect($.res.statusCode).toBe(404)
      expect($('.article-versions').length).toBe(0)
    })
  })

  describeViaActionsOnly('Early Access articles', () => {
    test('have noindex meta tags', async () => {
      const allPages = await loadPages()
      // This is what the earlyAccessContext middleware does to get a
      // list of early-access pages for that TOC it displays when
      // viewing /en/early-access in development.
      // Here we're using it to get a least 1 page we can end-to-end
      // test to look at it's meta tags.
      const hiddenPages = allPages.filter(
        (page) =>
          page.languageCode === 'en' &&
          page.hidden &&
          page.relativePath.startsWith('early-access') &&
          !page.relativePath.endsWith('index.md')
      )
      for (const { href } of hiddenPages[0].permalinks) {
        const $ = await getDOM(href)
        expect($('meta[content="noindex"]').length).toBe(1)
      }
    })
  })

  describe('redirects', () => {
    test('redirects old articles to their English URL', async () => {
      const res = await get('/articles/deleting-a-team', { followRedirects: false })
      expect(res.statusCode).toBe(302)
      expect(res.headers['set-cookie']).toBeUndefined()
      // language specific caching
      expect(res.headers['cache-control']).toContain('public')
      expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
      expect(res.headers.vary).toContain('accept-language')
      expect(res.headers.vary).toContain('x-user-language')
    })

    test('redirects old articles to their slugified URL', async () => {
      const res = await get('/articles/about-github-s-ip-addresses')
      expect(res.statusCode).toBe(302)
      expect(res.text).toBe(
        'Found. Redirecting to /en/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses'
      )
    })

    test('redirects / to /en when no language preference is specified', async () => {
      const res = await get('/')
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe('/en')
      expect(res.headers['set-cookie']).toBeUndefined()
      // language specific caching
      expect(res.headers['cache-control']).toContain('public')
      expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
      expect(res.headers.vary).toContain('accept-language')
      expect(res.headers.vary).toContain('x-user-language')
    })

    // This test exists because in a previous life, our NextJS used to
    // 500 if the 'Accept-Language' header was malformed.
    // We *used* have a custom middleware to cope with this and force a
    // fallback redirect.
    // See internal issue 19909
    test('redirects /en if Accept-Language header is malformed', async () => {
      const res = await get('/', {
        headers: {
          'accept-language': 'ldfir;',
        },
        followRedirects: false,
      })

      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe('/en')
      expect(res.headers['set-cookie']).toBeUndefined()
      // language specific caching
      expect(res.headers['cache-control']).toContain('public')
      expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
      expect(res.headers.vary).toContain('accept-language')
      expect(res.headers.vary).toContain('x-user-language')
    })

    test('redirects / to /en when unsupported language preference is specified', async () => {
      const res = await get('/', {
        headers: {
          // Tagalog: https://www.loc.gov/standards/iso639-2/php/langcodes_name.php?iso_639_1=tl
          'accept-language': 'tl',
        },
        followRedirects: false,
      })
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe('/en')
      expect(res.headers['set-cookie']).toBeUndefined()
      // language specific caching
      expect(res.headers['cache-control']).toContain('public')
      expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
      expect(res.headers.vary).toContain('accept-language')
      expect(res.headers.vary).toContain('x-user-language')
    })

    test('adds English prefix to old article URLs', async () => {
      const res = await get('/articles/deleting-a-team')
      expect(res.statusCode).toBe(302)
      expect(res.headers.location.startsWith('/en/')).toBe(true)
      expect(res.headers['set-cookie']).toBeUndefined()
      // language specific caching
      expect(res.headers['cache-control']).toContain('public')
      expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
      expect(res.headers.vary).toContain('accept-language')
      expect(res.headers.vary).toContain('x-user-language')
    })

    test('redirects that not only injects /en/ should have cache-control', async () => {
      const res = await get('/en/articles/deleting-a-team')
      expect(res.statusCode).toBe(301)
      expect(res.headers['cache-control']).toContain('public')
      expect(res.headers['cache-control']).toMatch(/max-age=\d+/)
    })
  })

  describe('categories and map topics', () => {
    test('adds links to map topics on a category homepage', async () => {
      const $ = await getDOM('/en/get-started/writing-on-github')
      expect(
        $(
          'a[href="/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github"]'
        ).length
      ).toBe(1)
      expect($('a[href="#managing-user-account-settings"]').length).toBe(0)
    })

    test('category page renders with TOC', async () => {
      const $ = await getDOM('/en/get-started/writing-on-github')
      expect($('[data-testid=table-of-contents] ul li a').length).toBeGreaterThan(5)
    })

    test('map topic renders with links to articles', async () => {
      const $ = await getDOM(
        '/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github'
      )
      expect(
        $(
          'li h2 a[href="/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github"]'
        ).length
      ).toBe(1)
    })

    test('map topic renders with one intro for every h2', async () => {
      const $ = await getDOM('/en/get-started/writing-on-github/working-with-advanced-formatting')
      const $links = $('[data-testid=expanded-item]')
      expect($links.length).toBeGreaterThan(3)
    })

    test('map topic intros are parsed', async () => {
      const $ = await getDOM('/en/get-started/writing-on-github/working-with-advanced-formatting')
      const $parent = $('[data-testid=expanded-item] a[href*="organizing-information-with-tables"]')
        .parent()
        .parent()
      const $intro = $('p', $parent)
      expect($intro.length).toBe(1)
      expect($intro.html()).toContain(
        'You can build tables to organize information in comments, issues, pull requests, and wikis.'
      )
    })
  })
})

describe('GitHub Enterprise URLs', () => {
  test('renders the GHE user docs homepage', async () => {
    const $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.latest}/user/get-started`)
    expect(
      $(
        `a[href="/en/enterprise-server@${enterpriseServerReleases.latest}/get-started/writing-on-github"]`
      ).length
    ).toBe(1)
  })

  test('renders the Enterprise Server homepage with correct links', async () => {
    const $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.latest}`)
    expect(
      $(
        `section.container-xl a[href="/en/enterprise-server@${enterpriseServerReleases.latest}/admin"]`
      ).length
    ).toBe(1)
    expect(
      $(
        `section.container-xl a[href="/en/enterprise-server@${enterpriseServerReleases.latest}/get-started"]`
      ).length
    ).toBe(1)
  })

  test('renders the Enterprise Admin category homepage', async () => {
    const adminPath = `/en/enterprise-server@${enterpriseServerReleases.latest}/admin`
    const $ = await getDOM(adminPath)
    expect($(`h2 ~ a[href="${adminPath}/guides"]`).length).toBe(1)
    expect($('h2 a[href="#all-docs"]').length).toBe(1)
  })

  test('renders an Enterprise Admin category with correct links', async () => {
    const installationCategoryHome = `/en/enterprise-server@${enterpriseServerReleases.latest}/admin/installation`
    const $ = await getDOM(installationCategoryHome)
    expect($(`a[href^="${installationCategoryHome}/"]`).length).toBeGreaterThan(1)
  })

  test('renders an Enterprise Admin category article', async () => {
    const $ = await getDOM(
      `/en/enterprise/${enterpriseServerReleases.latest}/admin/overview/about-github-enterprise-server`
    )
    expect($.text()).toContain('platform that you can host in a private environment')
  })

  test('renders an Enterprise Admin map topic', async () => {
    const $ = await getDOM(
      `/en/enterprise/${enterpriseServerReleases.latest}/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources`
    )
    expect(
      $(
        `a[href^="/en/enterprise-server@${enterpriseServerReleases.latest}/admin/enterprise-management/"]`
      ).length
    ).toBeGreaterThan(1)
  })

  test('renders an Enterprise Admin category article within a map topic', async () => {
    const $ = await getDOM(
      `/en/enterprise/${enterpriseServerReleases.latest}/admin/installation/upgrade-requirements`
    )
    expect($.text()).toContain('Before upgrading GitHub Enterprise')
  })
})

describe('GitHub Desktop URLs', () => {
  test('renders the GitHub Desktop homepage with correct links', async () => {
    const $ = await getDOM('/en/desktop')
    expect($('a[href^="/en/desktop/"]').length).toBeGreaterThan(1)
  })

  test('renders a Desktop category with expected links', async () => {
    const $ = await getDOM('/en/desktop/installing-and-configuring-github-desktop')
    expect(
      $('a[href^="/en/desktop/installing-and-configuring-github-desktop/"]').length
    ).toBeGreaterThan(1)
  })

  test('renders a Desktop map topic', async () => {
    const $ = await getDOM(
      '/en/desktop/installing-and-configuring-github-desktop/installing-and-authenticating-to-github-desktop'
    )
    expect(
      $('a[href^="/en/desktop/installing-and-configuring-github-desktop/"]').length
    ).toBeGreaterThan(1)
  })

  test('renders a Desktop article within a map topic', async () => {
    const res = await get(
      '/en/desktop/installing-and-configuring-github-desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop'
    )
    expect(res.statusCode).toBe(200)
  })
})

describe('search', () => {
  function findDupesInArray(arr) {
    return lodash.filter(arr, (val, i, iteratee) => lodash.includes(iteratee, val, i + 1))
  }
  // SKIPPING: Can we have duplicate IDs? search-input-container and search-results-container are duplicated for mobile and desktop
  // Docs Engineering issue: 969
  it.skip('articles pages do not render any elements with duplicate IDs', async () => {
    const $ = await getDOM('/en/articles/accessing-an-organization')
    const ids = $('body')
      .find('[id]')
      .map((i, el) => $(el).attr('id'))
      .get()
      .sort()
    const dupes = findDupesInArray(ids)
    const message = `Oops found duplicate DOM id(s): ${dupes.join(', ')}`
    expect(ids.length).toBeGreaterThan(0)
    expect(dupes.length === 0, message).toBe(true)
  })
})

describe('?json query param for context debugging', () => {
  it('uses query param value as a key', async () => {
    const res = await get('/en?json=page')
    expect(res.statusCode).toBe(200)
    const page = JSON.parse(res.text)
    expect(typeof page.title).toBe('string')
  })

  it('returns a helpful message with top-level keys if query param has no value', async () => {
    const res = await get('/en?json')
    expect(res.statusCode).toBe(200)
    const context = JSON.parse(res.text)

    expect(context.message.includes('context object is too big to display')).toBe(true)
    expect(Array.isArray(context.keys)).toBe(true)
    expect(context.keys.includes('page')).toBe(true)
    expect(context.keys.includes('pages')).toBe(true)
    expect(context.keys.includes('redirects')).toBe(true)
  })
})

describe('static routes', () => {
  it('serves content from the /assets directory', async () => {
    const res = await get('/assets/images/site/be-social.gif')
    expect(res.statusCode).toBe(200)
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=\d+/)
    // Because static assets shouldn't be setting a cookie.
    expect(res.headers['set-cookie']).toBeUndefined()
    // The "Surrogate-Key" header is set so we can do smart invalidation
    // in the Fastly CDN. This needs to be available for static assets too.
    expect(res.headers['surrogate-key']).toBeTruthy()
    expect(res.headers.etag).toBeUndefined()
    expect(res.headers['last-modified']).toBeTruthy()
  })

  it('rewrites /assets requests from a cache-busting prefix', async () => {
    // The rewrite-asset-urls.js Markdown plugin will do this to img tags.
    const res = await get('/assets/cb-123456/images/site/be-social.gif')
    expect(res.statusCode).toBe(200)
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=\d+/)
    expect(res.headers['surrogate-key']).toBe(SURROGATE_ENUMS.MANUAL)
  })

  it('no manual surrogate key for /assets requests without caching-busting prefix', async () => {
    const res = await get('/assets/images/site/be-social.gif')
    expect(res.statusCode).toBe(200)
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=\d+/)

    const surrogateKeySplit = res.headers['surrogate-key'].split(/\s/g)
    expect(surrogateKeySplit.includes(SURROGATE_ENUMS.DEFAULT)).toBeTruthy()
    expect(surrogateKeySplit.includes(makeLanguageSurrogateKey())).toBeTruthy()
  })

  it('serves schema files from the /data/graphql directory at /public', async () => {
    const res = await get('/public/schema.docs.graphql')
    expect(res.statusCode).toBe(200)
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=\d+/)
    // Because static assets shouldn't be setting a cookie.
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers.etag).toBeUndefined()
    expect(res.headers['last-modified']).toBeTruthy()

    expect(
      (await get(`/public/ghes-${enterpriseServerReleases.latest}/schema.docs-enterprise.graphql`))
        .statusCode
    ).toBe(200)
    expect(
      (
        await get(
          `/public/ghes-${enterpriseServerReleases.oldestSupported}/schema.docs-enterprise.graphql`
        )
      ).statusCode
    ).toBe(200)
    expect((await get('/public/ghae/schema.docs-ghae.graphql')).statusCode).toBe(200)
  })

  it('does not serve repo contents that live outside the /assets directory', async () => {
    expect((await get('/package.json', { followRedirects: true })).statusCode).toBe(404)
    expect((await get('/README.md', { followRedirects: true })).statusCode).toBe(404)
    expect((await get('/server.js', { followRedirects: true })).statusCode).toBe(404)
  })
})

describe('index pages', () => {
  const nonEnterpriseOnlyPath =
    '/en/get-started/importing-your-projects-to-github/importing-source-code-to-github'

  test.skip('includes dotcom-only links in dotcom TOC', async () => {
    const $ = await getDOM('/en/get-started/importing-your-projects-to-github')
    expect($(`a[href="${nonEnterpriseOnlyPath}"]`).length).toBe(1)
  })

  test.skip('excludes dotcom-only from GHE TOC', async () => {
    const $ = await getDOM(
      `/en/enterprise/${enterpriseServerReleases.latest}/user/get-started/importing-your-projects-to-github`
    )
    expect($(`a[href="${nonEnterpriseOnlyPath}"]`).length).toBe(0)
  })

  test('includes correctly versioned links in GHE', async () => {
    const installationLatest = `/en/enterprise-server@${enterpriseServerReleases.latest}/admin/installation`
    const $ = await getDOM(installationLatest)
    expect($(`a[href^="${installationLatest}/"]`).length).toBeGreaterThan(0)
  })
})

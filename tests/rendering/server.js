import lodash from 'lodash-es'
import enterpriseServerReleases from '../../lib/enterprise-server-releases.js'
import { get, getDOM, head, post } from '../helpers/supertest.js'
import { describeViaActionsOnly } from '../helpers/conditional-runs.js'
import { loadPages } from '../../lib/page-data.js'
import CspParse from 'csp-parse'
import { productMap } from '../../lib/all-products.js'
import { jest } from '@jest/globals'

const AZURE_STORAGE_URL = 'githubdocs.azureedge.net'
const activeProducts = Object.values(productMap).filter(
  (product) => !product.wip && !product.hidden
)

jest.useFakeTimers()

describe('server', () => {
  jest.setTimeout(60 * 1000)

  beforeAll(async () => {
    // The first page load takes a long time so let's get it out of the way in
    // advance to call out that problem specifically rather than misleadingly
    // attributing it to the first test
    await get('/en')
  })

  test('supports HEAD requests', async () => {
    const res = await head('/en')
    expect(res.statusCode).toBe(200)
    expect(res.headers).not.toHaveProperty('content-length')
    expect(res.text).toBeUndefined()
  })

  test('renders the homepage', async () => {
    const res = await get('/en')
    expect(res.statusCode).toBe(200)
  })

  test('renders the homepage with links to exptected products in both the sidebar and page body', async () => {
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

  test('renders the Enterprise homepage with links to exptected products in both the sidebar and page body', async () => {
    const $ = await getDOM(`/en/enterprise-server@${enterpriseServerReleases.latest}`)
    const sidebarItems = $('[data-testid=sidebar] li a').get()
    const sidebarTitles = sidebarItems.map((el) => $(el).text().trim())
    const sidebarHrefs = sidebarItems.map((el) => $(el).attr('href'))

    const ghesProducts = activeProducts.filter(
      (prod) =>
        (prod.versions &&
          prod.versions.includes(`enterprise-server@${enterpriseServerReleases.latest}`)) ||
        prod.external
    )

    const ghesProductTitles = ghesProducts.map((prod) => prod.name)
    const ghesProductHrefs = ghesProducts.map((prod) =>
      prod.external
        ? prod.href
        : `/en${
            prod.href.includes('enterprise-server')
              ? prod.href
              : `/enterprise-server@${enterpriseServerReleases.latest}${prod.href}`
          }`
    )

    const firstSidebarTitle = sidebarTitles.shift()
    const firstSidebarHref = sidebarHrefs.shift()

    const titlesInSidebarButNotProducts = lodash.difference(sidebarTitles, ghesProductTitles)
    const titlesInProductsButNotSidebar = lodash.difference(ghesProductTitles, sidebarTitles)

    const hrefsInSidebarButNotProducts = lodash.difference(sidebarHrefs, ghesProductHrefs)
    const hrefsInProductsButNotSidebar = lodash.difference(ghesProductHrefs, sidebarHrefs)

    expect(firstSidebarTitle).toBe('All products')
    expect(firstSidebarHref).toBe('/en')
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

  test('uses gzip compression', async () => {
    const res = await get('/en')
    expect(res.headers['content-encoding']).toBe('gzip')
    expect(res.headers['transfer-encoding']).toBe('chunked')
  })

  test('sets Content Security Policy (CSP) headers', async () => {
    const res = await get('/en')
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

  test('sets Fastly cache control headers to bypass pages', async () => {
    const res = await get('/en')
    expect(res.headers['cache-control']).toBe('private, no-store')
    expect(res.headers['surrogate-control']).toBe('private, no-store')
    expect(res.headers['surrogate-key']).toBe('all-the-things')
  })

  test('does not render duplicate <html> or <body> tags', async () => {
    const $ = await getDOM('/en')
    expect($('html').length).toBe(1)
    expect($('body').length).toBe(1)
  })

  test('sets `lang` attribute on <html> attribute', async () => {
    expect((await getDOM('/en'))('html').attr('lang')).toBe('en')
    expect((await getDOM('/en/articles/set-up-git'))('html').attr('lang')).toBe('en')
    expect((await getDOM('/ja'))('html').attr('lang')).toBe('ja')
  })

  test('renders a 404 page', async () => {
    const $ = await getDOM('/not-a-real-page')
    expect($('h1').text()).toBe('Ooops!')
    expect($.text().includes("It looks like this page doesn't exist.")).toBe(true)
    expect(
      $.text().includes(
        'We track these errors automatically, but if the problem persists please feel free to contact us.'
      )
    ).toBe(true)
    expect($.res.statusCode).toBe(404)
  })

  test('renders a 400 for invalid paths', async () => {
    const $ = await getDOM('/en/%7B%')
    expect($.res.statusCode).toBe(400)
  })

  // see issue 12427
  test('renders a 404 for leading slashes', async () => {
    let $ = await getDOM('//foo.com/enterprise')
    expect($('h1').text()).toBe('Ooops!')
    expect($.res.statusCode).toBe(404)

    $ = await getDOM('///foo.com/enterprise')
    expect($('h1').text()).toBe('Ooops!')
    expect($.res.statusCode).toBe(404)
  })

  test('renders a 500 page when errors are thrown', async () => {
    const $ = await getDOM('/_500')
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
    const res = await post('/').send('not real JSON').set('Content-Type', 'application/json')
    expect(res.statusCode).toBe(400)
  })

  test('converts Markdown in intros', async () => {
    // example from markdown source in intro:
    // The `git rebase` command
    const $ = await getDOM('/en/articles/about-git-rebase')
    expect($.html()).toContain('The <code>git rebase</code> command')
  })

  test('injects site variables into rendered intros', async () => {
    // example from markdown source in intro:
    // You can follow people on {{ site.data.variables.product.product_name }}
    const $ = await getDOM('/en/github/getting-started-with-github/following-people')
    expect($.text()).toContain('You can follow people on GitHub')
  })

  test('injects site variables into rendered permissions statements frontmatter', async () => {
    // markdown source: {% data variables.product.prodname_pages %} site
    const $ = await getDOM(
      '/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site'
    )
    expect($('div.permissions-statement').text()).toContain('GitHub Pages site')
  })

  // see issue 9678
  test('does not use cached intros in map topics', async () => {
    let $ = await getDOM(
      '/en/github/importing-your-projects-to-github/importing-a-git-repository-using-the-command-line'
    )
    const articleIntro = $('[data-testid="lead"]').text()
    $ = await getDOM(
      '/en/enterprise/2.16/user/importing-your-projects-to-github/importing-source-code-to-github'
    )
    const mapTopicIntro = $('.map-topic').first().next().text()
    expect(articleIntro).not.toEqual(mapTopicIntro)
  })

  test('injects site variables into rendered pages', async () => {
    // example from markdown source in page body:
    // {{ site.data.variables.product.product_name }} may recommend
    const $ = await getDOM('/en/github/getting-started-with-github/following-people')
    expect($.text()).toContain('GitHub may recommend')
  })

  test('serves /categories.json for support team usage', async () => {
    const res = await get('/categories.json')

    // check for CORS header
    expect(res.headers['access-control-allow-origin']).toBe('*')

    const categories = JSON.parse(res.text)
    expect(Array.isArray(categories)).toBe(true)
    expect(categories.length).toBeGreaterThan(1)
    categories.forEach((category) => {
      expect('name' in category).toBe(true)
      expect('published_articles' in category).toBe(true)
    })
  })

  test('renders Markdown links that have Liquid hrefs', async () => {
    // example from markdown source:
    // 1. Go to {{ site.data.variables.product.product_name }}'s [Pricing]({{ site.data.variables.dotcom_billing.plans_url }}) page.
    const $ = await getDOM(
      '/en/github/getting-started-with-github/signing-up-for-a-new-github-account'
    )
    expect($.text()).toContain("Go to GitHub's Pricing page.")
    expect($('a[href="https://github.com/pricing"]').first().text()).toBe('Pricing')
  })

  test('renders liquid within liquid within liquid in body text', async () => {
    const $ = await getDOM('/en/github/administering-a-repository/enabling-required-status-checks')
    expect($('ol li').first().text().trim()).toBe(
      'On GitHub, navigate to the main page of the repository.'
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

  test('handles whitespace control in liquid tags', async () => {
    // example from markdown source of index:
    // Liquid tags with {%- in lists should not result in newlines
    // that convert to <p>s in <li>s
    const $ = await getDOM('/')
    expect($('li > p').length).toBe(0)
  })

  test('renders liquid within liquid within liquid', async () => {
    const $ = await getDOM('/en/articles/enabling-required-status-checks')
    expect($('ol li').first().text().trim()).toBe(
      'On GitHub, navigate to the main page of the repository.'
    )
  })

  test('preserves liquid statements with liquid raw tags in page output', async () => {
    const $ = await getDOM(
      '/en/pages/setting-up-a-github-pages-site-with-jekyll/troubleshooting-jekyll-build-errors-for-github-pages-sites'
    )
    expect($.text().includes('{{ page.title }}')).toBe(true)
  })

  test('displays links to categories on product TOCs', async () => {
    const $ = await getDOM('/en/github')
    expect($('a[href="/en/github/authenticating-to-github"]')).toHaveLength(1)
  })

  describe('autogenerated mini TOCs', () => {
    // TODO disable the mini TOC tests when we replace it with sticky TOC header
    test('renders mini TOC in articles with more than one heading', async () => {
      const $ = await getDOM('/en/github/getting-started-with-github/githubs-products')
      expect($('h2#in-this-article').length).toBe(1)
      expect($('h2#in-this-article + ul li a').length).toBeGreaterThan(1)
    })

    test('renders mini TOC in articles that includes h4s when specified by frontmatter', async () => {
      const $ = await getDOM(
        '/en/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account'
      )
      expect($('h2#in-this-article').length).toBe(1)
      expect($('h2#in-this-article + ul li.ml-0').length).toBeGreaterThan(0) // non-indented items
      expect($('h2#in-this-article + ul li.ml-3').length).toBeGreaterThan(0) // indented items
    })

    test('does not render mini TOC in articles with only one heading', async () => {
      const $ = await getDOM(
        '/en/github/visualizing-repository-data-with-graphs/about-repository-graphs'
      )
      expect($('h2#in-this-article').length).toBe(0)
    })

    test('does not render mini TOC in articles with no headings', async () => {
      const $ = await getDOM('/en/github/authenticating-to-github/reviewing-your-deploy-keys')
      expect($('h2#in-this-article').length).toBe(0)
    })

    test('does not render mini TOC in non-articles', async () => {
      const $ = await getDOM('/github/getting-started-with-github')
      expect($('h2#in-this-article').length).toBe(0)
    })

    test('renders mini TOC with correct links when headings contain markup', async () => {
      const $ = await getDOM(
        '/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates'
      )
      expect($('h2#in-this-article + ul li a[href="#package-ecosystem"]').length).toBe(1)
    })

    test('renders mini TOC with correct links when headings contain markup in localized content', async () => {
      const $ = await getDOM(
        '/ja/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates'
      )
      expect($('h2#in-this-article + ul li a[href="#package-ecosystem"]').length).toBe(1)
    })
  })

  describe('image asset paths', () => {
    const localImageBasePath = '/assets/images'
    const legacyImageBasePath = '/assets/enterprise'
    const latestEnterprisePath = `/en/enterprise/${enterpriseServerReleases.latest}`
    const oldestEnterprisePath = `/en/enterprise/${enterpriseServerReleases.oldestSupported}`

    test('github articles on dotcom have images that point to local assets dir', async () => {
      const $ = await getDOM(
        '/en/github/authenticating-to-github/configuring-two-factor-authentication'
      )
      expect($('img').first().attr('src').startsWith(localImageBasePath)).toBe(true)
    })

    test('github articles on GHE have images that point to local assets dir', async () => {
      const $ = await getDOM(
        `${latestEnterprisePath}/user/github/authenticating-to-github/configuring-two-factor-authentication`
      )
      const imageSrc = $('img').first().attr('src')
      expect(
        imageSrc.startsWith(localImageBasePath) || imageSrc.startsWith(legacyImageBasePath)
      ).toBe(true)
    })

    test('admin articles on latest version of GHE have images that point to local assets dir', async () => {
      const $ = await getDOM(
        `${latestEnterprisePath}/admin/user-management/using-built-in-authentication`
      )
      const imageSrc = $('img').first().attr('src')
      expect(
        imageSrc.startsWith(localImageBasePath) || imageSrc.startsWith(legacyImageBasePath)
      ).toBe(true)
    })

    test('admin articles on older GHE versions have images that point to local assets dir', async () => {
      const $ = await getDOM(
        `${oldestEnterprisePath}/admin/user-management/using-built-in-authentication`
      )
      const imageSrc = $('img').first().attr('src')
      expect(
        imageSrc.startsWith(localImageBasePath) || imageSrc.startsWith(legacyImageBasePath)
      ).toBe(true)
    })

    test('links that point to /assets are not rewritten with a language code', async () => {
      const $ = await getDOM('/en/github/site-policy/github-privacy-statement')
      expect($('#french').next().children('a').attr('href').startsWith(localImageBasePath)).toBe(
        true
      )
    })

    test('github articles on GHAE have images that point to local assets dir', async () => {
      const $ = await getDOM(
        '/en/github-ae@latest/github/administering-a-repository/changing-the-default-branch'
      )
      const imageSrc = $('img').first().attr('src')
      expect(
        imageSrc.startsWith(localImageBasePath) || imageSrc.startsWith(legacyImageBasePath)
      ).toBe(true)
    })

    test('admin articles on GHAE have images that point to local assets dir', async () => {
      const $ = await getDOM('/en/github-ae@latest/admin/user-management/managing-dormant-users')
      expect($('img').first().attr('src').startsWith(localImageBasePath)).toBe(true)
    })
  })

  describe('English local links', () => {
    const latestEnterprisePath = `/en/enterprise-server@${enterpriseServerReleases.latest}`

    test('dotcom articles on dotcom have links that include "en"', async () => {
      const $ = await getDOM('/en/articles/set-up-git')
      expect($('a[href="/en/articles/managing-files-on-github"]').length).toBe(1)
    })

    test('dotcom articles on dotcom have Enterprise Admin links with latest GHE version', async () => {
      const $ = await getDOM('/en/articles/setting-up-a-trial-of-github-enterprise-server')
      expect(
        $(
          `a[href="${latestEnterprisePath}/admin/installation/setting-up-a-github-enterprise-server-instance"]`
        ).length
      ).toBe(2)
    })

    test('dotcom articles on GHE have Enterprise user links', async () => {
      const $ = await getDOM(
        `${latestEnterprisePath}/github/getting-started-with-github/set-up-git`
      )
      expect($(`a[href="${latestEnterprisePath}/articles/managing-files-on-github"]`).length).toBe(
        1
      )
    })

    test('dotcom categories on GHE have Enterprise user links', async () => {
      const $ = await getDOM(`${latestEnterprisePath}/github/managing-large-files`)
      expect(
        $(
          `ul.list-style-circle li a[href="${latestEnterprisePath}/github/managing-large-files/working-with-large-files/conditions-for-large-files"]`
        ).length
      ).toBe(1)
    })

    test('dotcom-only links on GHE are dotcom-only', async () => {
      const $ = await getDOM(
        `${latestEnterprisePath}/github/setting-up-and-managing-your-github-profile/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile`
      )
      expect($('a[href="/en/articles/github-privacy-statement"]').length).toBe(1)
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
          `a[href="${latestEnterprisePath}/github/creating-cloning-and-archiving-repositories/about-repository-visibility"]`
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
        'github/importing-your-projects-to-github/importing-source-code-to-github/importing-a-git-repository-using-the-command-line'
      const $ = await getDOM(
        `/en/enterprise-server@${enterpriseServerReleases.latest}/${articlePath}`
      )
      expect(
        $(
          `[data-testid=article-version-picker] a[href="/en/enterprise-server@${enterpriseServerReleases.latest}/${articlePath}"]`
        ).length
      ).toBe(2)
      // 2.13 predates this feature, so it should be excluded:
      expect(
        $(`[data-testid=article-version-picker] a[href="/en/enterprise/2.13/user/${articlePath}"]`)
          .length
      ).toBe(0)
    })

    test('is not displayed if article has only one version', async () => {
      const $ = await getDOM('/en/articles/signing-up-for-a-new-github-account')
      expect($('.article-versions').length).toBe(0)
    })
  })

  describeViaActionsOnly('Early Access articles', () => {
    let hiddenPageHrefs, hiddenPages

    beforeAll(async () => {
      const $ = await getDOM('/early-access')
      hiddenPageHrefs = $('#article-contents ul > li > a')
        .map((i, el) => $(el).attr('href'))
        .get()

      const allPages = await loadPages()
      hiddenPages = allPages.filter((page) => page.languageCode === 'en' && page.hidden)
    })

    test('exist in the set of English pages', async () => {
      expect(hiddenPages.length).toBeGreaterThan(0)
    })

    test('are listed at /early-access', async () => {
      expect(hiddenPageHrefs.length).toBeGreaterThan(0)
    })

    test('are not listed at /early-access in production', async () => {
      const oldNodeEnv = process.env.NODE_ENV
      process.env.NODE_ENV = 'production'
      const res = await get('/early-access', { followRedirects: true })
      process.env.NODE_ENV = oldNodeEnv
      expect(res.statusCode).toBe(404)
    })

    test('have noindex meta tags', async () => {
      const $ = await getDOM(hiddenPageHrefs[0])
      expect($('meta[content="noindex"]').length).toBe(1)
    })

    test('public articles do not have noindex meta tags', async () => {
      const $ = await getDOM('/en/articles/set-up-git')
      expect($('meta[content="noindex"]').length).toBe(0)
    })
  })

  describe('redirects', () => {
    test('redirects old articles to their English URL', async () => {
      const res = await get('/articles/deleting-a-team')
      expect(res.statusCode).toBe(301)
    })

    test('redirects old articles to their slugified URL', async () => {
      const res = await get('/articles/about-github-s-ip-addresses')
      expect(res.text).toBe(
        'Moved Permanently. Redirecting to /en/github/authenticating-to-github/keeping-your-account-and-data-secure/about-githubs-ip-addresses'
      )
    })

    test('redirects / to /en', async () => {
      const res = await get('/')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe('/en')
    })

    test('adds English prefix to old article URLs', async () => {
      const res = await get('/articles/deleting-a-team')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location.startsWith('/en/')).toBe(true)
    })

    test('redirects Desktop Classic paths to desktop.github.com', async () => {
      const res = await get('/desktop-classic')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe('https://desktop.github.com')
    })

    // this oneoff redirect is temporarily disabled because it introduces too much complexity
    // we can reenable it down the road if needed
    test.skip('redirects versioned category page', async () => {
      const res = await get('/en/github/receiving-notifications-about-activity-on-github')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(
        '/en/github/managing-subscriptions-and-notifications-on-github'
      )
    })
  })

  describe('categories and map topics', () => {
    test('adds links to categories on the dotcom homepage', async () => {
      const $ = await getDOM('/en/github')
      expect($('a[href="/en/github/managing-large-files"]').length).toBe(1)
      expect($('a[href="#managing-large-files"]').length).toBe(0)
    })

    test('adds links to map topics on a category homepage', async () => {
      const $ = await getDOM('/en/github/importing-your-projects-to-github')
      expect(
        $('a[href="/en/github/importing-your-projects-to-github/importing-source-code-to-github"]')
          .length
      ).toBe(1)
      expect($('a[href="#managing-user-account-settings"]').length).toBe(0)
    })

    test('category page renders with TOC', async () => {
      const $ = await getDOM('/en/github/managing-large-files')
      expect($('[data-testid=table-of-contents] ul li a').length).toBeGreaterThan(5)
    })

    test('map topic renders with h2 links to articles', async () => {
      const $ = await getDOM(
        '/en/github/importing-your-projects-to-github/importing-source-code-to-github'
      )
      expect(
        $(
          'a[href="/en/github/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer"] h2'
        ).length
      ).toBe(1)
    })

    test('map topic renders with one intro for every h2', async () => {
      const $ = await getDOM(
        '/en/github/importing-your-projects-to-github/importing-source-code-to-github'
      )
      const $bumpLinks = $('[data-testid=bump-link]')
      expect($bumpLinks.length).toBeGreaterThan(3)
    })

    test('map topic intros are parsed', async () => {
      const $ = await getDOM(
        '/en/github/importing-your-projects-to-github/importing-source-code-to-github'
      )
      const $intro = $('[data-testid=bump-link][href*="source-code-migration-tools"] > p')
      expect($intro.length).toBe(1)
      expect($intro.html()).toContain('You can use external tools to move your projects to GitHub')
    })
  })
})

describe('URLs by language', () => {
  // TODO re-enable this test once TOCs are auto-generated (after PR 11731 has landed)
  test('heading IDs and links on translated pages are in English', async () => {
    const $ = await getDOM(
      '/ja/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-strong-password'
    )
    expect($.res.statusCode).toBe(200)
    expect($('h3[id="further-reading"]').length).toBe(1)
    expect($('h3[id="参考リンク"]').length).toBe(0)
    expect($('h3 a[href="#further-reading"]').length).toBe(1)
  })
})

describe('GitHub Enterprise URLs', () => {
  test('renders the GHE user docs homepage', async () => {
    const $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.latest}/user/github`)
    expect(
      $(
        `a[href="/en/enterprise-server@${enterpriseServerReleases.latest}/github/authenticating-to-github"]`
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
        `section.container-xl a[href="/en/enterprise-server@${enterpriseServerReleases.latest}/github"]`
      ).length
    ).toBe(1)
  })

  test('renders the Enterprise Admin category homepage', async () => {
    const adminPath = `/en/enterprise-server@${enterpriseServerReleases.latest}/admin`
    const $ = await getDOM(adminPath)
    expect($(`h3 ~ a[href="${adminPath}/guides"]`).length).toBe(1)
    expect($('h2 a[href="#all-docs"]').length).toBe(1)
  })

  test('renders an Enterprise Admin category with correct links', async () => {
    const installationCategoryHome = `/en/enterprise-server@${enterpriseServerReleases.latest}/admin/installation`
    const $ = await getDOM(installationCategoryHome)
    expect($(`a[href^="${installationCategoryHome}/"]`).length).toBeGreaterThan(1)
  })

  test('renders a translated Enterprise Admin category with English links', async () => {
    const installationCategoryHome = `/ja/enterprise-server@${enterpriseServerReleases.latest}/admin/installation`
    const $ = await getDOM(installationCategoryHome)
    expect($(`a[href^="${installationCategoryHome}/"]`).length).toBeGreaterThan(1)
  })

  test('renders an Enterprise Admin category article', async () => {
    const $ = await getDOM(
      `/en/enterprise/${enterpriseServerReleases.latest}/admin/installation/system-overview`
    )
    expect($.text()).toContain("your organization's private copy of GitHub")
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

  test('renders Enterprise homepage in Japanese', async () => {
    const res = await get(`/ja/enterprise-server@${enterpriseServerReleases.latest}`)
    expect(res.statusCode).toBe(200)
  })

  test('renders Enterprise User homepage in Japanese', async () => {
    const res = await get(`/ja/enterprise-server@${enterpriseServerReleases.latest}/github`)
    expect(res.statusCode).toBe(200)
  })

  test('renders Enterprise Admin homepage in Japanese', async () => {
    const res = await get(`/ja/enterprise-server@${enterpriseServerReleases.latest}/admin`)
    expect(res.statusCode).toBe(200)
  })

  test('renders Enterprise homepage in Chinese', async () => {
    const res = await get(`/cn/enterprise-server@${enterpriseServerReleases.latest}`)
    expect(res.statusCode).toBe(200)
  })

  test('renders Enterprise User homepage in Chinese', async () => {
    const res = await get(`/cn/enterprise-server@${enterpriseServerReleases.latest}/github`)
    expect(res.statusCode).toBe(200)
  })

  test('renders Enterprise Admin homepage in Chinese', async () => {
    const res = await get(`/cn/enterprise-server@${enterpriseServerReleases.latest}/admin`)
    expect(res.statusCode).toBe(200)
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

  test('renders the Desktop homepage in Japanese', async () => {
    const res = await get('/ja/desktop')
    expect(res.statusCode).toBe(200)
  })
})

describe('extended Markdown', () => {
  test('renders styled warnings', async () => {
    const $ = await getDOM('/en/articles/removing-a-remote')
    const warning = $('div.extended-markdown.warning')
    expect(warning.length).toBe(1)
    expect(warning.text().includes('does not delete the remote')).toBe(true)
  })

  test('renders styled tips (multiple per page)', async () => {
    const $ = await getDOM('/en/articles/authorizing-oauth-apps')
    const tips = $('div.extended-markdown.tip')
    expect(tips.length).toBe(3)
    expect(tips.eq(0).text().includes('verify your email address')).toBe(true)
  })

  test('renders styled notes within liquid', async () => {
    const $ = await getDOM('/en/articles/removing-a-member-from-your-organization')
    const note = $('.extended-markdown.note').eq(0)
    expect(note.hasClass('color-border-info')).toBe(true)
    expect(note.hasClass('color-bg-info')).toBe(true)
  })

  test('renders platform-specific content', async () => {
    const $ = await getDOM('/en/github/using-git/associating-text-editors-with-git')
    expect($('.extended-markdown.mac h2#using-textmate-as-your-editor').length).toBe(1)
    expect($('.extended-markdown.windows h2#using-notepad-as-your-editor').length).toBe(1)
    expect($('.extended-markdown.linux h2#using-textmate-as-your-editor').length).toBe(0)
    expect($('.extended-markdown.linux h2#using-notepad-as-your-editor').length).toBe(0)
  })

  test('renders expected mini TOC headings in platform-specific content', async () => {
    const $ = await getDOM('/en/github/using-git/associating-text-editors-with-git')
    expect($('h2#in-this-article').length).toBe(1)
    expect($('h2#in-this-article + ul li.extended-markdown.mac').length).toBeGreaterThan(1)
    expect($('h2#in-this-article + ul li.extended-markdown.windows').length).toBeGreaterThan(1)
    expect($('h2#in-this-article + ul li.extended-markdown.linux').length).toBeGreaterThan(1)
  })
})

describe('search', () => {
  function findDupesInArray(arr) {
    return lodash.filter(arr, (val, i, iteratee) => lodash.includes(iteratee, val, i + 1))
  }

  it('homepage does not render any elements with duplicate IDs', async () => {
    const $ = await getDOM('/en')
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

  // SKIPPING: Can we have duplicate IDs? search-input-container and search-results-container are duplicated for mobile and desktop
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
    const page = JSON.parse(res.text)
    expect(typeof page.title).toBe('string')
  })

  it('returns a helpful message with top-level keys if query param has no value', async () => {
    const res = await get('/en?json')
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
    expect((await get('/assets/images/site/be-social.gif')).statusCode).toBe(200)
  })

  it('serves schema files from the /data/graphql directory at /public', async () => {
    expect((await get('/public/schema.docs.graphql')).statusCode).toBe(200)
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
    expect((await get('/server.mjs', { followRedirects: true })).statusCode).toBe(404)
  })
})

describe('index pages', () => {
  const nonEnterpriseOnlyPath =
    '/en/github/importing-your-projects-to-github/importing-source-code-to-github'

  test('includes dotcom-only links in dotcom TOC', async () => {
    const $ = await getDOM('/en/github/importing-your-projects-to-github')
    expect($(`a[href="${nonEnterpriseOnlyPath}"]`).length).toBe(1)
  })

  test('excludes dotcom-only from GHE TOC', async () => {
    const $ = await getDOM(
      `/en/enterprise/${enterpriseServerReleases.latest}/user/github/importing-your-projects-to-github`
    )
    expect($(`a[href="${nonEnterpriseOnlyPath}"]`).length).toBe(0)
  })

  test('includes correctly versioned links in GHE', async () => {
    const installationLatest = `/en/enterprise-server@${enterpriseServerReleases.latest}/admin/installation`
    const $ = await getDOM(installationLatest)
    expect($(`a[href^="${installationLatest}/"]`).length).toBeGreaterThan(0)
  })
})

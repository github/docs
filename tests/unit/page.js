require('../../lib/feature-flags')
const path = require('path')
const cheerio = require('cheerio')
const Page = require('../../lib/page')
const enterpriseServerReleases = require('../../lib/enterprise-server-releases')
const nonEnterpriseDefaultVersion = require('../../lib/non-enterprise-default-version')
// get the `free-pro-team` segment of `free-pro-team@latest`
const nonEnterpriseDefaultPlan = process.env.FEATURE_NEW_VERSIONS && nonEnterpriseDefaultVersion.split('@')[0]

const testFeatureNewVersions = process.env.FEATURE_NEW_VERSIONS ? test : test.skip
const testFeatureOldVersions = process.env.FEATURE_NEW_VERSIONS ? test.skip : test
const describeFeatureNewVersions = process.env.FEATURE_NEW_VERSIONS ? describe : describe.skip
const describeFeatureOldVersions = process.env.FEATURE_NEW_VERSIONS ? describe.skip : describe

const opts = {
  relativePath: 'github/collaborating-with-issues-and-pull-requests/about-branches.md',
  basePath: path.join(__dirname, '../../content'),
  languageCode: 'en'
}

describe('Page class', () => {
  test('preserves file path info', () => {
    const page = new Page(opts)
    expect(page.relativePath).toBe('github/collaborating-with-issues-and-pull-requests/about-branches.md')
    expect(page.fullPath.includes(page.relativePath)).toBe(true)
  })

  testFeatureNewVersions('does not error out on translated TOC with no links', () => {
    const page = new Page({
      relativePath: 'translated-toc-with-no-links-index.md',
      basePath: path.join(__dirname, '../fixtures/new-versions'),
      languageCode: 'ja'
    })
    expect(typeof page.title).toBe('string')
  })

  testFeatureOldVersions('does not error out on translated TOC with no links', () => {
    const page = new Page({
      relativePath: 'translated-toc-with-no-links-index.md',
      basePath: path.join(__dirname, '../fixtures'),
      languageCode: 'ja'
    })
    expect(typeof page.title).toBe('string')
  })

  describeFeatureNewVersions('showMiniToc page property', () => {
    const article = new Page({
      relativePath: 'sample-article.md',
      basePath: path.join(__dirname, '../fixtures/new-versions'),
      languageCode: 'en'
    })

    const articleWithFM = new Page({
      showMiniToc: false,
      relativePath: article.relativePath,
      basePath: article.basePath,
      languageCode: article.languageCode
    })

    const tocPage = new Page({
      relativePath: 'sample-toc-index.md',
      basePath: path.join(__dirname, '../fixtures/new-versions'),
      languageCode: 'en'
    })

    const mapTopic = new Page({
      mapTopic: true,
      relativePath: article.relativePath,
      basePath: article.basePath,
      languageCode: article.languageCode
    })

    test('is true by default on articles', () => {
      expect(article.showMiniToc).toBe(true)
    })

    test('is false on articles when set in frontmatter', () => {
      expect(articleWithFM.showMiniToc).toBe(false)
    })

    test('is undefined by default on index.md pages', () => {
      expect(tocPage.showMiniToc).toBeUndefined()
    })

    test('is undefined by default on map topics', () => {
      expect(mapTopic.showMiniToc).toBeUndefined()
    })
  })

  describeFeatureOldVersions('showMiniToc page property', () => {
    const article = new Page({
      relativePath: 'sample-article.md',
      basePath: path.join(__dirname, '../fixtures'),
      languageCode: 'en'
    })

    const articleWithFM = new Page({
      showMiniToc: false,
      relativePath: article.relativePath,
      basePath: article.basePath,
      languageCode: article.languageCode
    })

    const tocPage = new Page({
      relativePath: 'sample-toc-index.md',
      basePath: path.join(__dirname, '../fixtures'),
      languageCode: 'en'
    })

    const mapTopic = new Page({
      mapTopic: true,
      relativePath: article.relativePath,
      basePath: article.basePath,
      languageCode: article.languageCode
    })

    test('is true by default on articles', () => {
      expect(article.showMiniToc).toBe(true)
    })

    test('is false on articles when set in frontmatter', () => {
      expect(articleWithFM.showMiniToc).toBe(false)
    })

    test('is undefined by default on index.md pages', () => {
      expect(tocPage.showMiniToc).toBeUndefined()
    })

    test('is undefined by default on map topics', () => {
      expect(mapTopic.showMiniToc).toBeUndefined()
    })
  })

  describe('page.render(context)', () => {
    testFeatureNewVersions('rewrites links to include the current language prefix and version', async () => {
      const page = new Page(opts)
      const context = {
        page: { version: nonEnterpriseDefaultVersion },
        currentVersion: nonEnterpriseDefaultVersion,
        currentPath: '/en/github/collaborating-with-issues-and-pull-requests/about-branches',
        currentLanguage: 'en'
      }
      const rendered = await page.render(context)
      const $ = cheerio.load(rendered)
      expect(page.markdown.includes('(/articles/about-pull-requests)')).toBe(true)
      expect(page.markdown.includes('(/en/articles/about-pull-requests)')).toBe(false)
      expect($('a[href="/articles/about-pull-requests"]').length).toBe(0)
      expect($(`a[href="/en/${nonEnterpriseDefaultVersion}/articles/about-pull-requests"]`).length).toBeGreaterThan(0)
    })

    testFeatureOldVersions('rewrites links to include the current language prefix', async () => {
      const page = new Page(opts)
      const context = {
        page: { version: 'dotcom' },
        currentVersion: 'dotcom',
        currentPath: '/en/github/collaborating-with-issues-and-pull-requests/about-branches',
        currentLanguage: 'en'
      }
      const rendered = await page.render(context)
      const $ = cheerio.load(rendered)
      expect(page.markdown.includes('(/articles/about-pull-requests)')).toBe(true)
      expect(page.markdown.includes('(/en/articles/about-pull-requests)')).toBe(false)
      expect($('a[href="/articles/about-pull-requests"]').length).toBe(0)
      expect($('a[href="/en/articles/about-pull-requests"]').length).toBeGreaterThan(0)
    })

    testFeatureNewVersions('does not rewrite links that include deprecated enterprise release numbers', async () => {
      const page = new Page({
        relativePath: 'admin/enterprise-management/migrating-from-github-enterprise-1110x-to-2123.md',
        basePath: path.join(__dirname, '../../content'),
        languageCode: 'en'
      })
      const context = {
        page: { version: `enterprise-server@${enterpriseServerReleases.latest}` },
        currentVersion: `enterprise-server@${enterpriseServerReleases.latest}`,
        currentPath: `/en/enterprise-server@${enterpriseServerReleases.latest}/admin/enterprise-management/migrating-from-github-enterprise-1110x-to-2123`,
        currentLanguage: 'en'
      }
      const rendered = await page.render(context)
      const $ = cheerio.load(rendered)
      expect(page.markdown.includes('(/enterprise/11.10.340/admin/articles/upgrading-to-the-latest-release/)')).toBe(true)
      expect($(`a[href="/en/enterprise-server@${enterpriseServerReleases.latest}/11.10.340/admin/articles/upgrading-to-the-latest-release"]`).length).toBe(0)
      expect($('a[href="/en/enterprise/11.10.340/admin/articles/upgrading-to-the-latest-release"]').length).toBeGreaterThan(0)
    })

    testFeatureOldVersions('does not rewrite links that include deprecated enterprise release numbers', async () => {
      const page = new Page({
        relativePath: 'enterprise/admin/enterprise-management/migrating-from-github-enterprise-1110x-to-2123.md',
        basePath: path.join(__dirname, '../../content'),
        languageCode: 'en'
      })
      const context = {
        page: { version: enterpriseServerReleases.latest },
        currentVersion: enterpriseServerReleases.latest,
        currentPath: `/en/enterprise/${enterpriseServerReleases.latest}/admin/enterprise-management/migrating-from-github-enterprise-1110x-to-2123`,
        currentLanguage: 'en'
      }
      const rendered = await page.render(context)
      const $ = cheerio.load(rendered)
      expect(page.markdown.includes('(/enterprise/11.10.340/admin/articles/upgrading-to-the-latest-release/)')).toBe(true)
      expect($(`a[href="/en/enterprise/${enterpriseServerReleases.latest}/admin/articles/upgrading-to-the-latest-release"]`).length).toBe(0)
      expect($('a[href="/en/enterprise/11.10.340/admin/articles/upgrading-to-the-latest-release"]').length).toBeGreaterThan(0)
    })

    testFeatureNewVersions('does not rewrite links to external redirects', async () => {
      const page = new Page(opts)
      page.markdown = `${page.markdown}\n\nSee [Capistrano](/capistrano).`
      const context = {
        page: { version: nonEnterpriseDefaultVersion },
        currentVersion: nonEnterpriseDefaultVersion,
        currentPath: `/en/${nonEnterpriseDefaultVersion}/github/collaborating-with-issues-and-pull-requests/about-branches`,
        currentLanguage: 'en'
      }
      const rendered = await page.render(context)
      const $ = cheerio.load(rendered)
      expect($('a[href="/capistrano"]').length).toBe(1)
    })

    testFeatureOldVersions('does not rewrite links to external redirects', async () => {
      const page = new Page(opts)
      page.markdown = `${page.markdown}\n\nSee [Capistrano](/capistrano).`
      const context = {
        page: { version: 'dotcom' },
        currentVersion: 'dotcom',
        currentPath: '/en/github/collaborating-with-issues-and-pull-requests/about-branches',
        currentLanguage: 'en'
      }
      const rendered = await page.render(context)
      const $ = cheerio.load(rendered)
      expect($('a[href="/capistrano"]').length).toBe(1)
    })
  })

  test('preserves `languageCode`', () => {
    const page = new Page(opts)
    expect(page.languageCode).toBe('en')
  })

  testFeatureNewVersions('parentProductId getter', () => {
    let page = new Page({
      relativePath: 'github/some-category/some-article.md',
      basePath: path.join(__dirname, '../fixtures/new-versions/products'),
      languageCode: 'en'
    })
    expect(page.parentProductId).toBe('github')

    page = new Page({
      relativePath: 'actions/some-category/some-article.md',
      basePath: path.join(__dirname, '../fixtures/new-versions/products'),
      languageCode: 'en'
    })
    expect(page.parentProductId).toBe('actions')

    page = new Page({
      relativePath: 'admin/some-category/some-article.md',
      basePath: path.join(__dirname, '../fixtures/new-versions/products'),
      languageCode: 'en'
    })
    expect(page.parentProductId).toBe('admin')
  })

  testFeatureOldVersions('parentProductId getter', () => {
    let page = new Page({
      relativePath: 'github/some-category/some-article.md',
      basePath: path.join(__dirname, '../fixtures/products'),
      languageCode: 'en'
    })
    expect(page.parentProductId).toBe('github')

    page = new Page({
      relativePath: 'actions/some-category/some-article.md',
      basePath: path.join(__dirname, '../fixtures/products'),
      languageCode: 'en'
    })
    expect(page.parentProductId).toBe('actions')

    page = new Page({
      relativePath: 'enterprise/some-category/some-article.md',
      basePath: path.join(__dirname, '../fixtures/products'),
      languageCode: 'en'
    })
    expect(page.parentProductId).toBe('enterpriseServer')
  })

  describe('permalinks', () => {
    test('is an array', () => {
      const page = new Page(opts)
      expect(Array.isArray(page.permalinks)).toBe(true)
    })

    testFeatureNewVersions('has a key for every supported enterprise version (and no deprecated versions)', () => {
      const page = new Page(opts)
      const pageVersions = page.permalinks.map(permalink => permalink.pageVersion)
      expect(enterpriseServerReleases.supported.every(version => pageVersions.includes(`enterprise-server@${version}`))).toBe(true)
      expect(enterpriseServerReleases.deprecated.every(version => !pageVersions.includes(`enterprise-server@${version}`))).toBe(true)
    })

    testFeatureOldVersions('has a key for every supported enterprise version (and no deprecated versions)', () => {
      const page = new Page(opts)
      const pageVersions = page.permalinks.map(permalink => permalink.pageVersion)
      expect(enterpriseServerReleases.supported.every(version => pageVersions.includes(version))).toBe(true)
      expect(enterpriseServerReleases.deprecated.every(version => !pageVersions.includes(version))).toBe(true)
    })

    testFeatureNewVersions('sets versioned values', () => {
      const page = new Page(opts)
      expect(page.permalinks.find(permalink => permalink.pageVersion === nonEnterpriseDefaultVersion).href).toBe(`/en/${nonEnterpriseDefaultVersion}/github/collaborating-with-issues-and-pull-requests/about-branches`)
      expect(page.permalinks.find(permalink => permalink.pageVersion === `enterprise-server@${enterpriseServerReleases.oldestSupported}`).href).toBe(`/en/enterprise-server@${enterpriseServerReleases.oldestSupported}/github/collaborating-with-issues-and-pull-requests/about-branches`)
    })

    testFeatureOldVersions('sets dotcom and enterprise values', () => {
      const page = new Page(opts)
      expect(page.permalinks.find(permalink => permalink.pageVersion === 'dotcom').href).toBe('/en/github/collaborating-with-issues-and-pull-requests/about-branches')
      expect(page.permalinks.find(permalink => permalink.pageVersion === enterpriseServerReleases.oldestSupported).href).toBe(`/en/enterprise/${enterpriseServerReleases.oldestSupported}/user/github/collaborating-with-issues-and-pull-requests/about-branches`)
    })

    testFeatureNewVersions('homepage permalinks', () => {
      const page = new Page({
        relativePath: 'index.md',
        basePath: path.join(__dirname, '../../content'),
        languageCode: 'en'
      })
      expect(page.permalinks.find(permalink => permalink.pageVersion === nonEnterpriseDefaultVersion).href).toBe(`/en/${nonEnterpriseDefaultVersion}`)
      expect(page.permalinks.find(permalink => permalink.pageVersion === `enterprise-server@${enterpriseServerReleases.oldestSupported}`).href).toBe(`/en/enterprise-server@${enterpriseServerReleases.oldestSupported}`)
      expect(page.permalinks.find(permalink => permalink.pageVersion === 'homepage').href).toBe('/en')
    })

    testFeatureOldVersions('homepage permalinks', () => {
      const page = new Page({
        relativePath: 'index.md',
        basePath: path.join(__dirname, '../../content'),
        languageCode: 'en'
      })
      expect(page.permalinks[0].href).toBe('/en')
    })

    testFeatureNewVersions('permalinks for dotcom-only pages', () => {
      const page = new Page({
        relativePath: 'github/getting-started-with-github/signing-up-for-a-new-github-account.md',
        basePath: path.join(__dirname, '../../content'),
        languageCode: 'en'
      })
      expect(page.permalinks.find(permalink => permalink.pageVersion === nonEnterpriseDefaultVersion).href).toBe(`/en/${nonEnterpriseDefaultVersion}/github/getting-started-with-github/signing-up-for-a-new-github-account`)
      expect(page.permalinks.length).toBe(1)
    })

    testFeatureOldVersions('permalinks for dotcom-only pages', () => {
      const page = new Page({
        relativePath: 'github/getting-started-with-github/signing-up-for-a-new-github-account.md',
        basePath: path.join(__dirname, '../../content'),
        languageCode: 'en'
      })
      expect(page.permalinks.find(permalink => permalink.pageVersion === 'dotcom').href).toBe('/en/github/getting-started-with-github/signing-up-for-a-new-github-account')
      expect(page.permalinks.length).toBe(1)
    })

    testFeatureNewVersions('permalinks for enterprise-only pages', () => {
      const page = new Page({
        relativePath: 'products/admin/some-category/some-article.md',
        basePath: path.join(__dirname, '../fixtures/new-versions'),
        languageCode: 'en'
      })
      expect(page.permalinks.find(permalink => permalink.pageVersion === `enterprise-server@${enterpriseServerReleases.latest}`).href).toBe(`/en/enterprise-server@${enterpriseServerReleases.latest}/products/admin/some-category/some-article`)
      const pageVersions = page.permalinks.map(permalink => permalink.pageVersion)
      expect(pageVersions.length).toBeGreaterThan(1)
      expect(pageVersions.includes(nonEnterpriseDefaultVersion)).toBe(false)
    })

    testFeatureOldVersions('permalinks for enterprise-only pages', () => {
      const page = new Page({
        relativePath: 'products/enterprise/some-category/some-article.md',
        basePath: path.join(__dirname, '../fixtures'),
        languageCode: 'en'
      })
      expect(page.permalinks.find(permalink => permalink.pageVersion === enterpriseServerReleases.latest).href).toBe(`/en/enterprise/${enterpriseServerReleases.latest}/user/products/enterprise/some-category/some-article`)
      const pageVersions = page.permalinks.map(permalink => permalink.pageVersion)
      expect(pageVersions.length).toBeGreaterThan(1)
      expect(pageVersions.includes('dotcom')).toBe(false)
    })

    testFeatureNewVersions('permalinks for non-GitHub.com products without Enterprise versions', () => {
      const page = new Page({
        relativePath: 'products/actions/some-category/some-article.md',
        basePath: path.join(__dirname, '../fixtures/new-versions'),
        languageCode: 'en'
      })
      expect(page.permalinks.find(permalink => permalink.pageVersion === nonEnterpriseDefaultVersion).href).toBe(`/en/${nonEnterpriseDefaultVersion}/products/actions/some-category/some-article`)
      expect(page.permalinks.length).toBe(1)
    })

    testFeatureOldVersions('permalinks for non-GitHub.com products without Enterprise versions', () => {
      const page = new Page({
        relativePath: 'products/actions/some-category/some-article.md',
        basePath: path.join(__dirname, '../fixtures'),
        languageCode: 'en'
      })
      expect(page.permalinks.find(permalink => permalink.pageVersion === 'dotcom').href).toBe('/en/products/actions/some-category/some-article')
      expect(page.permalinks.length).toBe(1)
    })

    testFeatureNewVersions('permalinks for non-GitHub.com products with Enterprise versions', () => {
      const page = new Page({
        relativePath: '/insights/installing-and-configuring-github-insights/about-github-insights.md',
        basePath: path.join(__dirname, '../../content'),
        languageCode: 'en'
      })
      expect(page.permalinks.find(permalink => permalink.pageVersion === `enterprise-server@${enterpriseServerReleases.latest}`).href).toBe(`/en/enterprise-server@${enterpriseServerReleases.latest}/insights/installing-and-configuring-github-insights/about-github-insights`)
      const pageVersions = page.permalinks.map(permalink => permalink.pageVersion)
      expect(pageVersions.length).toBeGreaterThan(1)
      expect(pageVersions.includes(nonEnterpriseDefaultVersion)).toBe(false)
    })

    testFeatureOldVersions('permalinks for non-GitHub.com products with Enterprise versions', () => {
      const page = new Page({
        relativePath: '/insights/installing-and-configuring-github-insights/about-github-insights.md',
        basePath: path.join(__dirname, '../../content'),
        languageCode: 'en'
      })
      expect(page.permalinks.find(permalink => permalink.pageVersion === enterpriseServerReleases.latest).href).toBe(`/en/enterprise/${enterpriseServerReleases.latest}/user/insights/installing-and-configuring-github-insights/about-github-insights`)
      const pageVersions = page.permalinks.map(permalink => permalink.pageVersion)
      expect(pageVersions.length).toBeGreaterThan(1)
      expect(pageVersions.includes('dotcom')).toBe(false)
    })
  })

  describe('Page.parseFrontmatter()', () => {
    it('throws an error on bad input', () => {
      const markdown = null
      expect(() => {
        Page.parseFrontmatter('some/file.md', markdown)
      }).toThrow()
    })
  })

  describe('Page.getLanguageVariants()', () => {
    it('returns an array of language variants of the given URL', () => {
      const variants = Page.getLanguageVariants('/en')
      expect(variants.every(variant => variant.name)).toBe(true)
      expect(variants.every(variant => variant.code)).toBe(true)
      expect(variants.every(variant => variant.href)).toBe(true)
    })

    it('works for the homepage', () => {
      const variants = Page.getLanguageVariants('/en')
      expect(variants.find(({ code }) => code === 'en').href).toBe('/en')
      // expect(variants.find(({ code }) => code === 'ja').href).toBe('/ja')
    })

    it('works for enterprise URLs', () => {
      const variants = Page.getLanguageVariants(`/ja/enterprise/${enterpriseServerReleases.oldestSupported}/user/articles/github-glossary`)
      expect(variants.find(({ code }) => code === 'en').href).toBe(`/en/enterprise/${enterpriseServerReleases.oldestSupported}/user/articles/github-glossary`)
      // expect(variants.find(({ code }) => code === 'ja').href).toBe('/ja/enterprise/2.14/user/articles/github-glossary')
    })
  })

  testFeatureNewVersions('fixes translated frontmatter that includes verdadero', async () => {
    const page = new Page({
      relativePath: 'article-with-mislocalized-frontmatter.md',
      basePath: path.join(__dirname, '../fixtures/new-versions'),
      languageCode: 'ja'
    })
    expect(page.mapTopic).toBe(true)
  })

  testFeatureOldVersions('fixes translated frontmatter that includes verdadero', async () => {
    const page = new Page({
      relativePath: 'article-with-mislocalized-frontmatter.md',
      basePath: path.join(__dirname, '../fixtures'),
      languageCode: 'ja'
    })
    expect(page.mapTopic).toBe(true)
  })

  describe('page.versions frontmatter', () => {
    test.skip('pages that apply to older enterprise versions', async () => {
    // There are none of these in the content at this time!
    })

    testFeatureNewVersions('pages that apply to newer enterprise versions', async () => {
      const page = new Page({
        relativePath: 'github/administering-a-repository/managing-the-automatic-deletion-of-branches.md',
        basePath: path.join(__dirname, '../../content'),
        languageCode: 'en'
      })
      expect(nonEnterpriseDefaultPlan in page.versions).toBe(true)
      expect(page.versions['enterprise-server']).toBe('>=2.19')
    })

    testFeatureOldVersions('pages that apply to newer enterprise versions', async () => {
      const page = new Page({
        relativePath: 'github/administering-a-repository/managing-the-automatic-deletion-of-branches.md',
        basePath: path.join(__dirname, '../../content'),
        languageCode: 'en'
      })
      expect('dotcom' in page.productVersions).toBe(true)
      expect(page.productVersions.enterprise).toBe('>=2.19')
    })

    testFeatureNewVersions('index page', async () => {
      const page = new Page({
        relativePath: 'index.md',
        basePath: path.join(__dirname, '../../content'),
        languageCode: 'en'
      })
      expect(page.versions[nonEnterpriseDefaultPlan]).toBe('*')
      expect(page.versions['enterprise-server']).toBe('*')
    })

    testFeatureOldVersions('index page', async () => {
      const page = new Page({
        relativePath: 'index.md',
        basePath: path.join(__dirname, '../../content'),
        languageCode: 'en'
      })
      expect(page.productVersions.dotcom).toBe('*')
    })

    // Note there is no more enterprise/index.md page with the latest versioning changes
    testFeatureOldVersions('enterprise index page', async () => {
      const page = new Page({
        relativePath: 'enterprise/index.md',
        basePath: path.join(__dirname, '../../content'),
        languageCode: 'en'
      })
      expect('dotcom' in page.productVersions).toBe(false)
      expect(page.productVersions.enterprise).toBe('*')
    })

    testFeatureNewVersions('enterprise admin index page', async () => {
      const page = new Page({
        relativePath: 'admin/index.md',
        basePath: path.join(__dirname, '../../content'),
        languageCode: 'en'
      })

      expect(nonEnterpriseDefaultPlan in page.versions).toBe(false)
      expect(page.versions['enterprise-server']).toBe('*')
    })

    testFeatureOldVersions('enterprise admin index page', async () => {
      const page = new Page({
        relativePath: 'enterprise/admin/index.md',
        basePath: path.join(__dirname, '../../content'),
        languageCode: 'en'
      })

      expect('dotcom' in page.productVersions).toBe(false)
      expect(page.productVersions.enterprise).toBe('*')
    })
  })
})

describe('catches errors thrown in Page class', () => {
  testFeatureNewVersions('frontmatter parsing error', () => {
    function getPage () {
      return new Page({
        relativePath: 'page-with-frontmatter-error.md',
        basePath: path.join(__dirname, '../fixtures/new-versions'),
        languageCode: 'en'
      })
    }

    expect(getPage).toThrowError('invalid frontmatter entry')
  })

  testFeatureOldVersions('frontmatter parsing error', () => {
    function getPage () {
      return new Page({
        relativePath: 'page-with-frontmatter-error.md',
        basePath: path.join(__dirname, '../fixtures'),
        languageCode: 'en'
      })
    }

    expect(getPage).toThrowError('invalid frontmatter entry')
  })

  testFeatureNewVersions('missing versions frontmatter', () => {
    function getPage () {
      return new Page({
        relativePath: 'page-with-missing-product-versions.md',
        basePath: path.join(__dirname, '../fixtures'),
        languageCode: 'en'
      })
    }

    expect(getPage).toThrowError('versions')
  })

  testFeatureOldVersions('missing productVersions', () => {
    function getPage () {
      return new Page({
        relativePath: 'page-with-missing-product-versions.md',
        basePath: path.join(__dirname, '../fixtures'),
        languageCode: 'en'
      })
    }

    expect(getPage).toThrowError('productVersions')
  })
})

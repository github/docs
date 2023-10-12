import { fileURLToPath } from 'url'
import path from 'path'
import cheerio from 'cheerio'
import { describe, expect } from '@jest/globals'

import Page, { FrontmatterErrorsError } from '../../lib/page.js'
import { allVersions } from '#src/versions/lib/all-versions.js'
import enterpriseServerReleases, { latest } from '#src/versions/lib/enterprise-server-releases.js'
import nonEnterpriseDefaultVersion from '#src/versions/lib/non-enterprise-default-version.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const enterpriseServerVersions = Object.keys(allVersions).filter((v) =>
  v.startsWith('enterprise-server@'),
)

// get the `free-pro-team` segment of `free-pro-team@latest`
const nonEnterpriseDefaultPlan = nonEnterpriseDefaultVersion.split('@')[0]

const opts = {
  relativePath:
    'pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches.md',
  basePath: path.join(__dirname, '../../content'),
  languageCode: 'en',
}

describe('Page class', () => {
  test('preserves file path info', async () => {
    const page = await Page.init(opts)
    expect(page.relativePath).toBe(opts.relativePath)
    expect(page.fullPath.includes(page.relativePath)).toBe(true)
  })

  describe('showMiniToc page property', () => {
    let article, articleWithFM, tocPage

    beforeAll(async () => {
      article = await Page.init({
        relativePath: 'sample-article.md',
        basePath: path.join(__dirname, '../fixtures'),
        languageCode: 'en',
      })

      articleWithFM = await Page.init({
        showMiniToc: false,
        relativePath: article.relativePath,
        basePath: article.basePath,
        languageCode: article.languageCode,
      })

      tocPage = await Page.init({
        relativePath: 'sample-toc-index.md',
        basePath: path.join(__dirname, '../fixtures'),
        languageCode: 'en',
      })
    })

    test('is true by default on articles', () => {
      expect(article.showMiniToc).toBe(true)
    })

    test('is false on articles when set in frontmatter', () => {
      expect(articleWithFM.showMiniToc).toBe(false)
    })

    // products, categories, and map topics have index.md pages
    test('is undefined by default on index.md pages', () => {
      expect(tocPage.showMiniToc).toBeUndefined()
    })
  })

  describe('page.render(context)', () => {
    // Most of our Liquid versioning tests are in https://github.com/docs/render-content,
    // But they don't have access to our currently supported versions, which we're testing here.
    // This test ensures that this works as expected: {% if enterpriseServerVersions contains currentVersion %}
    test('renders the expected Enterprise Server versioned content', async () => {
      const page = await Page.init({
        relativePath: 'page-versioned-for-all-enterprise-releases.md',
        basePath: path.join(__dirname, '../fixtures'),
        languageCode: 'en',
      })
      // set version to the latest enterprise version
      const context = {
        currentVersion: `enterprise-server@${enterpriseServerReleases.latest}`,
        currentLanguage: 'en',
        enterpriseServerVersions,
      }
      context.currentPath = `/${context.currentLanguage}/${context.currentVersion}/${page.relativePath}`
      let rendered = await page.render(context)
      let $ = cheerio.load(rendered)
      expect($.text()).toBe(
        'This text should render on any actively supported version of Enterprise Server',
      )
      expect($.text()).not.toBe('This text should only render on non-Enterprise')

      // change version to the oldest enterprise version, re-render, and test again;
      // the results should be the same
      context.currentVersion = `enterprise-server@${enterpriseServerReleases.oldestSupported}`
      context.currentPath = `/${context.currentLanguage}/${context.currentVersion}/${page.relativePath}`
      rendered = await page.render(context)
      $ = cheerio.load(rendered)
      expect($.text()).toBe(
        'This text should render on any actively supported version of Enterprise Server',
      )
      expect($.text()).not.toBe('This text should only render on non-Enterprise')

      // change version to non-enterprise, re-render, and test again;
      // the results should be the opposite
      context.currentVersion = nonEnterpriseDefaultVersion
      context.currentPath = `/${context.currentLanguage}/${context.currentVersion}/${page.relativePath}`
      rendered = await page.render(context)
      $ = cheerio.load(rendered)
      expect($.text()).not.toBe(
        'This text should render on any actively supported version of Enterprise Server',
      )
      expect($.text()).toBe('This text should only render on non-Enterprise')
    })

    test('support next to-be-released Enterprise Server version in frontmatter', async () => {
      // This fixture has `enterprise-server: '>=3.1'` hardcoded in the frontmatter
      const page = await Page.init({
        relativePath: 'page-versioned-for-next-enterprise-release.md',
        basePath: path.join(__dirname, '../fixtures'),
        languageCode: 'en',
      })
      // set version to 3.0
      const context = {
        currentVersion: 'enterprise-server@3.0',
        currentLanguage: 'en',
      }
      await expect(() => {
        return page.render(context)
      }).not.toThrow()
    })
  })

  test('preserves `languageCode`', async () => {
    const page = await Page.init(opts)
    expect(page.languageCode).toBe('en')
  })

  test('parentProductId getter', async () => {
    let page = await Page.init({
      relativePath: 'github/some-category/some-article.md',
      basePath: path.join(__dirname, '../fixtures/products'),
      languageCode: 'en',
    })
    expect(page.parentProductId).toBe('github')

    page = await Page.init({
      relativePath: 'actions/some-category/some-article.md',
      basePath: path.join(__dirname, '../fixtures/products'),
      languageCode: 'en',
    })
    expect(page.parentProductId).toBe('actions')

    page = await Page.init({
      relativePath: 'admin/some-category/some-article.md',
      basePath: path.join(__dirname, '../fixtures/products'),
      languageCode: 'en',
    })
    expect(page.parentProductId).toBe('admin')
  })

  describe('permalinks', () => {
    test('is an array', async () => {
      const page = await Page.init(opts)
      expect(Array.isArray(page.permalinks)).toBe(true)
    })

    test('has a key for every supported enterprise version (and no deprecated versions)', async () => {
      const page = await Page.init(opts)
      const pageVersions = page.permalinks.map((permalink) => permalink.pageVersion)
      expect(
        enterpriseServerReleases.supported.every((version) =>
          pageVersions.includes(`enterprise-server@${version}`),
        ),
      ).toBe(true)
      expect(
        enterpriseServerReleases.deprecated.every(
          (version) => !pageVersions.includes(`enterprise-server@${version}`),
        ),
      ).toBe(true)
    })

    test('sets versioned values', async () => {
      const page = await Page.init(opts)
      const expectedPath =
        'pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches'
      expect(
        page.permalinks.find((permalink) => permalink.pageVersion === nonEnterpriseDefaultVersion)
          .href,
      ).toBe(`/en/${expectedPath}`)
      expect(
        page.permalinks.find(
          (permalink) =>
            permalink.pageVersion ===
            `enterprise-server@${enterpriseServerReleases.oldestSupported}`,
        ).href,
      ).toBe(`/en/enterprise-server@${enterpriseServerReleases.oldestSupported}/${expectedPath}`)
    })

    test('homepage permalinks', async () => {
      const page = await Page.init({
        relativePath: 'index.md',
        basePath: path.join(__dirname, '../../content'),
        languageCode: 'en',
      })
      expect(
        page.permalinks.find((permalink) => permalink.pageVersion === nonEnterpriseDefaultVersion)
          .href,
      ).toBe('/en')
      expect(
        page.permalinks.find(
          (permalink) =>
            permalink.pageVersion ===
            `enterprise-server@${enterpriseServerReleases.oldestSupported}`,
        ).href,
      ).toBe(`/en/enterprise-server@${enterpriseServerReleases.oldestSupported}`)
    })

    test('permalinks for enterprise-only pages', async () => {
      const page = await Page.init({
        relativePath: 'products/admin/some-category/some-article.md',
        basePath: path.join(__dirname, '../fixtures'),
        languageCode: 'en',
      })
      expect(
        page.permalinks.find(
          (permalink) =>
            permalink.pageVersion === `enterprise-server@${enterpriseServerReleases.latest}`,
        ).href,
      ).toBe(
        `/en/enterprise-server@${enterpriseServerReleases.latest}/products/admin/some-category/some-article`,
      )
      const pageVersions = page.permalinks.map((permalink) => permalink.pageVersion)
      expect(pageVersions.length).toBeGreaterThan(1)
      expect(pageVersions.includes(nonEnterpriseDefaultVersion)).toBe(false)
    })

    test('permalinks for non-GitHub.com products without Enterprise versions', async () => {
      const page = await Page.init({
        relativePath: 'products/actions/some-category/some-article.md',
        basePath: path.join(__dirname, '../fixtures'),
        languageCode: 'en',
      })
      expect(
        page.permalinks.find((permalink) => permalink.pageVersion === nonEnterpriseDefaultVersion)
          .href,
      ).toBe('/en/products/actions/some-category/some-article')
      expect(page.permalinks.length).toBe(1)
    })
  })

  describe('videos', () => {
    let page

    beforeEach(async () => {
      page = await Page.init({
        relativePath: 'article-with-videos.md',
        basePath: path.join(__dirname, '../fixtures'),
        languageCode: 'en',
      })
    })

    it('includes videos specified in the featuredLinks frontmatter', async () => {
      expect(page.featuredLinks.videos).toStrictEqual([
        {
          title: 'codespaces',
          href: 'https://www.youtube-nocookie.com/embed/_W9B7qc9lVc',
        },
        {
          title: 'more codespaces',
          href: 'https://www.youtube-nocookie.com/embed/_W9B7qc9lVc',
        },
        {
          title: 'even more codespaces',
          href: 'https://www.youtube-nocookie.com/embed/_W9B7qc9lVc',
        },
      ])

      expect(page.featuredLinks.videosHeading).toBe('Custom Videos heading')
    })
  })

  describe('introLinks', () => {
    it('includes the links specified in the introLinks frontmatter', async () => {
      const page = await Page.init({
        relativePath: 'article-with-introLinks.md',
        basePath: path.join(__dirname, '../fixtures'),
        languageCode: 'en',
      })

      expect(page.introLinks).toStrictEqual({
        overview: 'https://github.com',
        'custom link!': 'https://github.com/features',
      })
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

  describe('page.versions frontmatter', () => {
    test('pages that use short names in versions frontmatter', async () => {
      const page = await Page.init({
        relativePath: 'short-versions.md',
        basePath: path.join(__dirname, '../fixtures'),
        languageCode: 'en',
      })
      expect(page.versions.fpt).toBe('*')
      expect(page.versions.ghes).toBe('>3.0')
      expect(page.versions.ghae).toBeUndefined()
      expect(page.applicableVersions.includes('free-pro-team@latest')).toBe(true)
      expect(page.applicableVersions.includes(`enterprise-server@${latest}`)).toBe(true)
      expect(page.applicableVersions.includes(`github-ae@latest`)).toBe(false)
    })

    test('index page', async () => {
      const page = await Page.init({
        relativePath: 'index.md',
        basePath: path.join(__dirname, '../../content'),
        languageCode: 'en',
      })
      expect(page.versions).toEqual({ fpt: '*', ghae: '*', ghec: '*', ghes: '*' })
    })

    test('enterprise admin index page', async () => {
      const page = await Page.init({
        relativePath: 'admin/index.md',
        basePath: path.join(__dirname, '../../content'),
        languageCode: 'en',
      })

      expect(nonEnterpriseDefaultPlan in page.versions).toBe(false)
      expect(page.versions.ghes).toBe('*')
    })

    test('feature versions frontmatter', async () => {
      // This fixture file has the frontmatter:
      //
      // versions:
      //   fpt: '*'
      //   ghes: '*'
      //   feature: 'placeholder'
      //
      // and placeholder.yml has:
      //
      // versions:
      //   ghes: '<3.0'
      //   ghae: '*'
      //
      // So we expect to get the versioning from both.
      const page = await Page.init({
        relativePath: 'feature-versions-frontmatter.md',
        basePath: path.join(__dirname, '../fixtures'),
        languageCode: 'en',
      })

      // Test the raw page data.
      expect(page.versions.fpt).toBe('*')
      expect(page.versions.ghes).toBe('>2.21')
      expect(page.versions.ghae).toBeUndefined()

      // Test the resolved versioning, where GHES releases specified in frontmatter and in
      // feature versions are combined (i.e., one doesn't overwrite the other).
      // We can't test that GHES 2.21 is _not_ included here (which it shouldn't be),
      // because lib/get-applicable-versions only returns currently supported versions,
      // so as soon as 2.21 is deprecated, a test for that _not_ to exist will not be meaningful.
      // But by testing that the _latest_ GHES version is returned, we can ensure that the
      // the frontmatter GHES `*` is not being overwritten by the placeholder's GHES `<3.0`.
      expect(page.applicableVersions.includes('free-pro-team@latest')).toBe(true)
      expect(page.applicableVersions.includes(`enterprise-server@${latest}`)).toBe(true)
      expect(page.applicableVersions.includes('github-ae@latest')).toBe(true)
      expect(page.applicableVersions.includes('feature')).toBe(false)
      expect(page.applicableVersions.includes('placeholder')).toBe(false)
    })
  })

  describe('platform specific content', () => {
    test('page.defaultPlatform frontmatter', async () => {
      const page = await Page.init({
        relativePath: 'actions/some-category/some-article.md',
        basePath: path.join(__dirname, '../fixtures/products'),
        languageCode: 'en',
      })
      expect(page.defaultPlatform).toBeDefined()
      expect(page.defaultPlatform).toBe('linux')
    })
  })

  describe('tool specific content', () => {
    test('page.defaultTool frontmatter', async () => {
      const page = await Page.init({
        relativePath: 'default-tool.md',
        basePath: path.join(__dirname, '../fixtures'),
        languageCode: 'en',
      })
      expect(page.defaultTool).toBeDefined()
      expect(page.defaultTool).toBe('cli')
    })
  })
})

describe('catches errors thrown in Page class', () => {
  test('frontmatter parsing error', async () => {
    async function getPage() {
      return await Page.init({
        relativePath: 'page-with-frontmatter-error.md',
        basePath: path.join(__dirname, '../fixtures'),
        languageCode: 'en',
      })
    }

    await expect(getPage).rejects.toThrow(FrontmatterErrorsError)
  })

  test('missing versions frontmatter', async () => {
    async function getPage() {
      return await Page.init({
        relativePath: 'page-with-missing-product-versions.md',
        basePath: path.join(__dirname, '../fixtures'),
        languageCode: 'en',
      })
    }

    await expect(getPage).rejects.toThrowError('versions')
  })

  // TODO - UNSKIP WHEN GHAE IS UPDATED WITH SEMVER VERSIONING
  test.skip('invalid versions frontmatter', async () => {
    async function getPage() {
      return await Page.init({
        relativePath: 'page-with-invalid-product-version.md',
        basePath: path.join(__dirname, '../fixtures'),
        languageCode: 'en',
      })
    }

    await expect(getPage).rejects.toThrowError('versions')
  })

  test('English page with a version in frontmatter that its parent product is not available in', async () => {
    async function getPage() {
      return await Page.init({
        relativePath: 'admin/some-category/some-article-with-mismatched-versions-frontmatter.md',
        basePath: path.join(__dirname, '../fixtures/products'),
        languageCode: 'en',
      })
    }

    expect(getPage).rejects.toThrowError(/`versions` frontmatter.*? product is not available in/)
  })

  describe('versionining optional attributes', () => {
    test("re-rendering set appropriate 'product', 'permissions', 'learningTracks'", async () => {
      const page = await Page.init({
        relativePath: 'page-with-optional-attributes.md',
        basePath: path.join(__dirname, '../fixtures'),
        languageCode: 'en',
      })
      const context = {
        page: { version: `enterprise-server@3.2` },
        currentVersion: `enterprise-server@3.2`,
        currentVersionObj: {},
        currentProduct: 'snowbird',
        currentLanguage: 'en',
        currentPath: '/en/enterprise-server@3.2/optional/attributes',
        fpt: false, // what the shortVersions contextualizer does
      }

      await page.render(context)
      expect(page.product).toBe('')
      expect(page.permissions).toBe('')

      // Change to FPT
      context.page.version = nonEnterpriseDefaultVersion
      context.version = nonEnterpriseDefaultVersion
      context.currentPath = '/en/optional/attributes'
      context.fpt = true
      await page.render(context)
      expect(page.product).toContain('FPT rulez!')
      expect(page.permissions).toContain('FPT only!')
    })
  })
})

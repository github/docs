import { fileURLToPath } from 'url'
import path from 'path'
import cheerio from 'cheerio'
import Page from '../../lib/page.js'
import readJsonFile from '../../lib/read-json-file.js'
import allVersions from '../../lib/all-versions.js'
import enterpriseServerReleases, { latest } from '../../lib/enterprise-server-releases.js'
import nonEnterpriseDefaultVersion from '../../lib/non-enterprise-default-version.js'
// import getLinkData from '../../lib/get-link-data.js'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const prerenderedObjects = readJsonFile('./lib/graphql/static/prerendered-objects.json')
const enterpriseServerVersions = Object.keys(allVersions).filter((v) =>
  v.startsWith('enterprise-server@')
)

// get the `free-pro-team` segment of `free-pro-team@latest`
const nonEnterpriseDefaultPlan = nonEnterpriseDefaultVersion.split('@')[0]

const opts = {
  relativePath:
    'github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches.md',
  basePath: path.join(__dirname, '../../content'),
  languageCode: 'en',
}

describe('Page class', () => {
  test('preserves file path info', async () => {
    const page = await Page.init(opts)
    expect(page.relativePath).toBe(opts.relativePath)
    expect(page.fullPath.includes(page.relativePath)).toBe(true)
  })

  test('does not error out on translated TOC with no links', async () => {
    const page = await Page.init({
      relativePath: 'translated-toc-with-no-links-index.md',
      basePath: path.join(__dirname, '../fixtures'),
      languageCode: 'ja',
    })
    expect(typeof page.title).toBe('string')
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
    test('rewrites links to include the current language prefix and version', async () => {
      const page = await Page.init(opts)
      const context = {
        page: { version: `enterprise-server@${enterpriseServerReleases.latest}` },
        currentVersion: `enterprise-server@${enterpriseServerReleases.latest}`,
        currentPath:
          '/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches',
        currentLanguage: 'en',
      }
      const rendered = await page.render(context)
      const $ = cheerio.load(rendered)
      expect(page.markdown.includes('(/articles/about-pull-requests)')).toBe(true)
      expect(page.markdown.includes('(/en/articles/about-pull-requests)')).toBe(false)
      expect($('a[href="/articles/about-pull-requests"]').length).toBe(0)
      expect(
        $(
          `a[href="/en/${`enterprise-server@${enterpriseServerReleases.latest}`}/articles/about-pull-requests"]`
        ).length
      ).toBeGreaterThan(0)
    })

    test('rewrites links on prerendered GraphQL page include the current language prefix and version', async () => {
      const graphqlVersion =
        allVersions[`enterprise-server@${enterpriseServerReleases.latest}`].miscVersionName
      const $ = cheerio.load(prerenderedObjects[graphqlVersion].html)
      expect($('a[href^="/graphql/reference/input-objects"]').length).toBe(0)
      expect(
        $(
          `a[href^="/en/enterprise-server@${enterpriseServerReleases.latest}/graphql/reference/input-objects"]`
        ).length
      ).toBeGreaterThan(0)
    })

    test('rewrites links in the intro to include the current language prefix and version', async () => {
      const page = await Page.init(opts)
      page.rawIntro = '[Pull requests](/articles/about-pull-requests)'
      const context = {
        page: { version: nonEnterpriseDefaultVersion },
        currentVersion: nonEnterpriseDefaultVersion,
        currentPath:
          '/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches',
        currentLanguage: 'en',
      }
      await page.render(context)
      const $ = cheerio.load(page.intro)
      expect($('a[href="/articles/about-pull-requests"]').length).toBe(0)
      expect($('a[href="/en/articles/about-pull-requests"]').length).toBeGreaterThan(0)
    })

    test('does not rewrite links that include deprecated enterprise release numbers', async () => {
      const page = await Page.init({
        relativePath:
          'admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/migrating-from-github-enterprise-1110x-to-2123.md',
        basePath: path.join(__dirname, '../../content'),
        languageCode: 'en',
      })
      const context = {
        page: { version: `enterprise-server@${enterpriseServerReleases.latest}` },
        currentVersion: `enterprise-server@${enterpriseServerReleases.latest}`,
        currentPath: `/en/enterprise-server@${enterpriseServerReleases.latest}/admin/enterprise-management/migrating-from-github-enterprise-1110x-to-2123`,
        currentLanguage: 'en',
      }
      const rendered = await page.render(context)
      const $ = cheerio.load(rendered)
      expect(
        page.markdown.includes(
          '(/enterprise/11.10.340/admin/articles/upgrading-to-the-latest-release/)'
        )
      ).toBe(true)
      expect(
        $(
          `a[href="/en/enterprise-server@${enterpriseServerReleases.latest}/11.10.340/admin/articles/upgrading-to-the-latest-release"]`
        ).length
      ).toBe(0)
      expect(
        $('a[href="/en/enterprise/11.10.340/admin/articles/upgrading-to-the-latest-release"]')
          .length
      ).toBeGreaterThan(0)
    })

    test('does not rewrite links to external redirects', async () => {
      const page = await Page.init(opts)
      page.markdown = `${page.markdown}\n\nSee [Capistrano](/capistrano).`
      const context = {
        page: { version: nonEnterpriseDefaultVersion },
        currentVersion: nonEnterpriseDefaultVersion,
        currentPath: `/en/${nonEnterpriseDefaultVersion}/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches`,
        currentLanguage: 'en',
      }
      const rendered = await page.render(context)
      const $ = cheerio.load(rendered)
      expect($('a[href="/capistrano"]').length).toBe(1)
    })

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
      let rendered = await page.render(context)
      let $ = cheerio.load(rendered)
      expect($.text()).toBe(
        'This text should render on any actively supported version of Enterprise Server'
      )
      expect($.text()).not.toBe('This text should only render on non-Enterprise')

      // change version to the oldest enterprise version, re-render, and test again;
      // the results should be the same
      context.currentVersion = `enterprise-server@${enterpriseServerReleases.oldestSupported}`
      rendered = await page.render(context)
      $ = cheerio.load(rendered)
      expect($.text()).toBe(
        'This text should render on any actively supported version of Enterprise Server'
      )
      expect($.text()).not.toBe('This text should only render on non-Enterprise')

      // change version to non-enterprise, re-render, and test again;
      // the results should be the opposite
      context.currentVersion = nonEnterpriseDefaultVersion
      rendered = await page.render(context)
      $ = cheerio.load(rendered)
      expect($.text()).not.toBe(
        'This text should render on any actively supported version of Enterprise Server'
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

    test('support next GitHub AE version in frontmatter', async () => {
      // This fixture has `github-ae: 'next'` hardcoded in the frontmatter
      const page = await Page.init({
        relativePath: 'page-versioned-for-ghae-next.md',
        basePath: path.join(__dirname, '../fixtures'),
        languageCode: 'en',
      })
      // set version to @latest
      const context = {
        currentVersion: 'github-ae@latest',
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
          pageVersions.includes(`enterprise-server@${version}`)
        )
      ).toBe(true)
      expect(
        enterpriseServerReleases.deprecated.every(
          (version) => !pageVersions.includes(`enterprise-server@${version}`)
        )
      ).toBe(true)
    })

    test('sets versioned values', async () => {
      const page = await Page.init(opts)
      const expectedPath =
        'github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches'
      expect(
        page.permalinks.find((permalink) => permalink.pageVersion === nonEnterpriseDefaultVersion)
          .href
      ).toBe(`/en/${expectedPath}`)
      expect(
        page.permalinks.find(
          (permalink) =>
            permalink.pageVersion ===
            `enterprise-server@${enterpriseServerReleases.oldestSupported}`
        ).href
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
          .href
      ).toBe('/en')
      expect(
        page.permalinks.find(
          (permalink) =>
            permalink.pageVersion ===
            `enterprise-server@${enterpriseServerReleases.oldestSupported}`
        ).href
      ).toBe(`/en/enterprise-server@${enterpriseServerReleases.oldestSupported}`)
    })

    test('permalinks for dotcom-only pages', async () => {
      const page = await Page.init({
        relativePath:
          'github/authenticating-to-github/troubleshooting-ssh/using-ssh-over-the-https-port.md',
        basePath: path.join(__dirname, '../../content'),
        languageCode: 'en',
      })
      const expectedPath =
        '/en/github/authenticating-to-github/troubleshooting-ssh/using-ssh-over-the-https-port'
      expect(
        page.permalinks.find((permalink) => permalink.pageVersion === nonEnterpriseDefaultVersion)
          .href
      ).toBe(expectedPath)
      expect(page.permalinks.length).toBe(1)
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
            permalink.pageVersion === `enterprise-server@${enterpriseServerReleases.latest}`
        ).href
      ).toBe(
        `/en/enterprise-server@${enterpriseServerReleases.latest}/products/admin/some-category/some-article`
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
          .href
      ).toBe('/en/products/actions/some-category/some-article')
      expect(page.permalinks.length).toBe(1)
    })

    test('permalinks for non-GitHub.com products with Enterprise versions', async () => {
      const page = await Page.init({
        relativePath:
          '/insights/installing-and-configuring-github-insights/installing-and-updating-github-insights/about-github-insights.md',
        basePath: path.join(__dirname, '../../content'),
        languageCode: 'en',
      })
      const expectedPath = `/en/enterprise-server@${enterpriseServerReleases.latest}/insights/installing-and-configuring-github-insights/installing-and-updating-github-insights/about-github-insights`
      expect(
        page.permalinks.find(
          (permalink) =>
            permalink.pageVersion === `enterprise-server@${enterpriseServerReleases.latest}`
        ).href
      ).toBe(expectedPath)
      const pageVersions = page.permalinks.map((permalink) => permalink.pageVersion)
      expect(pageVersions.length).toBeGreaterThan(1)
      expect(pageVersions.includes(nonEnterpriseDefaultVersion)).toBe(false)
    })
  })

  describe('learning tracks', () => {
    let page

    beforeEach(async () => {
      page = await Page.init({
        relativePath: 'article-with-learning-tracks.md',
        basePath: path.join(__dirname, '../fixtures'),
        languageCode: 'en',
      })
    })

    it('includes learning tracks specified in frontmatter', async () => {
      expect(page.learningTracks).toStrictEqual([
        'track_1',
        'track_2',
        'non_existing_track',
        '{% if currentVersion == "free-pro-team@latest" %}dotcom_only_track{% endif %}',
        '{% if currentVersion != "free-pro-team@latest" %}enterprise_only_track{% endif %}',
      ])
    })

    it.skip('renders learning tracks that have been defined', async () => {
      // getLinkData.mockImplementation((guides) => { return guides })
      const guides = ['/path/guide1', '/path/guide2']
      const context = {
        currentLanguage: 'en',
        currentProduct: 'snowbird',
        currentVersion: nonEnterpriseDefaultVersion,
        enterpriseServerVersions,
        site: {
          data: {
            'learning-tracks': {
              snowbird: {
                track_1: {
                  title: 'title',
                  description: 'description',
                  guides,
                  featured_track:
                    '{% if currentVersion == "free-pro-team@latest" %}true{% else %}false{% endif %}',
                },
                track_2: {
                  title: 'title',
                  description: 'description',
                  guides,
                  featured_track:
                    '{% if enterpriseServerVersions contains currentVersion %}true{% else %}false{% endif %}',
                },
                dotcom_only_track: {
                  title: 'title',
                  description: 'description',
                  guides,
                },
                enterprise_only_track: {
                  title: 'title',
                  description: 'description',
                  guides,
                },
              },
            },
          },
        },
      }
      // Test that Liquid versioning is respected during rendering.
      // Start with Dotcom.
      await page.render(context)
      // To actually render the guides in this test, we would have to load context.pages and context.redirects;
      // To avoid that we can just test that the function was called with the expected data.
      // expect(getLinkData).toHaveBeenCalledWith(guides, context)
      // Tracks for dotcom should exclude enterprise_only_track and the featured track_1.
      expect(page.learningTracks).toHaveLength(2)
      const dotcomTrackNames = page.learningTracks.map((t) => t.trackName)
      expect(dotcomTrackNames.includes('track_2')).toBe(true)
      expect(dotcomTrackNames.includes('dotcom_only_track')).toBe(true)
      expect(page.featuredTrack.trackName === 'track_1').toBeTruthy()
      expect(page.featuredTrack.trackName === 'track_2').toBeFalsy()

      // Switch to Enterprise.
      context.currentVersion = `enterprise-server@${latest}`
      await page.render(context)
      // Tracks for enterprise should exclude dotcom_only_track and the featured track_2.
      expect(page.learningTracks).toHaveLength(2)
      const ghesTrackNames = page.learningTracks.map((t) => t.trackName)
      expect(ghesTrackNames.includes('track_1')).toBe(true)
      expect(ghesTrackNames.includes('enterprise_only_track')).toBe(true)
      expect(page.featuredTrack.trackName === 'track_1').toBeFalsy()
      expect(page.featuredTrack.trackName === 'track_2').toBeTruthy()
    })
  })

  describe('includeGuides', () => {
    let page

    beforeEach(async () => {
      page = await Page.init({
        relativePath: 'article-with-includeGuides.md',
        basePath: path.join(__dirname, '../fixtures'),
        languageCode: 'en',
      })
    })

    it('includes guide paths specified in frontmatter', async () => {
      expect(page.includeGuides).toStrictEqual(['/path/guide1', '/path/guide2', '/path/guide3'])
    })

    it.skip('renders guides and topics', async () => {
      /* getLinkData.mockImplementation(() => {
        return [{
          page: { topics: ['Spring', 'Summer'] }
        }, {
          page: { topics: ['Summer', 'Fall'] }
        }, {
          page: { topics: ['Fall', 'Winter'] }
        }]
      }) */
      // const guides = ['/path/guide1', '/path/guide2', '/path/guide3']
      const context = {
        currentVersion: nonEnterpriseDefaultVersion,
        currentLanguage: 'en',
      }
      await page.render(context)
      // expect(getLinkData).toHaveBeenCalledWith(guides, context)
      expect(page.includeGuides).toHaveLength(3)
      expect(page.allTopics).toHaveLength(4)
      expect(page.allTopics).toEqual(expect.arrayContaining(['Spring', 'Summer', 'Fall', 'Winter']))
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
      expect(variants.every((variant) => variant.name)).toBe(true)
      expect(variants.every((variant) => variant.code)).toBe(true)
      expect(variants.every((variant) => variant.href)).toBe(true)
    })

    it('works for the homepage', () => {
      const variants = Page.getLanguageVariants('/en')
      expect(variants.find(({ code }) => code === 'en').href).toBe('/en')
      // expect(variants.find(({ code }) => code === 'ja').href).toBe('/ja')
    })

    it('works for enterprise URLs', () => {
      const variants = Page.getLanguageVariants(
        `/ja/enterprise/${enterpriseServerReleases.oldestSupported}/user/articles/github-glossary`
      )
      expect(variants.find(({ code }) => code === 'en').href).toBe(
        `/en/enterprise/${enterpriseServerReleases.oldestSupported}/user/articles/github-glossary`
      )
      // expect(variants.find(({ code }) => code === 'ja').href).toBe('/ja/enterprise/2.14/user/articles/github-glossary')
    })
  })

  test('fixes translated frontmatter that includes verdadero', async () => {
    const page = await Page.init({
      relativePath: 'article-with-mislocalized-frontmatter.md',
      basePath: path.join(__dirname, '../fixtures'),
      languageCode: 'ja',
    })
    expect(page.mapTopic).toBe(true)
  })

  describe('page.versions frontmatter', () => {
    test.skip('pages that apply to older enterprise versions', async () => {
      // There are none of these in the content at this time!
    })

    test.skip('pages that apply to newer enterprise versions', async () => {
      // There are none of these in the content at this time!
    })

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
      expect(page.versions).toBe('*')
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
      //   ghes: '<2.22'
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
      // The `feature` prop gets deleted by lib/get-applicable-versions, so it's undefined.
      expect(page.versions.feature).toBeUndefined()

      // Test the resolved versioning, where GHES releases specified in frontmatter and in
      // feature versions are combined (i.e., one doesn't overwrite the other).
      // We can't test that GHES 2.21 is _not_ included here (which it shouldn't be),
      // because lib/get-applicable-versions only returns currently supported versions,
      // so as soon as 2.21 is deprecated, a test for that _not_ to exist will not be meaningful.
      // But by testing that the _latest_ GHES version is returned, we can ensure that the
      // the frontmatter GHES `*` is not being overwritten by the placeholder's GHES `<2.22`.
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
        relativePath:
          'actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service.md',
        basePath: path.join(__dirname, '../../content'),
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

    await expect(getPage).rejects.toThrowError('invalid frontmatter entry')
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

  test('non-English page with a version in frontmatter that its parent product is not available in', async () => {
    async function getPage() {
      return await Page.init({
        relativePath: 'admin/some-category/some-article-with-mismatched-versions-frontmatter.md',
        basePath: path.join(__dirname, '../fixtures/products'),
        languageCode: 'es',
      })
    }

    await expect(getPage).rejects.toThrowError(
      /`versions` frontmatter.*? product is not available in/
    )
  })
})

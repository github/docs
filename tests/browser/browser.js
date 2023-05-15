import fs from 'fs'
import path from 'path'
import { jest } from '@jest/globals'
import { oldestSupported } from '../../lib/enterprise-server-releases.js'

import { getDOM } from '../helpers/e2etest.js'
import frontmatter from '../../lib/read-frontmatter.js'
import getApplicableVersions from '../../lib/get-applicable-versions.js'
import { allVersions } from '../../lib/all-versions.js'
import renderContent from '../../lib/render-content/index.js'
import shortVersionsMiddleware from '../../middleware/contextualizers/short-versions.js'

jest.useFakeTimers({ legacyFakeTimers: true })
const req = {}
/* global page, browser */
describe('homepage', () => {
  jest.setTimeout(60 * 1000)

  test('should be titled "GitHub Docs"', async () => {
    await page.goto('http://localhost:4000')
    await expect(page.title()).resolves.toMatch('GitHub Docs')
  })
})

// Note: we can only test Elasticsearch searches on things we have indexed
// in the fixtures. See the contents of /src/search/tests/fixtures/search-indexes
describe('browser search', () => {
  jest.setTimeout(60 * 1000)

  it('works on small and x-small viewport landing pages', async () => {
    await page.setViewport({ width: 500, height: 700 })
    await page.goto('http://localhost:4000/en/actions')
    await page.click('[data-testid=mobile-search-button]')
    await page.click('[data-testid=site-search-input]')
    await page.type('[data-testid=site-search-input]', 'foo')
    await page.keyboard.press('Enter')
    await page.waitForSelector('[data-testid=search-result]')
    const hits = await page.$$('[data-testid=search-result]')
    expect(hits.length).toBeGreaterThan(1)
  })

  it('works on medium -> x-large viewport landing pages', async () => {
    const initialViewport = page.viewport()
    await page.setViewport({ width: 1000, height: 768 })
    await page.goto('http://localhost:4000/en/actions')
    await page.click('[data-testid=desktop-header] [data-testid=site-search-input]')
    await page.type('[data-testid=desktop-header] [data-testid=site-search-input]', 'foo')
    await page.keyboard.press('Enter')
    await page.waitForSelector('[data-testid=search-result]')
    const hits = await page.$$('[data-testid=search-result]')
    expect(hits.length).toBeGreaterThan(1)
    await page.setViewport(initialViewport)
  })
  // 404 page is statically generated with next, so search is not available, but may possibly be brought back
  // Docs Engineering issue: 961
  it.skip('works on 404 error page', async () => {
    await page.goto('http://localhost:4000/en/404')
    await page.click('[data-testid=search] input[type="search"]')
    await page.type('[data-testid=search] input[type="search"]', 'actions')
    await page.keyboard.press('Enter')
    await page.waitForSelector('[data-testid=search-results]')
    const hits = await page.$$('[data-testid=search-result]')
    expect(hits.length).toBeGreaterThan(5)
  })

  // Elasticsearch fixtures only work for dotco and GHAE
  it.skip('sends the correct data to search for Enterprise Server', async () => {
    expect.assertions(2)

    const newPage = await browser.newPage()
    await newPage.goto(
      `http://localhost:4000/en/enterprise-server@${oldestSupported}/admin/installation`
    )

    await newPage.setRequestInterception(true)
    newPage.on('request', (interceptedRequest) => {
      if (
        interceptedRequest.method() === 'GET' &&
        /api\/search\/legacy\?/i.test(interceptedRequest.url())
      ) {
        const { searchParams } = new URL(interceptedRequest.url())
        expect(searchParams.get('version')).toBe(oldestSupported)
        expect(searchParams.get('language')).toBe('en')
      }
      interceptedRequest.continue()
    })

    const searchInput = await newPage.$('[data-testid=site-search-input]')
    await searchInput.click()
    await searchInput.type('code')
    await page.keyboard.press('Enter')
    await newPage.waitForSelector('[data-testid=search-result]')
  })

  it('sends the correct data to search for dotcom', async () => {
    expect.assertions(2)

    const newPage = await browser.newPage()
    await newPage.goto('http://localhost:4000/en')

    await newPage.setRequestInterception(true)
    newPage.on('request', (interceptedRequest) => {
      if (
        interceptedRequest.method() === 'GET' &&
        /api\/search\/v1\?/i.test(interceptedRequest.url())
      ) {
        const { searchParams } = new URL(interceptedRequest.url())
        expect(searchParams.get('version')).toBe('free-pro-team@latest')
        expect(searchParams.get('language')).toBe('en')
      }
      interceptedRequest.continue()
    })

    const searchInput = await newPage.$('[data-testid=site-search-input]')
    await searchInput.click()
    await searchInput.type('foo')
    await newPage.keyboard.press('Enter')
    await newPage.waitForSelector('[data-testid=search-result]')
  })

  it('sends the correct data to search for GHAE', async () => {
    expect.assertions(2)

    const newPage = await browser.newPage()
    await newPage.goto('http://localhost:4000/en/github-ae@latest/admin/overview')

    await newPage.setRequestInterception(true)
    newPage.on('request', (interceptedRequest) => {
      if (
        interceptedRequest.method() === 'GET' &&
        /api\/search\/v1\?/i.test(interceptedRequest.url())
      ) {
        const { searchParams } = new URL(interceptedRequest.url())
        expect(searchParams.get('version')).toBe('github-ae@latest')
        expect(searchParams.get('language')).toBe('en')
      }
      interceptedRequest.continue()
    })

    const searchInput = await newPage.$('[data-testid=site-search-input]')
    await searchInput.click()
    await searchInput.type('silly')
    await newPage.keyboard.press('Enter')
    await newPage.waitForSelector('[data-testid=search-results]')
  })
})

describe('iframe pages', () => {
  it('can open YouTube embed iframes', async () => {
    // Going to create a fresh page instance, so we can intercept the requests.
    const newPage = await browser.newPage()

    await newPage.setRequestInterception(true)
    const interceptedURLs = []
    newPage.on('request', (request) => {
      interceptedURLs.push(request.url())
      request.continue()
    })
    const failedURLs = []
    newPage.on('requestfailed', (request) => {
      failedURLs.push(request.url())
      request.continue()
    })

    // Hardcoded path to a page where we know we have a YouTube embed
    const res = await newPage.goto('http://localhost:4000/en/codespaces')

    expect(res.ok()).toBeTruthy()
    expect(failedURLs.length, `Following URLs ${failedURLs.join(', ')} failed`).toBeFalsy()

    const iframeSrc = await newPage.$eval('iframe', (el) => el.src)
    expect(iframeSrc.startsWith('https://www.youtube-nocookie.com/embed')).toBeTruthy()
    expect(
      interceptedURLs.filter((url) => url.startsWith('https://www.youtube-nocookie.com/')).length
    ).toBeTruthy()
  })
})

describe('REST sidebar', () => {
  req.context = {
    allVersions,
    currentLanguage: 'en',
  }

  it('Check REST categories and subcategories are rendering', async () => {
    // Get the titles from the content/rest directory to match the titles on the page
    const contentFiles = getCatAndSubCat('content/rest')
    const contentCheck = await createContentCheckDirectory(contentFiles)

    for (const version in allVersions) {
      // Get MapTopic level categories/subcategories for each version on /rest page
      const url = `/en/${version}/rest`
      const $ = await getDOM(url)

      const categories = []
      $('[data-testid=sidebar] [data-testid=rest-category]').each((i, el) => {
        categories[i] = $(el).text()
      })
      const browserUrl = `http://localhost:4000${url}`
      await page.goto(browserUrl)
      await page.setViewport({ width: 1024, height: 768 })
      await page.waitForSelector('[data-testid=rest-category] li div div span')

      await page.evaluate(() => {
        Array.from(
          document.querySelectorAll('[data-testid=rest-category] li div div span')
        ).forEach(async (element) => {
          if (element) element.click()
        })
      })

      const subcategories = await page.evaluate(() =>
        Array.from(document.querySelectorAll('[data-testid=rest-subcategory] li div div span')).map(
          (subCategory) => subCategory.textContent
        )
      )
      expect(contentCheck[version].cat.length).toBe(categories.length)
      expect(contentCheck[version].subcat.length).toBe(subcategories.length)

      categories.forEach((category) => {
        expect(contentCheck[version].cat).toContain(category)
      })

      subcategories.forEach((subcategory) => {
        expect(contentCheck[version].subcat).toContain(subcategory)
      })
    }
  })
})

// Recursively go through the content/rest directory and get all the absolute file names
function getCatAndSubCat(root) {
  const files = []
  for (const dirent of fs.readdirSync(root, { withFileTypes: true })) {
    const { name } = dirent
    const file = path.join(root, name)
    if (dirent.isDirectory()) {
      if (!(name === 'guides' || name === 'overview')) {
        files.push(...getCatAndSubCat(file))
      }
    } else if (
      !(
        name === 'README.md' ||
        file.includes('rest/index.md') ||
        file.includes('rest/quickstart.md')
      )
    ) {
      files.push(file)
    }
  }
  return files
}

// Create a ContentCheck object that has all the categories/subcategories and get the title from frontmatter
async function createContentCheckDirectory(contentFiles) {
  const contentCheck = Object.keys(allVersions).reduce((acc, val) => {
    return { ...acc, [val]: { cat: [], subcat: [] } }
  }, {})

  const renderOpts = { textOnly: true }

  for (const filename of contentFiles) {
    const { data } = frontmatter(await fs.promises.readFile(filename, 'utf8'))
    const applicableVersions = getApplicableVersions(data.versions, filename)
    const splitPath = filename.split('/')
    let category = ''
    let subCategory = ''

    if (splitPath[splitPath.length - 2] === 'rest') {
      category = data.title
    } else if (splitPath[splitPath.length - 3] === 'rest') {
      filename.includes('index.md')
        ? (category = data.shortTitle || data.title)
        : (subCategory = data.shortTitle || data.title)
    }
    for (const version of applicableVersions) {
      req.context.currentVersion = version

      if (category !== '')
        if (category.includes('{')) {
          await shortVersionsMiddleware(req, null, () => {})
          contentCheck[version].cat.push(
            await renderContent.liquid.parseAndRender(category, req.context, renderOpts)
          )
        } else {
          contentCheck[version].cat.push(category)
        }
      if (subCategory !== '')
        if (subCategory.includes('{')) {
          await shortVersionsMiddleware(req, null, () => {})
          contentCheck[version].subcat.push(
            await renderContent.liquid.parseAndRender(subCategory, req.context, renderOpts)
          )
        } else {
          contentCheck[version].subcat.push(subCategory)
        }
    }
  }
  return contentCheck
}

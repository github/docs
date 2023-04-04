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

describe('x-large viewports - 1280+', () => {
  jest.setTimeout(60 * 1000)
  it('in article breadcrumbs at xl viewport should remove last breadcrumb', async () => {
    await page.setViewport({ width: 1300, height: 700 })
    await page.goto(
      'http://localhost:4000/en/enterprise-cloud@latest/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise'
    )
    const breadcrumbsElement = await page.$$('[data-testid=breadcrumbs-in-article] ul li')
    const breadcrumbsMissingElement = await page.$$(
      '[data-testid=breadcrumbs-in-article] ul li .d-none'
    )
    expect(breadcrumbsMissingElement.length).toBe(1)
    expect(breadcrumbsElement.length).toBe(4)
  })
})

describe('large -> x-large viewports - 1012+', () => {
  jest.setTimeout(60 * 1000)
  it('version picker is visible in header', async () => {
    await page.setViewport({ width: 1013, height: 700 })
    await page.goto('http://localhost:4000/en/actions')
    await page.click('[data-testid=version-picker]')
    const versionItems = await page.$$('[data-testid=version-picker-item]')
    expect(versionItems.length).toBeGreaterThan(0)
  })

  it('language picker is visible in header', async () => {
    await page.goto('http://localhost:4000/en/actions')
    const languagePickerElement = await page.$$('[data-testid=language-picker]')
    expect(languagePickerElement.length).toBe(1)
  })

  it('sign up button is visible in header', async () => {
    const signUpElement = await page.$('[data-testid=header-signup]')
    const signUpValue = await signUpElement.evaluate((el) => el.textContent)
    expect(signUpValue).toBe('Sign up')
  })
})

describe('large viewports - 1012-1279', () => {
  jest.setTimeout(60 * 1000)
  it('hamburger button for sidebar overlay is visible', async () => {
    await page.setViewport({ width: 1013, height: 700 })
    await page.goto('http://localhost:4000/en/actions')
    await page.click('[data-testid=sidebar-hamburger]')
    const sidebarElement = await page.$('[data-testid=sidebar-product-dialog]')
    const sideBarValue = await sidebarElement.evaluate((el) => el.textContent)
    expect(sideBarValue).toBe('GitHub Actions')
  })

  it('breadcrumbs show up in the header', async () => {
    await page.goto(
      'http://localhost:4000/en/enterprise-cloud@latest/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise'
    )
    const breadcrumbsElement = await page.$$('[data-testid=breadcrumbs-header] ul li')
    const breadcrumbsMissingElement = await page.$$(
      '[data-testid=breadcrumbs-header] ul li .d-none'
    )
    expect(breadcrumbsMissingElement.length).toBe(0)
    expect(breadcrumbsElement.length).toBe(4)
  })
})

describe('medium viewports - 768-1011', () => {
  jest.setTimeout(60 * 1000)
  it('version picker is visible', async () => {
    await page.setViewport({ width: 1000, height: 700 })
    await page.goto('http://localhost:4000/ja/actions')
    await page.click('[data-testid=version-picker]')
    const versionItems = await page.$$('[data-testid=version-picker-item]')
    expect(versionItems.length).toBeGreaterThan(0)
  })

  it('language picker icon is in mobile menu', async () => {
    await page.goto('http://localhost:4000/en/actions')
    await page.click('[data-testid=mobile-menu]')
    await page.click('[data-testid=open-mobile-menu] [data-testid=language-picker]')
    const defaultLanguageElement = await page.$('[data-testid=default-language]')
    const languageValue = await defaultLanguageElement.evaluate((el) => el.textContent)
    expect(languageValue).toBe('English')
  })

  it('sign up button is in mobile menu', async () => {
    const signUpElement = await page.$('[data-testid=mobile-signup]')
    const signUpValue = await signUpElement.evaluate((el) => el.textContent)
    expect(signUpValue).toBe('Sign up')
  })

  it('hamburger button for sidebar overlay is visible', async () => {
    await page.click('[data-testid=sidebar-hamburger]')
    const sidebarElement = await page.$('[data-testid=sidebar-product-dialog]')
    const sideBarValue = await sidebarElement.evaluate((el) => el.textContent)
    expect(sideBarValue).toBe('GitHub Actions')
  })
})

describe('small -> x-small viewports - under 544 -> 767', () => {
  jest.setTimeout(60 * 1000)
  it('sign up button is not visible', async () => {
    await page.setViewport({ width: 500, height: 700 })
    await page.goto('http://localhost:4000/en/actions')
    const signUpElement = await page.$('[data-testid=header-signup] a')
    const classes = Object.values(await signUpElement.evaluate((el) => el.classList))
    expect(classes).toEqual(expect.arrayContaining(['d-none', 'd-lg-flex']))
  })

  it('language picker is not visible', async () => {
    const languagePickerElement = await page.$('[data-testid=language-picker]')
    const parentNode = await languagePickerElement.getProperty('parentNode')
    const classes = Object.values(await parentNode.evaluate((el) => el.classList))
    expect(classes).toEqual(expect.arrayContaining(['d-none', 'd-lg-flex']))
  })

  it('version picker is not visible', async () => {
    const hiddenElements = await page.evaluate(() => {
      const data = []
      const elements = document.getElementsByClassName('hide-sm')
      for (const element of elements)
        data.push(element.firstElementChild.getAttribute('data-testid'))

      return data
    })
    expect(hiddenElements).toEqual(['version-picker'])
  })

  it('version picker icon is in mobile menu', async () => {
    await page.click('[data-testid=mobile-menu]')
    await page.click('[data-testid=open-mobile-menu] [data-testid=version-picker]')
    const versionItems = await page.$$('[data-testid=version-picker-item]')
    expect(versionItems.length).toBeGreaterThan(0)
  })

  it('language picker icon is in mobile menu', async () => {
    await page.click('[data-testid=open-mobile-menu] [data-testid=language-picker]')
    const defaultLanguageElement = await page.$('[data-testid=default-language]')
    const languageValue = await defaultLanguageElement.evaluate((el) => el.textContent)
    expect(languageValue).toBe('English')
  })

  it('sign up button is in mobile menu', async () => {
    const signUpElement = await page.$('[data-testid=mobile-signup]')
    const signUpValue = await signUpElement.evaluate((el) => el.textContent)
    expect(signUpValue).toBe('Sign up')
  })

  it('hamburger button for sidebar overlay is visible', async () => {
    await page.click('[data-testid=sidebar-hamburger]')
    const sidebarElement = await page.$('[data-testid=sidebar-product-dialog]')
    const sideBarValue = await sidebarElement.evaluate((el) => el.textContent)
    expect(sideBarValue).toBe('GitHub Actions')
  })
})

describe('survey', () => {
  jest.setTimeout(3 * 60 * 1000)

  it('sends an event to /events when submitting form', async () => {
    // Visit a page that displays the prompt
    await page.goto(
      'http://localhost:4000/en/actions/getting-started-with-github-actions/about-github-actions'
    )

    // Track network requests
    await page.setRequestInterception(true)
    page.on('request', (request) => {
      // Ignore GET requests
      if (!/\/events$/.test(request.url())) return request.continue()
      expect(request.method()).toMatch(/POST|PUT/)
      request.respond({
        contentType: 'application/json',
        body: JSON.stringify({ id: 'abcd1234' }),
        status: 200,
      })
    })

    // When I click the "Yes" button
    await page.click('[data-testid=survey-form] [for=survey-yes]')
    // (sent a POST request to /events)
    // I see the request for my email
    await page.waitForSelector('[data-testid=survey-form] [type="email"]')

    // When I fill in my email and submit the form
    await page.type('[data-testid=survey-form] [type="email"]', 'test@example.com')

    await page.click('[data-testid=survey-form] [type="submit"]')
    // (sent a PUT request to /events/{id})
    // I see the feedback
    await page.waitForSelector('[data-testid=survey-end]')
  })
})

describe('tool specific content', () => {
  const pageWithSingleSwitcher =
    'http://localhost:4000/en/actions/managing-workflow-runs/manually-running-a-workflow'
  const pageWithoutSwitcher =
    'http://localhost:4000/en/billing/managing-billing-for-github-sponsors/about-billing-for-github-sponsors'
  const pageWithMultipleSwitcher =
    'http://localhost:4000/en/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects'

  it('should have a tool switcher if a tool switcher is included', async () => {
    await page.goto(pageWithSingleSwitcher)
    const nav = await page.$$('[data-testid="tool-picker"]')
    const switches = await page.$$('[data-testid="tool-picker"] div a')
    const selectedSwitch = await page.$$('[data-testid="tool-picker"] div a.PRC-selected')
    expect(nav).toHaveLength(1)
    expect(switches.length).toBeGreaterThan(1)
    expect(selectedSwitch).toHaveLength(1)
  })

  it('should NOT have a tool switcher if no tool switcher is included', async () => {
    await page.goto(pageWithoutSwitcher)
    const nav = await page.$$('[data-testid="tool-picker"]')
    const switches = await page.$$('[data-testid="tool-picker"] div a')
    const selectedSwitch = await page.$$('[data-testid="tool-picker"] div a.PRC-selected')
    expect(nav).toHaveLength(0)
    expect(switches).toHaveLength(0)
    expect(selectedSwitch).toHaveLength(0)
  })

  it('should use cli if no defaultTool is specified and if webui is not one of the tools', async () => {
    await page.goto(pageWithMultipleSwitcher)
    const selectedToolElement = await page.waitForSelector(
      '[data-testid="tool-picker"] div a.PRC-selected'
    )
    const selectedTool = await page.evaluate((el) => el.textContent, selectedToolElement)
    expect(selectedTool).toBe('GitHub CLI')
  })

  it('should use webui if no defaultTool is specified and if webui is one of the tools', async () => {
    await page.goto(pageWithSingleSwitcher)
    const selectedToolElement = await page.waitForSelector(
      '[data-testid="tool-picker"] div a.PRC-selected'
    )
    const selectedTool = await page.evaluate((el) => el.textContent, selectedToolElement)
    expect(selectedTool).toBe('Web browser')
  })

  it('should use the recorded user selection', async () => {
    // With no user data, the selected tool is GitHub.com
    await page.goto(pageWithSingleSwitcher)
    let selectedToolElement = await page.waitForSelector(
      '[data-testid="tool-picker"] div a.PRC-selected'
    )
    let selectedTool = await page.evaluate((el) => el.textContent, selectedToolElement)
    expect(selectedTool).toBe('Web browser')

    await page.click('[data-testid="tool-picker"] [data-tool="cli"]')

    // Revisiting the page after CLI is selected results in CLI as the selected tool
    await page.goto(pageWithSingleSwitcher)
    selectedToolElement = await page.waitForSelector(
      '[data-testid="tool-picker"] div a.PRC-selected'
    )
    selectedTool = await page.evaluate((el) => el.textContent, selectedToolElement)
    expect(selectedTool).toBe('GitHub CLI')
  })

  it('should show the content for the selected tool only', async () => {
    await page.goto(pageWithSingleSwitcher)

    const tools = ['webui', 'cli']
    for (const tool of tools) {
      await page.click(`[data-tool="${tool}"]`)

      // content for selected tool is expected to become visible
      await page.waitForSelector(`.extended-markdown.${tool}`, { visible: true, timeout: 3000 })

      // only a single tab should be selected
      const selectedSwitch = await page.$$('[data-testid="tool-picker"] div a.PRC-selected')
      expect(selectedSwitch).toHaveLength(1)

      // content for NOT selected tools is expected to become hidden
      const otherTools = tools.filter((e) => e !== tool)
      for (const other of otherTools) {
        await page.waitForSelector(`.extended-markdown.${other}`, { hidden: true, timeout: 3000 })
      }
    }
  })
})

describe('code examples', () => {
  it('loads correctly', async () => {
    await page.goto('http://localhost:4000/en/code-security')
    const shownCards = await page.$$('[data-testid=code-example-card]')
    const shownNoResult = await page.$('[data-testid=code-examples-no-results]')
    expect(shownCards.length).toBeGreaterThan(0)
    expect(shownNoResult).toBeNull()
  })

  it('filters cards', async () => {
    await page.goto('http://localhost:4000/en/code-security')
    await page.click('[data-testid=code-examples-input]')
    await page.type('[data-testid=code-examples-input]', 'policy')
    await page.click('[data-testid=code-examples-search-btn]')
    const shownCards = await page.$$('[data-testid=code-example-card]')
    expect(shownCards.length).toBeGreaterThan(1)
  })

  it('shows more cards', async () => {
    await page.goto('http://localhost:4000/en/code-security')
    const initialCards = await page.$$('[data-testid=code-example-card]')
    await page.click('[data-testid=code-examples-show-more]')
    const moreCards = await page.$$('[data-testid=code-example-card]')
    expect(moreCards.length).toBeGreaterThan(initialCards.length)
  })

  it('displays no result message', async () => {
    await page.goto('http://localhost:4000/en/code-security')
    await page.click('[data-testid=code-examples-input]')
    await page.type('[data-testid=code-examples-input]', 'this should not work')
    await page.click('[data-testid=code-examples-search-btn]')
    const shownCards = await page.$$('[data-testid=code-example-card]')
    expect(shownCards.length).toBe(0)
    const noResultsMessage = await page.$('[data-testid=code-examples-no-results]')
    expect(noResultsMessage).not.toBeNull()
  })
})

// Skipping because next/links are disabled by default for now
// Docs Engineering issue: 962
describe.skip('next/link client-side navigation', () => {
  jest.setTimeout(60 * 1000)

  it('should have 200 response to /_next/data when link is clicked', async () => {
    const initialViewport = page.viewport()
    await page.setViewport({ width: 1024, height: 768 })
    await page.goto('http://localhost:4000/en/actions/guides')

    const [response] = await Promise.all([
      page.waitForResponse((response) =>
        response.url().startsWith('http://localhost:4000/_next/data')
      ),
      page.waitForNavigation({ waitUntil: 'networkidle2' }),
      page.click(
        '[data-testid=sidebar-article-group]:nth-child(2) [data-testid=sidebar-article]:nth-child(1) a'
      ),
    ])

    expect(response.status()).toBe(200)
    await page.setViewport(initialViewport)
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
      // console.log('went ot the page')
      await page.waitForSelector('[data-testid=rest-category] li div div span')
      const restCategories = await page.$$('[data-testid=rest-category] li div div span')

      for (const cat of restCategories) {
        await page.evaluate(async (el) => {
          return el.click()
        }, cat)

        await page.waitForSelector('[data-testid=rest-subcategory]')
      }

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

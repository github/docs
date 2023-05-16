import { jest } from '@jest/globals'
import { oldestSupported } from '../../lib/enterprise-server-releases.js'

jest.useFakeTimers({ legacyFakeTimers: true })

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

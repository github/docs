import { jest } from '@jest/globals'

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
})

import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { turnOffExperimentsInPage, turnOnExperimentsInPage } from '../helpers/turn-off-experiments'

const SEARCH_TESTS = !!process.env.ELASTICSEARCH_URL

const pages: { [key: string]: string } = {
  category: '/actions/category',
  codeAnnotations: '/get-started/markdown/code-annotations',
  homepage: '/',
  learningPath:
    '/code-security/getting-started/quickstart?learn=foo_bar&learnProduct=code-security',
  mapAndTopic: '/actions/category/subcategory',
  procedural: '/get-started/images/images-in-lists',
  discoveryLanding: '/code-security',
  restCategory: '/rest/actions/artifacts',
  restLanding: '/rest',
  restOverview: '/rest/about-the-rest-api/comparing-githubs-rest-api-and-graphql-api',
  search: '/search?q=playwright',
  switchers: '/get-started/liquid/tool-platform-switcher',
  tableWithHeaders: '/get-started/liquid/table-row-headers',
}

// create a test for each page, will eventually be separated into finer grain tests
for (const pageName of Object.keys(pages)) {
  test.describe(`${pageName}`, () => {
    test('full page axe scan without experiments', async ({ page }) => {
      await page.goto(pages[pageName])

      await turnOffExperimentsInPage(page)

      const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

      expect(accessibilityScanResults.violations).toEqual([])
    })
  })

  test.describe(`${pageName} (with experiments)`, () => {
    test('full page axe scan with experiments', async ({ page }) => {
      await page.goto(pages[pageName])

      await turnOnExperimentsInPage(page)

      const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

      expect(accessibilityScanResults.violations).toEqual([])
    })
  })
}

// The search facet filters collapse behind a "Show filters" disclosure below
// Primer Brand's `medium` breakpoint. The scans above run at the default desktop
// viewport, where that disclosure is display:none, so the expanded panel would
// otherwise never be scanned.
test.describe('search filters (narrow viewport)', () => {
  // Without a local Elasticsearch the middleware proxies to production, so there are no
  // aggregations, the disclosure never renders, and this would time out rather than skip
  // — matching the guard every search test in playwright-rendering.spec.ts uses.
  test.skip(!SEARCH_TESTS, 'No local Elasticsearch, no tests involving search')

  test('expanded filter disclosure passes axe', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 820 })
    await page.goto('/search?query=foo')
    await turnOffExperimentsInPage(page)

    const toggle = page.getByTestId('search-filter-toggle')
    await expect(toggle).toBeVisible()
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await toggle.click()
    await expect(toggle).toHaveAttribute('aria-expanded', 'true')
    // Scoped to the disclosure's own panel: a bare `fieldset` locator would hit strict
    // mode the moment anything else on the page renders one.
    const panelId = await toggle.getAttribute('aria-controls')
    await expect(page.locator(`#${panelId} fieldset`)).toBeVisible()

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })
})

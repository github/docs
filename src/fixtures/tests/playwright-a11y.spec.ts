import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { turnOffExperimentsInPage, turnOnExperimentsInPage } from '../helpers/turn-off-experiments'

const SEARCH_TESTS = !!process.env.ELASTICSEARCH_URL

const pages: { [key: string]: string } = {
  category: '/actions/category',
  codeAnnotations: '/get-started/markdown/code-annotations',
  // This CTA fixture is the only page that covers the .btn-primary article-link override.
  // Its filled label can fall below 4.5:1 without the :not(.btn) exclusion in
  // src/frame/stylesheets/article-link-overrides.scss.
  ctaButton: '/get-started/foo/page-with-permissions-and-product-callout',
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

// The search facet filters collapse behind a Show filters disclosure below
// Primer Brand's medium breakpoint. The scans above run at the default desktop
// viewport, where that disclosure has display: none, so the expanded panel would
// otherwise never be scanned.
test.describe('search filters (narrow viewport)', () => {
  // Without local Elasticsearch, the production proxy returns no aggregations, so the disclosure never renders.
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
    // Scope to the panel, because other fieldsets would trigger Playwright strict mode.
    const panelId = await toggle.getAttribute('aria-controls')
    await expect(page.locator(`#${panelId} fieldset`)).toBeVisible()

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })
})

// The search overlay has never been axe-scanned: the `search` entry above covers the
// results page, and nothing opened the dialog. It is now a hand-rolled listbox with
// virtual focus, so its ARIA is worth asserting rather than assuming.
test.describe('search overlay', () => {
  test.skip(!SEARCH_TESTS, 'No local Elasticsearch, no tests involving search')

  test('open suggestions listbox passes axe', async ({ page }) => {
    await page.goto('/')
    await turnOffExperimentsInPage(page)

    await page.getByTestId('toggle-search').click()
    await page.getByTestId('overlay-search-input').fill('serve playwright')
    await expect(page.getByTestId('view-all-results')).toBeVisible()

    // Scoped to the dialog: the page behind the scrim has its own entry, and scanning
    // both would attribute unrelated violations to this component.
    const accessibilityScanResults = await new AxeBuilder({ page })
      .include('[role="dialog"]')
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('listbox with an option selected passes axe', async ({ page }) => {
    await page.goto('/')
    await turnOffExperimentsInPage(page)

    await page.getByTestId('toggle-search').click()
    const input = page.getByTestId('overlay-search-input')
    await input.fill('serve playwright')
    await expect(page.getByTestId('view-all-results')).toBeVisible()

    // aria-activedescendant only points at something once a row is selected, so the
    // unselected scan above cannot catch a broken reference.
    await page.keyboard.press('ArrowDown')
    await expect(input).toHaveAttribute('aria-activedescendant', /search-option-/)

    const accessibilityScanResults = await new AxeBuilder({ page })
      .include('[role="dialog"]')
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })
})

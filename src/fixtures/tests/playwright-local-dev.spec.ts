/**
 * These tests assume you have started the local dev server as a contributor
 * would. It does *not* use fixture data. It uses real English content
 * as seen in `main` or in the current branch. Therefore be careful
 * with what you can expect to find. Stick to known and stable content.
 *
 * It's always a risk that the content changes and can break tests
 * that exist to test the *code*. But these tests are ultimately there to
 * do what a human would do which is: Start the server, then open the
 * browser, then click around, then search, etc.
 *
 */

import { test, expect } from '@playwright/test'
import { dismissCTAPopover, turnOffExperimentsInPage } from '../helpers/turn-off-experiments'

const TEST_EARLY_ACCESS = Boolean(JSON.parse(process.env.TEST_EARLY_ACCESS || 'false'))

test('view home page', async ({ page }) => {
  await page.goto('/')
  await turnOffExperimentsInPage(page)
  await dismissCTAPopover(page)

  await expect(page).toHaveTitle(/GitHub Docs/)
})

test('click "Get started" from home page', async ({ page }) => {
  await page.goto('/')
  await turnOffExperimentsInPage(page)
  await dismissCTAPopover(page)

  await page.getByRole('link', { name: 'Get started' }).click()
  await expect(page).toHaveTitle(/Get started with GitHub/)
  await expect(page).toHaveURL(/\/en\/get-started/)
})

test('search "foo" and get results', async ({ page }) => {
  await page.goto('/')
  await turnOffExperimentsInPage(page)
  await dismissCTAPopover(page)

  await page.locator('[data-testid="search"]:visible').click()
  await page.getByTestId('overlay-search-input').fill('foo')
  // Wait for search results to load
  await page.waitForTimeout(1000)
  // Click "View more results" to get to the search page
  await page.getByText('View more results').click()
  await expect(page.getByRole('heading', { name: /\d+ Search results for "foo"/ })).toBeVisible()
})

test('view the early-access links page', async ({ page }) => {
  if (!TEST_EARLY_ACCESS) return

  await page.goto('/early-access')
  await turnOffExperimentsInPage(page)
  await dismissCTAPopover(page)

  await expect(page).toHaveURL(/\/en\/early-access/)
  await page.getByRole('heading', { name: 'Early Access documentation', level: 1 }).click()
  const links = await page.$$eval(
    '#article-contents ul li a',
    (elements: HTMLAnchorElement[]) => elements,
  )
  expect(links.length).toBeGreaterThan(0)
})

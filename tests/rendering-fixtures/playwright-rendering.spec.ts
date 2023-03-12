import dotenv from 'dotenv'
import { test, expect } from '@playwright/test'

// This exists for the benefit of local testing.
// In GitHub Actions, we rely on setting the environment variable directly
// but for convenience, for local development, engineers might have a
// .env file that can set environment variable. E.g. ELASTICSEARCH_URL.
// The `start-server.js` script uses dotenv too, but since Playwright
// tests only interface with the server via HTTP, we too need to find
// this out.
dotenv.config()

const SEARCH_TESTS = !!process.env.ELASTICSEARCH_URL

test('view home page', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/GitHub Documentation/)
})

test('view the for-playwright article', async ({ page }) => {
  await page.goto('/get-started/foo/for-playwright')
  await expect(page).toHaveTitle(/For Playwright - GitHub Docs/)

  // This is the right-hand sidebar mini-toc link
  await page.getByRole('link', { name: 'Second heading' }).click()
  await expect(page).toHaveURL(/for-playwright#second-heading/)
})

test('use sidebar to go to Hello World page', async ({ page }) => {
  await page.goto('/')

  await page.getByTestId('sidebar').getByRole('link', { name: 'Get started' }).click()
  await expect(page).toHaveTitle(/Getting started with HubGit/)

  await page.getByTestId('product-sidebar-items').getByText('Quickstart').click()
  await page.getByTestId('product-sidebar-items').getByRole('link', { name: 'Hello World' }).click()
  await expect(page).toHaveURL(/\/en\/get-started\/quickstart\/hello-world/)
  await expect(page).toHaveTitle(/Hello World - GitHub Docs/)
})

test('do a search from home page and click on "Foo" page', async ({ page }) => {
  test.skip(!SEARCH_TESTS, 'No local Elasticsearch, no tests involving search')

  await page.goto('/')
  await page.getByTestId('site-search-input').click()
  await page.getByTestId('site-search-input').fill('serve playwright')
  await page.getByRole('button', { name: 'Search' }).click()
  await expect(page).toHaveURL(/\/search\?query=serve\+playwright/)
  await expect(page).toHaveTitle(/\d Search results for "serve playwright"/)

  await page.getByRole('link', { name: 'For Playwright' }).click()

  await expect(page).toHaveURL(/\/get-started\/foo\/for-playwright$/)
  await expect(page).toHaveTitle(/For Playwright/)
})

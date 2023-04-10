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
  await expect(page).toHaveTitle(/GitHub Docs/)
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

  await page.getByTestId('product-sidebar').getByText('Quickstart').click()
  await page.getByTestId('product-sidebar').getByRole('link', { name: 'Hello World' }).click()
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

test.describe('platform picker', () => {
  test('switch operating systems', async ({ page }) => {
    await page.goto('/get-started/liquid/platform-specific')

    await page.getByTestId('platform-picker').getByRole('link', { name: 'Mac' }).click()
    await expect(page).toHaveURL(/\?platform=mac/)
    await expect(page.getByRole('heading', { name: /Macintosh/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Windows 95/ })).not.toBeVisible()

    await page.getByTestId('platform-picker').getByRole('link', { name: 'Windows' }).click()
    await expect(page).toHaveURL(/\?platform=windows/)
    await expect(page.getByRole('heading', { name: /Windows 95/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Macintosh/ })).not.toBeVisible()
  })

  test('remember last clicked OS', async ({ page }) => {
    await page.goto('/get-started/liquid/platform-specific')
    await page.getByTestId('platform-picker').getByRole('link', { name: 'Windows' }).click()

    // Return and now the cookie should start us off on Windows again
    await page.goto('/get-started/liquid/platform-specific')
    await expect(page.getByRole('heading', { name: /Windows 95/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Macintosh/ })).not.toBeVisible()
  })
})

test.describe('tool picker', () => {
  test('switch tools', async ({ page }) => {
    await page.goto('/get-started/liquid/tool-specific')

    await page.getByTestId('tool-picker').getByRole('link', { name: 'GitHub CLI' }).click()
    await expect(page).toHaveURL(/\?tool=cli/)
    await expect(page.getByText('this is cli content')).toBeVisible()
    await expect(page.getByText('this is webui content')).not.toBeVisible()

    await page.getByTestId('tool-picker').getByRole('link', { name: 'Web browser' }).click()
    await expect(page).toHaveURL(/\?tool=webui/)
    await expect(page.getByText('this is cli content')).not.toBeVisible()
    await expect(page.getByText('this is desktop content')).not.toBeVisible()
    await expect(page.getByText('this is webui content')).toBeVisible()
  })

  test('prefer default tool', async ({ page }) => {
    await page.goto('/get-started/liquid/tool-specific')

    // defaultTool is set in the fixture frontmatter
    await expect(page.getByText('this is desktop content')).toBeVisible()
    await expect(page.getByText('this is webui content')).not.toBeVisible()
    await expect(page.getByText('this is cli content')).not.toBeVisible()
  })

  test('remember last clicked tool', async ({ page }) => {
    await page.goto('/get-started/liquid/tool-specific')
    await page.getByTestId('tool-picker').getByRole('link', { name: 'Web browser' }).click()

    // Return and now the cookie should start us off with Web UI content again
    await page.goto('/get-started/liquid/tool-specific')
    await expect(page.getByText('this is cli content')).not.toBeVisible()
    await expect(page.getByText('this is desktop content')).not.toBeVisible()
    await expect(page.getByText('this is webui content')).toBeVisible()
  })
})

test('filter article cards', async ({ page }) => {
  await page.goto('/code-security/guides')
  const articleCards = page.getByTestId('article-cards')
  await expect(articleCards.getByText('Secure quickstart')).toBeVisible()
  await expect(articleCards.getByText('Securing your organization')).toBeVisible()

  // For both the type and topic dropdowns, with the Primer component we use it
  // ends creating a button to open the dropdowns so that's why we're clicking
  // a button here to expand the option items.

  // all the articles are displayed, filter by topic
  await page.getByTestId('card-filter-topics').getByRole('button', { name: 'All' }).click()
  await page.getByTestId('topics-dropdown').getByText('Organizations').click()
  await expect(articleCards.getByText('Secure quickstart')).not.toBeVisible()
  await expect(articleCards.getByText('Securing your organization')).toBeVisible()

  // now show all the articles again and then filter by type
  await page
    .getByTestId('card-filter-topics')
    .getByRole('button', { name: 'Organizations' })
    .click()
  await page.getByTestId('topics-dropdown').getByText('All').click()
  await page.getByTestId('card-filter-types').getByRole('button', { name: 'All' }).click()
  await page.getByTestId('types-dropdown').getByText('Quickstart').click()
  await expect(articleCards.getByText('Secure quickstart')).toBeVisible()
  await expect(articleCards.getByText('Securing your organization')).not.toBeVisible()
})

test('navigate with side bar into article inside a map-topic inside a category', async ({
  page,
}) => {
  // Our TreeView sidebar only shows "2 levels". If you click and expand
  // the category, you'll be able to see the map-topic and the article
  // within.
  await page.goto('/')
  await page.getByRole('link', { name: 'GitHub Actions' }).click()
  await page.getByTestId('sidebar').getByRole('treeitem', { name: 'Category' }).click()
  await page.getByText('Map & Topic').click()
  await page.getByRole('link', { name: '<article>' }).click()
  await expect(page.getByRole('heading', { name: 'Article title' })).toBeVisible()
  await expect(page).toHaveURL(/actions\/category\/map-topic\/article/)
})

test('code examples search', async ({ page }) => {
  await page.goto('/code-security')
  const codeExampleResults = page.getByTestId('code-example-results')

  // more results after clicking the 'Show more' button
  const initialResultsCount = (await codeExampleResults.getByRole('listitem').all()).length
  await page.getByTestId('code-examples-show-more').click()
  const showedMoreResultsCount = (await codeExampleResults.getByRole('listitem').all()).length
  expect(showedMoreResultsCount).toBeGreaterThan(initialResultsCount)

  // search for the 2 'policy' code examples
  await page.getByTestId('code-examples-input').click()
  await page.getByTestId('code-examples-input').fill('policy')
  await page.getByTestId('code-examples-search-btn').click()
  expect((await codeExampleResults.getByRole('listitem').all()).length).toBe(2)
  await expect(codeExampleResults.getByText('Microsoft security policy template')).toBeVisible()
  await expect(codeExampleResults.getByText('Electron security policy')).toBeVisible()

  // what happens when there's no search results
  await page.getByTestId('code-examples-input').click()
  await page.getByTestId('code-examples-input').fill('should be no results')
  await page.getByTestId('code-examples-search-btn').click()
  await expect(page.locator('#code-examples').getByText('Matches displayed: 0')).toBeVisible()
  await expect(
    page.locator('#code-examples').getByText('Sorry, there is no result for should be no results')
  ).toBeVisible()
})

test('hovercards', async ({ page }) => {
  await page.goto('/pages/quickstart')

  // hover over a link and check for intro content from hovercard
  await page.locator('#article-contents').getByRole('link', { name: 'Quickstart' }).hover()
  await expect(
    page.getByText(
      'Get started using GitHub to manage Git repositories and collaborate with others.'
    )
  ).toBeVisible()

  // now move the mouse away from hovering over the link, the hovercard should
  // no longer be visible
  await page.mouse.move(0, 0)
  await expect(
    page.getByText(
      'Get started using GitHub to manage Git repositories and collaborate with others.'
    )
  ).not.toBeVisible()

  // external links don't have a hovercard
  await page.getByRole('link', { name: 'github.com/github/docs' }).hover()
  await expect(page.getByTestId('popover')).not.toBeVisible()

  // links in the main navigation sidebar don't have a hovercard
  await page.getByTestId('sidebar').getByRole('link', { name: 'Quickstart' }).hover()
  await expect(page.getByTestId('popover')).not.toBeVisible()

  // links in the secondary minitoc sidebar don't have a hovercard
  await page.getByRole('link', { name: 'Internal link' }).hover()
  await expect(page.getByTestId('popover')).not.toBeVisible()

  // links in the article intro have a hovercard
  await page.locator('#article-intro').getByRole('link', { name: 'article intro link' }).hover()
  await expect(page.getByText('You can use GitHub Pages to showcase')).toBeVisible()

  // same page anchor links have a hovercard
  await page.locator('#article-contents').getByRole('link', { name: 'introduction' }).hover()
  await expect(page.getByText('You can use GitHub Pages to showcase')).toBeVisible()
})

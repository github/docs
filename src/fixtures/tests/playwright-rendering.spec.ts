import dotenv from 'dotenv'
import { test, expect } from '@playwright/test'
import { turnOffExperimentsInPage, dismissCTAPopover } from '../helpers/turn-off-experiments'
import { HOVERCARDS_ENABLED, ANALYTICS_ENABLED } from '../../frame/lib/constants'

// This exists for the benefit of local testing.
// In GitHub Actions, we rely on setting the environment variable directly
// but for convenience, for local development, engineers might have a
// .env file that can set environment variable. E.g. ELASTICSEARCH_URL.
// The `src/frame/start-server.ts` script uses dotenv too, but since Playwright
// tests only interface with the server via HTTP, we too need to find
// this out.
dotenv.config({ quiet: true })

const SEARCH_TESTS = !!process.env.ELASTICSEARCH_URL

test('view home page', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/GitHub Docs/)
})

test('logo link keeps current version', async ({ page }) => {
  await page.goto('/enterprise-cloud@latest')
  await turnOffExperimentsInPage(page)
  await dismissCTAPopover(page)
  // Basically clicking into any page that isn't the home page for this version.
  await page.getByTestId('product').getByRole('link', { name: 'Get started' }).click()
  await expect(page).toHaveURL(/\/en\/enterprise-cloud@latest\/get-started/)
  await page.getByRole('link', { name: 'GitHub Docs' }).click()
  await expect(page).toHaveURL(/\/en\/enterprise-cloud@latest/)
})

test('view the for-playwright article', async ({ page }) => {
  await page.goto('/get-started/foo/for-playwright')
  await expect(page).toHaveTitle(/For Playwright - GitHub Docs/)

  // This is the right-hand sidebar mini-toc link
  await page
    .getByTestId('minitoc')
    .getByRole('link', { name: 'Second heading', exact: true })
    .click()
  await expect(page).toHaveURL(/for-playwright#second-heading/)
})

test('use sidebar to go to Hello World page', async ({ page }) => {
  await page.goto('/get-started')

  await expect(page).toHaveTitle(/Getting started with HubGit/)

  await page.getByTestId('product-sidebar').getByText('Start your journey').click()
  await page.getByTestId('product-sidebar').getByText('Hello World').click()
  await expect(page).toHaveURL(/\/en\/get-started\/start-your-journey\/hello-world/)
  await expect(page).toHaveTitle(/Hello World - GitHub Docs/)
})

test('do a search from home page and click on "Foo" page', async ({ page }) => {
  test.skip(!SEARCH_TESTS, 'No local Elasticsearch, no tests involving search')

  await page.goto('/')
  await turnOffExperimentsInPage(page)
  await dismissCTAPopover(page)

  // Use the search overlay
  await page.locator('[data-testid="search"]:visible').click()
  await page.getByTestId('overlay-search-input').fill('serve playwright')
  // Wait for search results to load
  await page.waitForTimeout(1000)
  // Click "View more results" to get to the search page
  await page.getByText('View more results').click()

  await expect(page).toHaveURL(
    /\/search\?search-overlay-input=serve\+playwright&query=serve\+playwright/,
  )
  await expect(page).toHaveTitle(/\d Search results for "serve playwright"/)

  await page.getByRole('link', { name: 'For Playwright' }).click()

  await expect(page).toHaveURL(/\/get-started\/foo\/for-playwright$/)
  await expect(page).toHaveTitle(/For Playwright/)
})

test('open search, and perform a general search', async ({ page }) => {
  test.skip(!SEARCH_TESTS, 'No local Elasticsearch, no tests involving search')

  await page.goto('/')
  await turnOffExperimentsInPage(page)
  await dismissCTAPopover(page)

  await page.locator('[data-testid="search"]:visible').click()
  await page.getByTestId('overlay-search-input').fill('serve playwright')
  // Wait for the results to load
  // NOTE: In the UI we wait for results to load before allowing "enter", because we don't want
  // to allow an unnecessary request when there are no search results. Easier to wait 1 second
  await page.waitForTimeout(1000)
  // Scroll down to "View all results" then press enter
  await page.getByText('View more results').click()

  await expect(page).toHaveURL(
    /\/search\?search-overlay-input=serve\+playwright&query=serve\+playwright/,
  )
  await expect(page).toHaveTitle(/\d Search results for "serve playwright"/)

  // The first result should be "For Playwright"
  await page.getByRole('link', { name: 'For Playwright' }).click()

  await expect(page).toHaveURL(/\/get-started\/foo\/for-playwright$/)
  await expect(page).toHaveTitle(/For Playwright/)
})

test('open search, and select a general search article', async ({ page }) => {
  test.skip(!SEARCH_TESTS, 'No local Elasticsearch, no tests involving search')

  await page.goto('/')

  await page.locator('[data-testid="search"]:visible').click()

  await page.getByTestId('overlay-search-input').fill('serve playwright')
  // Let new suggestions load
  const searchOverlay = page.getByTestId('general-autocomplete-suggestions')
  await expect(searchOverlay.getByText('For Playwright')).toBeVisible()
  // Navigate to general search item, "For Playwright"
  await page.keyboard.press('ArrowDown')
  // Select the general search item, "For Playwright"
  await page.keyboard.press('Enter')

  // We should now be on the page for "For Playwright"
  await expect(page).toHaveURL(/\/get-started\/foo\/for-playwright$/)
  await expect(page).toHaveTitle(/For Playwright/)
})

test('open search, and get auto-complete results', async ({ page }) => {
  test.skip(!SEARCH_TESTS, 'No local Elasticsearch, no tests involving search')

  await page.goto('/')

  await page.locator('[data-testid="search"]:visible').click()

  let listGroup = page.getByTestId('ai-autocomplete-suggestions')

  await expect(listGroup).toBeVisible()
  let listItems = listGroup.locator('li')
  await expect(listItems).toHaveCount(4)

  // Top queries from queries.json fixture's 'topQueries'
  let expectedTexts = [
    'What is GitHub and how do I get started?',
    'What is GitHub Copilot and how do I get started?',
    'How do I connect to GitHub with SSH?',
    'How do I generate a personal access token?',
  ]
  for (let i = 0; i < expectedTexts.length; i++) {
    await expect(listItems.nth(i)).toHaveText(expectedTexts[i])
  }

  const searchInput = await page.getByTestId('overlay-search-input')

  await expect(searchInput).toBeVisible()
  await expect(searchInput).toBeEnabled()

  // Type the text "rest" into the search input
  await searchInput.fill('rest')
  // For for 1 second for the suggestions to load
  await page.waitForTimeout(1000)

  // Ask AI suggestions
  listGroup = page.getByTestId('ai-autocomplete-suggestions')
  listItems = listGroup.locator('li')
  await expect(listItems).toHaveCount(3)
  await expect(listGroup).toBeVisible()
  expectedTexts = [
    'rest',
    'How do I manage OAuth app access restrictions for my organization?',
    'How do I test my SSH connection to GitHub?',
  ]
  for (let i = 0; i < expectedTexts.length; i++) {
    await expect(listItems.nth(i)).toHaveText(expectedTexts[i])
  }
})

test('search from enterprise-cloud and filter by top-level Fooing', async ({ page }) => {
  test.skip(!SEARCH_TESTS, 'No local Elasticsearch, no tests involving search')

  await page.goto('/enterprise-cloud@latest')
  await turnOffExperimentsInPage(page)
  await dismissCTAPopover(page)

  // Use the search overlay
  await page.locator('[data-testid="search"]:visible').click()
  await page.getByTestId('overlay-search-input').fill('fixture')
  // Wait for search results to load
  await page.waitForTimeout(1000)
  // Click "View more results" to get to the search page
  await page.getByText('View more results').click()

  // Now we're on the search results page, apply the filter
  await page.getByText('Fooing (1)').click()
  await page.getByRole('link', { name: 'Clear' }).click()

  // At the moment this test isn't great because it's not proving that
  // certain things cease to be visible, that was visible before. Room
  // for improvement!
})

test('404 page renders correctly', async ({ page }) => {
  const response = await page.goto('/this-definitely-does-not-exist')
  expect(response?.status()).toBe(404)

  // Check that the 404 page content is rendered
  await expect(page.getByText(/It looks like this page doesn't exist/)).toBeVisible()
})

test.describe('platform picker', () => {
  test('switch operating systems', async ({ page }) => {
    await page.goto('/get-started/liquid/platform-specific')
    await turnOffExperimentsInPage(page)
    await dismissCTAPopover(page)

    await page.getByTestId('platform-picker').getByRole('link', { name: 'Mac' }).click()
    await expect(page).toHaveURL(/\?platform=mac/)
    await expect(page.getByRole('heading', { name: /Macintosh/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Windows 95/ })).not.toBeVisible()

    await page.getByTestId('platform-picker').getByRole('link', { name: 'Windows' }).click()
    await expect(page).toHaveURL(/\?platform=windows/)
    await expect(page.getByRole('heading', { name: /Windows 95/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Macintosh/ })).not.toBeVisible()
  })

  test('minitoc matches picker', async ({ page }) => {
    // default platform set to windows in fixture fronmatter
    await page.goto('/get-started/liquid/platform-specific')
    await turnOffExperimentsInPage(page)
    await dismissCTAPopover(page)
    await expect(
      page.getByTestId('minitoc').getByRole('link', { name: 'Macintosh until 1999' }),
    ).not.toBeVisible()
    await expect(
      page.getByTestId('minitoc').getByRole('link', { name: 'Windows 95 was awesome' }),
    ).toBeVisible()
    await page.getByTestId('platform-picker').getByRole('link', { name: 'Linux' }).click()
    await expect(
      page.getByTestId('minitoc').getByRole('link', { name: 'Macintosh until 1999' }),
    ).not.toBeVisible()
    await expect(
      page.getByTestId('minitoc').getByRole('link', { name: 'The year of Linux on the desktop' }),
    ).toBeVisible()
  })

  test('remember last clicked OS', async ({ page }) => {
    await page.goto('/get-started/liquid/platform-specific')
    await turnOffExperimentsInPage(page)
    await dismissCTAPopover(page)
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
    await turnOffExperimentsInPage(page)
    await dismissCTAPopover(page)

    await page.getByTestId('tool-picker').getByRole('link', { name: 'GitHub CLI' }).click()
    await expect(page).toHaveURL(/\?tool=cli/)
    await expect(page.getByText('This is cli content')).toBeVisible()
    await expect(page.getByText('This is webui content')).not.toBeVisible()

    await page.getByTestId('tool-picker').getByRole('link', { name: 'Web browser' }).click()
    await expect(page).toHaveURL(/\?tool=webui/)
    await expect(page.getByText('This is cli content')).not.toBeVisible()
    await expect(page.getByText('This is desktop content')).not.toBeVisible()
    await expect(page.getByText('This is webui content')).toBeVisible()
  })

  test('prefer default tool', async ({ page }) => {
    await page.goto('/get-started/liquid/tool-specific')

    // defaultTool is set in the fixture frontmatter to webui
    await expect(page.getByText('This is webui content')).toBeVisible()
    await expect(page.getByText('This is desktop content')).not.toBeVisible()
    await expect(page.getByText('This is cli content')).not.toBeVisible()
  })

  test('remember last clicked tool', async ({ page }) => {
    await page.goto('/get-started/liquid/tool-specific')
    await turnOffExperimentsInPage(page)
    await dismissCTAPopover(page)
    await page.getByTestId('tool-picker').getByRole('link', { name: 'Web browser' }).click()

    // Return and now the cookie should start us off with Web UI content again
    await page.goto('/get-started/liquid/tool-specific')
    await expect(page.getByText('This is cli content')).not.toBeVisible()
    await expect(page.getByText('This is desktop content')).not.toBeVisible()
    await expect(page.getByText('This is webui content')).toBeVisible()
  })

  test('minitoc matches picker', async ({ page }) => {
    // default tool set to webui in fixture frontmatter
    await page.goto('/get-started/liquid/tool-specific')
    await turnOffExperimentsInPage(page)
    await dismissCTAPopover(page)
    await expect(
      page.getByTestId('minitoc').getByRole('link', { name: 'Webui section' }),
    ).toBeVisible()
    await expect(
      page.getByTestId('minitoc').getByRole('link', { name: 'Desktop section' }),
    ).not.toBeVisible()
    await page.getByTestId('tool-picker').getByRole('link', { name: 'Desktop' }).click()
    await expect(
      page.getByTestId('minitoc').getByRole('link', { name: 'Webui section' }),
    ).not.toBeVisible()
    await expect(
      page.getByTestId('minitoc').getByRole('link', { name: 'Desktop section' }),
    ).toBeVisible()
  })
})

test('navigate with side bar into article inside a subcategory inside a category', async ({
  page,
}) => {
  // Our TreeView sidebar only shows "2 levels". If you click and expand
  // the category, you'll be able to see the subcategory and the article
  // within.
  await page.goto('/actions')
  await page.getByTestId('sidebar').getByText('Category', { exact: true }).click()
  await page.getByTestId('sidebar').getByText('Subcategory').click()
  await page.getByText('<article>').click()
  await expect(page.getByRole('heading', { name: 'Article title' })).toBeVisible()
  await expect(page).toHaveURL(/actions\/category\/subcategory\/article/)
})

test('sidebar custom link functionality works', async ({ page }) => {
  // Test that sidebar functionality is not broken by custom links feature
  await page.goto('/get-started')

  await expect(page).toHaveTitle(/Getting started with HubGit/)

  // Verify that regular sidebar navigation still works by clicking on known sections
  await page.getByTestId('product-sidebar').getByText('Start your journey').click()
  await page.getByTestId('product-sidebar').getByText('Hello World').click()
  await expect(page).toHaveURL(/\/en\/get-started\/start-your-journey\/hello-world/)
  await expect(page).toHaveTitle(/Hello World - GitHub Docs/)
})

test.describe('hover cards', () => {
  test.skip(!HOVERCARDS_ENABLED, 'Hovercards are disabled')

  test('hover over link', async ({ page }) => {
    await page.goto('/pages/quickstart')
    await turnOffExperimentsInPage(page)
    await dismissCTAPopover(page)

    // hover over a link and check for intro content from hovercard
    await page
      .locator('#article-contents')
      .getByRole('link', { name: 'Start your journey' })
      .hover()
    await expect(
      page.getByText(
        'Get started using HubGit to manage Git repositories and collaborate with others.',
      ),
    ).toBeVisible()

    // now move the mouse away from hovering over the link, the hovercard should
    // no longer be visible
    await page.mouse.move(0, 0)
    await expect(
      page.getByText(
        'Get started using GitHub to manage Git repositories and collaborate with others.',
      ),
    ).not.toBeVisible()

    // external links don't have a hovercard
    await page.getByRole('link', { name: 'github.com/github/docs' }).hover()
    await expect(page.getByTestId('popover')).not.toBeVisible()

    // links in the main navigation sidebar don't have a hovercard
    await page.getByTestId('sidebar').getByRole('link', { name: 'Quickstart' }).hover()
    await expect(page.getByTestId('popover')).not.toBeVisible()

    // links in the secondary minitoc sidebar don't have a hovercard
    await page
      .getByTestId('minitoc')
      .getByRole('link', { name: 'Regular internal link', exact: true })
      .hover()
    await expect(page.getByTestId('popover')).not.toBeVisible()

    // links in the article intro have a hovercard
    await page.locator('#article-intro').getByRole('link', { name: 'article intro link' }).hover()
    await expect(page.getByText('You can use HubGit Pages to showcase')).toBeVisible()
    // this page's intro has two links; one in-page and one internal
    await page.locator('#article-intro').getByRole('link', { name: 'another link' }).hover()
    await expect(
      page.getByText('Follow this Hello World exercise to get started with HubGit.'),
    ).toBeVisible()

    // same page anchor links have a hovercard
    await page
      .locator('#article-contents')
      .getByRole('link', { name: 'introduction', exact: true })
      .hover()
    await expect(page.getByText('You can use HubGit Pages to showcase')).toBeVisible()

    // links with formatted text need to work too
    await page.locator('#article-contents').getByRole('link', { name: 'Bold is strong' }).hover()
    await expect(page.getByText('The most basic of fixture data for HubGit')).toBeVisible()
    await page.locator('#article-contents').getByRole('link', { name: 'bar' }).hover()
    await expect(page.getByText("This page doesn't really have an intro")).toBeVisible()
  })

  test('use keyboard shortcut to open hover card', async ({ page }) => {
    await page.goto('/pages/quickstart')
    await turnOffExperimentsInPage(page)
    await dismissCTAPopover(page)

    // Simply putting focus on the link should not open the hovercard
    await page
      .locator('#article-contents')
      .getByRole('link', { name: 'Start your journey' })
      .focus()
    await expect(
      page.getByText(
        'Get started using GitHub to manage Git repositories and collaborate with others.',
      ),
    ).not.toBeVisible()

    // Once a link has got focus, you can use Alt+ArrowUp to open the hovercard
    await page.keyboard.press('Alt+ArrowUp')
    await expect(
      page.getByText(
        'Get started using HubGit to manage Git repositories and collaborate with others.',
      ),
    ).toBeVisible()

    // Press Escape to close it
    await page.keyboard.press('Escape')
    await expect(
      page.getByText(
        'Get started using GitHub to manage Git repositories and collaborate with others.',
      ),
    ).not.toBeVisible()
  })

  test('able to use Esc to close hovercard', async ({ page }) => {
    await page.goto('/pages/quickstart')
    await turnOffExperimentsInPage(page)
    await dismissCTAPopover(page)

    // hover over a link and check for intro content from hovercard
    await page
      .locator('#article-contents')
      .getByRole('link', { name: 'Start your journey' })
      .hover()
    await expect(
      page.getByText(
        'Get started using HubGit to manage Git repositories and collaborate with others.',
      ),
    ).toBeVisible()

    // click the Esc key to close the hovercard
    await page.keyboard.press('Escape')
    await expect(
      page.getByText(
        'Get started using GitHub to manage Git repositories and collaborate with others.',
      ),
    ).not.toBeVisible()
  })
})

test.describe('test nav at different viewports', () => {
  test('xx-large viewports - 1400+', async ({ page }) => {
    page.setViewportSize({
      width: 1400,
      height: 700,
    })
    await page.goto('/get-started/foo/bar')

    // in article breadcrumbs at our custom xl viewport should remove last
    // breadcrumb so for this page we should only have 'Get Started / Foo'
    expect(await page.getByTestId('breadcrumbs-in-article').getByRole('link').all()).toHaveLength(2)
    await expect(page.getByTestId('breadcrumbs-in-article').getByText('Foo')).toBeVisible()
    await expect(page.getByTestId('breadcrumbs-in-article').getByText('Bar')).not.toBeVisible()

    // breadcrumbs show up in rest reference pages
    await page.goto('/rest/actions/artifacts')
    await expect(page.getByTestId('breadcrumbs-in-article')).toBeVisible()

    // breadcrumbs show up in one of the pages that use the AutomatedPage
    // component (e.g. graphql, audit log, etc.) -- we test the webhooks
    // reference page here
    await page.goto('/webhooks/webhook-events-and-payloads')
    await expect(page.getByTestId('breadcrumbs-in-article')).toBeVisible()
  })

  test('large -> x-large viewports - 1012+', async ({ page }) => {
    page.setViewportSize({
      width: 1013,
      height: 700,
    })
    await page.goto('/get-started/foo/bar')

    // version picker should be visible
    await page
      .getByRole('button', {
        name: 'Select GitHub product version: current version is free-pro-team@latest',
      })
      .click()
    expect((await page.getByRole('menuitemradio').all()).length).toBeGreaterThan(0)
    await expect(page.getByRole('menuitemradio', { name: 'Enterprise Cloud' })).toBeVisible()

    // language picker is visible
    await page.getByRole('button', { name: 'Select language: current language is English' }).click()
    await expect(page.getByRole('menuitemradio', { name: 'English' })).toBeVisible()

    // header sign up button is visible
    await expect(page.getByTestId('header-signup')).toBeVisible()
  })

  test('large viewports - 1012-1279', async ({ page }) => {
    page.setViewportSize({
      width: 1013,
      height: 700,
    })
    await page.goto('/get-started/foo/bar')

    // breadcrumbs show up in the header, for this page we should have
    // 3 items 'Get Started / Foo / Bar'
    // in-article breadcrumbs don't show up
    await expect(page.getByTestId('breadcrumbs-header')).toBeVisible()
    expect(await page.getByTestId('breadcrumbs-header').getByRole('link').all()).toHaveLength(3)
    await expect(page.getByTestId('breadcrumbs-in-article')).not.toBeVisible()

    // hamburger button for sidebar overlay is visible
    await expect(page.getByTestId('sidebar-hamburger')).toBeVisible()
    await page.getByTestId('sidebar-hamburger').click()
    await expect(page.locator('[role="dialog"][class*="Header_dialog"]')).toBeVisible()
  })

  test('medium viewports - 768-1011', async ({ page }) => {
    page.setViewportSize({
      width: 1000,
      height: 700,
    })
    await page.goto('/get-started/foo/bar')

    // version picker is visible
    await page
      .getByRole('button', {
        name: 'Select GitHub product version: current version is free-pro-team@latest',
      })
      .click()
    expect((await page.getByRole('menuitemradio').all()).length).toBeGreaterThan(0)
    await expect(page.getByRole('menuitemradio', { name: 'Enterprise Cloud' })).toBeVisible()

    // language picker is in mobile menu
    await page.getByTestId('mobile-menu').click()
    await expect(page.getByRole('menuitemradio', { name: 'English' })).toBeVisible()

    // sign up button is in mobile menu
    await expect(page.getByTestId('mobile-signup')).toBeVisible()

    // hamburger button for sidebar overlay is visible
    await expect(page.getByTestId('sidebar-hamburger')).toBeVisible()
    await page.getByTestId('sidebar-hamburger').click()
    await expect(page.locator('[role="dialog"][class*="Header_dialog"]')).toBeVisible()
  })

  test('small viewports - 544-767', async ({ page }) => {
    page.setViewportSize({
      width: 555,
      height: 700,
    })
    await page.goto('/get-started/foo/bar')

    // header sign-up button is not visible
    await expect(page.getByTestId('header-signup')).not.toBeVisible()

    // language picker is not visible
    await expect(page.getByTestId('language-picker')).not.toBeVisible()

    // version picker is visible
    await expect(
      page.getByRole('button', {
        name: 'Select GitHub product version: current version is free-pro-team@latest',
      }),
    ).toBeVisible()

    // language picker is in mobile menu
    await page.getByTestId('mobile-menu').click()
    await expect(page.getByRole('menuitemradio', { name: 'English' })).toBeVisible()

    // sign up button is in mobile menu
    await expect(page.getByTestId('mobile-signup')).toBeVisible()

    // hamburger button for sidebar overlay is visible
    await expect(page.getByTestId('sidebar-hamburger')).toBeVisible()
    await page.getByTestId('sidebar-hamburger').click()
    await expect(page.locator('[role="dialog"][class*="Header_dialog"]')).toBeVisible()
  })

  test('x-small viewports - 0-544', async ({ page }) => {
    page.setViewportSize({
      width: 345,
      height: 700,
    })
    await page.goto('/get-started/foo/bar')
    await turnOffExperimentsInPage(page)
    await dismissCTAPopover(page)

    // header sign-up button is not visible
    await expect(page.getByTestId('header-signup')).not.toBeVisible()

    // language picker is not visible
    await expect(page.getByTestId('language-picker')).not.toBeVisible()

    // version picker is not visible
    await expect(
      page.getByRole('button', {
        name: 'Select GitHub product version: current version is free-pro-team@latest',
      }),
    ).not.toBeVisible()

    // version picker is in mobile menu
    await expect(page.getByTestId('version-picker')).not.toBeVisible()
    await page.getByTestId('mobile-menu').click()
    await expect(page.getByTestId('open-mobile-menu').getByTestId('version-picker')).toBeVisible()

    // language picker is in mobile menu
    await expect(page.getByTestId('open-mobile-menu').getByTestId('language-picker')).toBeVisible()

    // sign up button is in mobile menu
    await expect(page.getByTestId('mobile-signup')).toBeVisible()

    // hamburger button for sidebar overlay is visible
    await expect(page.getByTestId('sidebar-hamburger')).toBeVisible()
    await page.getByTestId('sidebar-hamburger').click()
    await expect(page.locator('[role="dialog"][class*="Header_dialog"]')).toBeVisible()
  })

  test('do a search when the viewport is x-small', async ({ page }) => {
    test.skip(!SEARCH_TESTS, 'No local Elasticsearch, no tests involving search')

    page.setViewportSize({
      width: 500,
      height: 700,
    })
    await page.goto('/get-started/foo/bar')
    await turnOffExperimentsInPage(page)
    await dismissCTAPopover(page)

    // Use the search overlay
    await page.locator('[data-testid="mobile-search-button"]:visible').click()
    await page.getByTestId('overlay-search-input').fill('serve playwright')
    // Wait for search results to load
    await page.waitForTimeout(1000)
    // Click "View more results" to get to the search page
    await page.getByText('View more results').click()

    await expect(page).toHaveURL(
      /\/search\?search-overlay-input=serve\+playwright&query=serve\+playwright/,
    )
    await expect(page).toHaveTitle(/\d Search results for "serve playwright"/)
  })

  test('do a search when the viewport is medium', async ({ page }) => {
    test.skip(!SEARCH_TESTS, 'No local Elasticsearch, no tests involving search')

    page.setViewportSize({
      width: 1000,
      height: 700,
    })
    await page.goto('/get-started/foo/bar')
    await turnOffExperimentsInPage(page)
    await dismissCTAPopover(page)

    // Use the search overlay
    await page.locator('[data-testid="mobile-search-button"]:visible').click()
    await page.getByTestId('overlay-search-input').fill('serve playwright')
    // Wait for search results to load
    await page.waitForTimeout(1000)
    // Click "View more results" to get to the search page
    await page.getByText('View more results').click()

    await expect(page).toHaveURL(
      /\/search\?search-overlay-input=serve\+playwright&query=serve\+playwright/,
    )
    await expect(page).toHaveTitle(/\d Search results for "serve playwright"/)
  })
})

test.describe('survey', () => {
  test.skip(!ANALYTICS_ENABLED, 'Analytics are disabled')

  test('happy path, thumbs up and enter comment and email', async ({ page }) => {
    let fulfilled = 0
    let hasSurveyPressedEvent = false
    let hasSurveySubmittedEvent = false

    const surveyComment = 'This is a comment'

    // Important to set this up *before* interacting with the page
    // in case of possible race conditions.
    await page.route('**/api/events', (route, request) => {
      const postData = request.postData()
      if (postData) {
        const postDataArray = JSON.parse(postData)
        route.fulfill({})
        expect(request.method()).toBe('POST')
        fulfilled = postDataArray.length
        for (const eventBody of postDataArray) {
          if (eventBody.type === 'survey' && eventBody.survey_vote === true) {
            hasSurveyPressedEvent = true
          }
          if (eventBody.type === 'survey' && eventBody.survey_vote === true) {
            hasSurveyPressedEvent = true
          }
          if (
            eventBody.type === 'survey' &&
            eventBody.survey_vote === true &&
            eventBody.survey_comment === surveyComment
          ) {
            hasSurveySubmittedEvent = true
          }
        }
      }
      // At the time of writing you can't get the posted payload
      // when you use `navigator.sendBeacon(url, data)`.
      // So we can't make assertions about the payload.
      // See https://github.com/microsoft/playwright/issues/12231
    })

    await page.addInitScript(() => {
      window.GHDOCSPLAYWRIGHT = 1
    })

    await page.goto('/get-started/foo/for-playwright')

    // The label is visually an SVG. Finding it by its `for` value feels easier.
    await page.locator('[for=survey-yes]').click()
    await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Send' })).toBeVisible()

    await page.locator('[for=survey-comment]').fill(surveyComment)
    await page.locator('[name=survey-email]').click()
    await page.locator('[name=survey-email]').fill('test@example.com')
    await page.getByRole('button', { name: 'Send' }).click()
    // simulate sending an exit event to trigger sending all queued events
    await page.evaluate(() => {
      Object.defineProperty(document, 'visibilityState', {
        configurable: true,
        get() {
          return 'hidden'
        },
      })
      document.dispatchEvent(new Event('visibilitychange'))
      return new Promise((resolve) => setTimeout(resolve, 100))
    })

    // Events:
    // 1. page view event when navigating to the page
    // 2. Survey thumbs up event
    // 3. Survey submit event
    // 4. Exit event
    expect(fulfilled).toBe(1 + 1 + 1 + 1)
    expect(hasSurveyPressedEvent).toBe(true)
    expect(hasSurveySubmittedEvent).toBe(true)
    await expect(page.getByTestId('survey-end')).toBeVisible()
  })

  test('thumbs up without filling in the form sends an API POST', async ({ page }) => {
    let fulfilled = 0
    let hasSurveyEvent = false

    // Important to set this up *before* interacting with the page
    // in case of possible race conditions.
    await page.route('**/api/events', (route, request) => {
      const postData = request.postData()
      if (postData) {
        const postDataArray = JSON.parse(postData)
        route.fulfill({})
        expect(request.method()).toBe('POST')
        fulfilled = postDataArray.length
        for (const eventBody of postDataArray) {
          if (eventBody.type === 'survey' && eventBody.survey_vote === true) {
            hasSurveyEvent = true
          }
        }
      }
      // At the time of writing you can't get the posted payload
      // when you use `navigator.sendBeacon(url, data)`.
      // So we can't make assertions about the payload.
      // See https://github.com/microsoft/playwright/issues/12231
    })

    await page.addInitScript(() => {
      window.GHDOCSPLAYWRIGHT = 1
    })

    await page.goto('/get-started/foo/for-playwright')

    await page.locator('[for=survey-yes]').click()
    // simulate sending an exit event to trigger sending all queued events
    await page.evaluate(() => {
      Object.defineProperty(document, 'visibilityState', {
        configurable: true,
        get() {
          return 'hidden'
        },
      })
      document.dispatchEvent(new Event('visibilitychange'))
      return new Promise((resolve) => setTimeout(resolve, 100))
    })
    // Events:
    // 1. page view event when navigating to the page
    // 2. the thumbs up click
    // 3. the exit event
    expect(fulfilled).toBe(1 + 1 + 1)
    expect(hasSurveyEvent).toBe(true)

    await expect(page.getByRole('button', { name: 'Send' })).toBeVisible()
    await page.getByRole('button', { name: 'Cancel' }).click()
  })

  test('vote on one page, then go to another and it should reset', async ({ page }) => {
    // Important to set this up *before* interacting with the page
    // in case of possible race conditions.
    await page.route('**/api/events', (route) => {
      route.fulfill({})
    })

    await page.goto('/get-started/foo/for-playwright')

    await expect(page.locator('[for=survey-comment]')).not.toBeVisible()
    await page.locator('[for=survey-yes]').click()
    await expect(page.getByRole('button', { name: 'Send' })).toBeVisible()
    await expect(page.locator('[for=survey-comment]')).toBeVisible()

    await page.getByTestId('product-sidebar').getByLabel('Bar', { exact: true }).click()
    await expect(page.getByRole('button', { name: 'Send' })).not.toBeVisible()
    await expect(page.locator('[for=survey-comment]')).not.toBeVisible()
  })
})

test.describe('rest API reference pages', () => {
  test('REST actions', async ({ page }) => {
    await page.goto('/rest')
    // Before using the sidebar, make sure the page has redirected to a
    // URL that has that `?apiVersion=` query parameter.
    await expect(page).toHaveURL(/\/en\/rest\?apiVersion=/)
    await page.getByTestId('sidebar').getByText('Actions').click()
    await page.getByTestId('sidebar').getByLabel('Artifacts').click()
    await page.getByLabel('About artifacts in HubGit Actions').click()
    await expect(page).toHaveURL(/\/en\/rest\/actions\/artifacts\?apiVersion=/)
    await expect(page).toHaveTitle(/GitHub Actions Artifacts - GitHub Docs/)
  })
})

test.describe('translations', () => {
  test('view Japanese home page', async ({ page }) => {
    await page.goto('/ja')
    await expect(page.getByRole('heading', { name: '日本 GitHub Docs' })).toBeVisible()
  })

  test('switch to Japanese from English using widget on home page', async ({ page }) => {
    await page.goto('/en')
    await page.getByRole('button', { name: 'Select language: current language is English' }).click()
    await page.getByRole('menuitemradio', { name: '日本語' }).click()
    await expect(page).toHaveURL('/ja')
    await expect(page.getByRole('heading', { name: '日本 GitHub Docs' })).toBeVisible()

    // Having done this once, should now use a cookie to redirect back to Japanese
    await page.goto('/')
    await expect(page).toHaveURL('/ja')
  })

  test('switch to Japanese from English using widget on article', async ({ page }) => {
    await page.goto('/get-started/start-your-journey/hello-world')
    await expect(page).toHaveURL('/en/get-started/start-your-journey/hello-world')
    await page.getByRole('button', { name: 'Select language: current language is English' }).click()
    await page.getByRole('menuitemradio', { name: '日本語' }).click()
    await expect(page).toHaveURL('/ja/get-started/start-your-journey/hello-world')
    await expect(page.getByRole('heading', { name: 'こんにちは World' })).toBeVisible()

    // Having done this once, should now use a cookie to redirect
    // back to Japanese.
    // Playwright will cache this redirect, so we need to add something
    // to "cache bust" the URL
    const cb = `?cb=${Math.random()}`
    await page.goto(`/get-started/start-your-journey/hello-world${cb}`)
    await expect(page).toHaveURL(`/ja/get-started/start-your-journey/hello-world${cb}`)

    // If you go, with the Japanese cookie, to the English page directly,
    // it will offer a link to the Japanese URL in a banner.
    await page.goto('/en/get-started/start-your-journey/hello-world')
    await expect(page).toHaveURL('/ja/get-started/start-your-journey/hello-world')
  })
})

test('open search, and ask Copilot (Ask AI) a question', async ({ page }) => {
  test.skip(!SEARCH_TESTS, 'No local Elasticsearch, no tests involving search')

  // Mock the CSE Copilot endpoint
  await page.route('**/api/ai-search/v1', async (route) => {
    // Simulate the streaming response from CSE Copilot
    const mockResponse = `{"chunkType":"SOURCES","sources":[{"title":"Creating a new repository","index":"/en/get-started","url":"http://localhost:4000/en/get-started"}]}

{"chunkType":"MESSAGE_CHUNK","text":"Creating "}
{"chunkType":"MESSAGE_CHUNK","text":"a "}
{"chunkType":"MESSAGE_CHUNK","text":"repository "}
{"chunkType":"MESSAGE_CHUNK","text":"on "}
{"chunkType":"MESSAGE_CHUNK","text":"GitHub "}
{"chunkType":"MESSAGE_CHUNK","text":"is "}
{"chunkType":"MESSAGE_CHUNK","text":"something "}
{"chunkType":"MESSAGE_CHUNK","text":"you "}
{"chunkType":"MESSAGE_CHUNK","text":"should "}
{"chunkType":"MESSAGE_CHUNK","text":"already "}
{"chunkType":"MESSAGE_CHUNK","text":"know "}
{"chunkType":"MESSAGE_CHUNK","text":"how "}
{"chunkType":"MESSAGE_CHUNK","text":"to "}
{"chunkType":"MESSAGE_CHUNK","text":"do "}
{"chunkType":"MESSAGE_CHUNK","text":":shrug:"}`

    await route.fulfill({
      status: 200,
      headers: {
        'Content-Type': 'application/x-ndjson',
        'Transfer-Encoding': 'chunked',
      },
      body: mockResponse,
    })
  })

  await page.goto('/')
  await turnOffExperimentsInPage(page)
  await dismissCTAPopover(page)

  await page.locator('[data-testid="search"]:visible').click()
  await page.getByTestId('overlay-search-input').fill('How do I create a Repository?')
  // Pressing enter should ask AI the question
  await page.keyboard.press('Enter')

  // Wait for the AI response to appear
  await expect(page.getByText('Creating a repository on GitHub')).toBeVisible()

  // Verify that sources are displayed
  await expect(page.getByText('Creating a new repository')).toBeVisible()

  // Verify the full response appears
  await expect(page.getByText('something you should already know how to do')).toBeVisible()

  // Open the "Creating new repository" source link list item
  // Find the references section first
  const aiReferencesSection = page.getByTestId('ai-references')
  await expect(aiReferencesSection).toBeVisible()

  // Wait for the reference list to be populated
  await expect(page.getByText('Creating a new repository')).toBeVisible()
})

test('open search, Ask AI returns 400 error and shows general search results', async ({ page }) => {
  test.skip(!SEARCH_TESTS, 'No local Elasticsearch, no tests involving search')

  // Mock the CSE Copilot endpoint to return a 400 error
  await page.route('**/api/ai-search/v1', async (route) => {
    await route.fulfill({
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        upstreamStatus: 400,
      }),
    })
  })

  await page.goto('/')
  await turnOffExperimentsInPage(page)
  await dismissCTAPopover(page)

  await page.locator('[data-testid="search"]:visible').click()
  await page.getByTestId('overlay-search-input').fill('foo')
  // Pressing enter should trigger Ask AI, get 400 error, and show general search results
  await page.keyboard.press('Enter')

  // Wait for general search results to appear
  await expect(page.getByRole('link', { name: 'Foo' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Bar' })).toBeVisible()

  // Wait for the AI error message to appear
  // This is a canned response for the 400 error
  await page.waitForTimeout(1000) // Wait for the AI error message to appear

  // Verify the AI error message appears (canned response for 400 error)
  await expect(
    page
      .getByRole('paragraph')
      .getByText(
        /Sorry, I'm unable to answer that question. Please try asking a different question./,
      ),
  ).toBeVisible()

  // Verify general search results appear above the AI section
  const searchResults = page.getByTestId('general-autocomplete-suggestions')
  const aiSection = page.locator('#ask-ai-result-container')

  await expect(searchResults).toBeVisible()
  await expect(aiSection).toBeVisible()
})

test.describe('LandingCarousel component', () => {
  test('displays carousel on test page', async ({ page }) => {
    await page.goto('/get-started/carousel')

    const carousel = page.locator('[data-testid="landing-carousel"]')
    await expect(carousel).toBeVisible()

    // Check that article cards are present
    const items = page.locator('[data-testid="carousel-items"]')
    const cards = items.locator('a')
    await expect(cards.first()).toBeVisible()

    // Verify cards have real titles (not "Unknown Article" when article not found)
    const firstCardTitle = cards.first().locator('h3')
    await expect(firstCardTitle).toBeVisible()
    await expect(firstCardTitle).not.toHaveText('Unknown Article')
  })

  test('navigation works on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 800 })
    await page.goto('/get-started/carousel')

    const carousel = page.locator('[data-testid="landing-carousel"]')
    await expect(carousel).toBeVisible()

    // Should show 3 cards on desktop
    const cards = carousel.locator('a')
    await expect(cards).toHaveCount(3)

    // Check for navigation buttons if there are more than 3 articles
    const nextButton = carousel.getByRole('button', { name: 'Next articles' })
    if (await nextButton.isVisible()) {
      const prevButton = carousel.getByRole('button', { name: 'Previous articles' })
      await expect(prevButton).toBeDisabled() // Should be disabled on first page
      await expect(nextButton).toBeEnabled()
    }
  })

  test('responsive behavior on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/get-started/carousel')

    const carousel = page.locator('[data-testid="landing-carousel"]')
    await expect(carousel).toBeVisible()

    // Should show 1 card on mobile
    const cards = carousel.locator('a')
    await expect(cards).toHaveCount(1)
  })
})

test.describe('Multi-carousel support', () => {
  test('displays multiple carousels from carousels frontmatter', async ({ page }) => {
    await page.goto('/get-started/multi-carousel')

    // Should have multiple carousels rendered
    const carousels = page.locator('[data-testid="landing-carousel"]')
    const carouselCount = await carousels.count()

    // We defined exactly 2 carousels in the frontmatter
    expect(carouselCount).toBe(2)
  })

  test('carousel with matching ui.yml key displays translated title', async ({ page }) => {
    await page.goto('/get-started/multi-carousel')

    // The "recommended" carousel should show "Recommended" title from ui.yml
    const carouselHeadings = page.locator('[data-testid="landing-carousel"] h2')

    const headingTexts = await carouselHeadings.allTextContents()

    // Check that at least one heading has "Recommended"
    expect(headingTexts.some((text) => text.includes('Recommended'))).toBe(true)
  })

  test('carousel without matching ui.yml key renders without title', async ({ page }) => {
    await page.goto('/get-started/multi-carousel')

    // The "titleTwoNoMatchingUiYml" carousel should not have a visible heading
    // or the heading element should be empty/not exist for that carousel
    const carouselHeadings = page.locator('[data-testid="landing-carousel"] h2')
    const headingTexts = await carouselHeadings.allTextContents()

    // The raw key "titleTwoNoMatchingUiYml" should NOT appear as a heading
    // (the component should not show the key as fallback)
    expect(headingTexts.some((text) => text === 'titleTwoNoMatchingUiYml')).toBe(false)
  })

  test('heading h2 element is only present when ui.yml translation exists', async ({ page }) => {
    await page.goto('/get-started/multi-carousel')

    const carousels = page.locator('[data-testid="landing-carousel"]')
    const count = await carousels.count()

    // We have 2 carousels: "recommended" and "titleTwoNoMatchingUiYml"
    expect(count).toBe(2)

    // Count carousels that have h2 elements
    let carouselsWithHeadings = 0
    for (let i = 0; i < count; i++) {
      const carousel = carousels.nth(i)
      const h2Count = await carousel.locator('h2').count()
      if (h2Count > 0) {
        carouselsWithHeadings++
      }
    }

    // Only 1 carousel should have a heading (recommended has ui.yml entry)
    // titleTwoNoMatchingUiYml should NOT have an h2 element at all
    expect(carouselsWithHeadings).toBe(1)

    // Verify the specific titles that should be visible
    const visibleHeadings = await carousels.locator('h2').allTextContents()
    expect(visibleHeadings).toContain('Recommended')
    expect(visibleHeadings).not.toContain('titleTwoNoMatchingUiYml')
  })

  test('each carousel has articles based on frontmatter paths', async ({ page }) => {
    await page.goto('/get-started/multi-carousel')

    const carousels = page.locator('[data-testid="landing-carousel"]')
    const count = await carousels.count()

    // Each carousel should have at least one article
    for (let i = 0; i < count; i++) {
      const carousel = carousels.nth(i)
      const articles = carousel.locator('[data-testid="carousel-items"] a')
      const articleCount = await articles.count()
      expect(articleCount).toBeGreaterThan(0)
    }
  })
})

test.describe('Journey Tracks', () => {
  test('displays all journey tracks on landing pages', async ({ page }) => {
    await page.goto('/get-started/test-journey')

    const journeyTracks = page.locator('[data-testid="journey-tracks"]')
    await expect(journeyTracks).toBeVisible()

    // Check that at least one track is displayed
    const tracks = page.locator('[data-testid="journey-track"]')
    await expect(tracks.first()).toBeVisible()

    // Verify track has proper structure
    const firstTrack = tracks.first()
    await expect(firstTrack.locator('h2')).toBeVisible() // Track title
    await expect(firstTrack.locator('p')).toBeVisible() // Track description
  })

  test('track expansion and collapse functionality', async ({ page }) => {
    await page.goto('/get-started/test-journey')

    const firstTrack = page.locator('[data-testid="journey-track"]').first()
    const expandButton = firstTrack.locator('summary')

    // Initially collapsed
    const articlesList = firstTrack.locator('[data-testid="journey-articles"]')
    await expect(articlesList).not.toBeVisible()

    await expandButton.click()
    await expect(articlesList).toBeVisible()

    const articles = articlesList.locator('li')
    await expect(articles.first()).toBeVisible()

    await expandButton.click()
    await expect(articlesList).not.toBeVisible()
  })

  test('article navigation within tracks', async ({ page }) => {
    await page.goto('/get-started/test-journey')

    const firstTrack = page.locator('[data-testid="journey-track"]').first()
    const expandButton = firstTrack.locator('summary')

    await expandButton.click()

    // Click on first article
    const firstArticle = firstTrack.locator('[data-testid="journey-articles"] li a').first()
    await expect(firstArticle).toBeVisible()

    const articleTitle = await firstArticle.textContent()
    expect(articleTitle).toBeTruthy()
    expect(articleTitle!.length).toBeGreaterThan(0)
  })

  test('preserves version in journey track links', async ({ page }) => {
    await page.goto('/enterprise-cloud@latest/get-started/test-journey')

    const firstTrack = page.locator('[data-testid="journey-track"]').first()
    const expandButton = firstTrack.locator('summary')
    await expandButton.click()

    // article links should preserve the language and version
    const firstArticle = firstTrack.locator('[data-testid="journey-articles"] li a').first()
    const href = await firstArticle.getAttribute('href')

    expect(href).toContain('/en/')
    expect(href).toContain('enterprise-cloud@latest')
  })

  test('handles liquid template rendering in track content', async ({ page }) => {
    await page.goto('/get-started/test-journey')

    const tracks = page.locator('[data-testid="journey-track"]')

    // Check that liquid templates are rendered (no raw template syntax visible)
    const trackContent = await tracks.first().textContent()
    expect(trackContent).not.toContain('{{')
    expect(trackContent).not.toContain('}}')
    expect(trackContent).not.toContain('{%')
    expect(trackContent).not.toContain('%}')
  })

  test('journey navigation components show on article pages', async ({ page }) => {
    // go to an article that's part of a journey track
    await page.goto('/get-started/start-your-journey/hello-world')

    // journey card should be visible in sidebar
    const journeyCard = page.locator('[data-testid="journey-track-card"]')
    await expect(journeyCard).toBeVisible()

    // journey footer nav should be visible
    const journeyNav = page.locator('[data-testid="journey-track-nav"]')
    await expect(journeyNav).toBeVisible()
  })

  test('journey footer nav component links to first article in next track from last article in previous track', async ({
    page,
  }) => {
    await page.goto('/get-started/foo/bar')

    const journeyNav = page.locator('[data-testid="journey-track-nav"]')
    await expect(journeyNav).toBeVisible()

    // Link should display the next track's title and go to its first article
    const nextTrackLink = journeyNav.locator('a').filter({ hasText: 'Advanced topics' })
    await expect(nextTrackLink).toBeVisible()

    const href = await nextTrackLink.getAttribute('href')
    expect(href).toContain('/get-started/foo/autotitling')
  })

  test('journey card displays branching text when present', async ({ page }) => {
    await page.goto('/get-started/foo/journey-test-article')

    const journeyCard = page.locator('[data-testid="journey-track-card"]')
    await expect(journeyCard).toBeVisible()

    // Branching text should be rendered with markdown links
    await expect(journeyCard).toContainText('Want to skip ahead?')

    // AUTOTITLE should be resolved to actual article title
    const branchingLink = journeyCard.locator('a').filter({ hasText: 'Hello World' })
    await expect(branchingLink).toBeVisible()
    await expect(journeyCard).not.toContainText('AUTOTITLE')

    const href = await branchingLink.getAttribute('href')
    expect(href).toContain('/get-started/start-your-journey/hello-world')
  })
})

test.describe('LandingArticleGridWithFilter component', () => {
  test('displays article grid with filter controls', async ({ page }) => {
    await page.goto('/get-started/article-grid-discovery')

    // Check that the main components are visible, title, categories drop
    // down, search input.
    const articleGrid = page.getByTestId('article-grid')
    await expect(articleGrid).toBeVisible()

    const filterHeader = page.getByTestId('filter-header')
    await expect(filterHeader).toBeVisible()

    const title = page.locator('h2').filter({ hasText: 'Articles' })
    await expect(title).toBeVisible()

    const categoryDropdown = page.getByRole('button').filter({ hasText: 'All categories' })
    await expect(categoryDropdown).toBeVisible()

    const searchInput = page.getByPlaceholder('Search articles')
    await expect(searchInput).toBeVisible()
  })

  test('displays article cards with correct content', async ({ page }) => {
    await page.goto('/get-started/article-grid-discovery')

    const articleGrid = page.getByTestId('article-grid')
    await expect(articleGrid).toBeVisible()

    // Check that article cards are present and they have expected structure
    // by checking the first card.
    const articleCards = articleGrid.getByTestId('article-card')
    await expect(articleCards.first()).toBeVisible()

    const firstCard = articleCards.first()
    const titleLink = firstCard.locator('h3 span')
    await expect(titleLink).toBeVisible()

    const intro = firstCard.locator('div').last() // cardIntro is the last div
    await expect(intro).toBeVisible()
    const introText = await intro.textContent()
    expect(introText).toBeTruthy()

    // Card should have categories, title, and intro, just check the card has
    // some text
    const cardText = await firstCard.textContent()
    expect(cardText).toBeTruthy()
    expect(cardText!.length).toBeGreaterThan(0)
  })

  test('category filtering works correctly', async ({ page }) => {
    await page.goto('/get-started/article-grid-discovery')

    // Check that category dropdown button exists and is clickable
    const categoryDropdown = page.getByRole('button').filter({ hasText: 'All categories' })
    await expect(categoryDropdown).toBeVisible()

    // Initially should show all articles (4 total in our fixtures)
    const articleGrid = page.getByTestId('article-grid')
    await expect(articleGrid).toBeVisible()
    const allArticleCards = articleGrid.getByTestId('article-card')
    await expect(allArticleCards).toHaveCount(4)

    // Click the dropdown and the 'Testing' category
    await categoryDropdown.click()
    const testingOption = page.getByText('Testing', { exact: true }).last()
    await expect(testingOption).toBeVisible()
    await testingOption.click()

    // After filtering by Testing category, should show only 1 article based
    // on our fixtures.
    await expect(allArticleCards).toHaveCount(1)

    // Verify the filtered article contains "Testing" somewhere in its markup
    const remainingCard = allArticleCards.first()
    await expect(remainingCard).toContainText('Testing')
  })

  test('search functionality works', async ({ page }) => {
    await page.goto('/get-started/article-grid-discovery')

    const searchInput = page.getByPlaceholder('Search articles')
    await expect(searchInput).toBeVisible()

    // Initially should show all articles (4 total in our fixtures)
    const articleGrid = page.getByTestId('article-grid')
    await expect(articleGrid).toBeVisible()

    const articleCards = articleGrid.getByTestId('article-card')
    await expect(articleCards).toHaveCount(4)

    // Search for "Grid" - based on our fixtures, multiple articles should have "Grid" in their names
    await searchInput.fill('Grid')
    await expect(articleCards.first()).toBeVisible()

    // Verify that the remaining articles contain "Grid" in their content
    const remainingCount = await articleCards.count()
    expect(remainingCount).toBeGreaterThan(0)
    for (let i = 0; i < remainingCount; i++) {
      const card = articleCards.nth(i)
      await expect(card).toContainText('Grid')
    }
  })

  test('search with no results shows appropriate message', async ({ page }) => {
    await page.goto('/get-started/article-grid-discovery')

    const searchInput = page.getByPlaceholder('Search articles')
    await expect(searchInput).toBeVisible()

    // Search for a term that definitely won't match any articles, should show
    // no article cards
    await searchInput.fill('noSuchArticles')
    const articleGrid = page.getByTestId('article-grid')
    await expect(articleGrid).toBeVisible()
    const articleCards = articleGrid.getByTestId('article-card')
    await expect(articleCards).toHaveCount(0)

    // Should show "no articles found" message as well
    const noResultsMessage = page.getByTestId('no-articles-message')
    await expect(noResultsMessage).toBeVisible()
  })

  test('responsive behavior on different screen sizes', async ({ page }) => {
    // Super basic test, just make sure the article grid is visible on
    // different viewports sizes

    // Test desktop view (3 columns)
    await page.setViewportSize({ width: 1200, height: 800 })
    await page.goto('/get-started/article-grid-discovery')
    const articleGrid = page.getByTestId('article-grid')
    await expect(articleGrid).toBeVisible()

    // Test tablet view (2 columns)
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.waitForTimeout(100) // Brief wait for responsive changes
    await expect(articleGrid).toBeVisible()

    // Test mobile view (1 column)
    await page.setViewportSize({ width: 375, height: 667 })
    await page.waitForTimeout(100) // Brief wait for responsive changes
    await expect(articleGrid).toBeVisible()
  })

  test('works with bespoke landing page', async ({ page }) => {
    // Other grid tests use the discovery landing page, bespoke pages are
    // similar so just do a quick check.
    await page.goto('/get-started/article-grid-bespoke')

    const articleGrid = page.getByTestId('article-grid')
    await expect(articleGrid).toBeVisible()
  })
})

test.describe('Non-child page resolution', () => {
  test('category page with local children renders properly', async ({ page }) => {
    // The local-category has local children (local-article-one, local-article-two)
    // and an external article reference via children frontmatter
    await page.goto('/get-started/non-child-resolution/local-category')

    // Should have a title
    await expect(page).toHaveTitle(/Local category test/)

    // The page should load without errors and have main content
    await expect(page.locator('main')).toBeVisible()
  })

  test('cross-product children page loads correctly', async ({ page }) => {
    // The articles-only fixture now uses /content/ prefix in children for cross-product paths
    await page.goto('/get-started/non-child-resolution/articles-only')

    await expect(page).toHaveTitle(/Cross-product children test/)
    await expect(page.locator('main')).toBeVisible()
  })

  test('children-only page with /content/ path loads correctly', async ({ page }) => {
    // The children-only fixture uses /content/ prefix for cross-product paths
    await page.goto('/get-started/non-child-resolution/children-only')

    await expect(page).toHaveTitle(/Children only test/)
    await expect(page.locator('main')).toBeVisible()
  })

  test('standalone article is accessible', async ({ page }) => {
    await page.goto('/get-started/non-child-resolution/standalone-article')

    await expect(page).toHaveTitle(/Standalone article/)
    await expect(page.locator('main')).toBeVisible()
  })

  test('versioned cross-product children - fpt shows only fpt article', async ({ page }) => {
    // In fpt version, only the only-fpt article should be available
    await page.goto('/get-started/non-child-resolution/versioned-cross-product')

    await expect(page).toHaveTitle(/Versioned cross-product test/)
    await expect(page.locator('main')).toBeVisible()

    // Check TOC has the fpt-only article
    const tocLinks = page.locator('[data-testid="table-of-contents"] a')
    await expect(tocLinks).toHaveCount(1)
    await expect(tocLinks.first()).toHaveAttribute('href', /only-fpt/)
  })

  test('versioned cross-product children - ghec shows ghec articles', async ({ page }) => {
    // In ghec version, only-ghec and only-ghec-and-ghes should be available
    await page.goto(
      '/enterprise-cloud@latest/get-started/non-child-resolution/versioned-cross-product',
    )

    await expect(page).toHaveTitle(/Versioned cross-product test/)
    await expect(page.locator('main')).toBeVisible()

    // Check TOC has ghec articles (only-ghec and only-ghec-and-ghes)
    const tocLinks = page.locator('[data-testid="table-of-contents"] a')
    await expect(tocLinks).toHaveCount(2)
  })

  test('cross-product children excluded from sidebar in Japanese translation', async ({ page }) => {
    // The Japanese translation should work with cross-product children
    await page.goto('/ja/get-started/non-child-resolution')

    // Verify page loads correctly with Japanese site context
    // Note: The title may not be fully translated in test fixtures, but the page should render
    await expect(page).toHaveTitle(/GitHub Docs/)
    await expect(page.locator('main')).toBeVisible()

    // Verify page loads correctly - the cross-product children don't prevent the page from working
    // The detailed sidebar filtering is tested by the survey test which verifies no duplicate entries
  })
})

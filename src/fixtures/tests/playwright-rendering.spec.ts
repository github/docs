import dotenv from 'dotenv'
import { test, expect } from '@playwright/test'
import { turnOffExperimentsInPage } from '../helpers/turn-off-experiments'
import { contrastRatio } from '@/fixtures/helpers/color-contrast'
import {
  HOVERCARDS_ENABLED,
  ANALYTICS_ENABLED,
  COLOR_MODE_COOKIE_NAME,
} from '../../frame/lib/constants'

// Local Playwright loads .env so tests read ELASTICSEARCH_URL independently of start-server.ts.
dotenv.config({ quiet: true })

const SEARCH_TESTS = !!process.env.ELASTICSEARCH_URL

test('view home page', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/GitHub Docs/)
})

test.describe('Brand document canvas', () => {
  test('follows system color scheme changes in auto mode without a cookie', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' })
    await page.goto('/get-started/foo/bar')
    // Preserve auto because data-color-mode resolves to light or dark before first paint.
    await expect(page.locator('html')).toHaveAttribute('data-color-mode-preference', 'auto')

    for (const colorScheme of ['dark', 'light', 'dark'] as const) {
      await page.emulateMedia({ colorScheme })
      const backgroundColor = colorScheme === 'dark' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'
      const textColor = colorScheme === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'

      await expect(page.locator('html')).toHaveAttribute('data-color-mode', colorScheme)
      for (const selector of ['html', 'body']) {
        await expect(page.locator(selector)).toHaveCSS('background-color', backgroundColor)
        await expect(page.locator(selector)).toHaveCSS('color', textColor)
      }
    }
  })

  for (const colorMode of ['light', 'dark'] as const) {
    test(`preserves explicit ${colorMode} mode against the opposite system preference`, async ({
      page,
      context,
      baseURL,
    }) => {
      await page.emulateMedia({ colorScheme: colorMode === 'light' ? 'dark' : 'light' })
      await context.addCookies([
        {
          name: COLOR_MODE_COOKIE_NAME,
          value: encodeURIComponent(JSON.stringify({ color_mode: colorMode })),
          url: new URL('/', baseURL).href,
        },
      ])
      await page.goto('/get-started/foo/bar')
      await expect(page.locator('html')).toHaveAttribute('data-color-mode', colorMode)

      const backgroundColor = colorMode === 'dark' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'
      const textColor = colorMode === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
      for (const selector of ['html', 'body']) {
        await expect(page.locator(selector)).toHaveCSS('background-color', backgroundColor)
        await expect(page.locator(selector)).toHaveCSS('color', textColor)
      }
    })
  }

  // A data-color-mode below html re-declares Brand's whole palette for that subtree.
  const MISMATCHES = [
    { name: 'OS dark, explicit light mode', colorScheme: 'dark', cookie: { color_mode: 'light' } },
    { name: 'OS light, explicit dark mode', colorScheme: 'light', cookie: { color_mode: 'dark' } },
    {
      // GitHub.com picks day and night themes separately, so light can resolve to a dark theme.
      name: 'light mode whose day theme is itself dark',
      colorScheme: 'light',
      cookie: {
        color_mode: 'light',
        light_theme: { name: 'dark_dimmed', color_mode: 'dark' },
        dark_theme: { name: 'dark', color_mode: 'dark' },
      },
    },
  ] as const

  for (const scenario of MISMATCHES) {
    test(`declares brand's palette only on <html> (${scenario.name})`, async ({
      page,
      context,
      baseURL,
    }) => {
      // Record modes from first paint to catch wrappers that self-correct within a macrotask.
      await page.addInitScript(() => {
        const seen: string[] = []
        ;(window as unknown as { __modes: string[] }).__modes = seen
        const note = (node: Node) => {
          if (!(node instanceof Element) || node === document.documentElement) return
          const value = node.getAttribute('data-color-mode')
          if (value) seen.push(value)
        }
        new MutationObserver((records) => {
          for (const record of records) {
            if (record.type === 'attributes') note(record.target)
            for (const node of record.addedNodes) {
              note(node)
              if (node instanceof Element) {
                for (const nested of node.querySelectorAll('[data-color-mode]')) note(nested)
              }
            }
          }
        }).observe(document, {
          subtree: true,
          childList: true,
          attributes: true,
          attributeFilter: ['data-color-mode'],
        })
      })
      await page.emulateMedia({ colorScheme: scenario.colorScheme })
      await context.addCookies([
        {
          name: COLOR_MODE_COOKIE_NAME,
          value: encodeURIComponent(JSON.stringify(scenario.cookie)),
          url: new URL('/', baseURL).href,
        },
      ])
      await page.goto('/get-started/foo/for-playwright')

      const rootMode = await page.locator('html').getAttribute('data-color-mode')
      expect(rootMode).toMatch(/^(light|dark)$/)

      // ActionMenu.Overlay emits data-color-mode from its own ThemeProvider only while open.
      await page.getByTestId('version-picker-button').first().click()
      await expect(page.getByRole('menu').first()).toBeVisible()

      // Brand has no auto color block, so auto wrappers declare nothing and inherit.
      await expect(async () => {
        const offenders = await page
          .locator('body [data-color-mode]')
          .evaluateAll(
            (nodes, mode) =>
              nodes
                .map((node) => node.getAttribute('data-color-mode')!)
                .filter((value) => value !== 'auto' && value !== mode),
            rootMode,
          )
        expect(offenders).toEqual([])
      }).toPass()

      const everSeen = await page.evaluate(
        () => (window as unknown as { __modes: string[] }).__modes,
      )
      expect(everSeen.filter((value) => value !== 'auto' && value !== rootMode)).toEqual([])

      // Exclude a.heading-link and .btn; they match article-link-overrides.scss.
      const link = page
        .locator('#article-contents .markdown-body a[href]:not(.heading-link):not(.btn)')
        .first()
      const linkColor = await link.evaluate((element) => getComputedStyle(element).color)
      const canvas = await page
        .locator('body')
        .evaluate((element) => getComputedStyle(element).backgroundColor)

      const expectedLinkColor = await page.locator('html').evaluate((element) => {
        const probe = document.createElement('span')
        probe.style.color = 'var(--brand-color-text-link-rest)'
        element.append(probe)
        try {
          return getComputedStyle(probe).color
        } finally {
          probe.remove()
        }
      })
      // Equality alone can pass with wrong html vars; contrast alone can pass with selector drift.
      expect(linkColor).toBe(expectedLinkColor)
      expect(contrastRatio(linkColor, canvas)).toBeGreaterThanOrEqual(4.5)
    })
  }
})

test('logo link keeps current version', async ({ page }) => {
  await page.goto('/enterprise-cloud@latest')
  await turnOffExperimentsInPage(page)
  await page.getByTestId('product').getByRole('link', { name: 'Get started' }).click()
  await expect(page).toHaveURL(/\/en\/enterprise-cloud@latest\/get-started/)
  await page
    .getByTestId('desktop-header')
    .getByRole('link', { name: 'Github Home', exact: true })
    .click()
  await expect(page).toHaveURL(/\/en\/enterprise-cloud@latest/)
})

test('view the for-playwright article', async ({ page }) => {
  await page.goto('/get-started/foo/for-playwright')
  await expect(page).toHaveTitle(/For Playwright - GitHub Docs/)

  await page
    .getByTestId('minitoc')
    .getByRole('link', { name: 'Second heading', exact: true })
    .click()
  await expect(page).toHaveURL(/for-playwright#second-heading/)
})

test('article heading levels share the same top padding', async ({ page }) => {
  await page.goto('/get-started/foo/for-playwright')

  const article = page.locator('#article-contents')
  for (const level of [2, 3, 4, 5, 6]) {
    await expect(article.getByRole('heading', { level }).first()).toHaveCSS('padding-top', '16px')
  }
})

test('use sidebar to go to Hello World page', async ({ page }) => {
  await page.goto('/get-started')

  await expect(page).toHaveTitle(/Getting started with HubGit/)

  await page.getByTestId('product-sidebar').getByText('Start your journey').click()
  await page.getByTestId('product-sidebar').getByText('Hello World').click()
  await expect(page).toHaveURL(/\/en\/get-started\/start-your-journey\/hello-world/)
  await expect(page).toHaveTitle(/Hello World - GitHub Docs/)
})

test('sidebar highlights the clicked item optimistically while navigation is pending', async ({
  page,
}) => {
  // getServerSideProps delays router.asPath and aria-current; throttle _next/data for data-pending.
  await page.goto('/get-started')
  await page.getByTestId('product-sidebar').getByText('Start your journey').click()

  const sidebar = page.getByTestId('product-sidebar')
  const helloWorld = sidebar.getByRole('link', { name: 'Hello World' })
  const linkRewriting = sidebar.getByRole('link', { name: 'Link rewriting' })

  let releaseNavigation = () => {}
  const navigationHeld = new Promise<void>((resolve) => {
    releaseNavigation = resolve
  })
  await page.route('**/_next/data/**', async (route) => {
    await navigationHeld
    await route.continue()
  })

  await helloWorld.click()

  await expect(helloWorld).toHaveAttribute('data-pending', '')
  await expect(helloWorld).not.toHaveAttribute('aria-current', 'page')
  await expect(page).not.toHaveURL(/hello-world/)

  releaseNavigation()
  await expect(page).toHaveURL(/\/en\/get-started\/start-your-journey\/hello-world/)
  await expect(helloWorld).toHaveAttribute('aria-current', 'page')
  await expect(helloWorld).not.toHaveAttribute('data-pending', '')

  // handleNavClick skips modifier clicks; ControlOrMeta must not set pendingHref. Close the popup.
  page.on('popup', (popup) => popup.close())
  await linkRewriting.click({ modifiers: ['ControlOrMeta'] })
  await expect(linkRewriting).not.toHaveAttribute('data-pending', '')
  await expect(helloWorld).toHaveAttribute('aria-current', 'page')
  await expect(page).toHaveURL(/\/en\/get-started\/start-your-journey\/hello-world/)
})

test('press "/" to open the search overlay', async ({ page }) => {
  await page.goto('/')
  await turnOffExperimentsInPage(page)

  // The keydown listener attaches when the header search button renders.
  await page.getByTestId('toggle-search').waitFor()

  const searchInput = page.getByTestId('overlay-search-input')
  await expect(searchInput).toHaveCount(0)

  await page.keyboard.press('/')
  await expect(searchInput).toBeFocused()

  await page.keyboard.press('Escape')
  await expect(searchInput).toHaveCount(0)
  await expect(page.getByTestId('toggle-search')).toBeFocused()
})

test('"/" typed inside the search input is a literal slash', async ({ page }) => {
  await page.goto('/')
  await turnOffExperimentsInPage(page)

  await page.getByTestId('toggle-search').waitFor()

  await page.keyboard.press('/')
  const searchInput = page.getByTestId('overlay-search-input')
  await expect(searchInput).toBeFocused()

  // The slash shortcut must not fire while typing in a field.
  await page.keyboard.type('a/b')
  await expect(searchInput).toHaveValue('a/b')
})

test('do a search from home page and click on "Foo" page', async ({ page }) => {
  test.skip(!SEARCH_TESTS, 'No local Elasticsearch, no tests involving search')

  await page.goto('/')
  await turnOffExperimentsInPage(page)

  await page.getByTestId('toggle-search').click()
  await page.getByTestId('overlay-search-input').fill('serve playwright')
  await page.waitForTimeout(1000)
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

  await page.getByTestId('toggle-search').click()
  await page.getByTestId('overlay-search-input').fill('serve playwright')
  // Wait 1 second for results to load, because the UI blocks submitting the query until then.
  await page.waitForTimeout(1000)
  await page.getByText('View more results').click()

  await expect(page).toHaveURL(
    /\/search\?search-overlay-input=serve\+playwright&query=serve\+playwright/,
  )
  await expect(page).toHaveTitle(/\d Search results for "serve playwright"/)

  await page.getByRole('link', { name: 'For Playwright' }).click()

  await expect(page).toHaveURL(/\/get-started\/foo\/for-playwright$/)
  await expect(page).toHaveTitle(/For Playwright/)
})

test('open search, and select a general search article', async ({ page }) => {
  test.skip(!SEARCH_TESTS, 'No local Elasticsearch, no tests involving search')

  await page.goto('/')

  await page.getByTestId('toggle-search').click()

  await page.getByTestId('overlay-search-input').fill('serve playwright')
  const searchOverlay = page.getByTestId('general-autocomplete-suggestions')
  await expect(searchOverlay.getByText('For Playwright')).toBeVisible()
  await page.keyboard.press('ArrowDown')
  await page.keyboard.press('Enter')

  await expect(page).toHaveURL(/\/get-started\/foo\/for-playwright$/)
  await expect(page).toHaveTitle(/For Playwright/)
})

test('open search, and get auto-complete results', async ({ page }) => {
  test.skip(!SEARCH_TESTS, 'No local Elasticsearch, no tests involving search')

  await page.goto('/')

  await page.getByTestId('toggle-search').click()

  let listGroup = page.getByTestId('ai-autocomplete-suggestions')

  await expect(listGroup).toBeVisible()
  let listItems = listGroup.locator('li')
  await expect(listItems).toHaveCount(4)

  // The first list mirrors queries.json fixture topQueries.
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

  await searchInput.fill('rest')
  await page.waitForTimeout(1000)

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

  await page.getByTestId('toggle-search').click()
  await page.getByTestId('overlay-search-input').fill('fixture')
  await page.waitForTimeout(1000)
  await page.getByText('View more results').click()

  await page.getByText('Fooing (1)').click()
  await page.getByRole('link', { name: 'Clear' }).click()
})

test('404 page renders correctly', async ({ page }) => {
  const response = await page.goto('/this-definitely-does-not-exist')
  expect(response?.status()).toBe(404)

  await expect(page.getByText('Page not found.')).toBeVisible()
})

test.describe('platform picker', () => {
  test('switch operating systems', async ({ page }) => {
    await page.goto('/get-started/liquid/platform-specific')
    await turnOffExperimentsInPage(page)

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
    // Stay inside the drawer's 1400px reveal breakpoint.
    await page.setViewportSize({ width: 1440, height: 900 })
    // The fixture frontmatter defaults the platform to Windows.
    await page.goto('/get-started/liquid/platform-specific')
    await turnOffExperimentsInPage(page)
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
    await page.getByTestId('platform-picker').getByRole('link', { name: 'Windows' }).click()

    await page.goto('/get-started/liquid/platform-specific')
    await expect(page.getByRole('heading', { name: /Windows 95/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Macintosh/ })).not.toBeVisible()
  })
})

test.describe('tool picker', () => {
  test('switch tools', async ({ page }) => {
    await page.goto('/get-started/liquid/tool-specific')
    await turnOffExperimentsInPage(page)

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

    // The fixture frontmatter defaults defaultTool to webui.
    await expect(page.getByText('This is webui content')).toBeVisible()
    await expect(page.getByText('This is desktop content')).not.toBeVisible()
    await expect(page.getByText('This is cli content')).not.toBeVisible()
  })

  test('remember last clicked tool', async ({ page }) => {
    await page.goto('/get-started/liquid/tool-specific')
    await turnOffExperimentsInPage(page)
    await page.getByTestId('tool-picker').getByRole('link', { name: 'Web browser' }).click()

    await page.goto('/get-started/liquid/tool-specific')
    await expect(page.getByText('This is cli content')).not.toBeVisible()
    await expect(page.getByText('This is desktop content')).not.toBeVisible()
    await expect(page.getByText('This is webui content')).toBeVisible()
  })

  test('minitoc matches picker', async ({ page }) => {
    // Avoid the drawer's exact reveal breakpoint.
    await page.setViewportSize({ width: 1440, height: 900 })
    // The fixture frontmatter defaults defaultTool to webui.
    await page.goto('/get-started/liquid/tool-specific')
    await turnOffExperimentsInPage(page)
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

test.describe('code tabs', () => {
  test('switch languages across groups', async ({ page }) => {
    await page.goto('/get-started/liquid/code-tabs-test')
    await turnOffExperimentsInPage(page)

    const firstGroup = page.locator('.ghd-codetabs').nth(0)
    const secondGroup = page.locator('.ghd-codetabs').nth(1)

    await expect(firstGroup.getByRole('link', { name: 'TypeScript' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    await firstGroup.getByRole('link', { name: 'Python' }).click()

    await expect(firstGroup.getByRole('link', { name: 'Python' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    await expect(secondGroup.getByRole('link', { name: 'Python' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    await expect(firstGroup.getByText('from copilot import CopilotClient')).toBeVisible()
    await expect(firstGroup.getByText('@github/copilot-sdk')).not.toBeVisible()
  })

  test('remembers the last selected language', async ({ page }) => {
    await page.goto('/get-started/liquid/code-tabs-test')
    await turnOffExperimentsInPage(page)
    await page.locator('.ghd-codetabs').nth(0).getByRole('link', { name: 'Python' }).click()

    await page.goto('/get-started/liquid/code-tabs-test')
    await expect(
      page.locator('.ghd-codetabs').nth(0).getByRole('link', { name: 'Python' }),
    ).toHaveAttribute('aria-current', 'page')
  })
})

test('navigate with side bar into article inside a subcategory inside a category', async ({
  page,
}) => {
  // The TreeView sidebar shows two levels until the category expands.
  await page.goto('/actions')
  await page.getByTestId('sidebar').getByText('Category', { exact: true }).click()
  await page.getByTestId('sidebar').getByText('Subcategory').click()
  await page.getByText('<article>').click()
  await expect(page.getByRole('heading', { name: 'Article title' })).toBeVisible()
  await expect(page).toHaveURL(/actions\/category\/subcategory\/article/)
})

test('sidebar custom link functionality works', async ({ page }) => {
  await page.goto('/get-started')

  await expect(page).toHaveTitle(/Getting started with HubGit/)

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

    await page
      .locator('#article-contents')
      .getByRole('link', { name: 'Start your journey' })
      .hover()
    await expect(
      page.getByText(
        'Get started using HubGit to manage Git repositories and collaborate with others.',
      ),
    ).toBeVisible()

    await page.mouse.move(0, 0)
    await expect(
      page.getByText(
        'Get started using GitHub to manage Git repositories and collaborate with others.',
      ),
    ).not.toBeVisible()

    await page.getByRole('link', { name: 'github.com/github/docs' }).hover()
    await expect(page.getByTestId('popover')).not.toBeVisible()

    await page.getByTestId('sidebar').getByRole('link', { name: 'Quickstart' }).hover()
    await expect(page.getByTestId('popover')).not.toBeVisible()

    await page
      .getByTestId('minitoc')
      .getByRole('link', { name: 'Regular internal link', exact: true })
      .hover()
    await expect(page.getByTestId('popover')).not.toBeVisible()

    await page.locator('#article-intro').getByRole('link', { name: 'article intro link' }).hover()
    await expect(page.getByText('You can use HubGit Pages to showcase')).toBeVisible()
    await page.locator('#article-intro').getByRole('link', { name: 'another link' }).hover()
    await expect(
      page.getByText('Follow this Hello World exercise to get started with HubGit.'),
    ).toBeVisible()

    await page
      .locator('#article-contents')
      .getByRole('link', { name: 'introduction', exact: true })
      .hover()
    await expect(page.getByText('You can use HubGit Pages to showcase')).toBeVisible()

    await page.locator('#article-contents').getByRole('link', { name: 'Bold is strong' }).hover()
    await expect(page.getByText('The most basic of fixture data for HubGit')).toBeVisible()
    await page.locator('#article-contents').getByRole('link', { name: 'bar' }).hover()
    await expect(page.getByText("This page doesn't really have an intro")).toBeVisible()
  })

  test('use keyboard shortcut to open hover card', async ({ page }) => {
    await page.goto('/pages/quickstart')
    await turnOffExperimentsInPage(page)

    await page
      .locator('#article-contents')
      .getByRole('link', { name: 'Start your journey' })
      .focus()
    await expect(
      page.getByText(
        'Get started using GitHub to manage Git repositories and collaborate with others.',
      ),
    ).not.toBeVisible()

    await page.keyboard.press('Alt+ArrowUp')
    await expect(
      page.getByText(
        'Get started using HubGit to manage Git repositories and collaborate with others.',
      ),
    ).toBeVisible()

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

    await page
      .locator('#article-contents')
      .getByRole('link', { name: 'Start your journey' })
      .hover()
    await expect(
      page.getByText(
        'Get started using HubGit to manage Git repositories and collaborate with others.',
      ),
    ).toBeVisible()

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

    // Breadcrumbs include Home and the full trail; only the three ancestors are links.
    expect(await page.getByTestId('breadcrumbs-bar').getByRole('link').all()).toHaveLength(3)
    await expect(page.getByTestId('breadcrumbs-bar').locator('[aria-current="page"]')).toHaveText(
      'Bar',
    )
    await expect(page.getByTestId('breadcrumbs-bar').getByText('Foo')).toBeVisible()
    await expect(page.getByTestId('breadcrumbs-bar').getByText('Bar')).toBeVisible()

    await page.goto('/rest/actions/artifacts')
    await expect(page.getByTestId('breadcrumbs-bar')).toBeVisible()

    // Webhooks renders through an AutomatedPage reference page, which shows breadcrumbs.
    await page.goto('/webhooks/webhook-events-and-payloads')
    await expect(page.getByTestId('breadcrumbs-bar')).toBeVisible()
  })

  test('mobile nav opens even when the desktop rail was collapsed', async ({ page }) => {
    // At xxl with both drawers out, the secondary-bar collapse toggle persists collapsed.
    page.setViewportSize({
      width: 1400,
      height: 700,
    })
    await page.goto('/get-started/foo/bar')
    await page.getByTestId('sidebar-collapse-toggle').click()
    await expect(page.getByTestId('sidebar')).toHaveCount(0)

    // Below lg 1012px, the inline mobile nav toggle replaces the desktop collapse toggle.
    page.setViewportSize({
      width: 1000,
      height: 700,
    })

    // Mobile nav must render the doc-tree drawer even with persisted collapsed state.
    await page.getByTestId('sidebar-mobile-toggle').click()
    await expect(page.getByTestId('sidebar')).toBeVisible()

    await page.getByTestId('sidebar-mobile-toggle').click()
    await expect(page.locator('#main-content')).toBeVisible()
  })

  test('resizing from mobile to desktop closes the inline nav', async ({ page }) => {
    // Below lg 1012px, the inline mobile nav lives in the secondary bar.
    await page.setViewportSize({
      width: 1000,
      height: 700,
    })
    await page.goto('/get-started/foo/bar')

    await page.getByTestId('sidebar-mobile-toggle').click()
    const nav = page.locator('[data-container="nav"]')
    await expect(nav).toHaveAttribute('data-mobile-open', 'true')

    // At 1400px, the desktop rail is 326px and replaces full-width mobile markup.
    await page.setViewportSize({
      width: 1400,
      height: 700,
    })
    await expect(nav).toHaveAttribute('data-mobile-open', 'false')
    await expect(nav).toHaveCSS('width', '326px')
  })

  test('large -> x-large viewports - 1012+', async ({ page }) => {
    await page.setViewportSize({
      width: 1012,
      height: 700,
    })
    await page.goto('/get-started/foo/bar')

    await expect(
      page.getByTestId('version-picker').getByText('Select your plan:', { exact: true }),
    ).toBeVisible()
    const planButton = page.getByTestId('version-picker').getByRole('button')
    await expect(planButton).toHaveAccessibleName('Select your plan: Free, Pro, & Team')
    await expect(planButton).toHaveText('Free, Pro, & Team')
    await planButton.click()
    const planMenu = page.getByTestId('version-picker').getByRole('menu')
    await expect(planMenu).toBeVisible()
    await expect(page.getByRole('menuitemradio', { name: 'Enterprise Cloud' })).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(planMenu).not.toBeVisible()

    const languageButton = page.getByRole('button', {
      name: 'Select language: current language is English',
    })
    await expect(languageButton).toHaveText('English')
    await languageButton.click()
    const languageMenu = page.getByTestId('language-picker').getByRole('menu')
    await expect(languageMenu).toBeVisible()
    await expect(page.getByRole('menuitemradio', { name: 'English', exact: true })).toBeVisible()
    await expect(page.getByRole('menuitemradio', { name: '日本語', exact: true })).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(languageMenu).not.toBeVisible()

    await expect(page.getByTestId('header-signup')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Menu', exact: true })).not.toBeVisible()
  })

  test('large viewports - 1012-1279', async ({ page }) => {
    page.setViewportSize({
      width: 1013,
      height: 700,
    })
    await page.goto('/get-started/foo/bar')

    await expect(page.getByTestId('breadcrumbs-bar')).toBeVisible()
    expect(await page.getByTestId('breadcrumbs-bar').getByRole('link').all()).toHaveLength(3)

    // At lg+, the desktop rail shows and the inline-nav toggle hides.
    await expect(page.getByTestId('sidebar')).toBeVisible()
    await expect(page.getByTestId('sidebar-collapse-toggle')).toBeVisible()
    await expect(page.getByTestId('sidebar-mobile-toggle')).toBeHidden()
    await page.getByTestId('sidebar-collapse-toggle').click()
    await expect(page.getByTestId('sidebar')).toBeHidden()
  })

  for (const { name, width } of [
    { name: 'medium viewports - 768-1011', width: 1000 },
    { name: 'small viewports - 544-767', width: 555 },
    { name: 'x-small viewports - 0-544', width: 345 },
  ]) {
    test(name, async ({ page }) => {
      await page.setViewportSize({ width, height: 700 })
      await page.goto('/get-started/foo/bar')
      await turnOffExperimentsInPage(page)

      // Both selectors and the signup action move into the utility menu below 1012px.
      await expect(page.getByTestId('header-signup')).not.toBeVisible()
      await expect(page.getByTestId('language-picker')).not.toBeVisible()
      await expect(page.getByTestId('version-picker')).not.toBeVisible()
      await expect(page.getByTestId('toggle-search')).toBeVisible()

      await page.getByRole('button', { name: 'Menu', exact: true }).click()
      await expect(
        page.getByTestId('version-picker').getByText('Select your plan:', { exact: true }),
      ).toBeVisible()
      const planButton = page.getByTestId('version-picker').getByRole('button')
      await expect(planButton).toHaveAccessibleName('Select your plan: Free, Pro, & Team')
      await expect(planButton).toHaveText('Free, Pro, & Team')
      await planButton.click()
      const planMenu = page.getByTestId('version-picker').getByRole('menu')
      await expect(planMenu).toBeVisible()
      await expect(page.getByRole('menuitemradio', { name: 'Enterprise Cloud' })).toBeVisible()
      await page.keyboard.press('Escape')
      await expect(planMenu).not.toBeVisible()

      // Language selection remains a complete nested dropdown, not a bare list.
      await page
        .getByRole('button', { name: 'Select language: current language is English' })
        .click()
      const languageMenu = page.getByTestId('language-picker').getByRole('menu')
      await expect(languageMenu).toBeVisible()
      await expect(page.getByRole('menuitemradio', { name: 'English', exact: true })).toBeVisible()
      await expect(page.getByRole('menuitemradio', { name: '日本語', exact: true })).toBeVisible()
      await page.keyboard.press('Escape')
      await expect(languageMenu).not.toBeVisible()
      await expect(page.getByTestId('header-signup')).toBeVisible()

      // The secondary-bar nav stays inert until the modal header menu closes.
      await page.getByRole('button', { name: 'Close menu', exact: true }).click()
      await expect(page.getByTestId('sidebar-mobile-toggle')).toBeVisible()
      await page.getByTestId('sidebar-mobile-toggle').click()
      await expect(page.getByTestId('sidebar')).toBeVisible()
    })
  }

  test('do a search when the viewport is x-small', async ({ page }) => {
    test.skip(!SEARCH_TESTS, 'No local Elasticsearch, no tests involving search')

    page.setViewportSize({
      width: 500,
      height: 700,
    })
    await page.goto('/get-started/foo/bar')
    await turnOffExperimentsInPage(page)

    await page.getByTestId('toggle-search').click()
    await page.getByTestId('overlay-search-input').fill('serve playwright')
    await page.waitForTimeout(1000)
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

    await page.getByTestId('toggle-search').click()
    await page.getByTestId('overlay-search-input').fill('serve playwright')
    await page.waitForTimeout(1000)
    await page.getByText('View more results').click()

    await expect(page).toHaveURL(
      /\/search\?search-overlay-input=serve\+playwright&query=serve\+playwright/,
    )
    await expect(page).toHaveTitle(/\d Search results for "serve playwright"/)
  })
})

test.describe('secondary-bar breadcrumb scroller', () => {
  // Cap breadcrumb scroller width to force deterministic overflow.
  test('chevrons scroll one crumb at a time instead of jumping to the ends', async ({ page }) => {
    // Several smooth-scroll waits can exceed the default 5s test cap.
    test.setTimeout(20000)
    page.setViewportSize({ width: 1300, height: 700 })
    await page.goto('/get-started/foo/bar')

    const bar = page.getByTestId('breadcrumbs-bar')
    await expect(bar).toBeVisible()

    const scrollArea = page.locator('[data-search="breadcrumbs"]')
    await expect(scrollArea).toBeVisible()

    // Cap scroll width, remove nav min-width:100%, and pad crumbs to detect nudges.
    await page.addStyleTag({
      content: `
        [data-search="breadcrumbs"] { max-width: 360px; }
        [data-search="breadcrumbs"] nav { min-width: 0 !important; }
        [data-search="breadcrumbs"] li { padding-right: 60px; }
      `,
    })

    const scrollLeftOf = () => scrollArea.evaluate((el) => el.scrollLeft)
    const maxScrollOf = () => scrollArea.evaluate((el) => el.scrollWidth - el.clientWidth)
    await expect.poll(maxScrollOf).toBeGreaterThan(0)

    // Start fully scrolled right so only the left chevron is active.
    await scrollArea.evaluate((el) => el.scrollTo({ left: el.scrollWidth, behavior: 'instant' }))
    const maxScroll = await maxScrollOf()
    await expect.poll(scrollLeftOf).toBe(maxScroll)

    const leftChevron = page.getByRole('button', { name: 'Scroll breadcrumbs left' })
    const rightChevron = page.getByRole('button', { name: 'Scroll breadcrumbs right' })
    await expect(leftChevron).toBeVisible()
    await expect(rightChevron).toBeHidden()

    // One left click must move without jumping to 0 while crumbs stay hidden left.
    await leftChevron.click()
    await expect.poll(scrollLeftOf).toBeLessThan(maxScroll)
    const afterOneLeft = await scrollLeftOf()
    expect(afterOneLeft).toBeGreaterThan(0)
    await expect(rightChevron).toBeVisible()

    // Right click returns by one crumb, not a jump to the right extreme.
    await rightChevron.click()
    await expect.poll(scrollLeftOf).toBeGreaterThan(afterOneLeft)

    // Drive off chevron visibility because smooth scrolling can leave sub-pixel scrollLeft.
    for (let i = 0; i < 6 && (await leftChevron.isVisible()); i++) {
      await leftChevron.click()
      await page.waitForTimeout(200)
    }
    await expect(leftChevron).toBeHidden()
    await expect.poll(scrollLeftOf).toBeLessThanOrEqual(1)
  })
})

test.describe('anchor link scrolling', () => {
  // At xxl, centering the active doc-tree item can undo browser anchor scrolling.
  const WIDE = { width: 1400, height: 720 }

  // scroll-margin-top is 109px at xxl; allow rounding and sticky-header slack, but reject an unscrolled page.
  const expectScrolledToTarget = async (page: import('@playwright/test').Page) => {
    const heading = page.locator('#target-heading')
    await expect(heading).toBeVisible()
    await expect.poll(async () => Math.round((await heading.boundingBox())!.y)).toBeLessThan(200)
    expect(await page.evaluate(() => Math.round(window.scrollY))).toBeGreaterThan(300)
  }

  test('a direct load of a URL with an #anchor scrolls to that section', async ({ page }) => {
    page.setViewportSize(WIDE)
    await page.goto('/get-started/foo/anchor-scrolling#target-heading')
    await expect(page.getByTestId('sidebar')).toBeVisible()
    await expectScrolledToTarget(page)

    // Fail if the fixture rail stops scrolling, because the test would cover nothing.
    const railScrollTop = await page
      .getByTestId('sidebar')
      .evaluate((el) => el.closest('[role="region"]')!.scrollTop)
    expect(railScrollTop).toBeGreaterThan(0)
  })

  test('clicking a cross-page #anchor link scrolls to that section', async ({ page }) => {
    page.setViewportSize(WIDE)
    await page.goto('/get-started/foo/for-playwright')
    await page.locator('main a[href$="/get-started/foo/anchor-scrolling#target-heading"]').click()
    await expect(page).toHaveURL(/anchor-scrolling#target-heading/)
    await expectScrolledToTarget(page)
  })

  test('navigating to a page without an #anchor still lands at the top', async ({ page }) => {
    page.setViewportSize(WIDE)
    await page.goto('/get-started/foo/anchor-scrolling#target-heading')
    await expectScrolledToTarget(page)

    await page.getByTestId('sidebar').getByRole('link', { name: 'Bar', exact: true }).click()
    await expect(page).toHaveURL(/\/en\/get-started\/foo\/bar$/)
    await expect.poll(async () => page.evaluate(() => Math.round(window.scrollY))).toBe(0)
  })
})

test.describe('survey', () => {
  test.skip(!ANALYTICS_ENABLED, 'Analytics are disabled')

  test('happy path, thumbs up and enter comment and email', async ({ page }) => {
    let fulfilled = 0
    let hasSurveyPressedEvent = false
    let hasSurveySubmittedEvent = false

    const surveyComment = 'This is a comment'

    // Install the route before interacting with the page to avoid event races.
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
      // Chromium hides sendBeacon payloads from Playwright: https://github.com/microsoft/playwright/issues/12231
    })

    await page.addInitScript(() => {
      window.GHDOCSPLAYWRIGHT = 1
    })

    await page.goto('/get-started/foo/for-playwright')

    // The label renders as an SVG, so locate it by for=survey-yes.
    await page.locator('[for=survey-yes]').click()
    await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Send' })).toBeVisible()

    await page.locator('[for=survey-comment]').fill(surveyComment)
    await page.locator('[name=survey-email]').click()
    await page.locator('[name=survey-email]').fill('test@example.com')
    await page.getByRole('button', { name: 'Send' }).click()
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

    // fulfilled counts page view, survey thumbs up, survey submit, and exit events.
    expect(fulfilled).toBe(1 + 1 + 1 + 1)
    expect(hasSurveyPressedEvent).toBe(true)
    expect(hasSurveySubmittedEvent).toBe(true)
    await expect(page.getByTestId('survey-end')).toBeVisible()
  })

  test('thumbs up without filling in the form sends an API POST', async ({ page }) => {
    let fulfilled = 0
    let hasSurveyEvent = false

    // Install the route before interacting with the page to avoid event races.
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
      // Chromium hides sendBeacon payloads from Playwright: https://github.com/microsoft/playwright/issues/12231
    })

    await page.addInitScript(() => {
      window.GHDOCSPLAYWRIGHT = 1
    })

    await page.goto('/get-started/foo/for-playwright')

    await page.locator('[for=survey-yes]').click()
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
    // fulfilled counts page view, thumbs up, and exit events.
    expect(fulfilled).toBe(1 + 1 + 1)
    expect(hasSurveyEvent).toBe(true)

    await expect(page.getByRole('button', { name: 'Send' })).toBeVisible()
    await page.getByRole('button', { name: 'Cancel' }).click()
  })

  test('vote on one page, then go to another and it should reset', async ({ page }) => {
    // Install the route before interacting with the page to avoid event races.
    await page.route('**/api/events', (route) => {
      route.fulfill({})
    })

    await page.goto('/get-started/foo/for-playwright')

    await expect(page.locator('[for=survey-comment]')).not.toBeVisible()
    await page.locator('[for=survey-yes]').click()
    await expect(page.getByRole('button', { name: 'Send' })).toBeVisible()
    await expect(page.locator('[for=survey-comment]')).toBeVisible()

    await page
      .getByTestId('product-sidebar')
      .getByRole('link', { name: 'Bar', exact: true })
      .click()
    await expect(page.getByRole('button', { name: 'Send' })).not.toBeVisible()
    await expect(page.locator('[for=survey-comment]')).not.toBeVisible()
  })
})

test.describe('rest API reference pages', () => {
  test('REST actions', async ({ page }) => {
    await page.goto('/rest')
    // Redirect must add the apiVersion query before sidebar navigation.
    await expect(page).toHaveURL(/\/en\/rest\?apiVersion=/)
    await page.getByTestId('sidebar').getByText('Actions').click()
    // Brand NavList renders leaf articles as links, not Primer's label-associated controls.
    await page.getByTestId('sidebar').getByRole('link', { name: 'Artifacts' }).click()
    await page
      .getByTestId('sidebar')
      .getByRole('link', { name: 'About artifacts in HubGit Actions' })
      .click()
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

    // Bust the URL because Playwright caches the redirect back to Japanese.
    const cb = `?cb=${Math.random()}`
    await page.goto(`/get-started/start-your-journey/hello-world${cb}`)
    await expect(page).toHaveURL(`/ja/get-started/start-your-journey/hello-world${cb}`)

    await page.goto('/en/get-started/start-your-journey/hello-world')
    await expect(page).toHaveURL('/ja/get-started/start-your-journey/hello-world')
  })
})

test('open search, and ask Copilot (Ask AI) a question', async ({ page }) => {
  test.skip(!SEARCH_TESTS, 'No local Elasticsearch, no tests involving search')

  await page.route('**/api/ai-search/v1', async (route) => {
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

  await page.getByTestId('toggle-search').click()
  await page.getByTestId('overlay-search-input').fill('How do I create a Repository?')
  await page.keyboard.press('Enter')

  await expect(page.getByText('Creating a repository on GitHub')).toBeVisible()

  await expect(page.getByText('Creating a new repository')).toBeVisible()

  await expect(page.getByText('something you should already know how to do')).toBeVisible()

  const aiReferencesSection = page.getByTestId('ai-references')
  await expect(aiReferencesSection).toBeVisible()

  await expect(page.getByText('Creating a new repository')).toBeVisible()
})

test('open search, Ask AI returns 400 error and shows general search results', async ({ page }) => {
  test.skip(!SEARCH_TESTS, 'No local Elasticsearch, no tests involving search')

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

  await page.getByTestId('toggle-search').click()
  await page.getByTestId('overlay-search-input').fill('foo')
  await page.keyboard.press('Enter')

  // Search suggestions render as ActionList buttons, so scope Foo and Bar to the suggestion group.
  const generalSuggestions = page.getByTestId('general-autocomplete-suggestions')
  await expect(generalSuggestions.getByRole('button', { name: 'Foo' })).toBeVisible()
  await expect(generalSuggestions.getByRole('button', { name: 'Bar' })).toBeVisible()

  // Wait for the canned 400 response before checking the paragraph.
  await page.waitForTimeout(1000)

  await expect(
    page
      .getByRole('paragraph')
      .getByText(
        /Sorry, I'm unable to answer that question. Please try asking a different question./,
      ),
  ).toBeVisible()

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

    // Brand Card renders each card title as h3 Card.Heading around a stretched link.
    const items = page.locator('[data-testid="carousel-items"]')
    const cardHeadings = items.locator('h3')
    await expect(cardHeadings.first()).toBeVisible()

    await expect(cardHeadings.first()).not.toHaveText('Unknown Article')
  })

  test('navigation works on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 800 })
    await page.goto('/get-started/carousel')

    const carousel = page.locator('[data-testid="landing-carousel"]')
    await expect(carousel).toBeVisible()

    const cards = carousel.locator('a')
    await expect(cards).toHaveCount(3)

    const nextButton = carousel.getByRole('button', { name: 'Next articles' })
    if (await nextButton.isVisible()) {
      const prevButton = carousel.getByRole('button', { name: 'Previous articles' })
      await expect(prevButton).toBeDisabled()
      await expect(nextButton).toBeEnabled()
    }
  })

  test('responsive behavior on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/get-started/carousel')

    const carousel = page.locator('[data-testid="landing-carousel"]')
    await expect(carousel).toBeVisible()

    const cards = carousel.locator('a')
    await expect(cards).toHaveCount(1)
  })
})

test.describe('Multi-carousel support', () => {
  test('displays multiple carousels from carousels frontmatter', async ({ page }) => {
    await page.goto('/get-started/multi-carousel')

    const carousels = page.locator('[data-testid="landing-carousel"]')
    const carouselCount = await carousels.count()

    // Frontmatter defines exactly two carousels.
    expect(carouselCount).toBe(2)
  })

  test('carousel with matching ui.yml key displays translated title', async ({ page }) => {
    await page.goto('/get-started/multi-carousel')

    // The recommended carousel title comes from ui.yml.
    const carouselHeadings = page.locator('[data-testid="landing-carousel"] h2')

    const headingTexts = await carouselHeadings.allTextContents()

    expect(headingTexts.some((text) => text.includes('Recommended'))).toBe(true)
  })

  test('carousel without matching ui.yml key renders without title', async ({ page }) => {
    await page.goto('/get-started/multi-carousel')

    // A carousel without a matching ui.yml key has no heading element.
    const carouselHeadings = page.locator('[data-testid="landing-carousel"] h2')
    const headingTexts = await carouselHeadings.allTextContents()

    // titleTwoNoMatchingUiYml must not render as a fallback heading.
    expect(headingTexts.some((text) => text === 'titleTwoNoMatchingUiYml')).toBe(false)
  })

  test('heading h2 element is only present when ui.yml translation exists', async ({ page }) => {
    await page.goto('/get-started/multi-carousel')

    const carousels = page.locator('[data-testid="landing-carousel"]')
    const count = await carousels.count()

    expect(count).toBe(2)

    let carouselsWithHeadings = 0
    for (let i = 0; i < count; i++) {
      const carousel = carousels.nth(i)
      const h2Count = await carousel.locator('h2').count()
      if (h2Count > 0) {
        carouselsWithHeadings++
      }
    }

    // Only recommended has a ui.yml entry, so titleTwoNoMatchingUiYml must not render an h2.
    expect(carouselsWithHeadings).toBe(1)

    const visibleHeadings = await carousels.locator('h2').allTextContents()
    expect(visibleHeadings).toContain('Recommended')
    expect(visibleHeadings).not.toContain('titleTwoNoMatchingUiYml')
  })

  test('each carousel has articles based on frontmatter paths', async ({ page }) => {
    await page.goto('/get-started/multi-carousel')

    const carousels = page.locator('[data-testid="landing-carousel"]')
    const count = await carousels.count()

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

    const tracks = page.locator('[data-testid="journey-track"]')
    await expect(tracks.first()).toBeVisible()

    const firstTrack = tracks.first()
    await expect(firstTrack.locator('h2')).toBeVisible()
    await expect(firstTrack.locator('p')).toBeVisible()
  })

  test('track expansion and collapse functionality', async ({ page }) => {
    await page.goto('/get-started/test-journey')

    const firstTrack = page.locator('[data-testid="journey-track"]').first()
    const expandButton = firstTrack.locator('summary')

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

    // Article links preserve language and version.
    const firstArticle = firstTrack.locator('[data-testid="journey-articles"] li a').first()
    const href = await firstArticle.getAttribute('href')

    expect(href).toContain('/en/')
    expect(href).toContain('enterprise-cloud@latest')
  })

  test('handles liquid template rendering in track content', async ({ page }) => {
    await page.goto('/get-started/test-journey')

    const tracks = page.locator('[data-testid="journey-track"]')

    const trackContent = await tracks.first().textContent()
    expect(trackContent).not.toContain('{{')
    expect(trackContent).not.toContain('}}')
    expect(trackContent).not.toContain('{%')
    expect(trackContent).not.toContain('%}')
  })

  test('renders the single-track journey landing path', async ({ page }) => {
    await page.goto('/get-started/test-journey-single')

    // Single-track pages render the simplified heading and guide list instead of numbered cards.
    const singleTrack = page.locator('[data-testid="journey-single-track"]')
    await expect(singleTrack).toBeVisible()
    await expect(page.locator('[data-testid="journey-tracks"]')).toHaveCount(0)

    await expect(singleTrack.locator('h2')).toBeVisible()

    const guides = singleTrack.locator('[data-testid="journey-articles"] li a')
    await expect(guides.first()).toBeVisible()
    expect(await guides.count()).toBeGreaterThan(0)

    // Without a card, the guide list sits flush with the heading instead of inheriting inset.
    const listPaddingLeft = await singleTrack
      .locator('[data-testid="journey-articles"]')
      .evaluate((el) => getComputedStyle(el).paddingLeft)
    expect(listPaddingLeft).toBe('0px')
  })

  test('journey navigation components show on article pages', async ({ page }) => {
    await page.goto('/get-started/start-your-journey/hello-world')

    // Journey next-step info shows in the bottom pager and the right-rail Up next section.
    const journeyNav = page.locator('[data-testid="journey-track-nav"]')
    await expect(journeyNav).toBeVisible()
  })

  // A drawer-range viewport shows alternativeNextStep and AUTOTITLE in Up next; the long fixture hides the pager.
  test('up next displays branching text when present', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.goto('/get-started/foo/journey-test-article')
    await turnOffExperimentsInPage(page)
    await expect(page.getByTestId('journey-track-nav')).not.toBeInViewport()

    const upNext = page.getByTestId('up-next')
    await expect(upNext).toBeVisible()

    // Branching text renders after resolving its markdown link.
    await expect(upNext).toContainText('Want to skip ahead?')
    await expect(upNext).not.toContainText('AUTOTITLE')

    const branchingLink = upNext.locator('a').filter({ hasText: 'Hello World' })
    await expect(branchingLink).toBeVisible()

    const href = await branchingLink.getAttribute('href')
    expect(href).toContain('/get-started/start-your-journey/hello-world')
  })

  test('up next yields to the bottom pager and reappears when scrolling back up', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.goto('/get-started/foo/journey-test-article')
    await turnOffExperimentsInPage(page)

    const upNext = page.getByTestId('up-next')
    const journeyNav = page.getByTestId('journey-track-nav')
    await expect(journeyNav).not.toBeInViewport()
    await expect(upNext).toBeVisible()

    await journeyNav.evaluate((pager) =>
      pager.scrollIntoView({ block: 'center', behavior: 'instant' }),
    )
    await expect(journeyNav).toBeInViewport()
    await expect(upNext).toBeHidden()

    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
    await expect(journeyNav).not.toBeInViewport()
    await expect(upNext).toBeVisible()
  })

  test('journey footer nav component links to first article in next track from last article in previous track', async ({
    page,
  }) => {
    await page.goto('/get-started/foo/bar')

    const journeyNav = page.locator('[data-testid="journey-track-nav"]')
    await expect(journeyNav).toBeVisible()

    const nextTrackLink = journeyNav.locator('a').filter({ hasText: 'Advanced topics' })
    await expect(nextTrackLink).toBeVisible()

    const href = await nextTrackLink.getAttribute('href')
    expect(href).toContain('/get-started/foo/autotitling')
  })
})

test.describe('Docs 2026 in-article navigation', () => {
  // Below the drawer breakpoint, the secondary-bar mini-TOC is the only in-page control.
  test('the collapsed "In this article" menu navigates below the drawer breakpoint', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1100, height: 900 })
    await page.goto('/get-started/liquid/platform-specific')
    await turnOffExperimentsInPage(page)

    const subBar = page.getByTestId('overview-subbar')
    await expect(subBar).toBeVisible()
    await expect(page.getByTestId('minitoc')).toBeHidden()

    await subBar.getByRole('button').click()
    const menu = page.getByTestId('overview-menu')
    await expect(menu).toBeVisible()

    const firstLink = menu.getByRole('link').first()
    const href = await firstLink.getAttribute('href')
    expect(href).toBeTruthy()
    await firstLink.click()
    expect(page.url()).toContain(href)
  })

  // useActiveSection filters hidden platform/tool headings because they have zero rects.
  test('the collapsed menu is never labelled with a hidden platform section', async ({ page }) => {
    await page.setViewportSize({ width: 1100, height: 900 })
    await page.goto('/get-started/liquid/platform-specific?platform=windows')
    await turnOffExperimentsInPage(page)

    const trigger = page.getByTestId('overview-subbar').getByRole('button')
    await expect(trigger).toBeVisible()
    await expect(trigger).not.toContainText('Macintosh')

    await page.mouse.wheel(0, 2000)
    await expect(trigger).not.toContainText('Macintosh')
  })
})

test.describe('LandingArticleGridWithFilter component', () => {
  test('displays article grid with filter controls', async ({ page }) => {
    await page.goto('/get-started/article-grid-discovery')

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

    const articleCards = articleGrid.getByTestId('article-card')
    await expect(articleCards.first()).toBeVisible()

    const firstCard = articleCards.first()
    // Brand Card renders titles as h3 Card.Heading links and intros as Card.Description paragraphs.
    const titleLink = firstCard.locator('h3 a')
    await expect(titleLink).toBeVisible()

    const intro = firstCard.locator('p').last()
    await expect(intro).toBeVisible()
    const introText = await intro.textContent()
    expect(introText).toBeTruthy()

    const cardText = await firstCard.textContent()
    expect(cardText).toBeTruthy()
    expect(cardText!.length).toBeGreaterThan(0)
  })

  test('category filtering works correctly', async ({ page }) => {
    await page.goto('/get-started/article-grid-discovery')

    const categoryDropdown = page.getByRole('button').filter({ hasText: 'All categories' })
    await expect(categoryDropdown).toBeVisible()

    // The fixture starts with four articles.
    const articleGrid = page.getByTestId('article-grid')
    await expect(articleGrid).toBeVisible()
    const allArticleCards = articleGrid.getByTestId('article-card')
    await expect(allArticleCards).toHaveCount(4)

    await categoryDropdown.click()
    const testingOption = page.getByText('Testing', { exact: true }).last()
    await expect(testingOption).toBeVisible()
    await testingOption.click()

    // Filtering by Testing leaves one fixture article.
    await expect(allArticleCards).toHaveCount(1)

    const remainingCard = allArticleCards.first()
    await expect(remainingCard).toContainText('Testing')
  })

  test('search functionality works', async ({ page }) => {
    await page.goto('/get-started/article-grid-discovery')

    const searchInput = page.getByPlaceholder('Search articles')
    await expect(searchInput).toBeVisible()

    // The fixture starts with four articles.
    const articleGrid = page.getByTestId('article-grid')
    await expect(articleGrid).toBeVisible()

    const articleCards = articleGrid.getByTestId('article-card')
    await expect(articleCards).toHaveCount(4)

    // Multiple fixture article names contain Grid.
    await searchInput.fill('Grid')
    await expect(articleCards.first()).toBeVisible()

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

    await searchInput.fill('noSuchArticles')
    const articleGrid = page.getByTestId('article-grid')
    await expect(articleGrid).toBeVisible()
    const articleCards = articleGrid.getByTestId('article-card')
    await expect(articleCards).toHaveCount(0)

    const noResultsMessage = page.getByTestId('no-articles-message')
    await expect(noResultsMessage).toBeVisible()
    await expect(noResultsMessage).toHaveText('No articles found matching your criteria.')
  })

  test('responsive behavior on different screen sizes', async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 800 })
    await page.goto('/get-started/article-grid-discovery')
    const articleGrid = page.getByTestId('article-grid')
    await expect(articleGrid).toBeVisible()

    await page.setViewportSize({ width: 768, height: 1024 })
    await page.waitForTimeout(100)
    await expect(articleGrid).toBeVisible()

    await page.setViewportSize({ width: 375, height: 667 })
    await page.waitForTimeout(100)
    await expect(articleGrid).toBeVisible()
  })

  test('works with bespoke landing page', async ({ page }) => {
    await page.goto('/get-started/article-grid-bespoke')

    const articleGrid = page.getByTestId('article-grid')
    await expect(articleGrid).toBeVisible()
  })

  test('card is keyboard-navigable via Enter (client-side)', async ({ page }) => {
    // Brand Card's stretched anchor must bubble keyboard clicks for client-side navigation.
    await page.goto('/get-started/article-grid-discovery')

    const articleGrid = page.getByTestId('article-grid')
    await expect(articleGrid).toBeVisible()

    const firstCardLink = articleGrid.getByTestId('article-card').first().getByRole('link').first()
    const href = await firstCardLink.getAttribute('href')
    expect(href).toBeTruthy()

    // A hard navigation would clear this window marker; client-side navigation preserves it.
    await page.evaluate(() => {
      ;(window as unknown as { __spaMarker?: boolean }).__spaMarker = true
    })

    await firstCardLink.focus()
    await page.keyboard.press('Enter')

    await expect(page).toHaveURL(new RegExp(RegExp.escape(href!)))
    const stillClientSide = await page.evaluate(
      () => (window as unknown as { __spaMarker?: boolean }).__spaMarker === true,
    )
    expect(stillClientSide).toBe(true)
  })

  test('bespoke landing page does not show duplicate articles', async ({ page }) => {
    // Bespoke fixtures list articles and their parent group, so deduplication prevents duplicates.
    await page.goto('/get-started/article-grid-bespoke')

    const articleGrid = page.getByTestId('article-grid')
    await expect(articleGrid).toBeVisible()

    const articleCards = articleGrid.getByTestId('article-card')
    // Four unique articles remain after deduplicating grid-article-one and grid-article-two.
    await expect(articleCards).toHaveCount(4)

    const titles: string[] = []
    const count = await articleCards.count()
    for (let i = 0; i < count; i++) {
      const title = await articleCards.nth(i).locator('h3').textContent()
      titles.push(title!)
    }
    const uniqueTitles = new Set(titles)
    expect(uniqueTitles.size).toBe(titles.length)
  })
})

test.describe('Non-child page resolution', () => {
  test('category page with local children renders properly', async ({ page }) => {
    // local-category mixes local-article-one, local-article-two, and an external frontmatter child.
    await page.goto('/get-started/non-child-resolution/local-category')

    await expect(page).toHaveTitle(/Local category test/)

    await expect(page.locator('main')).toBeVisible()
  })

  test('cross-product children page loads correctly', async ({ page }) => {
    // The articles-only fixture prefixes cross-product children with /content/.
    await page.goto('/get-started/non-child-resolution/articles-only')

    await expect(page).toHaveTitle(/Cross-product children test/)
    await expect(page.locator('main')).toBeVisible()
  })

  test('children-only page with /content/ path loads correctly', async ({ page }) => {
    // The children-only fixture prefixes cross-product children with /content/.
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
    // In fpt, only only-fpt is available.
    await page.goto('/get-started/non-child-resolution/versioned-cross-product')

    await expect(page).toHaveTitle(/Versioned cross-product test/)
    await expect(page.locator('main')).toBeVisible()

    const tocLinks = page.locator('[data-testid="table-of-contents"] a')
    await expect(tocLinks).toHaveCount(1)
    await expect(tocLinks.first()).toHaveAttribute('href', /only-fpt/)
  })

  test('versioned cross-product children - ghec shows ghec articles', async ({ page }) => {
    // In ghec, only-ghec and only-ghec-and-ghes are available.
    await page.goto(
      '/enterprise-cloud@latest/get-started/non-child-resolution/versioned-cross-product',
    )

    await expect(page).toHaveTitle(/Versioned cross-product test/)
    await expect(page.locator('main')).toBeVisible()

    const tocLinks = page.locator('[data-testid="table-of-contents"] a')
    await expect(tocLinks).toHaveCount(2)
  })

  test('cross-product children excluded from sidebar in Japanese translation', async ({ page }) => {
    // Japanese translations work with cross-product children.
    await page.goto('/ja/get-started/non-child-resolution')

    // Fixture titles can be partly untranslated, but Japanese site context must render.
    await expect(page).toHaveTitle(/GitHub Docs/)
    await expect(page.locator('main')).toBeVisible()
  })
})

test.describe('copy as markdown button', () => {
  // api-article-body.ts serves this fixture's article-body fetch, so the copy path succeeds.
  const articlePath = '/en/get-started/start-your-journey/api-article-body-test-page'

  test('shows a checkmark after a successful copy', async ({ page, context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write'])

    await page.goto(articlePath)
    await turnOffExperimentsInPage(page)

    // Accessible-name matching treats names as substrings, so exact avoids code-block copy buttons.
    const copyButton = page.getByRole('button', { name: 'Copy markdown', exact: true })
    await expect(copyButton).toHaveCount(1)
    await expect(copyButton).toBeVisible()

    // At rest the button is text-only; the checkmark is only the success state.
    await expect(copyButton.locator('svg')).toHaveCount(0)

    await copyButton.click()

    await expect(copyButton.locator('.octicon-check')).toBeVisible()

    const clipboardText = await page.evaluate(() => navigator.clipboard.readText())
    expect(clipboardText).toContain('About GitHub')

    // The success checkmark clears after the 2s timeout.
    await expect(copyButton.locator('.octicon-check')).toHaveCount(0, { timeout: 5000 })
  })
})

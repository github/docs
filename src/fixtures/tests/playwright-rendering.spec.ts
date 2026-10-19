import dotenv from 'dotenv'
import { test, expect, type Page } from '@playwright/test'
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
  await page.getByTestId('view-all-results').click()

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
  await page.getByTestId('view-all-results').click()

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

  // Walk down to "For Playwright" rather than assuming a fixed number of presses — AI rows
  // render above docs rows, so this keeps working if the groups are reordered again.
  const input = page.getByTestId('overlay-search-input')
  const targetId = await searchOverlay
    .locator('[role="option"][id^="search-option-general-"]', { hasText: 'For Playwright' })
    .first()
    .getAttribute('id')
  expect(targetId).toBeTruthy()

  for (let i = 0; i < 15; i++) {
    if ((await input.getAttribute('aria-activedescendant')) === targetId) break
    await page.keyboard.press('ArrowDown')
  }
  await expect(input).toHaveAttribute('aria-activedescendant', targetId as string)

  // Select the general search item, "For Playwright"
  await page.keyboard.press('Enter')

  await expect(page).toHaveURL(/\/get-started\/foo\/for-playwright$/)
  await expect(page).toHaveTitle(/For Playwright/)
})

test('open search, and arrow down to the pinned "View all results" option', async ({ page }) => {
  test.skip(!SEARCH_TESTS, 'No local Elasticsearch, no tests involving search')

  await page.goto('/')
  await turnOffExperimentsInPage(page)

  await page.getByTestId('toggle-search').click()
  const input = page.getByTestId('overlay-search-input')
  await input.fill('serve playwright')
  await expect(page.getByTestId('view-all-results')).toBeVisible()

  // Count across the dialog: the pinned view-all joins the listbox through aria-owns, so it
  // is not a DOM descendant of #search-listbox.
  const optionCount = await page.locator('[role="dialog"] [role="option"]').count()

  // The pinned control is the final stop, not an unreachable footer link. Stepping once
  // more past it returns to "nothing selected" rather than wrapping.
  for (let i = 0; i < optionCount; i++) {
    await page.keyboard.press('ArrowDown')
  }
  await expect(input).toHaveAttribute('aria-activedescendant', 'search-option-view-all')
  await expect(page.getByTestId('view-all-results')).toHaveAttribute('aria-selected', 'true')
  // Pinned outside the scroller, so it stays on screen even when selected last.
  await expect(page.getByTestId('view-all-results')).toBeInViewport()

  await page.keyboard.press('ArrowDown')
  await expect(input).not.toHaveAttribute('aria-activedescendant', /.+/)

  // ArrowUp from nothing selected lands on the last option, which is this one.
  await page.keyboard.press('ArrowUp')
  await expect(input).toHaveAttribute('aria-activedescendant', 'search-option-view-all')

  await page.keyboard.press('Enter')
  await expect(page).toHaveURL(/\/search\?.*query=serve\+playwright/)
})

test('search overlay keeps aria-activedescendant resolvable across the whole cycle', async ({
  page,
}) => {
  test.skip(!SEARCH_TESTS, 'No local Elasticsearch, no tests involving search')

  await page.goto('/')
  await turnOffExperimentsInPage(page)

  await page.getByTestId('toggle-search').click()
  const input = page.getByTestId('overlay-search-input')
  await input.fill('serve playwright')
  await expect(page.getByTestId('view-all-results')).toBeVisible()

  const optionCount = await page.locator('[role="dialog"] [role="option"]').count()
  expect(optionCount).toBeGreaterThan(0)

  // Walk past both ends in both directions. At every step the active descendant must
  // either be absent or name a live element inside the controlled region — the class of
  // bug that phantom indices used to produce silently.
  for (const key of ['ArrowDown', 'ArrowUp']) {
    for (let i = 0; i < optionCount + 2; i++) {
      await page.keyboard.press(key)
      const check = await page.evaluate(() => {
        const el = document.querySelector('[data-testid="overlay-search-input"]')!
        const activeId = el.getAttribute('aria-activedescendant')
        if (!activeId) return { ok: true, activeId: null }
        const controls = document.getElementById(el.getAttribute('aria-controls')!)
        const target = document.getElementById(activeId)
        // Inside the listbox, or owned by it: the pinned view-all joins through aria-owns.
        const owned = (controls?.getAttribute('aria-owns') || '').split(/\s+/).includes(activeId)
        return {
          ok: !!target && !!controls && (controls.contains(target) || owned),
          activeId,
          selectedCount: document.querySelectorAll('[role="option"][aria-selected="true"]').length,
        }
      })
      expect(
        check.ok,
        `${key} step ${i}: ${check.activeId} did not resolve inside the listbox`,
      ).toBe(true)
      if (check.activeId) {
        expect(check.selectedCount).toBe(1)
      }
    }
  }
})

// The dialog's own contract. Search is mocked, so these run without Elasticsearch: they
// test the modal and its keyboard model, not search relevance.
test.describe('search dialog', () => {
  const HITS = [
    { title: 'Bar Usually Comes After Foo', url: '/en/get-started/foo/bar' },
    { title: 'For Playwright', url: '/en/get-started/foo/for-playwright' },
  ]

  async function mockSearch(page: Page, { delayMs = 0, fail = false } = {}) {
    await page.route('**/api/search/combined-search/v1**', async (route) => {
      if (fail) return route.fulfill({ status: 500, body: '{"error":"mocked"}' })
      const query = new URL(route.request().url()).searchParams.get('query') || ''
      if (delayMs) await new Promise((resolve) => setTimeout(resolve, delayMs))
      try {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({
            aiAutocompleteSuggestions: {
              meta: {},
              hits: [{ term: `how do I ${query.trim()}?`, highlights: [] }],
            },
            generalSearchResults: { meta: { found: { value: 2 } }, hits: HITS },
          }),
        })
      } catch {
        // The page may have navigated away while a delayed response was pending.
      }
    })
  }

  // Every id aria-activedescendant names must exist in the DOM.
  async function expectActiveDescendantResolves(page: Page) {
    const id = await page.getByTestId('overlay-search-input').getAttribute('aria-activedescendant')
    if (id) await expect(page.locator(`[id="${id}"]`)).toHaveCount(1)
    return id
  }

  test('traps focus, locks page scroll, and returns focus to the opener', async ({ page }) => {
    await page.goto('/get-started/foo/bar')
    await turnOffExperimentsInPage(page)

    const opener = page.getByTestId('toggle-search')
    await opener.click()
    const input = page.getByTestId('overlay-search-input')
    await expect(input).toBeFocused()
    expect(await page.evaluate(() => document.body.style.overflow)).toBe('hidden')

    // Tab cycles inside the dialog rather than escaping to the page behind the scrim.
    const dialog = page.locator('[role="dialog"][aria-modal="true"]')
    for (let i = 0; i < 6; i++) {
      await page.keyboard.press('Tab')
      expect(await dialog.evaluate((el) => el.contains(document.activeElement))).toBe(true)
    }

    // A press on the scrim closes it. (5, 5) is outside the centred card at this width.
    await page.mouse.click(5, 5)
    await expect(input).toHaveCount(0)
    await expect(opener).toBeFocused()
    expect(await page.evaluate(() => document.body.style.overflow)).toBe('')
  })

  test('the close button dismisses the dialog at a phone viewport', async ({ page }) => {
    // Below `md` the dialog covers the viewport, so there is no scrim to press.
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/get-started/foo/bar')
    await turnOffExperimentsInPage(page)

    await page.getByTestId('toggle-search').click()
    await expect(page.getByTestId('overlay-search-input')).toBeVisible()
    await page.getByRole('button', { name: 'Close search' }).click()

    await expect(page.getByTestId('overlay-search-input')).toHaveCount(0)
    await expect(page).not.toHaveURL(/search-overlay-open/)
  })

  test('selecting a result straight after typing still navigates', async ({ page }) => {
    await mockSearch(page)
    await page.goto('/')
    await turnOffExperimentsInPage(page)

    await page.getByTestId('toggle-search').click()
    const input = page.getByTestId('overlay-search-input')
    await input.fill('foo')
    await expect(page.locator('#search-option-general-1')).toBeVisible()

    // One more keystroke queues the input's debounced URL write. Selecting before it fires
    // used to let that write — a replace of the current page — cancel the navigation.
    await input.press('End')
    await input.pressSequentially(' x', { delay: 0 })
    // The query row and one suggestion, then general-0 and general-1.
    for (let i = 0; i < 4; i++) await input.press('ArrowDown', { delay: 0 })
    await input.press('Enter', { delay: 0 })

    await expect(page).toHaveURL(/\/get-started\/foo\/for-playwright/)
    await expect(page.locator('h1')).toHaveText('For Playwright')
  })

  test('closing straight after typing leaves the overlay closed in the URL', async ({ page }) => {
    await mockSearch(page)
    await page.goto('/get-started/foo/bar')
    await turnOffExperimentsInPage(page)

    await page.getByTestId('toggle-search').click()
    const input = page.getByTestId('overlay-search-input')
    await input.pressSequentially('foo', { delay: 0 })
    await input.press('Escape', { delay: 0 })

    await expect(input).toHaveCount(0)
    // Past the 100ms debounce: a stale queued write used to put the param back.
    await page.waitForTimeout(300)
    await expect(page).not.toHaveURL(/search-overlay-open/)
  })

  test('input method composition keys do not select, ask Copilot, or close', async ({ page }) => {
    await mockSearch(page)
    let aiRequests = 0
    await page.route('**/api/ai-search/v1', (route) => {
      aiRequests++
      return route.abort()
    })
    await page.goto('/')
    await turnOffExperimentsInPage(page)

    await page.getByTestId('toggle-search').click()
    const input = page.getByTestId('overlay-search-input')
    await input.fill('foo')
    await expect(page.locator('#search-option-general-0')).toBeVisible()

    // Chrome flags composing keys with isComposing. Safari flags keys that end a composition only with keyCode 229.
    // Each case sets one flag so a missing isComposing or keyCode guard fails on its own.
    const dispatchImeKey = (key: string, isComposing: boolean) =>
      input.evaluate(
        (el, init) =>
          el.dispatchEvent(
            new KeyboardEvent('keydown', {
              ...init,
              bubbles: true,
              cancelable: true,
            }),
          ),
        { key, isComposing, keyCode: isComposing ? 0 : 229 },
      )
    await dispatchImeKey('ArrowDown', true)
    expect(await input.getAttribute('aria-activedescendant')).toBeNull()
    await dispatchImeKey('Enter', true)
    await dispatchImeKey('Enter', false)
    await dispatchImeKey('Escape', true)
    await dispatchImeKey('Escape', false)

    // Give a stray Ask Copilot request or URL write time to land.
    await page.waitForTimeout(300)
    await expect(input).toBeVisible()
    await expect(page.getByRole('button', { name: 'Back to search' })).toBeHidden()
    expect(page.url()).not.toMatch(/search-overlay-ask-ai=true/)
    expect(aiRequests).toBe(0)

    await input.press('Escape')
    await expect(input).toHaveCount(0)
  })

  test('clicking a row keeps focus, and the arrow keys, on the input', async ({ page }) => {
    await mockSearch(page)
    await page.goto('/')
    await turnOffExperimentsInPage(page)

    await page.getByTestId('toggle-search').click()
    const input = page.getByTestId('overlay-search-input')
    await input.fill('foo')
    const row = page.locator('#search-option-general-0')
    await expect(row).toBeVisible()

    // Press without releasing on the row, so no click (and no navigation) fires.
    const box = await row.boundingBox()
    await page.mouse.move(box!.x + 40, box!.y + box!.height / 2)
    await page.mouse.down()
    await expect(input).toBeFocused()
    await page.mouse.move(5, 5)
    await page.mouse.up()
  })

  test('rows hidden behind the autocomplete spinner are not arrow-reachable', async ({ page }) => {
    test.setTimeout(30_000)
    await page.goto('/')
    await turnOffExperimentsInPage(page)
    await mockSearch(page)

    await page.getByTestId('toggle-search').click()
    const input = page.getByTestId('overlay-search-input')
    await input.fill('foo')
    await expect(page.locator('#search-option-general-0')).toBeVisible()

    // Slow the next response past the 1s spinner threshold.
    await page.unroute('**/api/search/combined-search/v1**')
    await mockSearch(page, { delayMs: 4000 })
    await input.pressSequentially('b')
    await expect(page.locator('#search-option-general-0')).toHaveCount(0, { timeout: 3000 })

    for (let i = 0; i < 3; i++) {
      await input.press('ArrowDown')
      const id = await expectActiveDescendantResolves(page)
      expect(id ?? '').not.toMatch(/^search-option-(ai|general)-/)
    }
  })

  test('the docs fallback row shows the query without template braces', async ({ page }) => {
    await mockSearch(page, { fail: true })
    await page.goto('/')
    await turnOffExperimentsInPage(page)

    await page.getByTestId('toggle-search').click()
    await page.getByTestId('overlay-search-input').fill('repository')
    await expect(page.locator('#search-option-search-docs')).toHaveText(
      'Search docs for "repository"',
    )
  })

  test('Copilot sources are not arrow-reachable until the answer finishes', async ({ page }) => {
    test.setTimeout(30_000)
    // A stream that sends its sources, then stalls before the answer. route.fulfill sends
    // the whole body at once, so the pause needs a real ReadableStream.
    await page.addInitScript(() => {
      const realFetch = window.fetch
      window.fetch = async (input, init) => {
        const url =
          typeof input === 'string' ? input : input instanceof URL ? input.href : input.url
        if (!url.includes('/api/ai-search/v1')) return realFetch(input, init)
        const encoder = new TextEncoder()
        const body = new ReadableStream({
          async start(controller) {
            controller.enqueue(
              encoder.encode(
                '{"chunkType":"SOURCES","sources":[{"title":"For Playwright","index":"/en/get-started","url":"http://localhost:4000/en/get-started/foo/for-playwright"}]}\n',
              ),
            )
            await new Promise((resolve) => setTimeout(resolve, 2500))
            controller.enqueue(
              encoder.encode('{"chunkType":"MESSAGE_CHUNK","text":"An answer."}\n'),
            )
            controller.close()
          },
        })
        return new Response(body, {
          status: 200,
          headers: { 'Content-Type': 'application/x-ndjson' },
        })
      }
    })
    await mockSearch(page)
    await page.goto('/')
    await turnOffExperimentsInPage(page)

    await page.getByTestId('toggle-search').click()
    const input = page.getByTestId('overlay-search-input')
    await input.fill('foo')
    await expect(page.locator('#search-option-general-0')).toBeVisible()
    await input.press('Enter') // nothing selected: ask Copilot

    // Mid-stream: the sources have arrived but are not rendered, so they must not be reachable.
    await page.waitForTimeout(800)
    for (let i = 0; i < 2; i++) {
      await input.press('ArrowDown')
      const id = await expectActiveDescendantResolves(page)
      expect(id ?? '').not.toMatch(/^search-option-reference-/)
    }

    // Once the answer finishes, the source row renders and becomes reachable.
    await expect(page.locator('#search-option-reference-0')).toBeVisible({ timeout: 10_000 })
  })

  test('the selected row keeps a visible outline in forced-colors mode', async ({ page }) => {
    await page.emulateMedia({ forcedColors: 'active' })
    await mockSearch(page)
    await page.goto('/')
    await turnOffExperimentsInPage(page)

    await page.getByTestId('toggle-search').click()
    const input = page.getByTestId('overlay-search-input')
    await input.fill('foo')
    await expect(page.locator('#search-option-general-0')).toBeVisible()

    const outlineOf = (selector: string) =>
      page.locator(selector).evaluate((element) => getComputedStyle(element).outlineStyle)

    await input.press('ArrowDown')
    await expect(input).toHaveAttribute('aria-activedescendant', 'search-option-ai-0')
    expect(await outlineOf('#search-option-ai-0')).toBe('solid')

    // ArrowUp past the first row clears the selection, and the next one lands on view-all.
    await input.press('ArrowUp')
    await expect(input).not.toHaveAttribute('aria-activedescendant', /.+/)
    await input.press('ArrowUp')
    await expect(input).toHaveAttribute('aria-activedescendant', 'search-option-view-all')
    expect(await outlineOf('#search-option-view-all')).toBe('solid')
  })

  test('announces loading while the spinner replaces the rows', async ({ page }) => {
    test.setTimeout(30_000)
    await page.goto('/')
    await turnOffExperimentsInPage(page)
    await mockSearch(page)

    await page.getByTestId('toggle-search').click()
    const input = page.getByTestId('overlay-search-input')
    await input.fill('foo')
    await expect(page.locator('#search-option-general-0')).toBeVisible()
    const status = page.getByRole('dialog').getByRole('status')
    await expect(status).toHaveText('')

    // Slow the next response past the 1s spinner threshold.
    await page.unroute('**/api/search/combined-search/v1**')
    await mockSearch(page, { delayMs: 4000 })
    await input.pressSequentially('b')
    await expect(status).toHaveText('Loading search results', { timeout: 3000 })
    await expect(status).toHaveText('', { timeout: 10_000 })
  })

  // Holds the Copilot answer, one source and one sentence, until the test releases it.
  async function holdCopilotStream(page: Page) {
    await page.addInitScript(() => {
      const realFetch = window.fetch
      let release = () => {}
      const released = new Promise<void>((resolve) => {
        release = resolve
      })
      ;(window as unknown as { releaseCopilot: () => void }).releaseCopilot = () => release()
      window.fetch = async (input, init) => {
        const url =
          typeof input === 'string' ? input : input instanceof URL ? input.href : input.url
        if (!url.includes('/api/ai-search/v1')) return realFetch(input, init)
        await released
        return new Response(
          '{"chunkType":"SOURCES","sources":[{"title":"For Playwright","index":"/en/get-started","url":"http://localhost:4000/en/get-started/foo/for-playwright"}]}\n' +
            '{"chunkType":"MESSAGE_CHUNK","text":"An answer."}\n',
          { status: 200, headers: { 'Content-Type': 'application/x-ndjson' } },
        )
      }
    })
  }

  async function releaseCopilot(page: Page) {
    await page.evaluate(() =>
      (window as unknown as { releaseCopilot: () => void }).releaseCopilot(),
    )
  }

  test('announces loading before the first Copilot chunk arrives', async ({ page }) => {
    await holdCopilotStream(page)
    await mockSearch(page)
    await page.goto('/')
    await turnOffExperimentsInPage(page)

    await page.getByTestId('toggle-search').click()
    const input = page.getByTestId('overlay-search-input')
    await input.fill('foo')
    await expect(page.locator('#search-option-general-0')).toBeVisible()
    await input.press('Enter') // nothing selected: ask Copilot

    const loading = page.locator('[aria-live="assertive"]', {
      hasText: 'Loading Copilot response...',
    })
    await expect(loading).toBeAttached()

    await releaseCopilot(page)
    await expect(page.getByText('An answer.')).toBeVisible()
    await expect(loading).toHaveCount(0)
  })

  test('the selected source row keeps a visible outline in forced-colors mode', async ({
    page,
  }) => {
    await page.emulateMedia({ forcedColors: 'active' })
    await holdCopilotStream(page)
    await mockSearch(page)
    await page.goto('/')
    await turnOffExperimentsInPage(page)

    await page.getByTestId('toggle-search').click()
    const input = page.getByTestId('overlay-search-input')
    await input.fill('foo')
    await expect(page.locator('#search-option-general-0')).toBeVisible()
    await input.press('Enter') // nothing selected: ask Copilot
    await releaseCopilot(page)

    const source = page.locator('#search-option-reference-0')
    await expect(source).toBeVisible()
    await expect(async () => {
      await input.press('ArrowDown')
      await expect(input).toHaveAttribute('aria-activedescendant', 'search-option-reference-0', {
        timeout: 100,
      })
    }).toPass({ timeout: 5000 })
    expect(await source.evaluate((element) => getComputedStyle(element).outlineStyle)).toBe('solid')
  })

  test('the Copilot answer sits outside the listbox, under real headings', async ({ page }) => {
    await page.route('**/api/ai-search/v1', (route) =>
      route.fulfill({
        status: 200,
        headers: { 'Content-Type': 'application/x-ndjson' },
        body:
          '{"chunkType":"SOURCES","sources":[{"title":"For Playwright","index":"/en/get-started","url":"http://localhost:4000/en/get-started/foo/for-playwright"}]}\n' +
          '{"chunkType":"MESSAGE_CHUNK","text":"An answer."}\n',
      }),
    )
    await mockSearch(page)
    await page.goto('/')
    await turnOffExperimentsInPage(page)

    await page.getByTestId('toggle-search').click()
    const input = page.getByTestId('overlay-search-input')
    await input.fill('foo')
    await expect(page.locator('#search-option-general-0')).toBeVisible()
    await input.press('Enter') // nothing selected: ask Copilot
    await expect(page.locator('#search-option-reference-0')).toBeVisible()

    // Some screen readers expose only options inside a listbox, so the answer's prose and
    // buttons live outside it, and get headings again.
    const listbox = page.getByRole('listbox')
    await expect(listbox.locator('#ask-ai-result-container')).toHaveCount(0)
    await expect(listbox.getByRole('button')).toHaveCount(0)
    const dialog = page.getByRole('dialog')
    await expect(dialog.getByRole('heading', { name: 'Ask Copilot', level: 3 })).toBeVisible()
    await expect(dialog.getByRole('heading', { name: 'Copilot Sources', level: 3 })).toBeVisible()
    // The sources stay options, reachable from the input.
    await input.press('ArrowDown')
    await expect(input).toHaveAttribute('aria-activedescendant', 'search-option-reference-0')
  })

  // Streams one answer chunk, then holds until releaseCopilot, then ends the stream as asked.
  // Also records event beacons, since Chromium hides sendBeacon payloads from Playwright.
  async function streamCopilotAnswer(
    page: Page,
    ending: 'close' | 'error-record' | 'network-error',
  ) {
    await page.addInitScript((streamEnding) => {
      const testWindow = window as unknown as {
        releaseCopilot: () => void
        copilotBeacons: Promise<string>[]
      }
      let release = () => {}
      const released = new Promise<void>((resolve) => {
        release = resolve
      })
      testWindow.releaseCopilot = () => release()
      testWindow.copilotBeacons = []
      navigator.sendBeacon = (url, data) => {
        if (url === '/api/events' && data instanceof Blob) {
          testWindow.copilotBeacons.push(data.text())
        }
        return true
      }
      const realFetch = window.fetch
      window.fetch = async (input, init) => {
        const url =
          typeof input === 'string' ? input : input instanceof URL ? input.href : input.url
        if (!url.includes('/api/ai-search/v1')) return realFetch(input, init)
        const encoder = new TextEncoder()
        const body = new ReadableStream({
          async start(controller) {
            controller.enqueue(
              encoder.encode('{"chunkType":"MESSAGE_CHUNK","text":"Streamed answer"}\n'),
            )
            await released
            if (streamEnding === 'network-error') {
              controller.error(new TypeError('network error'))
              return
            }
            if (streamEnding === 'error-record') {
              controller.enqueue(
                encoder.encode('{"errors":[{"message":"Internal server error"}]}\n'),
              )
            }
            controller.close()
          },
        })
        return new Response(body, {
          status: 200,
          headers: { 'Content-Type': 'application/x-ndjson' },
        })
      }
    }, ending)
  }

  async function askCopilotAndRelease(page: Page) {
    await mockSearch(page)
    await page.goto('/')
    await turnOffExperimentsInPage(page)

    await page.getByTestId('toggle-search').click()
    const input = page.getByTestId('overlay-search-input')
    await input.fill('foo')
    await expect(page.locator('#search-option-general-0')).toBeVisible()
    await input.press('Enter') // nothing selected: ask Copilot
    // Let the client render the first chunk before the stream ends.
    await expect(page.getByText('Streamed answer', { exact: true })).toBeVisible()
    await releaseCopilot(page)
  }

  function cachedCopilotAnswers(page: Page) {
    return page.evaluate(() =>
      Object.keys(localStorage)
        .filter((key) => /^ai-query-cache-\d+-/.test(key))
        .map((key) => JSON.parse(localStorage.getItem(key)!).data.message as string),
    )
  }

  function sentCopilotResultStatuses(page: Page) {
    return page.evaluate(async () => {
      // Hiding the page flushes the queued events.
      Object.defineProperty(document, 'visibilityState', {
        configurable: true,
        get() {
          return 'hidden'
        },
      })
      document.dispatchEvent(new Event('visibilitychange'))
      const testWindow = window as unknown as { copilotBeacons: Promise<string>[] }
      const batches = await Promise.all(testWindow.copilotBeacons)
      return batches
        .flatMap((batch) => JSON.parse(batch))
        .filter((eventBody) => eventBody.type === 'aiSearchResult')
        .map((eventBody) => eventBody.ai_search_result_response_status as number)
    })
  }

  test('a finished Copilot answer is cached and reported as a success', async ({ page }) => {
    test.skip(!ANALYTICS_ENABLED, 'Analytics are disabled')
    await streamCopilotAnswer(page, 'close')
    await askCopilotAndRelease(page)

    await expect.poll(() => cachedCopilotAnswers(page)).toEqual(['Streamed answer'])
    expect(await sentCopilotResultStatuses(page)).toContain(200)
  })

  for (const [ending, cause] of [
    ['error-record', 'an error record'],
    ['network-error', 'a network error'],
  ] as const) {
    test(`a Copilot answer cut off by ${cause} is not cached or reported as a success`, async ({
      page,
    }) => {
      test.skip(!ANALYTICS_ENABLED, 'Analytics are disabled')
      await streamCopilotAnswer(page, ending)
      await askCopilotAndRelease(page)

      await expect(page.getByText('There was an error loading Copilot.')).toBeVisible()
      expect(await cachedCopilotAnswers(page)).toEqual([])
      expect(await sentCopilotResultStatuses(page)).not.toContain(200)
    })
  }

  test('Back after picking a result leaves the dialog closed', async ({ page }) => {
    await mockSearch(page)
    await page.goto('/get-started/foo/bar')
    await turnOffExperimentsInPage(page)

    await page.getByTestId('toggle-search').click()
    await page.getByTestId('overlay-search-input').fill('foo')
    await page.locator('#search-option-general-1').click()
    await expect(page).toHaveURL(/\/get-started\/foo\/for-playwright/)

    // The entry we left must not still say the overlay is open.
    await page.goBack()
    await expect(page).toHaveURL(/\/get-started\/foo\/bar/)
    await expect(page).not.toHaveURL(/search-overlay-open/)
    await expect(page.getByTestId('overlay-search-input')).toHaveCount(0)
  })

  test('the rule under the field marks when the input has focus', async ({ page }) => {
    await page.goto('/get-started/foo/bar')
    await turnOffExperimentsInPage(page)

    await page.getByTestId('toggle-search').click()
    const input = page.getByTestId('overlay-search-input')
    await expect(input).toBeFocused()
    const rule = page.locator('[role="dialog"] hr')
    // Solid while the input has focus...
    await expect(rule).toHaveCSS('background-image', 'none')

    // ...and back to the dashed rule once focus moves elsewhere in the dialog.
    await page.getByRole('button', { name: 'Close search' }).focus()
    await expect(rule).not.toHaveCSS('background-image', 'none')
  })

  test('the focus rule stays visible when search fails', async ({ page }) => {
    // Error states used to remove the rule, and the input's focus marker with it.
    await mockSearch(page, { fail: true })
    await page.goto('/')
    await turnOffExperimentsInPage(page)

    await page.getByTestId('toggle-search').click()
    const input = page.getByTestId('overlay-search-input')
    await input.fill('repository')
    await expect(page.locator('#search-option-search-docs')).toBeVisible()
    await expect(input).toBeFocused()

    const rule = page.locator('[role="dialog"] hr')
    await expect(rule).toBeVisible()
    await expect(rule).toHaveCSS('background-image', 'none')
  })

  test.describe('in a German-language browser', () => {
    test.use({ locale: 'de-DE' })

    test('the result count follows the page language, not the browser', async ({ page }) => {
      await page.route('**/api/search/combined-search/v1**', (route) =>
        route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({
            aiAutocompleteSuggestions: { meta: {}, hits: [] },
            generalSearchResults: { meta: { found: { value: 1234567 } }, hits: HITS },
          }),
        }),
      )
      await page.goto('/')
      await turnOffExperimentsInPage(page)

      await page.getByTestId('toggle-search').click()
      await page.getByTestId('overlay-search-input').fill('foo')
      // An English page: "1,234,567", not the browser's "1.234.567".
      await expect(page.getByTestId('view-all-results')).toHaveText('View all 1,234,567 results')
    })
  })
})

test('open search, and get auto-complete results', async ({ page }) => {
  test.skip(!SEARCH_TESTS, 'No local Elasticsearch, no tests involving search')

  await page.goto('/')

  await page.getByTestId('toggle-search').click()

  let listGroup = page.getByTestId('ai-autocomplete-suggestions')

  await expect(listGroup).toBeVisible()
  let listItems = listGroup.locator('[role="option"]')
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
  listItems = listGroup.locator('[role="option"]')
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
  await page.getByTestId('view-all-results').click()

  const matchingResult = page
    .getByTestId('search-result')
    .filter({ has: page.getByRole('link', { name: 'Foo', exact: true }) })
  const nonMatchingResult = page
    .getByTestId('search-result')
    .filter({ has: page.getByRole('link', { name: 'Bar', exact: true }) })
  await expect(matchingResult).toBeVisible()
  await expect(nonMatchingResult).toBeVisible()
  await expect(nonMatchingResult.getByTestId('search-result-toplevel')).toHaveText('Baring')

  await page.getByText('Fooing (1)').click()
  await expect(page).toHaveURL(/toplevel=Fooing/)
  await expect(matchingResult).toBeVisible()
  await expect(nonMatchingResult).toHaveCount(0)
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

  test('secondary-bar icon buttons show a label tooltip that Escape dismisses', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1400, height: 700 })
    await page.goto('/get-started/foo/bar')

    const toggle = page.getByRole('button', { name: 'Collapse sidebar' })
    await expect(toggle).not.toHaveAttribute('aria-label')
    const tooltip = page.locator(`[id="${await toggle.getAttribute('aria-labelledby')}"]`)
    await expect(tooltip).toBeHidden()
    await toggle.focus()
    await expect(tooltip).toBeVisible()
    await expect(tooltip).toHaveText('Collapse sidebar')
    await page.keyboard.press('Escape')
    await expect(tooltip).toBeHidden()
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
    // Pinned outside the scroller, so it must be on screen without scrolling. The click
    // alone would not catch a regression — Playwright scrolls it into view first.
    await expect(page.getByTestId('view-all-results')).toBeInViewport()
    await page.getByTestId('view-all-results').click()

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
    // Pinned outside the scroller, so it must be on screen without scrolling. The click
    // alone would not catch a regression — Playwright scrolls it into view first.
    await expect(page.getByTestId('view-all-results')).toBeInViewport()
    await page.getByTestId('view-all-results').click()

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

  test('events queued after the page was hidden once still send on the next hide', async ({
    page,
  }) => {
    const sentTypes: string[] = []

    // Install the route before interacting with the page to avoid event races.
    await page.route('**/api/events', (route, request) => {
      const postData = request.postData()
      if (postData) {
        for (const eventBody of JSON.parse(postData)) sentTypes.push(eventBody.type)
      }
      route.fulfill({})
    })

    await page.addInitScript(() => {
      window.GHDOCSPLAYWRIGHT = 1
    })

    await page.goto('/get-started/foo/for-playwright')

    const setVisibility = (state: 'hidden' | 'visible') =>
      page.evaluate((visibilityState) => {
        Object.defineProperty(document, 'visibilityState', {
          configurable: true,
          get() {
            return visibilityState
          },
        })
        document.dispatchEvent(new Event('visibilitychange'))
      }, state)

    await setVisibility('hidden')
    await setVisibility('visible')
    await expect.poll(() => sentTypes).toContain('exit')

    // Vote and hide in one task so the 5 second batch timer can't flush the vote instead.
    const typesSentOnSecondHide = await page.evaluate(async () => {
      const beacons: Blob[] = []
      const originalSendBeacon = navigator.sendBeacon
      navigator.sendBeacon = (url, data) => {
        if (url === '/api/events') beacons.push(data as Blob)
        return true
      }
      document.querySelector<HTMLElement>('[for=survey-yes]')!.click()
      Object.defineProperty(document, 'visibilityState', {
        configurable: true,
        get() {
          return 'hidden'
        },
      })
      document.dispatchEvent(new Event('visibilitychange'))
      navigator.sendBeacon = originalSendBeacon
      const batches = await Promise.all(beacons.map((beacon) => beacon.text()))
      return batches.flatMap((batch) =>
        JSON.parse(batch).map((eventBody: { type: string }) => eventBody.type),
      )
    })

    expect(typesSentOnSecondHide).toContain('survey')
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
    await page.locator('[name=survey-comment]').fill('Comment for the first page')
    await page.locator('[name=survey-email]').fill('test@example.com')

    await page
      .getByTestId('product-sidebar')
      .getByRole('link', { name: 'Bar', exact: true })
      .click()
    await expect(page.getByRole('button', { name: 'Send' })).not.toBeVisible()
    await expect(page.locator('[for=survey-comment]')).not.toBeVisible()

    await page.locator('[for=survey-yes]').click()
    await expect(page.locator('[name=survey-comment]')).toHaveValue('')
    await expect(page.locator('[name=survey-email]')).toHaveValue('')
  })

  test('switching a tool tab keeps the vote and unsent feedback', async ({ page }) => {
    await page.route('**/api/events', (route) => {
      route.fulfill({})
    })

    await page.goto('/get-started/liquid/tool-specific')
    await turnOffExperimentsInPage(page)

    await page.locator('[for=survey-yes]').click()
    await page.locator('[name=survey-comment]').fill('Comment for this page')
    await page.locator('[name=survey-email]').fill('test@example.com')

    await page.getByTestId('tool-picker').getByRole('link', { name: 'GitHub CLI' }).click()
    await expect(page).toHaveURL(/\?tool=cli/)
    await expect(page.getByRole('button', { name: 'Send' })).toBeVisible()
    await expect(page.locator('[name=survey-comment]')).toHaveValue('Comment for this page')
    await expect(page.locator('[name=survey-email]')).toHaveValue('test@example.com')
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

  test('remember selected API version', async ({ page }) => {
    await page.goto('/rest/actions/artifacts')
    await expect(page).toHaveURL(/\/en\/rest\/actions\/artifacts\?apiVersion=/)
    await page.getByRole('button', { name: 'Select API Version' }).click()
    await page.getByRole('menuitemradio', { name: '2022-11-28', exact: true }).click()
    await expect(page).toHaveURL(/\/en\/rest\/actions\/artifacts\?apiVersion=2022-11-28/)

    // Without an apiVersion query, RestRedirect uses the saved cookie instead of the latest version.
    await page.goto('/rest/actions/cache')
    await expect(page).toHaveURL(/\/en\/rest\/actions\/cache\?apiVersion=2022-11-28/)
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
  // Pressing enter with nothing selected asks Copilot
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
  // Pressing enter with nothing selected asks Copilot
  await page.keyboard.press('Enter')

  // Wait for the general search results to appear inside the overlay's suggestions
  // group. Scope the lookup to the group rather than matching page-level links of the
  // same name.
  const generalSuggestions = page.getByTestId('general-autocomplete-suggestions')
  await expect(generalSuggestions.getByRole('option', { name: 'Foo' })).toBeVisible()
  await expect(generalSuggestions.getByRole('option', { name: 'Bar' })).toBeVisible()

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

test.describe('CookBookFilter component', () => {
  const filters = [
    { name: 'Category', value: 'Improve quality and maintainability' },
    { name: 'Surface', value: 'Chat' },
    { name: 'Complexity', value: 'Simple' },
  ]

  for (const { name, value } of filters) {
    test(`${name} filters articles`, async ({ page }) => {
      await page.goto('/get-started/cookbook')
      await expect(page.getByRole('heading', { name: 'Explore 2 examples' })).toBeVisible()

      const trigger = page.getByRole('button', { name: new RegExp(`^${name}:`) })
      await trigger.click()
      const menu = page.getByRole('menu', { name, exact: true })
      await menu.getByRole('menuitemradio', { name: value, exact: true }).click()

      await expect(page.getByRole('heading', { name: 'Explore 1 examples' })).toBeVisible()
      await expect(trigger).toHaveText(`${name}: ${value}`)
      await trigger.click()
      await expect(menu.getByRole('menuitemradio', { checked: true })).toHaveText(value)
    })
  }

  test('search combines with filters and reset clears both', async ({ page }) => {
    await page.goto('/get-started/cookbook')
    for (const { name, value } of filters) {
      await page.getByRole('button', { name: `${name}: All`, exact: true }).click()
      await page.getByRole('menuitemradio', { name: value, exact: true }).click()
    }

    const search = page.getByRole('textbox', { name: 'Search examples' })
    await search.fill('workflow')
    await expect(page.getByRole('heading', { name: 'Explore 0 examples' })).toBeVisible()
    await search.fill('tests')
    await expect(page.getByRole('heading', { name: 'Explore 1 examples' })).toBeVisible()

    await page.getByRole('button', { name: 'Reset filters', exact: true }).click()
    await expect(search).toHaveValue('')
    await expect(page.getByRole('heading', { name: 'Explore 2 examples' })).toBeVisible()
    for (const { name } of filters) {
      await expect(page.getByRole('button', { name: `${name}: All`, exact: true })).toBeVisible()
    }
  })

  for (const key of ['Enter', 'Space']) {
    test(`category menu supports ${key} selection and Escape`, async ({ page }) => {
      await page.goto('/get-started/cookbook')
      const trigger = page.getByRole('button', { name: /^Category:/ })
      await trigger.focus()
      await page.keyboard.press(key)
      const menu = page.getByRole('menu', { name: 'Category', exact: true })
      await expect(menu.getByRole('menuitemradio', { name: 'All', exact: true })).toBeFocused()
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press(key)

      await expect(menu).toHaveCount(0)
      await expect(trigger).toBeFocused()
      await expect(trigger).toContainText('Improve quality and maintainability')
      await expect(page.getByRole('heading', { name: 'Explore 1 examples' })).toBeVisible()
      await trigger.click()
      await page.keyboard.press('Escape')
      await expect(menu).toHaveCount(0)
      await expect(trigger).toBeFocused()
    })
  }

  test('long category options fit within the mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 1000 })
    await page.goto('/get-started/cookbook')
    await page.getByRole('button', { name: 'Category: All', exact: true }).click()
    const menu = page.getByRole('menu', { name: 'Category', exact: true })
    await expect(menu).toBeVisible()
    const bounds = await menu.boundingBox()
    expect(bounds).not.toBeNull()
    expect(bounds!.x).toBeGreaterThanOrEqual(0)
    expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(320)
  })
})

test.describe('LandingArticleGridWithFilter component', () => {
  test('category menu selects once via keyboard and preserves URL state', async ({ page }) => {
    await page.goto('/get-started/article-grid-discovery?articles-filter=Grid&articles-page=2')
    const trigger = page.getByTestId('filter-header').getByRole('button')
    await trigger.focus()
    await page.keyboard.press('Enter')
    const menu = page.getByRole('menu', { name: 'Category', exact: true })
    const allCategories = menu.getByRole('menuitemradio', { name: 'All categories' })
    await expect(allCategories).toBeFocused()
    await expect(allCategories).toHaveAttribute('aria-checked', 'true')
    await page.keyboard.press('ArrowUp')
    await expect(menu.getByRole('menuitemradio').last()).toBeFocused()
    await page.keyboard.press('ArrowDown')
    await expect(allCategories).toBeFocused()

    // Brand wires both Enter and Space through the overlay's and the item's own
    // handlers; instrument both so a regression firing either raw handler shows up,
    // even though only Enter is exercised below (Space runs through the same
    // onKeyDownCapture guard in the component).
    await menu.evaluate((element) => {
      element.addEventListener('keydown', (event) => {
        if (event instanceof KeyboardEvent && (event.key === 'Enter' || event.key === ' ')) {
          document.body.dataset.categoryKeydowns = String(
            Number(document.body.dataset.categoryKeydowns || 0) + 1,
          )
        }
      })
      element.addEventListener('click', () => {
        document.body.dataset.categoryClicks = String(
          Number(document.body.dataset.categoryClicks || 0) + 1,
        )
      })
    })
    await menu.getByRole('menuitemradio', { name: 'Testing', exact: true }).focus()
    await page.keyboard.press('Enter')
    await expect(menu).toHaveCount(0)
    await expect(trigger).toBeFocused()
    await expect(page.locator('body')).toHaveAttribute('data-category-clicks', '1')
    await expect(page.locator('body')).not.toHaveAttribute('data-category-keydowns')
    await expect(page).toHaveURL(/articles-category=Testing/)
    expect(new URL(page.url()).searchParams.get('articles-filter')).toBe('Grid')
    expect(new URL(page.url()).searchParams.has('articles-page')).toBe(false)
    await expect(page.getByTestId('article-grid').getByTestId('article-card')).toHaveCount(1)

    await trigger.click()
    await expect(menu.getByRole('menuitemradio', { checked: true })).toHaveText('Testing')
    await allCategories.click()
    await expect(page).not.toHaveURL(/articles-category=/)
    await expect(page.getByTestId('article-grid').getByTestId('article-card')).toHaveCount(4)
  })

  test('category menu aligns with its inline label on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1400, height: 900 })
    await page.goto('/get-started/article-grid-discovery?articles-category=Testing')
    const trigger = page.getByTestId('filter-header').getByRole('button')
    const menu = page.getByRole('menu', { name: 'Category', exact: true })
    await expect(trigger).toContainText('Testing')
    const label = trigger.getByText('Category:', { exact: true })
    const value = trigger.getByText('Testing', { exact: true })
    await expect(async () => {
      const labelBounds = await label.boundingBox()
      const valueBounds = await value.boundingBox()
      expect(labelBounds).not.toBeNull()
      expect(valueBounds).not.toBeNull()
      expect(valueBounds!.y).toBeCloseTo(labelBounds!.y, 0)
      expect(valueBounds!.x).toBeGreaterThan(labelBounds!.x + labelBounds!.width)
    }).toPass()
    await trigger.click()
    const selected = menu.getByRole('menuitemradio', { checked: true })
    await expect(selected).toHaveText('Testing')
    await expect(selected).toBeInViewport()
    const bounds = await menu.boundingBox()
    const triggerBounds = await trigger.boundingBox()
    expect(bounds).not.toBeNull()
    expect(triggerBounds).not.toBeNull()
    expect(bounds!.x).toBeCloseTo(triggerBounds!.x, 0)
    await page.keyboard.press('Escape')
    await expect(menu).toHaveCount(0)
    await expect(trigger).toBeFocused()
    await trigger.click()
    await page.getByRole('heading', { level: 1 }).click()
    await expect(menu).toHaveCount(0)
    await expect(trigger).toContainText('Testing')
  })

  test('category menu keeps its label inline and fits within the mobile viewport', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 900 })
    await page.goto('/get-started/article-grid-discovery?articles-category=Testing')
    const trigger = page.getByTestId('filter-header').getByRole('button')
    const menu = page.getByRole('menu', { name: 'Category', exact: true })
    await expect(trigger).toContainText('Testing')
    const label = trigger.getByText('Category:', { exact: true })
    const value = trigger.getByText('Testing', { exact: true })
    await expect(async () => {
      const labelBounds = await label.boundingBox()
      const valueBounds = await value.boundingBox()
      expect(labelBounds).not.toBeNull()
      expect(valueBounds).not.toBeNull()
      expect(valueBounds!.y).toBeCloseTo(labelBounds!.y, 0)
      expect(valueBounds!.x).toBeGreaterThan(labelBounds!.x + labelBounds!.width)
    }).toPass()
    await trigger.click()
    const selected = menu.getByRole('menuitemradio', { checked: true })
    await expect(selected).toHaveText('Testing')
    await expect(selected).toBeInViewport()
    const bounds = await menu.boundingBox()
    expect(bounds).not.toBeNull()
    expect(bounds!.x).toBeGreaterThanOrEqual(0)
    expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(375)
  })

  for (const colorScheme of ['light', 'dark'] as const) {
    test(`category menu border and item padding use brand tokens in ${colorScheme} mode`, async ({
      page,
    }) => {
      await page.emulateMedia({ colorScheme })
      await page.goto('/get-started/article-grid-discovery?articles-category=Testing')
      const trigger = page.getByTestId('filter-header').getByRole('button')
      await trigger.click()
      const menu = page.getByRole('menu', { name: 'Category', exact: true })
      const selected = menu.getByRole('menuitemradio', { checked: true })
      const borderColor = await menu.evaluate((element) => {
        const probe = document.createElement('span')
        probe.style.color = 'var(--brand-color-border-default)'
        element.append(probe)
        const color = getComputedStyle(probe).color
        probe.remove()
        return color
      })
      await expect(menu).toHaveCSS('border-top-color', borderColor)
      await expect(selected).toHaveCSS('padding-inline-end', '8px')
    })
  }

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
    const menu = page.getByRole('menu', { name: 'Category', exact: true })
    const testingOption = menu.getByRole('menuitemradio', { name: 'Testing', exact: true })
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

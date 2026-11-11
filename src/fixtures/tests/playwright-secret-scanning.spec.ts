import { test, expect } from '@playwright/test'

const PAGE_PATH = '/code-security/reference/secret-security/supported-secret-scanning-patterns'

test.describe('Secret scanning table accessibility', () => {
  for (const key of ['Enter', 'Space']) {
    test(`filter menu selects once with ${key}`, async ({ page }) => {
      await page.goto(PAGE_PATH)

      const trigger = page.getByRole('button', { name: /^Push protection:/ })
      await trigger.focus()
      await page.keyboard.press('Enter')

      const menu = page.getByRole('menu', { name: 'Push protection', exact: true })
      await expect(menu.getByRole('menuitemradio', { name: 'All', exact: true })).toBeFocused()
      const yesOption = menu.getByRole('menuitemradio', { name: 'Yes', exact: true })
      await expect(yesOption).toHaveAttribute('aria-checked', 'false')

      await menu.evaluate((element) => {
        element.addEventListener('keydown', (event) => {
          if (event instanceof KeyboardEvent && (event.key === 'Enter' || event.key === ' ')) {
            document.body.dataset.filterKeydowns = String(
              Number(document.body.dataset.filterKeydowns || 0) + 1,
            )
          }
        })
        element.addEventListener('click', () => {
          document.body.dataset.filterClicks = String(
            Number(document.body.dataset.filterClicks || 0) + 1,
          )
        })
      })

      await yesOption.focus()
      await page.keyboard.press(key)

      await expect(menu).toHaveCount(0)
      await expect(trigger).toHaveText('Push protection: Yes')
      await expect(trigger).toBeFocused()
      await expect(page.locator('body')).toHaveAttribute('data-filter-clicks', '1')
      await expect(page.locator('body')).not.toHaveAttribute('data-filter-keydowns')

      await trigger.click()
      await expect(menu.getByRole('menuitemradio', { checked: true })).toHaveText('Yes')
      await page.keyboard.press('Escape')
    })
  }

  test('filter menus are at least as wide as their triggers', async ({ page }) => {
    await page.goto(PAGE_PATH)

    for (const label of [
      'Push protection',
      'Validity check',
      'Partner alert',
      'Metadata check',
      'Base64',
    ]) {
      const trigger = page.getByRole('button', { name: new RegExp(`^${label}:`) })
      await trigger.click()

      const menu = page.getByRole('menu', { name: label })
      await expect(menu).toBeVisible()

      const triggerWidth = await trigger.evaluate(
        (element) => element.getBoundingClientRect().width,
      )
      const menuWidth = await menu.evaluate((element) => element.getBoundingClientRect().width)
      expect(menuWidth + 1).toBeGreaterThanOrEqual(triggerWidth)

      await page.keyboard.press('Escape')
    }
  })

  test('table has an accessible name via aria-labelledby', async ({ page }) => {
    await page.goto(PAGE_PATH)

    const table = page.getByRole('table')
    await expect(table).toBeVisible()

    const labelledBy = await table.getAttribute('aria-labelledby')
    expect(labelledBy).toBeTruthy()

    const titleEl = page.locator(`#${labelledBy}`)
    await expect(titleEl).toBeVisible()
    await expect(titleEl).not.toBeEmpty()
  })

  test('heading hierarchy does not skip levels within main content', async ({ page }) => {
    await page.goto(PAGE_PATH)

    // Scope to main content because nav, sidebar, and footer have their own heading structure.
    const main = page.locator('main, article, [role="main"]').first()
    const headings = await main.locator('h1, h2, h3, h4, h5, h6').all()
    expect(headings.length).toBeGreaterThan(0)

    let previousLevel = 0
    for (const heading of headings) {
      const tagName = await heading.evaluate((el) => el.tagName.toLowerCase())
      const level = parseInt(tagName.replace('h', ''), 10)
      // Heading levels may go up freely, but going deeper must not skip a level.
      if (level > previousLevel) {
        expect(level - previousLevel).toBeLessThanOrEqual(1)
      }
      previousLevel = level
    }
  })

  test('all interactive controls have accessible names', async ({ page }) => {
    await page.goto(PAGE_PATH)

    // Primer TextInput renders the search input as input[type="text"] with role=textbox.
    const searchInput = page.locator('[role="search"] input')
    await expect(searchInput).toBeVisible()
    const searchLabel =
      (await searchInput.getAttribute('aria-label')) ||
      (await searchInput.getAttribute('placeholder'))
    expect(searchLabel).toBeTruthy()

    const buttons = page.locator('[role="search"] button')
    const buttonCount = await buttons.count()
    expect(buttonCount).toBeGreaterThan(0)
    for (let i = 0; i < buttonCount; i++) {
      const btn = buttons.nth(i)
      const name = (await btn.getAttribute('aria-label')) || (await btn.textContent())?.trim() || ''
      expect(name.length).toBeGreaterThan(0)
    }

    const pagination = page.getByRole('navigation', { name: /pagination/i })
    if ((await pagination.count()) > 0) {
      await expect(pagination).toHaveAttribute('aria-label', /.+/)
    }
  })

  test('provider column cells are row headers', async ({ page }) => {
    await page.goto(PAGE_PATH)

    // th scope=row cells have the implicit rowheader role.
    const rowHeaders = page.getByRole('table').getByRole('rowheader')
    const count = await rowHeaders.count()
    expect(count).toBeGreaterThan(0)
  })

  test('pagination stays in range after switching to a version with fewer patterns', async ({
    page,
  }) => {
    await page.goto(PAGE_PATH)

    const status = page.getByText(/^Showing \d+ of \d+ patterns$/)
    const fptStatus = await status.textContent()
    const pagination = page.getByRole('navigation', {
      name: 'Secret scanning patterns pagination',
    })
    const lastPage = pagination.locator('[aria-label^="Page "]').last()
    await lastPage.click()
    await expect(lastPage).toHaveAttribute('aria-current', 'page')
    expect(new URL(page.url()).hash).toBe('')

    // The oldest supported Enterprise Server release has fewer patterns than Free, Pro, & Team.
    await page.getByTestId('desktop-header').getByTestId('version-picker-button').click()
    await page
      .getByRole('menuitemradio', { name: /^Enterprise Server / })
      .last()
      .click()
    await expect(page).toHaveURL(/\/enterprise-server@[\d.]+\//)
    await expect(status).not.toHaveText(fptStatus!)

    await expect(page.getByRole('table').getByRole('rowheader').first()).toBeVisible()
    await expect(pagination.locator('[aria-current="page"]')).toHaveCount(1)
  })

  test('provider header toggles aria-sort and row order', async ({ page }) => {
    await page.goto(PAGE_PATH)

    const header = page.getByRole('columnheader', { name: /Provider/ })
    const firstProvider = page.getByRole('table').getByRole('rowheader').first()
    await expect(header).not.toHaveAttribute('aria-sort')

    await header.getByRole('button').click()
    await expect(header).toHaveAttribute('aria-sort', 'ascending')
    const ascendingFirst = await firstProvider.textContent()

    await header.getByRole('button').click()
    await expect(header).toHaveAttribute('aria-sort', 'descending')
    await expect(firstProvider).not.toHaveText(ascendingFirst!)
  })

  test('clear filters resets the sort header', async ({ page }) => {
    await page.goto(PAGE_PATH)

    const header = page.getByRole('columnheader', { name: /Provider/ })
    await header.getByRole('button').click()
    await header.getByRole('button').click()
    await expect(header).toHaveAttribute('aria-sort', 'descending')

    await page.getByRole('button', { name: 'Clear all filters and search' }).click()
    await expect(header).not.toHaveAttribute('aria-sort')
  })

  test('sorting returns to the first page', async ({ page }) => {
    await page.goto(PAGE_PATH)

    const pages = page
      .getByRole('navigation', { name: 'Secret scanning patterns pagination' })
      .locator('[aria-label^="Page "]')
    await pages.nth(1).click()
    await expect(pages.nth(1)).toHaveAttribute('aria-current', 'page')

    await page
      .getByRole('columnheader', { name: /Provider/ })
      .getByRole('button')
      .click()
    await expect(pages.first()).toHaveAttribute('aria-current', 'page')
  })

  test.describe('narrow viewport', () => {
    test.use({ viewport: { width: 320, height: 256 } })

    test('table content remains accessible via scrolling', async ({ page }) => {
      await page.goto(PAGE_PATH)

      const table = page.getByRole('table')
      await expect(table).toBeVisible()

      // At narrow viewports, the table must stay visible even when it overflows horizontally.
      await expect(table).toBeVisible()

      const cells = table.getByRole('rowheader').or(table.getByRole('cell'))
      expect(await cells.count()).toBeGreaterThan(0)

      // The overflow wrapper must allow horizontal scrolling.
      const overflowX = await table.evaluate((el) => {
        const wrapper = el.closest('[class*="OverflowWrapper"]') || el.parentElement
        return wrapper ? getComputedStyle(wrapper).overflowX : 'visible'
      })
      expect(overflowX).not.toBe('hidden')
    })
  })

  test('color contrast meets 4.5:1 minimum', async ({ page }) => {
    // Axe covers this broadly; this test isolates table color contrast.
    const { default: AxeBuilder } = await import('@axe-core/playwright')
    await page.goto(PAGE_PATH)

    const results = await new AxeBuilder({ page })
      .include('table')
      .withRules(['color-contrast'])
      .analyze()

    expect(results.violations).toEqual([])
  })
})

import { test, expect, type Locator, type Page } from '@playwright/test'

import { turnOffExperimentsInPage } from '../helpers/turn-off-experiments'
import { relativeLuminance } from '@/fixtures/helpers/color-contrast'
import {
  COLOR_MODE_COOKIE_NAME,
  USER_LANGUAGE_COOKIE_NAME,
  USER_VERSION_COOKIE_NAME,
} from '../../frame/lib/constants'

const ARTICLE = '/en/get-started/foo/bar'
// find-page.ts narrows context.languages to English for early-access pages, so
// this route exercises the single-language branch of the header's language slot.
const ENGLISH_ONLY_ARTICLE = '/en/early-access/secrets/deeper/mariana-trench'
const SEARCH_LABEL = 'Search or ask Copilot'
const LANGUAGE_LABEL = 'Select language: current language is English'
const PLAN_LABEL = 'Select your plan:'
const VERSION_LABEL = 'Select your version:'
// The pill's line-height comes from the Docs design, not Brand's
// --brand-text-lineHeight-100 value of 1.5.
const PILL_LINE_HEIGHT = 1.2
const PLAN_TRIGGER_TESTID = 'version-picker-button'
const LANGUAGE_TRIGGER_TESTID = 'language-picker-button'
// Brand renders the trailing slot when trailingComponent != null, so the wrapper
// survives a child that renders nothing.
// The CSS module hash leaves only this stable fragment to match; the paired
// presence test prevents a vacuous absence check after a Brand rename.
const BRAND_TRAILING_SLOT = '[class*="SubdomainNavBar-trailing-component"]'

// Resolve Brand custom properties in the page's current theme instead of
// hardcoding light-mode RGB values.
// Append the probe inside locator because the plan menu has its own nested Brand
// ThemeProvider, so tokens must come from that subtree.
// The hidden probe normalizes CSS color syntax into rgb() without styling the UI.
async function resolveThemeTokens(locator: Locator, tokens: string[]) {
  return locator.evaluate((element, tokenNames: string[]) => {
    const probe = document.createElement('span')
    probe.hidden = true
    element.append(probe)
    try {
      const resolved: Record<string, string> = {}
      for (const token of tokenNames) {
        if (!getComputedStyle(element).getPropertyValue(token).trim()) {
          throw new Error(`Missing theme token ${token}`)
        }
        probe.style.color = `var(${token})`
        resolved[token] = getComputedStyle(probe).color
      }
      return resolved
    } finally {
      probe.remove()
    }
  }, tokens)
}

// Resolve Brand length tokens to pixels so the pill geometry stays tied to
// tokens, not their current numeric values.
// The absolute hidden probe stays laid out so width resolves through calc() and
// max() to a used pixel value.
async function resolveTokenPixels(locator: Locator, tokens: string[]) {
  return locator.evaluate((element, tokenNames: string[]) => {
    const probe = document.createElement('div')
    probe.style.position = 'absolute'
    probe.style.visibility = 'hidden'
    probe.style.pointerEvents = 'none'
    element.append(probe)
    try {
      const resolved: Record<string, number> = {}
      for (const token of tokenNames) {
        if (!getComputedStyle(element).getPropertyValue(token).trim()) {
          throw new Error(`Missing theme token ${token}`)
        }
        probe.style.width = `var(${token})`
        const width = parseFloat(getComputedStyle(probe).width)
        if (!Number.isFinite(width) || width <= 0) {
          throw new Error(`Unresolved length token ${token}`)
        }
        resolved[token] = width
      }
      return resolved
    } finally {
      probe.remove()
    }
  }, tokens)
}

// Font weights resolve to plain numbers, so this reads raw custom-property values.
async function resolveTokenValues(locator: Locator, tokens: string[]) {
  return locator.evaluate((element, tokenNames: string[]) => {
    const resolved: Record<string, string> = {}
    for (const token of tokenNames) {
      const value = getComputedStyle(element).getPropertyValue(token).trim()
      if (!value) throw new Error(`Missing theme token ${token}`)
      resolved[token] = value
    }
    return resolved
  }, tokens)
}

async function expectHeaderPlanPicker(page: Page) {
  const picker = page.getByTestId('desktop-header').getByTestId('version-picker')
  const label = picker.getByText(PLAN_LABEL, { exact: true })
  const button = picker.getByRole('button')
  const value = button.getByTestId('field')

  await expect(label).toBeVisible()
  await expect(value).toHaveText('Free, Pro, & Team')
  await expect(button).toHaveAccessibleName(`${PLAN_LABEL} Free, Pro, & Team`)
  await expect(button).not.toContainText(PLAN_LABEL)
  expect(await label.evaluate((element) => element.closest('button'))).toBeNull()
  const labelId = await label.getAttribute('id')
  const valueId = await value.getAttribute('id')
  expect(labelId).toBeTruthy()
  expect(valueId).toBeTruthy()
  await expect(button).toHaveAttribute('aria-labelledby', `${labelId} ${valueId}`)

  // Resolve Brand tokens so expected sizes move with --base-size-* changes instead of failing.
  const sizes = await resolveTokenPixels(picker, [
    '--brand-text-size-100',
    '--base-size-2',
    '--base-size-8',
    '--base-size-12',
    '--brand-borderWidth-thin',
  ])
  const weights = await resolveTokenValues(picker, [
    '--base-text-weight-normal',
    '--base-text-weight-bold',
  ])
  const fontSize = sizes['--brand-text-size-100']
  const paddingInline = sizes['--base-size-12']
  const paddingBlock = sizes['--base-size-8'] + sizes['--brand-borderWidth-thin']
  const labelGap = sizes['--base-size-8'] + sizes['--base-size-2']
  const lineHeight = fontSize * PILL_LINE_HEIGHT
  const pillHeight = lineHeight + paddingBlock * 2

  await expect(label).toHaveCSS('font-weight', weights['--base-text-weight-normal'])
  await expect(value).toHaveCSS('font-weight', weights['--base-text-weight-bold'])
  const labelStyle = await label.evaluate((element) => ({
    fontSize: parseFloat(getComputedStyle(element).fontSize),
  }))
  const valueStyle = await value.evaluate((element) => {
    const style = getComputedStyle(element)
    return { fontSize: parseFloat(style.fontSize), lineHeight: parseFloat(style.lineHeight) }
  })
  const buttonStyle = await button.evaluate((element) => {
    const style = getComputedStyle(element)
    return {
      paddingInlineStart: parseFloat(style.paddingInlineStart),
      paddingInlineEnd: parseFloat(style.paddingInlineEnd),
      paddingBlockStart: parseFloat(style.paddingBlockStart),
      paddingBlockEnd: parseFloat(style.paddingBlockEnd),
    }
  })
  expect(labelStyle.fontSize).toBeCloseTo(fontSize, 1)
  expect(valueStyle.fontSize).toBeCloseTo(fontSize, 1)
  expect(valueStyle.lineHeight).toBeCloseTo(lineHeight, 1)
  expect(buttonStyle.paddingInlineStart).toBeCloseTo(paddingInline, 1)
  expect(buttonStyle.paddingInlineEnd).toBeCloseTo(paddingInline, 1)
  expect(buttonStyle.paddingBlockStart).toBeCloseTo(paddingBlock, 1)
  expect(buttonStyle.paddingBlockEnd).toBeCloseTo(paddingBlock, 1)
  for (const side of ['top', 'right', 'bottom', 'left']) {
    await expect(button).toHaveCSS(`border-${side}-width`, '0px')
  }

  const tokens = await resolveThemeTokens(picker, [
    '--brand-color-text-muted',
    '--brand-color-text-default',
    '--brand-color-canvas-subtle',
    '--brand-color-canvas-default',
  ])
  const colors = {
    muted: tokens['--brand-color-text-muted'],
    text: tokens['--brand-color-text-default'],
    subtle: tokens['--brand-color-canvas-subtle'],
    canvas: tokens['--brand-color-canvas-default'],
  }
  await expect(label).toHaveCSS('color', colors.muted)
  await expect(value).toHaveCSS('color', colors.text)
  await expect(button).toHaveCSS('background-color', colors.subtle)
  expect(colors.subtle).not.toBe(colors.canvas)
  expect(colors.muted).not.toBe(colors.text)

  await page.evaluate(() => document.fonts.ready)
  const labelBox = (await label.boundingBox())!
  const buttonBox = (await button.boundingBox())!
  expect(buttonBox.x - (labelBox.x + labelBox.width)).toBeCloseTo(labelGap, 0)
  expect(labelBox.y + labelBox.height / 2).toBeCloseTo(buttonBox.y + buttonBox.height / 2, 0)
  expect(buttonBox.height).toBeCloseTo(pillHeight, 0)
  // Default English plan name must fit with Signup at 1012px; ellipsis is for longer labels.
  await expect
    .poll(() => value.evaluate((element) => element.scrollWidth - element.clientWidth))
    .toBeLessThanOrEqual(0)
  // A full-radius pill is the contract, not whether the token is 999px or 9999px.
  const radii = await button.evaluate((element) => {
    const style = getComputedStyle(element)
    return [
      style.borderTopLeftRadius,
      style.borderTopRightRadius,
      style.borderBottomLeftRadius,
      style.borderBottomRightRadius,
    ].map(parseFloat)
  })
  for (const radius of radii) expect(radius).toBeGreaterThanOrEqual(buttonBox.height / 2)

  await expectFilledTriangleCaret(button, colors.text)
}

// Both header triggers use the same filled triangle caret, checked through one helper.
// Brand's ActionMenu.Button defaults to ChevronDownIcon; the ActionMenuTrigger
// cast relies on a caller-supplied trailingVisual overriding it.
// A Brand change that destructures trailingVisual would restore chevrons on both controls.
// Assert the chevron is gone and the triangle path is about 7.15 by 3.82 user
// units, not chevron-down's 9.56 by 5.31.
async function expectFilledTriangleCaret(trigger: Locator, color: string) {
  const caret = trigger.locator('svg.octicon-triangle-down')
  await expect(caret).toBeVisible()
  await expect(caret).toHaveCSS('width', '16px')
  await expect(caret).toHaveCSS('height', '16px')
  await expect(caret.locator('path')).toHaveCSS('fill', color)
  await expect(trigger.locator('svg.octicon-chevron-down')).toHaveCount(0)
  const glyph = await caret.locator('path').evaluate((path) => {
    const { width, height } = (path as SVGPathElement).getBBox()
    return { width, height }
  })
  expect(glyph.width).toBeGreaterThan(6.5)
  expect(glyph.width).toBeLessThan(8.2)
  expect(glyph.height).toBeGreaterThan(3.2)
  expect(glyph.height).toBeLessThan(4.6)
}

// The language trigger deliberately does not match the plan pill.
// Figma specifies a flat control: 16px globe, muted 14px regular language text,
// then the same filled caret.
// Only the dropdown is shared, so this catches accidental reuse of the shared pill class.
async function expectHeaderLanguageTrigger(page: Page) {
  const picker = page.getByTestId('desktop-header').getByTestId('language-picker')
  const trigger = picker.getByTestId(LANGUAGE_TRIGGER_TESTID)
  const value = picker.getByTestId('language-picker-field')
  await expect(trigger).toHaveAccessibleName(LANGUAGE_LABEL)
  await expect(value).toHaveText('English')

  const sizes = await resolveTokenPixels(picker, ['--brand-text-size-100'])
  const weights = await resolveTokenValues(picker, ['--base-text-weight-normal'])
  const tokens = await resolveThemeTokens(picker, [
    '--brand-color-text-muted',
    '--brand-color-text-default',
    '--brand-color-canvas-subtle',
  ])
  await expect(value).toHaveCSS('color', tokens['--brand-color-text-muted'])
  await expect(value).toHaveCSS('font-weight', weights['--base-text-weight-normal'])
  const valueFontSize = await value.evaluate((element) =>
    parseFloat(getComputedStyle(element).fontSize),
  )
  expect(valueFontSize).toBeCloseTo(sizes['--brand-text-size-100'], 1)

  // Flat trigger: no rest fill or border, a 6px corner, and canvas-subtle on hover or open.
  await expect(trigger).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  expect(tokens['--brand-color-canvas-subtle']).not.toBe('rgba(0, 0, 0, 0)')
  for (const side of ['top', 'right', 'bottom', 'left']) {
    await expect(trigger).toHaveCSS(`border-${side}-width`, '0px')
  }
  for (const corner of ['top-left', 'top-right', 'bottom-left', 'bottom-right']) {
    await expect(trigger).toHaveCSS(`border-${corner}-radius`, '6px')
  }
  const triggerBox = (await trigger.boundingBox())!
  // Brand's ActionMenu remaps --brand-borderRadius-medium to full radius; 6px prevents a pill.
  expect(triggerBox.height / 2).toBeGreaterThan(6)

  const globe = trigger.locator('svg.octicon-globe')
  await expect(globe).toBeVisible()
  await expect(globe).toHaveCSS('width', '16px')
  await expect(globe).toHaveCSS('height', '16px')
  const globeBox = (await globe.boundingBox())!
  const valueBox = (await value.boundingBox())!
  expect(globeBox.x + globeBox.width).toBeLessThanOrEqual(valueBox.x + 1)

  await expectFilledTriangleCaret(trigger, tokens['--brand-color-text-muted'])
}

// The two header dropdowns use the same Brand ActionMenu surface and row styles
// from HeaderPicker.module.scss.
// Running each design assertion against both menus proves shared styling, not similar styling.
type HeaderDropdown = {
  name: string
  pickerTestId: string
  triggerTestId: string
  // The span each row wraps its label in.
  itemTestId: string
  expectTrigger: (page: Page) => Promise<void>
  // The row that opens already chosen: tinted, with the trailing green dot.
  selectedRow: string
  // Another selectable row: no tint, no dot.
  unselectedRow: string
  // Rows that navigate instead of selecting, so they stay plain menuitems.
  navigationRowCount: number
  // The plan menu keeps one rule between its versions and its navigation rows.
  separatorCount: number
  // A clipped menu loses this final row first.
  lastRowRole: 'menuitem' | 'menuitemradio'
  lastRowName: RegExp
}

const PLAN_DROPDOWN: HeaderDropdown = {
  name: 'plan',
  pickerTestId: 'version-picker',
  triggerTestId: PLAN_TRIGGER_TESTID,
  itemTestId: 'version-picker-item',
  expectTrigger: expectHeaderPlanPicker,
  selectedRow: 'Free, Pro, & Team',
  unselectedRow: 'Enterprise Cloud',
  navigationRowCount: 2,
  separatorCount: 1,
  lastRowRole: 'menuitem',
  lastRowName: /About versions/,
}

const LANGUAGE_DROPDOWN: HeaderDropdown = {
  name: 'language',
  pickerTestId: 'language-picker',
  triggerTestId: LANGUAGE_TRIGGER_TESTID,
  itemTestId: 'language-picker-item',
  expectTrigger: expectHeaderLanguageTrigger,
  selectedRow: 'English',
  unselectedRow: '日本語',
  // Every language row selects a language, so this menu has no navigation rows
  // and nothing to divide.
  navigationRowCount: 0,
  separatorCount: 0,
  lastRowRole: 'menuitemradio',
  lastRowName: /日本語/,
}

// Docs 2026 rebuilds header dropdowns on Brand ActionMenu, so this helper checks
// the shared menu contract end to end.
async function expectHeaderDropdownDesign(
  page: Page,
  colorScheme: 'light' | 'dark',
  dropdown: HeaderDropdown,
) {
  const picker = page.getByTestId('desktop-header').getByTestId(dropdown.pickerTestId)
  const trigger = picker.getByTestId(dropdown.triggerTestId)
  await expect(trigger).toHaveAttribute('aria-expanded', 'false')
  await trigger.click()
  await expect(trigger).toHaveAttribute('aria-expanded', 'true')

  // Brand's menu renders inside the picker wrapper, not a portal.
  const menu = picker.getByRole('menu')
  await expect(menu).toBeVisible()

  const tokens = await resolveThemeTokens(menu, [
    '--brand-color-canvas-default',
    '--brand-color-border-subtle',
    '--brand-color-border-muted',
    '--brand-color-text-default',
    '--brand-color-success-fg',
  ])
  // A dark run that stays light would pass above, so verify Brand tokens changed.
  const luminance = relativeLuminance(tokens['--brand-color-canvas-default'])
  if (colorScheme === 'dark') {
    expect(luminance).toBeLessThan(0.2)
  } else {
    expect(luminance).toBeGreaterThan(0.8)
  }

  // Overrides Brand's border-muted border and 16px radius; assertions also pin fill and 8px pad.
  await expect(menu).toHaveCSS('background-color', tokens['--brand-color-canvas-default'])
  for (const side of ['top', 'right', 'bottom', 'left']) {
    await expect(menu).toHaveCSS(`border-${side}-width`, '1px')
    await expect(menu).toHaveCSS(`border-${side}-style`, 'solid')
    await expect(menu).toHaveCSS(`border-${side}-color`, tokens['--brand-color-border-subtle'])
    await expect(menu).toHaveCSS(`padding-${side}`, '8px')
  }
  for (const corner of ['top-left', 'top-right', 'bottom-left', 'bottom-right']) {
    await expect(menu).toHaveCSS(`border-${corner}-radius`, '6px')
  }
  // The design sets a 256px minimum menu width; long rows can grow it, never shrink it.
  const menuBox = (await menu.boundingBox())!
  expect(menuBox.width).toBeGreaterThanOrEqual(256)
  // Brand allowOutOfBounds can overhang the right-edge menu; menuAlignment keeps it on screen.
  const viewportWidth = page.viewportSize()!.width
  expect(menuBox.x).toBeGreaterThanOrEqual(-1)
  expect(menuBox.x + menuBox.width).toBeLessThanOrEqual(viewportWidth + 1)

  const selectableRows = menu.getByRole('menuitemradio')
  const navigationRows = menu.getByRole('menuitem')
  expect(await selectableRows.count()).toBeGreaterThanOrEqual(2)
  // In the plan menu, All Enterprise Server releases and About versions stay navigation menuitems.
  await expect(navigationRows).toHaveCount(dropdown.navigationRowCount)

  // Brand lacks a divider child; keep the separator unfocusable and outside arrow-key wrap ends.
  const separator = menu.locator('[role="separator"]')
  await expect(separator).toHaveCount(dropdown.separatorCount)
  if (dropdown.separatorCount > 0) {
    await expect(separator).not.toHaveAttribute('tabindex')
    await expect(separator).not.toHaveAttribute('data-value')
    await expect(separator).toHaveCSS('border-top-color', tokens['--brand-color-border-subtle'])
    await expect(separator).toHaveCSS('border-top-width', '1px')
    await expect(separator).toHaveCSS('border-top-style', 'solid')
    const rule = await menu.evaluate((list) => {
      const rows = Array.from(list.querySelectorAll('li'))
      const index = rows.findIndex((row) => row.getAttribute('role') === 'separator')
      const style = getComputedStyle(list)
      const ruleStyle = getComputedStyle(rows[index])
      return {
        index,
        total: rows.length,
        previousRole: rows[index - 1]?.getAttribute('role') ?? null,
        nextRole: rows[index + 1]?.getAttribute('role') ?? null,
        nextText: rows[index + 1]?.textContent?.trim() ?? null,
        width: rows[index].getBoundingClientRect().width,
        innerWidth:
          list.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight),
        marginTop: parseFloat(ruleStyle.marginTop),
        marginBottom: parseFloat(ruleStyle.marginBottom),
      }
    })
    // After the last version row and before "All Enterprise Server releases".
    expect(rule.index).toBeGreaterThan(0)
    expect(rule.index).toBe(rule.total - 1 - dropdown.navigationRowCount)
    expect(rule.previousRole).toBe('menuitemradio')
    expect(rule.nextRole).toBe('menuitem')
    expect(rule.nextText).toMatch(/All Enterprise Server releases/)
    // A block li spans the menu's inner width instead of a row's 12px insets.
    expect(rule.width).toBeCloseTo(rule.innerWidth, 0)
    expect(rule.marginTop).toBeCloseTo(8, 0)
    expect(rule.marginBottom).toBeCloseTo(8, 0)
  }

  const rows = menu.locator('li:not([role="separator"])')
  const rowCount = await rows.count()
  expect(rowCount).toBe((await selectableRows.count()) + dropdown.navigationRowCount)
  for (let index = 0; index < rowCount; index++) {
    const row = rows.nth(index)
    expect((await row.boundingBox())!.height).toBeCloseTo(32, 0)
    await expect(row).toHaveCSS('padding-left', '12px')
    // The indicator column reserves 12px, a 16px dot and a 12px gap, replacing Brand's 48px gutter.
    await expect(row).toHaveCSS('padding-right', '40px')
    for (const corner of ['top-left', 'top-right', 'bottom-left', 'bottom-right']) {
      await expect(row).toHaveCSS(`border-${corner}-radius`, '6px')
    }

    const label = row.getByTestId(dropdown.itemTestId)
    await expect(label).toBeVisible()
    await expect(label).toHaveCSS('font-size', '14px')
    await expect(label).toHaveCSS('font-weight', '500')
    await expect(label).toHaveCSS('color', tokens['--brand-color-text-default'])
    const letterSpacing = await label.evaluate((element) =>
      parseFloat(getComputedStyle(element).letterSpacing),
    )
    expect(letterSpacing).toBeCloseTo(0.14, 2)
  }

  const selectedRow = menu.getByRole('menuitemradio', { name: dropdown.selectedRow, exact: true })
  await expect(selectedRow).toHaveAttribute('aria-checked', 'true')
  await expect(selectedRow).toHaveCSS('background-color', tokens['--brand-color-border-muted'])

  // Selected row: a trailing 16px green dot at the row's right edge.
  const dot = selectedRow.locator('svg.octicon-dot-fill')
  await expect(dot).toBeVisible()
  await expect(dot).toHaveCSS('width', '16px')
  await expect(dot).toHaveCSS('height', '16px')
  await expect(dot).toHaveCSS('fill', tokens['--brand-color-success-fg'])
  const selectedBox = (await selectedRow.boundingBox())!
  const dotBox = (await dot.boundingBox())!
  expect(selectedBox.x + selectedBox.width - (dotBox.x + dotBox.width)).toBeCloseTo(12, 0)
  expect(dotBox.y + dotBox.height / 2).toBeCloseTo(selectedBox.y + selectedBox.height / 2, 0)

  // The selected row's only visible glyph must be the trailing dot, not Brand's leading check slot.
  await expect(selectedRow.locator('svg.octicon-check')).not.toBeVisible()
  const visibleGlyphs = await selectedRow
    .locator('svg')
    .evaluateAll((svgs) =>
      svgs.filter((svg) => svg.getClientRects().length > 0).map((svg) => svg.getAttribute('class')),
    )
  expect(visibleGlyphs).toHaveLength(1)
  expect(visibleGlyphs[0]).toContain('octicon-dot-fill')
  // Accept a missing leading slot so Brand can remove it without failing this suite.
  const leadingSlotDisplay = await selectedRow.evaluate((row) => {
    const first = row.firstElementChild
    return first && row.children.length > 1 ? getComputedStyle(first).display : null
  })
  expect(leadingSlotDisplay === null || leadingSlotDisplay === 'none').toBe(true)

  // Non-selected rows carry no trailing indicator at all.
  const unselectedRow = menu.getByRole('menuitemradio', {
    name: dropdown.unselectedRow,
    exact: true,
  })
  await expect(unselectedRow).toHaveAttribute('aria-checked', 'false')
  await expect(unselectedRow.locator('svg.octicon-dot-fill')).toHaveCount(0)
  await expect(unselectedRow).not.toHaveCSS(
    'background-color',
    tokens['--brand-color-border-muted'],
  )

  for (let index = 0; index < dropdown.navigationRowCount; index++) {
    const extra = navigationRows.nth(index)
    // axe rejects aria-checked on menuitem, so navigation rows opt out of selection semantics.
    await expect(extra).not.toHaveAttribute('aria-checked')
    await expect(extra.locator('svg.octicon-dot-fill')).toHaveCount(0)
  }

  await page.keyboard.press('Escape')
  await expect(menu).not.toBeVisible()
  await expect(trigger).toHaveAttribute('aria-expanded', 'false')
  await expect(trigger).toBeFocused()
}

// The shared stylesheet must fix these properties identically for both dropdowns.
// Content-dependent geometry is absent; only styling has to match.
const SURFACE_PROPERTIES = [
  'background-color',
  'min-width',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',
  'border-top-width',
  'border-top-style',
  'border-top-color',
  'border-top-left-radius',
  'border-bottom-right-radius',
]
const ROW_PROPERTIES = [
  'display',
  'align-items',
  'position',
  'min-height',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',
  'border-top-left-radius',
  'background-color',
]
const LABEL_PROPERTIES = [
  'font-family',
  'font-size',
  'font-weight',
  'letter-spacing',
  'color',
  'white-space',
]
const DOT_PROPERTIES = ['position', 'right', 'width', 'height', 'fill']

// An open header dropdown fingerprint covers the surface, selected row, label
// and trailing dot.
// Equal fingerprints prove the two menus share styling, not merely that each matches the design.
// This tests the user-visible request: the language dropdown needs to look like
// the version dropdown.
async function dropdownStyleFingerprint(menu: Locator, dropdown: HeaderDropdown) {
  const selectedRow = menu.getByRole('menuitemradio', { name: dropdown.selectedRow, exact: true })
  const read = (locator: Locator, properties: string[]) =>
    locator.evaluate((element, names: string[]) => {
      const style = getComputedStyle(element)
      return Object.fromEntries(names.map((name) => [name, style.getPropertyValue(name)]))
    }, properties)

  return {
    surface: await read(menu, SURFACE_PROPERTIES),
    row: await read(selectedRow, ROW_PROPERTIES),
    label: await read(selectedRow.getByTestId(dropdown.itemTestId), LABEL_PROPERTIES),
    dot: await read(selectedRow.locator('svg.octicon-dot-fill'), DOT_PROPERTIES),
    // Structural hiding must match so one menu cannot grow a Brand check icon the other lacks.
    leadingSlotDisplay: await selectedRow.evaluate((row) => {
      const first = row.firstElementChild
      return first && row.children.length > 1 ? getComputedStyle(first).display : null
    }),
  }
}

async function expectDesktopHeaderSections(page: Page, signupVisible: boolean) {
  const header = page.getByTestId('desktop-header')
  await expect(header.getByRole('button', { name: SEARCH_LABEL, exact: true })).toBeInViewport({
    ratio: 1,
  })
  await expect(header.getByRole('button', { name: LANGUAGE_LABEL, exact: true })).toBeInViewport({
    ratio: 1,
  })
  await expect(header.getByRole('button', { name: 'Menu', exact: true })).not.toBeVisible()
  if (signupVisible) {
    await expect(header.getByTestId('header-signup')).toBeInViewport({ ratio: 1 })
  } else {
    await expect(header.getByTestId('header-signup')).toHaveCount(0)
  }
  await page.evaluate(() => document.fonts.ready)

  await expect(async () => {
    const layout = await header.evaluate((element) => {
      const search = element.querySelector<HTMLElement>('[data-testid="toggle-search"]')!
      const language = element.querySelector<HTMLElement>('[data-testid="language-picker"]')!
      const signup = element.querySelector<HTMLElement>('[data-testid="header-signup"]')
      // Find section wrappers from stable Docs anchors, not Brand CSS hashes or parent-hop counts.
      let sectionRow = search.parentElement!
      while (!sectionRow.contains(language)) sectionRow = sectionRow.parentElement!
      const sectionFor = (control: HTMLElement) => {
        if (!sectionRow.contains(control)) throw new Error('Header control left its section row')
        let section = control
        while (section.parentElement !== sectionRow) section = section.parentElement!
        return section
      }
      const measure = (section: HTMLElement) => {
        const style = getComputedStyle(section)
        return {
          rect: section.getBoundingClientRect().toJSON(),
          borderStart: style.borderInlineStartWidth,
          borderEnd: style.borderInlineEndWidth,
          borderStartStyle: style.borderInlineStartStyle,
          borderEndStyle: style.borderInlineEndStyle,
          borderStartColor: style.borderInlineStartColor,
          borderEndColor: style.borderInlineEndColor,
        }
      }
      const searchSection = sectionFor(search)
      const languageSection = sectionFor(language)
      const signupSection = signup ? sectionFor(signup) : null
      const visibleSections = Array.from(sectionRow.children).filter((child) => {
        const rect = child.getBoundingClientRect()
        return rect.width > 0 && rect.height > 0 && getComputedStyle(child).visibility !== 'hidden'
      })
      const headerRect = element.getBoundingClientRect()
      return {
        header: headerRect.toJSON(),
        viewportWidth: document.documentElement.clientWidth,
        contentBottom: headerRect.bottom - parseFloat(getComputedStyle(element).borderBottomWidth),
        search: measure(searchSection),
        language: measure(languageSection),
        signup: signupSection ? measure(signupSection) : null,
        searchButton: search.getBoundingClientRect().toJSON(),
        languageButton: language.querySelector('button')!.getBoundingClientRect().toJSON(),
        signupButton: signup?.getBoundingClientRect().toJSON(),
        separateSections:
          searchSection !== languageSection &&
          (!signupSection ||
            (signupSection !== searchSection && signupSection !== languageSection)),
        sectionOrder: visibleSections.map((section) =>
          section === searchSection
            ? 'search'
            : section === languageSection
              ? 'language'
              : section === signupSection
                ? 'signup'
                : 'unexpected',
        ),
      }
    })

    expect(layout.separateSections).toBe(true)
    expect(layout.sectionOrder).toEqual(
      signupVisible ? ['search', 'language', 'signup'] : ['search', 'language'],
    )
    expect(layout.header.left).toBeCloseTo(0, 0)
    expect(layout.header.right).toBeCloseTo(layout.viewportWidth, 0)
    // DOM order alone misses flex-order regressions, overlaps, and blank cells.
    expect(layout.searchButton.right).toBeLessThan(layout.languageButton.left)
    expect(layout.search.rect.right).toBeCloseTo(layout.language.rect.left, 0)
    const lastSection = signupVisible ? layout.signup! : layout.language
    expect(lastSection.rect.right).toBeCloseTo(layout.header.right, 0)
    for (const section of [
      layout.search,
      layout.language,
      ...(layout.signup ? [layout.signup] : []),
    ]) {
      expect(section.rect.width).toBeGreaterThan(0)
      expect(section.rect.top).toBeCloseTo(layout.header.top, 0)
      expect(section.rect.bottom).toBeCloseTo(layout.contentBottom, 0)
    }
    // Search owns the divider before Language; Signup owns its own left divider.
    expect(layout.search.borderEnd).toBe('1px')
    expect(layout.search.borderEndStyle).toBe('solid')
    expect(layout.search.borderEndColor).not.toBe('rgba(0, 0, 0, 0)')
    expect(layout.language.borderStart).toBe('0px')
    expect(layout.language.borderEnd).toBe('0px')
    if (signupVisible) {
      expect(layout.languageButton.right).toBeLessThan(layout.signupButton!.left)
      expect(layout.language.rect.right).toBeCloseTo(layout.signup!.rect.left, 0)
      expect(layout.signup!.borderStart).toBe('1px')
      expect(layout.signup!.borderStartStyle).toBe('solid')
      expect(layout.signup!.borderStartColor).toBe(layout.search.borderEndColor)
    }
  }).toPass()
}

async function expectDocsSearchOpen(page: Page) {
  const searchInput = page.getByTestId('overlay-search-input')
  await expect(searchInput).toBeFocused()
  // Focus alone misses a backdrop incorrectly layered above the portalled dialog.
  await searchInput.click()
  await expect(searchInput).toBeFocused()
  await expect(page.getByRole('dialog')).toHaveCount(1)
  // Only Docs search may become modal; opening Brand's closed native dialog would add a focus trap.
  const brandDialog = page.getByTestId('desktop-header').locator('dialog')
  await expect(brandDialog).toHaveCount(1)
  await expect(brandDialog).toHaveJSProperty('open', false)
  await expect(page).toHaveURL((url) => url.searchParams.get('search-overlay-open') === 'true')
}

// expectBackgroundIsolated includes Brand's skip link because it sits outside
// the inert wrapper as a sibling before header, yet still targets #main-content
// while the menu is open.
// CSS avoids getByText strict-mode matches from the wrapped label and getByRole
// misses after aria-hidden.
async function expectBackgroundIsolated(page: Page, isolated: boolean) {
  for (const locator of [
    page.getByText('Skip to main content', { exact: true }),
    page.locator('[data-container="header"] a[href="#main-content"]'),
    page.locator('#main-content'),
    page.getByTestId('sidebar-mobile-toggle'),
    page.locator('footer').first(),
  ]) {
    await expect
      .poll(() => locator.evaluate((element) => !!element.closest('[inert]')))
      .toBe(isolated)
    await expect
      .poll(() => locator.evaluate((element) => !!element.closest('[aria-hidden="true"]')))
      .toBe(isolated)
  }
}

test.describe('Brand header', () => {
  test.beforeEach(async ({ page }) => {
    // Empty suggestions keep header coordination tests independent of Elasticsearch and Copilot.
    await page.route('**/api/search/combined-search/v1?**', (route) =>
      route.fulfill({
        json: {
          aiAutocompleteSuggestions: { hits: [] },
          generalSearchResults: { hits: [], meta: { found: { value: 0 } } },
        },
      }),
    )
  })

  for (const width of [1012, 1440]) {
    for (const hasAccount of [false, true]) {
      test(`desktop plan pill, language trigger and divided right-hand sections at ${width}px, signup ${hasAccount ? 'absent' : 'visible'}`, async ({
        page,
        context,
      }) => {
        await page.setViewportSize({ width, height: 800 })
        await page.emulateMedia({ colorScheme: 'light' })
        await page.goto(ARTICLE)
        await turnOffExperimentsInPage(page)
        if (hasAccount) {
          await context.addCookies([
            {
              name: COLOR_MODE_COOKIE_NAME,
              value: encodeURIComponent(JSON.stringify({ color_mode: 'light' })),
              url: page.url(),
            },
          ])
          await page.reload()
        }

        // Wait for account detection; Signup can mount after hydration and shrink the plan name.
        await expectDesktopHeaderSections(page, !hasAccount)
        await expectHeaderPlanPicker(page)
        // At 1012px, Signup pressure exposes accidental pill styling on the language trigger.
        await expectHeaderLanguageTrigger(page)
      })
    }
  }

  // Header.tsx omits trailingComponent because Brand keeps wrapper if LanguagePicker returns null.

  // The multi-language assertion keeps BRAND_TRAILING_SLOT from passing after a Brand class rename.
  test('the language slot is omitted, not left empty, when only English is available', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 800 })
    await page.emulateMedia({ colorScheme: 'light' })

    await page.goto(ARTICLE)
    await turnOffExperimentsInPage(page)
    await expect(page.getByTestId('desktop-header').locator(BRAND_TRAILING_SLOT)).toHaveCount(1)

    await page.goto(ENGLISH_ONLY_ARTICLE)
    await turnOffExperimentsInPage(page)
    const header = page.getByTestId('desktop-header')
    // Assert the plan picker first so an empty header cannot pass the absence checks below.
    await expect(header.getByRole('button', { name: PLAN_LABEL, exact: false })).toBeVisible()
    await expect(page.getByTestId('language-picker')).toHaveCount(0)
    await expect(header.locator(BRAND_TRAILING_SLOT)).toHaveCount(0)

    // Every divided header cell must hold a control; an empty slot would add a gridline and margin.
    await page.evaluate(() => document.fonts.ready)
    await expect(async () => {
      const sections = await header.evaluate((element) => {
        const search = element.querySelector<HTMLElement>('[data-testid="toggle-search"]')!
        const signup = element.querySelector<HTMLElement>('[data-testid="header-signup"]')!
        let sectionRow = search.parentElement!
        while (!sectionRow.contains(signup)) sectionRow = sectionRow.parentElement!
        const headerRight = element.getBoundingClientRect().right
        const visible = Array.from(sectionRow.children).filter((child) => {
          const rect = child.getBoundingClientRect()
          return rect.width > 0 && rect.height > 0
        })
        return {
          empty: visible.filter((child) => !child.querySelector('button, a')).length,
          lastReachesEdge:
            Math.abs(visible[visible.length - 1].getBoundingClientRect().right - headerRight) < 1,
          lastHoldsSignup: visible[visible.length - 1].contains(signup),
        }
      })
      expect(sections.empty).toBe(0)
      expect(sections.lastHoldsSignup).toBe(true)
      expect(sections.lastReachesEdge).toBe(true)
    }).toPass()

    // The narrow menu exposes a leftover wrapper as a full-width padded block above Sign up.
    await page.setViewportSize({ width: 390, height: 800 })
    await page.getByRole('button', { name: 'Menu', exact: true }).click()
    await expect(page.getByTestId('header-signup')).toBeVisible()
    await expect(page.getByTestId('language-picker')).toHaveCount(0)
    await expect(header.locator(BRAND_TRAILING_SLOT)).toHaveCount(0)
  })

  for (const colorScheme of ['light', 'dark'] as const) {
    for (const dropdown of [PLAN_DROPDOWN, LANGUAGE_DROPDOWN]) {
      test(`the ${dropdown.name} dropdown matches the Docs 2026 design in ${colorScheme} mode`, async ({
        page,
      }) => {
        await page.setViewportSize({ width: 1440, height: 800 })
        // Emulate color before navigation so colorModeScript resolves auto without a cookie.
        await page.emulateMedia({ colorScheme })
        await page.goto(ARTICLE)
        await turnOffExperimentsInPage(page)

        // Recheck both token-based triggers in dark mode; only the dropdown below them is shared.
        await dropdown.expectTrigger(page)
        await expectHeaderDropdownDesign(page, colorScheme, dropdown)
      })
    }
  }

  // The unportalled ActionMenu overlaps the sticky secondary bar, so the header must outrank it.

  // Hit test overlap because DOM-order z-index ties and blocked clicks do not change geometry.
  test('an open dropdown stays clickable where the secondary bar crosses it', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 800 })
    await page.emulateMedia({ colorScheme: 'light' })
    await page.goto(ARTICLE)
    await turnOffExperimentsInPage(page)

    await page.getByTestId(PLAN_TRIGGER_TESTID).click()
    const menu = page.getByTestId('version-picker').getByRole('menu')
    await expect(menu).toBeVisible()

    const overlap = await page.evaluate(() => {
      const bar = document.querySelector('[class*="DocsSecondaryBar"][class*="bar"]')
      const menuEl = document.querySelector('[data-testid="version-picker"] [role="menu"]')
      if (!bar || !menuEl) return { barFound: !!bar, menuFound: !!menuEl, crosses: false }
      const b = bar.getBoundingClientRect()
      const m = menuEl.getBoundingClientRect()
      const crosses = m.bottom > b.top && m.top < b.bottom
      const x = m.left + m.width / 2
      const top = Math.max(m.top, b.top) + 2
      const bottom = Math.min(m.bottom, b.bottom) - 2
      const covered = []
      for (let y = top; y <= bottom; y += 6) {
        const el = document.elementFromPoint(x, y)
        if (!el || !el.closest('[role="menu"]')) covered.push(Math.round(y))
      }
      // A crossed row must receive clicks, not merely paint above the bar.
      const row = [
        ...document.querySelectorAll('[data-testid="version-picker"] [role="menuitemradio"]'),
      ].find((candidate) => {
        const r = candidate.getBoundingClientRect()
        return r.top < b.bottom && r.bottom > b.top
      })
      const rowRect = row?.getBoundingClientRect()
      const rowHit = rowRect
        ? document.elementFromPoint(
            rowRect.left + rowRect.width / 2,
            rowRect.top + rowRect.height / 2,
          )
        : null
      return {
        barFound: true,
        menuFound: true,
        crosses,
        covered,
        rowCrossesBar: !!row,
        rowReceivesItsOwnClick: !!(row && rowHit && row.contains(rowHit)),
      }
    })

    // Require actual overlap so this cannot pass after the menu stops crossing the bar.
    expect(overlap.barFound).toBe(true)
    expect(overlap.crosses).toBe(true)
    expect(overlap.covered).toEqual([])
    expect(overlap.rowCrossesBar).toBe(true)
    expect(overlap.rowReceivesItsOwnClick).toBe(true)
  })

  test('the language dropdown is styled identically to the plan dropdown', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 800 })
    await page.emulateMedia({ colorScheme: 'light' })
    await page.goto(ARTICLE)
    await turnOffExperimentsInPage(page)

    // Open one menu at a time because Brand closes the first; both read the same page theme.
    const fingerprints: Record<string, unknown> = {}
    for (const dropdown of [PLAN_DROPDOWN, LANGUAGE_DROPDOWN]) {
      const picker = page.getByTestId('desktop-header').getByTestId(dropdown.pickerTestId)
      await picker.getByTestId(dropdown.triggerTestId).click()
      const menu = picker.getByRole('menu')
      await expect(menu).toBeVisible()
      fingerprints[dropdown.name] = await dropdownStyleFingerprint(menu, dropdown)
      await page.keyboard.press('Escape')
      await expect(menu).not.toBeVisible()
    }
    expect(fingerprints[LANGUAGE_DROPDOWN.name]).toEqual(fingerprints[PLAN_DROPDOWN.name])
  })

  // Below 1012px, SubdomainNavBar's scrolling narrow menu contains both pickers.

  // Geometry catches an unportalled ActionMenu outside the panel while toBeVisible still passes.

  // The shared module owns the inline-flow rule, so both dropdowns must prove the geometry.
  for (const dropdown of [PLAN_DROPDOWN, LANGUAGE_DROPDOWN]) {
    for (const width of [390, 1000]) {
      test(`the ${dropdown.name} dropdown stays inside the narrow menu at ${width}px`, async ({
        page,
      }) => {
        await page.setViewportSize({ width, height: 800 })
        await page.emulateMedia({ colorScheme: 'light' })
        await page.goto(ARTICLE)
        await turnOffExperimentsInPage(page)

        await page.getByRole('button', { name: 'Menu', exact: true }).click()
        const trigger = page.getByTestId(dropdown.triggerTestId)
        await expect(trigger).toBeVisible()
        await trigger.click()
        await expect(page.getByRole('menu')).toBeVisible()

        const layout = await page.getByRole('menu').evaluate((element) => {
          // Find the panel by scrolling behavior, not Brand's hashed class name.
          let panel = element.parentElement
          while (panel) {
            const { overflowX, overflowY } = getComputedStyle(panel)
            if (/auto|scroll|hidden|clip/.test(`${overflowX}${overflowY}`)) break
            panel = panel.parentElement
          }
          const menuRect = element.getBoundingClientRect()
          const rows = Array.from(element.querySelectorAll('li'))
          return {
            menu: { left: menuRect.left, right: menuRect.right, bottom: menuRect.bottom },
            panel: panel ? panel.getBoundingClientRect().toJSON() : null,
            lastRowBottom: rows[rows.length - 1].getBoundingClientRect().bottom,
            viewportWidth: document.documentElement.clientWidth,
            scrollsHorizontally:
              document.documentElement.scrollWidth > document.documentElement.clientWidth,
          }
        })

        expect(layout.panel).not.toBeNull()
        // The menu stays inside the panel so no row gets cut off.
        expect(layout.menu.bottom).toBeLessThanOrEqual(layout.panel.bottom + 1)
        expect(layout.menu.right).toBeLessThanOrEqual(layout.panel.right + 1)
        expect(layout.lastRowBottom).toBeLessThanOrEqual(layout.panel.bottom + 1)
        // The menu stays inside the viewport so no row is sliced by the screen edge.
        expect(layout.menu.left).toBeGreaterThanOrEqual(-1)
        expect(layout.menu.right).toBeLessThanOrEqual(layout.viewportWidth + 1)
        expect(layout.scrollsHorizontally).toBe(false)

        // The final row is whatever a clipped menu loses first.
        await expect(
          page.getByRole(dropdown.lastRowRole, { name: dropdown.lastRowName }),
        ).toBeVisible()

        // Escape still closes only the picker, leaving the narrow menu open.
        await page.keyboard.press('Escape')
        await expect(page.getByRole('menu')).toHaveCount(0)
        await expect(page.getByRole('button', { name: 'Close menu', exact: true })).toBeVisible()
      })
    }
  }

  // Brand assigns signup to stagger slot 10, but Docs passes zero SubdomainNavBar.Link children.

  // Header.module.scss cuts the 800ms delay to one 80ms slot; duration and fill mode stay Brand's.
  test('signup follows the narrow menu pickers by one stagger step, not ten', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 800 })
    await page.goto(ARTICLE)
    await page.getByRole('button', { name: 'Menu', exact: true }).click()

    const signup = page.getByTestId('header-signup')
    await expect(signup).toBeVisible()
    const animation = await signup.evaluate((element) => {
      // Brand hashes class names, so match the stable SubdomainNavBar-button-area--visible part.
      const area = element.closest<HTMLElement>('[class*="SubdomainNavBar-button-area--visible"]')
      if (!area) throw new Error('Signup is not inside the narrow-menu button area')
      const { animationDelay, animationDuration, animationFillMode } = getComputedStyle(area)
      return {
        delay: parseFloat(animationDelay),
        duration: parseFloat(animationDuration),
        fillMode: animationFillMode,
      }
    })

    // Brand's untouched default delay equals 10 * 80ms.
    expect(animation.delay).not.toBeCloseTo(0.8, 3)
    // Still staggered after the pickers, but by one 80ms slot rather than ten.
    expect(animation.delay).toBeGreaterThan(0)
    expect(animation.delay).toBeLessThanOrEqual(0.16)
    expect(animation.duration).toBeCloseTo(0.5, 3)
    expect(animation.fillMode).toBe('both')
  })

  for (const width of [390, 1440]) {
    for (const activation of ['click', 'Enter', 'Space']) {
      test(`${activation} opens only Docs search at ${width}px`, async ({ page }) => {
        await page.setViewportSize({ width, height: 800 })
        await page.goto(ARTICLE)
        await turnOffExperimentsInPage(page)

        const searchTrigger = page.getByRole('button', { name: SEARCH_LABEL, exact: true })
        await expect(searchTrigger).toHaveCount(1)
        if (activation === 'click') {
          await searchTrigger.click()
        } else {
          await searchTrigger.focus()
          await page.keyboard.press(activation)
        }
        await expectDocsSearchOpen(page)

        await page.keyboard.press('Escape')
        await expect(page.getByTestId('overlay-search-input')).toHaveCount(0)
        await expect(searchTrigger).toBeFocused()
        await expect(page).not.toHaveURL((url) => url.searchParams.has('search-overlay-open'))
      })
    }
  }

  test('the same search trigger receives focus after resizing an open overlay', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 800 })
    await page.goto(ARTICLE)
    const searchTrigger = page.getByRole('button', { name: SEARCH_LABEL, exact: true })
    // Keep the original element, not just a locator that could match a replacement.
    const originalTrigger = await searchTrigger.elementHandle()
    expect(originalTrigger).not.toBeNull()
    await searchTrigger.click()
    await expectDocsSearchOpen(page)

    await page.setViewportSize({ width: 390, height: 800 })
    await expectDocsSearchOpen(page)
    await page.keyboard.press('Escape')
    await expect(searchTrigger).toHaveCount(1)
    await expect(searchTrigger).toBeVisible()
    await expect(searchTrigger).toBeFocused()
    expect(await originalTrigger!.evaluate((element) => element === document.activeElement)).toBe(
      true,
    )

    await searchTrigger.press('Enter')
    await expectDocsSearchOpen(page)
    await page.setViewportSize({ width: 1440, height: 800 })
    await page.keyboard.press('Escape')
    await expect(searchTrigger).toBeFocused()
    expect(await originalTrigger!.evaluate((element) => element === document.activeElement)).toBe(
      true,
    )
    await originalTrigger!.dispose()
  })

  test('clicking outside Docs search dismisses the overlay and clears its query state', async ({
    page,
  }) => {
    await page.goto(ARTICLE)
    const searchTrigger = page.getByRole('button', { name: SEARCH_LABEL, exact: true })
    await searchTrigger.click()
    await expectDocsSearchOpen(page)

    // The far corner is outside the centered desktop dialog and hits its backdrop.
    await page.mouse.click(1, page.viewportSize()!.height - 1)
    await expect(page.getByTestId('overlay-search-input')).toHaveCount(0)
    await expect(page).not.toHaveURL((url) => url.searchParams.has('search-overlay-open'))
    await expect(page.getByTestId('desktop-header').locator('dialog')).toHaveJSProperty(
      'open',
      false,
    )
    // PRC restores focus on mousedown, but backdrop click moves it; Escape owns return focus.
    await expect(searchTrigger).toBeVisible()
    await expect(searchTrigger).toBeEnabled()
  })

  test('slash stays literal in editable fields and ignores modified shortcuts', async ({
    page,
  }) => {
    await page.goto(ARTICLE)
    await expect(page.getByTestId('toggle-search')).toBeVisible()
    // Real DOM fields avoid survey or search-results data dependencies.
    await page.locator('#main-content').evaluate((main) => {
      const fields = document.createElement('div')
      fields.innerHTML = `
        <input aria-label="Header shortcut input">
        <textarea aria-label="Header shortcut textarea"></textarea>
        <select aria-label="Header shortcut select"><option>/</option></select>
        <div contenteditable="true" role="textbox" aria-label="Header shortcut editor"></div>
      `
      main.prepend(fields)
    })

    for (const label of [
      'Header shortcut input',
      'Header shortcut textarea',
      'Header shortcut select',
      'Header shortcut editor',
    ]) {
      const field = page.getByLabel(label, { exact: true })
      await field.focus()
      await page.keyboard.press('/')
      await expect(field).toBeFocused()
      await expect(page.getByTestId('overlay-search-input')).toHaveCount(0)
    }
    await expect(page.getByLabel('Header shortcut input', { exact: true })).toHaveValue('/')
    await expect(page.getByLabel('Header shortcut textarea', { exact: true })).toHaveValue('/')
    await expect(page.getByLabel('Header shortcut editor', { exact: true })).toHaveText('/')

    const searchTrigger = page.getByTestId('toggle-search')
    await searchTrigger.focus()
    for (const shortcut of ['Control+/', 'Meta+/', 'Alt+/']) {
      await page.keyboard.press(shortcut)
      await expect(page.getByTestId('overlay-search-input')).toHaveCount(0)
    }
    await page.keyboard.press('/')
    await expectDocsSearchOpen(page)
    await page.keyboard.press('Escape')
    await expect(searchTrigger).toBeFocused()
  })

  for (const picker of ['language', 'version']) {
    test(`Escape closes the nested ${picker} picker before the utility menu`, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 800 })
      await page.goto(ARTICLE)
      const body = page.locator('body')
      const originalOverflow = await body.evaluate((element) => element.style.overflow)
      await page.getByRole('button', { name: 'Menu', exact: true }).click()
      const closeMenu = page.getByRole('button', { name: 'Close menu', exact: true })
      await expect(closeMenu).toHaveAttribute('aria-expanded', 'true')
      await expect(body).toHaveCSS('overflow', 'hidden')
      await expectBackgroundIsolated(page, true)

      const pickerTrigger =
        picker === 'language'
          ? page.getByRole('button', { name: LANGUAGE_LABEL, exact: true })
          : page.getByTestId('version-picker').getByRole('button')
      const option = page.getByRole('menuitemradio', {
        name: picker === 'language' ? 'English' : 'Enterprise Cloud',
        exact: true,
      })
      await pickerTrigger.click()
      await expect(option).toBeVisible()
      await page.keyboard.press('Escape')
      await expect(option).not.toBeVisible()
      await expect(pickerTrigger).toBeFocused()
      await expect(closeMenu).toHaveAttribute('aria-expanded', 'true')
      await expect(body).toHaveCSS('overflow', 'hidden')
      await expectBackgroundIsolated(page, true)

      await page.keyboard.press('Escape')
      await expect(page.getByRole('button', { name: 'Menu', exact: true })).toBeFocused()
      await expectBackgroundIsolated(page, false)
      await expect
        .poll(() => body.evaluate((element) => element.style.overflow))
        .toBe(originalOverflow)
    })
  }

  for (const activation of ['click', '/']) {
    test(`${activation} search closes an open utility menu before focusing the overlay`, async ({
      page,
    }) => {
      await page.setViewportSize({ width: 390, height: 800 })
      await page.goto(ARTICLE)
      await page.getByRole('button', { name: 'Menu', exact: true }).click()
      await expectBackgroundIsolated(page, true)

      const searchTrigger = page.getByRole('button', { name: SEARCH_LABEL, exact: true })
      if (activation === 'click') {
        await searchTrigger.click()
      } else {
        await page.keyboard.press('/')
      }
      await expectDocsSearchOpen(page)
      await expect(page.getByTestId('version-picker')).not.toBeVisible()
      await expect(page.getByRole('button', { name: 'Menu', exact: true })).toHaveAttribute(
        'aria-expanded',
        'false',
      )
      await expectBackgroundIsolated(page, false)
      await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden')

      await page.keyboard.press('Escape')
      await expect(searchTrigger).toBeFocused()
    })
  }

  test('query-driven search opens Docs search and preserves the input', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 800 })
    await page.goto(`${ARTICLE}?search-overlay-open=true&search-overlay-input=header%20query`)
    await expectDocsSearchOpen(page)
    await expect(page.getByTestId('overlay-search-input')).toHaveValue('header query')
    await expect(page.getByRole('button', { name: 'Menu', exact: true })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    await expectBackgroundIsolated(page, false)

    await page.keyboard.press('Escape')
    await expect(page.getByTestId('toggle-search')).toBeFocused()
    await expect(page).toHaveURL(
      (url) => url.searchParams.get('search-overlay-input') === 'header query',
    )
    await expect(page).not.toHaveURL((url) => url.searchParams.has('search-overlay-open'))
  })

  test('resizing from 1011px to 1012px closes the utility menu and restores content', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1011, height: 800 })
    await page.goto(ARTICLE)
    const body = page.locator('body')
    const originalOverflow = await body.evaluate((element) => element.style.overflow)
    await page.getByRole('button', { name: 'Menu', exact: true }).click()
    await expectBackgroundIsolated(page, true)
    await expect(body).toHaveCSS('overflow', 'hidden')

    await page.setViewportSize({ width: 1012, height: 800 })
    await expect(page.getByRole('button', { name: 'Close menu', exact: true })).toHaveCount(0)
    await expect(page.getByTestId('version-picker').getByRole('button')).toBeVisible()
    await expect(page.getByRole('button', { name: LANGUAGE_LABEL, exact: true })).toBeVisible()
    await expectBackgroundIsolated(page, false)
    await expect
      .poll(() => body.evaluate((element) => element.style.overflow))
      .toBe(originalOverflow)

    await page.setViewportSize({ width: 1011, height: 800 })
    await expect(page.getByRole('button', { name: 'Menu', exact: true })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    await expect(page.getByTestId('version-picker')).not.toBeVisible()
    await expectBackgroundIsolated(page, false)
    await page.getByTestId('sidebar-mobile-toggle').click()
    await expect(page.getByTestId('sidebar')).toBeVisible()
  })

  test('version selection closes the utility menu, navigates, and persists the cookie', async ({
    page,
    context,
  }) => {
    await page.setViewportSize({ width: 390, height: 800 })
    await page.goto(ARTICLE)
    await page.getByRole('button', { name: 'Menu', exact: true }).click()
    await page.getByTestId('version-picker').getByRole('button').click()
    await page.getByRole('menuitemradio', { name: 'Enterprise Cloud', exact: true }).click()

    await expect(page).toHaveURL('/en/enterprise-cloud@latest/get-started/foo/bar')
    await expect(page.getByRole('button', { name: 'Menu', exact: true })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    await expectBackgroundIsolated(page, false)
    await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden')
    await expect
      .poll(
        async () =>
          (await context.cookies()).find((cookie) => cookie.name === USER_VERSION_COOKIE_NAME)
            ?.value,
      )
      .toBe('enterprise-cloud@latest')

    await page.getByRole('button', { name: 'Menu', exact: true }).click()
    await expect(page.getByTestId('version-picker').getByTestId('field')).toHaveText(
      'Enterprise Cloud',
    )
    await expect(page.getByTestId('version-picker').getByRole('button')).toHaveAccessibleName(
      `${PLAN_LABEL} Enterprise Cloud`,
    )
    await expect(page.getByTestId('header-signup')).toBeVisible()
  })

  test('language selection from the utility menu preserves the version and cookie', async ({
    page,
    context,
  }) => {
    await page.setViewportSize({ width: 390, height: 800 })
    await page.goto('/en/enterprise-cloud@latest/get-started/foo/bar')
    await page.getByRole('button', { name: 'Menu', exact: true }).click()
    await page.getByRole('button', { name: LANGUAGE_LABEL, exact: true }).click()
    await page.getByRole('menuitemradio', { name: '日本語', exact: true }).click()

    await expect(page).toHaveURL('/ja/enterprise-cloud@latest/get-started/foo/bar')
    await expect(page.getByTestId('language-picker')).not.toBeVisible()
    await expectBackgroundIsolated(page, false)
    await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden')
    await expect
      .poll(
        async () =>
          (await context.cookies()).find((cookie) => cookie.name === USER_LANGUAGE_COOKIE_NAME)
            ?.value,
      )
      .toBe('ja')
  })

  for (const linkName of ['Github Home', 'Docs home']) {
    test(`${linkName} preserves the locale and version with client-side navigation`, async ({
      page,
    }) => {
      await page.goto('/ja/enterprise-cloud@latest/get-started/foo/bar')
      const homeLink = page
        .getByTestId('desktop-header')
        .getByRole('link', { name: linkName, exact: true })
      await expect(homeLink).toHaveAttribute('href', '/ja/enterprise-cloud@latest')
      const originalDocument = await page.locator('html').elementHandle()
      expect(originalDocument).not.toBeNull()
      await homeLink.click()
      await expect(page).toHaveURL('/ja/enterprise-cloud@latest')
      expect(
        await originalDocument!.evaluate((element) => element === document.documentElement),
      ).toBe(true)
      await originalDocument!.dispose()
    })
  }

  test('signup keeps its external destination and new-tab behavior', async ({ page }) => {
    await page.goto(ARTICLE)
    const signup = page.getByTestId('header-signup')
    await expect(signup).toHaveAttribute(
      'href',
      'https://github.com/signup?ref_cta=Sign+up&ref_loc=docs+header&ref_page=docs',
    )
    await expect(signup).toHaveAttribute('target', '_blank')
    await expect(signup).toHaveAttribute('rel', /noopener/)
  })

  test('signup is absent for a reader with an account', async ({ page, context }) => {
    await page.goto(ARTICLE)
    await context.addCookies([
      {
        name: COLOR_MODE_COOKIE_NAME,
        value: encodeURIComponent(JSON.stringify({ color_mode: 'light' })),
        url: page.url(),
      },
    ])
    await page.reload()
    await expect(page.getByTestId('version-picker').getByRole('button')).toBeVisible()
    await expect(page.getByTestId('header-signup')).toHaveCount(0)
  })

  test('signup is absent on Enterprise Server', async ({ page }) => {
    await page.goto('/en/enterprise-server@latest/get-started/foo/bar')
    await expect(page).toHaveURL(/\/en\/enterprise-server@[\d.]+\/get-started\/foo\/bar$/)
    await expect(page.getByTestId('version-picker').getByRole('button')).toBeVisible()
    await expect(page.getByTestId('header-signup')).toHaveCount(0)
  })

  test('the version picker announces a version, not a plan, on Enterprise Server', async ({
    page,
  }) => {
    await page.goto('/en/enterprise-server@latest/get-started/foo/bar')
    const picker = page.getByTestId('desktop-header').getByTestId('version-picker')
    const button = picker.getByRole('button')
    const value = (await button.getByTestId('field').textContent())!
    // A numbered release uses the version label instead of the plan label.
    expect(value).toMatch(/^Enterprise Server [\d.]+$/)
    await expect(picker.getByText(VERSION_LABEL, { exact: true })).toBeVisible()
    await expect(button).toHaveAccessibleName(`${VERSION_LABEL} ${value}`)
    await expect(picker.getByText(PLAN_LABEL, { exact: true })).toHaveCount(0)
  })

  test('the first skip link and the Brand skip link both target main content', async ({ page }) => {
    await page.goto(ARTICLE)
    await page.keyboard.press('Tab')
    const firstSkip = page.getByRole('link', { name: 'Skip to main content', exact: true })
    await expect(firstSkip).toBeFocused()
    await expect(firstSkip).toHaveAttribute('href', '#main-content')
    await firstSkip.press('Enter')
    await expect(page).toHaveURL(/#main-content$/)

    const brandSkip = page.getByRole('link', { name: 'Skip to content', exact: true })
    await brandSkip.focus()
    await expect(brandSkip).toBeVisible()
    await expect(brandSkip).toHaveAttribute('href', '#main-content')
    await brandSkip.press('Enter')
    await expect(page.locator('#main-content')).toBeFocused()
  })
})

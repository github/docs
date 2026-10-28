import { createElement } from 'react'
import { describe, expect, test, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { load } from 'cheerio'

import { Changelog } from '@/graphql/components/Changelog'

vi.mock('next/router', () => ({
  useRouter: () => ({ locale: 'en', query: {} }),
}))

// The real module pulls in @primer/react CSS, which Node cannot import, and these tests render no items.
vi.mock('@/frame/components/ui/RenderedHTML/RenderedHTML', () => ({
  RenderedHTML: () => null,
}))

function render() {
  const html = renderToStaticMarkup(
    createElement(Changelog, { changelogItems: [], years: [2026, 2025, 2024], currentYear: 2026 }),
  )
  return load(html)
}

describe('Changelog year nav', () => {
  // The index page URL has no trailing slash, so relative year hrefs resolve one level too high.
  test('links other years to absolute changelog year URLs', () => {
    const $ = render()
    const hrefs = $('nav[aria-label="Changelog years"] a')
      .map((_, el) => $(el).attr('href'))
      .get()
    expect(hrefs).toEqual([
      '/en/graphql/overview/changelog/2025',
      '/en/graphql/overview/changelog/2024',
    ])
  })

  test('renders the current year as text, not a link', () => {
    const $ = render()
    const current = $('nav[aria-label="Changelog years"] span')
    expect(current.text()).toBe('2026')
  })
})

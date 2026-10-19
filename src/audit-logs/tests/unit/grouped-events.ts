import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, test, vi } from 'vitest'
import { load } from 'cheerio'

import GroupedEvents from '@/audit-logs/components/GroupedEvents'
import type { AuditLogEventT } from '@/audit-logs/types'

// Mock the translation hook so server rendering does not need MainContext.
vi.mock('@/languages/components/useTranslation', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}))

function renderLinks(event: Partial<AuditLogEventT>) {
  const auditLogEvent = { action: 'repo.create', description: 'desc', ...event } as AuditLogEventT
  const html = renderToStaticMarkup(
    createElement(GroupedEvents, { auditLogEvents: [auditLogEvent], category: 'repo' }),
  )
  const $ = load(html)
  return $('dd a')
    .toArray()
    .map((el) => ({ href: $(el).attr('href'), text: $(el).text() }))
}

describe('GroupedEvents reference links', () => {
  test('keeps a single title that contains commas', () => {
    const links = renderLinks({
      docs_reference_links: '/sponsors/about-sponsorships-fees-and-taxes',
      docs_reference_titles: 'About sponsorships, fees, and taxes',
    })
    expect(links).toEqual([
      {
        href: '/sponsors/about-sponsorships-fees-and-taxes',
        text: 'About sponsorships, fees, and taxes',
      },
    ])
  })

  test('pairs titles with links when there are several links', () => {
    const links = renderLinks({
      docs_reference_links: '/foo/one, foo/two',
      docs_reference_titles: 'One, Two',
    })
    expect(links).toEqual([
      { href: '/foo/one', text: 'One' },
      { href: '/foo/two', text: 'Two' },
    ])
  })
})

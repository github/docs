import { describe, expect, test } from 'vitest'

import { buildMiniTocFromCollected } from '@/frame/lib/get-mini-toc-items'
import type { CollectedHeading } from '@/frame/lib/get-mini-toc-items'

function heading(slug: string, level: number, title?: string, platform = ''): CollectedHeading {
  return {
    href: `#${slug}`,
    title: title ?? slug,
    headingLevel: level,
    platform,
  }
}

describe('buildMiniTocFromCollected', () => {
  // Mock scenario from: /en/rest/reference/activity
  test('basic nested structure is created', () => {
    const collected = [
      heading('section-1', 2),
      heading('section-1-A', 3),
      heading('section-1-B', 3),
      heading('section-1-C', 3),
      heading('section-2', 2),
      heading('section-2-A', 3),
    ]
    const tocItems = buildMiniTocFromCollected(collected, 3)
    expect(tocItems.length).toBe(2)
    expect(tocItems[0].items?.length).toBe(3)
  })

  /**
   * Mock scenario from: /en/rest/reference/apps
   * The TOC starts out with lower importance headers that aren't nested in
   * higher importance headers
   *
   *     3
   *     3
   *   2
   *     3
   *   2
   *     3
   */
  test('creates toc that starts with lower importance headers', () => {
    const collected = [
      heading('section-1-A', 3),
      heading('section-1-B', 3),
      heading('section-2', 2),
      heading('section-2-A', 3),
      heading('section-3', 2),
      heading('section-3-A', 3),
    ]
    const tocItems = buildMiniTocFromCollected(collected, 3)
    expect(tocItems.length).toBe(4)
    expect(tocItems[3].items?.length).toBe(1)
  })

  // Mock scenario from:
  // /en/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization
  test('creates empty toc', () => {
    const tocItems = buildMiniTocFromCollected([], 3)
    expect(tocItems.length).toBe(0)
  })

  // Mock scenario from: /en/repositories/creating-and-managing-repositories/about-repositories
  test('creates flat toc', () => {
    const collected = [heading('section-1', 2), heading('section-2', 2)]
    const tocItems = buildMiniTocFromCollected(collected, 3)
    expect(tocItems.length).toBe(2)
    expect(tocItems[0].items).toBeUndefined()
  })

  test('handles deeply nested toc', () => {
    const collected = [
      heading('section-1', 2),
      heading('section-2', 2),
      heading('section-2-A', 3),
      heading('section-2-A-1', 4),
      heading('section-2-A-1-a', 5),
      heading('section-3', 2),
    ]
    const tocItems = buildMiniTocFromCollected(collected, 5)
    expect(tocItems.length).toBe(3)
    expect(tocItems[1].items?.[0].items?.[0].items?.length).toBe(1)
  })

  test('builds nested structure from collected headings', () => {
    const collected = [
      heading('s1', 2, 'Section 1'),
      heading('s1a', 3, 'Section 1A'),
      heading('s1b', 3, 'Section 1B'),
      heading('s2', 2, 'Section 2'),
    ]
    const tocItems = buildMiniTocFromCollected(collected, 3)
    expect(tocItems.length).toBe(2)
    expect(tocItems[0].contents.title).toBe('Section 1')
    expect(tocItems[0].items?.length).toBe(2)
    expect(tocItems[1].contents.title).toBe('Section 2')
  })

  test('filters by maxHeadingLevel', () => {
    const collected = [heading('s1', 2, 'Section 1'), heading('s1a', 3, 'Section 1A')]
    const tocItems = buildMiniTocFromCollected(collected, 2)
    expect(tocItems.length).toBe(1)
    expect(tocItems[0].items).toBeUndefined()
  })

  test('returns empty for no headings', () => {
    const tocItems = buildMiniTocFromCollected([], 3)
    expect(tocItems.length).toBe(0)
  })

  test('extracts title and href correctly', () => {
    const collected = [heading('my-section', 2, 'My Section')]
    const tocItems = buildMiniTocFromCollected(collected, 2)
    expect(tocItems.length).toBe(1)
    expect(tocItems[0].contents.title).toBe('My Section')
    expect(tocItems[0].contents.href).toBe('#my-section')
  })

  test('preserves platform from collected data', () => {
    const collected = [heading('mac-section', 2, 'Mac Section', 'ghd-tool mac')]
    const tocItems = buildMiniTocFromCollected(collected, 2)
    expect(tocItems.length).toBe(1)
    expect(tocItems[0].platform).toBe('ghd-tool mac')
  })

  test('no platform when not set in collected data', () => {
    const collected = [heading('plain', 2, 'Plain')]
    const tocItems = buildMiniTocFromCollected(collected, 2)
    expect(tocItems.length).toBe(1)
    expect(tocItems[0].platform).toBeUndefined()
  })

  test('maxHeadingLevel=0 shows only h2 (same as default)', () => {
    const collected = [heading('s1', 2, 'Section 1'), heading('s1a', 3, 'Section 1A')]
    const tocItems = buildMiniTocFromCollected(collected, 0)
    expect(tocItems.length).toBe(1)
    expect(tocItems[0].contents.title).toBe('Section 1')
    expect(tocItems[0].items).toBeUndefined()
  })
})

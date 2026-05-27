import { describe, expect, test } from 'vitest'

import { renderContent } from '@/content-render/index'
import type { CollectedHeading } from '@/frame/lib/get-mini-toc-items'
import type { Context } from '@/types'

describe('collect-mini-toc rehype plugin', () => {
  test('collects h2 and h3 headings with href and title', async () => {
    const collectMiniToc: CollectedHeading[] = []
    await renderContent('## Section one\n\n### Subsection\n\n## Section two', {
      collectMiniToc,
    } as Context)
    expect(collectMiniToc).toHaveLength(3)
    expect(collectMiniToc[0]).toMatchObject({
      title: 'Section one',
      href: '#section-one',
      headingLevel: 2,
    })
    expect(collectMiniToc[1]).toMatchObject({
      title: 'Subsection',
      headingLevel: 3,
    })
    expect(collectMiniToc[2]).toMatchObject({
      title: 'Section two',
      headingLevel: 2,
    })
  })

  test('skips headings inside hidden ancestors', async () => {
    const collectMiniToc: CollectedHeading[] = []
    const md = [
      '## Visible heading',
      '',
      '<div hidden>',
      '',
      '## Hidden heading',
      '',
      '</div>',
      '',
      '## Another visible',
    ].join('\n')
    await renderContent(md, { collectMiniToc } as Context)
    const titles = collectMiniToc.map((h) => h.title)
    expect(titles).toContain('Visible heading')
    expect(titles).toContain('Another visible')
    expect(titles).not.toContain('Hidden heading')
  })

  test('detects ghd-tool platform class', async () => {
    const collectMiniToc: CollectedHeading[] = []
    const md = ['<div class="ghd-tool mac">', '', '## Mac instructions', '', '</div>'].join('\n')
    await renderContent(md, { collectMiniToc } as Context)
    expect(collectMiniToc).toHaveLength(1)
    expect(collectMiniToc[0].platform).toBe('ghd-tool mac')
  })

  test('returns empty platform when no ghd-tool wrapper', async () => {
    const collectMiniToc: CollectedHeading[] = []
    await renderContent('## Plain heading', { collectMiniToc } as Context)
    expect(collectMiniToc).toHaveLength(1)
    expect(collectMiniToc[0].platform).toBe('')
  })

  test('does not collect when collectMiniToc is not provided', async () => {
    // Should not throw — plugin is a no-op without collectInto
    const result = await renderContent('## Heading')
    expect(result).toContain('Heading')
  })
})

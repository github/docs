import { describe, expect, test } from 'vitest'

import { renderContentToHast } from '@/content-render/index'
import { renderUnified, renderUnifiedToHast } from '@/content-render/unified/index'
import type { Context } from '@/types'

// A corpus that exercises the parts of the pipeline most likely to differ
// between "stringify the processed vfile" (today) and "stringify the hast tree
// we stopped at" (the new hast path): headings (slug + anchor links), code
// blocks (highlight + code-header), tables (several rewrite plugins), alerts,
// raw inline HTML (rehype-raw), and images.
const fixtures: Array<{ name: string; template: string }> = [
  { name: 'paragraph', template: 'Hello **world**, this is a [link](https://github.com).' },
  {
    name: 'headings',
    template: '# Title\n\n## Section one\n\nSome text.\n\n### Subsection\n\nMore text.',
  },
  {
    name: 'fenced code block',
    template: '```js\nconst x = 1\nconsole.log(x)\n```',
  },
  {
    name: 'table',
    template: '| Col A | Col B |\n| --- | --- |\n| one | two |\n| three | four |',
  },
  {
    name: 'ordered list with nesting',
    template: '1. First\n1. Second\n   - nested a\n   - nested b\n1. Third',
  },
  {
    name: 'alert',
    template: '> [!NOTE]\n> This is an alert body with a [link](/foo).',
  },
  {
    name: 'inline raw html',
    template: 'A paragraph with <kbd>Ctrl</kbd> and <em>emphasis</em> inline.',
  },
  {
    name: 'blockquote and emphasis',
    template: '> A quote\n>\n> spanning lines with _emphasis_ and `code`.',
  },
  {
    name: 'asset image (png -> picture)',
    template: '![Alternative text](/assets/images/help.png)',
  },
  {
    name: 'external image',
    template: '![A logo](https://example.com/logo.png)',
  },
]

describe('renderUnifiedToHast', () => {
  test.each(fixtures)('derived html matches renderUnified for: $name', async ({ template }) => {
    const context = {} as Context
    const stringOutput = await renderUnified(template, structuredClone(context))
    const { html, hast } = await renderUnifiedToHast(template, structuredClone(context))

    expect(html).toBe(stringOutput)
    expect(hast).toBeTruthy()
    expect(hast.type).toBe('root')
    expect(Array.isArray(hast.children)).toBe(true)
  })

  test('returns a hast root with element children for a heading', async () => {
    const { hast } = await renderUnifiedToHast('# Hello', {} as Context)
    const firstElement = hast.children.find((node) => node.type === 'element')
    expect(firstElement).toBeTruthy()
    expect(firstElement && 'tagName' in firstElement && firstElement.tagName).toBe('h1')
  })

  test('strips position metadata from every node', async () => {
    const { hast } = await renderUnifiedToHast(
      '# Title\n\nA paragraph with a [link](/foo) and `code`.',
      {} as Context,
    )
    const hasPosition = (node: unknown): boolean => {
      if (!node || typeof node !== 'object') return false
      if ('position' in node) return true
      const children = (node as { children?: unknown[] }).children
      return Array.isArray(children) && children.some(hasPosition)
    }
    expect(hasPosition(hast)).toBe(false)
  })
})

describe('renderContentToHast', () => {
  test('renders liquid before the unified pass', async () => {
    const context = { page: { foo: 'bar' } } as unknown as Context
    const { html, hast } = await renderContentToHast('A {{ page.foo }} value.', context)

    expect(html).toContain('A bar value.')
    expect(hast).toBeTruthy()
    expect(hast?.type).toBe('root')
  })

  test('derived html matches the inner renderUnified path after liquid', async () => {
    const context = { page: { foo: 'bar' } } as unknown as Context
    const template = '# {{ page.foo }}\n\nWith a [link](/foo).'
    const { html } = await renderContentToHast(template, structuredClone(context))
    const expected = await renderUnified('# bar\n\nWith a [link](/foo).', {} as Context)

    expect(html).toBe(expected)
  })

  test('returns null hast for an empty template', async () => {
    const { html, hast } = await renderContentToHast('', {} as Context)
    expect(html).toBe('')
    expect(hast).toBeNull()
  })

  test('throws when markdownRequested is set', async () => {
    await expect(
      renderContentToHast('# Hello', { markdownRequested: true } as Context),
    ).rejects.toThrow(/does not support markdownRequested/)
  })
})

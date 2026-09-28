import { describe, expect, test } from 'vitest'

import frontmatter from '@/frame/lib/read-frontmatter'
import { serializeMarkdown } from '@/links/lib/update-internal-links'

const PAGE = `---
title: About merge methods
intro: 'You can allow contributors with push access to merge their pull requests on {% data variables.product.prodname_dotcom %} with different merge options.'
redirect_from:
  - /articles/about-merge-methods-on-github
  - /github/administering-a-repository/about-merge-methods-on-github
versions:
  fpt: '*'
  ghes: '*'
---

Body text with a [link](/en/old-path).
`

// `frontmatter()` only omits `content` when the YAML fails to parse, which none of
// these fixtures do. Narrow it once here so each test can stay readable.
function parse(raw: string): { content: string; data: Record<string, unknown> } {
  const { content, data } = frontmatter(raw)
  if (content === undefined) throw new Error('fixture failed to parse')
  return { content, data: data || {} }
}

// The whole fix rests on gray-matter's `content` being an exact suffix of the raw file.
// Test that against the real parser, not a hand-rolled stand-in.
describe('frontmatter parse invariant', () => {
  const cases: [string, string][] = [
    ['standard page', PAGE],
    ['CRLF line endings', PAGE.replace(/\n/g, '\r\n')],
    ['byte order mark', `\uFEFF${PAGE}`],
    ['no frontmatter', 'Just a body with a [link](/en/old-path).\n'],
    ['empty frontmatter', '---\n---\n\nBody.\n'],
    ['thematic break in body', '---\ntitle: T\n---\n\nBefore.\n\n---\n\nAfter.\n'],
    ['empty body', '---\ntitle: T\n---\n'],
    ['no trailing newline', '---\ntitle: T\n---\n\nBody.'],
  ]

  test.each(cases)('%s: content is a suffix of rawContent', (_name, raw) => {
    const { content } = parse(raw)

    expect(raw.endsWith(content)).toBe(true)
  })

  test.each(cases)('%s: round-trips unchanged when nothing changed', (_name, raw) => {
    const { content, data } = parse(raw)

    expect(serializeMarkdown(raw, content, content, data, false)).toBe(raw)
  })

  test.each(cases)('%s: preserves the frontmatter block byte-for-byte', (_name, raw) => {
    const { content, data } = parse(raw)
    const newContent = content.replace('/en/old-path', '/en/new-path')

    const result = serializeMarkdown(raw, content, newContent, data, false)

    const originalFrontmatter = raw.slice(0, raw.length - content.length)
    expect(result).toBe(originalFrontmatter + newContent)
  })
})

describe('serializeMarkdown', () => {
  test('rewrites the body without reflowing untouched YAML', () => {
    const { content, data } = parse(PAGE)
    const newContent = content.replace('/en/old-path', '/en/new-path')

    const result = serializeMarkdown(PAGE, content, newContent, data, false)

    expect(result).toContain('/en/new-path')
    expect(result).not.toContain('/en/old-path')
    // The single-quoted intro and the list-style redirect_from must survive untouched.
    expect(result).toContain(
      "intro: 'You can allow contributors with push access to merge their pull requests",
    )
    expect(result).toContain('  - /articles/about-merge-methods-on-github')
  })

  test('reserializes when the frontmatter data actually changed', () => {
    const { content } = parse(PAGE)

    const result = serializeMarkdown(
      PAGE,
      content,
      content,
      { title: 'About merge methods', redirect_from: ['/new-redirect'] },
      true,
    )

    expect(result).toContain('/new-redirect')
    expect(result).not.toContain('/articles/about-merge-methods-on-github')
    expect(result).toContain('Body text with a [link](/en/old-path).')
  })

  test('falls back to reserializing if content is not a clean tail of the raw file', () => {
    const result = serializeMarkdown(
      PAGE,
      'not a suffix of the raw file',
      'New body.',
      { title: 'Fallback' },
      false,
    )

    expect(result).toContain('title: Fallback')
    expect(result).toContain('New body.')
  })

  test('is idempotent across repeated runs', () => {
    const { content, data } = parse(PAGE)
    const newContent = content.replace('/en/old-path', '/en/new-path')

    const once = serializeMarkdown(PAGE, content, newContent, data, false)
    const twice = serializeMarkdown(once, parse(once).content, newContent, data, false)

    expect(twice).toBe(once)
  })
})

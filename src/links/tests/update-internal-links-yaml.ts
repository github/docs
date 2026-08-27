import fs from 'fs'
import os from 'os'
import path from 'path'

import { describe, expect, test } from 'vitest'
import { load } from 'js-yaml'

import { serializeYaml, updateFile, type LinkContext } from '@/links/lib/update-internal-links'
import { RedirectedFragmentValidator } from '@/links/lib/validate-redirected-fragment'
import type { Page } from '@/types'

const RELEASE_NOTE = `date: '2026-01-15'
sections:
  bugs:
    - |
      See [AUTOTITLE](/admin/old-path) for details.
  known_issues:
    - |
      Also see [AUTOTITLE](/admin/old-path) here.
`

describe('serializeYaml', () => {
  test('writes the surgically edited text when only links changed', () => {
    const newContent = RELEASE_NOTE.replaceAll('/admin/old-path', '/admin/new-path')

    const result = serializeYaml(
      newContent,
      load(RELEASE_NOTE) as Record<string, unknown>,
      true,
      false,
    )

    expect(result).toBe(newContent)
    // Untouched YAML formatting must survive: block scalars, quoting, indentation.
    expect(result).toContain("date: '2026-01-15'")
    expect(result).toContain('    - |')
    expect(result).not.toContain('/admin/old-path')
  })

  test('does not reserialize, so unrelated formatting is byte-identical', () => {
    const result = serializeYaml(
      RELEASE_NOTE,
      load(RELEASE_NOTE) as Record<string, unknown>,
      false,
      false,
    )

    expect(result).toBe(RELEASE_NOTE)
  })

  test('output still parses as YAML with the same structure', () => {
    const newContent = RELEASE_NOTE.replaceAll('/admin/old-path', '/admin/new-path')

    const result = serializeYaml(
      newContent,
      load(RELEASE_NOTE) as Record<string, unknown>,
      true,
      false,
    )
    const parsed = load(result) as { sections: { bugs: string[]; known_issues: string[] } }

    expect(Object.keys(parsed)).toEqual(['date', 'sections'])
    expect(parsed.sections.bugs[0]).toContain('/admin/new-path')
    expect(parsed.sections.known_issues[0]).toContain('/admin/new-path')
  })

  test('reserializes when only the structured data changed', () => {
    const result = serializeYaml(
      RELEASE_NOTE,
      { featuredLinks: { guide: '/new/path' } },
      false,
      true,
    )

    expect(result).toContain('featuredLinks')
    expect(result).toContain('/new/path')
  })

  // The text lives in `newContent` and the structured links live in `newData`, and there
  // is no format-preserving way to merge them. Silently picking one loses the other.
  test('throws rather than silently dropping fixes when both changed', () => {
    expect(() =>
      serializeYaml(RELEASE_NOTE, { featuredLinks: { guide: '/new/path' } }, true, true),
    ).toThrow(/both text and structured data changes/)
  })
})

describe('rewriting links in YAML', () => {
  const context = {
    pages: { '/en/admin/new-path': {} as unknown as Page },
    redirects: { '/admin/old-path': '/admin/new-path' },
    currentLanguage: 'en',
    userLanguage: 'en',
    fragmentValidator: new RedirectedFragmentValidator({}, {}, 'en'),
  } as unknown as LinkContext

  const opts = {
    setAutotitle: false,
    fixHref: true,
    verbose: false,
    strict: false,
    keepStaleFragments: false,
  }

  async function run(yaml: string) {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'codemod-yaml-'))
    const file = path.join(dir, 'notes.yml')
    fs.writeFileSync(file, yaml)
    try {
      return await updateFile(file, context, opts)
    } finally {
      fs.rmSync(dir, { recursive: true, force: true })
    }
  }

  test('rewrites a link hidden by indentation, which reads as a code block', async () => {
    // Ten spaces of indent makes mdast see a code block, not a paragraph with a link.
    const yaml = `sections:
  bugs:
    - |
      See [x](/admin/old-path) here.
  known_issues:
    - |
          See [x](/admin/old-path) here.
`
    const result = await run(yaml)
    expect(result.newContent).not.toContain('/admin/old-path')
    expect(result.newContent!.match(/\/admin\/new-path/g)).toHaveLength(2)
    expect(result.replacements).toHaveLength(2)
  })

  // A `#` comment reads as a Markdown heading, so a link inside one is a real link node
  // and does get rewritten. That is a documented limit, not corruption: telling the two
  // apart needs a YAML parse, and a stale link in a comment is worth fixing anyway. The
  // cases that would be corruption, code examples, are covered below.
  test('rewrites a link in a comment, but only there', async () => {
    const yaml = `# TODO: drop [x](/admin/old-path) from the copy below
sections:
  bugs:
    - |
      Keep \`[x](/admin/old-path)\` verbatim.
`
    const result = await run(yaml)
    expect(result.newContent).toContain('# TODO: drop [x](/admin/new-path) from the copy')
    expect(result.newContent).toContain('Keep `[x](/admin/old-path)` verbatim.')
  })

  test('leaves an identical string inside inline code alone', async () => {
    const yaml = `sections:
  bugs:
    - |
      Write it as \`[x](/admin/old-path)\` and it renders as [x](/admin/old-path).
`
    const result = await run(yaml)
    expect(result.newContent).toContain('`[x](/admin/old-path)`')
    expect(result.newContent).toContain('renders as [x](/admin/new-path).')
  })

  test('leaves an identical string inside a fenced code block alone', async () => {
    const yaml = `sections:
  bugs:
    - |
      Real link: [x](/admin/old-path)

      \`\`\`markdown
      [x](/admin/old-path)
      \`\`\`
`
    const result = await run(yaml)
    expect(result.newContent).toContain('Real link: [x](/admin/new-path)')
    expect(result.newContent!.match(/\/admin\/old-path/g)).toHaveLength(1)
  })

  test('preserves every byte that is not a rewritten link', async () => {
    const yaml = `date: '2026-01-15'
sections:
  bugs:
    - |
      See [x](/admin/old-path) here.
`
    const result = await run(yaml)
    expect(result.newContent).toBe(yaml.replace('/admin/old-path', '/admin/new-path'))
  })
})

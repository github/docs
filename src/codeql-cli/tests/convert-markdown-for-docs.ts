import { afterAll, beforeAll, describe, expect, test, vi } from 'vitest'
import { convertContentToDocs } from '../scripts/convert-markdown-for-docs'
import config from '@/codeql-cli/lib/config.json'

const RELATIVE_LINK_PATH = config.targetDirectory.replace('content', '')

describe('convertContentToDocs circular link handling', () => {
  const fetchMock = vi.spyOn(globalThis, 'fetch')

  beforeAll(() => {
    fetchMock.mockResolvedValue(
      new Response(null, {
        status: 302,
        headers: {
          location:
            'https://docs.github.com/enterprise-server@latest/code-security/reference/code-scanning/sarif-files/sarif-support',
        },
      }),
    )
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })

  const testContent = `
# bqrs interpret

[Plumbing] Interpret data in a single BQRS.

## Description

A command that interprets a single BQRS file according to the provided
metadata and generates output in the specified format.

## Options

### Primary Options

This option has no effect when passed to \`codeql bqrs interpret<bqrs-interpret>\`{.interpreted-text role="doc"}.

For more information, see \`codeql database analyze<database-analyze>\`{.interpreted-text role="doc"} and
<https://aka.ms/code-scanning-docs/sarif-support> for details about uploading SARIF files.
`

  test('converts circular links to plain text', async () => {
    const result = await convertContentToDocs(testContent, {}, 'bqrs-interpret.md')

    // Should not contain circular link
    expect(result.content).not.toContain(
      `[codeql bqrs interpret](${RELATIVE_LINK_PATH}/bqrs-interpret)`,
    )

    // Should contain plain text instead
    expect(result.content).toContain('codeql bqrs interpret')
  })

  test('preserves non-circular links', async () => {
    const result = await convertContentToDocs(testContent, {}, 'bqrs-interpret.md')

    // Should preserve valid cross-reference link
    expect(result.content).toContain(
      `[codeql database analyze](${RELATIVE_LINK_PATH}/database-analyze)`,
    )
  })

  test('converts aka.ms links', async () => {
    const result = await convertContentToDocs(testContent, {}, 'bqrs-interpret.md')

    // Should convert aka.ms link to redirect
    expect(result.content).toContain(
      '[AUTOTITLE](/enterprise-server@latest/code-security/reference/code-scanning/sarif-files/sarif-support)',
    )

    // Should not still contain aka.ms link
    expect(result.content).not.toContain('https://aka.ms/')
  })

  test('strips language prefix from aka.ms redirect links', async () => {
    fetchMock.mockResolvedValue(
      new Response(null, {
        status: 302,
        headers: {
          location:
            'https://docs.github.com/en/enterprise-server@latest/code-security/reference/code-scanning/sarif-files/sarif-support',
        },
      }),
    )

    const result = await convertContentToDocs(testContent, {}, 'bqrs-interpret.md')

    // Should strip language prefix from aka.ms redirect link
    expect(result.content).toContain(
      '[AUTOTITLE](/enterprise-server@latest/code-security/reference/code-scanning/sarif-files/sarif-support)',
    )
  })

  test('handles edge case: no filename provided', async () => {
    const result = await convertContentToDocs(testContent, {}, '')

    // Should preserve link when no filename is provided
    expect(result.content).toContain(
      `[codeql bqrs interpret](${RELATIVE_LINK_PATH}/bqrs-interpret)`,
    )
  })

  test('handles edge case: different filename', async () => {
    const result = await convertContentToDocs(testContent, {}, 'different-file.md')

    // Should preserve link when filename is different
    expect(result.content).toContain(
      `[codeql bqrs interpret](${RELATIVE_LINK_PATH}/bqrs-interpret)`,
    )
  })

  test('processes both circular and non-circular links correctly in same content', async () => {
    const result = await convertContentToDocs(testContent, {}, 'bqrs-interpret.md')

    // Circular link should be plain text
    expect(result.content).not.toContain(
      `[codeql bqrs interpret](${RELATIVE_LINK_PATH}/bqrs-interpret)`,
    )

    // Non-circular link should be preserved
    expect(result.content).toContain(
      `[codeql database analyze](${RELATIVE_LINK_PATH}/database-analyze)`,
    )

    // Both should have their text content present
    expect(result.content).toContain('codeql bqrs interpret')
    expect(result.content).toContain('codeql database analyze')
  })

  test('returns proper data structure', async () => {
    const result = await convertContentToDocs(testContent, {}, 'bqrs-interpret.md')

    expect(result).toHaveProperty('content')
    expect(result).toHaveProperty('data')
    expect(typeof result.content).toBe('string')
    expect(typeof result.data).toBe('object')
  })
})

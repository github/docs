import { describe, expect, test } from 'vitest'
import { convertContentToDocs } from '../scripts/convert-markdown-for-docs'

describe('convertContentToDocs circular link handling', () => {
  const testContent = `
# bqrs interpret

[Plumbing] Interpret data in a single BQRS.

## Description

A command that interprets a single BQRS file according to the provided
metadata and generates output in the specified format.

## Options

### Primary Options

This option has no effect when passed to \`codeql bqrs interpret<bqrs-interpret>\`{.interpreted-text role="doc"}.

For more information, see \`codeql database analyze<database-analyze>\`{.interpreted-text role="doc"}.
`

  test('converts circular links to plain text', async () => {
    const result = await convertContentToDocs(testContent, {}, 'bqrs-interpret.md')

    // Should not contain circular link
    expect(result.content).not.toContain(
      '[codeql bqrs interpret](/code-security/codeql-cli/codeql-cli-manual/bqrs-interpret)',
    )

    // Should contain plain text instead
    expect(result.content).toContain('codeql bqrs interpret')
  })

  test('preserves non-circular links', async () => {
    const result = await convertContentToDocs(testContent, {}, 'bqrs-interpret.md')

    // Should preserve valid cross-reference link
    expect(result.content).toContain(
      '[codeql database analyze](/code-security/codeql-cli/codeql-cli-manual/database-analyze)',
    )
  })

  test('handles edge case: no filename provided', async () => {
    const result = await convertContentToDocs(testContent, {}, '')

    // Should preserve link when no filename is provided
    expect(result.content).toContain(
      '[codeql bqrs interpret](/code-security/codeql-cli/codeql-cli-manual/bqrs-interpret)',
    )
  })

  test('handles edge case: different filename', async () => {
    const result = await convertContentToDocs(testContent, {}, 'different-file.md')

    // Should preserve link when filename is different
    expect(result.content).toContain(
      '[codeql bqrs interpret](/code-security/codeql-cli/codeql-cli-manual/bqrs-interpret)',
    )
  })

  test('processes both circular and non-circular links correctly in same content', async () => {
    const result = await convertContentToDocs(testContent, {}, 'bqrs-interpret.md')

    // Circular link should be plain text
    expect(result.content).not.toContain(
      '[codeql bqrs interpret](/code-security/codeql-cli/codeql-cli-manual/bqrs-interpret)',
    )

    // Non-circular link should be preserved
    expect(result.content).toContain(
      '[codeql database analyze](/code-security/codeql-cli/codeql-cli-manual/database-analyze)',
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

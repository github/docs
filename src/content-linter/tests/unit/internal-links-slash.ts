import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test'
import { internalLinksSlash } from '../../lib/linting-rules/internal-links-slash'

describe(internalLinksSlash.names.join(' - '), () => {
  test('relative links that do not start with / fail', async () => {
    const markdown = [
      '# heading',
      '[GitHub Actions Quickstart](actions/quickstart.md)',
      '',
      '[GitHub Actions Quickstart](en/quickstart.md)',
    ].join('\n')
    const result = await runRule(internalLinksSlash, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(2)
    expect(errors.map((error) => error.lineNumber)).toEqual([2, 4])
    expect(errors[0].errorRange).toEqual([29, 21])
    expect(errors[1].errorRange).toEqual([29, 16])
    expect(errors[0].fixInfo).toEqual({
      deleteCount: 0,
      editColumn: 29,
      insertText: '/',
      lineNumber: 2,
    })
    expect(errors[1].fixInfo).toEqual({
      deleteCount: 0,
      editColumn: 29,
      insertText: '/',
      lineNumber: 4,
    })
  })
  test('relative links that start with / pass', async () => {
    const markdown = [
      'Hello [GitHub Actions](/actions/index.md)',
      '- "[Actions](/actions/index.md)"',
      // Anchors stay outside relative page link checks.
      '[Anchor on page](#anchor-on-page)',
      // External URLs stay outside internal link checks.
      '[External Link](https://git-scm.com/)',
      '[External link](http://example.com)',
      '[External Link](mailto:email@example.com)',
      // Links with any URI scheme are external.
      '[Agent mode](vscode://GitHub.Copilot-Chat/chat?mode=agent)',
      '[Clone](vscode://vscode.git/clone?url=https://github.com/a/b)',
      '[Call](tel:+15555555555)',
      '[Open in Desktop](x-github-client://openRepo/https://github.com/a/b)',
    ].join('\n')
    const result = await runRule(internalLinksSlash, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
  test('fix points at the href of the failing link', async () => {
    const markdown = [
      '[A](/docs/foo) and [B](docs/foo)',
      'Learn about billing in [the billing guide](billing).',
      '[A](foo) and [B](foo)',
      '[A](<foo>)',
    ].join('\n')
    const result = await runRule(internalLinksSlash, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.map((error) => error.lineNumber)).toEqual([1, 2, 3, 3, 4])
    expect(errors.map((error) => error.errorRange)).toEqual([
      [24, 8],
      [44, 7],
      [5, 3],
      [18, 3],
      [6, 3],
    ])
    expect(errors.map((error) => error.fixInfo?.editColumn)).toEqual([24, 44, 5, 18, 6])
  })
  test('fix follows source order across bare, angle, and spaced destinations', async () => {
    const markdown = [
      '[A](<foo>) and [B](foo)',
      '[A](<foo>) and `[B](foo)`',
      '[A]( foo)',
      '[A](\tfoo)',
      '[A](foo) and [B](<foo>)',
    ].join('\n')
    const result = await runRule(internalLinksSlash, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.map((error) => error.lineNumber)).toEqual([1, 1, 2, 3, 4, 5, 5])
    expect(errors.map((error) => error.fixInfo?.editColumn)).toEqual([6, 20, 6, 6, 6, 5, 19])
  })
  test('links whose href is not on the link line report an error without a fix', async () => {
    const markdown = [
      'For details, see [the setup',
      'guide](setup-guide).',
      '',
      '[x](foo\\_bar)',
    ].join('\n')
    const result = await runRule(internalLinksSlash, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.map((error) => error.lineNumber)).toEqual([1, 4])
    expect(errors[0].errorRange).toBeNull()
    expect(errors[0].fixInfo).toBeNull()
    expect(errors[1].errorRange).toBeNull()
    expect(errors[1].fixInfo).toBeNull()
  })
})

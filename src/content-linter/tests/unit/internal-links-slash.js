import { runRule } from '../../lib/init-test.js'
import { internalLinksSlash } from '../../lib/linting-rules/internal-links-slash.js'

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
      // Not a relative page link
      '[Anchor on page](#anchor-on-page)',
      // Not internal links
      '[External Link](https://git-scm.com/)',
      '[External link](http://example.com)',
      '[External Link](mailto:email@example.com)',
    ].join('\n')
    const result = await runRule(internalLinksSlash, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
})

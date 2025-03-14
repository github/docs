import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test.js'
import { internalLinksNoLang } from '../../lib/linting-rules/internal-links-no-lang.js'

describe(internalLinksNoLang.names.join(' - '), () => {
  test('internal links with hardcoded language codes fail', async () => {
    const markdown = [
      '[English Docs](/en/docs)',
      '[Link to just a landing page in english](/en)',
      '[Korean Docs](/ko/actions)',
    ].join('\n')
    const result = await runRule(internalLinksNoLang, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(3)
    expect(errors.map((error) => error.lineNumber)).toEqual([1, 2, 3])
    expect(errors[0].errorRange).toEqual([16, 8])
    expect(errors[1].errorRange).toEqual([42, 3])
    expect(errors[2].errorRange).toEqual([15, 11])
    expect(errors[0].fixInfo).toEqual({ deleteCount: 3, editColumn: 16, lineNumber: 1 })
    expect(errors[1].fixInfo).toEqual({ deleteCount: 3, editColumn: 42, lineNumber: 2 })
    expect(errors[2].fixInfo).toEqual({ deleteCount: 3, editColumn: 15, lineNumber: 3 })
  })
  test('internal links with no hardcoded language codes pass', async () => {
    const markdown = [
      // This is caught by the internal-links-slashes rule
      '[Internal Link Fail Docs](en/docs)',
      // a // means the link is external
      'These are the [Docs](//ja/actions) we need.',
      'This is the [actions Docs](/actions)',
      // A link that starts with a language code
      '[Enterprise](/enterprise/overview)',
    ].join('\n')
    const result = await runRule(internalLinksNoLang, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
})

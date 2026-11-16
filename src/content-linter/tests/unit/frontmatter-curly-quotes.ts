import { describe, expect, test } from 'vitest'
import { load } from 'js-yaml'

import { runRule } from '../../lib/init-test'
import { frontmatterCurlyQuotes } from '../../lib/linting-rules/frontmatter-curly-quotes'

const fmOptions = { markdownlintOptions: { frontMatter: null } }

describe(frontmatterCurlyQuotes.names.join(' - '), () => {
  test('curly single quotes in title triggers warning', async () => {
    const strings = {
      test: [
        '---',
        'title: Managing your repository\u2019s settings',
        'intro: Learn about settings.',
        '---',
        '',
        'Some content.',
      ].join('\n'),
    }
    const result = await runRule(frontmatterCurlyQuotes, { strings, ...fmOptions })
    const errors = result.test
    expect(errors.length).toBe(1)
    expect(errors[0].ruleNames).toContain('GHD034')
    expect(errors[0].lineNumber).toBe(2)
    expect(errors[0].fixInfo).toBeTruthy()
    expect(errors[0].fixInfo!.insertText).toContain("repository's")
  })

  test('curly double quotes in intro triggers warning', async () => {
    const strings = {
      test: [
        '---',
        'title: A normal title',
        'intro: Learn about the \u201cupstream\u201d repository.',
        '---',
        '',
        'Some content.',
      ].join('\n'),
    }
    const result = await runRule(frontmatterCurlyQuotes, { strings, ...fmOptions })
    const errors = result.test
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(3)
  })

  test('straight quotes pass', async () => {
    const strings = {
      test: [
        '---',
        "title: Managing your repository's settings",
        'intro: Learn about the "upstream" repository.',
        '---',
        '',
        'Some content.',
      ].join('\n'),
    }
    const result = await runRule(frontmatterCurlyQuotes, { strings, ...fmOptions })
    const errors = result.test
    expect(errors.length).toBe(0)
  })

  test('curly quotes in body are ignored', async () => {
    const strings = {
      test: [
        '---',
        'title: A normal title',
        'intro: A normal intro.',
        '---',
        '',
        'The cat\u2019s out of the bag.',
      ].join('\n'),
    }
    const result = await runRule(frontmatterCurlyQuotes, { strings, ...fmOptions })
    const errors = result.test
    expect(errors.length).toBe(0)
  })

  test('both title and intro with curly quotes triggers two warnings', async () => {
    const strings = {
      test: [
        '---',
        'title: Your organization\u2019s settings',
        'intro: About the \u201cupstream\u201d repo.',
        '---',
        '',
        'Some content.',
      ].join('\n'),
    }
    const result = await runRule(frontmatterCurlyQuotes, { strings, ...fmOptions })
    const errors = result.test
    expect(errors.length).toBe(2)
  })

  const fixCases = [
    {
      name: 'single-quoted value with curly apostrophe',
      line: "intro: 'Learn about the repository\u2019s settings.'",
      field: 'intro',
      expected: "Learn about the repository's settings.",
    },
    {
      name: 'double-quoted value with curly double quotes',
      line: 'title: "Use the \u201cupstream\u201d remote"',
      field: 'title',
      expected: 'Use the "upstream" remote',
    },
    {
      name: 'plain value that starts with a curly double quote',
      line: 'title: \u201cUpstream\u201d remotes',
      field: 'title',
      expected: '"Upstream" remotes',
    },
    {
      name: 'single-quoted value with curly double quotes',
      line: "intro: 'About the \u201cupstream\u201d repo.'",
      field: 'intro',
      expected: 'About the "upstream" repo.',
    },
    {
      name: 'double-quoted value with curly apostrophe',
      line: 'title: "Your organization\u2019s settings"',
      field: 'title',
      expected: "Your organization's settings",
    },
    {
      name: 'plain value with curly apostrophe',
      line: 'title: Managing your repository\u2019s settings',
      field: 'title',
      expected: "Managing your repository's settings",
    },
  ]

  for (const { name, line, field, expected } of fixCases) {
    test(`fix produces valid YAML for ${name}`, async () => {
      const strings = { test: ['---', line, '---', '', 'Some content.'].join('\n') }
      const result = await runRule(frontmatterCurlyQuotes, { strings, ...fmOptions })
      const errors = result.test
      expect(errors.length).toBe(1)
      expect(errors[0].fixInfo).toBeTruthy()
      const parsed = load(errors[0].fixInfo!.insertText!) as Record<string, unknown>
      expect(parsed[field]).toBe(expected)
    })
  }

  test('fix keeps a quoted value spanning multiple lines valid', async () => {
    const fm = ['intro: "Learn about the \u201cupstream\u201d', '  repository."']
    const strings = { test: ['---', ...fm, '---', '', 'Some content.'].join('\n') }
    const result = await runRule(frontmatterCurlyQuotes, { strings, ...fmOptions })
    const errors = result.test
    expect(errors.length).toBe(1)
    expect(errors[0].fixInfo).toBeTruthy()
    const fixed = [errors[0].fixInfo!.insertText!, ...fm.slice(1)].join('\n')
    const parsed = load(fixed) as Record<string, unknown>
    expect(parsed.intro).toBe('Learn about the "upstream" repository.')
  })

  test('plain value continued on the next line is reported without a fix', async () => {
    const strings = {
      test: [
        '---',
        'intro: \u201cUpstream\u201d remotes',
        '  and forks',
        '---',
        '',
        'Some content.',
      ].join('\n'),
    }
    const result = await runRule(frontmatterCurlyQuotes, { strings, ...fmOptions })
    const errors = result.test
    expect(errors.length).toBe(1)
    expect(errors[0].fixInfo).toBeFalsy()
  })

  test('curly quotes in block scalar intro trigger warning', async () => {
    const strings = {
      test: [
        '---',
        'title: A normal title',
        'intro: >-',
        '  Learn how to configure',
        '',
        '  your organization\u2019s settings.',
        'versions:',
        "  fpt: '*'",
        '---',
        '',
        'Some content.',
      ].join('\n'),
    }
    const result = await runRule(frontmatterCurlyQuotes, { strings, ...fmOptions })
    const errors = result.test
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(6)
    expect(errors[0].fixInfo).toBeTruthy()
    expect(errors[0].fixInfo!.lineNumber).toBe(6)
    expect(errors[0].fixInfo!.insertText).toBe("  your organization's settings.")
  })

  test('curly double quotes in literal block scalar intro trigger warning', async () => {
    const strings = {
      test: [
        '---',
        'title: A normal title',
        'intro: |',
        '  Learn about the \u201cupstream\u201d repository.',
        '---',
        '',
        'Some content.',
      ].join('\n'),
    }
    const result = await runRule(frontmatterCurlyQuotes, { strings, ...fmOptions })
    const errors = result.test
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(4)
  })

  test('block scalar check stops at the next key', async () => {
    const strings = {
      test: [
        '---',
        'title: A normal title',
        'intro: >',
        '  Learn about the "upstream" repository.',
        'redirect_from:',
        '  - /the-repository\u2019s-settings',
        '---',
        '',
        'Some content.',
      ].join('\n'),
    }
    const result = await runRule(frontmatterCurlyQuotes, { strings, ...fmOptions })
    const errors = result.test
    expect(errors.length).toBe(0)
  })
})

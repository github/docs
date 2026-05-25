import { describe, expect, test } from 'vitest'

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
})

import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test'
import { getFrontmatter } from '../../lib/helpers/utils'
import {
  earlyAccessReferences,
  frontmatterEarlyAccessReferences,
} from '../../lib/linting-rules/early-access-references'

const FIXTURE_FILEPATH_NON_EA = 'src/content-linter/tests/fixtures/not-secret.md'
const FIXTURE_FILEPATH_EA = 'src/content-linter/tests/fixtures/early-access/secret.md'
const fmOptions = { markdownlintOptions: { frontMatter: null } }

describe(earlyAccessReferences.names.join(' - '), () => {
  test('non-early access file with early access references fails', async () => {
    const result = await runRule(earlyAccessReferences, { files: [FIXTURE_FILEPATH_NON_EA] })
    const errors = result[FIXTURE_FILEPATH_NON_EA]
    expect(errors.length).toBe(8)
    const lineNumbers = errors.map((error) => error.lineNumber)
    expect(lineNumbers.includes(12)).toBe(true)
    expect(lineNumbers.includes(13)).toBe(false)
    expect(errors[0].errorRange).toEqual([1, 12])
  })
  test('early access file with early access references passes', async () => {
    const result = await runRule(earlyAccessReferences, { files: [FIXTURE_FILEPATH_EA] })
    const errors = result[FIXTURE_FILEPATH_EA]
    expect(errors.length).toBe(0)
  })
})

describe(frontmatterEarlyAccessReferences.names.join(' - '), () => {
  test('non-early access file with early access references fails', async () => {
    const result = await runRule(frontmatterEarlyAccessReferences, {
      files: [FIXTURE_FILEPATH_NON_EA],
      ...fmOptions,
    })
    const errors = result[FIXTURE_FILEPATH_NON_EA]
    expect(errors.length).toBe(3)
    const lineNumbers = errors.map((error) => error.lineNumber)
    expect(lineNumbers.includes(2)).toBe(true)
    expect(lineNumbers.includes(3)).toBe(true)
    expect(lineNumbers.includes(4)).toBe(false)
    expect(lineNumbers.includes(5)).toBe(false)
    expect(errors[0].errorRange).toEqual([8, 12])
    expect(errors[1].errorRange).toEqual([15, 12])
  })
  test('early access file with early access references passes', async () => {
    const result = await runRule(frontmatterEarlyAccessReferences, {
      files: [FIXTURE_FILEPATH_EA],
      ...fmOptions,
    })
    const errors = result[FIXTURE_FILEPATH_EA]
    expect(errors.length).toBe(0)
  })
  test('reports source line numbers for quoted and folded values', async () => {
    const markdown = [
      '---',
      "title: 'About early-access features'",
      'intro: "Join the early-access program"',
      'shortTitle: >-',
      '  A folded value that mentions',
      '  early-access on a continuation line',
      'redirect_from:',
      '  - /early-access/old',
      '---',
      '',
    ].join('\n')
    const result = await runRule(frontmatterEarlyAccessReferences, {
      strings: { markdown },
      ...fmOptions,
    })
    const lineNumbers = result.markdown.map((error) => error.lineNumber)
    expect(lineNumbers).toEqual([2, 3, 6])
  })
  test('home page children can reference early access', async () => {
    const markdown = ['---', 'title: Home', 'children:', '  - early-access', '---', ''].join('\n')
    const result = await runRule(frontmatterEarlyAccessReferences, {
      strings: { 'content/index.md': markdown },
      ...fmOptions,
    })
    expect(result['content/index.md']).toEqual([])
  })
  test('quoted skipped keys can reference early access', async () => {
    const markdown = [
      '---',
      'title: Home',
      '"redirect_from":',
      '  - /early-access/double',
      "'children':",
      '  - early-access',
      '---',
      '',
    ].join('\n')
    const result = await runRule(frontmatterEarlyAccessReferences, {
      strings: { 'content/index.md': markdown },
      ...fmOptions,
    })
    expect(result['content/index.md']).toEqual([])
    const swapped = markdown
      .replace('"redirect_from"', "'redirect_from'")
      .replace("'children'", '"children"')
    const swappedResult = await runRule(frontmatterEarlyAccessReferences, {
      strings: { 'content/index.md': swapped },
      ...fmOptions,
    })
    expect(swappedResult['content/index.md']).toEqual([])
  })
  test('ignores YAML comments and checks block scalar lines that start with #', async () => {
    const markdown = [
      '---',
      'title: Public # early-access reminder',
      '# early-access comment',
      'intro: |',
      '  # [Preview](/early-access/secret)',
      '---',
      '',
    ].join('\n')
    const result = await runRule(frontmatterEarlyAccessReferences, {
      strings: { markdown },
      ...fmOptions,
    })
    expect(result.markdown.map((error) => error.lineNumber)).toEqual([5])
    expect(result.markdown[0].errorRange).toEqual([16, 12])
  })
  test('does not remove frontmatter keys that later rules read', async () => {
    const markdown = [
      '---',
      'title: Home',
      'redirect_from:',
      '  - /early-access/old',
      'children:',
      '  - early-access',
      '---',
      '',
    ].join('\n')
    await runRule(frontmatterEarlyAccessReferences, {
      strings: { 'content/index.md': markdown },
      ...fmOptions,
    })
    const fm = getFrontmatter(markdown.split('\n'))
    expect(fm?.redirect_from).toEqual(['/early-access/old'])
    expect(fm?.children).toEqual(['early-access'])
  })
})

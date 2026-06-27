import path from 'path'

import { afterAll, beforeAll, describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test'
import { frontmatterIntroLinks } from '../../lib/linting-rules/frontmatter-intro-links'

const fmOptions = { markdownlintOptions: { frontMatter: null } }

describe(frontmatterIntroLinks.names.join(' - '), () => {
  const envVarValueBefore = process.env.ROOT

  beforeAll(() => {
    process.env.ROOT = path.join('src', 'fixtures', 'fixtures')
  })

  afterAll(() => {
    process.env.ROOT = envVarValueBefore
  })

  test('valid introLinks keys pass', async () => {
    const markdown = [
      '---',
      'title: Test',
      'introLinks:',
      '  overview: /path/to/overview',
      '  quickstart: /path/to/quickstart',
      '---',
      '',
      '# Test',
    ].join('\n')
    const result = await runRule(frontmatterIntroLinks, {
      strings: { 'content/test/index.md': markdown },
      ...fmOptions,
    })
    const errors = result['content/test/index.md']
    expect(errors.length).toBe(0)
  })

  test('missing introLinks is ignored', async () => {
    const markdown = ['---', 'title: Test', '---', '', '# Test'].join('\n')
    const result = await runRule(frontmatterIntroLinks, {
      strings: { 'content/test/index.md': markdown },
      ...fmOptions,
    })
    const errors = result['content/test/index.md']
    expect(errors.length).toBe(0)
  })

  test('invalid introLinks key fails', async () => {
    const markdown = [
      '---',
      'title: Test',
      'introLinks:',
      '  overview: /path/to/overview',
      '  invalidKey: /path/to/invalid',
      '---',
      '',
      '# Test',
    ].join('\n')
    const result = await runRule(frontmatterIntroLinks, {
      strings: { 'content/test/index.md': markdown },
      ...fmOptions,
    })
    const errors = result['content/test/index.md']
    expect(errors.length).toBe(1)
    expect(errors[0].errorDetail).toContain('Invalid introLinks key')
    expect(errors[0].errorDetail).toContain('invalidKey')
  })

  test('multiple invalid introLinks keys fail', async () => {
    const markdown = [
      '---',
      'title: Test',
      'introLinks:',
      '  invalidKey1: /path/to/invalid1',
      '  invalidKey2: /path/to/invalid2',
      '---',
      '',
      '# Test',
    ].join('\n')
    const result = await runRule(frontmatterIntroLinks, {
      strings: { 'content/test/index.md': markdown },
      ...fmOptions,
    })
    const errors = result['content/test/index.md']
    expect(errors.length).toBe(2)
  })

  test('all common valid introLinks keys pass', async () => {
    const markdown = [
      '---',
      'title: Test',
      'introLinks:',
      '  overview: /path/to/overview',
      '  quickstart: /path/to/quickstart',
      '  reference: /path/to/reference',
      '---',
      '',
      '# Test',
    ].join('\n')
    const result = await runRule(frontmatterIntroLinks, {
      strings: { 'content/test/index.md': markdown },
      ...fmOptions,
    })
    const errors = result['content/test/index.md']
    expect(errors.length).toBe(0)
  })

  test('non-object introLinks is ignored', async () => {
    const markdown = [
      '---',
      'title: Test',
      'introLinks: this is not an object',
      '---',
      '',
      '# Test',
    ].join('\n')
    const result = await runRule(frontmatterIntroLinks, {
      strings: { 'content/test/index.md': markdown },
      ...fmOptions,
    })
    const errors = result['content/test/index.md']
    expect(errors.length).toBe(0)
  })
})

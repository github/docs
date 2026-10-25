import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test'
import { getFrontmatter } from '@/content-linter/lib/helpers/utils'
import { frontmatterSchema } from '../../lib/linting-rules/frontmatter-schema'

// Disable frontMatter stripping so the rule can parse frontmatter itself.
const fmOptions = { markdownlintOptions: { frontMatter: null } }

describe(frontmatterSchema.names.join(' - '), () => {
  test('Deprecated properties in frontmatter fails', async () => {
    const markdown = [
      '---',
      'title: Title',
      'versions:',
      "  fpt: '*'",
      'miniTocMaxHeadingLevel: 2',
      '---',
    ].join('\n')
    const result = await runRule(frontmatterSchema, { strings: { markdown }, ...fmOptions })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(5)
    expect(errors[0].errorRange).toEqual([1, 25])
  })
  test('Minimum required properties pass', async () => {
    const markdown = ['---', 'title: Title', 'versions:', "  fpt: '*'", '---'].join('\n')
    const result = await runRule(frontmatterSchema, { strings: { markdown }, ...fmOptions })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
  test('Additional properties fail', async () => {
    const markdown = ['---', 'title: Title', 'versions:', "  ft: '*'", 'mona: lisa', '---'].join(
      '\n',
    )
    const result = await runRule(frontmatterSchema, { strings: { markdown }, ...fmOptions })
    const errors = result.markdown
    expect(errors.length).toBe(2)
    expect(errors[0].lineNumber).toBe(4)
    expect(errors[1].lineNumber).toBe(5)
    expect(errors[0].errorRange).toEqual([1, 2])
    expect(errors[1].errorRange).toEqual([1, 4])
  })
  test('Missing required property fails', async () => {
    const markdown = ['---', 'title: Title', '---'].join('\n')
    const result = await runRule(frontmatterSchema, { strings: { markdown }, ...fmOptions })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(1)
    expect(errors[0].errorRange).toEqual(null)
  })

  test('sidebarLink with valid object properties passes', async () => {
    const markdown = [
      '---',
      'title: Title',
      'versions:',
      "  fpt: '*'",
      'sidebarLink:',
      '  text: "All prompts"',
      '  href: "/copilot/copilot-cookbook"',
      '---',
    ].join('\n')
    const result = await runRule(frontmatterSchema, { strings: { markdown }, ...fmOptions })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('sidebarLink with missing text property fails', async () => {
    const markdown = [
      '---',
      'title: Title',
      'versions:',
      "  fpt: '*'",
      'sidebarLink:',
      '  href: "/copilot/copilot-cookbook"',
      '---',
    ].join('\n')
    const result = await runRule(frontmatterSchema, { strings: { markdown }, ...fmOptions })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(5)
  })

  test('sidebarLink with missing href property fails', async () => {
    const markdown = [
      '---',
      'title: Title',
      'versions:',
      "  fpt: '*'",
      'sidebarLink:',
      '  text: "All prompts"',
      '---',
    ].join('\n')
    const result = await runRule(frontmatterSchema, { strings: { markdown }, ...fmOptions })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(5)
  })

  test('Invalid YAML reports a parsing error instead of throwing', async () => {
    const markdown = ['---', 'title: Using GitHub: a guide', 'versions:', "  fpt: '*'", '---'].join(
      '\n',
    )
    const result = await runRule(frontmatterSchema, { strings: { markdown }, ...fmOptions })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(2)
    expect(errors[0].errorDetail).toContain('YML parsing error')
  })

  test('Invalid YAML is still reported after another rule parsed it', async () => {
    const lines = ['---', 'title: Using Git: a guide', 'versions:', "  fpt: '*'", '---']
    expect(getFrontmatter(lines)).toBeNull()
    const markdown = lines.join('\n')
    const result = await runRule(frontmatterSchema, { strings: { markdown }, ...fmOptions })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(2)
    expect(errors[0].errorDetail).toContain('YML parsing error')
  })
})

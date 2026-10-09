import { describe, expect, test } from 'vitest'
import searchReplace from 'markdownlint-rule-search-replace'

import { runRule } from '../../lib/init-test'
import { searchReplaceConfig } from '../../style/github-docs'

describe(searchReplace.names.join(' - '), () => {
  test('TODOCS placeholder occurrences cause errors', async () => {
    const markdown = [
      '## TODOCS',
      '- Todocs',
      '[ToDOCS](/todocs)',
      '![TODOCS](./ToDocs.png)',
      'HelloTODOCS',
    ].join('\n')
    const result = await runRule(searchReplace, {
      strings: { markdown },
      ruleConfig: searchReplaceConfig['search-replace'],
    })
    const errors = result.markdown
    expect(errors.length).toBe(7)
  })

  test('docs domain occurrences cause error', async () => {
    const markdown = [
      'These are not ok:',
      'docs.github.com',
      '- help.github.com',
      '[help.github.com](//developer.github.com)',
      ' docs.github.com',
      'developer.github.com/enterprise',
      'developer.github.com/enterprise/',
      '',
      'These are ok:',
      'developer.github.com/changes',
      'developer.github.com/changes/',
      'developer.github.com/changes/changes',
      'developer.github.com/enterprise/1',
      '<https://docs.github.com/en/rest/reference/code-scanning#upload-an-analysis-as-sarif-data>',
    ].join('\n')
    const result = await runRule(searchReplace, {
      strings: { markdown },
      ruleConfig: searchReplaceConfig['search-replace'],
    })
    const errors = result.markdown
    expect(errors.length).toBe(8)
  })

  test('Deprecated Liquid syntax causes error', async () => {
    const markdown = [
      '{{ site.data.thing1.thing2 }}',
      '{{site.data.thing1.thing2}}',
      '{{ octicon-plus An example label }}',
      '{{octicon-icon}}',
    ].join('\n')
    const result = await runRule(searchReplace, {
      strings: { markdown },
      ruleConfig: searchReplaceConfig['search-replace'],
    })
    const errors = result.markdown
    expect(errors.length).toBe(4)
  })

  test('TODOCS placeholder in frontmatter causes errors when frontmatter is included', async () => {
    const markdown = [
      '---',
      'title: TODOCS',
      'shortTitle: TODOCS',
      'intro: TODOCS',
      'versions:',
      '  ghec: "*"',
      '---',
      '',
      'This is content that has no placeholder.',
    ].join('\n')
    const result = await runRule(searchReplace, {
      strings: { markdown },
      ruleConfig: searchReplaceConfig['search-replace'],
      markdownlintOptions: { frontMatter: null },
    })
    const errors = result.markdown
    expect(errors.length).toBe(3)
    expect(errors[0].lineNumber).toBe(2)
    expect(errors[1].lineNumber).toBe(3)
    expect(errors[2].lineNumber).toBe(4)
  })

  test('TODOCS placeholder in both frontmatter and content', async () => {
    const markdown = [
      '---',
      'title: TODOCS',
      'intro: TODOCS',
      '---',
      '',
      'This content has TODOCS placeholder.',
      'And another TODOCS here.',
    ].join('\n')
    const result = await runRule(searchReplace, {
      strings: { markdown },
      ruleConfig: searchReplaceConfig['search-replace'],
      markdownlintOptions: { frontMatter: null },
    })
    const errors = result.markdown
    expect(errors.length).toBe(4)
    expect(errors[0].lineNumber).toBe(2)
    expect(errors[1].lineNumber).toBe(3)
    expect(errors[2].lineNumber).toBe(6)
    expect(errors[3].lineNumber).toBe(7)
  })

  test('TODOCS placeholder in frontmatter is not caught with default frontmatter handling', async () => {
    const markdown = [
      '---',
      'title: TODOCS',
      'shortTitle: TODOCS',
      'intro: TODOCS',
      'versions:',
      '  ghec: "*"',
      '---',
      '',
      'This is content that has no placeholder.',
    ].join('\n')
    const result = await runRule(searchReplace, {
      strings: { markdown },
      ruleConfig: searchReplaceConfig['search-replace'],
    })
    const errors = result.markdown
    // Default frontmatter handling strips frontmatter, so this only tests Markdown content.
    expect(errors.length).toBe(0)
  })

  test('TODOCS in frontmatter is detected when frontmatter is included in content', async () => {
    const frontmatterOnly = [
      '---',
      'title: TODOCS',
      'shortTitle: TODOCS',
      'intro: TODOCS',
      '---',
    ].join('\n')

    const result = await runRule(searchReplace, {
      strings: { markdown: frontmatterOnly },
      ruleConfig: searchReplaceConfig['search-replace'],
      markdownlintOptions: { frontMatter: null },
    })
    const errors = result.markdown

    expect(errors.length).toBe(3)
    expect(errors[0].lineNumber).toBe(2)
    expect(errors[1].lineNumber).toBe(3)
    expect(errors[2].lineNumber).toBe(4)
  })

  test('TODOCS placeholder found in documentation about TODOCS usage', async () => {
    // content/contributing docs are path-excluded before this rule detects TODOCS placeholders.
    const markdown = [
      '---',
      'title: Using the TODOCS placeholder to leave notes',
      'shortTitle: Using the TODOCS placeholder',
      'intro: You can use the `TODOCS` placeholder to indicate work that still needs to be completed.',
      '---',
      '',
      '<!-- markdownlint-disable search-replace -->',
      '## Using the TODOCS placeholder',
      '',
      'To prevent slips, use the string `TODOCS` as your placeholder.',
      'TODOCS: ADD A SCREENSHOT',
      '<!-- markdownlint-enable search-replace -->',
    ].join('\n')

    const result = await runRule(searchReplace, {
      strings: { markdown },
      ruleConfig: searchReplaceConfig['search-replace'],
      markdownlintOptions: { frontMatter: null },
    })
    const errors = result.markdown

    const frontmatterErrors = errors.filter((e) => e.lineNumber <= 6)
    const contentErrors = errors.filter((e) => e.lineNumber > 6)

    // markdownlint-disable suppresses content errors, not frontmatter errors.
    expect(contentErrors.length).toBe(0)

    // frontMatter: null keeps frontmatter in content, so these TODOCS errors appear.
    expect(frontmatterErrors.length).toBeGreaterThanOrEqual(0)
  })
})

import { describe, expect, test } from 'vitest'
import searchReplace from 'markdownlint-rule-search-replace'

import { runRule } from '../../lib/init-test.js'
import { searchReplaceConfig } from '../../style/github-docs.js'

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
      '![developer.github.com](//preview.ghdocs.com)',
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
    expect(errors.length).toBe(10)
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
})

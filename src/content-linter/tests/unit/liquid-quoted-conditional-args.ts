import { describe, expect, test } from 'vitest'
import { applyFixes } from 'markdownlint-rule-helpers'

import { runRule } from '../../lib/init-test'
import { liquidQuotedConditionalArg } from '../../lib/linting-rules/liquid-quoted-conditional-arg'

describe(liquidQuotedConditionalArg.names.join(' - '), () => {
  test('if conditional with quote args fails', async () => {
    const markdown = [
      '---',
      'title: Good sample page',
      '---',
      '',
      ' - One',
      '{% if product.title == "Awesome Shoes" %}',
      "{% elsif 'ghes' %}",
      '{% elsif "ghec" %}',
      '{% endif %}',
      '{% data variables.stuff.foo%}',
    ].join('\n')
    const result = await runRule(liquidQuotedConditionalArg, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(2)
    expect(errors.map((error) => error.lineNumber)).toEqual([7, 8])
    expect(errors[0].errorRange).toEqual([1, 18])
    expect(errors[1].errorRange).toEqual([1, 18])
  })
  test('inline elsif fix replaces only the tag', async () => {
    const markdown = '{% if product.title == "x" %}A{% elsif "ghec" %}B{% endif %}'
    const result = await runRule(liquidQuotedConditionalArg, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].fixInfo).toEqual({
      lineNumber: 1,
      editColumn: 31,
      deleteCount: 18,
      insertText: '{% elsif ghec %}',
    })
  })
  test('ifversion conditional with quote args fails', async () => {
    const markdown = [
      '---',
      'title: Good sample page',
      '---',
      '',
      ' - One',
      '{% ifversion "ghec" %}',
      '{% ifversion "fpt" or ghec %}',
      '{% ifversion fpt and "ghec" %}',
      '{{name | capitalize}}',
      '{% endif %}',
      '{% data variables.stuff.foo%}',
    ].join('\n')
    const result = await runRule(liquidQuotedConditionalArg, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(3)
    expect(errors.map((error) => error.lineNumber)).toEqual([6, 7, 8])
    expect(errors[0].errorRange).toEqual([1, 22])
    expect(errors[1].errorRange).toEqual([1, 29])
    expect(errors[2].errorRange).toEqual([1, 30])
  })
  test('unless conditional with quote args fails', async () => {
    const markdown = [
      '---',
      'title: Good sample page',
      '---',
      '',
      ' - One',
      '{% unless "this" %}',
      '- Three',
      '{% data variables.stuff.foo%}',
    ].join('\n')
    const result = await runRule(liquidQuotedConditionalArg, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors.map((error) => error.lineNumber)).toEqual([6])
    expect(errors[0].errorRange).toEqual([1, 19])
  })
  test('case conditional with quote args fails', async () => {
    const markdown = [
      '---',
      'title: Good sample page',
      '---',
      '',
      '{% case "product.type" %}',
      "{% when 'Health' %}",
      'This is a health potion.',
      '{% when "Love" %}',
      'This is a love potion.',
      '{% else %}',
      'This is a potion.',
      '{% endcase %}',
      '- Three',
      '{% data variables.stuff.foo%}',
    ].join('\n')
    const result = await runRule(liquidQuotedConditionalArg, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors.map((error) => error.lineNumber)).toEqual([5])
    expect(errors[0].errorRange).toEqual([1, 25])
  })
  test('conditional without quote args pass', async () => {
    const markdown = [
      '---',
      'title: Good sample page',
      '---',
      '',
      '{% case product.type %}',
      "{% when 'Health' %}",
      '{% unless this %}',
      '{% ifversion ghec %}',
      '{% elsif ghes %}',
      '{% if ghec %}',
      '- Three',
      '{% data variables.stuff.foo%}',
    ].join('\n')
    const result = await runRule(liquidQuotedConditionalArg, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
  test('quoted strings in comparisons are allowed', async () => {
    const markdown = [
      '---',
      'title: Good sample page',
      '---',
      '',
      '{% if entry.provider == "openai" %}',
      '{% if entry.name != "test" %}',
      '{% unless entry.type == "premium" %}',
      '{% if entry.status contains "active" %}',
      '{% if "standalone" %}',
    ].join('\n')
    const result = await runRule(liquidQuotedConditionalArg, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(9)
  })
  test('autofix removes only the offending quotes', async () => {
    const cases = [
      ['{% ifversion "ghec" %}', '{% ifversion ghec %}'],
      ['{% ifversion "fpt" or ghec %}', '{% ifversion fpt or ghec %}'],
      ['{% ifversion fpt and "ghec" %}', '{% ifversion fpt and ghec %}'],
      ['{% if page.x == "y" or "z" %}', '{% if page.x == "y" or z %}'],
      ['{% unless "this" %}x', '{% unless this %}x'],
      [
        'Intro {% ifversion "ghes" %}Text{% endif %} more',
        'Intro {% ifversion ghes %}Text{% endif %} more',
      ],
      ['Use {% if "x" %}bar{% endif %}.', 'Use {% if x %}bar{% endif %}.'],
    ]
    for (const [markdown, expected] of cases) {
      const result = await runRule(liquidQuotedConditionalArg, { strings: { markdown } })
      expect(result.markdown.length).toBe(1)
      expect(applyFixes(markdown, result.markdown)).toBe(expected)
    }
  })
})

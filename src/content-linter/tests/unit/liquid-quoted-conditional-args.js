import { runRule } from '../../lib/init-test.js'
import { liquidQuotedConditionalArg } from '../../lib/linting-rules/liquid-quoted-conditional-arg.js'

describe(liquidQuotedConditionalArg.names.join(' - '), () => {
  test('if conditional with quote args fails', async () => {
    const markdown = [
      '---',
      'title: Good sample page',
      '---',
      '',
      ' - One',
      '{% if product.title == "Awesome Shoes" %}',
      "{% elseif 'ghes' %}",
      '{% elseif "ghec" %}',
      '{% endif %}',
      '{% data variables.stuff.foo%}',
    ].join('\n')
    const result = await runRule(liquidQuotedConditionalArg, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(2)
    expect(errors.map((error) => error.lineNumber)).toEqual([7, 8])
    expect(errors[0].errorRange).toEqual([1, 19])
    expect(errors[1].errorRange).toEqual([1, 19])
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
    expect(errors[0].errorRange).toEqual([1, 22], [1, 29], [1, 23])
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
      '{% elseif ghes %}',
      '{% if ghae %}',
      '- Three',
      '{% data variables.stuff.foo%}',
    ].join('\n')
    const result = await runRule(liquidQuotedConditionalArg, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
})

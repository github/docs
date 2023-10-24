import { runRule } from '../../lib/init-test.js'
import { frontmatterLiquidSyntax, liquidSyntax } from '../../lib/linting-rules/liquid-syntax.js'

// Configure the test figure to not split frontmatter and content
const fmOptions = { markdownlintOptions: { frontMatter: null } }

describe(frontmatterLiquidSyntax.names.join(' - '), () => {
  test('Frontmatter that contains invalid syntax fails', async () => {
    const markdown = [
      '---',
      'title: "{% ata variables.product.product_name %}"',
      'shortTitle: "{% "',
      'intro: "{% data reusables.foo.bar }"',
      'permissions: "{% if true %}Permission statement"',
      'showMiniToc: "{% if true %}Permission statement"',
      '---',
    ].join('\n')
    const result = await runRule(frontmatterLiquidSyntax, { strings: { markdown }, ...fmOptions })
    const errors = result.markdown
    expect(errors.length).toBe(4)
    expect(errors.map((error) => error.lineNumber)).toEqual([2, 3, 4, 5])
    expect(errors[0].errorRange).toEqual([9, 40])
  })
  test('Frontmatter that contains valid Liquid passes', async () => {
    const markdown = [
      '---',
      "title: '{% data variables.product.product_name %}'",
      'shortTitle:',
      "intro: '{% data reusables.foo.bar %}'",
      "permissions: '{% if true %}Permission statement{% endif %}'",
      'showMiniToc: true',
      '---',
    ].join('\n')
    const result = await runRule(liquidSyntax, { strings: { markdown }, ...fmOptions })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
})

describe(liquidSyntax.names.join(' - '), () => {
  test('Missing closing tag syntax in Markdown content fails', async () => {
    const markdown = ['---', 'title: Title', '---', '{% data reusables.foo.bar }'].join('\n')
    const result = await runRule(liquidSyntax, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(4)
    expect(errors[0].errorRange).toEqual([1, 27])
  })
  test('Misspelled data tag in Markdown content fails', async () => {
    const markdown = [
      '---',
      'title: Title',
      '---',
      '{% ata variables.product.product_name %}',
    ].join('\n')
    const result = await runRule(liquidSyntax, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(4)
    expect(errors[0].errorRange).toEqual([1, 40])
  })
  test('Missing endif tag in Markdown content fails', async () => {
    const markdown = ['---', 'title: Title', '---', '{% if true %}Permission statement'].join('\n')
    const result = await runRule(liquidSyntax, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(4)
    expect(errors[0].errorRange).toEqual([1, 33])
  })
  test('Valid Liquid syntax in Markdown content passes', async () => {
    const markdown = [
      '---',
      'title: "Title"',
      '---',
      '{% data reusables.foo.bar %}',
      '{% if true %}Permission statement{% endif %}',
      // Not correct, but not caught by this rule. See liquid-ifversion-tags.
      '{% ifversion ghhes %}bla{%endif%}',
    ].join('\n')
    const result = await runRule(liquidSyntax, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
})

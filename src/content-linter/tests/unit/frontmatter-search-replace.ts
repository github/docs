import { describe, expect, test } from 'vitest'
import markdownlint from 'markdownlint'
// @ts-ignore - markdownlint-rule-search-replace doesn't provide TypeScript declarations
import searchReplace from 'markdownlint-rule-search-replace'

import { searchReplaceConfig } from '../../style/github-docs'

describe('search-replace rule in frontmatter', () => {
  test('TODOCS placeholder in frontmatter is detected', async () => {
    const markdown = ['---', 'title: TODOCS', '---', '', 'Clean content.'].join('\n')

    const result = await markdownlint.promises.markdownlint({
      frontMatter: null,
      strings: { markdown },
      config: {
        'search-replace': searchReplaceConfig['search-replace'],
      },
      customRules: [searchReplace],
    })

    const errors = result.markdown || []

    // Should find TODOCS in frontmatter
    const todosErrors = errors.filter((e) => e.errorDetail && /TODOCS/.test(e.errorDetail))
    expect(todosErrors.length).toBe(1)
    expect(todosErrors[0].lineNumber).toBe(2) // title: TODOCS
  })

  test('multiple TODOCS in frontmatter are all detected', async () => {
    const markdown = [
      '---',
      'title: TODOCS',
      'shortTitle: TODOCS',
      'intro: TODOCS',
      '---',
      '',
      'Content without placeholder.',
    ].join('\n')

    const result = await markdownlint.promises.markdownlint({
      frontMatter: null,
      strings: { markdown },
      config: {
        'search-replace': searchReplaceConfig['search-replace'],
      },
      customRules: [searchReplace],
    })

    const errors = result.markdown || []

    // Should find all TODOCS instances in frontmatter
    const todosErrors = errors.filter((e) => e.errorDetail && /TODOCS/.test(e.errorDetail))
    expect(todosErrors.length).toBe(3)
    expect(todosErrors[0].lineNumber).toBe(2) // title: TODOCS
    expect(todosErrors[1].lineNumber).toBe(3) // shortTitle: TODOCS
    expect(todosErrors[2].lineNumber).toBe(4) // intro: TODOCS
  })

  test('domain rules work in frontmatter', async () => {
    const markdown = [
      '---',
      'title: Check docs.github.com for info',
      'shortTitle: Visit help.github.com',
      'intro: See developer.github.com for API docs',
      '---',
      '',
      'Content without domain references.',
    ].join('\n')

    const result = await markdownlint.promises.markdownlint({
      frontMatter: null,
      strings: { markdown },
      config: {
        'search-replace': searchReplaceConfig['search-replace'],
      },
      customRules: [searchReplace],
    })

    const errors = result.markdown || []

    // Should find domain errors in frontmatter
    const domainErrors = errors.filter(
      (e) => e.errorDetail && /docs-domain|help-domain|developer-domain/.test(e.errorDetail),
    )
    expect(domainErrors.length).toBe(3)
    expect(domainErrors[0].lineNumber).toBe(2) // docs domain in title
    expect(domainErrors[1].lineNumber).toBe(3) // help domain in shortTitle
    expect(domainErrors[2].lineNumber).toBe(4) // developer domain in intro
  })

  test('deprecated liquid syntax in frontmatter is detected', async () => {
    const markdown = [
      '---',
      'title: "{{ site.data.variables.product.product_name }}"',
      'intro: "Use {{ octicon-plus An icon }} here"',
      '---',
      '',
      'Clean content.',
    ].join('\n')

    const result = await markdownlint.promises.markdownlint({
      frontMatter: null,
      strings: { markdown },
      config: {
        'search-replace': searchReplaceConfig['search-replace'],
      },
      customRules: [searchReplace],
    })

    const errors = result.markdown || []

    // Should find deprecated syntax errors in frontmatter
    const deprecatedErrors = errors.filter(
      (e) => e.errorDetail && /site\.data|octicon/.test(e.errorDetail),
    )
    expect(deprecatedErrors.length).toBe(2)
    expect(deprecatedErrors[0].lineNumber).toBe(2) // site.data syntax
    expect(deprecatedErrors[1].lineNumber).toBe(3) // octicon syntax
  })
})

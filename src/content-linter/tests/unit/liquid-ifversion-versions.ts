import { afterAll, beforeAll, describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test'
import { liquidIfversionVersions } from '../../lib/linting-rules/liquid-ifversion-versions'
import { supported } from '@/versions/lib/enterprise-server-releases'

describe(liquidIfversionVersions.names.join(' - '), () => {
  const envVarValueBefore: string | undefined = process.env.ROOT

  beforeAll(() => {
    process.env.ROOT = 'src/fixtures/fixtures'
  })

  afterAll(() => {
    process.env.ROOT = envVarValueBefore
  })

  const placeholderAllVersionsFm = [
    '---',
    'title: "Hello"',
    'versions: ',
    '  ghec: "*"',
    '  ghes: "*"',
    '  fpt: "*"',
    '---',
  ]

  test('ifversion naming all possible shortnames in body', async () => {
    const markdown = [
      ...placeholderAllVersionsFm,
      '{% ifversion ghes or ghec or fpt %}{% endif %}',
      '{% ifversion fpt %}{% elsif ghec or fpt or ghes %}{% endif %}',
    ].join('\n')

    const result = await runRule(liquidIfversionVersions, {
      strings: { markdown },
    })
    const errors = result.markdown
    expect(errors.length).toBe(5)
    expect(errors.every((error) => error.ruleNames[0] === 'GHD022'))
  })

  test('ifversion naming all possible shortnames in front matter', async () => {
    const markdown = [
      '---',
      "title: '{% ifversion ghes or ghec or fpt %}Always{% endif %}'",
      'versions: ',
      '  ghec: "*"',
      '  ghes: "*"',
      '  fpt: "*"',
      '---',
      'All is well',
    ].join('\n')

    const fmOptions = { markdownlintOptions: { frontMatter: null } }
    const result = await runRule(liquidIfversionVersions, {
      strings: { markdown },
      ...fmOptions,
    })
    const errors = result.markdown
    expect(errors.length).toBe(2)
    expect(errors[0].ruleNames[0]).toBe('GHD022')
  })

  test('ifversion all shortnames and an oldest ghes', async () => {
    const markdown = [
      ...placeholderAllVersionsFm,
      `{% ifversion ghec or fpt or ghes >=${supported.at(-1)} %}{% endif %}`,
    ].join('\n')

    const result = await runRule(liquidIfversionVersions, {
      strings: { markdown },
    })
    const errors = result.markdown
    expect(errors.length).toBe(2)
    expect(errors[0].ruleNames[0]).toBe('GHD022')
  })

  test('ifversion all shortnames and an almost oldest ghes', async () => {
    // The oldest ghes remains excluded, so the ifversion tag still changes content.
    const markdown = [
      ...placeholderAllVersionsFm,
      `{% ifversion ghec or fpt or ghes >${supported.at(-1)} %}{% endif %}`,
    ].join('\n')

    const result = await runRule(liquidIfversionVersions, {
      strings: { markdown },
    })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('ifversion using feature based version with all versions', async () => {
    // features/them-and-all.yml covers all versions.
    const markdown = [...placeholderAllVersionsFm, `{% ifversion them-and-all %}{% endif %}`].join(
      '\n',
    )
    const result = await runRule(liquidIfversionVersions, {
      strings: { markdown },
    })
    const errors = result.markdown
    expect(errors.length).toBe(2)
    expect(errors[0].ruleNames[0]).toBe('GHD022')
  })

  test('ifversion using feature based version extended with shortname all versions', async () => {
    // features/volvo.yml contains fpt: "*" and ghec: "*".
    const markdown = [...placeholderAllVersionsFm, `{% ifversion volvo or ghes %}{% endif %}`].join(
      '\n',
    )
    const result = await runRule(liquidIfversionVersions, {
      strings: { markdown },
    })
    const errors = result.markdown
    expect(errors.length).toBe(2)
    expect(errors[0].ruleNames[0]).toBe('GHD022')
    expect(errors[0].errorDetail).toContain('applies to all versions')
  })

  test('ifversion using feature with a ghes range extended with ghes', async () => {
    // features/cloud-and-older-ghes.yml contains fpt: "*", ghec: "*", and ghes: "<3.20". The
    // bounded range never covers every GHES release, so only the plain ghes completes it.
    const markdown = [
      ...placeholderAllVersionsFm,
      `{% ifversion cloud-and-older-ghes or ghes %}{% endif %}`,
    ].join('\n')
    const result = await runRule(liquidIfversionVersions, {
      strings: { markdown },
    })
    const errors = result.markdown
    expect(errors.length).toBe(2)
    expect(errors[0].errorDetail).toContain('applies to all versions')
  })

  test('ifversion using feature with a ghes range completed by a ghes range', async () => {
    // features/cloud-and-older-ghes.yml contains ghes: "<3.20", so ghes >= 3.20 completes GHES.
    const markdown = [
      ...placeholderAllVersionsFm,
      `{% ifversion cloud-and-older-ghes or ghes >= 3.20 %}{% endif %}`,
    ].join('\n')
    const result = await runRule(liquidIfversionVersions, {
      strings: { markdown },
    })
    const errors = result.markdown
    expect(errors.length).toBe(2)
    expect(errors[0].errorDetail).toContain('applies to all versions')
  })

  test('ifversion using feature with a ghes range and a ghes upper bound', async () => {
    // Together the ranges cover every known release, but releases after 99.0 are missing.
    const markdown = [
      ...placeholderAllVersionsFm,
      `{% ifversion cloud-and-older-ghes or ghes >= 3.20 and ghes < 99.0 %}{% endif %}`,
    ].join('\n')
    const result = await runRule(liquidIfversionVersions, {
      strings: { markdown },
    })
    const errors = result.markdown
    expect(
      errors.filter((error) => error.errorDetail?.includes('applies to all versions')),
    ).toEqual([])
  })

  test.each(['3.20 - 99.0', '^3.20'])(
    'ifversion using feature with a ghes range and implicit upper bound %s',
    async (range) => {
      // These ranges have no < but still exclude future releases, such as 100.0 or 4.0.
      const markdown = [
        ...placeholderAllVersionsFm,
        `{% ifversion cloud-and-older-ghes or ghes ${range} %}{% endif %}`,
      ].join('\n')
      const result = await runRule(liquidIfversionVersions, {
        strings: { markdown },
      })
      const errors = result.markdown
      expect(
        errors.filter((error) => error.errorDetail?.includes('applies to all versions')),
      ).toEqual([])
    },
  )

  test('ifversion using feature with a ghes upper bound does not cover all versions', async () => {
    // features/cloud-and-capped-ghes.yml contains fpt: "*", ghec: "*", and ghes: "<99.0". The
    // range covers every current release but excludes future ones, so it is not all versions.
    const markdown = [
      ...placeholderAllVersionsFm,
      `{% ifversion cloud-and-capped-ghes %}{% endif %}`,
    ].join('\n')
    const result = await runRule(liquidIfversionVersions, {
      strings: { markdown },
    })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('ifversion using not negates only the next version', async () => {
    const markdown = [
      ...placeholderAllVersionsFm,
      `{% ifversion ghes or fpt or not ghec %}{% endif %}`,
      `{% ifversion not fpt or ghec %}{% endif %}`,
    ].join('\n')

    const result = await runRule(liquidIfversionVersions, {
      strings: { markdown },
    })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('ifversion using not that covers all versions', async () => {
    const markdown = [
      ...placeholderAllVersionsFm,
      `{% ifversion not ghec or ghec %}{% endif %}`,
    ].join('\n')

    const result = await runRule(liquidIfversionVersions, {
      strings: { markdown },
    })
    const errors = result.markdown
    expect(errors.length).toBe(2)
    expect(errors[0].errorDetail).toContain('applies to all versions')
  })

  test('ifversion using not drops products missing from frontmatter', async () => {
    const markdown = [
      '---',
      'title: "Hello"',
      'versions:',
      '  fpt: "*"',
      '  ghec: "*"',
      '---',
      `{% ifversion not fpt or ghec %}{% endif %}`,
    ].join('\n')

    const result = await runRule(liquidIfversionVersions, {
      strings: { markdown },
    })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].fixInfo?.insertText).toBe('ifversion ghec')
  })

  test('does not crash with nested if blocks inside ifversion', async () => {
    const markdown = [
      ...placeholderAllVersionsFm,
      '{% ifversion ghec %}',
      '  {% if "foo" %}',
      '    {% if "bar" %}nested{% endif %}',
      '  {% endif %}',
      '{% endif %}',
    ].join('\n')

    const result = await runRule(liquidIfversionVersions, {
      strings: { markdown },
    })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('does not crash with nested if blocks at top level', async () => {
    const markdown = [
      ...placeholderAllVersionsFm,
      '{% if "foo" %}',
      '  {% if "bar" %}...{% endif %}',
      '{% endif %}',
    ].join('\n')

    const result = await runRule(liquidIfversionVersions, {
      strings: { markdown },
    })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('does not crash with ifversion nested inside if blocks', async () => {
    const markdown = [
      ...placeholderAllVersionsFm,
      '{% if "foo" %}',
      '  {% ifversion ghec %}',
      '  {% endif %}',
      '{% endif %}',
    ].join('\n')

    const result = await runRule(liquidIfversionVersions, {
      strings: { markdown },
    })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('does not crash with mixed if/ifversion nesting and else branches', async () => {
    const markdown = [
      ...placeholderAllVersionsFm,
      '{% if "foo" %}',
      '  {% ifversion ghec %}',
      '    {% if "bar" %}nested{% endif %}',
      '  {% else %}',
      '    text',
      '  {% endif %}',
      '{% else %}',
      '  top-level else',
      '{% endif %}',
    ].join('\n')

    const result = await runRule(liquidIfversionVersions, {
      strings: { markdown },
    })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
})

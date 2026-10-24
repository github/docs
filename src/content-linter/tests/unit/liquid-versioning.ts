import path from 'path'

import { afterAll, beforeAll, describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test'
import { liquidIfTags, liquidIfVersionTags } from '../../lib/linting-rules/liquid-versioning'
import { nextNext } from '@/versions/lib/enterprise-server-releases'

describe(liquidIfTags.names.join(' - '), () => {
  const envVarValueBefore = process.env.ROOT

  beforeAll(() => {
    process.env.ROOT = path.join('src', 'fixtures', 'fixtures')
  })

  afterAll(() => {
    process.env.ROOT = envVarValueBefore
  })

  test('if tags with version names fail', async () => {
    const markdown = [
      '{% if ghes %}',
      // volvo is a feature-based version in fixture data.
      '{% if volvo %}',
      '{% if something and ghes %}',
    ]
    const result = await runRule(liquidIfTags, { strings: { markdown: markdown.join('\n') } })
    const errors = result.markdown
    expect(errors.length).toBe(markdown.length)
  })
  test('if tags without version names pass', async () => {
    const markdown = ['{% if mona %}', '{% if product.type %}'].join('\n')
    const result = await runRule(liquidIfTags, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
})

describe(liquidIfVersionTags.names.join(' - '), () => {
  const envVarValueBefore = process.env.ROOT

  beforeAll(() => {
    process.env.ROOT = 'src/fixtures/fixtures'
  })

  afterAll(() => {
    process.env.ROOT = envVarValueBefore
  })

  test('ifversion tags with invalid args fails', async () => {
    const markdown = [
      '{% ifversion mona %}',
      '{% ifversion ghec > 3.7 %}',
      '{% ifversion ghes !== 3.7 %}',
      '{% ifversion ghec === 3.7 %}',
      // 2.9 falls outside supported GHES releases.
      '{% ifversion ghes < 2.9 %}',
      '{% ifversion ghec or ifversion fpt %}',
      // no ghec is an invalid spelling of not ghec.
      '{% ifversion no ghec %}',
    ]
    const result = await runRule(liquidIfVersionTags, {
      strings: { markdown: markdown.join('\n') },
    })
    const errors = result.markdown
    expect(errors.length).toBe(markdown.length)
  })

  test('elsif tags with invalid args fails', async () => {
    const markdown = [
      '{% ifversion ghec %}',
      '{% elsif ghec > 3.7 %}',
      '{% elsif neverheardof %}',
      '{% endif %}',
    ]
    const result = await runRule(liquidIfVersionTags, {
      strings: { markdown: markdown.join('\n') },
    })
    const errors = result.markdown
    expect(errors.length).toBe(2)
    expect(errors.every((error) => error.errorContext.includes('elsif'))).toBe(true)
  })

  test('elsif tags inside regular if and unless blocks pass', async () => {
    const markdown = [
      '{% if entry.tier %}a{% elsif entry.threshold %}b{% endif %}',
      "{% if model.name == 'A' %}x{% elsif model.name == 'Gemini' %}y{% endif %}",
      "{% unless model.name == 'A' %}x{% elsif model.name == 'Gemini' %}y{% endunless %}",
    ].join('\n')
    const result = await runRule(liquidIfVersionTags, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('elsif tags of ifversion blocks nested in regular if blocks fail', async () => {
    const markdown =
      '{% if x %}{% ifversion fpt %}{% elsif neverheardof %}{% endif %}{% elsif y %}{% endif %}'
    const result = await runRule(liquidIfVersionTags, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].errorDetail).toContain('neverheardof')
  })

  test('tags inside comments do not change which elsif tags are checked', async () => {
    const markdown = [
      '{% ifversion fpt %}{% comment %}{% if x %}{% endcomment %}{% elsif neverheardof %}{% endif %}',
      "{% if model.name == 'A' %}{% comment %}{% endif %}{% endcomment %}{% elsif model.name == 'Gemini' %}{% endif %}",
    ].join('\n')
    const result = await runRule(liquidIfVersionTags, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].errorDetail).toContain('neverheardof')
  })

  test('clauses with more than three words fail', async () => {
    const markdown = [
      `{% ifversion fpt or ghec ghes > ${nextNext} %}`,
      `{% ifversion ghes > ${nextNext} ghec %}`,
      `{% ifversion not ghes > ${nextNext} %}`,
    ]
    const result = await runRule(liquidIfVersionTags, {
      strings: { markdown: markdown.join('\n') },
    })
    const errors = result.markdown
    expect(errors.length).toBe(markdown.length)
    expect(errors.every((error) => error.errorDetail.includes('is not a valid conditional'))).toBe(
      true,
    )
  })

  test('conditional without quote args pass', async () => {
    const markdown = [
      '{% ifversion fpt %}',
      `{% ifversion ghes != ${nextNext} %}`,
      `{% ifversion ghes < ${nextNext} %}`,
      '{% ifversion not ghec %}',
    ].join('\n')
    const result = await runRule(liquidIfVersionTags, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('ifversion tags with not keyword and feature-based versions fail', async () => {
    const markdown = [
      '{% ifversion not volvo %}',
      '{% ifversion fpt or not volvo %}',
      '{% ifversion not them-and-all %}',
    ]
    const result = await runRule(liquidIfVersionTags, {
      strings: { markdown: markdown.join('\n') },
    })
    const errors = result.markdown
    expect(errors.length).toBe(markdown.length)
    expect(errors.every((error) => error.errorDetail.includes('feature-based version'))).toBe(true)
  })

  test('ifversion tags with not keyword and short versions pass', async () => {
    const markdown = [
      '{% ifversion not ghec %}',
      '{% ifversion fpt or not ghes %}',
      '{% ifversion not fpt %}',
    ].join('\n')
    const result = await runRule(liquidIfVersionTags, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
})

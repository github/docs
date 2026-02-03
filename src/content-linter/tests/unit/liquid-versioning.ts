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
      // Valid test fixture feature name
      '{% if volvo %}',
      // None of the args should contain a version name
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
      // < 2.9 is not in the currently supported list
      '{% ifversion ghes < 2.9 %}',
      // Incorrect syntax
      '{% ifversion ghec or ifversion fpt %}',
      // Typo - should be not ghec
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

import path from 'path'

import { runRule } from '../../lib/init-test.js'
import { liquidIfTags, liquidIfVersionTags } from '../../lib/linting-rules/liquid-versioning.js'
import { nextNext } from '#src/versions/lib/enterprise-server-releases.js'

describe(liquidIfTags.names.join(' - '), () => {
  const envVarValueBefore = process.env.ROOT

  beforeAll(() => {
    process.env.ROOT = path.join('tests', 'fixtures')
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
    process.env.ROOT = path.join('tests', 'fixtures')
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
})

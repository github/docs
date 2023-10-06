import path from 'path'

import { runRule } from '../../lib/init-test.js'
import {
  liquidDataReferencesDefined,
  liquidDataTagFormat,
} from '../../lib/linting-rules/liquid-data-tags.js'

describe(liquidDataReferencesDefined.names.join(' - '), () => {
  const envVarValueBefore = process.env.ROOT

  beforeAll(() => {
    process.env.ROOT = path.join('tests', 'fixtures')
  })

  afterAll(() => {
    process.env.ROOT = envVarValueBefore
  })

  test('data references that do not exist fails', async () => {
    const markdown = [
      'Hello {% data variables.empty %}',
      '{% data variables.no-file %}',
      // Variables even when they exist can't be nested
      '{% data variables.location.foo.bar %}',
      '{% data resuables.gated-features.empty %}',
      '{% data resuables.no-file %}',
      '{% data ui.not-there %}',
      '{% data ui.nested.nested.not-there %}',
      '{% data some.random.path %}',
    ]
    const result = await runRule(liquidDataReferencesDefined, {
      strings: { markdown: markdown.join('\n') },
    })
    const errors = result.markdown
    expect(errors.length).toBe(markdown.length)
    expect(errors[0].errorRange).toEqual([7, 26])
  })

  test('data references that exist passes', async () => {
    const markdown = [
      '{% data reusables.enterprise_deprecation.version_was_deprecated %}',
      '{% data variables.location.product_location %}',
      '{% data ui.header.notices.release_candidate %}',
    ].join('\n')
    const result = await runRule(liquidDataReferencesDefined, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('data tags with incorrect formatting fail', async () => {
    const markdown = [
      '{% data ui.header.notices release_candidate %}',
      '{% indented_data_reference ui.header.notices.release_candidate  space=3 %}',
      '{% data %}',
      '{% indented_data_reference %}',
    ]
    const result = await runRule(liquidDataTagFormat, {
      strings: { markdown: markdown.join('\n') },
    })
    const errors = result.markdown
    expect(errors.length).toBe(markdown.length)
  })

  test('data tags with correct formatting pass', async () => {
    const markdown = [
      '{% data  ui.header.notices.release_candidate  %}',
      '{% indented_data_reference ui.header.notices.release_candidate  spaces=3 %}',
    ]
    const result = await runRule(liquidDataTagFormat, {
      strings: { markdown: markdown.join('\n') },
    })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
})

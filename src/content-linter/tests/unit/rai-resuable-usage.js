import { afterAll, beforeAll, describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test.js'
import { raiReusableUsage } from '../../lib/linting-rules/rai-reusable-usage.js'

describe(raiReusableUsage.names.join(' - '), () => {
  const envVarValueBefore = process.env.ROOT

  beforeAll(() => {
    process.env.ROOT = 'src/fixtures/fixtures'
  })

  afterAll(() => {
    process.env.ROOT = envVarValueBefore
  })

  test('a non-RAI content article referencing non-RAI data succeeds', async () => {
    const markdown = [
      '---',
      'title: article',
      '---',
      '',
      '{% data reusables.injectables.multiple_numbers %}',
    ].join('\n')
    const result = await runRule(raiReusableUsage, {
      strings: { markdown },
    })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('an RAI content article referencing non-RAI data fails', async () => {
    const markdown = [
      '---',
      'title: article',
      'type: rai',
      '---',
      '',
      '{% data reusables.injectables.multiple_numbers %}',
    ].join('\n')
    const result = await runRule(raiReusableUsage, {
      strings: { markdown },
    })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(6)
    expect(errors[0].errorRange).toEqual([1, 49])
  })

  test('an RAI content article referencing RAI data succeeds', async () => {
    const markdown = [
      '---',
      'title: article',
      'type: rai',
      '---',
      '',
      '{% data reusables.rai.note %}',
    ].join('\n')
    const result = await runRule(raiReusableUsage, {
      strings: { markdown },
    })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('a non-RAI data file referencing non-RAI data succeeds', async () => {
    const TEST_FILE = 'src/fixtures/fixtures/data/reusables/nested_reusables/nested.md'
    const result = await runRule(raiReusableUsage, {
      files: [TEST_FILE],
    })
    const errors = result[TEST_FILE]
    expect(errors.length).toBe(0)
  })

  test('an RAI data file referencing RAI data succeeds', async () => {
    const TEST_FILE = 'src/fixtures/fixtures/data/reusables/rai/referencing_rai_data.md'
    const result = await runRule(raiReusableUsage, {
      files: [TEST_FILE],
    })
    const errors = result[TEST_FILE]
    expect(errors.length).toBe(0)
  })

  test('an RAI data file referencing non-RAI data fails', async () => {
    const TEST_FILE = 'src/fixtures/fixtures/data/reusables/rai/not_referencing_this_directory.md'
    const result = await runRule(raiReusableUsage, {
      files: [TEST_FILE],
    })
    const errors = result[TEST_FILE]
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(3)
    expect(errors[0].errorRange).toEqual([1, 41])
  })

  test('an RAI data file referencing data variables succeeds', async () => {
    const TEST_FILE = 'src/fixtures/fixtures/data/reusables/rai/referencing_variable.md'
    const result = await runRule(raiReusableUsage, {
      files: [TEST_FILE],
    })
    const errors = result[TEST_FILE]
    expect(errors.length).toBe(0)
  })
})

import path from 'path'

import { runRule } from '../../lib/init-test.js'
import { raiReusableUsage } from '../../lib/linting-rules/rai-reusable-usage.js'
import { expect } from '@jest/globals'

describe(raiReusableUsage.names.join(' - '), () => {
  const envVarValueBefore = process.env.ROOT

  beforeAll(() => {
    process.env.ROOT = path.join('src', 'fixtures', 'fixtures')
  })

  afterAll(() => {
    process.env.ROOT = envVarValueBefore
  })

  test('a non-rai content article referencing non-rai data succeeds', async () => {
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

  test('an rai content article referencing non-rai data fails', async () => {
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

  test('an rai content article referencing rai data succeeds', async () => {
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

  test('a non-rai data file referencing non-rai data succeeds', async () => {
    const TEST_FILE = 'src/fixtures/fixtures/data/reusables/nested_reusables/nested.md'
    const result = await runRule(raiReusableUsage, {
      files: [TEST_FILE],
    })
    const errors = result[TEST_FILE]
    expect(errors.length).toBe(0)
  })

  test('an rai data file referencing rai data succeeds', async () => {
    const TEST_FILE = 'src/fixtures/fixtures/data/reusables/rai/referencing_rai_data.md'
    const result = await runRule(raiReusableUsage, {
      files: [TEST_FILE],
    })
    const errors = result[TEST_FILE]
    expect(errors.length).toBe(0)
  })

  test('an rai data file referencing non-rai data fails', async () => {
    const TEST_FILE = 'src/fixtures/fixtures/data/reusables/rai/not_referencing_this_directory.md'
    const result = await runRule(raiReusableUsage, {
      files: [TEST_FILE],
    })
    const errors = result[TEST_FILE]
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(3)
    expect(errors[0].errorRange).toEqual([1, 41])
  })

  test('an rai data file referencing data variables succeeds', async () => {
    const TEST_FILE = 'src/fixtures/fixtures/data/reusables/rai/referencing_variable.md'
    const result = await runRule(raiReusableUsage, {
      files: [TEST_FILE],
    })
    const errors = result[TEST_FILE]
    expect(errors.length).toBe(0)
  })
})

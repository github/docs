import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test'
import { tableLiquidVersioning } from '../../lib/linting-rules/table-liquid-versioning'

const FIXTURE_FILEPATH = 'src/content-linter/tests/fixtures/tables.md'

describe(tableLiquidVersioning.names.join(' - '), () => {
  test('non-early access file with early access references fails', async (): Promise<void> => {
    const result = await runRule(tableLiquidVersioning, {
      strings: undefined,
      files: [FIXTURE_FILEPATH],
      ruleConfig: true,
    })
    const errors = result[FIXTURE_FILEPATH]
    expect(errors.length).toBe(11)
    const lineNumbers: number[] = errors.map((error) => error.lineNumber)
    const expectedErrorLines: number[] = [38, 40, 43, 44, 51, 53, 54, 55, 57, 58, 59]
    expect(JSON.stringify(lineNumbers)).toEqual(JSON.stringify(expectedErrorLines))
  })
})

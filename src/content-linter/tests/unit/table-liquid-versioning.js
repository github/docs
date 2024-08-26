import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test.js'
import { tableLiquidVersioning } from '../../lib/linting-rules/table-liquid-versioning.js'

const FIXTURE_FILEPATH = 'src/content-linter/tests/fixtures/tables.md'

describe(tableLiquidVersioning.names.join(' - '), () => {
  test('non-early access file with early access references fails', async () => {
    const result = await runRule(tableLiquidVersioning, { files: [FIXTURE_FILEPATH] })
    const errors = result[FIXTURE_FILEPATH]
    expect(errors.length).toBe(11)
    const lineNumbers = errors.map((error) => error.lineNumber)
    const expectedErrorLines = [38, 40, 43, 44, 51, 53, 54, 55, 57, 58, 59]
    expect(JSON.stringify(lineNumbers)).toEqual(JSON.stringify(expectedErrorLines))
  })
})

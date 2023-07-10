import { jest } from '@jest/globals'

import { runRule } from '../../lib/init-test.js'
import { codeFenceUsesCopyDirective } from '../../lib/linting-rules/code-fence-uses-copy-directive.js'

jest.setTimeout(60 * 1000)

const fixtureFilePath = 'src/content-linter/tests/fixtures/code-fence-uses-copy-directive.md'
const result = await runRule(codeFenceUsesCopyDirective, fixtureFilePath)
const errors = result[fixtureFilePath]

describe(codeFenceUsesCopyDirective.names.join(' - '), () => {
  test('code fence that includes both output and command and no copy directive passes', () => {
    expect(errors.map((error) => error.lineNumber).includes(5)).toBe(false)
  })
  test('code fence with only commands and no copy directive fails', () => {
    expect(errors.map((error) => error.lineNumber).includes(12)).toBe(true)
  })
  test('code fence with only $ and no copy directive passes', () => {
    expect(errors.map((error) => error.lineNumber).includes(19)).toBe(false)
  })
  test('code fence with command and output and copy directive should fail', () => {
    expect(errors.map((error) => error.lineNumber).includes(26)).toBe(true)
  })
  test('code fence with copy directive and command passes', () => {
    expect(errors.map((error) => error.lineNumber).includes(33)).toBe(false)
  })
  test('errors only occur on expected lines', () => {
    expect(errors.length).toBe(2)
  })
})

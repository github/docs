import { describe, test, expect, vi } from 'vitest'
import { shouldIncludeRule } from '../../scripts/lint-content'

// Mock the get-rules module to provide test data for rule definitions
vi.mock('../../lib/helpers/get-rules', () => ({
  allRules: [
    {
      names: ['MD001', 'heading-increment'],
      description: 'Heading levels should only increment by one level at a time',
    },
    {
      names: ['MD002', 'first-heading-h1'],
      description: 'First heading should be a top level heading',
    },
  ],
  customRules: [
    {
      names: ['GHD047', 'table-column-integrity'],
      description: 'Tables must have consistent column counts across all rows',
    },
    {
      names: ['GHD001', 'link-punctuation'],
      description: 'Internal link titles must not contain punctuation',
    },
  ],
  allConfig: {},
}))

describe('shouldIncludeRule', () => {
  test('includes rule by long name', () => {
    expect(shouldIncludeRule('heading-increment', ['heading-increment'])).toBe(true)
    expect(shouldIncludeRule('table-column-integrity', ['table-column-integrity'])).toBe(true)
  })

  test('includes built-in rule by short code', () => {
    expect(shouldIncludeRule('heading-increment', ['MD001'])).toBe(true)
    expect(shouldIncludeRule('first-heading-h1', ['MD002'])).toBe(true)
  })

  test('includes custom rule by short code', () => {
    expect(shouldIncludeRule('table-column-integrity', ['GHD047'])).toBe(true)
    expect(shouldIncludeRule('link-punctuation', ['GHD001'])).toBe(true)
  })

  test('excludes rule not in list', () => {
    expect(shouldIncludeRule('heading-increment', ['MD002'])).toBe(false)
    expect(shouldIncludeRule('table-column-integrity', ['GHD001'])).toBe(false)
  })

  test('handles multiple rules', () => {
    const runRules = ['MD001', 'GHD047', 'some-other-rule']
    expect(shouldIncludeRule('heading-increment', runRules)).toBe(true)
    expect(shouldIncludeRule('table-column-integrity', runRules)).toBe(true)
    expect(shouldIncludeRule('first-heading-h1', runRules)).toBe(false)
  })

  test('handles unknown rules gracefully', () => {
    expect(shouldIncludeRule('non-existent-rule', ['MD001'])).toBe(false)
  })
})

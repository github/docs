import { describe, test, expect, vi } from 'vitest'
import { shouldIncludeRule } from '../../scripts/lint-content.js'

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
      names: ['GHD053', 'header-content-requirement'],
      description: 'Headers must have content below them',
    },
    {
      names: ['GHD030', 'code-fence-line-length'],
      description: 'Code fence content should not exceed line length limit',
    },
  ],
  allConfig: {},
}))

describe('shouldIncludeRule', () => {
  test('includes rule by long name', () => {
    expect(shouldIncludeRule('heading-increment', ['heading-increment'])).toBe(true)
    expect(shouldIncludeRule('header-content-requirement', ['header-content-requirement'])).toBe(
      true,
    )
  })

  test('includes built-in rule by short code', () => {
    expect(shouldIncludeRule('heading-increment', ['MD001'])).toBe(true)
    expect(shouldIncludeRule('first-heading-h1', ['MD002'])).toBe(true)
  })

  test('includes custom rule by short code', () => {
    expect(shouldIncludeRule('header-content-requirement', ['GHD053'])).toBe(true)
    expect(shouldIncludeRule('code-fence-line-length', ['GHD030'])).toBe(true)
  })

  test('excludes rule not in list', () => {
    expect(shouldIncludeRule('heading-increment', ['MD002'])).toBe(false)
    expect(shouldIncludeRule('header-content-requirement', ['GHD030'])).toBe(false)
  })

  test('handles multiple rules', () => {
    const runRules = ['MD001', 'GHD053', 'some-other-rule']
    expect(shouldIncludeRule('heading-increment', runRules)).toBe(true)
    expect(shouldIncludeRule('header-content-requirement', runRules)).toBe(true)
    expect(shouldIncludeRule('first-heading-h1', runRules)).toBe(false)
  })

  test('handles unknown rules gracefully', () => {
    expect(shouldIncludeRule('non-existent-rule', ['MD001'])).toBe(false)
  })
})

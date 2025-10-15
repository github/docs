import { describe, expect, test } from 'vitest'
import { octiconAriaLabels } from '../../lib/linting-rules/octicon-aria-labels'

interface ErrorInfo {
  lineNumber: number
  detail?: string
  context?: string
  range?: [number, number]
  fixInfo?: any // Matches RuleErrorCallback signature - fixInfo structure varies by rule
}

describe('octicon-aria-labels', () => {
  const rule = octiconAriaLabels

  // Helper to create onError callback that captures errors
  function createErrorCollector() {
    const errors: ErrorInfo[] = []
    // Using any because the actual rule implementation calls onError with an object,
    // not individual parameters as defined in RuleErrorCallback
    const onError = (errorInfo: any) => {
      errors.push(errorInfo)
    }
    return { errors, onError }
  }

  test('detects octicon without aria-label', () => {
    const { errors, onError } = createErrorCollector()

    const content = ['This is a test with an octicon:', '{% octicon "alert" %}', 'Some more text.']

    rule.function({ name: 'test.md', lines: content, frontMatterLines: [] }, onError)

    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(2)
    expect(errors[0].detail).toContain('aria-label=alert')
    expect(errors[0].fixInfo.insertText).toContain('aria-label="alert"')
  })

  test('ignores octicons with aria-label', () => {
    const { errors, onError } = createErrorCollector()

    const content = [
      'This is a test with a proper octicon:',
      '{% octicon "alert" aria-label="alert" %}',
      'Some more text.',
    ]

    rule.function({ name: 'test.md', lines: content, frontMatterLines: [] }, onError)

    expect(errors.length).toBe(0)
  })

  test('detects multiple octicons without aria-label', () => {
    const { errors, onError } = createErrorCollector()

    const content = [
      'This is a test with multiple octicons:',
      '{% octicon "alert" %}',
      'Some text in between.',
      '{% octicon "check" %}',
      'More text.',
    ]

    rule.function({ name: 'test.md', lines: content, frontMatterLines: [] }, onError)

    expect(errors.length).toBe(2)
    expect(errors[0].lineNumber).toBe(2)
    expect(errors[0].detail).toContain('aria-label=alert')
    expect(errors[1].lineNumber).toBe(4)
    expect(errors[1].detail).toContain('aria-label=check')
  })

  test('ignores non-octicon liquid tags', () => {
    const { errors, onError } = createErrorCollector()

    const content = [
      'This is a test with non-octicon tags:',
      '{% data foo.bar %}',
      '{% ifversion fpt %}',
      'Some text.',
      '{% endif %}',
    ]

    rule.function({ name: 'test.md', lines: content, frontMatterLines: [] }, onError)

    expect(errors.length).toBe(0)
  })

  test('suggests correct fix for octicon with other attributes', () => {
    const { errors, onError } = createErrorCollector()

    const content = [
      'This is a test with an octicon with other attributes:',
      '{% octicon "plus" aria-hidden="true" class="foo" %}',
      'Some more text.',
    ]

    rule.function({ name: 'test.md', lines: content, frontMatterLines: [] }, onError)

    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(2)
    expect(errors[0].fixInfo.insertText).toContain('aria-label="plus"')
    expect(errors[0].fixInfo.insertText).toContain('aria-hidden="true"')
    expect(errors[0].fixInfo.insertText).toContain('class="foo"')
  })

  test('handles octicons with unusual spacing', () => {
    const { errors, onError } = createErrorCollector()

    const content = [
      'This is a test with unusual spacing:',
      '{%  octicon   "x"    %}',
      'Some more text.',
    ]

    rule.function({ name: 'test.md', lines: content, frontMatterLines: [] }, onError)

    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(2)
    expect(errors[0].detail).toContain('aria-label=x')
  })

  test('handles octicons split across multiple lines', () => {
    const { errors, onError } = createErrorCollector()

    const content = [
      'This is a test with a multi-line octicon:',
      '{% octicon "chevron-down"',
      '   class="dropdown-menu-icon"',
      '%}',
      'Some more text.',
    ]

    rule.function({ name: 'test.md', lines: content, frontMatterLines: [] }, onError)

    expect(errors.length).toBe(1)
    expect(errors[0].detail).toContain('aria-label=chevron-down')
  })

  test('falls back to "icon" when octicon name cannot be determined', () => {
    const { errors, onError } = createErrorCollector()

    const content = [
      'This is a test with a malformed octicon:',
      '{% octicon variable %}',
      'Some more text.',
    ]

    rule.function({ name: 'test.md', lines: content, frontMatterLines: [] }, onError)

    expect(errors.length).toBe(1)
    expect(errors[0].detail).toContain('aria-label=icon')
    expect(errors[0].fixInfo.insertText).toContain('aria-label="icon"')
  })
})

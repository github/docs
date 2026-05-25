import { describe, expect, test } from 'vitest'

import { normalizeDocsUrls } from '../normalize-docs-urls'

describe('normalizeDocsUrls', () => {
  test('collapses double slash after versioned docs.github.com URLs', () => {
    const input =
      'See <a href="https://docs.github.com/enterprise-cloud@latest//rest/using-the-rest-api">docs</a>'
    const expected =
      'See <a href="https://docs.github.com/enterprise-cloud@latest/rest/using-the-rest-api">docs</a>'
    expect(normalizeDocsUrls(input)).toBe(expected)
  })

  test('handles multiple double-slash occurrences in one string', () => {
    const input =
      'See https://docs.github.com/enterprise-cloud@latest//rest and https://docs.github.com/enterprise-cloud@latest//graphql'
    const expected =
      'See https://docs.github.com/enterprise-cloud@latest/rest and https://docs.github.com/enterprise-cloud@latest/graphql'
    expect(normalizeDocsUrls(input)).toBe(expected)
  })

  test('does not modify URLs without a double slash', () => {
    const input =
      'See <a href="https://docs.github.com/enterprise-cloud@latest/rest/overview">docs</a>'
    expect(normalizeDocsUrls(input)).toBe(input)
  })

  test('does not modify double slashes in non-docs URLs', () => {
    const input = 'See https://example.com//path'
    expect(normalizeDocsUrls(input)).toBe(input)
  })

  test('does not modify protocol double slashes', () => {
    const input = 'See https://docs.github.com/enterprise-cloud@latest/rest'
    expect(normalizeDocsUrls(input)).toBe(input)
  })
})

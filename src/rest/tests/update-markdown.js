import { describe, expect, test } from 'vitest'
import { getGHESVersionFromFilepath } from '../scripts/utils/update-markdown'

describe('GHES version extraction for update-markdown', () => {
  test('extracts GHES version from file path with date suffix', () => {
    const filePath = 'src/rest/data/ghes-3.10-2022-11-28/schema.json'
    expect(getGHESVersionFromFilepath(filePath)).toBe('3.10')
  })

  test('extracts GHES version from file path without date suffix', () => {
    const filePath = 'src/rest/data/ghes-3.6/schema.json'
    expect(getGHESVersionFromFilepath(filePath)).toBe('3.6')
  })

  test('returns null for non-GHES file paths', () => {
    expect(getGHESVersionFromFilepath('src/rest/data/ghae/schema.json')).toBeNull()
    expect(getGHESVersionFromFilepath('src/rest/data/fpt-2022-11-28/schema.json')).toBeNull()
    expect(getGHESVersionFromFilepath('src/rest/data/ghec-2022-11-28/schema.json')).toBeNull()
  })

  test('handles various GHES version formats', () => {
    expect(getGHESVersionFromFilepath('src/rest/data/ghes-2.22/schema.json')).toBe('2.22')
    expect(getGHESVersionFromFilepath('src/rest/data/ghes-3.0-2022-01-01/schema.json')).toBe('3.0')
    expect(getGHESVersionFromFilepath('src/rest/data/ghes-3.15-2023-05-15/schema.json')).toBe(
      '3.15',
    )
  })

  test('returns null for malformed GHES paths', () => {
    expect(getGHESVersionFromFilepath('src/rest/data/ghes-/schema.json')).toBeNull()
    expect(getGHESVersionFromFilepath('src/rest/data/ghes-abc/schema.json')).toBeNull()
    expect(getGHESVersionFromFilepath('src/rest/data/ghes/schema.json')).toBeNull()
  })

  test('works with different path separators and nested paths', () => {
    const windowsPath = 'src\\rest\\data\\ghes-3.10-2022-11-28\\schema.json'
    expect(getGHESVersionFromFilepath(windowsPath)).toBe('3.10')

    const nestedPath = 'some/deep/path/src/rest/data/ghes-3.5-2021-12-31/nested/schema.json'
    expect(getGHESVersionFromFilepath(nestedPath)).toBe('3.5')
  })

  test('demonstrates the original bug scenario', () => {
    // This test demonstrates the bug described in the issue
    // where ghes-3.10 would incorrectly match deprecated version 3.1
    const filePath = 'src/rest/data/ghes-3.10-2022-11-28/schema.json'
    const extractedVersion = getGHESVersionFromFilepath(filePath)

    // Mock deprecated versions array like in the actual code
    const deprecated = ['3.0', '3.1', '3.2', '2.22', '2.21']

    expect(extractedVersion).toBe('3.10')
    // This should be false - 3.10 is NOT in the deprecated list
    expect(deprecated.includes(extractedVersion)).toBe(false)

    // The old buggy logic would have incorrectly flagged this as deprecated
    // because it would find '3.1' as a substring in the path
  })
})

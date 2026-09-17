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
    // The old substring match found '3.1' inside 'ghes-3.10' and wrongly
    // treated 3.10 as deprecated.
    const filePath = 'src/rest/data/ghes-3.10-2022-11-28/schema.json'
    const extractedVersion = getGHESVersionFromFilepath(filePath)

    const deprecated = ['3.0', '3.1', '3.2', '2.22', '2.21']

    expect(extractedVersion).toBe('3.10')
    if (extractedVersion) {
      expect(deprecated.includes(extractedVersion)).toBe(false)
    }
  })
})

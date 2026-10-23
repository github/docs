import { describe, expect, test } from 'vitest'

import { isLanguageInArchivedVersion } from '@/archives/lib/archived-languages'

describe('isLanguageInArchivedVersion', () => {
  test('English exists in every archived version', () => {
    expect(isLanguageInArchivedVersion('en', '2.13')).toBe(true)
    expect(isLanguageInArchivedVersion('en', '3.0')).toBe(true)
  })

  test('languages added in 3.3 are missing from 3.0 through 3.2', () => {
    for (const language of ['zh', 'ru', 'fr', 'ko', 'de']) {
      expect(isLanguageInArchivedVersion(language, '3.0')).toBe(false)
      expect(isLanguageInArchivedVersion(language, '3.2')).toBe(false)
      expect(isLanguageInArchivedVersion(language, '3.3')).toBe(true)
      expect(isLanguageInArchivedVersion(language, '3.17')).toBe(true)
    }
  })

  test('languages added in 3.0 exist from 3.0 on', () => {
    for (const language of ['es', 'ja', 'pt']) {
      expect(isLanguageInArchivedVersion(language, '3.0')).toBe(true)
      expect(isLanguageInArchivedVersion(language, '3.2')).toBe(true)
    }
  })
})

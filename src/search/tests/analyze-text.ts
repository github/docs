import { describe, expect, test } from 'vitest'

import { languageKeys } from '@/languages/lib/languages-server'
import { getLanguagesToAnalyze } from '@/search/scripts/analyze-text'

describe('getLanguagesToAnalyze', () => {
  test('defaults to English', () => {
    expect(getLanguagesToAnalyze({})).toEqual(['en'])
  })

  test('uses the requested language', () => {
    expect(getLanguagesToAnalyze({ language: 'ja' })).toEqual(['ja'])
  })

  test('excludes the requested language', () => {
    expect(getLanguagesToAnalyze({ notLanguage: 'en' })).toEqual(
      languageKeys.filter((languageKey) => languageKey !== 'en'),
    )
  })

  test('rejects language and notLanguage together', () => {
    expect(() => getLanguagesToAnalyze({ language: 'en', notLanguage: 'ja' })).toThrow(
      "Can't combine --language and --not-language",
    )
  })
})

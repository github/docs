import { afterEach, describe, expect, test, vi } from 'vitest'

import { languageKeys } from '@/languages/lib/languages-server'
import { getIndexName, getLanguagesToAnalyze } from '@/search/scripts/analyze-text'
import { allVersions } from '@/versions/lib/all-versions'

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

describe('getIndexName', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
  })

  test('maps dotcom to the fpt general search index', () => {
    expect(getIndexName('dotcom', 'en')).toBe('tests_github-docs_general-search_fpt_en')
  })

  test('uses the ghec general search index', () => {
    expect(getIndexName('ghec', 'en')).toBe('tests_github-docs_general-search_ghec_en')
  })

  test('uses the release in GHES general search index names', () => {
    const ghes = Object.values(allVersions).find((info) => info.hasNumberedReleases)!
    const versionKey = `${ghes.miscBaseName}${ghes.currentRelease}`
    expect(getIndexName(versionKey, 'en')).toBe(`tests_github-docs_general-search_${versionKey}_en`)
  })

  test('adds one underscore after the index prefix', () => {
    vi.stubEnv('NODE_ENV', 'development')
    expect(getIndexName('dotcom', 'en', 'tests')).toBe('tests_github-docs_general-search_fpt_en')
    expect(getIndexName('dotcom', 'en', 'tests_')).toBe('tests_github-docs_general-search_fpt_en')
  })
})

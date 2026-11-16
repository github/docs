import type { Request } from 'express'
import { afterEach, describe, expect, test, vi } from 'vitest'

async function importWithLanguages(enabledLanguages: string) {
  vi.stubEnv('TRANSLATIONS_FIXTURE_ROOT', '')
  vi.stubEnv('ENABLED_LANGUAGES', enabledLanguages)
  vi.resetModules()
  return import('@/languages/middleware/detect-language')
}

function fakeRequest(acceptLanguage: string) {
  return { headers: { 'accept-language': acceptLanguage } } as unknown as Request
}

describe('getLanguageCodeFromHeader', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.resetModules()
  })

  test.each([
    ['zh', 'zh'],
    ['zh,en;q=0.9', 'zh'],
    ['zh-CN,zh;q=0.9,en;q=0.8', 'zh'],
    ['zh-TW,zh;q=0.9', 'zh'],
    ['zh-Hans,en;q=0.8', 'zh'],
    ['zh-Hant,en;q=0.8', 'zh'],
    ['zh-cn,en-us;q=0.5', 'zh'],
    ['ZH-CN,en;q=0.8', 'zh'],
    ['ja-JP,ja;q=0.9', 'ja'],
    ['JA-JP,en;q=0.8', 'ja'],
    ['en-US,en;q=0.9', 'en'],
  ])('detects %s as %s when all languages are enabled', async (header, expected) => {
    const { getLanguageCodeFromHeader } = await importWithLanguages('all')
    expect(getLanguageCodeFromHeader(fakeRequest(header))).toBe(expected)
  })

  test.each([
    ['zh-CN,zh;q=0.9', undefined],
    ['zh-TW,zh;q=0.9,en-US;q=0.8', 'en'],
    ['zh,en;q=0.9', 'en'],
  ])('ignores Chinese for %s when zh is not enabled', async (header, expected) => {
    const { getLanguageCodeFromHeader } = await importWithLanguages('en')
    expect(getLanguageCodeFromHeader(fakeRequest(header))).toBe(expected)
  })
})

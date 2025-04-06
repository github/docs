import languages from '#src/languages/lib/languages.js'
import { describe, expect, test, vi } from 'vitest'

describe('files', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  test.each(Object.entries(languages))('%s matches language schema', async (_, lang) => {
    expect(lang.name).toMatch(/\w+/)
    if (lang.nativeName) expect(lang.nativeName).toMatch(/.+/)
    expect(lang.code).toMatch(/\w{2}/)
    if (lang.code !== 'en') expect(lang.dir).toMatch(/.+/)
    expect(lang.hreflang).toMatch(/\w{2}/)
    if (lang.redirectPatterns) expect(lang.redirectPatterns).toBeInstanceOf(Array)
  })
})

import { describe, expect, test } from 'vitest'
import { get } from '@/tests/helpers/e2etest.js'
import { languageKeys } from '@/languages/lib/languages.js'

const langs = languageKeys.filter((lang) => lang !== 'en')

describe('llms.txt translations', () => {
  test('includes translations section with all languages', async () => {
    const res = await get('/llms.txt')
    const content = res.body

    // Should include translations with language codes
    expect(content).toMatch(/## Translations/i)
    expect(content).toMatch(/api\/pagelist\/[a-z]{2}\/free-pro-team@latest/i)

    // Extract translation section
    const translationsMatch = content.match(/## Translations\n([\s\S]*?)(?=\n## |$)/)
    expect(translationsMatch).toBeTruthy()

    if (translationsMatch) {
      const translationsSection = translationsMatch[1]
      const languageLinks = translationsSection.match(/- \[.*?\]\(.*?\)/g)
      expect(languageLinks).toBeTruthy()
      expect(languageLinks!.length).toBeGreaterThan(5) // Should have multiple languages
    }
  })

  test.each(langs)('includes %s language with proper formatting', async (lang) => {
    const res = await get('/llms.txt')
    const content = res.body

    // Should include this language with proper markdown link format
    expect(content).toMatch(
      new RegExp(`\\[.*?\\]\\(.*?api/pagelist/${lang}/free-pro-team@latest\\)`),
    )
  })
})

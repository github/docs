import { getDataByLanguage } from '../../lib/get-data'

describe('glossaries', () => {
  const glossaries = {
    external: getDataByLanguage('glossaries.external', 'en'),
    candidates: getDataByLanguage('glossaries.candidates', 'en'),
  }

  test('are broken into external, internal, and candidates', async () => {
    const keys = Object.keys(glossaries)
    expect(keys).toHaveLength(2)
    expect(keys).toContain('candidates')
    expect(keys).toContain('external')
  })

  test('every entry has a valid term', async () => {
    function hasValidTerm(entry) {
      return entry.term && entry.term.length && !entry.term.includes('*')
    }

    expect(glossaries.external.every(hasValidTerm)).toBe(true)
    expect(glossaries.candidates.every(hasValidTerm)).toBe(true)
  })

  test('external glossary has entries, and they all have descriptions', async () => {
    expect(glossaries.external.length).toBeGreaterThan(20)
    glossaries.external.forEach((entry) => {
      const message = `entry '${entry.term}' is missing a description`
      expect(entry.description && entry.description.length > 0, message).toBe(true)
    })
  })

  test('candidates all have a term, but no description', async () => {
    expect(glossaries.candidates.length).toBeGreaterThan(20)
    glossaries.candidates.forEach((entry) => {
      const message = `entry '${entry.term}' not expected to have a description`
      expect(!entry.description, message).toBe(true)
    })
  })
})

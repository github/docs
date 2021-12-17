import { dates, supported } from '../../lib/enterprise-server-releases.js'
import libLanguages from '../../lib/languages.js'
import { namePrefix } from '../../lib/search/config.js'
import { expect } from '@jest/globals'
import lunrIndexNames from '../../script/search/lunr-get-index-names.js'
const languageCodes = Object.keys(libLanguages)

describe('search', () => {
  test('has Lunr index for every language for every supported GHE version', () => {
    expect(supported.length).toBeGreaterThan(1)
    supported.forEach((version) => {
      languageCodes.forEach((languageCode) => {
        const indexName = `${namePrefix}-${version}-${languageCode}`
        const indexRecordName = `${indexName}-records`

        // workaround for GHES release branches not in production yet
        if (!lunrIndexNames.includes(indexName)) {
          const today = getDate()
          const releaseDate = getDate(dates[version].releaseDate)
          // if the release date is in the future or today, ignore this version;
          // this means if the new index is not uploaded at the time of the release,
          // the test will not fail until the following day.
          if (releaseDate >= today) return
        }

        expect(lunrIndexNames.includes(indexName)).toBe(true)
        expect(lunrIndexNames.includes(indexRecordName)).toBe(true)
      })
    })
  })

  test('has Lunr index for every language for dotcom', async () => {
    expect(languageCodes.length).toBeGreaterThan(0)
    languageCodes.forEach((languageCode) => {
      const indexName = `${namePrefix}-dotcom-${languageCode}`
      const indexRecordName = `${indexName}-records`
      expect(lunrIndexNames.includes(indexName)).toBe(true)
      expect(lunrIndexNames.includes(indexRecordName)).toBe(true)
    })
  })
})

function getDate(date) {
  const dateObj = date ? new Date(date) : new Date()
  return dateObj.toISOString().slice(0, 10)
}

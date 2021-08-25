import { supported } from '../../lib/enterprise-server-releases.js'
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

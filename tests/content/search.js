import { jest, describe, expect } from '@jest/globals'

import { dates, supported } from '../../lib/enterprise-server-releases.js'
import libLanguages from '../../lib/languages.js'
import { namePrefix } from '../../lib/search/config.js'
import lunrIndexNames from '../../script/search/lunr-get-index-names.js'
import { get } from '../helpers/e2etest.js'

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

describe('search middleware', () => {
  jest.setTimeout(60 * 1000)

  test('basic search', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'stuff')
    sp.set('language', 'en')
    sp.set('version', 'dotcom')
    const res = await get('/search?' + sp)
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.text)
    expect(Array.isArray(results)).toBeTruthy()

    // Check that it can be cached at the CDN
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=\d+/)
  })

  test('limit search', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'github') // will yield lots of results
    sp.set('language', 'en')
    sp.set('version', 'dotcom')
    sp.set('limit', '1')
    const res = await get('/search?' + sp)
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.text)
    expect(Array.isArray(results)).toBeTruthy()
    expect(results.length).toBe(1)
  })

  test('invalid search version', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'stuff')
    sp.set('language', 'en')
    sp.set('version', 'NEVERHEARDOF')
    const res = await get('/search?' + sp)
    expect(res.statusCode).toBe(400)
    const { error } = JSON.parse(res.text)
    expect(error).toContain('Unrecognized version')
  })

  test('invalid search language', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'stuff')
    sp.set('language', 'NEVERHEARDOF')
    sp.set('version', 'dotcom')
    const res = await get('/search?' + sp)
    expect(res.statusCode).toBe(400)
    const { error } = JSON.parse(res.text)
    expect(error).toContain('Unrecognized language')
  })

  test('only certain keywords are supported', async () => {
    const sp = new URLSearchParams()
    sp.set('language', 'en')
    sp.set('version', 'dotcom')

    sp.set('query', 'title: Security')
    let res = await get('/search?' + sp)
    expect(res.statusCode).toBe(200)

    // and...
    sp.set('query', 'topics: actions')
    res = await get('/search?' + sp)
    expect(res.statusCode).toBe(200)

    // but...
    sp.set('query', 'anyword: bla')
    res = await get('/search?' + sp)
    expect(res.statusCode).toBe(400)
  })
})

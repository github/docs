const express = require('express')
const languages = new Set(Object.keys(require('../lib/languages')))
const versions = new Set(Object.values(require('../lib/search/versions')))
const loadLunrResults = require('../lib/search/lunr-search')
const loadAlgoliaResults = require('../lib/search/algolia-search')

// temp
const murmur = require('imurmurhash')
// end temp

const router = express.Router()

router.get('/', async function postSearch (req, res, next) {
  res.set({
    'surrogate-control': 'private, no-store',
    'cache-control': 'private, no-store'
  })

  const { query, version, language, filters, limit: limit_ } = req.query
  const limit = Math.min(parseInt(limit_, 10) || 10, 100)
  if (!versions.has(version) || !languages.has(language)) {
    return res.status(400).json([])
  }
  if (!query || !limit) {
    return res.status(200).json([])
  }

  // temp
  const userEventsId = req.cookies['_docs-events']
  const experimentHash = userEventsId
    ? murmur('search_lunr').hash(userEventsId).result()
    : 0
  const inTreatment = experimentHash % 2
  // end temp

  try {
    const results = process.env.AIRGAP || req.cookies.AIRGAP || inTreatment
      ? await loadLunrResults({ version, language, query: `${query} ${filters || ''}`, limit })
      : await loadAlgoliaResults({ version, language, query, filters, limit })
    return res.status(200).json(results)
  } catch (err) {
    console.error(err)
    return res.status(400).json([])
  }
})

module.exports = router

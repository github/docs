const express = require('express')
const languages = new Set(Object.keys(require('../lib/languages')))
const versions = require('../lib/search/versions')
const loadAlgoliaResults = require('../lib/search/algolia-search')

const router = express.Router()

router.get('/', async (req, res) => {
  res.set({
    'surrogate-control': 'private, no-store',
    'cache-control': 'private, no-store'
  })

  const { query, version, language } = req.query
  const limit = Math.min(parseInt(req.query.limit, 10) || 10, 100)
  if (!versions.has(version) || !languages.has(language)) {
    return res.status(400).json([])
  }
  if (!query || !limit) {
    return res.status(200).json([])
  }

  try {
    const results = await loadAlgoliaResults({ version, language, query, limit })
    return res.status(200).json(results)
  } catch (err) {
    console.error(err)
    return res.status(400).json([])
  }
})

module.exports = router

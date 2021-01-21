const express = require('express')
const algoliasearch = require('algoliasearch')
const { namePrefix } = require('../lib/search/config')
const languages = new Set(Object.keys(require('../lib/languages')))
const versions = require('../lib/search/versions')
const { get } = require('lodash')

const router = express.Router()

// https://www.algolia.com/apps/ZI5KPY1HBE/dashboard
// This API key is public. There's also a private API key for writing to the Algolia API
const searchClient = algoliasearch('ZI5KPY1HBE', '685df617246c3a10abba589b4599288f')

async function loadAlgoliaResults ({ version, language, query, limit }) {
  const indexName = `${namePrefix}-${version}-${language}`
  const index = searchClient.initIndex(indexName)

  // allows "phrase queries" and "prohibit operator"
  // https://www.algolia.com/doc/api-reference/api-parameters/advancedSyntax/
  const { hits } = await index.search(query, {
    hitsPerPage: limit,
    advancedSyntax: true
  })

  return hits.map(hit => ({
    url: hit.url,
    breadcrumbs: get(hit, '_highlightResult.breadcrumbs.value'),
    heading: get(hit, '_highlightResult.heading.value'),
    title: get(hit, '_highlightResult.title.value'),
    content: get(hit, '_highlightResult.content.value')
  }))
}

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

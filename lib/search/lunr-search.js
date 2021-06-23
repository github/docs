const path = require('path')
const lunr = require('lunr')
require('lunr-languages/lunr.stemmer.support')(lunr)
require('lunr-languages/tinyseg')(lunr)
require('lunr-languages/lunr.ja')(lunr)
require('lunr-languages/lunr.es')(lunr)
require('lunr-languages/lunr.pt')(lunr)
require('lunr-languages/lunr.de')(lunr)
const { get } = require('lodash')
const readFileAsync = require('../readfile-async')
const { namePrefix } = require('./config.js')
const { decompress } = require('./compress')

const LUNR_DIR = './indexes'
const lunrIndexes = new Map()
const lunrRecords = new Map()

module.exports = async function loadLunrResults ({ version, language, query, limit }) {
  const indexName = `${namePrefix}-${version}-${language}`
  if (!lunrIndexes.has(indexName) || !lunrRecords.has(indexName)) {
    lunrIndexes.set(indexName, await loadLunrIndex(indexName))
    lunrRecords.set(indexName, await loadLunrRecords(indexName))
  }
  const results = lunrIndexes.get(indexName)
    .search(query)
    .slice(0, limit)
    .map((result) => {
      const record = lunrRecords.get(indexName)[result.ref]
      return {
        url: result.ref,
        breadcrumbs: field(result, record, 'breadcrumbs'),
        heading: field(result, record, 'heading'),
        title: field(result, record, 'title'),
        content: field(result, record, 'content'),
        // don't highlight the topics array
        topics: record.topics
      }
    })
  return results
}

async function loadLunrIndex (indexName) {
  const filePath = path.posix.join(__dirname, LUNR_DIR, `${indexName}.json.br`)
  // Do not set to 'utf8' on file reads
  return readFileAsync(filePath)
    .then(decompress)
    .then(JSON.parse)
    .then(lunr.Index.load)
}

async function loadLunrRecords (indexName) {
  const filePath = path.posix.join(__dirname, LUNR_DIR, `${indexName}-records.json.br`)
  // Do not set to 'utf8' on file reads
  return readFileAsync(filePath)
    .then(decompress)
    .then(JSON.parse)
}

// Highlight a match within an attribute field
function field (result, record, name) {
  const text = record[name]
  if (!text) return text

  // First, get a list of all the positions of the matching tokens
  const positions = Object.values(result.matchData.metadata)
    .map(fields => get(fields, [name, 'position']))
    .filter(Boolean)
    .flat()
    .sort((a, b) => a[0] - b[0])
    .map(([start, length]) => [start, start + length])
    .map(([start, end], i, a) => [i && a[i - 1][1], start, end])

  // If this field has no token matches, no highlighting
  if (!positions.length) return text

  // Highlight the text
  return positions
    .map(([prev, start, end], i) => [
      text.slice(prev, start),
      mark(text.slice(start, end)),
      i === positions.length - 1 && text.slice(end)
    ])
    .flat()
    .filter(Boolean)
    .join('')
}

function mark (text) {
  return `<mark>${text}</mark>`
}

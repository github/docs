#!/usr/bin/env node

// [start-readme]
//
// This script is a quality assurance test for the Lunr search configuration.
// This test runs example queries and expects a specific page to land in the top
// 3 results.
//
// The data source used by this script is a JSON file `script/search/search-qa-data.json`,
// which is populated from spreadsheet data here:
// https://docs.google.com/spreadsheets/d/1Dt5JRVcmyAGWKBwGjwmXxi7Ww_vdfYLfZ-EFpu2S2CQ/edit?usp=sharing
//
// [end-readme]

import loadLunrResults from '../../lib/search/lunr-search.js'
import { readFileSync } from 'fs'
import { join } from 'path'

const queryData = JSON.parse(readFileSync(join(process.cwd(), 'script/search/search-qa-data.json')))

const version = 'dotcom'
const language = 'en'
const limit = 10
const TOP_RANK = 3

main()

async function main() {
  const rankResults = []

  for (const item in queryData) {
    const { query, href } = queryData[item]

    try {
      const results = await loadLunrResults({
        version,
        language,
        query,
        limit,
      })

      const hrefs = results.map((result) => result.url.replace('/en', ''))
      let rank = hrefs.indexOf(href)
      // this allows us to sort the results by rank, including total misses
      if (rank === -1) {
        rank = limit
      }
      rankResults.push({ query, href, rank })
    } catch (err) {
      console.error(err)
    }
  }
  logResults(rankResults)
}

async function logResults(results) {
  results.sort((a, b) => a.rank - b.rank)

  let first = 0
  let top = 0
  let low = 0
  let miss = 0
  results.forEach((result) => {
    const { query, href, rank } = result
    if (rank === limit) {
      miss++
      console.log(`🔴 query: ${query} - Expected href: ${href}\n`)
      return
    }
    if (rank === 0) {
      first++
      console.log(`⭐ Query: ${query} - Expected href: ${href}`)
      return
    }
    if (rank < TOP_RANK) {
      top++
      console.log(`🟢 Query: ${query} - Expected href: ${href}`)
      return
    }
    low++
    console.log(`🟡 Query: ${query} - Expected href: ${href}`)
  })

  const firstPercentage = ((first / queryData.length) * 100).toFixed(1)
  const topPercentage = ((top / queryData.length) * 100).toFixed(1)
  const lowPercentage = ((low / queryData.length) * 100).toFixed(1)
  const missPercentage = ((miss / queryData.length) * 100).toFixed(1)

  console.log(`\n⭐ First hit ${firstPercentage}%`)
  console.log(`\n🟢 Top ${TOP_RANK} hit ${topPercentage}%`)
  console.log(`\n🟡 Top ${limit} hit ${lowPercentage}%`)
  console.log(`\n🔴 Miss ${missPercentage}%`)
}

import fs from 'node:fs'
import path from 'node:path'

import { getElasticsearchClient } from '@/search/lib/helpers/get-client'
import { getElasticSearchIndex } from '@/search/lib/elasticsearch-indexes'
import {
  createIndex,
  populateIndex,
  printSuccess,
  updateAlias,
} from '@/search/scripts/index/utils/indexing-elasticsearch-utils'
import { getAISearchAutocompleteSettings } from '@/search/scripts/index/utils/settings'
import { aiSearchAutocompleteMappings } from '@/search/scripts/index/utils/mappings'
import { getPlanVersionFromIndexVersion } from '@/search/lib/elasticsearch-versions'

import type { TermsWithFrequency } from '@/search/scripts/index/types'

type Options = {
  dataRepoRoot: string
  languages: string[]
  versions: string[]
  retries?: number
  sleepTime?: number
  verbose?: boolean
  indexPrefix?: string
}

export async function indexAISearchAutocomplete(options: Options) {
  const client = getElasticsearchClient(undefined, options.verbose)
  await client.ping() // Will throw if not available

  console.log(
    'Indexing AI search autocomplete for languages: %O and versions: %O',
    options.languages,
    options.versions,
  )

  const { dataRepoRoot, languages, versions } = options
  for (const language of languages) {
    for (const version of versions) {
      const startTime = new Date()

      const records = loadQueriesWithPriority({ dataRepoRoot, language, version })
      const { indexName, indexAlias } = getElasticSearchIndex(
        'aiSearchAutocomplete',
        version,
        language,
        options.indexPrefix || '',
      )

      const settings = getAISearchAutocompleteSettings(language, options.verbose)

      await createIndex(client, indexAlias, settings, aiSearchAutocompleteMappings)

      const recordsArray = Object.entries(records).map(([term, popularity]) => ({
        term,
        popularity,
      }))

      await populateIndex(client, indexAlias, indexName, recordsArray, {
        retries: options.retries,
        sleepTime: options.sleepTime,
        verbose: options.verbose,
      })

      await updateAlias(client, indexName, indexAlias, options)

      printSuccess(indexName, startTime, options.verbose)
    }
  }
}

type LoadOptions = {
  dataRepoRoot: string
  language: string
  version: string
}

function loadQueriesWithPriority(options: LoadOptions): TermsWithFrequency {
  // The {version} in the paths uses the version's 'plan' name, e.g. `free-pro-team` instead of `fpt`
  const internalDataVersion = getPlanVersionFromIndexVersion(options.version)

  if (!internalDataVersion) {
    throw new Error(`No rollup version found for version ${options.version}`)
  }

  const queriesFilePath = path.join(
    options.dataRepoRoot,
    'ai/search/queries',
    options.language,
    internalDataVersion,
    'queries.json',
  )

  const queriesFile = JSON.parse(fs.readFileSync(queriesFilePath, 'utf8'))
  const { topQueries, allQueries } = queriesFile

  const terms: TermsWithFrequency = {}

  let popularity = topQueries.length + allQueries.length

  // Assign higher popularity to topQueries
  for (const term of topQueries) {
    terms[term] = popularity
    popularity -= 1
  }

  // Assign remaining popularity to allQueries using the order they have in the JSON
  for (const term of allQueries) {
    // Don't read in the topQueries again (duplicates)
    if (!(term in terms)) {
      terms[term] = popularity
      popularity -= 1
    }
  }

  return terms
}

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
import { getGeneralAutocompleteSettings } from '@/search/scripts/index/utils/settings'
import { generalAutocompleteMappings } from '@/search/scripts/index/utils/mappings'
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

export async function indexGeneralAutocomplete(options: Options) {
  const client = getElasticsearchClient(undefined, options.verbose)
  await client.ping() // Will throw if not available

  console.log(
    'Indexing general autocomplete for languages: %O and versions: %O',
    options.languages,
    options.versions,
  )

  const { dataRepoRoot, versions, languages } = options
  for (const language of languages) {
    for (const version of versions) {
      const startTime = new Date()

      const records = loadTermsWithFrequency({ version, language, dataRepoRoot })
      const { indexName, indexAlias } = getElasticSearchIndex(
        'generalAutocomplete',
        version,
        language,
        options.indexPrefix || '',
      )

      const settings = getGeneralAutocompleteSettings(language, options.verbose)

      await createIndex(client, indexAlias, settings, generalAutocompleteMappings)

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

/*
 * Terms are one-word search terms that a user might enter into a search toolbar
 * We have two sources of "terms":
 *   - Previous user searches (searchTerms)
 *   - Terms auto-generated taking each word from each title of all of our articles (documentTerms)
 *
 *  Each of the files live in our docs-internal-data repo that should be cloned before running this script.
 *  The paths to these files for each type of term are:
 *    - searchTerms: hydro/rollups/user-searches/{langauge}/{version}/rollup.json
 *    - documentTerms: hydro/rollups/user-searches/{langauge}/{version}/rollup.json
 */
function loadTermsWithFrequency(options: LoadOptions): TermsWithFrequency {
  // The {version} in the paths uses the version's 'plan' name, e.g. `free-pro-team` instead of `fpt`
  const internalDataVersion = getPlanVersionFromIndexVersion(options.version)

  if (!internalDataVersion) {
    throw new Error(`No rollup version found for version ${options.version}`)
  }

  const filePath = path.join(
    options.dataRepoRoot,
    'hydro/rollups/user-searches',
    options.language,
    internalDataVersion,
    'rollup.json',
  )
  const terms: TermsWithFrequency = {}

  const userSearchTerms: TermsWithFrequency = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  let maxFrequency = Math.max(...Object.values(userSearchTerms))
  if (maxFrequency === 0) {
    throw new Error(`No records found for ${options.language} ${options.version}`)
  }
  for (const [term, frequency] of Object.entries(userSearchTerms)) {
    // Normalize the frequency which will turn into "popularity" in ElasticSearch
    // We include +1 here because "userSearchTerms" should have higher priority than "articleTitleTerms"
    terms[term] = frequency / maxFrequency + 1
  }

  const articleTitleTermsFilePath = path.join(
    options.dataRepoRoot,
    'all-documents/terms',
    options.language,
    internalDataVersion,
    'terms.json',
  )
  const articleTitleTerms: TermsWithFrequency = JSON.parse(
    fs.readFileSync(articleTitleTermsFilePath, 'utf8'),
  )
  maxFrequency = Math.max(...Object.values(articleTitleTerms))
  if (maxFrequency === 0) {
    throw new Error(`No document title records found for ${options.language} ${options.version}`)
  }
  for (const [articleTitleTerm, frequency] of Object.entries(articleTitleTerms)) {
    if (!(articleTitleTerm in terms)) {
      // Notice that we don't + 1 here because we want to give more priority to data from user searches
      terms[articleTitleTerm] = frequency / maxFrequency
    }
  }

  return terms
}

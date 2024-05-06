import fs from 'node:fs'
import path from 'node:path'

import { Client, estypes } from '@elastic/elasticsearch'

import { getClient } from './lib/get-client'
import { utcTimestamp } from './lib/utils'
import { populate } from './lib/populate'

import { type Version, Records } from './types'

export const shortVersionNames = {
  'enterprise-server': 'ghes',
  'enterprise-cloud': 'ghec',
  'free-pro-team': 'fpt',
} as const

const DEFAULT_SLEEPTIME_SECONDS = 30

type Options = {
  dataRepoRoot: string
  languages: string[]
  versions: Version[]
  retries?: number
  sleepTime?: number
  verbose?: boolean
  indexPrefix?: string
}

export async function indexAutocomplete(options: Options) {
  // The data repo has a predictable structure of
  // `hydro/rollups/user-searches/$language/$version/rollup.json`
  // But note that the "version" might be a prefix, like enterprise-server.
  // const { verbose } = options

  const client = getClient()

  const { dataRepoRoot, versions, languages } = options
  for (const language of languages) {
    for (const version of versions) {
      const records = loadRecords({ version, language, dataRepoRoot })
      const { alias, name } = await createIndex(
        client,
        language,
        version,
        options.indexPrefix || '',
      )
      await populate(client, records, {
        alias,
        name,
        retries: options.retries || 0,
        sleepTime: options.sleepTime || DEFAULT_SLEEPTIME_SECONDS,
      })
    }
  }
}

type LoadOptions = {
  dataRepoRoot: string
  language: string
  version: string
}

function loadRecords(options: LoadOptions): Records {
  // First load the rollup records for user-searches
  const filePath = path.join(
    options.dataRepoRoot,
    'hydro/rollups/user-searches',
    options.language,
    options.version,
    'rollup.json',
  )
  const terms: Records = {}

  const userSearchTerms: Records = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  let highestValue = Math.max(...Object.values(userSearchTerms))
  if (highestValue === 0) {
    throw new Error(`No records found for ${options.language} ${options.version}`)
  }
  for (const [term, value] of Object.entries(userSearchTerms)) {
    // Why +1?
    // Because we want these user-searches to alway be higher than all the
    // terms generated from titles.
    // For example, a common user-search term that users use
    // is "log forwarding". But there might not be a deconstructed term,
    // from the document titles, however there might be one called
    // "log proxy". So when our users search for "log" we want to suggest,
    // in the autocomplete UI "log forwarding" before "log proxy".
    terms[term] = value / highestValue + 1
  }

  const documentTermsFilePath = path.join(
    options.dataRepoRoot,
    'all-documents/terms',
    options.language,
    options.version,
    'terms.json',
  )
  const documentTerms: Records = JSON.parse(fs.readFileSync(documentTermsFilePath, 'utf8'))
  highestValue = Math.max(...Object.values(documentTerms))
  if (highestValue === 0) {
    throw new Error(`No document title records found for ${options.language} ${options.version}`)
  }
  for (const [term, value] of Object.entries(documentTerms)) {
    if (!(term in terms)) {
      terms[term] = value / highestValue + 1
    }
  }

  return terms
}

type IndexInfo = {
  alias: string
  name: string
}

async function createIndex(
  client: Client,
  language: string,
  version: Version,
  indexPrefix: string,
): Promise<IndexInfo> {
  const settings: estypes.IndicesIndexSettings = {
    analysis: {
      analyzer: {
        text_analyzer: {
          filter: ['lowercase'],
          tokenizer: 'standard',
          type: 'custom',
        },
      },
    },
    // filter: {
    //   // Will later, conditionally, put the snowball configuration here.
    // },
    // XXX SNOWBALL?
  }

  if (indexPrefix && !indexPrefix.endsWith('_')) {
    indexPrefix += '_'
  }

  const indexName = `${indexPrefix}github-autocomplete-${language}-${shortVersionNames[version] || version}`
  const thisAlias = `${indexName}__${utcTimestamp()}`

  const mappings: estypes.MappingTypeMapping = {
    properties: {
      term: {
        type: 'text',
        analyzer: 'text_analyzer',
        // This is used for fast highlighting. Uses more space but makes
        // the searches faster.
        term_vector: 'with_positions_offsets',
      },
      popularity: { type: 'float' },
    },
  }

  await client.indices.create({
    index: thisAlias,
    mappings,
    settings,
  })

  return { alias: thisAlias, name: indexName }
}

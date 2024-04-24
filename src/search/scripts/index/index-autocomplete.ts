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
      const { alias, name } = await createIndex(client, language, version)
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
  const filePath = path.join(
    options.dataRepoRoot,
    'hydro/rollups/user-searches',
    options.language,
    options.version,
    'rollup.json',
  )
  const terms: Records = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  return terms
}

type IndexInfo = {
  alias: string
  name: string
}

async function createIndex(client: Client, language: string, version: Version): Promise<IndexInfo> {
  const settings: estypes.IndicesIndexSettings = {
    analysis: {
      // char_filter: {
      //   // This will turn `runs-on` into `runs_on` so that it can't be
      //   // tokenized to `runs` because `on` is a stop word.
      //   // It also means that prose terms, in English, like `opt-in`
      //   // not be matched if someone searches for `opt in`. But this
      //   // is why we have multiple different analyzers. So it becomes
      //   // `opt_in` in the `text_analyzer_explicit` analyzer, but is
      //   // left as `opt` in the `text_analyzer` analyzer.
      //   hyphenation_filter: {
      //     type: 'mapping',
      //     mappings: ['- => _'],
      //   },
      // },
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

  const indexName = `github-autocomplete-${language}-${shortVersionNames[version] || version}`
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

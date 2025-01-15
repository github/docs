import { Client } from '@elastic/elasticsearch'

import { languageKeys } from '#src/languages/lib/languages.js'
import { getElasticSearchIndex } from '@/search/lib/elasticsearch-indexes'
import { getElasticsearchClient } from '@/search/lib/helpers/get-client'
import {
  createIndex,
  escapeHTML,
  loadIndexRecords,
  populateIndex,
  printSuccess,
  updateAlias,
} from '@/search/scripts/index/utils/indexing-elasticsearch-utils'
import { sleep } from '@/search/lib/helpers/time'
import { getGeneralSearchSettings } from '@/search/scripts/index/utils/settings'
import { generalSearchMappings } from '@/search/scripts/index/utils/mappings'
import {
  allIndexVersionOptions,
  versionToIndexVersionMap,
} from '@/search/lib/elasticsearch-versions'

interface Options {
  verbose?: boolean
  version?: string | undefined
  language?: string[]
  notLanguage?: string[]
  elasticsearchUrl?: string
  indexPrefix?: string
  staggerSeconds?: number
  retries?: number
  sleepTime: number
}

export async function indexGeneralSearch(sourceDirectory: string, opts: Options) {
  if (!sourceDirectory) {
    throw new Error('Must pass the source directory as the first argument')
  }

  const { language, notLanguage } = opts

  if (language && notLanguage) {
    throw new Error("Can't combine --language and --not-language")
  }

  const client = getElasticsearchClient(opts.elasticsearchUrl, opts.verbose)
  await client.ping() // Will throw if not available

  let versions: string[] | 'all' = []
  if ('version' in opts) {
    if (process.env.VERSION) {
      console.warn(
        `'version' specified as argument ('${versions}') AND environment variable ('${process.env.VERSION}')`,
      )
    }
    if (!Array.isArray(opts.version)) {
      if (typeof opts.version === 'undefined') {
        versions = 'all'
      } else {
        versions = [opts.version]
      }
    } else if (opts.version[0] === 'all') {
      versions = 'all'
    } else {
      versions = opts.version
    }
  } else if (process.env.VERSION) {
    if (process.env.VERSION !== 'all') {
      versions = [process.env.VERSION]
    } else {
      versions = 'all'
    }
  }

  // Validate
  if (versions !== 'all') {
    for (const version of versions) {
      if (!allIndexVersionOptions.includes(version || '')) {
        throw new Error(
          `Argument -version ${version} is not recognized. Must be one of ${allIndexVersionOptions}`,
        )
      }
    }
  }

  let versionsToIndex: string[] = []
  if (!versions.length || versions === 'all') {
    versionsToIndex = allIndexVersionOptions
  } else if (versions.length) {
    versionsToIndex = versions.map((version) => versionToIndexVersionMap[version])
  }

  const languages =
    language || languageKeys.filter((lang) => !notLanguage || !notLanguage.includes(lang))

  console.log(
    'Indexing general search for languages: %O and versions: %O',
    languages,
    versionsToIndex,
  )

  for (const language of languages) {
    let count = 0
    for (const versionKey of versionsToIndex) {
      const startTime = new Date()

      const { indexName, indexAlias } = getElasticSearchIndex(
        'generalSearch',
        versionKey,
        language,
        opts.indexPrefix || '',
      )

      await indexVersion(client, indexName, indexAlias, language, sourceDirectory, opts)

      count++
      if (opts.staggerSeconds && count < versionsToIndex.length - 1) {
        console.log(`Sleeping for ${opts.staggerSeconds} seconds...`)
        await sleep(1000 * opts.staggerSeconds)
      }

      printSuccess(indexName, startTime, opts.verbose)
    }
  }
}

async function indexVersion(
  client: Client,
  indexName: string,
  indexAlias: string,
  language: string,
  sourceDirectory: string,
  opts: Options,
) {
  const recordsData = await loadIndexRecords(indexName, sourceDirectory)
  const allRecords = Object.values(recordsData).sort((a, b) => b.popularity - a.popularity)
  const records = allRecords.map((doc) => {
    const { title, objectID, content, breadcrumbs, headings, intro, toplevel } = doc
    const contentEscaped = escapeHTML(content)
    const headingsEscaped = escapeHTML(headings)
    return {
      url: objectID,
      title,
      title_explicit: title,
      content: contentEscaped,
      content_explicit: contentEscaped,
      breadcrumbs,
      headings: headingsEscaped,
      headings_explicit: headingsEscaped,
      popularity: doc.popularity + 1,
      intro,
      toplevel,
    }
  })

  const settings = getGeneralSearchSettings(language, opts.verbose || false)
  const mappings = generalSearchMappings

  await createIndex(client, indexAlias, settings, mappings)

  await populateIndex(client, indexAlias, indexName, records, {
    retries: opts.retries,
    sleepTime: opts.sleepTime * 1000,
    verbose: opts.verbose,
  })

  await updateAlias(client, indexName, indexAlias, opts)
}

import { Client } from '@elastic/elasticsearch'
import chalk from 'chalk'

import { languageKeys } from '#src/languages/lib/languages.js'
import { allVersions } from '#src/versions/lib/all-versions.js'
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

import type { AllVersionInfo } from '@/search/scripts/index/types'

interface Options {
  verbose?: boolean
  version?: string[] | string
  language?: string[]
  notLanguage?: string[]
  elasticsearchUrl?: string
  indexPrefix?: string
  staggerSeconds?: number
  retries?: number
  sleepTime: number
}

const shortNames: { [key: string]: AllVersionInfo } = Object.fromEntries(
  Object.values(allVersions).map((info: AllVersionInfo) => {
    const shortName = info.hasNumberedReleases
      ? info.miscBaseName + info.currentRelease
      : info.miscBaseName
    return [shortName, info]
  }),
)

const allVersionKeys = Object.keys(shortNames)

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

  let version: string | string[] | undefined = opts.version
  if (!version && process.env.VERSION && process.env.VERSION !== 'all') {
    version = process.env.VERSION
    if (!allVersionKeys.includes(version)) {
      throw new Error(
        `Environment variable 'VERSION' (${version}) is not recognized. Must be one of ${allVersionKeys}`,
      )
    }
  }
  let versionKeys = allVersionKeys
  if (version) {
    versionKeys = Array.isArray(version) ? version : [version]
  }

  const languages =
    language || languageKeys.filter((lang) => !notLanguage || !notLanguage.includes(lang))
  if (opts.verbose) {
    console.log(`Indexing on languages ${chalk.bold(languages.join(', '))}`)
  }

  for (const language of languages) {
    let count = 0
    for (const versionKey of versionKeys) {
      const startTime = new Date()

      const { indexName, indexAlias } = getElasticSearchIndex(
        'generalSearch',
        versionKey,
        language,
        opts.indexPrefix || '',
      )

      await indexVersion(client, indexName, indexAlias, language, sourceDirectory, opts)

      count++
      if (opts.staggerSeconds && count < versionKeys.length - 1) {
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

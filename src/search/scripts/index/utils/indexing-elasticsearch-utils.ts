import chalk from 'chalk'
import { Client, estypes, errors } from '@elastic/elasticsearch'
import fs from 'fs/promises'
import path from 'path'

import { readableTimeMinAndSec, sleep } from '@/search/lib/helpers/time'
import { retryOnErrorTest } from '@/search/scripts/index/utils/retry-on-error-test'
import {
  DEFAULT_SLEEPTIME_SECONDS,
  SNOWBALL_LANGUAGES,
} from '@/search/scripts/index/utils/constants'
import { safeUrlDisplay } from '@/search/lib/helpers/strings'

import type { Records } from '@/search/scripts/index/types'

type Options = {
  retries?: number
  sleepTime?: number
  verbose?: boolean
}

export async function createIndex(
  client: Client,
  indexAlias: string,
  settings: estypes.IndicesIndexSettings,
  mappings: estypes.MappingTypeMapping,
) {
  await client.indices.create({
    index: indexAlias,
    mappings,
    settings,
  })
}

export async function populateIndex(
  client: Client,
  indexAlias: string,
  indexName: string,
  records: any[],
  options: Options,
) {
  console.log(chalk.yellow(`\nIndexing ${chalk.bold(indexName)}`))
  const bulkOperations = records.flatMap((doc) => [{ index: { _index: indexAlias } }, doc])

  const bulkOptions = {
    refresh: false,
    timeout: '5m',
  }

  const attempts = options.retries || 0
  const sleepTime = options.sleepTime || DEFAULT_SLEEPTIME_SECONDS * 1000
  console.log(`About to bulk index ${records.length.toLocaleString()} records with retry %O`, {
    attempts,
    sleepTimeMS: sleepTime,
  })

  const t0 = new Date()
  const bulkResponse = await retryOnErrorTest(
    (error) => error instanceof errors.ResponseError && error.meta.statusCode === 429,
    () => client.bulk({ operations: bulkOperations, ...bulkOptions }),
    {
      attempts,
      sleepTime,
      onError: (_, attempts, sleepTime) => {
        console.warn(
          chalk.yellow(
            `Failed to bulk index ${indexName}. Will attempt ${attempts} more times (after ${
              sleepTime / 1000
            }s sleep).`,
          ),
        )
      },
    },
  )

  if (bulkResponse.errors) {
    console.error(`Bulk response errors: ${bulkResponse.errors}`)
    throw new Error('Bulk errors happened.')
  }
  const t1 = new Date()
  console.log(
    `Bulk indexed ${indexAlias}. Took ${readableTimeMinAndSec(t1.getTime() - t0.getTime())}`,
  )

  let documentsInIndex = 0
  let countAttempts = 3
  while (documentsInIndex < records.length) {
    const { count } = await client.count({ index: indexAlias })
    documentsInIndex = count
    if (documentsInIndex >= records.length) break
    countAttempts--
    if (!countAttempts) {
      console.log(`After ${countAttempts} attempts still haven't matched the expected number.`)
      break
    }
    await sleep(1000)
  }

  console.log(`Documents now in ${indexAlias}: ${documentsInIndex.toLocaleString()}`)
}

export async function updateAlias(
  client: Client,
  indexName: string,
  indexAlias: string,
  options: Options,
) {
  const aliasUpdates: estypes.IndicesUpdateAliasesAction[] = [
    {
      add: {
        index: indexAlias,
        alias: indexName,
      },
    },
  ]

  const indices = await retryOnErrorTest(
    (error) => {
      // 404 can happen when you're trying to get an index that
      // doesn't exist. ...yet!
      return error instanceof errors.ResponseError && error.meta.statusCode === 404
    },
    () => client.cat.indices({ format: 'json' }),
    {
      attempts: options.retries || 0,
      sleepTime: (options.sleepTime || DEFAULT_SLEEPTIME_SECONDS) * 1000,
      onError: (error, attempts, sleepTime) => {
        console.warn(
          chalk.yellow(
            `Failed to get index ${indexName} (${
              error.message || error.toString()
            }). Will attempt ${attempts} more times (after ${readableTimeMinAndSec(sleepTime)}s sleep).`,
          ),
        )
      },
    },
  )

  for (const index of indices) {
    if (index.index !== indexAlias && index.index.startsWith(indexName)) {
      aliasUpdates.push({ remove_index: { index: index.index } })
      console.log('Deleting old index', index.index)
    }
  }
  if (options.verbose) console.log('Updating alias actions:', aliasUpdates)
  await client.indices.updateAliases({ body: { actions: aliasUpdates } })
}

export function printSuccess(indexName: string, startTime: Date, verbose = false) {
  const endTime = new Date()
  console.log(
    chalk.green(
      `Finished indexing ${indexName}. Took ${readableTimeMinAndSec(endTime.getTime() - startTime.getTime())}`,
    ),
  )

  if (verbose) {
    console.log(`To view index: ${safeUrlDisplay(`<elasticsearch-url>/${indexName}`)}`)
    console.log(`To search index: ${safeUrlDisplay(`<elasticsearch-url>/${indexName}/_search`)}`)
  }
}

export async function loadIndexRecords(
  indexName: string,
  sourceDirectory: string,
): Promise<Records> {
  const filePath = path.join(sourceDirectory, `${indexName}-records.json`)
  const payload = await fs.readFile(filePath, 'utf8')
  return JSON.parse(payload)
}

export function escapeHTML(content: string): string {
  return content.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function getSnowballLanguage(language: string): string | undefined {
  return SNOWBALL_LANGUAGES[language]
}

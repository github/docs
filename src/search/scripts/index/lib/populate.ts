import chalk from 'chalk'
import { Client, errors } from '@elastic/elasticsearch'

import type { Records, RetryConfig } from '../types'
import { retryOnErrorTest } from './retry-on-error-test'
import { repointAlias } from './repoint-alias'
import { formatTime, sleep } from './utils'

type PopulateOptions = RetryConfig & {
  verbose?: boolean
  alias: string
  name: string
}

export async function populate(client: Client, records: Records, options: PopulateOptions) {
  const { alias, name } = options

  const allRecords = Object.entries(records).sort((a, b) => b[1] - a[1])
  const operations = allRecords.flatMap(([term, count]) => {
    const popularity = count / allRecords[0][1] // Normalize to 1.0 for the highest count
    return [
      { index: { _index: alias } },
      {
        term,
        popularity,
      },
    ]
  })

  const bulkOptions = {
    // Default is 'false'.
    // It means that the index is NOT refreshed as documents are inserted.
    // Which makes sense in our case because we do not intend to search on
    // this index until after we've pointed the alias to this new index.
    refresh: false,
    // Default is '1m' but we have no reason *not* to be patient. It's run
    // by a bot on a schedeule (GitHub Actions).
    timeout: '5m',
  }

  const attempts = options.retries
  const sleepTime = options.sleepTime * 1000

  console.log(`About to bulk index ${allRecords.length.toLocaleString()} records with retry %O`, {
    attempts,
    sleepTime,
  })
  const t0 = new Date()
  const bulkResponse = await retryOnErrorTest(
    (error: Error) => {
      // Rate limiting can happen when you're indexing too much at
      // same time.
      return error instanceof errors.ResponseError && error.meta.statusCode === 429
    },
    () => client.bulk({ operations, ...bulkOptions }),
    {
      attempts,
      sleepTime,
      onError: (_, attempts, sleepTime) => {
        console.warn(
          chalk.yellow(
            `Failed to bulk index ${name}. Will attempt ${attempts} more times (after ${
              sleepTime / 1000
            }s sleep).`,
          ),
        )
      },
    },
  )

  if (bulkResponse.errors) {
    // Some day, when we're more confident how and why this might happen
    // we can rewrite this code to "massage" the errors better.
    // For now, if it fails, it's "OK". It means we won't be proceeding,
    // an error is thrown in Actions and we don't have to worry about
    // an incompletion index.
    console.error(`Bulk response errors: ${bulkResponse.errors}`)
    throw new Error('Bulk errors happened.')
  }
  const t1 = new Date()
  console.log(`Bulk indexed ${alias}. Took ${formatTime(t1.getTime() - t0.getTime())}`)

  // The counting of documents in the index is async and can take a while
  // to reflect. So send count requests until we get the right number.
  let documentsInIndex = 0
  let countAttempts = 3
  while (documentsInIndex < allRecords.length) {
    const { count } = await client.count({ index: alias })
    documentsInIndex = count
    if (documentsInIndex >= allRecords.length) break
    countAttempts--
    if (!countAttempts) {
      console.log(`After ${countAttempts} attempts still haven't matched the expected number.`)
      break
    }
    await sleep(1000)
  }
  console.log(
    `Documents now in ${chalk.bold(alias)}: ${chalk.bold(documentsInIndex.toLocaleString())}`,
  )

  await repointAlias(client, alias, name, {
    attempts,
    sleepTime,
    verbose: Boolean(options.verbose),
  })
}

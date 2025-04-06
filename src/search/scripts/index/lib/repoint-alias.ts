import chalk from 'chalk'
import { Client, errors } from '@elastic/elasticsearch'

import { retryOnErrorTest } from './retry-on-error-test'
import { formatTime } from './utils'

export async function repointAlias(
  client: Client,
  alias: string,
  name: string,
  options: {
    attempts: number
    sleepTime: number
    verbose: boolean
  },
) {
  const { attempts, sleepTime, verbose } = options
  // To perform an atomic operation that creates the new alias and removes
  // the old indexes, we can use the updateAliases API with a body that
  // includes an "actions" array. The array includes the added alias
  // and the removed indexes. If any of the actions fail, none of the operations
  // are performed.
  // https://www.elastic.co/guide/en/elasticsearch/reference/master/indices-aliases.html

  type Update =
    | {
        add: {
          index: string
          alias: string
        }
      }
    | {
        remove_index: {
          index: string
        }
      }
  const aliasUpdates: Update[] = [
    {
      add: {
        index: alias,
        alias: name,
      },
    },
  ]
  console.log(`Alias ${name} -> ${alias}`)

  console.log('About to get indices with retry %O', { attempts, sleepTime })
  const indices = await retryOnErrorTest(
    (error: any) => {
      // 404 can happen when you're trying to get an index that
      // doesn't exist. ...yet!
      return error instanceof errors.ResponseError && error.meta.statusCode === 404
    },
    () => client.cat.indices({ format: 'json' }),
    {
      attempts,
      sleepTime,
      onError: (error, attempts, sleepTime) => {
        console.warn(
          chalk.yellow(
            `Failed to get index ${name} (${
              error.message || error.toString()
            }). Will attempt ${attempts} more times (after ${formatTime(sleepTime)}s sleep).`,
          ),
        )
      },
    },
  )
  for (const index of indices) {
    if (index.index !== alias && index.index.startsWith(name)) {
      aliasUpdates.push({ remove_index: { index: index.index } })
      console.log('Deleting index', index.index)
    }
  }
  if (verbose) console.log('Updating alias actions:', aliasUpdates)
  await client.indices.updateAliases({ body: { actions: aliasUpdates } })
}

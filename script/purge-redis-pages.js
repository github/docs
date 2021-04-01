#!/usr/bin/env node

// [start-readme]
//
// Run this script to manually "soft purge" the Redis rendered page cache
// by shortening the expiration window of entries.
// This will typically only be run by Heroku during the deployment process,
// as triggered via our Procfile's "release" phase configuration.
//
// [end-readme]

require('dotenv').config()

const { promisify } = require('util')
const createRedisClient = require('../lib/redis/create-client')

const { REDIS_URL, HEROKU_RELEASE_VERSION, HEROKU_PRODUCTION_APP } = process.env
const isHerokuProd = HEROKU_PRODUCTION_APP === 'true'
const pageCacheDatabaseNumber = 1
const keyScanningPattern = HEROKU_RELEASE_VERSION ? '*:rp:*' : 'rp:*'
const scanSetSize = 250

const startTime = Date.now()
const expirationDuration = 30 * 60 * 1000 // 30 minutes
const expirationTimestamp = startTime + expirationDuration // 30 minutes from now

// print keys to be purged without actually purging
const dryRun = ['-d', '--dry-run'].includes(process.argv[2])

// verify environment variables
if (!REDIS_URL) {
  if (isHerokuProd) {
    console.error('Error: you must specify the REDIS_URL environment variable.\n')
    process.exit(1)
  } else {
    console.warn('Warning: you did not specify a REDIS_URL environment variable. Exiting...\n')
    process.exit(0)
  }
}

console.log({
  HEROKU_RELEASE_VERSION,
  HEROKU_PRODUCTION_APP
})

purgeRenderedPageCache()

function purgeRenderedPageCache () {
  const redisClient = createRedisClient({
    url: REDIS_URL,
    db: pageCacheDatabaseNumber
  })

  let iteration = 0
  let potentialKeyCount = 0
  let totalKeyCount = 0

  // Promise wrappers
  const scanAsync = promisify(redisClient.scan).bind(redisClient)
  const quitAsync = promisify(redisClient.quit).bind(redisClient)

  // Run it!
  return scan()

  //
  // Define other subroutines
  //

  async function scan (cursor = '0') {
    try {
      // [0]: Update the cursor position for the next scan
      // [1]: Get the SCAN result for this iteration
      const [nextCursor, keys] = await scanAsync(
        cursor,
        'MATCH', keyScanningPattern,
        'COUNT', scanSetSize.toString()
      )

      console.log(`\n[Iteration ${iteration++}] Received ${keys.length} keys...`)

      if (dryRun) {
        console.log(`DRY RUN! This iteration might have set TTL for up to ${keys.length} keys:\n - ${keys.join('\n - ')}`)
      }

      // NOTE: It is possible for a SCAN cursor iteration to return 0 keys when
      // using a MATCH because it is applied after the elements are retrieved
      //
      // Remember: more or less than COUNT or no keys may be returned
      // See http://redis.io/commands/scan#the-count-option
      // Also, SCAN may return the same key multiple times
      // See http://redis.io/commands/scan#scan-guarantees
      // Additionally, you should always have the code that uses the keys
      // before the code checking the cursor.
      if (keys.length > 0) {
        if (dryRun) {
          potentialKeyCount += keys.length
        } else {
          totalKeyCount += await updateTtls(keys)
        }
      }

      // From <http://redis.io/commands/scan>:
      // 'An iteration starts when the cursor is set to 0,
      // and terminates when the cursor returned by the server is 0.'
      if (nextCursor === '0') {
        const dryRunTrailer = dryRun ? ` (potentially up to ${potentialKeyCount})` : ''
        console.log(`\nDone purging keys; affected total: ${totalKeyCount}${dryRunTrailer}`)
        console.log(`Time elapsed: ${Date.now() - startTime} ms`)

        // Close the connection
        await quitAsync()
        return
      }

      // Tail recursion
      return scan(nextCursor)
    } catch (error) {
      console.error('An unexpected error occurred!\n' + error.stack)
      console.error('\nAborting...')
      process.exit(1)
    }
  }

  // Find existing TTLs to ensure we aren't extending the TTL if it's already set
  async function getTtls (keys) {
    const pttlPipeline = redisClient.batch()
    keys.forEach(key => pttlPipeline.pttl(key))

    const pttlPipelineExecAsync = promisify(pttlPipeline.exec).bind(pttlPipeline)
    const pttlResults = await pttlPipelineExecAsync()

    if (pttlResults == null || pttlResults.length === 0) {
      throw new Error('PTTL results were empty')
    }

    return pttlResults
  }

  async function updateTtls (keys) {
    const pttlResults = await getTtls(keys)

    // Find pertinent keys to have TTLs set
    let updatingKeyCount = 0
    const pexpireAtPipeline = redisClient.batch()

    keys.forEach((key, i) => {
      // Only operate on -1 values or those later than our desired expiration timestamp
      const pttl = pttlResults[i]
      // A TTL of -1 means the entry was not configured with any TTL (expiration)
      // currently and will remain as a permanent entry unless a TTL is added
      const needsShortenedTtl = pttl === -1 || pttl > expirationDuration
      const isOldKey = !HEROKU_RELEASE_VERSION || !key.startsWith(`${HEROKU_RELEASE_VERSION}:`)

      if (needsShortenedTtl && isOldKey) {
        pexpireAtPipeline.pexpireat(key, expirationTimestamp)
        updatingKeyCount += 1
      }
    })

    console.log(`Purging ${updatingKeyCount} keys...`)

    // Only update TTLs if there are records worth updating
    if (updatingKeyCount === 0) return

    // Set all the TTLs
    const pexpireAtPipelineExecAsync = promisify(pexpireAtPipeline.exec).bind(pexpireAtPipeline)
    const pexpireAtResults = await pexpireAtPipelineExecAsync()

    if (pttlResults == null || pttlResults.length === 0) {
      throw new Error('PEXPIREAT results were empty')
    }

    // Count only the entries whose TTLs were successfully updated
    const updatedResults = pexpireAtResults.filter((result) => result === 1)
    return updatedResults.length
  }
}

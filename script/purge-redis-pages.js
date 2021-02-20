#!/usr/bin/env node

// [start-readme]
//
// Run this script to manually purge the Redis rendered page cache.
// This will typically only be run by Heroku during the deployment process,
// as triggered via our Procfile's "release" phase configuration.
//
// [end-readme]

const Redis = require('ioredis')

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
  const redisClient = new Redis(REDIS_URL, {
    db: pageCacheDatabaseNumber,
    tls: {
      // Required for production Heroku Redis
      rejectUnauthorized: false
    }
  })
  let totalKeyCount = 0
  let iteration = 0

  // Create a readable stream (object mode) for the SCAN cursor
  const scanStream = redisClient.scanStream({
    match: keyScanningPattern,
    count: scanSetSize
  })

  scanStream.on('end', function () {
    console.log(`Done purging keys; affected total: ${totalKeyCount}`)
    console.log(`Time elapsed: ${Date.now() - startTime} ms`)

    // This seems to be unexpectedly necessary
    process.exit(0)
  })

  scanStream.on('error', function (error) {
    console.error('An unexpected error occurred!\n' + error.stack)
    console.error('\nAborting...')
    process.exit(1)
  })

  scanStream.on('data', async function (keys) {
    console.log(`[Iteration ${iteration++}] Received ${keys.length} keys...`)

    // NOTE: It is possible for a SCAN cursor iteration to return 0 keys when
    // using a MATCH because it is applied after the elements are retrieved
    if (keys.length === 0) return

    if (dryRun) {
      console.log(`DRY RUN! This iteration might have set TTL for up to ${keys.length} keys:\n - ${keys.join('\n - ')}`)
      return
    }

    // Pause the SCAN stream while we set a TTL on these keys
    scanStream.pause()

    // Find existing TTLs to ensure we aren't extending the TTL if it's already set
    // PTTL mykey // only operate on -1 result values or those greater than ONE_HOUR_FROM_NOW
    const pttlPipeline = redisClient.pipeline()
    keys.forEach(key => pttlPipeline.pttl(key))
    const pttlResults = await pttlPipeline.exec()

    // Update pertinent keys to have TTLs set
    let updatingKeyCount = 0
    const pexpireAtPipeline = redisClient.pipeline()
    keys.forEach((key, i) => {
      const [error, pttl] = pttlResults[i]
      const needsShortenedTtl = error == null && (pttl === -1 || pttl > expirationDuration)
      const isOldKey = !HEROKU_RELEASE_VERSION || !key.startsWith(`${HEROKU_RELEASE_VERSION}:`)

      if (needsShortenedTtl && isOldKey) {
        pexpireAtPipeline.pexpireat(key, expirationTimestamp)
        updatingKeyCount += 1
      }
    })

    // Only update TTLs if there are records worth updating
    if (updatingKeyCount > 0) {
      // Set all the TTLs
      const pexpireAtResults = await pexpireAtPipeline.exec()
      const updatedResults = pexpireAtResults.filter(([error, result]) => error == null && result === 1)

      // Count only the entries whose TTLs were successfully updated
      totalKeyCount += updatedResults.length
    }

    // Resume the SCAN stream
    scanStream.resume()
  })
}

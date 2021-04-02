const Redis = require('redis')

const { REDIS_MIN_DB, REDIS_MAX_DB } = process.env

// By default, every Redis instance supports database numbers 0 - 15
const redisMinDb = REDIS_MIN_DB || 0
const redisMaxDb = REDIS_MAX_DB || 15

function formatRedisError (error) {
  const errorCode = error ? error.code : null
  const errorName = error ? error.constructor.name : 'Error'
  const errorMsg = error ? error.toString() : 'unknown error'
  const preamble = errorName + (errorCode ? ` with code "${errorCode}"` : '')
  return preamble + ': ' + errorMsg
}

module.exports = function createClient (options = {}) {
  const { db, name, url } = options

  // If no Redis URL is provided, bail out
  // NOTE: Could support other options like `host`, `port`, and `path` but
  // choosing not to for the time being!
  if (!url) return null

  // Verify database number is within range
  if (db != null) {
    if (!Number.isInteger(db) || db < redisMinDb || db > redisMaxDb) {
      throw new TypeError(
        `Redis database number must be an integer between ${redisMinDb} and ${redisMaxDb} but was: ${JSON.stringify(db)}`
      )
    }
  }

  // Create the client
  const client = Redis.createClient(url, {
    // Only add this configuration for TLS-enabled Redis URL values.
    // Otherwise, it breaks for local Redis instances without TLS enabled.
    ...url.startsWith('rediss://') && {
      tls: {
        // Required for production Heroku Redis
        rejectUnauthorized: false
      }
    },

    // Any running command that is unfulfilled when a connection is lost should
    // NOT be retried after the connection has been reestablished.
    retry_unfulfilled_commands: false,

    // If we failed to send a new command during a disconnection, do NOT
    // enqueue it to send later after the connection has been [re-]established.
    // This is also critical to preventing a backend pile-up!
    enable_offline_queue: false,

    // Expand whatever other options and overrides were provided
    ...options
  })

  // Handle connection errors to prevent killing the Node.js process
  client.on('error', (connectError) => {
    try {
      // Forcibly close the connection to the Redis server.
      // Allow all still running commands to silently fail immediately.
      client.end(false)
    } catch (disconnectError) {
      // Swallow any failure
    }
  })

  // If a `name` was provided, use it in the prefix for logging event messages
  const logPrefix = '[redis' + (name ? ` (${name})` : '') + ']'

  // Add event listeners for basic logging
  client.on('connect', () => { console.log(logPrefix, 'Connection opened') })
  client.on('ready', () => { console.log(logPrefix, 'Ready to receive commands') })
  client.on(
    'reconnecting',
    ({
      attempt,
      delay,
      // The rest are unofficial properties but currently supported
      error,
      total_retry_time: totalRetryTime,
      times_connected: timesConnected
    }) => {
      console.log(
        logPrefix,
        'Reconnecting,',
        `attempt ${attempt}`,
        `with ${delay} delay`,
        `due to ${formatRedisError(error)}.`,
        `Elapsed time: ${totalRetryTime}.`,
        `Successful connections: ${timesConnected}.`
      )
    }
  )
  client.on('end', () => { console.log(logPrefix, 'Connection closed') })
  client.on('warning', (msg) => { console.warn(logPrefix, 'Warning:', msg) })
  client.on('error', (error) => { console.error(logPrefix, formatRedisError(error)) })

  return client
}

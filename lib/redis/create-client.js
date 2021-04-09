const Redis = require('redis')

const { REDIS_MIN_DB, REDIS_MAX_DB } = process.env

// By default, every Redis instance supports database numbers 0 - 15
const redisMinDb = REDIS_MIN_DB || 0
const redisMaxDb = REDIS_MAX_DB || 15

// Maximum delay between reconnection attempts after backoff
const maxReconnectDelay = 5000

function formatRedisError (error) {
  const errorCode = error ? error.code : null
  const errorName = error ? error.constructor.name : 'Server disconnection'
  const errorMsg = error ? error.toString() : 'unknown (commonly a server idle timeout)'
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

  let pingInterval = null
  function stopPinging () {
    if (pingInterval) {
      clearInterval(pingInterval)
      pingInterval = null
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

    // This timeout value will be applied to both the initial connection
    // and any auto-reconnect attempts (if the `retry_strategy` option is
    // provided). If not using the `retry_strategy` option, this value can be
    // set to a very low number. If using the `retry_strategy` option to allow
    // more than one reconnection attempt, this value must be set to a higher
    // number. Defaults to 1 hour if not configured!
    connect_timeout: 60 * 60 * 1000, // 60 minutes

    // Be aware that this retry (NOT just reconnection) strategy appears to
    // be a major point of confusion (and possibly legitimate issues) between
    // reconnecting and retrying failed commands.
    retry_strategy:
      function ({
        attempt,
        error,
        total_retry_time: totalRetryTime,
        times_connected: timesConnected
      }) {
        let delayPerAttempt = 100

        // If the server appears to be unavailable, slow down faster
        if (error && error.code === 'ECONNREFUSED') {
          delayPerAttempt *= 5
        }

        // Reconnect after delay
        return Math.min(attempt * delayPerAttempt, maxReconnectDelay)
      },

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

    // Also, stop pinging the Redis server
    stopPinging()
  })

  client.on('connect', () => {
    // Stop pinging the Redis server, if any such timer already exists
    stopPinging()

    // Start pinging the server once per minute to prevent Redis connection
    // from closing when its idle `timeout` configuration value expires
    pingInterval = setInterval(
      () => { client.ping(() => {}) },
      60 * 1000
    )
  })

  client.on('end', () => {
    // Stop pinging the Redis server
    stopPinging()
  })

  // If a `name` was provided, use it in the prefix for logging event messages
  const logPrefix = '[redis' + (name ? ` (${name})` : '') + ']'

  // Add event listeners for basic logging
  client.on('connect', () => { console.log(logPrefix, 'Connection opened') })
  client.on('ready', () => { console.log(logPrefix, 'Ready to receive commands') })
  client.on('end', () => { console.log(logPrefix, 'Connection closed') })
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
  client.on('warning', (msg) => { console.warn(logPrefix, 'Warning:', msg) })
  client.on('error', (error) => { console.error(logPrefix, formatRedisError(error)) })

  return client
}

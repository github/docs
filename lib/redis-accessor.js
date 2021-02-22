const Redis = require('ioredis')
const InMemoryRedis = require('ioredis-mock')

const { CI, NODE_ENV, REDIS_URL, REDIS_MAX_DB } = process.env

// Do not use real a Redis client for CI, tests, or if the REDIS_URL is not provided
const useRealRedis = !CI && NODE_ENV !== 'test' && !!REDIS_URL

// By default, every Redis instance supports database numbers 0 - 15
const redisMaxDb = REDIS_MAX_DB || 15

// Enable better stack traces in non-production environments
const redisBaseOptions = {
  showFriendlyErrorStack: NODE_ENV !== 'production'
}

class RedisAccessor {
  constructor ({ databaseNumber = 0, prefix = null, allowSetFailures = false } = {}) {
    if (!Number.isInteger(databaseNumber) || databaseNumber < 0 || databaseNumber > redisMaxDb) {
      throw new TypeError(
        `Redis database number must be an integer between 0 and ${redisMaxDb} but was: ${JSON.stringify(databaseNumber)}`
      )
    }

    const redisClient = useRealRedis
      ? new Redis(REDIS_URL, {
          ...redisBaseOptions,
          db: databaseNumber,
          tls: {
            // Required for production Heroku Redis
            rejectUnauthorized: false
          }
        })
      : new InMemoryRedis()

    this._client = redisClient

    this._prefix = prefix ? prefix.replace(/:+$/, '') + ':' : ''

    // Allow for graceful failures if a Redis SET operation fails?
    this._allowSetFailures = allowSetFailures === true
  }

  /** @private */
  prefix (key) {
    if (typeof key !== 'string' || !key) {
      throw new TypeError(`Key must be a non-empty string but was: ${JSON.stringify(key)}`)
    }

    return this._prefix + key
  }

  static translateSetArguments (options = {}) {
    const setArgs = []

    const defaults = {
      newOnly: false,
      existingOnly: false,
      expireIn: null, // No expiration
      rollingExpiration: true
    }
    const opts = { ...defaults, ...options }

    if (opts.newOnly === true) {
      if (opts.existingOnly === true) {
        throw new TypeError('Misconfiguration: entry cannot be both new and existing')
      }
      setArgs.push('NX')
    } else if (opts.existingOnly === true) {
      setArgs.push('XX')
    }

    if (Number.isFinite(opts.expireIn)) {
      const ttl = Math.round(opts.expireIn)
      if (ttl < 1) {
        throw new TypeError('Misconfiguration: cannot set a TTL of less than 1 millisecond')
      }
      setArgs.push('PX')
      setArgs.push(ttl)
    }
    // otherwise there is no expiration

    if (opts.rollingExpiration === false) {
      if (opts.newOnly === true) {
        throw new TypeError('Misconfiguration: cannot keep an existing TTL on a new entry')
      }
      setArgs.push('KEEPTTL')
    }

    return setArgs
  }

  async set (key, value, options = {}) {
    const fullKey = this.prefix(key)

    if (typeof value !== 'string' || !value) {
      throw new TypeError(`Value must be a non-empty string but was: ${JSON.stringify(value)}`)
    }

    // Handle optional arguments
    const setArgs = this.constructor.translateSetArguments(options)

    try {
      const result = await this._client.set(fullKey, value, ...setArgs)
      return result === 'OK'
    } catch (err) {
      const errorText = `Failed to set value in Redis.
Key: ${fullKey}
Error: ${err.message}`

      if (this._allowSetFailures === true) {
        // Allow for graceful failure
        console.error(errorText)
        return false
      }

      throw new Error(errorText)
    }
  }

  async get (key) {
    const value = await this._client.get(this.prefix(key))
    return value
  }

  async exists (key) {
    const result = await this._client.exists(this.prefix(key))
    return result === 1
  }
}

module.exports = RedisAccessor

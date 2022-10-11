import createRedisClient from './redis/create-client.js'
import InMemoryRedis from 'redis-mock'
import { promisify } from 'util'

const { CI, NODE_ENV, REDIS_URL } = process.env

// Do not use real a Redis client for CI, tests, or if the REDIS_URL is not provided
const useRealRedis = !CI && NODE_ENV !== 'test' && !!REDIS_URL

class RedisAccessor {
  constructor({
    databaseNumber = 0,
    prefix = null,
    allowSetFailures = false,
    allowGetFailures = false,
    name = null,
  } = {}) {
    const redisClient = useRealRedis
      ? createRedisClient({
          url: REDIS_URL,
          db: databaseNumber,
          name: name || 'redis-accessor',
        })
      : InMemoryRedis.createClient()

    this._client = redisClient

    this._prefix = prefix ? prefix.replace(/:+$/, '') + ':' : ''

    // Allow for graceful failures if a Redis SET operation fails?
    this._allowSetFailures = allowSetFailures === true

    // Allow for graceful failures if a Redis GET operation fails?
    this._allowGetFailures = allowGetFailures === true
  }

  /** @private */
  prefix(key) {
    if (typeof key !== 'string' || !key) {
      throw new TypeError(`Key must be a non-empty string but was: ${JSON.stringify(key)}`)
    }

    return this._prefix + key
  }

  static translateSetArguments(options = {}) {
    const setArgs = []

    const defaults = {
      newOnly: false,
      existingOnly: false,
      expireIn: null, // No expiration
      rollingExpiration: true,
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

  async set(key, value, options = {}) {
    const setAsync = promisify(this._client.set).bind(this._client)
    const fullKey = this.prefix(key)

    if (typeof value !== 'string' || !value) {
      throw new TypeError(`Value must be a non-empty string but was: ${JSON.stringify(value)}`)
    }

    // Handle optional arguments
    const setArgs = this.constructor.translateSetArguments(options)

    try {
      const result = await setAsync(fullKey, value, ...setArgs)
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

  async get(key) {
    const getAsync = promisify(this._client.get).bind(this._client)
    const fullKey = this.prefix(key)

    try {
      const value = await getAsync(fullKey)
      return value
    } catch (err) {
      const errorText = `Failed to get value from Redis.
Key: ${fullKey}
Error: ${err.message}`

      if (this._allowGetFailures === true) {
        // Allow for graceful failure
        console.error(errorText)
        return null
      }

      throw new Error(errorText)
    }
  }
}

export default RedisAccessor

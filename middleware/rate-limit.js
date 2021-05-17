const rateLimit = require('express-rate-limit')
const RedisStore = require('rate-limit-redis')
const createRedisClient = require('../lib/redis/create-client')

const isProduction = process.env.NODE_ENV === 'production'
const { REDIS_URL } = process.env
const rateLimitDatabaseNumber = 0
const EXPIRES_IN_AS_SECONDS = 60

module.exports = rateLimit({
  // 1 minute (or practically unlimited outside of production)
  windowMs: isProduction ? (EXPIRES_IN_AS_SECONDS * 1000) : 1, // Non-Redis configuration in `ms`. Used as a fallback when Redis is not working or active.
  // limit each IP to X requests per windowMs
  max: 250,
  // Don't rate limit requests for 200s and redirects
  // Or anything with a status code less than 400
  skipSuccessfulRequests: true,
  // When available, use Redis; if not, defaults to an in-memory store
  store: REDIS_URL && new RedisStore({
    client: createRedisClient({
      url: REDIS_URL,
      db: rateLimitDatabaseNumber,
      name: 'rate-limit'
    }),
    // 1 minute (or practically unlimited outside of production)
    expiry: isProduction ? EXPIRES_IN_AS_SECONDS : 1, // Redis configuration in `s`
    // If Redis is not connected, let the request succeed as failover
    passIfNotConnected: true
  })
})

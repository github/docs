import rateLimit from 'express-rate-limit'
import RedisStore from 'rate-limit-redis'
import createRedisClient from '../lib/redis/create-client.js'

const isProduction = process.env.NODE_ENV === 'production'
const { REDIS_URL } = process.env
const rateLimitDatabaseNumber = 0
const EXPIRES_IN_AS_SECONDS = 60

// The reason the options object is created outside like this is for the
// necessity of avoiding setting a key called `store` even if it's set
// to `undefined`.
// More context here: https://github.com/nfriedly/express-rate-limit/issues/289
const options = {
  // 1 minute (or practically unlimited outside of production)
  windowMs: isProduction ? EXPIRES_IN_AS_SECONDS * 1000 : 1, // Non-Redis configuration in `ms`. Used as a fallback when Redis is not working or active.
  // limit each IP to X requests per windowMs
  max: 250,
  // Don't rate limit requests for 200s and redirects
  // Or anything with a status code less than 400
  skipSuccessfulRequests: true,
}

// When available, use Redis; if not, defaults to an in-memory store
if (REDIS_URL) {
  options.store = new RedisStore({
    client: createRedisClient({
      url: REDIS_URL,
      db: rateLimitDatabaseNumber,
      name: 'rate-limit',
    }),
    // 1 minute (or practically unlimited outside of production)
    expiry: isProduction ? EXPIRES_IN_AS_SECONDS : 1, // Redis configuration in `s`
    // If Redis is not connected, let the request succeed as failover
    passIfNotConnected: true,
  })
}

export default rateLimit(options)

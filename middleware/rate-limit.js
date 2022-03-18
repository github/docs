import rateLimit from 'express-rate-limit'
import statsd from '../lib/statsd.js'

const EXPIRES_IN_AS_SECONDS = 60

const MAX = process.env.RATE_LIMIT_MAX ? parseInt(process.env.RATE_LIMIT_MAX, 10) : 10000
if (isNaN(MAX)) {
  throw new Error(`process.env.RATE_LIMIT_MAX (${process.env.RATE_LIMIT_MAX}) not a number`)
}

export default rateLimit({
  // 1 minute
  windowMs: EXPIRES_IN_AS_SECONDS * 1000,
  // limit each IP to X requests per windowMs
  // We currently have about 25 instances in production. That's routed
  // in Azure to spread the requests to each healthy instance.
  // So, the true rate limit, per `windowMs`, is this number multiplied
  // by the current number of instances.
  // We have see DDoS attempts against prod that hits the `/` endpoint
  // (and not following the redirect to `/en`) at roughly 200k per minute.
  max: MAX,

  // Return rate limit info in the `RateLimit-*` headers
  standardHeaders: true,
  // Disable the `X-RateLimit-*` headers
  legacyHeaders: false,

  handler: (request, response, next, options) => {
    const tags = [`url:${request.url}`, `ip:${request.ip}`]
    statsd.increment('middleware.rate_limit', 1, tags)
    response.status(options.statusCode).send(options.message)
  },
})

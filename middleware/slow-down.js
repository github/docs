import slowDown from 'express-slow-down'
import statsd from '../lib/statsd.js'

const MAX = process.env.SLOW_DOWN_MAX ? parseInt(process.env.SLOW_DOWN_MAX, 10) : 10000
if (isNaN(MAX)) {
  throw new Error(`process.env.SLOW_DOWN_MAX (${process.env.SLOW_DOWN_MAX}) not a number`)
}

export default slowDown({
  windowMs: 1 * 60 * 1000, // 1 minute window
  delayAfter: MAX, // allow MAX requests to go at full-speed, then...
  delayMs: 100, // MAX+1 request has a 100ms delay, MAX+2 has a 200ms delay, MAX+3 has 300ms, etc.
  maxDelayMs: 9 * 1000, // slightly less than our Express timeout handler

  // Function to listen the first time the limit is reached within windowMs. Defaults:
  onLimitReached: (request) => {
    const tags = [`url:${request.url}`, `ip:${request.ip}`]
    statsd.increment('middleware.slow_down', 1, tags)
  },
})

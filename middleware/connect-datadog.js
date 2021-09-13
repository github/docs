import connectDatadog from 'connect-datadog'
import statsd from '../lib/statsd.js'

export default (req, res, next) => {
  const tags = []

  if ('nextjs' in req.query) {
    tags.push('nextjs')
  }

  return connectDatadog({
    dogstatsd: statsd,
    method: true, // Track HTTP methods (GET, POST, etc)
    response_code: true, // Track response codes
    tags,
  })(req, res, next)
}

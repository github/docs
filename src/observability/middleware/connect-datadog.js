import connectDatadog from 'connect-datadog'
import statsd, { tags } from '../lib/statsd.js'

export default (req, res, next) => {
  return connectDatadog({
    dogstatsd: statsd,
    method: true, // Track HTTP methods (GET, POST, etc)
    response_code: true, // Track response codes
    tags,
  })(req, res, next)
}

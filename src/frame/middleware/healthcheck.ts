import express from 'express'
import { noCacheControl } from './cache-control'
import statsd from '@/observability/lib/statsd'

const router = express.Router()

// Returns the healthiness of the service.
// Moda may use this to decide whether this instance stays in the pool.
// Today it checks nothing and always returns 200. If we ever needed to drain
// an instance, for example on a failing dependency, this is where a 500
// would go.
router.get('/', function healthcheck(req, res) {
  noCacheControl(res)

  const mem = process.memoryUsage()
  statsd.gauge('memory_heap_used', mem.heapUsed, ['event:healthcheck'])
  statsd.gauge('memory_heap_total', mem.heapTotal, ['event:healthcheck'])
  statsd.gauge('memory_rss', mem.rss, ['event:healthcheck'])
  statsd.gauge('memory_external', mem.external, ['event:healthcheck'])

  res.sendStatus(200)
})

export default router

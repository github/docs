import express from 'express'
import { noCacheControl } from './cache-control'
import statsd from '@/observability/lib/statsd'

const router = express.Router()

/**
 * Returns the healthiness of the service.
 * This may be used by Moda to determine whether this
 * instance remains in the pool to handle requests
 * For example: if we have a failing database connection we may return a 500 status here.
 */
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

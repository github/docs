import express from 'express'
import { noCacheControl } from './cache-control'
import statsd from '@/observability/lib/statsd'

const router = express.Router()

// Moda may use this endpoint to decide whether an instance stays in the pool.
// It always returns 200 and sends memory gauges to StatsD, without testing service health.
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

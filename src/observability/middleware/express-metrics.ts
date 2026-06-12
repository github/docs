import type { Request, Response, NextFunction } from 'express'
import statsd from '@/observability/lib/statsd'

const STAT = 'node.express.router'
const SANITIZE_RE = /[|,]/g

// Replaces the deprecated `connect-datadog` package.
// Emits the same metric names so existing Datadog dashboards keep working.
export default function expressMetrics(req: Request, res: Response, next: NextFunction) {
  const start = performance.now()
  let emitted = false
  const emit = () => {
    if (emitted) return
    emitted = true
    const tags = [`method:${req.method.toLowerCase()}`, `response_code:${res.statusCode}`]
    const route = req.route?.path
      ? (req.baseUrl + String(req.route.path)).replace(SANITIZE_RE, '-')
      : ''
    if (route) tags.push(`route:${route}`)
    statsd.histogram(`${STAT}.response_time`, performance.now() - start, 1, tags)
    statsd.increment(`${STAT}.response_code.${res.statusCode}`, 1, tags)
    statsd.increment(`${STAT}.response_code.all`, 1, tags)
  }
  res.once('finish', emit)
  res.once('close', emit)
  next()
}

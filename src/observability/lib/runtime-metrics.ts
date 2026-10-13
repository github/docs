// Emits runtime metrics that StatsD does not capture elsewhere:
// V8 heap usage and limit for memory pressure, GC pause duration for latency correlation,
// and event-loop p50 and p99 delay for blocked-loop detection.
// Starts only when StatsD sends real metrics through MODA_PROD_SERVICE_ENV.
import v8 from 'node:v8'
import { constants, monitorEventLoopDelay, PerformanceObserver } from 'node:perf_hooks'

import statsd from './statsd'

export const INTERVAL_MS = 10_000

let started = false

type GcTypeTag = 'minor' | 'major' | 'other'

function isMetricsEnabled(): boolean {
  return process.env.MODA_PROD_SERVICE_ENV === 'true' && process.env.NODE_ENV !== 'test'
}

// Safe to call from multiple server-start paths; calls after the first are no-ops.
export function startRuntimeMetrics(): void {
  if (started) return
  started = true

  if (!isMetricsEnabled()) return

  setInterval(() => {
    const heap = v8.getHeapStatistics()
    statsd.gauge('node.heap.used', heap.used_heap_size)
    statsd.gauge('node.heap.total', heap.total_heap_size)
    statsd.gauge('node.heap.limit', heap.heap_size_limit)
    statsd.gauge('node.heap.external', heap.external_memory)
    const pct = heap.heap_size_limit > 0 ? (heap.used_heap_size / heap.heap_size_limit) * 100 : 0
    statsd.gauge('node.heap.used_pct', pct)
  }, INTERVAL_MS).unref()

  const gcObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const kind = (entry as unknown as { detail?: { kind?: number } }).detail?.kind
      const tag = getGcTypeTag(kind)
      statsd.histogram('node.gc.pause', entry.duration, [`gc_type:${tag}`])
    }
  })
  gcObserver.observe({ entryTypes: ['gc'] })

  const eld = monitorEventLoopDelay({ resolution: 20 })
  eld.enable()

  setInterval(() => {
    // Values are in nanoseconds; convert to milliseconds for readability.
    statsd.gauge('node.eventloop.delay.p50', eld.percentile(50) / 1e6)
    statsd.gauge('node.eventloop.delay.p99', eld.percentile(99) / 1e6)
    statsd.gauge('node.eventloop.delay.max', eld.max / 1e6)
    eld.reset()
  }, INTERVAL_MS).unref()
}

export function _resetForTesting(): void {
  started = false
}

export function getGcTypeTag(kind: number | undefined): GcTypeTag {
  switch (kind) {
    case constants.NODE_PERFORMANCE_GC_MINOR:
      return 'minor'
    case constants.NODE_PERFORMANCE_GC_MAJOR:
      return 'major'
    default:
      return 'other'
  }
}

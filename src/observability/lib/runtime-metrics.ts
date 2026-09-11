/**
 * Periodically emits Node.js runtime metrics to Datadog via StatsD.
 *
 * Covers three categories that are otherwise invisible:
 *  1. V8 heap — used vs limit, so we can spot memory pressure before OOMs.
 *  2. GC — pause duration, so we can correlate latency spikes with GC.
 *  3. Event-loop delay — p50/p99, so we can see when the loop is blocked.
 *
 * Only activates when StatsD is sending real metrics (MODA_PROD_SERVICE_ENV).
 */
import v8 from 'node:v8'
import { monitorEventLoopDelay, PerformanceObserver } from 'node:perf_hooks'

import statsd from './statsd'

export const INTERVAL_MS = 10_000

let started = false

function isMetricsEnabled(): boolean {
  return process.env.MODA_PROD_SERVICE_ENV === 'true' && process.env.NODE_ENV !== 'test'
}

/**
 * Call once at server start. Safe to call multiple times (no-op after first).
 * Only starts collection when StatsD is sending real metrics.
 */
export function startRuntimeMetrics(): void {
  if (started) return
  started = true

  if (!isMetricsEnabled()) return

  // --- V8 heap stats (sampled on an interval) ---
  setInterval(() => {
    const heap = v8.getHeapStatistics()
    statsd.gauge('node.heap.used', heap.used_heap_size)
    statsd.gauge('node.heap.total', heap.total_heap_size)
    statsd.gauge('node.heap.limit', heap.heap_size_limit)
    statsd.gauge('node.heap.external', heap.external_memory)
    // Percentage of heap limit currently in use
    const pct = heap.heap_size_limit > 0 ? (heap.used_heap_size / heap.heap_size_limit) * 100 : 0
    statsd.gauge('node.heap.used_pct', pct)
  }, INTERVAL_MS).unref()

  // --- GC pause durations ---
  const gcObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const kind = (entry as unknown as { detail?: { kind?: number } }).detail?.kind
      // kind: 1 = Scavenge (minor), 2 = Mark-Sweep-Compact (major),
      // 4 = Incremental marking, 8 = Process weak callbacks, 15 = All
      const tag = kind === 1 ? 'minor' : kind === 2 ? 'major' : 'other'
      statsd.histogram('node.gc.pause', entry.duration, [`gc_type:${tag}`])
    }
  })
  gcObserver.observe({ entryTypes: ['gc'] })

  // --- Event-loop delay (histogram sampled every 20 ms) ---
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

/**
 * Reset the started flag. Only for use in tests.
 */
export function _resetForTesting(): void {
  started = false
}

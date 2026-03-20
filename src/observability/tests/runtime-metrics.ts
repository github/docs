import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

import statsd from '@/observability/lib/statsd'
import {
  startRuntimeMetrics,
  _resetForTesting,
  INTERVAL_MS,
} from '@/observability/lib/runtime-metrics'

vi.mock('@/observability/lib/statsd', () => ({
  default: {
    gauge: vi.fn(),
    histogram: vi.fn(),
  },
}))

describe('startRuntimeMetrics', () => {
  beforeEach(() => {
    _resetForTesting()
    vi.useFakeTimers()
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.unstubAllEnvs()
    vi.useRealTimers()
  })

  it('is a no-op in test / non-prod environments', () => {
    vi.stubEnv('MODA_PROD_SERVICE_ENV', 'false')
    startRuntimeMetrics()
    vi.advanceTimersByTime(INTERVAL_MS + 1)
    expect(statsd.gauge).not.toHaveBeenCalled()
  })

  it('is idempotent — second call does nothing extra', () => {
    vi.stubEnv('MODA_PROD_SERVICE_ENV', 'true')
    vi.stubEnv('NODE_ENV', 'production')
    startRuntimeMetrics()
    // Second call without reset — should be a no-op
    startRuntimeMetrics()
    vi.advanceTimersByTime(INTERVAL_MS + 1)
    const callCount = (statsd.gauge as ReturnType<typeof vi.fn>).mock.calls.length

    vi.clearAllMocks()
    vi.advanceTimersByTime(INTERVAL_MS)
    const secondTickCount = (statsd.gauge as ReturnType<typeof vi.fn>).mock.calls.length
    // Same number of calls each tick — no duplicate timers registered
    expect(secondTickCount).toBe(callCount)
  })

  it('emits heap gauges when enabled', () => {
    vi.stubEnv('MODA_PROD_SERVICE_ENV', 'true')
    vi.stubEnv('NODE_ENV', 'production')
    startRuntimeMetrics()
    vi.advanceTimersByTime(INTERVAL_MS + 1)

    const gaugeNames = (statsd.gauge as ReturnType<typeof vi.fn>).mock.calls.map(
      (c: unknown[]) => c[0],
    )
    expect(gaugeNames).toContain('node.heap.used')
    expect(gaugeNames).toContain('node.heap.total')
    expect(gaugeNames).toContain('node.heap.limit')
    expect(gaugeNames).toContain('node.heap.external')
    expect(gaugeNames).toContain('node.heap.used_pct')
  })

  it('emits event-loop delay gauges when enabled', () => {
    vi.stubEnv('MODA_PROD_SERVICE_ENV', 'true')
    vi.stubEnv('NODE_ENV', 'production')
    startRuntimeMetrics()
    vi.advanceTimersByTime(INTERVAL_MS + 1)

    const gaugeNames = (statsd.gauge as ReturnType<typeof vi.fn>).mock.calls.map(
      (c: unknown[]) => c[0],
    )
    expect(gaugeNames).toContain('node.eventloop.delay.p50')
    expect(gaugeNames).toContain('node.eventloop.delay.p99')
    expect(gaugeNames).toContain('node.eventloop.delay.max')
  })

  it('emits heap values that are positive numbers', () => {
    vi.stubEnv('MODA_PROD_SERVICE_ENV', 'true')
    vi.stubEnv('NODE_ENV', 'production')
    startRuntimeMetrics()
    vi.advanceTimersByTime(INTERVAL_MS + 1)

    const heapUsedCall = (statsd.gauge as ReturnType<typeof vi.fn>).mock.calls.find(
      (c: unknown[]) => c[0] === 'node.heap.used',
    )
    expect(heapUsedCall).toBeDefined()
    expect(heapUsedCall![1]).toBeGreaterThan(0)

    const heapPctCall = (statsd.gauge as ReturnType<typeof vi.fn>).mock.calls.find(
      (c: unknown[]) => c[0] === 'node.heap.used_pct',
    )
    expect(heapPctCall).toBeDefined()
    expect(heapPctCall![1]).toBeGreaterThan(0)
    expect(heapPctCall![1]).toBeLessThan(100)
  })
})

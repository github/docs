// Follows the github/alloy and github/github-ui tracing pattern.
// Uses explicit HTTP, Express, and Undici instrumentation instead of getNodeAutoInstrumentations.
// The auto helper enables about 30 instrumentations, including fs, net, and dns patches.
// These can hurt performance or leak listeners; OTel recommends disabling instrumentation-fs in production.
// This app only needs inbound HTTP and outbound fetch tracing.
// See https://thehub.github.com/epd/engineering/dev-practicals/observability/distributed-tracing/
// See https://thehub.github.com/epd/engineering/dev-practicals/observability/distributed-tracing/github-telemetry-js-user-guide/

import {
  CompositePropagator,
  W3CBaggagePropagator,
  W3CTraceContextPropagator,
} from '@opentelemetry/core'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto'
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express'
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http'
import { UndiciInstrumentation } from '@opentelemetry/instrumentation-undici'
import { NodeSDK } from '@opentelemetry/sdk-node'
import { createLogger } from '@/observability/logger'
import { toError } from '@/observability/lib/to-error'

const logger = createLogger(import.meta.url)

if (process.env.OTEL_EXPORTER_OTLP_TRACES_ENDPOINT) {
  const sdk = new NodeSDK({
    serviceName: process.env.OTEL_SERVICE_NAME || 'docs-internal',
    traceExporter: new OTLPTraceExporter({}),
    instrumentations: [
      new HttpInstrumentation(),
      new ExpressInstrumentation(),
      new UndiciInstrumentation(),
    ],
    textMapPropagator: new CompositePropagator({
      propagators: [new W3CTraceContextPropagator(), new W3CBaggagePropagator()],
    }),
  })

  try {
    sdk.start()
  } catch (error) {
    logger.error('[tracing] failed to start', {
      error: toError(error),
    })
  }

  // once prevents duplicate shutdown when SIGTERM arrives more than once.
  process.once('SIGTERM', async () => {
    try {
      await sdk.shutdown()
    } catch (error) {
      if (error instanceof Error) {
        logger.error('[tracing] shutdown error', { error })
      }
    }
  })
}

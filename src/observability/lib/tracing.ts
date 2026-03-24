// OpenTelemetry distributed tracing setup for docs-internal.
//
// Follows the same pattern as github/alloy and github/github-ui:
//   - Conditional on OTEL_EXPORTER_OTLP_TRACES_ENDPOINT being set
//   - OTLP/HTTP (proto) exporter to OTel Collector mesh
//   - W3C Trace Context + Baggage propagation
//   - Node auto-instrumentation for HTTP, Express, etc.
//
// References:
//   - https://thehub.github.com/epd/engineering/dev-practicals/observability/distributed-tracing/
//   - https://thehub.github.com/epd/engineering/dev-practicals/observability/distributed-tracing/github-telemetry-js-user-guide/

import {
  CompositePropagator,
  W3CBaggagePropagator,
  W3CTraceContextPropagator,
} from '@opentelemetry/core'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto'
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node'
import { NodeSDK } from '@opentelemetry/sdk-node'

// For tracing diagnostics, uncomment these lines:
// import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api'
// diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG)

if (process.env.OTEL_EXPORTER_OTLP_TRACES_ENDPOINT) {
  const sdk = new NodeSDK({
    serviceName: process.env.OTEL_SERVICE_NAME || 'docs-internal',
    traceExporter: new OTLPTraceExporter({}),
    instrumentations: [getNodeAutoInstrumentations()],
    textMapPropagator: new CompositePropagator({
      propagators: [new W3CTraceContextPropagator(), new W3CBaggagePropagator()],
    }),
  })

  try {
    sdk.start()
  } catch (error) {
    console.error('[tracing] failed to start:', error instanceof Error ? error.message : error)
  }

  // Gracefully shut down the SDK on process exit.
  // Uses `once` to prevent duplicate shutdown if SIGTERM is delivered multiple times.
  process.once('SIGTERM', async () => {
    try {
      await sdk.shutdown()
    } catch (error) {
      if (error instanceof Error) {
        console.error(`[tracing] shutdown error: ${error.message}`)
      }
    }
  })
}

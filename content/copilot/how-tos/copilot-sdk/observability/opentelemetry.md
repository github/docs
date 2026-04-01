---
title: OpenTelemetry instrumentation for Copilot SDK
shortTitle: OpenTelemetry
intro: Learn how to add OpenTelemetry tracing to your {% data variables.copilot.copilot_sdk_short %} applications.
product: '{% data reusables.gated-features.copilot-sdk %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

{% data reusables.copilot.copilot-sdk.technical-preview-note %}

{% data variables.copilot.copilot_sdk %} has built-in support for configuring OpenTelemetry on the CLI process and propagating W3C Trace Context between the SDK and CLI.

For examples in Python, Go, and .NET, see the `github/copilot-sdk` [repository](https://github.com/github/copilot-sdk/blob/main/docs/observability/opentelemetry.md).

## Built-in telemetry support

To opt in to telemetry, provide a `TelemetryConfig` when creating the client:

```typescript copy
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient({
  telemetry: {
    otlpEndpoint: "http://localhost:4318",
  },
});
```

### TelemetryConfig options

| Option | Node.js | Description |
|---|---|---|
| OTLP endpoint | `otlpEndpoint` | OTLP HTTP endpoint URL |
| File path | `filePath` | File path for JSON-lines trace output |
| Exporter type | `exporterType` | `"otlp-http"` or `"file"` |
| Source name | `sourceName` | Instrumentation scope name |
| Capture content | `captureContent` | Whether to capture message content |

## Trace context propagation

> [!NOTE]
> Most users don't need this. The `TelemetryConfig` above is all you need to collect traces from the CLI. Trace context propagation is an advanced feature for applications that create their own OpenTelemetry spans and want them to appear in the same distributed trace as the CLI's spans.

The SDK can propagate W3C Trace Context (`traceparent`/`tracestate`) on JSON-RPC payloads so that your application's spans and the CLI's spans are linked in one distributed trace. This is useful when, for example, you want to show the SDK call as a child of your request-handling span.

For a detailed sequence diagram of the session flow, see the `github/copilot-sdk` [repository](https://github.com/github/copilot-sdk/blob/main/docs/observability/opentelemetry.md).

### SDK to CLI (outbound)

Provide an `onGetTraceContext` callback on the client options. This is only needed if your application already uses `@opentelemetry/api` and you want to link your spans with the CLI's spans. The SDK calls this callback before `session.create`, `session.resume`, and `session.send` RPCs:

```typescript copy
import { CopilotClient } from "@github/copilot-sdk";
import { propagation, context } from "@opentelemetry/api";

const client = new CopilotClient({
  telemetry: { otlpEndpoint: "http://localhost:4318" },
  onGetTraceContext: () => {
    const carrier: Record<string, string> = {};
    propagation.inject(context.active(), carrier);
    return carrier; // { traceparent: "00-...", tracestate: "..." }
  },
});
```

### CLI to SDK (inbound)

When the CLI invokes a tool handler, the `traceparent` and `tracestate` from the CLI's span are available. Since the SDK has no OpenTelemetry dependency, these are passed as raw strings on the `ToolInvocation` object. Restore the context manually if needed:

```typescript copy
import { propagation, context, trace } from "@opentelemetry/api";

session.registerTool(myTool, async (args, invocation) => {
  // Restore the CLI's trace context as the active context
  const carrier = {
    traceparent: invocation.traceparent,
    tracestate: invocation.tracestate,
  };
  const parentCtx = propagation.extract(context.active(), carrier);

  // Create a child span under the CLI's span
  const tracer = trace.getTracer("my-app");
  return context.with(parentCtx, () =>
    tracer.startActiveSpan("my-tool", async (span) => {
      try {
        const result = await doWork(args);
        return result;
      } finally {
        span.end();
      }
    })
  );
});
```

## Further reading

* [OpenTelemetry GenAI semantic conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/) in the OpenTelemetry documentation
* [OpenTelemetry MCP semantic conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/mcp/) in the OpenTelemetry documentation
* [OpenTelemetry Python SDK](https://opentelemetry.io/docs/instrumentation/python/) in the OpenTelemetry documentation

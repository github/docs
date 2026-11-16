---
title: OpenTelemetry reference
intro: 'Find configuration options and telemetry data to monitor {% data variables.product.prodname_copilot_short %} agent activity across clients.'
versions:
  feature: copilot
contentType: reference
category:
  - Manage Copilot for a team
---

## OpenTelemetry monitoring

The {% data variables.product.prodname_copilot_short %} runtime can export traces and metrics via [OpenTelemetry](https://opentelemetry.io/) (OTel), giving you visibility into agent interactions, LLM calls, tool executions, and token usage. GenAI signal names and attributes follow the [OTel GenAI Semantic Conventions](https://github.com/open-telemetry/semantic-conventions-genai/tree/main/docs/gen-ai/). The runtime also emits {% data variables.product.prodname_copilot_short %}-specific signals under the `github.copilot.*` namespace.

The configuration and telemetry tables in this article describe the shared {% data variables.product.prodname_copilot_short %} runtime used by these clients and harnesses:

* {% data variables.copilot.copilot_cli_short %}
* The {% data variables.copilot.github_copilot_app %}
* {% data variables.product.prodname_vscode_shortname %} {% data variables.product.prodname_copilot_short %} sessions using Agent Host

{% data variables.product.prodname_vscode_shortname %}'s Local agent harness has different environment variables, defaults, and telemetry signals. For example, it uses `COPILOT_OTEL_CAPTURE_CONTENT` for content capture, defaults `service.name` to `copilot-chat`, and emits events such as `copilot_chat.session.start`. The tables below do not describe that harness or extension-emitted telemetry. See [Monitor agent usage with OpenTelemetry](https://code.visualstudio.com/docs/agents/guides/monitoring-agents) in the {% data variables.product.prodname_vscode_shortname %} documentation.

OTel configuration can also be set in {% data variables.product.prodname_vscode_shortname %}, or in an enterprise-wide `{% data variables.copilot.managed_setting_file %}` file. See [Enable OTel monitoring](https://code.visualstudio.com/docs/agents/guides/monitoring-agents#_enable-otel-monitoring) in the {% data variables.product.prodname_vscode_shortname %} documentation and [AUTOTITLE](/copilot/reference/enterprise-administrators/enterprise-managed-settings).

### OTel environment variables

| Variable | Default | Description |
|----------|---------|-------------|
| `COPILOT_OTEL_ENABLED` | `false` | Explicitly enable OTel. Not required if `OTEL_EXPORTER_OTLP_ENDPOINT` is set. |
| `OTEL_EXPORTER_OTLP_ENDPOINT` | — | OTLP endpoint URL. Setting this automatically enables OTel. |
| `COPILOT_OTEL_EXPORTER_TYPE` | `otlp-http` | Exporter type: `otlp-http` or `file`. Auto-selects `file` when `COPILOT_OTEL_FILE_EXPORTER_PATH` is set. |
| `OTEL_EXPORTER_OTLP_PROTOCOL` | `http/json` | OTLP HTTP wire protocol: `http/json` or `http/protobuf`. Only applies to the `otlp-http` exporter. |
| `OTEL_EXPORTER_OTLP_TRACES_PROTOCOL` | — | Override `OTEL_EXPORTER_OTLP_PROTOCOL` for traces only. |
| `OTEL_EXPORTER_OTLP_METRICS_PROTOCOL` | — | Override `OTEL_EXPORTER_OTLP_PROTOCOL` for metrics only. |
| `OTEL_SERVICE_NAME` | `github-copilot` | Service name in resource attributes. |
| `OTEL_RESOURCE_ATTRIBUTES` | — | Extra resource attributes as comma-separated `key=value` pairs. Use percent-encoding for special characters. |
| `OTEL_INSTRUMENTATION_GENAI_CAPTURE_CONTENT` | `NO_CONTENT` | Capture full prompt and response content. Accepts `NO_CONTENT`, `SPAN_ONLY`, `SPAN_AND_EVENT`, or `EVENT_ONLY`. See [Content capture](#content-capture). |
| `OTEL_INSTRUMENTATION_GENAI_CAPTURE_MESSAGE_CONTENT` | `false` | Legacy boolean fallback, used only when the standard content variable is empty or unset. See [Content capture](#content-capture). |
| `OTEL_LOG_LEVEL` | — | OTel diagnostic log level: `NONE`, `ERROR`, `WARN`, `INFO`, `DEBUG`, `VERBOSE`, `ALL`. |
| `COPILOT_OTEL_FILE_EXPORTER_PATH` | — | Write all signals to this file as JSON-lines. Setting this automatically enables OTel. |
| `COPILOT_OTEL_SOURCE_NAME` | `github.copilot` | Instrumentation scope name for tracer and meter. |
| `OTEL_EXPORTER_OTLP_HEADERS` | — | Authentication headers for the OTLP exporter, as comma-separated `key=value` pairs. |

### Transport security

These variables apply only to the `otlp-http` exporter with an `https://` endpoint, and only once OTel export is enabled. They do not enable OTel on their own, and they have no effect on the `file` exporter.

| Variable | Description |
|----------|-------------|
| `OTEL_EXPORTER_OTLP_CERTIFICATE` | Path to a PEM file with extra CA certificates to trust for the OTLP endpoint, such as a private or corporate CA. Merged with the operating system trust store, so public-CA endpoints still validate. |
| `OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE` | Path to the client certificate PEM for mutual TLS (mTLS). |
| `OTEL_EXPORTER_OTLP_CLIENT_KEY` | Path to the matching unencrypted private key PEM. Both certificate and key must be set together, and passphrase-protected keys are not supported. |

Per-signal variants override the generic variables for a single signal: `OTEL_EXPORTER_OTLP_TRACES_CERTIFICATE`, `OTEL_EXPORTER_OTLP_METRICS_CERTIFICATE`, and the matching `_CLIENT_CERTIFICATE` and `_CLIENT_KEY` names.

> [!WARNING]
> If the `otlp-http` exporter resolves to an `http://` endpoint, including the default `http://localhost:4318`, export is disabled rather than sent in cleartext. Startup is not aborted and nothing is reported on the console—the only signal is a warning in the process log. `NODE_EXTRA_CA_CERTS` does not affect the OTLP exporter, which uses a native HTTP transport, so use the variables above instead.

### Dynamic authentication headers

In {% data variables.copilot.copilot_cli_short %}, set `telemetry.headersProvider` in your user settings or in an enterprise-managed telemetry policy to run a command that supplies fresh OTLP headers. Repository settings never apply this setting.

```json
{
  "telemetry": {
    "headersProvider": {
      "path": "node",
      "args": ["bin/otel-headers.js"],
      "refreshIntervalMs": 1740000
    }
  }
}
```

| Field | Description |
|-------|-------------|
| `path` | Executable name, absolute path, or home-relative path. This is not a shell command, and workspace-relative paths are rejected. |
| `args` | Optional arguments, passed literally. Select an interpreter explicitly for scripts (for example, `node`). |
| `refreshIntervalMs` | Optional refresh interval. Default: 29 minutes. |

Set `headersProvider` to `false` to disable dynamic headers.

* The command runs from your home directory with a 30-second deadline. Its stdout must be a JSON object of string header values. An empty object clears dynamic headers.
* The provider runs only for active HTTP OTLP exporters. Use HTTPS, because an HTTP endpoint produces a warning and OTLP redirects are rejected.
* Header precedence, from highest to lowest: managed helper output, managed static headers, user helper output, then `OTEL_EXPORTER_OTLP_HEADERS`. A managed helper overrides a user helper, and a managed `false` disables helpers.
* If a refresh fails, exports that need dynamic headers are blocked until the next refresh.

### Traces

The runtime emits a hierarchical span tree for each agent interaction. Each tree contains an `invoke_agent` root span, with `chat` and `execute_tool` child spans. In plan mode, an intermediate `plan` span wraps the task-decomposition work and parents its own `chat` and `execute_tool` spans. `chat` spans are named `chat {model}`, falling back to `chat` when the model is unavailable. Subagent invocations are linked into the same trace by context propagation.

#### `invoke_agent` span attributes

Wraps the entire agent invocation: all LLM calls and tool executions for one user message.

* Both **top-level sessions** and **subagent invocations** (for example, explore, task) use span kind `INTERNAL` (in-process); provider-facing inference is represented by child `CLIENT` `chat` spans.
* **Top-level sessions** additionally carry `server.address` and `server.port`; subagent invocations do not.

| Attribute | Description | Scope |
|-----------|-------------|-----------|
| `gen_ai.operation.name` | `invoke_agent` | Both |
| `gen_ai.provider.name` | Provider (for example, `github`, `anthropic`) | Both |
| `gen_ai.agent.id` | Stable agent-definition identifier when known; top-level default uses `github.copilot.default` | Both |
| `gen_ai.agent.name` | Agent name (when available) | Both |
| `gen_ai.agent.description` | Agent description (when available) | Both |
| `gen_ai.agent.version` | Agent definition version when known; otherwise runtime version | Both |
| `gen_ai.conversation.id` | Session identifier | Both |
| `enduser.pseudo.id` | Pseudonymous {% data variables.product.prodname_copilot_short %} user identifier from `analytics_tracking_id` when available | Both |
| `gen_ai.request.model` | Requested model | Both |
| `gen_ai.response.finish_reasons` | `["stop"]` or `["error"]` | Both |
| `gen_ai.usage.input_tokens` | Total input tokens (all turns) | Both |
| `gen_ai.usage.output_tokens` | Total output tokens (all turns) | Both |
| `gen_ai.usage.cache_read.input_tokens` | Cached input tokens read | Both |
| `gen_ai.usage.cache_write.input_tokens` | Cached input tokens written | Both |
| `gen_ai.usage.reasoning.output_tokens` | Reasoning output tokens | Both |
| `github.copilot.turn_count` | Number of LLM round-trips | Both |
| `github.copilot.cost` | Per-request model multiplier used for billing. **Not a monetary value.** | Both |
| `github.copilot.nano_aiu` | AI units consumed, in nano AI units (1 AIU = 1,000,000,000 nano AIU) | Both |
| `server.address` | Server hostname | Top-level only |
| `server.port` | Server port | Top-level only |
| `error.type` | Error class name (on error) | Both |
| `gen_ai.input.messages` | Full input messages as JSON (content capture only) | Both |
| `gen_ai.output.messages` | Full output messages as JSON (content capture only) | Both |
| `gen_ai.system_instructions` | System prompt content as JSON (content capture only) | Both |
| `gen_ai.tool.definitions` | Tool schemas as JSON (content capture only) | Both |

#### `chat` span attributes

One span per LLM request. Span kind: `CLIENT`.

| Attribute | Description |
|-----------|-------------|
| `gen_ai.operation.name` | `chat` |
| `gen_ai.provider.name` | Provider name |
| `gen_ai.request.model` | Requested model |
| `gen_ai.request.stream` | Whether streaming mode was used (streaming only) |
| `gen_ai.conversation.id` | Session identifier |
| `gen_ai.response.finish_reasons` | Stop reasons |
| `gen_ai.response.id` | Response ID |
| `gen_ai.response.model` | Resolved model |
| `gen_ai.response.time_to_first_chunk` | Time to first streaming chunk, in seconds (streaming only) |
| `gen_ai.usage.cache_write.input_tokens` | Cached tokens written |
| `gen_ai.usage.cache_read.input_tokens` | Cached tokens read |
| `gen_ai.usage.input_tokens` | Input tokens this turn |
| `gen_ai.usage.output_tokens` | Output tokens this turn |
| `gen_ai.usage.reasoning.output_tokens` | Reasoning output tokens this turn |
| `github.copilot.request.type` | Set to `compaction` on spans emitted for conversation compaction |
| `github.copilot.cost` | Per-request model multiplier used for billing. **Not a monetary value.** |
| `github.copilot.nano_aiu` | AI units consumed this turn, in nano AI units (1 AIU = 1,000,000,000 nano AIU) |
| `github.copilot.server_duration` | Server-side duration |
| `github.copilot.initiator` | Request initiator |
| `github.copilot.turn_id` | Turn identifier |
| `github.copilot.interaction_id` | Interaction identifier |
| `server.address` | Server hostname |
| `server.port` | Server port |
| `error.type` | Error class name (on error) |
| `gen_ai.input.messages` | Full prompt messages as JSON (content capture only) |
| `gen_ai.output.messages` | Full response messages as JSON (content capture only) |
| `gen_ai.system_instructions` | System prompt content as JSON (content capture only) |

#### `execute_tool` span attributes

One span per tool call. Span kind: `INTERNAL`.

| Attribute | Description |
|-----------|-------------|
| `gen_ai.operation.name` | `execute_tool` |
| `gen_ai.provider.name` | Provider name (when available) |
| `gen_ai.tool.name` | Tool name (for example, `readFile`) |
| `gen_ai.tool.type` | `function` |
| `gen_ai.tool.call.id` | Tool call identifier |
| `gen_ai.tool.description` | Tool description |
| `error.type` | Error class name (on error) |
| `gen_ai.tool.call.arguments` | Tool input arguments as JSON (content capture only) |
| `gen_ai.tool.call.result` | Tool output as JSON (content capture only) |

> [!NOTE]
> To measure AI unit consumption, read `github.copilot.nano_aiu` from the root `invoke_agent` span only. The attribute is also stamped on the child `chat` spans, so summing it across every span double-counts. `github.copilot.cost` is a per-request model multiplier used for billing calculations—it is not a currency value and must not be interpreted as one.

### Metrics

The following metrics are emitted.

#### GenAI convention metrics

| Metric | Type | Unit | Description |
|--------|------|------|-------------|
| `gen_ai.client.operation.duration` | Histogram | `s` | Duration of a GenAI operation other than inference |
| `gen_ai.client.inference.duration` | Histogram | `s` | Duration of a single LLM API call |
| `gen_ai.client.inference.operation.input_tokens` | Histogram | `{token}` | Input tokens per model call |
| `gen_ai.client.inference.operation.output_tokens` | Histogram | `{token}` | Output tokens per model call |
| `gen_ai.client.inference.usage.input_tokens` | Counter | `{token}` | Input tokens used, including cached tokens |
| `gen_ai.client.inference.usage.output_tokens` | Counter | `{token}` | Output tokens used, including reasoning tokens |
| `gen_ai.client.inference.usage.cache_read.input_tokens` | Counter | `{token}` | Input tokens served from a provider-managed cache |
| `gen_ai.client.inference.usage.cache_write.input_tokens` | Counter | `{token}` | Input tokens written to a provider-managed cache |
| `gen_ai.client.inference.usage.reasoning.output_tokens` | Counter | `{token}` | Output tokens used for reasoning |
| `gen_ai.client.inference.time_to_first_chunk` | Histogram | `s` | Time to receive the first chunk of a streaming response |
| `gen_ai.client.inference.time_per_output_chunk` | Histogram | `s` | Inter-chunk latency after the first chunk |
| `gen_ai.invoke_agent.duration` | Histogram | `s` | End-to-end duration of one agent invocation |
| `gen_ai.invoke_agent.inference_calls` | Histogram | `{inference_call}` | Number of model calls made during one agent invocation, counted at provider dispatch (failed and partial calls included; requests blocked before dispatch excluded). Dimension: `gen_ai.agent.name`. |
| `gen_ai.invoke_agent.tool_calls` | Histogram | `{tool_call}` | Number of client-side tool calls made during one agent invocation (failed and partial calls included; synthetic tool lifecycles and provider-executed server-side tools excluded). Dimension: `gen_ai.agent.name`. |
| `gen_ai.execute_tool.duration` | Histogram | `s` | Duration of a single tool execution |
| `gen_ai.invoke_workflow.duration` | Histogram | `s` | End-to-end duration of a GenAI workflow (for example, a fleet mode run orchestrating parallel subagents). |

Token metrics aggregate foreground and compaction work. `github.copilot.request.type` is a span attribute only, so it is not available as a metric dimension for separating them.

#### Vendor-specific metrics

| Metric | Type | Unit | Description |
|--------|------|------|-------------|
| `github.copilot.tool.call.count` | Counter | `{call}` | Tool invocations by `gen_ai.tool.name` and `success` |
| `github.copilot.tool.call.duration` | Histogram | `s` | Tool execution latency by `gen_ai.tool.name` |
| `github.copilot.agent.turn.count` | Histogram | `{turn}` | LLM round-trips per agent invocation |
| `github.copilot.mcp.server.connection.count` | Counter | `{attempt}` | Completed MCP server connection attempts by transport and outcome |
| `github.copilot.code.lines_added` | Counter | `{line}` | Lines added by file-editing tools, recorded in real time |
| `github.copilot.code.lines_removed` | Counter | `{line}` | Lines removed by file-editing tools, recorded in real time |
| `github.copilot.sandbox.operation.count` | Counter | `{decision}` | Bounded sandbox governance decisions, deduplicated |
| `github.copilot.sandbox.spawn.duration` | Histogram | `s` | Sandboxed process spawn latency |
| `github.copilot.sandbox.policy.path.count` | Histogram | `{path}` | Effective filesystem policy paths by access class |

> [!NOTE]
> Sandbox metrics are bounded operational signals, not a complete audit log. An unchanged policy resolution is deduplicated rather than counted again, and these metrics never carry file paths, commands, or proxy URLs as dimensions.

### Span events

Key lifecycle events recorded on the active `chat` or `invoke_agent` span. This is not an exhaustive list; the runtime also emits sandbox governance events and additional session events.

| Event | Description | Key attributes |
|-------|-------------|----------------|
| `github.copilot.hook.start` | A hook began executing | `github.copilot.hook.type`, `github.copilot.hook.invocation_id` |
| `github.copilot.hook.end` | A hook completed successfully | `github.copilot.hook.type`, `github.copilot.hook.invocation_id` |
| `github.copilot.hook.error` | A hook failed | `github.copilot.hook.type`, `github.copilot.hook.invocation_id`, `github.copilot.hook.error_message` |
| `github.copilot.session.truncation` | Conversation history was truncated | `github.copilot.token_limit`, `github.copilot.pre_tokens`, `github.copilot.post_tokens`, `github.copilot.pre_messages`, `github.copilot.post_messages`, `github.copilot.tokens_removed`, `github.copilot.messages_removed`, `github.copilot.performed_by` |
| `github.copilot.session.compaction_start` | History compaction began | None |
| `github.copilot.session.compaction_complete` | History compaction completed | `github.copilot.success`, `github.copilot.pre_tokens`, `github.copilot.post_tokens`, `github.copilot.tokens_removed`, `github.copilot.messages_removed`, `github.copilot.message` (content capture only) |
| `github.copilot.skill.invoked` | A skill was invoked | `github.copilot.skill.name`, `github.copilot.skill.path`, `github.copilot.skill.plugin_name`, `github.copilot.skill.plugin_version` |
| `github.copilot.session.shutdown` | Session is shutting down | `github.copilot.shutdown_type`, `github.copilot.total_premium_requests`, `github.copilot.lines_added`, `github.copilot.lines_removed`, `github.copilot.files_modified_count` |
| `github.copilot.session.abort` | User cancelled the current operation | `github.copilot.abort_reason` |
| `gen_ai.client.operation.exception` | Session error | `github.copilot.error_type`, `github.copilot.error_status_code`, `github.copilot.error_provider_call_id` |

### Resource attributes

All signals carry these resource attributes.

| Attribute | Value |
|-----------|-------|
| `service.name` | `github-copilot` (configurable via `OTEL_SERVICE_NAME`) |
| `service.version` | Runtime version |

### Content capture

By default, no prompt content, responses, or tool arguments are captured—only metadata like model names, token counts, and durations. To capture full content, set `OTEL_INSTRUMENTATION_GENAI_CAPTURE_CONTENT` to `SPAN_ONLY` or `SPAN_AND_EVENT`. The values `NO_CONTENT` (the default) and `EVENT_ONLY` leave span content capture off.

If `OTEL_INSTRUMENTATION_GENAI_CAPTURE_CONTENT` is empty or unset, the runtime falls back to the legacy boolean variable `OTEL_INSTRUMENTATION_GENAI_CAPTURE_MESSAGE_CONTENT`. An unrecognized value for the standard variable disables span content capture and logs a warning.

> [!WARNING]
> Content capture may include sensitive information such as code, file contents, and user prompts. Only enable this in trusted environments.

When content capture is enabled, the following attributes are populated.

| Attribute | Content |
|-----------|---------|
| `gen_ai.input.messages` | Full prompt messages (JSON) |
| `gen_ai.output.messages` | Full response messages (JSON) |
| `gen_ai.system_instructions` | System prompt content (JSON) |
| `gen_ai.tool.definitions` | Tool schemas (JSON). Schema metadata keeps an independent opt-in: this attribute is populated only by the legacy `OTEL_INSTRUMENTATION_GENAI_CAPTURE_MESSAGE_CONTENT` variable, not by `OTEL_INSTRUMENTATION_GENAI_CAPTURE_CONTENT`. |
| `gen_ai.tool.call.arguments` | Tool input arguments |
| `gen_ai.tool.call.result` | Tool output |

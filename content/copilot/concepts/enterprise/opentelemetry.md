---
title: OpenTelemetry for agent monitoring
shortTitle: OpenTelemetry
intro: Understand how {% data variables.product.prodname_copilot_short %} agents perform and interact with models and tools.
versions:
  feature: copilot
contentType: concepts
category:
  - Manage Copilot for a team
redirect_from:
  - /copilot/concepts/agents/opentelemetry
---

OpenTelemetry (OTel) is an open source observability framework. It provides a standard way to collect telemetry events and metrics and export them to compatible observability tools. For more information, see [What is OpenTelemetry?](https://opentelemetry.io/docs/what-is-opentelemetry/) on the OTel website.

When you enable OTel monitoring, you can send data from users' {% data variables.product.prodname_copilot_short %} clients to an OTel-compatible backend. This lets you analyze agent sessions and understand agent usage across your enterprise.

## What data does {% data variables.product.prodname_copilot_short %} send?

{% data variables.product.prodname_copilot_short %} sends three types of data:

* **Traces** show the flow of an agent session and connect each step, including model calls and tool use. For example, a trace can show an agent calling a model, using the `readFile` tool, and calling the model again to produce a response.
* **Metrics** are numeric measurements that help you identify patterns over time. For example, token usage metrics track the number of input and output tokens used in model calls.
* **Events** record individual actions at a specific point in time. For example, an edit feedback event records whether a user accepted or rejected an agent edit.

By default, the data does not include directly identifying attributes, prompts, responses, tool arguments, tool results, or raw policy details. Enterprise administrators can independently enable the following capture classes through managed settings:

* **Identity** adds the authenticated {% data variables.product.prodname_copilot_short %} account name, local operating-system account, and machine name. This lets you attribute activity without collecting conversation or tool content.
* **Prompts** include user, system, and developer prompt content and associated model input.
* **Responses** include assistant response and supported reasoning content.
* **Tool arguments** include raw arguments, commands, tool schemas, and identifiers for tools, MCP servers, plugins, and hooks.
* **Tool output** includes tool results and execution error details.
* **Policy detail** includes unbounded policy information such as raw sandbox filesystem paths. Bounded policy posture and outcomes remain available when this class is disabled.

Fine-grained capture controls are supported in {% data variables.copilot.copilot_cli_short %}, the {% data variables.copilot.github_copilot_app %}, and {% data variables.product.prodname_vscode_shortname %} sessions using Agent Host. {% data variables.product.prodname_vscode_shortname %}'s local agent harness supports identity capture and the legacy all-or-nothing content capture setting, but does not independently apply the five content capture classes.

Captured content may contain sensitive information, including source code, file contents, user prompts, commands, tool results, and workspace or user-profile paths. Enable only the classes required for your use case.

## Enabling OpenTelemetry

To collect OTel data from users' {% data variables.product.prodname_copilot_short %} clients:

1. **Set up an observability backend.** Choose a secure backend that supports the OpenTelemetry Protocol (OTLP). Some backends can receive OTLP data directly. For other backends, deploy an [OpenTelemetry Collector](https://opentelemetry.io/docs/collector/) to receive, process, and forward the data. For examples, see [Use with observability backends](https://code.visualstudio.com/docs/agents/guides/monitoring-agents#_use-with-observability-backends) in the {% data variables.product.prodname_vscode_shortname %} documentation.
1. **Configure users' clients.** Set configuration values to enable OTel in each client and configure it to send data to your OTLP endpoint by configuring the endpoint, headers, and authentication token.
1. **Interpret data.** Use the collected data to analyze sessions and identify trends. For an example implementation, see [Monitor AI coding agents with Grafana](https://learn.microsoft.com/en-gb/azure/managed-grafana/grafana-opentelemetry-app-insights) in the Microsoft documentation.

### Configuring users' clients

Enterprises can enforce OTel configuration across supported clients with managed settings. Explicit managed values take precedence over local settings, SDK configuration, and environment variables. The `telemetry` property includes keys for enabling and routing OpenTelemetry and independently controlling identity and sensitive content capture.

For more information, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started) and [AUTOTITLE](/copilot/reference/enterprise-administrators/enterprise-managed-settings).

## Client documentation

For more details of how OpenTelemetry is used across clients, see:

* [Monitor agent usage with OpenTelemetry](https://code.visualstudio.com/docs/agents/guides/monitoring-agents) in the {% data variables.product.prodname_vscode_shortname %} documentation
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/observability/opentelemetry)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#opentelemetry-monitoring)

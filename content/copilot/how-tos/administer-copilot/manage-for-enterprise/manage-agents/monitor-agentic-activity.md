---
title: Monitoring agentic activity in your enterprise
intro: 'Track agentic activity in your enterprise to ensure continued compliance.'
permissions: Enterprise owners
versions:
  feature: copilot
shortTitle: Monitor agentic activity
contentType: how-tos
category:
  - Manage Copilot for a team
docsTeamMetrics:
  - ai-governance
---

## Viewing active and recent agentic sessions in your enterprise

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
1. Towards the top of the page, in the "Agent sessions" section, you will see the three most recent agent sessions in your enterprise. To view all agent sessions from the last 24 hours, click **View all**.
1. To filter agent sessions, click the search bar at the top of the list, then press <kbd>Space</kbd>. From the dropdown menu that appears, select your filter criteria. For a list of available filters, see [AUTOTITLE](/copilot/reference/enterprise-administrators/agent-session-filters).

## Tracking agentic activity in your enterprise through the audit log

Track agentic activity on {% data variables.product.github %} or through streaming to an external destination.

### Viewing agentic activity in the audit log on {% data variables.product.github %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
1. At the bottom of the page, click {% octicon "log" aria-hidden="true" aria-label="log" %} **Audit logs**.

### Streaming agentic activity from the audit log

{% data reusables.copilot.agent-session-streaming-availability-note %}

To enable streaming for {% data variables.product.prodname_copilot_short %} agent session events and configure a streaming destination from your enterprise audit log settings, see [AUTOTITLE](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise#enabling-audit-log-streaming-of-copilot-agent-session-events).

In addition to streaming, you can also retrieve Copilot usage data through the REST API. See [AUTOTITLE](/rest/copilot/copilot-usage-metrics#get-copilot-usage-records-for-an-enterprise).

## Enabling OpenTelemetry

OpenTelemetry (OTel) is an open source observability framework. It provides a standard way to collect telemetry events and metrics and export them to compatible observability tools.

When you enable OTel monitoring, you can send data from users' {% data variables.product.prodname_copilot_short %} clients to an OTel-compatible backend. This lets you analyze agent sessions and understand agent usage across your enterprise.

To attribute agent activity to a user without collecting prompts, responses, or tool content, enable the `identity` capture class in enterprise managed settings:

```json
{
  "telemetry": {
    "enabled": true,
    "endpoint": "https://otel-collector.example.com",
    "protocol": "http/protobuf",
    "capture": {
      "identity": true
    }
  }
}
```

This configuration adds the authenticated {% data variables.product.prodname_copilot_short %} account name, local operating-system account, and machine name to OTel data. Every capture class defaults to `false`. You can independently enable additional classes when an audit or investigation requires prompt, response, tool, or raw policy content.

In {% data variables.product.prodname_vscode_shortname %}, identity capture works for both local and Agent Host sessions. The five independent content capture classes require Agent Host; the local agent harness uses the legacy all-or-nothing `captureContent` setting.

> [!WARNING]
> Additional capture classes can include source code, file contents, prompts, commands, tool results, MCP identifiers, and workspace or user-profile paths. Enable only the classes required for your use case, and send the data to an approved collector.

For the complete schema and the data controlled by each field, see [AUTOTITLE](/copilot/reference/enterprise-administrators/enterprise-managed-settings#telemetry). For more information about the exported data, see [AUTOTITLE](/copilot/concepts/enterprise/opentelemetry).

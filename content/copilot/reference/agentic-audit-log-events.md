---
title: Audit log events for agents
shortTitle: Agentic audit log events
intro: 'Understand the structure of audit log events for agents in your enterprise.'
permissions: Enterprise owners
versions:
  feature: copilot
contentType: reference
category:
  - Learn about Copilot
---

You can apply the `actor:Copilot` filter to your enterprise audit log to view agentic activity over the last 180 days.

The following key fields can help you interpret agentic events:

| Field | Description | Example value |
| --- | --- | --- |
| `action` | The action performed by the agent, such as creating a pull request. | `pull_request.create` |
| `actor_is_agent` | Indicates whether the actor is an AI agent. This will always be `true` for agentic audit log events. | `true` |
| `agent_session_id` | A unique identifier linking to the specific agent session that generated the event. This field only appears when the event is the result of an agent session. | `012345a6-b7c8-9012-de3f-45gh678i9012` |
| `user` | The person who initiated the agentic event. | `octocat` |

## Streaming audit log events

{% data reusables.copilot.agent-session-streaming-availability-note %}

The table below shows the fields that are included in each streamed {% data variables.product.prodname_copilot_short %} API usage record.

Each streamed record is a JSON object with the following properties:

| Field | Type | Description |
| --- | --- | --- |
| `type` | `string` | The record type (`request` or `response`). |
| `user_id` | `integer` | The ID of the user who made the request. |
| `enterprise_id` | `integer` | The ID of the enterprise. |
| `endpoint` | `string` | The {% data variables.product.prodname_copilot_short %} API endpoint the usage record interacted with. |
| `body` | `string` | The request or response body (JSON-encoded string). |
| `@timestamp` | `integer` | Milliseconds since Unix epoch. |
| `truncated` | `boolean` | `true` when the `body` field has been trimmed to fit within the 1 MB document size limit. Omitted (treated as `false`) when the body is delivered in full. |
| `event_id` | `string` | Unique event identifier for this streamed usage record. |
| `github_request_id` | `string` | {% data variables.product.github %} request identifier associated with the {% data variables.product.prodname_copilot_short %} usage event. |

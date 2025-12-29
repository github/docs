---
title: Reconciling Copilot usage metrics across dashboards, APIs, and reports
shortTitle: Reconciling Copilot usage metrics
intro: Understand how {% data variables.product.prodname_copilot_short %} usage metrics differ between dashboards, APIs, and exported reports.
permissions: '{% data reusables.copilot.usage-metrics-permissions %}'
versions:
  feature: copilot
topics:
  - Copilot
contentType: reference
allowTitleToDifferFromFilename: true
redirect_from:
  - /early-access/copilot-metrics/dashboards/best-practices-for-correlating-usage-metrics
  - /copilot/reference/reconciling-usage-metrics
---

{% data reusables.copilot.usage-metrics-preview %}

The {% data variables.product.prodname_copilot_short %} usage metrics dashboard, APIs, and export files all use the same underlying telemetry data, but they aggregate and present it differently. Understanding these differences helps you reconcile numbers across sources and trust your analysis when preparing internal reports.

* The {% data variables.product.prodname_copilot_short %} usage metrics dashboard reports data at the **enterprise-level**.
* The {% data variables.product.prodname_copilot_short %} usage metrics APIs support **enterprise-, organization-, and user-level** records.

## Prerequisite

{% data variables.product.prodname_copilot_short %} usage metrics depend on **telemetry from users’ IDEs**. If a developer has disabled telemetry in their IDE, their {% data variables.product.prodname_copilot_short %} activity will **not** appear in the dashboard, API reports, or exported data.

If you notice missing users or unexpectedly low adoption numbers, verify IDE telemetry settings before troubleshooting other causes.

## Metric alignment

The dashboard and APIs use shared definitions for key metrics:

| Concept | Dashboard metric | API or export field | Notes |
|:--|:--|:--|:--|
| Active users | Daily/weekly/total active users | `user_initiated_interaction_count` > 0 | A user is considered active if they interacted with {% data variables.product.prodname_copilot_short %} in their IDE on that day. |
| Acceptance rate | Code completion acceptance rate | `code_acceptance_activity_count` ÷ `code_generation_activity_count` | Both sources calculate acceptance rate the same way, though rounding may differ. |
| Agent adoption | Agent adoption chart | `totals_by_feature` where feature = “agent” | Reflects users who interacted with the {% data variables.copilot.copilot_agent_short %}. |
| Language usage | Language usage charts | `totals_by_language_feature` or `totals_by_language_model` | The dashboard visualizes these aggregated fields. |

For complete field descriptions, see [AUTOTITLE](/copilot/reference/copilot-usage-metrics).

## Discrepancies between reports

Small differences between dashboard data, API reports, and exports are expected. These variations are usually caused by differences in time windows, scope, or data freshness.

### Time windows

Each data source aggregates data differently.

| Source | Time window | Aggregation method |
|:--|:--|:--|
| Dashboard | 28-day rolling window | Metrics are aggregated continuously over the past 28 days to smooth fluctuations. |
| APIs | Daily | Each record represents a single day per user, enabling daily trend analysis. |
| NDJSON exports | Daily | Mirrors API output for BI tools and long-term reporting. |

Aligning your reporting period with the dashboard’s 28-day window ensures consistent comparisons.

### Delayed telemetry

Because IDE telemetry is processed asynchronously, data for recent days may appear incomplete or missing. Data typically finalizes within three full UTC days. Apparent drops in recent daily metrics often resolve once telemetry is fully processed.

### Export timing

NDJSON files reflect data available at the time of export. If a file is downloaded before new telemetry is processed, the data may lag behind the dashboard or API. Re-exporting the file after the three-day window provides the most accurate view.

## `Unknown` values

The value `Unknown` appears in some API or export breakdowns when telemetry from the IDE client lacks sufficient detail to categorize the activity. This is expected behavior and does not indicate missing data.

| Breakdown | Explanation |
|:--|:--|
| Language | Shown as `Unknown` when the IDE cannot identify the programming language of the active file. |
| Feature | Appears when an older client sends a generic event without specifying a chat mode (for example, `chat_panel_unknown_mode`). |
| Model | Appears when the event lacks information identifying the model used. Some internal models (for example, `gpt-4o-mini`) may appear alongside `Unknown` when used for non-user-facing operations such as summarization or intent detection. |

`Unknown` values are excluded from dashboard visualizations but appear in API and NDJSON data for completeness. The amount of `Unknown` data decreases as users upgrade to newer IDE and extension versions that send richer telemetry.

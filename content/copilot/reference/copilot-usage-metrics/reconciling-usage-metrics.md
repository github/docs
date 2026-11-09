---
title: Reconciling Copilot usage metrics across dashboards, APIs, and reports
shortTitle: Reconciling Copilot usage metrics
intro: '{% data variables.product.prodname_copilot_short %} usage metrics are derived from the same underlying telemetry but are aggregated and presented differently across dashboards, APIs, and exported reports.'
permissions: '{% data reusables.copilot.usage-metrics-permissions %}'
versions:
  feature: copilot
contentType: reference
allowTitleToDifferFromFilename: true
redirect_from:
  - /early-access/copilot-metrics/dashboards/best-practices-for-correlating-usage-metrics
  - /copilot/reference/reconciling-usage-metrics
category:
  - Copilot usage metrics
  - Reconcile and validate metrics
  - Track Copilot usage
---

The {% data variables.product.prodname_copilot_short %} usage metrics dashboard, APIs, and export files all use the same underlying telemetry data, but they aggregate and present it differently. Understanding these differences helps you reconcile numbers across sources and trust your analysis when preparing internal reports.

* The {% data variables.product.prodname_copilot_short %} usage metrics dashboards are available at the **enterprise** and **organization** level.
* The {% data variables.product.prodname_copilot_short %} usage metrics APIs support **enterprise-, organization-, repository-, and user-level** records.
* Team-level totals are not pre-aggregated. They are constructed by joining the user-teams report with the per-user usage metrics report. See [AUTOTITLE](/copilot/reference/copilot-usage-metrics/team-level-metrics).
* Repository-level reports provide daily pull request activity for repositories with activity on the requested day. See [AUTOTITLE](/copilot/reference/copilot-usage-metrics/copilot-usage-metrics#repository-level-fields-api-only).

## Prerequisite

IDE-based {% data variables.product.prodname_copilot_short %} usage metrics depend on **telemetry from users' IDEs**. If a developer has disabled telemetry in their IDE, their detailed IDE-based {% data variables.product.prodname_copilot_short %} activity, such as per-IDE, per-feature, and lines-of-code breakdowns, will **not** appear in the dashboard, API reports, or exported data. However, server-side telemetry may still surface these users in your active user counts even when client telemetry is unavailable.

If you notice missing users or unexpectedly low adoption numbers, verify IDE telemetry settings before troubleshooting other causes. For supported IDE and extension versions, see [AUTOTITLE](/copilot/reference/copilot-usage-metrics/usage-metrics-coverage).

{% data variables.copilot.copilot_cli_short %} metrics (`daily_active_cli_users` and `totals_by_cli`) are collected and reported separately from IDE telemetry. CLI usage does **not** contribute to IDE-based active user counts or other IDE metrics.

Do not reconcile `totals_by_3rd_party_agent[].user_initiated_interaction_count`, which counts user-initiated {% data variables.copilot.agent_app %} jobs, with the top-level `user_initiated_interaction_count`, which counts explicit prompts from other supported telemetry.

## Organization attribution

Organization-level {% data variables.product.prodname_copilot_short %} usage metrics are based on organization membership, not on where individual actions occur. To appear in an enterprise's metrics, a user must have an active {% data variables.product.prodname_copilot_short %} seat assigned within that enterprise.

Once a user has a seat in the enterprise, their usage is attributed to every organization in that enterprise they belong to, regardless of where the seat is assigned. For example:

* If licenses are assigned in a dedicated organization for administrative purposes, users still appear in the metrics for the other organizations in the enterprise they belong to.
* If a user also has a {% data variables.product.prodname_copilot_short %} seat in a separate organization outside the enterprise, their activity is still included in the enterprise's organization-level metrics as long as they have at least one seat within the enterprise.

A single user's usage can appear in multiple organization dashboards, while that user is counted only once in the enterprise-level total. Don't add organization-level totals to calculate an enterprise total.

Organization-level reports are available starting December 12, 2025.

### Interpreting pull request lifecycle metrics across scopes

Pull request lifecycle metrics are available at both the organization and enterprise level. When comparing reports, keep the following in mind:

* **Deduplication**: Enterprise-level reports deduplicate users across organizations. Organization-level reports do not.
* **Pull request-only data**: Pull request lifecycle metrics may appear even if IDE usage metrics are absent, since pull request data is derived from repository activity.
* **Attribution timing**: If a repository or organization is transferred between owners, pull request creation, review, and merge events may be attributed to different entities depending on when each event occurred.

## Metric alignment

The dashboard and APIs use shared definitions for key metrics:

| Concept | Dashboard metric | API or export field | Notes |
|:--|:--|:--|:--|
| Active users | Daily/weekly/total active users | `user_initiated_interaction_count` > 0 | A user is considered active if they interacted with {% data variables.product.prodname_copilot_short %} in their IDE on that day. |
| Acceptance rate | Code completion acceptance rate | `code_acceptance_activity_count` ÷ `code_generation_activity_count` | Both sources calculate acceptance rate the same way, though rounding may differ. |
| Agent adoption | Agent adoption chart | `totals_by_feature` where feature = “agent” | Reflects users who interacted with the {% data variables.copilot.copilot_agent_short %}. |
| Language usage | Language usage charts | `totals_by_language_feature` or `totals_by_language_model` | The dashboard visualizes these aggregated fields. |
| Adoption cohort/phase | Adoption cohort distribution (impact dashboard) | `ai_adoption_phase`, `totals_by_ai_adoption_phase` | The phase definitions are shared. The dashboard uses a trailing 28-day population. Within `totals_by_ai_adoption_phase`, `total_engaged_users` counts users active on the record's specific day, while `users_in_phase_28d` contains the full rolling 28-day phase population as of that day. Don't compare the daily count directly with the dashboard's rolling population. Users displayed as "Chat-first users" in the dashboard correspond to the `No Cohort` API value. |

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

Aligning your reporting period with the dashboard's 28-day window makes most comparisons more consistent. For adoption cohorts, distinguish the daily `total_engaged_users` count from the rolling `users_in_phase_28d` population. Align the snapshot date and scope when comparing rolling populations. Don't add daily active-user counts to calculate a distinct 28-day population, because the same user can be active on multiple days.

### Delayed telemetry

Because IDE telemetry is processed asynchronously, data for recent days may appear incomplete or missing. Data for a given day is available within two full UTC days after that day closes. Apparent drops in recent daily metrics often resolve once telemetry is processed.

### Export timing

NDJSON files reflect data available at the time of export. If a file is downloaded before new telemetry is processed, the data may lag behind the dashboard or API. If your export includes days still within the two-full-UTC-day processing window, export the data again after that window closes.

## `Unknown` values

The value `Unknown` appears in some API or export breakdowns when telemetry from the IDE client lacks sufficient detail to categorize the activity. This is expected behavior and does not indicate missing data.

| Breakdown | Explanation |
|:--|:--|
| Language | Shown as `Unknown` when the IDE cannot identify the programming language of the active file. |
| Feature | Appears when an older client sends a generic event without specifying a chat mode (for example, `chat_panel_unknown_mode`). |
| Model | Appears when the event lacks information identifying the model used. Some internal models (for example, `gpt-4o-mini`) may appear alongside `Unknown` when used for non-user-facing operations such as summarization or intent detection. |

Model breakdowns can include models that developers didn't select directly. For example, {% data variables.product.prodname_copilot_short %} can use other models for Auto model selection or for background tasks.

`Unknown` values are excluded from dashboard visualizations but appear in API and NDJSON data for completeness. The amount of `Unknown` data decreases as users upgrade to newer IDE and extension versions that send richer telemetry.

## Users surfaced by server-side telemetry

{% data variables.product.prodname_copilot_short %} usage metrics combine client-side and server-side telemetry to identify active users. Users confirmed as active through server-side telemetry, but for whom no client telemetry was received, are included in your active user totals (such as `daily_active_users`). When available, these users may also appear in `totals_by_ide` (and in per-user reports this includes the most recently detected IDE and {% data variables.product.prodname_copilot_short %} extension versions). However, other dimensional breakdowns (`totals_by_feature`, `totals_by_language_feature`, `totals_by_language_model`, `totals_by_model_feature`) and lines-of-code metrics will still be empty.

This means your top-level active user counts may be higher than the sum of users reflected in the breakdown arrays. This is expected behavior and does not indicate a data error.

## Troubleshooting missing usage data

Detailed breakdowns depend on client-side telemetry from the IDE or {% data variables.copilot.copilot_cli_short %}. This telemetry provides data about features, languages, models, accepted suggestions, and lines of code. Server-side telemetry can show that a user was active, but it can't observe what happens in the editor.

Before investigating a gap, allow two full UTC days after the activity day closes for processing. If client-side telemetry is still missing, reports may contain lower numbers or empty breakdowns even when server-side data shows activity. Common causes include:

| Cause | Effect on your reports | What you can check |
|:--|:--|:--|
| Telemetry is turned off in the IDE, for example with the `telemetry.telemetryLevel` setting in {% data variables.product.prodname_vscode_shortname %}. | The IDE sends no detailed activity. The user may still be counted as active through server-side telemetry, but feature, language, and lines of code breakdowns are empty. | Confirm that IDE telemetry is enabled for your developers. |
| A network proxy, firewall, or VPN blocks the {% data variables.product.prodname_copilot_short %} telemetry endpoint. | Same as when telemetry is turned off. | Allow the {% data variables.product.prodname_copilot_short %} client telemetry endpoint. See [AUTOTITLE](/copilot/reference/copilot-allowlist-reference). |
| The client isn't a supported IDE and doesn't send {% data variables.product.prodname_copilot_short %} telemetry. | The user may be counted as active through server-side telemetry, but the client doesn't appear in `totals_by_ide` or detailed breakdowns. | Use a supported IDE for complete metrics. |

If a gap persists after you check the causes above, contact {% data variables.contact.contact_support %} and include the affected users, IDEs, versions, and dates.

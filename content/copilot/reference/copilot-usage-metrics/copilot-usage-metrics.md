---
title: Data available in Copilot usage metrics
allowTitleToDifferFromFilename: true
shortTitle: Copilot usage metrics data
intro: '{% data variables.product.prodname_copilot_short %} usage metrics data is available through the dashboard and APIs, using a consistent set of fields to represent adoption, usage, and code generation activity.'
permissions: '{% data reusables.copilot.usage-metrics-permissions %}'
versions:
  fpt: '*'
  ghec: '*'
category:
  - Copilot usage metrics
  - Understand available data
  - Track Copilot usage
contentType: reference
---

The {% data variables.product.prodname_copilot_short %} usage metrics dashboard and APIs display and export data using a consistent set of fields. This reference lists all available metrics and describes how to interpret their values in both dashboard visuals and NDJSON or API exports.

* The {% data variables.product.prodname_copilot_short %} usage metrics dashboards are available at the **enterprise** and **organization** level.
* The {% data variables.product.prodname_copilot_short %} usage metrics APIs return reports scoped to the **enterprise**, **organization**, or **individual user** level, in different shapes depending on scope and granularity.
* Team-level metrics are not pre-aggregated; you construct them by joining the user-teams report with the per-user usage metrics report. See [AUTOTITLE](/copilot/reference/copilot-usage-metrics/team-level-metrics).

For guidance on how to read and interpret these metrics, see [AUTOTITLE](/copilot/concepts/copilot-metrics).

## {% data variables.product.prodname_copilot_short %} usage dashboard metrics

These metrics appear directly in the {% data variables.product.prodname_copilot_short %} usage dashboard. These charts do **not** include {% data variables.copilot.copilot_cli_short %} usage.

| Metric | Description |
|:--|:--|
| Agent adoption | Percentage of {% data variables.product.prodname_copilot_short %}-licensed active users who tried an agent in the current calendar month. |
| Average chat requests per active user | Average number of chat requests per active user. |
| Code completions (suggested/accepted) | Total number of inline code suggestions shown and accepted. |
| Code completion acceptance rate | Percentage of suggestions accepted by users. |
| Daily active users | Number of unique users who used {% data variables.product.prodname_copilot_short %} on a given day. |
| Weekly active users | Number of unique users who used {% data variables.product.prodname_copilot_short %} during a seven-day window. |
| Total active users | Licensed users active in the current calendar month. |
| Language usage | Distribution of programming languages used with {% data variables.product.prodname_copilot_short %}. |
| Language usage per day | Daily breakdown of languages used. |
| Model usage | Distribution of AI models used for chat. |
| Model usage per day | Daily breakdown of chat model usage. |
| Model usage per chat mode | Model usage by {% data variables.product.prodname_copilot_short %} feature (ask, edit, plan, agent). |
| Model usage per language | Distribution of languages broken down by model. |
| Most used chat model | The most frequently used chat model in the last 28 days. |
| Requests per chat mode | Number of chat requests by mode (ask, edit, plan, agent). |

## Code generation dashboard metrics

These metrics appear in the code generation dashboard and provide a breakdown of how code is being generated across user-initiated and agent-initiated activity. All values are derived from lines of code (LoC) added or deleted in the IDE.

| Metric | Description |
|:--|:--|
| Lines of code changed with AI | Total lines of code added and deleted across all modes in the last 28 days. |
| Agent contribution | Percentage of lines of code added and deleted by agents (including edit, agent, and custom modes) in the last 28 days. |
| Average lines deleted by agent | Average number of lines automatically deleted by agents on behalf of active users during the current calendar month. |
| Daily total of lines added and deleted | Total number of lines added to and deleted from the codebase across all modes for each day. |
| User-initiated code changes | Lines suggested or manually added by users through code completions and chat panel actions (insert, copy, or apply). |
| Agent-initiated code changes | Lines automatically added to or deleted from the codebase by agents on behalf of users across edit, agent, and custom modes. |
| User-initiated code changes per model | User-initiated lines of code, grouped by model used in the IDE. |
| Agent-initiated code changes per model | Agent-initiated lines of code, grouped by model performing the agent actions. |
| User-initiated code changes per language | User-initiated lines of code, grouped by programming language. |
| Agent-initiated code changes per language | Agent-initiated lines of code, grouped by programming language. |

## API and export fields

These fields appear in the exported NDJSON reports and in the {% data variables.product.prodname_copilot_short %} usage metrics APIs. Most tables below list the field name, its JSON type, whether the value can be null, and a description.

Reports come in different shapes depending on their scope and granularity, so the fields available in a record depend on which report it comes from:

* **Per-user reports** (`*-users-1-day` and `*-users-28-day`) contain one record per user, including `user_id`, `user_login`, the `used_*` indicators, and `ai_adoption_phase`. They do not contain active-user counts, `pull_requests`, or `totals_by_ai_adoption_phase`.
* **Aggregated reports** (`enterprise-1-day` and `org-1-day`) contain one aggregated record per enterprise or organization, including active-user counts, `pull_requests`, and `totals_by_ai_adoption_phase`. They do not contain `user_id`, `user_login`, or the `used_*` indicators.
* **28-day reports** (`enterprise-28-day` and `org-28-day`) wrap an array of daily aggregated records in a `day_totals` field, with the reporting window at the top level.
* **User-teams reports** (`*-user-teams-1-day`) map users to the teams they belong to, so you can construct team-level metrics.

Organization-scope reports also include `organization_id` alongside `enterprise_id`. For example schemas of the data returned by the APIs, see [AUTOTITLE](/copilot/reference/copilot-usage-metrics/example-schema).

The **Type** column uses JSON Schema types: `string`, `integer`, `number`, `boolean`, `array`, and `object`. The **Nullable** column indicates whether a field's value can be `null` or absent from a record where it would otherwise apply. Arrays are always present but can be empty (`[]`), so they are not nullable.

### Report identification and partition fields

These fields identify the scope, date, and (for exports) partition of each record. The exact set present depends on the report shape.

| Field | Type | Nullable | Description |
|:--|:--|:--|:--|
| `day` | `string` | No | Calendar day this record represents, in `YYYY-MM-DD` format. In 28-day reports, `day` appears within each `day_totals` entry rather than at the top level. |
| `enterprise_id` | `string` | No | Unique ID of the enterprise. Included in both enterprise- and organization-scope reports. |
| `organization_id` | `string` | Yes | Unique ID of the organization. Included in organization-scope reports only; omitted from enterprise-scope reports. |
| `etl_id` / `day_partition` | `string` | No | Partition fields used for housekeeping. Included in exported NDJSON files and returned by the usage metrics APIs. |
| `entity_id_partition` | `integer` | No | Entity partition used for housekeeping. Included in exported NDJSON files and returned by the usage metrics APIs. |

### Per-user report fields

Per-user reports contain one record per user for the reporting period. The 28-day per-user report also includes `report_start_day` and `report_end_day` to mark the reporting window.

| Field | Type | Nullable | Description |
|:--|:--|:--|:--|
| `user_id` | `integer` | No | Unique identifier for the user. |
| `user_login` | `string` | No | {% data variables.product.github %} username for the user. |
| `user_initiated_interaction_count` | `integer` | No | Number of explicit prompts sent to {% data variables.product.prodname_copilot_short %}.<br><br>Only counts messages or prompts actively sent to the model. Does **not** include opening the chat panel, switching modes (for example, ask, edit, plan, or agent), using keyboard shortcuts to open the inline UI, or making configuration changes. |
| `code_generation_activity_count` | `integer` | No | Number of distinct {% data variables.product.prodname_copilot_short %} output events generated. <br><br> **Includes:** All generated content, including comments and docstrings. <br> **Multiple blocks:** Each distinct code block from a single user prompt counts as a separate generation. <br> **Note:** This metric is not directly comparable to `user_initiated_interaction_count`, since one prompt can produce multiple generations. |
| `code_acceptance_activity_count` | `integer` | No | Number of suggestions or code blocks accepted by users. <br><br> **Counts:** All built-in accept actions, such as “apply to file,” “insert at cursor,” “insert into terminal,” and use of the **Copy** button. <br> **Does not count:** Manual OS clipboard actions (for example, <kbd>Ctrl</kbd>+<kbd>C</kbd>). <br> **Granularity:** Each acceptance action increments the count once, regardless of how many code blocks were generated by the initial prompt. |
| `loc_suggested_to_add_sum` | `integer` | No | Lines of code {% data variables.product.prodname_copilot_short %} suggested to add (completions, inline chat, chat panel, and so on; **excludes** agent edits). |
| `loc_suggested_to_delete_sum` | `integer` | No | Lines of code {% data variables.product.prodname_copilot_short %} suggested to delete (future support planned). |
| `loc_added_sum` | `integer` | No | Lines of code actually added to the editor (accepted completions, applied code blocks, agent and edit mode). |
| `loc_deleted_sum` | `integer` | No | Lines of code deleted from the editor (currently from agent edits). |
| `used_agent` | `boolean` | No | Whether the user used agent mode in the IDE that day. Does not include {% data variables.copilot.copilot_code-review_short %} activity, which is captured separately in `used_copilot_code_review_active` and `used_copilot_code_review_passive`. |
| `used_chat` | `boolean` | No | Whether the user used IDE chat that day. |
| `used_cli` | `boolean` | No | Whether the user used {% data variables.copilot.copilot_cli_short %} that day. |
| `used_copilot_coding_agent` | `boolean` | No | Whether the user used {% data variables.copilot.copilot_cloud_agent %} (previously Copilot coding agent) that day. |
| `used_copilot_cloud_agent` | `boolean` | No | Whether the user used {% data variables.copilot.copilot_cloud_agent %} that day. Carries the same value as `used_copilot_coding_agent`; both names are retained for backward compatibility. |
| `used_copilot_code_review_active` | `boolean` | Yes | Whether the user actively engaged with {% data variables.copilot.copilot_code-review_short %} that day. A user is considered active if they manually requested a {% data variables.product.prodname_copilot_short %} review, or applied a {% data variables.product.prodname_copilot_short %} review suggestion. Null when there is no {% data variables.copilot.copilot_code-review_short %} signal for the user that day. |
| `used_copilot_code_review_passive` | `boolean` | Yes | Whether the user had {% data variables.product.prodname_copilot_short %} automatically assigned to review their pull request that day, without actively engaging with the review. Null when there is no {% data variables.copilot.copilot_code-review_short %} signal for the user that day. |
| `ai_adoption_phase` | `object` | No | The user's AI adoption phase for the day. Always present; defaults to the "No Cohort" phase. See [AI adoption phase fields](#ai-adoption-phase-fields). |
| `totals_by_cli` | `object` | Yes | CLI-specific metrics for the user. Omitted when the user had no {% data variables.copilot.copilot_cli_short %} usage that day. See [{% data variables.copilot.copilot_cli_short %} metrics fields](#copilot-cli-metrics-fields). |
| `totals_by_ide` | `array` | No | Per-IDE breakdown of the user's activity. See [Activity breakdown objects](#activity-breakdown-objects). |
| `totals_by_feature` | `array` | No | Per-feature breakdown of the user's activity. See [Activity breakdown objects](#activity-breakdown-objects). |
| `totals_by_language_feature` | `array` | No | Breakdown combining language and feature dimensions. See [Activity breakdown objects](#activity-breakdown-objects). |
| `totals_by_language_model` | `array` | No | Breakdown combining language and model dimensions, for chat activity. See [Activity breakdown objects](#activity-breakdown-objects). |
| `totals_by_model_feature` | `array` | No | Breakdown combining model and feature dimensions, for chat activity. See [Activity breakdown objects](#activity-breakdown-objects). |

### Aggregated enterprise and organization report fields

Aggregated reports contain one record per enterprise or organization, summarizing all users for the day. The following tables list the active-user counts, then the activity totals and breakdowns.

Active-user counts:

| Field | Type | Nullable | Description |
|:--|:--|:--|:--|
| `daily_active_users` | `integer` | No | Number of unique users who used {% data variables.product.prodname_copilot_short %} on a given day. |
| `weekly_active_users` | `integer` | No | Number of unique users who used {% data variables.product.prodname_copilot_short %} during a trailing seven-day window. |
| `monthly_active_users` | `integer` | No | Number of unique users who used {% data variables.product.prodname_copilot_short %} during a trailing 28-day window. |
| `monthly_active_chat_users` | `integer` | No | Number of unique users who used chat during a trailing 28-day window. |
| `monthly_active_agent_users` | `integer` | No | Number of unique users who used agent mode during a trailing 28-day window. |
| `daily_active_copilot_cloud_agent_users` | `integer` | No | Number of unique users who used {% data variables.copilot.copilot_cloud_agent %} on a given day. |
| `weekly_active_copilot_cloud_agent_users` | `integer` | No | Number of unique users who used {% data variables.copilot.copilot_cloud_agent %} during a trailing seven-day window. |
| `monthly_active_copilot_cloud_agent_users` | `integer` | No | Number of unique users who used {% data variables.copilot.copilot_cloud_agent %} during a trailing 28-day window. |
| `daily_active_copilot_code_review_users` | `integer` | No | Number of unique users who actively used {% data variables.copilot.copilot_code-review_short %} on a given day. Active usage means manually requesting a review or applying a suggestion. When a user has both active and passive signals in the same period, they are counted as active only. |
| `weekly_active_copilot_code_review_users` | `integer` | No | Number of unique users who actively used {% data variables.copilot.copilot_code-review_short %} during a trailing seven-day window. When a user has both active and passive signals in the same period, they are counted as active only. |
| `monthly_active_copilot_code_review_users` | `integer` | No | Number of unique users who actively used {% data variables.copilot.copilot_code-review_short %} during a trailing 28-day window. When a user has both active and passive signals in the same period, they are counted as active only. |
| `daily_passive_copilot_code_review_users` | `integer` | No | Number of unique users who had {% data variables.copilot.copilot_code-review_short %} automatically assigned to review their pull request on a given day, with no active engagement. |
| `weekly_passive_copilot_code_review_users` | `integer` | No | Number of unique users who had {% data variables.copilot.copilot_code-review_short %} automatically assigned to review their pull request during a trailing seven-day window, with no active engagement. |
| `monthly_passive_copilot_code_review_users` | `integer` | No | Number of unique users who had {% data variables.copilot.copilot_code-review_short %} automatically assigned to review their pull request during a trailing 28-day window, with no active engagement. |
| `daily_active_cli_users` | `integer` | Yes | Number of unique users who used {% data variables.copilot.copilot_cli_short %} on a given day. This count is **independent** of IDE active-user counts and is **not** included in IDE-based active-user definitions. Omitted for enterprises or organizations with no CLI usage that day. |

Activity totals and breakdowns:

| Field | Type | Nullable | Description |
|:--|:--|:--|:--|
| `user_initiated_interaction_count` | `integer` | No | Total number of explicit prompts sent to {% data variables.product.prodname_copilot_short %} across all users for the day. |
| `code_generation_activity_count` | `integer` | No | Total number of distinct {% data variables.product.prodname_copilot_short %} output events generated across all users for the day. |
| `code_acceptance_activity_count` | `integer` | No | Total number of suggestions or code blocks accepted across all users for the day. |
| `loc_suggested_to_add_sum` | `integer` | No | Aggregated lines of code suggested to add for the day. Same definition as the per-user field. |
| `loc_suggested_to_delete_sum` | `integer` | No | Aggregated lines of code suggested to delete for the day. Same definition as the per-user field. |
| `loc_added_sum` | `integer` | No | Aggregated lines of code added for the day. Same definition as the per-user field. |
| `loc_deleted_sum` | `integer` | No | Aggregated lines of code deleted for the day. Same definition as the per-user field. |
| `totals_by_ide` | `array` | No | Aggregated per-IDE activity breakdown. See [Activity breakdown objects](#activity-breakdown-objects). |
| `totals_by_feature` | `array` | No | Aggregated per-feature activity breakdown. See [Activity breakdown objects](#activity-breakdown-objects). |
| `totals_by_language_feature` | `array` | No | Aggregated language-and-feature activity breakdown. See [Activity breakdown objects](#activity-breakdown-objects). |
| `totals_by_language_model` | `array` | No | Aggregated language-and-model activity breakdown. See [Activity breakdown objects](#activity-breakdown-objects). |
| `totals_by_model_feature` | `array` | No | Aggregated model-and-feature activity breakdown. See [Activity breakdown objects](#activity-breakdown-objects). |
| `totals_by_cli` | `object` | Yes | Aggregated {% data variables.copilot.copilot_cli_short %} metrics for the day. Omitted when there is no CLI usage that day. Unlike the per-user form, it does not include `last_known_cli_version`. See [{% data variables.copilot.copilot_cli_short %} metrics fields](#copilot-cli-metrics-fields). |
| `totals_by_ai_adoption_phase` | `array` | Yes | Per-phase aggregates of users and their average activity. Omitted when no adoption-phase data is available. See [AI adoption phase fields](#ai-adoption-phase-fields). |
| `pull_requests` | `object` | No | Daily pull request activity for the enterprise or organization. See [Pull request activity fields](#pull-request-activity-fields). |

### 28-day report fields

The 28-day reports (`enterprise-28-day` and `org-28-day`) are wrappers: they carry the reporting window at the top level and an array of daily aggregated records.

| Field | Type | Nullable | Description |
|:--|:--|:--|:--|
| `report_start_day` | `string` | No | First calendar day of the 28-day reporting window, in `YYYY-MM-DD` format. |
| `report_end_day` | `string` | No | Last calendar day of the 28-day reporting window, in `YYYY-MM-DD` format. |
| `created_at` | `string` | No | Timestamp (ISO 8601) when the report was generated. |
| `day_totals` | `array` | No | Array of daily aggregated records. Each entry has the same fields as an aggregated 1-day report. See [Aggregated enterprise and organization report fields](#aggregated-enterprise-and-organization-report-fields). |

### User-teams fields

These fields appear in the daily user-teams report (available via REST API at the organization and enterprise scopes) and are used to construct team-level metrics by joining with the per-user usage metrics report. For the full join recipe and the endpoint URLs, see [AUTOTITLE](/copilot/reference/copilot-usage-metrics/team-level-metrics).

Teams with fewer than 5 seated {% data variables.product.prodname_copilot_short %} users on a given day are excluded from the user-teams report.

| Field | Type | Nullable | Description |
|:--|:--|:--|:--|
| `user_id` | `integer` | No | Unique identifier for the user. |
| `user_login` | `string` | No | {% data variables.product.github %} username for the user. |
| `day` | `string` | No | Calendar day this record represents. |
| `organization_id` | `string` | No | Unique ID of the organization the team belongs to. Organization scope only. |
| `enterprise_id` | `string` | No | Unique ID of the enterprise the team belongs to. Enterprise scope only. The enterprise-scoped report includes both enterprise teams and business teams. |
| `team_id` | `integer` | No | Unique ID of the team the user belongs to. |
| `slug` | `string` | No | URL-friendly identifier for the team. |

### Activity breakdown objects

The `totals_by_*` fields are arrays of breakdown objects. The array is always present but can be empty. Within each object, the metric fields (`*_count` and `loc_*_sum`) follow the same definitions as the top-level per-user fields, and the dimension fields carry the values documented in [Breakdown dimension values](#breakdown-dimension-values).

| Object | Dimension fields | Description |
|:--|:--|:--|
| `totals_by_ide[]` | `ide` | Breakdown by IDE. In per-user reports, each entry also includes `last_known_ide_version` and `last_known_plugin_version`. |
| `totals_by_feature[]` | `feature` | Breakdown by {% data variables.product.prodname_copilot_short %} feature (for example, inline chat or chat panel). |
| `totals_by_language_feature[]` | `language`, `feature` | Breakdown combining language and feature. Does not include `user_initiated_interaction_count`. |
| `totals_by_language_model[]` | `language`, `model` | Breakdown combining language and model, for chat activity (not completions). |
| `totals_by_model_feature[]` | `model`, `feature` | Breakdown combining model and feature, for chat activity (not completions). |

In per-user reports, each `totals_by_ide[]` entry also reports the most recently detected IDE and {% data variables.copilot.copilot_chat_short %} extension versions for the user.

| Field | Type | Nullable | Description |
|:--|:--|:--|:--|
| `last_known_ide_version` | `object` | Yes | Most recent IDE version detected for the user, as `{ ide_version, sampled_at }`. Omitted for aggregated breakdown rows, such as the capped "others" IDE bucket. |
| `last_known_ide_version.ide_version` | `string` | No | IDE version string. Present when `last_known_ide_version` is present. |
| `last_known_ide_version.sampled_at` | `string` | Yes | Timestamp (ISO 8601) when the version was sampled. |
| `last_known_plugin_version` | `object` | Yes | Most recent {% data variables.product.prodname_copilot_short %} extension detected for the user, as `{ plugin, plugin_version, sampled_at }`. Omitted for aggregated breakdown rows. |
| `last_known_plugin_version.plugin` | `string` | No | Extension name (for example, `copilot` or `copilot-chat`). Present when `last_known_plugin_version` is present. |
| `last_known_plugin_version.plugin_version` | `string` | No | Extension version string. Present when `last_known_plugin_version` is present. |
| `last_known_plugin_version.sampled_at` | `string` | Yes | Timestamp (ISO 8601) when the version was sampled. |

### {% data variables.copilot.copilot_cli_short %} metrics fields

The `totals_by_cli` object contains the following nested fields when {% data variables.copilot.copilot_cli_short %} usage is present; the object is omitted when there is no CLI usage. CLI usage is independent of IDE metrics—it is **not** reflected in fields such as `totals_by_ide` or `totals_by_feature`. The `last_known_cli_version` object appears in per-user reports only.

| Field | Type | Nullable | Description |
|:--|:--|:--|:--|
| `totals_by_cli.session_count` | `integer` | No | Number of distinct CLI sessions initiated on this day. |
| `totals_by_cli.request_count` | `integer` | No | Total number of requests made to {% data variables.product.prodname_copilot_short %} via the CLI on this day, including both user-initiated prompts and automated agentic follow-up calls. |
| `totals_by_cli.prompt_count` | `integer` | No | Total number of user prompts, commands, or queries executed within a session. |
| `totals_by_cli.token_usage.output_tokens_sum` | `integer` | No | Total number of output tokens generated across all CLI requests on this day. |
| `totals_by_cli.token_usage.prompt_tokens_sum` | `integer` | No | Total number of prompt tokens sent across all CLI requests on this day. |
| `totals_by_cli.token_usage.avg_tokens_per_request` | `number` | Yes | Average number of **output** and **prompt** tokens per CLI request, computed as `(output_tokens_sum + prompt_tokens_sum) ÷ request_count`. Null when there were no requests that day. |
| `totals_by_cli.last_known_cli_version` | `object` | No | Most recent {% data variables.copilot.copilot_cli_short %} version detected for the user that day, as `{ cli_version, sampled_at }`. Per-user reports only. |
| `totals_by_cli.last_known_cli_version.cli_version` | `string` | No | {% data variables.copilot.copilot_cli_short %} version string. Defaults to `unknown` if no version was detected. |
| `totals_by_cli.last_known_cli_version.sampled_at` | `string` | Yes | Timestamp (ISO 8601) when the version was sampled. |

### Pull request activity fields

> [!IMPORTANT]
> Organization- and enterprise-level reports may show different totals due to differences in user deduplication and attribution timing. For guidance on interpreting pull request metrics across scopes, see [AUTOTITLE](/copilot/concepts/copilot-usage-metrics/copilot-metrics#interpreting-pull-request-lifecycle-metrics-across-scopes).

The `pull_requests` object appears in aggregated enterprise and organization reports only. It captures daily pull request creation, review, merge, and suggestion activity at the enterprise or organization scope, including activity performed by {% data variables.product.prodname_copilot_short %}.

| Field | Type | Nullable | Description |
|:--|:--|:--|:--|
| `pull_requests.total_created` | `integer` | No | Total number of pull requests created on this specific day. <br/><br/>Creation is a one-time event. Each pull request is counted only on the day it is created. |
| `pull_requests.total_reviewed` | `integer` | No | Total number of pull requests reviewed on this specific day. <br/><br/>The same pull request may be counted on multiple days if it receives reviews on multiple days. Within a single day, each pull request is counted once, even if multiple review actions occur. |
| `pull_requests.total_merged` | `integer` | No | Total number of pull requests merged on this specific day. <br/><br/>Merging is a one-time event. Each pull request is counted only on the day it is merged. |
| `pull_requests.median_minutes_to_merge` | `number` | Yes | Median time, in minutes, between pull request creation and merge for pull requests merged on this specific day. <br/><br/>Median is used to reduce the impact of outliers from unusually long-running pull requests. Null when no pull requests were merged that day. |
| `pull_requests.total_suggestions` | `integer` | No | Total number of pull request review suggestions generated on this specific day, regardless of author. |
| `pull_requests.total_applied_suggestions` | `integer` | No | Total number of pull request review suggestions that were applied on this specific day, regardless of author. |
| `pull_requests.total_created_by_copilot` | `integer` | No | Number of pull requests created by {% data variables.product.prodname_copilot_short %} on this specific day. |
| `pull_requests.total_reviewed_by_copilot` | `integer` | No | Number of pull requests reviewed by {% data variables.product.prodname_copilot_short %} on this specific day. <br/><br/>A pull request may be counted on multiple days if {% data variables.product.prodname_copilot_short %} reviews it on multiple days. |
| `pull_requests.total_merged_created_by_copilot` | `integer` | No | Number of pull requests created by {% data variables.product.prodname_copilot_short %} that were merged on this specific day. Each pull request is counted only on the day it is merged. |
| `pull_requests.total_merged_reviewed_by_copilot` | `integer` | No | Number of pull requests that were both merged and reviewed by {% data variables.copilot.copilot_code-review_short %} during the reporting period. |
| `pull_requests.median_minutes_to_merge_copilot_authored` | `number` | Yes | Median time, in minutes, between pull request creation and merge for pull requests created by {% data variables.product.prodname_copilot_short %} and merged on this specific day. Null when no such pull requests were merged that day. |
| `pull_requests.median_minutes_to_merge_copilot_reviewed` | `number` | Yes | Median time, in minutes, between pull request creation and merge, calculated only for pull requests reviewed by {% data variables.copilot.copilot_code-review_short %}. Null when no such pull requests were merged that day. |
| `pull_requests.total_copilot_suggestions` | `integer` | No | Number of pull request review suggestions generated by {% data variables.product.prodname_copilot_short %} on this specific day. |
| `pull_requests.total_copilot_applied_suggestions` | `integer` | No | Number of pull request review suggestions generated by {% data variables.product.prodname_copilot_short %} that were applied on this specific day. |
| `pull_requests.copilot_suggestions_by_comment_type` | `array` | No | Aggregated counts of {% data variables.product.prodname_copilot_short %} code review suggestions, broken down by the comment type {% data variables.product.prodname_copilot_short %} assigned (for example, `security` or `bug_risk`). Each entry includes `comment_type`, `total_copilot_suggestions`, and `total_copilot_applied_suggestions`. Always present but can be empty. Not available at the repository level. |

### AI adoption phase fields

{% data variables.product.prodname_copilot_short %} groups users into AI adoption phases based on their activity. Phase information appears in two places: the per-user `ai_adoption_phase` object, and the aggregated `totals_by_ai_adoption_phase` array. For the phase values, see [Breakdown dimension values](#breakdown-dimension-values).

The per-user `ai_adoption_phase` object contains:

| Field | Type | Nullable | Description |
|:--|:--|:--|:--|
| `ai_adoption_phase.phase_number` | `integer` | No | Numeric phase identifier (for example, `0` for "No Cohort"). |
| `ai_adoption_phase.phase` | `string` | No | Human-readable phase name. |
| `ai_adoption_phase.version` | `string` | No | Version of the adoption-phase model used (for example, `v1`). |

Each entry in the aggregated `totals_by_ai_adoption_phase` array contains:

| Field | Type | Nullable | Description |
|:--|:--|:--|:--|
| `phase` | `string` | No | Human-readable phase name. |
| `phase_number` | `integer` | No | Numeric phase identifier. |
| `total_engaged_users` | `integer` | No | Number of users grouped into this phase for the period. |
| `avg_user_initiated_interactions` | `number` | No | Average user-initiated interactions per user in this phase. |
| `avg_code_generation_activities` | `number` | No | Average code generation activities per user in this phase. |
| `avg_code_acceptance_activities` | `number` | No | Average code acceptance activities per user in this phase. |
| `avg_loc_added` | `number` | No | Average lines of code added per user in this phase. |
| `avg_loc_deleted` | `number` | No | Average lines of code deleted per user in this phase. |
| `avg_pull_requests_reviewed` | `number` | No | Average pull requests reviewed per user in this phase. |
| `avg_pull_requests_created` | `number` | No | Average pull requests created per user in this phase. |
| `avg_pull_requests_merged` | `number` | No | Average pull requests merged per user in this phase. |
| `avg_pull_requests_median_minutes_to_merge` | `number` | No | Average of the per-user median minutes to merge for users in this phase. |

### Breakdown dimension values

The breakdown objects above use dimension fields whose values come from fixed sets. These are field **values**, not separate fields. For example, `agent_edit` and the `chat_panel_*_mode` values are values of the `feature` field, not top-level fields.

The `feature` dimension identifies the {% data variables.product.prodname_copilot_short %} feature or mode an activity is attributed to:

| Value | Description |
|:--|:--|
| `code_completion` | Inline code completions. |
| `chat_inline` | Inline chat in the editor. |
| `chat_panel_ask_mode` | Chat panel interactions with ask mode selected. |
| `chat_panel_edit_mode` | Chat panel interactions with edit mode selected. |
| `chat_panel_agent_mode` | Chat panel interactions with agent mode selected. |
| `chat_panel_plan_mode` | Chat panel interactions with plan mode selected. |
| `chat_panel_custom_mode` | Chat panel interactions with a custom agent selected. |
| `chat_panel_unknown_mode` | Chat panel interactions where the mode is unknown. |
| `agent_edit` | Lines added and deleted when {% data variables.product.prodname_copilot_short %} (in agent and edit mode) writes changes directly into your files in the IDE. Counts edits from custom agents as well. `agent_edit` is not included in suggestion-based metrics and may not populate suggestion-style fields, such as `user_initiated_interaction_count`. |
| `copilot_cli` | Activity attributed to {% data variables.copilot.copilot_cli_short %}. |
| `others` | Any feature not covered by the values above. |

The `ide` dimension identifies the IDE an activity occurred in. This is not an exhaustive list, but examples of observed values include `vscode`, `visualstudio`, `intellij`, `eclipse`, `xcode`, `neovim`, `vim`, `emacs`, and `zed`.

The `model` dimension identifies the AI model used for chat activity. Values include specific model identifiers (for example, `gpt-5.4` or `claude-sonnet-4.6`), `auto`, `unknown`, and `others`. The `auto` value represents activity where {% data variables.copilot.copilot_auto_model_selection_short %} was used and the request was not attributed to a specific model.

The `phase` dimension identifies the AI adoption phase a user is grouped into: `No Cohort`, `Phase 1`, `Phase 2`, or `Phase 3`.

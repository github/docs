---
title: Data available in Copilot usage metrics
allowTitleToDifferFromFilename: true
shortTitle: Copilot usage metrics data
intro: 'You can display and export {% data variables.product.prodname_copilot_short %} usage metrics data in the dashboard and via APIs.'
permissions: '{% data reusables.copilot.usage-metrics-permissions %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Copilot
  - Enterprise
category:
  - Manage Copilot for a team
---

{% data reusables.copilot.usage-metrics-preview %}

The {% data variables.product.prodname_copilot_short %} usage metrics dashboard and APIs display and export data using a consistent set of fields. This reference lists all available metrics and describes how to interpret their values in both dashboard visuals and NDJSON or API exports. To retrieve this data programmatically, see [AUTOTITLE](/rest/copilot/copilot-usage-metrics).

* The {% data variables.product.prodname_copilot_short %} usage metrics dashboard reports data at the **enterprise** level.
* The {% data variables.product.prodname_copilot_short %} usage metrics APIs support **enterprise-, organization-, and user-level** records.

For guidance on how to read and interpret these metrics, see [AUTOTITLE](/copilot/concepts/copilot-metrics).

## {% data variables.product.prodname_copilot_short %} usage dashboard metrics

These metrics appear directly in the {% data variables.product.prodname_copilot_short %} usage dashboard.

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
| Model usage per chat mode | Model usage by {% data variables.product.prodname_copilot_short %} feature (Ask, Edit, Agent). |
| Model usage per language | Distribution of languages broken down by model. |
| Most used chat model | The most frequently used chat model in the last 28 days. |
| Requests per chat mode | Number of chat requests by mode (Ask, Edit, Agent). |

## Code generation dashboard metrics

These metrics appear in the code generation dashboard and provide a breakdown of how code is being generated across user-initiated and agent-initiated activity. All values are derived from lines of code (LoC) added or deleted in the IDE.

| Metric | Description |
|:--|:--|
| Lines of code changed with AI | Total lines of code added and deleted across all modes in the last 28 days. |
| Agent contribution | Percentage of lines of code added and deleted by agents (including Edit, Agent, and custom modes) in the last 28 days. |
| Average lines deleted by agent | Average number of lines automatically deleted by agents on behalf of active users during the current calendar month. |
| Daily total of lines added and deleted | Total number of lines added to and deleted from the codebase across all modes for each day. |
| User-initiated code changes | Lines suggested or manually added by users through code completions and chat panel actions (insert, copy, or apply). |
| Agent-initiated code changes | Lines automatically added to or deleted from the codebase by agents on behalf of users across Edit, Agent, and custom modes. |
| User-initiated code changes per model | User-initiated lines of code, grouped by model used in the IDE. |
| Agent-initiated code changes per model | Agent-initiated lines of code, grouped by model performing the agent actions. |
| User-initiated code changes per language | User-initiated lines of code, grouped by programming language. |
| Agent-initiated code changes per language | Agent-initiated lines of code, grouped by programming language. |

## API and export fields

These fields appear in the exported NDJSON reports and in the {% data variables.product.prodname_copilot_short %} usage metrics APIs. They provide daily records at the enterprise, organization, or user scope, depending on the metric.

| Field | Description |
|:--|:--|
| `agent_edit` | A dedicated bucket in the API and reports. Captures lines added and deleted directly by {% data variables.product.prodname_copilot_short %} Agent and Edit mode.<br>These are not included in suggested metrics, since agent edits don’t follow a simple suggestion to acceptance flow. |
| `report_start_day` / `report_end_day` | Start and end dates for the 28-day reporting period. |
| `day` | Calendar day this record represents. |
| `enterprise_id` | Unique ID of the enterprise. |
| `organization_id` (API only) | Unique ID of the organization. |
| `user_id` / `user_login` | Unique identifier and {% data variables.product.github %} username for the user. |
| `user_initiated_interaction_count` | Number of explicit prompts sent to {% data variables.product.prodname_copilot_short %}.<br><br> Only counts messages or prompts actively sent to the model. Does **not** include opening the chat panel, switching modes (for example, Ask, Edit, or Agent), using keyboard shortcuts to open the inline UI, or making configuration changes. |
| `code_generation_activity_count` | Number of distinct {% data variables.product.prodname_copilot_short %} output events generated. <br><br> **Includes:** All generated content, including comments and docstrings. <br> **Multiple blocks:** Each distinct code block from a single user prompt counts as a separate generation. <br> **Note:** This metric is not directly comparable to `user_initiated_interaction_count`, since one prompt can produce multiple generations. |
| `code_acceptance_activity_count` | Number of suggestions or code blocks accepted by users. <br><br> **Counts:** All built-in accept actions, such as “apply to file,” “insert at cursor,” “insert into terminal,” and use of the **Copy** button. <br> **Does not count:** Manual OS clipboard actions (for example, <kbd>Ctrl</kbd>+<kbd>C</kbd>). <br> **Granularity:** Each acceptance action increments the count once, regardless of how many code blocks were generated by the initial prompt. |
| `loc_suggested_to_add_sum` | Lines of code {% data variables.product.prodname_copilot_short %} suggested to add (completions, inline chat, chat panel, etc.; **excludes** Agent edits). |
| `loc_suggested_to_delete_sum` | Lines of code {% data variables.product.prodname_copilot_short %} suggested to delete (future support planned). |
| `loc_added_sum` | Lines of code actually added to the editor (accepted completions, applied code blocks, agent/edit mode). |
| `loc_deleted_sum` | Lines of code deleted from the editor (currently from Agent edits). |
| `totals_by_ide` | Breakdown of metrics by IDE used. |
| `totals_by_feature` | Breakdown of metrics by {% data variables.product.prodname_copilot_short %} feature (e.g., inline chat, chat panel). |
| `totals_by_language_feature` | Breakdown combining language and feature dimensions. |
| `totals_by_model_feature` / `totals_by_language_model` | Model-specific breakdowns for chat activity (not completions). |
| `last_known_ide_version` / `last_known_plugin_version` | The most recent IDE and {% data variables.copilot.copilot_chat_short %} extension version detected for each user. |

### Pull request activity fields (API only)

These fields capture daily pull request creation and review activity across the enterprise, including activity performed by {% data variables.product.prodname_copilot_short %}.

| Field | Description |
|:--|:--|
| `pull_requests.total_created` | Total number of pull requests created across the enterprise on this specific day. <br/><br/>Creation is a one-time event. Each pull request is counted only on the day it is created. |
| `pull_requests.total_reviewed` | Total number of pull requests reviewed across the enterprise on this specific day. <br/><br/>The same pull request may be counted on multiple days if it receives reviews on multiple days. Within a single day, each pull request is counted once, even if multiple review actions occur. |
| `pull_requests.total_created_by_copilot` | Number of pull requests created by {% data variables.product.prodname_copilot_short %} across the enterprise on this specific day. |
| `pull_requests.total_reviewed_by_copilot` | Number of pull requests reviewed by {% data variables.product.prodname_copilot_short %} across the enterprise on this specific day. <br/><br/>A pull request may be counted on multiple days if {% data variables.product.prodname_copilot_short %} reviews it on multiple days. |

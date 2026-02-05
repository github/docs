---
title: Lines of Code metrics
shortTitle: Copilot LoC metrics
intro: Understand how Lines of Code metrics measure {% data variables.product.prodname_copilot_short %}’s output and what factors affect their coverage and accuracy.
permissions: '{% data reusables.copilot.usage-metrics-permissions %}'
versions:
  feature: copilot
redirect_from:
  - /early-access/copilot-metrics/LoC
  - /early-access/copilot-metrics/LoC/about-the-copilot-metrics-LoC
topics:
  - Copilot
contentType: reference
allowTitleToDifferFromFilename: true
category:
  - Manage Copilot for a team
---

{% data reusables.copilot.usage-metrics-preview %}

Lines of Code (LoC) metrics provide a directional measure of {% data variables.product.prodname_copilot_short %}’s output by quantifying the lines it suggested, added, or deleted across completions, chat, and agent features.

## Where LoC metrics appear

You may encounter LoC metrics in:

* **Code generation dashboard (enterprise level)** — visualizes LoC-based user and agent activity. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/view-code-generation).
* **Exports and APIs (enterprise, organization, and user level)** — expose LoC fields such as `loc_suggested_to_add_sum`, `loc_added_sum`, and `loc_deleted_sum`. See [AUTOTITLE](/rest/copilot/copilot-usage-metrics).
* **"Data available in {% data variables.product.prodname_copilot_short %} usage metrics" reference** — lists all dashboard and API fields derived from LoC. See [AUTOTITLE](/copilot/reference/copilot-usage-metrics/copilot-usage-metrics).

This article covers how LoC is measured and what affects its accuracy and coverage. For detailed definitions, refer to the reference article above.

## Considerations for LoC metrics

LoC metrics may vary across IDEs and versions. Keep the following considerations in mind:

* **Coverage:** Not all IDEs and users will emit LoC telemetry until they upgrade to the required versions. Reports include the `last_known_ide_version` and `last_known_plugin_version` fields so you can monitor coverage across your enterprise.
* **Stability:** As {% data variables.product.prodname_copilot_short %} evolves, telemetry definitions may change. Expect small shifts in data as accuracy improves over time.

## Version requirements

LoC metrics require specific minimum versions of IDEs and {% data variables.product.prodname_copilot_short %} plugins to function. Users on older versions will not contribute LoC data, which may lead to underreporting until they upgrade.

| IDE | Feature | Minimum IDE version | Minimum {% data variables.copilot.copilot_chat_short %} extension version |
|:--|:--|:--|:--|
| Eclipse | <ul><li>`code_completion`</li></ul> | 4.31 | 0.9.3.202507240902 |
| | <ul><li>`chat_panel` (Ask, Edit, Agent)</li></ul> | 4.31 | 0.11.0.202508291001 |
| | <ul><li>`agent_edit`</li></ul> | 4.31 | 0.10.0.202508110512 |
| IntelliJ/JetBrains | <ul><li>`code_completion`</li><li>`chat_panel` (Ask, Edit, Agent)</li><li>`chat_inline`</li><li>`agent_edit`</li></ul> | 2024.2.6 | 1.5.52-241 |
| {% data variables.product.prodname_vs %} | <ul><li>`code_completion`</li><li>`chat_panel` (Ask, Edit, Agent)</li></ul> | 17.14.13 | 18.0.471.29466 |
| | <ul><li>`chat_inline`</li><li>`agent_edit`</li></ul> | 17.14.14 | 18.0.471.29466 |
| {% data variables.product.prodname_vscode_shortname %} | <ul><li>`code_completion`</li></ul> | 1.104.0 | 0.31.0 |
| | <ul><li>`chat_panel` (Ask, Edit, Agent)</li></ul> | 1.102.0 | 0.29.0 |
| | <ul><li>`chat_inline`</li></ul> | 1.103.2 | 0.30.3 |
| | <ul><li>`agent_edit`</li></ul> | 1.103.0 | 0.30.0 |
| XCode | <ul><li>`code_completion`</li></ul> | 14.3.1 | 0.40.0 |
| | <ul><li>`chat_panel` (Ask, Edit, Agent)</li></ul> | 15.0 | 0.43.0 |
| | <ul><li>`agent_edit`</li></ul> | 15.2 | 0.41.0 |

## How agent mode affects LoC metrics

Unlike completions or chat, {% data variables.copilot.copilot_agent_short %} does not follow a “suggest then accept” flow. Agents plan and execute multi-step tasks, often editing multiple files iteratively without explicit acceptance by the user. Because of this, LoC metrics for agent activity are measured differently.

| Behavior | How it’s reflected in LoC metrics |
|:--|:--|
| Agent code suggestions | Counted as `loc_suggested_to_add_sum` when visible code blocks are shown in the chat panel. |
| Agent edits in files | Counted as `loc_added_sum` and `loc_deleted_sum` under the `agent_edit` feature bucket. These edits are not included in suggested metrics. |
| Multi-file operations | Each file edit contributes to total added and deleted lines, even if triggered by one prompt. |

Example output for agent-related LoC activity:

```json
"totals_by_language_feature": [
  {
    "language": "unknown",
    "feature": "chat_panel_agent_mode",
    "code_generation_activity_count": 12,
    "code_acceptance_activity_count": 0,
    "loc_suggested_to_add_sum": 86, // code block suggestions in chat panel in agent mode
    "loc_suggested_to_delete_sum": 0,
    "loc_added_sum": 5, // only includes code block copy or apply in chat panel, not agent edits
    "loc_deleted_sum": 0
  },
  {
    "language": "unknown",
    "feature": "agent_edit",
    "code_generation_activity_count": 345,
    "code_acceptance_activity_count": 0,
    "loc_suggested_to_add_sum": 0,
    "loc_suggested_to_delete_sum": 0,
    "loc_added_sum": 2342, // agent and edit mode edits in files
    "loc_deleted_sum": 947
  }
]
```

For a single agent edit, you may see metrics such as:

```json
"user_initiated_interaction_count": 0,
"code_generation_activity_count": 1,
"code_acceptance_activity_count": 0
```

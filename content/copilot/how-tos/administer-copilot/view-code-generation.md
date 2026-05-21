---
title: Viewing the code generation dashboard
shortTitle: View code generation
intro: The code generation dashboard shows how {% data variables.product.prodname_copilot_short %} generates code across your enterprise, including activity from both users and agents.
permissions: '{% data reusables.copilot.usage-metrics-permissions %}'
versions:
  feature: copilot
contentType: how-tos
allowTitleToDifferFromFilename: true
redirect_from:
  - /copilot/how-tos/administer-copilot/manage-for-enterprise/view-code-generation
category:
  - Copilot usage metrics
  - View metrics
  - Track Copilot usage
---

By comparing user-initiated and agent-initiated activity across models, languages, and modes, you can see how teams are adopting AI-assisted and agent-driven development.

The dashboard shows aggregated code generation activity, including:

* **Lines of code changed with AI**. The total lines of code added and deleted across all modes.
* **User-initiated code changes**. Lines suggested or manually added through completions and chat actions.
* **Agent-initiated code changes**. Lines automatically added or deleted by agents across edit, agent, and custom modes.
* **Activity by model and language**. User-initiated and agent-initiated activity grouped by model and language.

For a detailed list of available metrics and definitions, see [AUTOTITLE](/copilot/reference/copilot-usage-metrics/copilot-usage-metrics#code-generation-dashboard-metrics).

## Prerequisite

{% data reusables.copilot.copilot-metrics-dashboard-prereq %}

## Accessing the dashboard

{% data reusables.copilot.access-copilot-metrics-dashboard %}
1. In the left sidebar, click **Code generation**.

## Next steps

To learn how to interpret the data in each chart and act on usage trends, see [AUTOTITLE](/copilot/reference/interpret-copilot-metrics).

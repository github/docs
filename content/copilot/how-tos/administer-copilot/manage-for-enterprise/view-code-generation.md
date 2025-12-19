---
title: Viewing the code generation dashboard
shortTitle: View code generation
intro: You can use the code generation dashboard to monitor how {% data variables.product.prodname_copilot_short %} generates code across your enterprise, including activity from both users and agents.
permissions: '{% data reusables.copilot.usage-metrics-permissions %}'
versions:
  feature: copilot
topics:
  - Copilot
contentType: how-tos
allowTitleToDifferFromFilename: true
---

{% data reusables.copilot.usage-metrics-preview %}

The code generation dashboard shows how {% data variables.product.prodname_copilot_short %} is generating code across your enterprise. By comparing user-initiated and agent-initiated activity across models, languages, and modes, you can see how teams are adopting AI-assisted and agent-driven development.

## Prerequisite

"{% data variables.product.prodname_copilot_short %} usage metrics" must be enabled on the AI Control tab. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies#defining-policies-for-your-enterprise).

## Accessing the dashboard

{% data reusables.copilot.access-copilot-metrics-dashboard %}
1. In the left sidebar, click **Code generation**.

{% data reusables.copilot.org-copilot-usage-metrics %}

## What you can view

The dashboard shows aggregated code generation activity across your enterprise, including:

* **Lines of code changed with AI**. The total lines of code added and deleted across all modes.
* **User-initiated code changes**. Lines suggested or manually added through completions and chat actions.
* **Agent-initiated code changes**. Lines automatically added or deleted by agents across edit, agent, and custom modes.
* **Activity by model and language**. User-initiated and agent-initiated activity grouped by model and language.

For a full list of available metrics and definitions, see [AUTOTITLE](/copilot/reference/copilot-usage-metrics/copilot-usage-metrics#code-generation-dashboard-metrics).

## Next steps

* To explore adoption and usage trends across your enterprise, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/view-usage-and-adoption).
* To understand how Lines of Code (LoC) metrics are measured and what affects their accuracy and coverage, see [AUTOTITLE](/copilot/reference/copilot-usage-metrics/lines-of-code-metrics).
* To access enterprise-, organization-, and user-level usage data programmatically, see [AUTOTITLE](/rest/copilot/copilot-usage-metrics).

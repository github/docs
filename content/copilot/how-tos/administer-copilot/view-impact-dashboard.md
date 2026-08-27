---
title: Viewing the Copilot impact dashboard
shortTitle: View impact dashboard
intro: 'The impact dashboard shows how deeply your organization has adopted {% data variables.product.prodname_copilot_short %}, and how that adoption connects to pull request output.'
permissions: '{% data reusables.copilot.usage-metrics-permissions %}'
versions:
  feature: copilot
contentType: how-tos
allowTitleToDifferFromFilename: true
category:
  - Copilot usage metrics
  - View metrics
  - Track Copilot usage
---

Instead of a flat active-user count, the impact dashboard groups users into adoption cohorts based on how they engage with {% data variables.product.prodname_copilot_short %}, and connects that engagement to pull request throughput. This gives you a more meaningful signal of adoption depth than daily or weekly active user counts alone.

For a detailed explanation of what the dashboard shows, including adoption cohorts, engagement trends, potential return on investment, and recommendations, see [AUTOTITLE](/copilot/concepts/copilot-usage-metrics/copilot-metrics).

## Prerequisite

{% data reusables.copilot.copilot-metrics-dashboard-prereq %}

## Accessing the dashboard

{% data reusables.copilot.access-copilot-metrics-dashboard %}
1. In the left sidebar, click **{% data variables.product.prodname_copilot_short %} impact**.

## Estimating potential return on investment

The "Potential return on investment" section provides a directional comparison of cost and pull request output across adoption phases.

1. Under "Average developer cost in your organization", select a compensation band.
1. In the "Transition your developers to be agent-first" card, compare the cost, payroll, and pull request estimates for "Phase 0-1 Passive and Code First Users" and "Phase 2-3 Agent First Users".

Treat the figures as directional estimates rather than exact financial results. Use them with the adoption multiplier metrics for code shipped and time to merge pull requests.

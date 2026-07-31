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

For a detailed explanation of what the dashboard shows, including adoption cohorts, engagement trends, and recommendations, see [AUTOTITLE](/copilot/concepts/copilot-usage-metrics/copilot-metrics).

## Prerequisite

{% data reusables.copilot.copilot-metrics-dashboard-prereq %}

## Accessing the dashboard

{% data reusables.copilot.access-copilot-metrics-dashboard %}
1. In the left sidebar, click **{% data variables.product.prodname_copilot_short %} impact**.

## Next steps

* To learn how to interpret cohort shifts and what action to take, see [AUTOTITLE](/copilot/reference/copilot-usage-metrics/interpret-copilot-metrics#reviewing-adoption-cohorts).
* For raw per-team NDJSON data, such as for custom BI reporting, see [AUTOTITLE](/copilot/reference/copilot-usage-metrics/team-level-metrics).

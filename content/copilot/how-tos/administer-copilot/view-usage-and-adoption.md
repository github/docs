---
title: Viewing the Copilot usage metrics dashboard
shortTitle: View usage and adoption
intro: 'Monitor adoption trends and use of {% data variables.product.prodname_copilot_short %} to support long-term enablement.'
permissions: '{% data reusables.copilot.usage-metrics-permissions %}'
versions:
  feature: copilot
topics:
  - Copilot
contentType: how-tos
allowTitleToDifferFromFilename: true
redirect_from:
  - /copilot/how-tos/administer-copilot/manage-for-enterprise/view-usage-and-adoption
category:
  - Copilot usage metrics
  - View metrics
  - Track Copilot usage
---

{% data reusables.copilot.usage-metrics-preview %}

After your initial rollout, the {% data variables.product.prodname_copilot_short %} usage metrics dashboard helps you monitor how usage evolves over time. By exploring adoption, feature, model, and language trends, you can see how developers are engaging with {% data variables.product.prodname_copilot_short %} and identify areas where additional enablement or communication may drive deeper value.

## Prerequisite

{% data reusables.copilot.copilot-metrics-dashboard-prereq %}

## Accessing the dashboard

{% data reusables.copilot.access-copilot-metrics-dashboard %}
1. In the left sidebar, click **{% data variables.product.prodname_copilot_short %} usage**.

Data in the dashboard is based only on IDE telemetry, and may appear up to three full UTC days behind the current date. See [AUTOTITLE](/copilot/concepts/copilot-metrics).

## Using {% data variables.copilot.copilot_chat_short %} to analyze exported data

For deeper analysis, you can export NDJSON reports from the dashboard and use {% data variables.copilot.copilot_chat_short %} to explore the data in more detail. For example, you can ask:

```copilot copy prompt
* Which users have `user_initiated_interaction_count` > 0 but low `code_acceptance_activity_count`?
* Are there specific teams with lower adoption rates?
```

## Next steps

* To learn how to interpret the data in each chart and act on usage trends, see [AUTOTITLE](/copilot/reference/interpret-copilot-metrics).
* To learn how to track license activation and initial usage of {% data variables.product.prodname_copilot %} with usage metrics, see [AUTOTITLE](/copilot/tutorials/roll-out-at-scale/assign-licenses/track-usage-and-adoption).
* To access usage data programmatically, see [AUTOTITLE](/rest/copilot/copilot-usage-metrics).

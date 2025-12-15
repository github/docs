---
title: Viewing the Copilot usage metrics dashboard
shortTitle: View usage and adoption
intro: You can use the {% data variables.product.prodname_copilot_short %} usage metrics dashboard to monitor how developers across your enterprise are adopting and using {% data variables.product.prodname_copilot_short %}.
permissions: '{% data reusables.copilot.usage-metrics-permissions %}'
versions:
  feature: copilot
topics:
  - Copilot
contentType: how-tos
allowTitleToDifferFromFilename: true
---

{% data reusables.copilot.usage-metrics-preview %}

After your initial rollout, the {% data variables.product.prodname_copilot_short %} usage metrics dashboard helps you monitor how usage evolves over time. By exploring adoption, feature, model, and language trends, you can see how developers are engaging with {% data variables.product.prodname_copilot_short %} and identify areas where additional enablement or communication may drive deeper value.

## Prerequisite

"{% data variables.product.prodname_copilot_short %} usage metrics" must be enabled on the AI Control tab. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies#defining-policies-for-your-enterprise).

## Accessing the dashboard

{% data reusables.copilot.access-copilot-metrics-dashboard %}
1. In the left sidebar, click **{% data variables.product.prodname_copilot_short %} usage**.

Data in the dashboard reports data at the enterprise level, is based only on IDE telemetry, and may appear up to three full UTC days behind the current date. See [AUTOTITLE](/copilot/concepts/copilot-metrics).

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

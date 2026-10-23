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

For a detailed explanation of what the dashboard shows, including adoption cohorts, engagement trends, potential return on investment, and recommendations, see [AUTOTITLE](/copilot/concepts/billing-and-usage/copilot-usage-metrics/copilot-metrics).

## Prerequisite

{% data reusables.copilot.copilot-metrics-dashboard-prereq %}

## Accessing the dashboard

{% data reusables.copilot.access-copilot-metrics-dashboard %}
1. In the left sidebar, click **{% data variables.product.prodname_copilot_short %} impact**.

## Comparing your impact with peers

The **Industry comparison** widget shows how your agentic adoption and leverage compare with participating peers. Industry comparisons are available for enterprises and for organizations that aren't owned by an enterprise. Organizations owned by an enterprise participate through their enterprise, and enterprises used only to assign {% data variables.copilot.copilot_business_short %} licenses can't participate, because leverage can't be calculated for them.

### Opting in to industry comparisons

Participation is controlled by the **Copilot metrics industry comparison** policy, which is disabled by default. When the policy is enabled, your enterprise or organization contributes aggregated {% data variables.product.prodname_copilot_short %} metrics to peer cohorts and can view comparisons. When it's disabled, you don't contribute data or see comparisons.

Enterprise owners, and owners of organizations that aren't owned by an enterprise, can opt in from the widget or by enabling the policy. The widget and the policy use the same setting.

1. In the **Industry comparison** widget, click **Opt-in for industry comparison** and review the information about how your data is used.
1. Select values from the **Industry type** and **Company size** dropdown menus. Both values are required to create a peer cohort.
1. Click **Opt in**.

### Viewing industry comparisons

1. Use the scope selector to switch between **All industries** and your selected industry.
1. Review the comparison cards for the selected 28-day reporting period:
   * **Your agentic adoption** shows the percentage of active users who are agent-first or multi-agent users.
   * **Your leverage** compares the pull request merge rate per user per month for agentic users with the rate for non-agentic users.
1. For each card, review your percentile ranking and your difference from the peer median and, if shown, the top decile. The ranking line shows the peer cohort used for the comparison. Use the chart to see your score, the peer median, and the top decile within the peer distribution.

Rankings appear only after enough enterprises and organizations have opted in to form a peer cohort. The median comparison is shown first, and the top-decile comparison is added when the cohort grows larger. If your selected industry doesn't have enough participants yet, the dashboard compares you with peers of the same company size across all industries. If that cohort doesn't have enough participants either, the dashboard doesn't show a ranking. Especially soon after launch, you might see only the median, all industries instead of your selected industry, or no ranking until more peers opt in.

A ranking also isn't shown when your own score can't be calculated for the reporting period. For example, there might be no active users, or all active users might already be agent-first or multi-agent users, leaving no non-agentic users to compare leverage with.

For details about what data is shared and how it's protected, see [AUTOTITLE](/copilot/concepts/copilot-usage-metrics/copilot-metrics#how-industry-comparisons-protect-your-data).

### Changing your peer cohort or opting out

To change your peer cohort, click {% octicon "gear" aria-label="Industry comparison settings" %} in the widget, then choose a different industry or company size. The widget uses your new selection right away, and your data moves to the new peer cohort with the next daily update.

To stop participating, click {% octicon "gear" aria-label="Industry comparison settings" %} in the widget and select **Opt-out** or set the **Copilot metrics industry comparison** policy to **Disabled**. The dashboard stops showing comparisons immediately, and your data is excluded from peer cohorts starting with the next daily update. Previously calculated aggregate results don't identify your enterprise or organization and are deleted after 30 days.

## Estimating potential return on investment

The "Potential return on investment" section provides a directional comparison of cost and pull request output across adoption phases.

1. Under "Average developer cost in your organization", select a compensation band.
1. In the "Transition your developers to be agent-first" card, compare the cost, payroll, and pull request estimates for "Phase 0-1 Passive and Code First Users" and "Phase 2-3 Agent First Users".

Treat the figures as directional estimates rather than exact financial results. Use them with the adoption multiplier metrics for code shipped and time to merge pull requests.

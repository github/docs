---
title: Measuring the success of a GitHub Copilot trial
shortTitle: Measure trial success
intro: Learn how to use {% data variables.product.prodname_copilot_short %} usage metrics to evaluate your trial, interpret adoption and engagement results, and decide how to monitor usage going forward.
permissions: '{% data reusables.copilot.usage-metrics-permissions %}'
versions:
  feature: copilot
type: tutorial
topics:
  - Copilot
  - Enterprise
allowTitleToDifferFromFilename: true
---

When your organization runs a {% data variables.product.prodname_copilot_short %} trial, the key to success is understanding how teams adopt and use {% data variables.product.prodname_copilot_short %}.
By combining insights from the {% data variables.product.prodname_copilot_short %} usage metrics dashboard and API, you can assess early results, identify enablement needs, and decide whether to expand rollout.

This tutorial shows you how to:

1. Define clear trial goals and success criteria.
1. View and interpret adoption and engagement data in the dashboard.
1. Evaluate your trial results.
1. Incorporate qualitative feedback from developers.
1. Extend your evaluation through the {% data variables.product.prodname_copilot_short %} usage metrics API.
1. Decide whether to expand rollout.

## Step 1: Define your trial goals

Before analyzing metrics, decide what outcomes will define a successful trial for your organization.
Setting clear goals makes it easier to interpret results and communicate value to stakeholders.

| Example goal | What success looks like | Related metrics |
|:--|:--|:--|
| Adoption | Most licensed developers activate and use {% data variables.product.prodname_copilot_short %} regularly. | Total active users, daily active users (DAU), weekly active users (WAU) |
| Engagement | Developers explore multiple features and modes. | Requests per chat feature, agent adoption |
| Productivity and satisfaction | Developers report efficiency gains and trust in suggestions. | Acceptance rate, internal feedback, satisfaction surveys |
| Enablement effectiveness | Teams understand how and when to use {% data variables.product.prodname_copilot_short %}. | Breadth of usage across languages and IDEs |

## Step 2: View adoption and engagement metrics in the dashboard

> [!NOTE]
> * The {% data variables.product.prodname_copilot_short %} usage metrics dashboard reports data at the enterprise level.
> * Organization-level metrics are available through the {% data variables.product.prodname_copilot_short %} usage metrics APIs and exports.

{% data reusables.copilot.access-copilot-metrics-dashboard %}

The dashboard shows 28 days of aggregated IDE telemetry data for all licensed users in your enterprise. Focus on these **key metrics** during your trial:

| Metric | What it shows | Why it matters |
|:--|:--|:--|
| Total active users | Number of developers who used {% data variables.product.prodname_copilot_short %} at least once during the trial period. | Indicates license activation and overall reach. |
| Daily active users (DAU) | Number of unique users active each day. | Reveals early adoption trends—whether interest is growing, stable, or declining. |
| Agent adoption | Percentage of active users who used the {% data variables.copilot.copilot_agent_short %}. | Shows depth of engagement and exploration beyond basic completions. |
| Acceptance rate | Percentage of {% data variables.product.prodname_copilot_short %} suggestions accepted. | Reflects relevance and trust—key indicators of value and user satisfaction. |
| Language and model usage | Distribution of programming languages and models used. | Helps identify where {% data variables.product.prodname_copilot_short %} delivers the most value across teams. |

{% data reusables.copilot.copilot-usage-metrics-sources %}

## Step 3: Evaluate your trial results

Compare your dashboard data to your trial goals. Common success indicators include:

| Goal | What to measure | Signs of success |
|:--|:--|:--|
| License activation | Total active users | 70–90% of trial licenses show usage within the first month. |
| Sustained engagement | Daily and weekly active users | DAU and WAU stabilize or increase over time. |
| Breadth of usage | Requests per chat feature, language usage | Users experiment across multiple languages and features. |
| Depth of usage | Agent adoption, acceptance rate | Developers are exploring advanced {% data variables.product.prodname_copilot_short %} capabilities. |
| Positive feedback | Team surveys or internal feedback | Developers report productivity gains or workflow improvements. |

If one or more goals aren’t met, consider whether additional enablement, communication, or IDE configuration might be needed before expanding the rollout.

## Step 4: Incorporate qualitative feedback

While adoption and engagement are quantitative, satisfaction metrics help you understand perceived value and developer sentiment. Consider incorporating the following sources of feedback, from outside {% data variables.product.github %}, into your analysis.

| Source | Description |
|:--|:--|
| {% data variables.product.prodname_copilot_short %} satisfaction surveys | Periodic feedback from developers about usefulness, trust, and productivity. |
| Internal feedback channels | Team retrospectives or pulse surveys about workflow changes and perceived speed gains. |
| Support trends | Fewer “how do I…” questions over time often indicates increased confidence and satisfaction. |

Combining usage metrics with developer feedback gives the most complete view of {% data variables.product.prodname_copilot_short %}’s impact.

## Step 5: Extend your evaluation through the {% data variables.product.prodname_copilot_short %} usage metrics API

After your trial, you can continue monitoring adoption and engagement through the {% data variables.product.prodname_copilot_short %} usage metrics API. The API gives you more control over what data you collect and how often you analyze it.

### Retrieve enterprise-wide data

You can use the {% data variables.product.prodname_copilot_short %} Metrics API to download 28-day usage reports for your enterprise. These reports include the same dataset shown in the {% data variables.product.prodname_copilot_short %} usage metrics dashboard. The API provides two endpoints.

| Endpoint | Description |
|:--|:--|
| `GET /enterprises/{enterprise}/copilot/metrics/reports/enterprise-28-day/latest` | Returns a signed download link for the latest 28-day **enterprise-level** usage report. |
| `GET /enterprises/{enterprise}/copilot/metrics/reports/users-28-day/latest` | Returns a signed download link for the latest 28-day **user-level** usage report. |

Each endpoint response includes time-limited signed URLs for downloading the reports from Azure Blob Storage, along with the reporting period covered by the file.

Example response:

```json
{
  "download_links": [
    "https://example.com/copilot-usage-report.json"
  ],
  "report_start_day": "2025-07-18",
  "report_end_day": "2025-08-14"
}
```

For complete field definitions, see [AUTOTITLE](/copilot/reference/copilot-usage-metrics).

### Automate your reporting

To automate your reporting, you can set up a scheduled job to call the API at regular intervals (e.g., daily or weekly) and store the results in a database or data warehouse for further analysis. This allows you to track trends over time and generate custom reports as needed.

## Step 6: Decide whether to expand rollout

Use your findings from the dashboard and API data to make an informed decision about expanding {% data variables.product.prodname_copilot_short %} usage across your organization.

| Decision area | Questions to ask | Supporting metrics |
|:--|:--|:--|
| Adoption | Are most trial users active? Have they continued using {% data variables.product.prodname_copilot_short %} consistently? | Total active users, DAU, WAU |
| Enablement needs | Do teams need more guidance or resources? | Low or inconsistent usage across languages or models |
| Engagement | Are developers exploring features beyond basic completions? | Agent adoption, chat requests per feature |
| Satisfaction | Are teams finding {% data variables.product.prodname_copilot_short %} valuable? | Acceptance rate, feedback from surveys |

Document your findings and share them with stakeholders to inform the next phase of your rollout.

## Next steps

Now that you know how to measure the success of your {% data variables.product.prodname_copilot_short %} trial, you can continue to monitor adoption and engagement as you expand usage across your organization. To learn more about driving adoption and enabling developers, see [AUTOTITLE](/copilot/tutorials/roll-out-at-scale/enable-developers/drive-adoption).

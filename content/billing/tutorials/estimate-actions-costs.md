---
title: 'Estimating the cost of using GitHub Actions on different types of runners'
intro: 'Analyze the costs and benefits of different CI/CD setups by understanding the relative costs of using {% data variables.product.github %}-hosted and self-hosted runners.'
shortTitle: 'Estimate Actions costs'
versions:
  fpt: '*'
  ghec: '*'
permissions: 'Users who can see the "Billing & Licensing" and "Insights" pages for an organization or enterprise on {% data variables.product.prodname_dotcom_the_website %} or {% data variables.enterprise.data_residency_site %}'
topics:
  - Enterprise
  - Billing
  - REST
contentType: tutorials
audience:
  - driver
---

As your usage of CI/CD grows, optimizing costs becomes increasingly important. With this tutorial, you can assess your current {% data variables.product.prodname_actions %} costs, estimate the impact of upcoming pricing changes, and identify configuration changes that could reduce expenses or improve efficiency. See [2026 pricing changes for {% data variables.product.prodname_actions %}](https://resources.github.com/actions/2026-pricing-changes-for-github-actions) in {% data variables.product.github %} Executive Insights.

## 1. Download past usage of {% data variables.product.prodname_actions %}

You can download a full breakdown of the costs of using {% data variables.product.github %}-hosted runners from the "Usage" view of the "Billing & licensing" tab. {% ifversion actions-cloud-platform-march %}Data for self-hosted runners is included in this report from {% data variables.actions.self_hosted_runner_charge_date %}.

<!-- expires 2026-09-01 -->
For data on self-hosted runners before {% data variables.actions.self_hosted_runner_charge_date %}, see the "Actions Usage Metrics" view of the "Insights" tab.
<!-- end expires 2026-09-01 -->

{% elsif fpt or ghec %}

Usage of self-hosted runners is available on the **Insights** tab of your organization or enterprise. From {% data variables.actions.self_hosted_runner_charge_date %}, this data will also be included in billing usage reports.
{% endif %}

### Generate report for runner usage and costs

{% data reusables.billing.nav-to-org-or-ent %}
{% data reusables.billing.access-org-or-ent-page %}
{% data reusables.billing.display-usage-view %}

1. At the top of the page, click **{% octicon "download" aria-hidden="true" %} Get usage report**.
1. Select a report type of **Summarized** and a time frame of at least three months.
1. Click **Email me the report**.

When the report is ready for you to download, you'll receive a message to your primary email account with a link to download the report. The link will expire after 24 hours.

### Get usage of self-hosted runners

<!-- expires 2026-09-01 -->
{% ifversion actions-cloud-platform-march %}
This step is needed only if you want to download data from before {% data variables.actions.self_hosted_runner_charge_date %}.
{% endif %}
<!-- end expires 2026-09-01 -->

1. Click **{% octicon "graph" aria-hidden="true" %} Insights** tab for your organization or enterprise to display additional insights.
1. In the "Insights" navigation menu, click **{% octicon "play" aria-hidden="true" %} Actions Usage Metrics** to display usage data.
1. At the top of the page, click **Period:Current month** and define a time period of at least three months.
1. In the tabbed table, click **{% octicon "stopwatch" aria-hidden="true" %} Jobs** to show all usage split by job.
1. To show only jobs that run on self-hosted runners, add a filter on runner type:

   ```text copy
   runner_type:self-hosted
   ```

1. To the right of the filter box, click {% octicon "download" aria-label="Download report" %} to download the data from the table.

## 2. Summarize past usage and costs

You have downloaded one billing report, `summarizedUsageReport`, and possibly one actions usage metrics report for self-hosted runners. You need to further summarize the data from the `summarizedUsageReport` before moving to the next step, for example:

* **Get cost per runner type:** Sum costs for each `sku` for the `actions` product
* **Get usage of minutes included in your plan:** Sum minutes for each `sku` that were included in your plan, that is: `net_amount` of `0`
* Consider splitting the costs and included minutes by organization

For an example Python script that generates this summary information from a `summarizedUsageReport`, see [`summarize_actions_costs.py`](https://gist.github.com/docs-bot/98cb03ec43b716b1f8e03bcc091d069c).

>[!TIP]
> There is no change to the costs of storing artifacts and caches, so you can ignore the `actions_storage` SKU.

## 3. Estimate impact of the cost changes

Using the summaries of the recent costs of {% data variables.product.github %}-hosted runners and the minutes used by self-hosted runners, you can estimate future costs of using {% data variables.product.prodname_actions %}.

### General trend in costs

Assuming that the number of workflows you run and the time they take to complete stays similar, the impact on your future costs will vary according to the types of runners that you currently use:

* **Mostly {% data variables.product.github %}-hosted runners:** You will see lower bills for {% data variables.product.prodname_actions %}.
* **Mostly self-hosted runners:** You will probably see higher bills for actions. It makes sense to re-evaluate your split between self-hosted and {% data variables.product.github %}-hosted runners. You may find that the costs of maintaining your own runners versus using {% data variables.product.github %}-hosted runners are more evenly balanced.
* **A mix of runner types:** You will need to assess how your costs will change with the new charging model and decide whether or not to make any changes to your runner usage.

### Detailed calculations of changes to costs

For each type of runner that you use, you can calculate how much the same usage will cost from January and from March 2026 using data from [AUTOTITLE](/billing/reference/actions-runner-pricing).

To estimate your expected spend more precisely, you can also use the [{% data variables.product.github %} pricing calculator](https://github.com/pricing/calculator?feature=actions).

In this example, the change in costs for standard {% data variables.product.github %}-hosted runners and self-hosted runners is calculated.

| Runner type | Past {% data variables.product.github %} bill | January 1, 2026 onward | March 1, 2026 onward |
|--|--|--|--|
| Linux 2-core (`actions_linux`) | _past cost_ | _past cost_ **\* 0.75** | _past cost_ **\* 0.75** |
| Windows 2-core (`actions_windows`) | _past cost_ | _past cost_ **\* 0.62** | _past cost_ **\* 0.62** |
| macOS 3-core or 4-core (`actions_macos`) | _past cost_ | _past cost_ **\* 0.77** | _past cost_ **\* 0.77** |
| Self-hosted | $0 USD | $0 USD | _Minutes used_ **\* $0.002 USD** |

The multipliers in this table reflect the change in per-minute pricing for standard {% data variables.product.github %}-hosted runners starting January 1, 2026. For self-hosted runners, billing begins on March 1, 2026, based on total minutes used.

## 4. Identify runner changes to explore

When you have estimated the impact of the charging changes on your costs, you may want to update your runner usage.

### Investing the budget freed in more powerful runners

If the billing changes free some of your budget, then you could identify the workflows that take the longest to run and update them to use larger runners hosted by {% data variables.product.github %}.

To identify the longest-running workflows, display the **Insights** tab for your enterprise or organization and display the **Actions performance metrics**. Click **Avg run time** to sort the workflows by run time.

For more information, see [AUTOTITLE](/actions/concepts/runners/larger-runners).

### Migrating workflows from self-hosted to {% data variables.product.github %}-hosted runners

If the total cost of running workflows on self-hosted runners is now similar to the cost of using {% data variables.product.github %}-hosted runners, you may want to simplify your CI/CD platform by migrating from self-hosted runners.

Some considerations:

* Do all the costs of maintaining self-hosted runners come under the same internal budget as billing for actions usage?
* Are we using all the processing time included in our {% data variables.product.github %} plan currently?
* Do any of the self-hosted runners provide specialized environments that would be difficult to replicate on a {% data variables.product.github %}-hosted runner?

> [!TIP]
> You can request that additional tools are added to {% data variables.product.github %}-hosted runners, by raising an issue with the [tool request](https://github.com/actions/runner-images/issues/new?template=tool-request.yml) template.

## Next steps

* [AUTOTITLE](/actions/tutorials/migrate-to-github-runners)

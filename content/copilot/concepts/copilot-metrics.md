---
title: GitHub Copilot usage metrics
shortTitle: Copilot usage metrics
intro: 'Track how your teams are using and adopting {% data variables.product.prodname_copilot %} with detailed usage metrics.'
versions:
  feature: copilot
topics:
  - Copilot
contentType: concepts
allowTitleToDifferFromFilename: true
redirect_from:
  - /early-access/copilot-metrics
  - /early-access/copilot-metrics/apis
  - /early-access/copilot-metrics/dashboards
  - /early-access/copilot-metrics/apis/about-the-copilot-metrics-apis
  - /early-access/copilot-metrics/dashboards/about-the-copilot-metrics-dashboard
  - /early-access/copilot-metrics/apis/rest-api-endpoints-for-copilot-enterprise-and-user-usage-metrics
---

{% data reusables.copilot.usage-metrics-preview %}

{% data variables.product.prodname_copilot_short %} usage metrics help enterprise administrators and decision-makers understand how their teams are adopting and using {% data variables.product.prodname_copilot_short %}. By tracking usage patterns across the enterprise, you can measure engagement, identify opportunities to increase value, and make data-driven decisions about enablement and rollout.

Metrics are available through:

* The {% data variables.product.prodname_copilot_short %} usage metrics APIs, which provide detailed, user-level data you can export for further analysis.
* The {% data variables.product.prodname_copilot_short %} usage metrics dashboard, which visualizes 28-day usage trends across your enterprise.
* The {% data variables.product.prodname_copilot_short %} usage metrics NDJSON export, which offers raw data for custom BI tools or long-term storage.

For a complete list of available metrics and data fields, see [AUTOTITLE](/copilot/reference/copilot-usage-metrics).

## Which usage is included?

The {% data variables.product.prodname_copilot_short %} usage metrics are derived exclusively from telemetry sent by IDEs. In order for an end user to be counted towards these metrics, they **must have telemetry enabled in their IDE**.

This means the data **does not include** activity from other {% data variables.product.prodname_copilot_short %} surfaces, such as:

* {% data variables.copilot.copilot_chat_short %} on {% data variables.product.prodname_dotcom_the_website %}
* {% data variables.product.prodname_mobile %}
* {% data variables.copilot.copilot_code-review_short %}
* {% data variables.copilot.copilot_cli_short %}

License and seat management data are not included in {% data variables.product.prodname_copilot_short %} usage metrics reports. To view or manage license assignments, use the {% data variables.product.prodname_copilot_short %} user management API, which is the source of truth for license and seat information. See [AUTOTITLE](/rest/copilot/copilot-user-management).

## Supported IDEs

To be included in the {% data variables.product.prodname_copilot_short %} usage metrics, end users must use one of the following IDEs and {% data variables.copilot.copilot_chat_short %} extension versions.

| IDE | Minimum IDE version | Minimum {% data variables.copilot.copilot_chat_short %} extension version |
|:--|:--|:--|
| Eclipse | 4.31 | 0.9.3.202507240902 |
| JetBrains / IntelliJ | 2024.2.6 | 1.5.52-241 |
| {% data variables.product.prodname_vs %} | 17.14.13 | 18.0.471.29466 |
| {% data variables.product.prodname_vscode_shortname %} | 1.101 | 0.28.0 |
| Xcode | 13.2.1 | 0.40.0 |

## Data freshness

The data in the {% data variables.product.prodname_copilot_short %} usage metrics dashboard and API reports is updated on a regular schedule.

During the preview, you can expect data to be available within **three full days**. This means that data for a given day is processed and made available within three full UTC days after that day closes.

For example, all usage data for a Monday (which closes at midnight UTC) will be visible in the dashboard and API by the end of Thursday UTC. In some cases, such as processing delays over weekends, data may appear up to four calendar days behind the current date.

## What does the data measure?

{% data variables.product.prodname_copilot_short %} usage metrics can be grouped into four main categories: Adoption, Engagement, Acceptance Rate, and Lines of Code (LoC) metrics.

**Adoption** measures how many licensed developers are actively using {% data variables.product.prodname_copilot_short %} within your enterprise. For example, daily active users (DAU) tells you how many unique users interacted with {% data variables.product.prodname_copilot_short %} on a given day. Ideally, you'll see a consistent upward trend in these metrics during rollout.

**Engagement** measures describe how deeply developers use {% data variables.product.prodname_copilot_short %} once they’ve adopted it. Key engagement metrics show not only frequency of use but also breadth across features. For example, average chat requests per active user measures how often users open and interact with {% data variables.copilot.copilot_chat_short %}. You'd want to see regular and increasing chat use across languages and IDEs.

**Acceptance rate** measures how often developers accept {% data variables.product.prodname_copilot_short %}’s suggestions. This helps you understand whether suggestions are relevant and trusted. For example, a high code completions acceptance rate indicates that suggestions are relevant and useful.

**Lines of Code (LoC) metrics** measure the number of lines {% data variables.product.prodname_copilot_short %} suggested, added, or deleted in the editor, providing a directional view of {% data variables.product.prodname_copilot_short %}’s tangible output. For example, "Lines added" shows how much code was actually accepted and inserted into the editor.

## How can I use these metrics?

These metrics can be used together to answer key questions about your teams' usage of {% data variables.product.prodname_copilot_short %}.

| Question | Use these metrics |
|:--|:--|
| Are my teams using {% data variables.product.prodname_copilot_short %} regularly? | Daily and weekly active users |
| Which features deliver the most value? | Requests per chat mode, agent adoption |
| Do developers trust {% data variables.product.prodname_copilot_short %}’s output? | Acceptance rate trends |
| Are enablement efforts working? | Growth in adoption and engagement after training or communication campaigns |

Look for patterns across these signals rather than focusing on any single number. For example, a steady DAU paired with a rising acceptance rate indicates growing trust and value.

## Next steps

Now that you understand what each {% data variables.product.prodname_copilot_short %} metric measures and how to use them, you can explore the dashboard to see these metrics in action.

To learn how to access and interpret these metrics in the {% data variables.product.prodname_copilot_short %} usage metrics dashboard, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/view-usage-and-adoption).

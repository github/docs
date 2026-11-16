---
title: Industry comparisons for Copilot usage metrics
shortTitle: Industry comparisons
intro: 'Understand how {% data variables.product.prodname_copilot_short %} industry comparisons calculate peer benchmarks and protect participant data.'
permissions: '{% data reusables.copilot.usage-metrics-permissions %}'
versions:
  feature: copilot
contentType: reference
allowTitleToDifferFromFilename: true
category:
  - Copilot usage metrics
  - Understand metrics
  - Track Copilot usage
---

The impact dashboard's **Industry comparison** widget compares your enterprise or organization with aggregated results from participating peers. Comparisons show associations, not causation. Differences in team composition, project type, engineering practices, and adoption maturity can affect the results.

## Comparison measures

Each comparison covers the 28-day reporting period shown in the widget.

| Measure | Definition |
|:--|:--|
| Agentic adoption | The percentage of active users in your enterprise or organization who are agent-first or multi-agent users. |
| Leverage | The ratio between the pull request merge rate for agentic users and the rate for non-agentic users, per user per month. For example, a leverage score of 4.1x means that agentic users merged pull requests at 4.1 times the rate of non-agentic users during the reporting period. |

## Participation and eligibility

Participation is controlled by the **Copilot metrics industry comparison** policy and is disabled by default. Enterprises, and organizations that aren't owned by an enterprise, can participate. Organizations owned by an enterprise participate through their enterprise. Enterprises used only to assign {% data variables.copilot.copilot_business_short %} licenses can't participate, because leverage can't be calculated for them.

Enabling the policy both contributes your aggregated metrics to peer cohorts and lets you view comparisons. For instructions, see [AUTOTITLE](/copilot/how-tos/administer-copilot/view-impact-dashboard#opting-in-to-industry-comparisons).

## Peer cohort selection

Peer cohorts use the company size and industry selected when you opt in. Company size options are 1–999, 1,000–4,999, and 5,000+ employees, and there are ten industry options. These values are self-reported and aren't verified. You can compare with peers in your selected industry or across all industries.

For comparisons within your selected industry, the dashboard expands the peer cohort in this order until enough eligible peers are available:

1. Participating peers with the same company size and industry.
1. Participating peers with the same company size, across all industries.

Comparisons always use peers with the same company size. The widget shows which peer cohort was used, so you can tell when a comparison has been expanded beyond your selected industry.

For {% data variables.product.prodname_ghe_cloud %} with data residency, peer cohorts include only participants hosted in the same data residency region. The dashboard applies the same cohort expansion within that region and does not combine data across regions.

The dashboard does not use a cohort based only on industry. Comparisons across all industries use participating peers, rather than all {% data variables.product.github %} users or enterprises.

## Rankings and availability

When enough eligible peers are available, each card shows:

* Where your score ranks within the cohort.
* The difference between your score and the peer median.
* The difference between your score and the top decile.

The top-decile comparison requires a larger peer cohort than the median comparison, so the median can be available when the top decile isn't. Enterprises and organizations with very few active users can view comparisons, but they aren't counted toward any peer cohort.

The chart plots your enterprise's or organization's score against the distribution of peer scores and marks the peer median and top decile. Some markers may be unavailable if the cohort does not contain enough eligible peers.

Rankings appear only after enough enterprises and organizations have opted in to form a peer cohort. If there are not enough eligible peers after the dashboard expands the cohort to all industries, it doesn't show a ranking. A ranking is also unavailable when your own score can't be calculated, such as when there are no active users in the reporting period or no non-agentic users to provide a baseline for leverage.

For guidance on interpreting the results, see [AUTOTITLE](/copilot/reference/copilot-usage-metrics/interpret-copilot-metrics#reviewing-industry-comparisons).

## How industry comparisons protect your data

* **Opt-in only.** Nothing is contributed until an enterprise owner, or the owner of an organization that isn't owned by an enterprise, enables the **Copilot metrics industry comparison** policy. Enterprises used only to assign {% data variables.copilot.copilot_business_short %} licenses never contribute.
* **Only summary scores are contributed.** Each participant contributes its agentic adoption and leverage scores for the 28-day reporting period. No user names, user-level activity, code, repository content, or pull request content is contributed.
* **Results are aggregated.** Your scores are combined with those of other participants to calculate cohort statistics, such as the median and top decile. Other participants can't see your enterprise or organization name, which enterprises and organizations participate, or how many participants are in a cohort.
* **Statistics aren't linked to participants.** When cohort statistics are calculated, participants' scores are combined into results that are stored only by date, company size, and industry. These results contain no enterprise, organization, or user identifiers, so they can't be linked back to a specific participant.
* **Rankings are calculated server-side.** Your own scores are stored with the rest of your {% data variables.product.prodname_copilot_short %} usage metrics. To show your ranking, {% data variables.product.github %} compares your scores with the cohort statistics for the same reporting period. Other participants' scores are never looked up or compared individually.
* **Small cohorts are suppressed.** A cohort's statistics are shown only when it contains enough participants and users. Enterprises and organizations with very few active users aren't counted toward any cohort, so a small number of developers can't shape the results.
* **Grouping values stay private.** The company size and industry you select are used only to group participants into cohorts. They aren't shown to other participants or verified by {% data variables.product.github %}.
* **Data residency is respected.** For {% data variables.product.prodname_ghe_cloud %} with data residency, data is never combined across data residency regions.
* **Results stay in the dashboard.** Industry comparisons aren't included in downloads, NDJSON exports, or the {% data variables.product.prodname_copilot_short %} usage metrics API.
* **Aggregated results are short-lived.** Cohort statistics are recalculated daily and deleted after 30 days. If you opt out, the dashboard stops showing comparisons immediately, and your data is excluded from cohorts starting with the next daily update. Each daily calculation uses your current opt-in setting, so if earlier results are recalculated after you opt out, your data isn't added back.

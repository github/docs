---
title: Repository insights metrics
shortTitle: Repository insights
intro: 'Use repository-level review outcomes to identify gaps in {% data variables.copilot.copilot_code-review_short %} coverage and opportunities to improve review practices.'
versions:
  fpt: '*'
  ghec: '*'
contentType: reference
category:
  - Copilot usage metrics
  - Understand metrics
  - Track Copilot usage
---

Repository insights brings together pull request activity and {% data variables.copilot.copilot_code-review_short %} outcomes for an organization-owned repository. Use it to decide where to expand review coverage or investigate feedback that developers are not acting on. Organization and enterprise dashboards instead help you understand adoption and usage across teams.

To open the page and check access requirements, see [AUTOTITLE](/copilot/how-tos/administer-copilot/view-repository-insights).

## Summary signals

The {% data variables.copilot.copilot_code-review_short %} section shows the same date range as the **Pull requests** section. Its four summary cards describe different populations. The two address-rate cards show percentages and addressed/evaluated comment counts, while the other cards count merged pull requests.

<!-- Confirm before publication: The four summary card labels below follow the prototype descriptions. Verify the labels against the released UI. -->

| Signal | How it is calculated | How to use it |
|:--|:--|:--|
| Overall address rate | Addressed comments divided by evaluated comments. | Look for changes in how developers act on feedback. A low rate is a reason to inspect examples, not proof that the feedback is unhelpful. |
| High-severity address rate | Addressed high-severity comments divided by evaluated high-severity comments. | Prioritize investigating high-severity feedback that was not addressed. Check the comment count before drawing conclusions from a small sample. |
| No human follow-up request | Count of merged pull requests reviewed by {% data variables.product.prodname_copilot_short %} with no human review requesting changes after its first review. The percentage uses all merged pull requests reviewed by {% data variables.product.prodname_copilot_short %} as its denominator. | Understand how often human reviewers subsequently requested changes. This is not a measure of defect-free code or a replacement for human review. |
| Merged without {% data variables.product.prodname_copilot_short %} review | All merged pull requests minus merged pull requests reviewed by {% data variables.product.prodname_copilot_short %}. The percentage uses all merged pull requests as its denominator. | Identify review coverage gaps, then check whether the uncovered pull requests should have received a review. |

A human change request after {% data variables.product.prodname_copilot_short %}'s first review excludes the pull request from the no-subsequent-change-request count, even if the request was later dismissed or the pull request was approved. Change requests made before the first {% data variables.product.prodname_copilot_short %} review do not exclude it.

The "Automatic review is off" message describes configuration, not the number of pull requests that missed a review. Do not assume it explains every uncovered pull request. Manual reviews can still contribute to coverage.

## What counts as addressed feedback

When a pull request merges, an AI model evaluates each published {% data variables.copilot.copilot_code-review_short %} comment to judge whether the issue it raised was addressed. A comment counts as addressed when a developer performs one of the following actions:

 * Applies a suggestion in the pull request.
 * Asks {% data variables.product.prodname_copilot_short %} to fix it.
 * Pushes a fix made manually or with any agent.
 * Accepts the feedback and explicitly defers the fix to a later pull request.

Comments that were not addressed remain in the evaluated total but not the addressed total. These outcomes differ from suggestion application counts, which cover ready-to-apply suggestion blocks and applications using the apply button.

These metrics include published {% data variables.copilot.copilot_code-review_short %} comments on pull requests on {% data variables.product.prodname_dotcom %}.

## Pull request context

Use the **Pull requests** section to understand the repository's activity alongside its review outcomes. It displays the reporting dates and two side-by-side cards.

| Metric | What it shows | Interpretation limit |
|:--|:--|:--|
| Pull request throughput | Total pull requests merged and opened during the reporting period, with a daily bar chart of merged pull requests. | Opened and merged pull requests are separate activity populations, not a funnel. A pull request merged this week can have been opened earlier. |
| Median time to merge | The daily median time from creation to merge for pull requests merged on each day, displayed in days. | Do not average daily medians to calculate a weekly median. A falling median does not mean every pull request merged faster. |

## Address-rate breakdowns

Three side-by-side breakdown cards show address rates as horizontal bars, with percentages and addressed/evaluated comment counts. Each rate divides addressed comments by evaluated comments within that group, not by all comments in the repository.

<!-- Confirm before publication: Verify the prototype's breakdown card labels and group names against the released UI, including "Agent skills" and "No customization". -->

* **Feedback severity**: Compare High, Medium, and Low to decide which unaddressed comments need investigation.
* **Review effort**: Compare Max, Balanced, and Lite to understand outcomes for the reviews that used each effort level. Reviews routed by Adaptive are counted under the effort level that Adaptive selected for that review.
* **Customization**: Compare the Custom instructions, Agent skills, MCP servers, and No customization groups.

Customization groups overlap. A comment that used both custom instructions and an MCP server can contribute to both groups. Do not sum these groups or combine their percentages as if they were separate populations. Some comments can lack a recorded severity or review effort, so breakdown counts need not equal the overall total.

Differences between effort levels or customization groups are descriptive. They do not prove that increasing effort or adding customization causes a higher address rate or better code quality. Review representative comments and consider differences in pull requests before changing your review configuration.

## Addressed comments by category

**Addressed comments by category** ranks the number of addressed comments in each category, not the share of evaluated comments addressed within that category. A larger bar does not establish a higher address rate, more severe findings, or more fixed defects.

The chart displays the period's top categories as descending horizontal bars, and groups the remaining categories under **All other categories**. The categories shown vary by repository and period. Examples include Bug, Documentation, Security, Concurrency, and Performance.

In the API, `custom` identifies feedback about the repository's coding guidelines, while `other` identifies feedback that did not fit a predefined type. The API's comment-type breakdown is not capped at the categories displayed in the dashboard.

Use the categories to choose comments to inspect, such as security or performance feedback that developers acted on.

## Reporting periods and trends

The weekly cards and pull request charts cover seven calendar days ending on the latest fully published day. Check the displayed dates rather than assuming the period ends yesterday. Comment outcomes are attributed to the day the pull request merged, not the day the comment was posted.

### Monthly address-rate trend

**Address rate over time** compares review-effort levels across up to six completed calendar months. This is a separate period from the weekly cards. Each monthly rate uses the month's addressed and evaluated comment totals, not an average of daily percentages.

Identify each series by its Max, Balanced, or Lite label, not by color alone. The vertical axis shows the address-rate percentage. A change from 60% to 70% is an increase of 10 percentage points.

The chart uses lines when at least three months are available and grouped bars for fewer months. Available history varies:

* On {% data variables.product.prodname_dotcom_the_website %}, trend coverage starts in August 2026. August includes requested review effort before effective review effort began being recorded on August 26.
* For enterprises with data residency, coverage starts in October 2026, and the trend is withheld until at least two completed months are available. Some regions have less history because historical data needs additional validation.

<!-- Confirm before publication: Central US trend data is delayed because of historical backfill attribution. Confirm regional availability and the first displayed month rather than promising a December launch. -->

Six months is the maximum display window, not a guarantee of six months of history.

### Missing data and zero activity

Missing or unpublished data is not the same as zero activity. A stale-data indication means the reporting period has not caught up to the latest expected day. A waiting state means data is not yet available, not that no reviews occurred.

A rate with no evaluated comments has no denominator. Do not interpret it as a measured 0% address rate. Similarly, no merged pull requests means there is no population for a merged-pull-request percentage.

Repository transfers can limit the history available in the repository's current organization or enterprise scope.

## Analyze the underlying reports

For custom analysis, use the existing daily repository reports from the {% data variables.product.prodname_copilot_short %} usage metrics API. Sum addressed and evaluated counts across the relevant days before dividing to calculate a rate. Do not average daily rates or infer exact counts from rounded dashboard percentages.

The `copilot_code_review` object contains comment outcome counts and breakdowns. Pull request coverage uses `pull_requests.total_merged` and `pull_requests.total_merged_reviewed_by_copilot`. For canonical field definitions, inclusion rules, and links to the report endpoints, see [AUTOTITLE](/copilot/reference/copilot-usage-metrics/copilot-usage-metrics#repository-level-fields).

---
title: Metrics available with GitHub Insights
intro: '{% data variables.product.prodname_insights %} includes a variety of metrics to give you visibility into your team''s software delivery process.'
redirect_from:
  - /github/installing-and-configuring-github-insights/metrics-available-with-github-insights
  - /github/installing-and-configuring-github-insights/key-metrics-for-collaboration-in-pull-requests
versions:
  enterprise-server: '*'
---

## About metrics in {% data variables.product.prodname_insights %}

{% data reusables.github-insights.key-metrics-and-reports %}

{% data reusables.github-insights.about-key-metrics %} You can set and measure goals for each key metric. For more information, see "[Managing goals](/insights/installing-and-configuring-github-insights/managing-goals)."

{% data reusables.github-insights.about-reports %}

{% data reusables.github-insights.manage-metrics %}

## Key metrics for collaboration in pull requests

Key metrics for collaboration in pull requests help teams remove bottlenecks in process, improve collaboration, and deliver projects faster, with higher quality. Improving these metrics results in a more productive team.

- [Code review distribution](#code-review-distribution)
- [Code review turnaround](#code-review-turnaround)
- [Time to open](#time-to-open)
- [Pull request size](#pull-request-size)
- [Work in progress](#work-in-progress)

### Code review distribution

Measures the distribution of code reviews across a team or organization. A value closer to 1 indicates a more equal distribution. Includes members who have previously opened, reviewed, or commented on a pull request, or committed to a branch.

The index is equal to 1 minus the Gini coefficient of code reviews for an organization or team. For more information, see [Gini coefficient](https://en.wikipedia.org/wiki/Gini_coefficient) on Wikipedia.

### Code review turnaround

The time elapsed between a review assignment and a completed review.

To counteract code reviews as a blocker for teams, organizations can optimize their review assignment process and set goals for turnaround time.

### Time to open

The time elapsed between a user's first commit to a branch and opening a pull request for that branch.

Decreasing this period of time allows contributors to receive feedback earlier in the process and allows more time for collaboration and iteration.

### Pull request size

Total diff size of a pull request (total of lines added, removed, and changed).

Large pull requests carry more risk when deploying to production and are more difficult to review, merge, and release. Deploying pull requests of a reasonable size enables your team to review and ship new features at a faster cadence and with greater confidence

### Work in progress

The number of open pull requests for a given team or organization, expressed as a total as well as a ratio of open pull requests to developer.

A large pull request backlog means work may be out of date, indicating wasted effort from your team. This metric helps keep your team focused while ensuring no one on the team is blocked or overburdened.

## Reports

| Metric | Description |
| ------ | ----------- |
| Activity | An activity is any one of the following:<ul><li>Committing to a branch</li><li>Opening a pull request</li><li>Closing a pull request</li><li>Merging a pull request</li><li>Commenting on a pull request</li><li>Approving a pull request</li></ul> |
| Activity, hour | An hour with activity is any hour in which at least one contributor records an activity. |
| Churn code | Churn code is code changed within three weeks of being added or last changed. This includes lines of code that were overwritten by the author or by another contributor. |
| Lines of code added and changed | Total count of new lines of code added plus lines of code changed. You can include or exclude churn code. |
| Ownership | Percentage breakdown of lines of code added and changed by the last contributor to add or change each line of code. |
| Pairings | Contributors who modify or remove another contributor's code. |
| Percentage of codebase changed | Lines of code added or changed in the codebase as a percentage of total lines of code in the codebase. |
| Percentage of new and changed code vs churn code | Lines of code added and changed, excluding churn code, as a percentage of total lines of code added and changed, including churn code. |
| Pull requests open | The count of all pull requests which are open at the end of the period selected or the time interval displayed on the chart. |
| Retention | Percentage of lines of code persisting in the codebase after each week, grouped by the week the lines were created. |
| Time to merge | Time between the first commit on a branch and the merge action of a pull request on that branch. The timestamp of the first commit on a branch is subtracted from the timestamp on the merge action of the pull request. |

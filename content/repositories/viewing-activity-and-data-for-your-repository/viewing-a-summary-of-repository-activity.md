---
title: Viewing a summary of repository activity
intro: 'You can view an overview of a repository''s pull request, issue, and commit activity.'
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-a-summary-of-repository-activity
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View repository activity
---

## About Pulse

You can view an overview of a repository's activity through Pulse. Pulse includes a list of open and merged pull requests, open and closed issues, and a graph showing the commit activity for the top 15 users who committed to the default branch of the project in the selected [time period](/articles/viewing-a-summary-of-repository-activity#filtering-by-time).

Commit co-authors are included in the commit activity summary if their commits were merged into the repository's default branch and they're in the top 15 users who have contributed the most commits.

## Accessing Pulse

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}

## Filtering by time

By default, Pulse shows the last seven days of repository activity. To choose a different time period, click the **Period** dropdown in the upper-right corner of the Pulse overview.

![Filtering Pulse activity by time](/assets/images/help/pulse/pulse_time_filter_dropdown.png)

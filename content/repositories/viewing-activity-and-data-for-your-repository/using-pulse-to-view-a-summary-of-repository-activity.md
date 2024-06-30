---
title: Using Pulse to view a summary of repository activity
intro: 'You can use Pulse to see an overview of a repository''s pull request, issue, and commit activity.'
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-a-summary-of-repository-activity
  - /repositories/viewing-activity-and-data-for-your-repository/viewing-a-summary-of-repository-activity
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Using Pulse
---

## About Pulse

You can view an overview of a repository's activity through Pulse. Pulse includes a list of open and merged pull requests, open and closed issues, and a graph showing the commit activity for the top 15 users who committed to the default branch of the project in the selected [time period](/repositories/viewing-activity-and-data-for-your-repository/viewing-a-summary-of-repository-activity#filtering-by-time).

Commit co-authors are included in the commit activity summary if their commits were merged into the repository's default branch and they're in the top 15 users who have contributed the most commits.

{% ifversion repository-activity-view %}
{% data reusables.repositories.activity-view %}
For more information, see "[AUTOTITLE](/repositories/viewing-activity-and-data-for-your-repository/using-the-activity-view-to-see-changes-to-a-repository)."
{% endif %}

## Accessing Pulse

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
1. Optionally, to choose a different time period, select the **Period** dropdown menu in the upper-right corner of the Pulse overview. By default, Pulse shows the last seven days of repository activity.

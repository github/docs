---
title: Analyzing changes to a repository's content
intro: 'You can see the changes to the content of a repository by analyzing the repository''s commits, commit frequency, and content additions and deletions.'
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/visualizing-additions-and-deletions-to-content-in-a-repository
  - /github/visualizing-repository-data-with-graphs/visualizing-additions-and-deletions-to-content-in-a-repository
  - /articles/viewing-commit-frequency-in-a-repository
  - /articles/analyzing-changes-to-a-repository-s-content
  - /articles/analyzing-changes-to-a-repositorys-content
  - /articles/visualizing-commits-in-a-repository
  - /github/visualizing-repository-data-with-graphs/visualizing-commits-in-a-repository
  - /github/visualizing-repository-data-with-graphs/analyzing-changes-to-a-repositorys-content
  - /github/visualizing-repository-data-with-graphs/analyzing-changes-to-a-repositorys-content/visualizing-commits-in-a-repository
  - /github/visualizing-repository-data-with-graphs/analyzing-changes-to-a-repositorys-content/visualizing-additions-and-deletions-to-content-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Analyze changes
---

## Visualizing commits in a repository

You can see all commits made to a repository in the past year (excluding merge commits) in the Commit graph.

The top graph shows commits for the entire year by week. The bottom graph shows the average number of commits by day of the week for the selected week.

![Screenshot of both the repository commit graphs, showing a yearly and then a weekly view.](/assets/images/help/graphs/repo-commit-activity-graphs.png)

### Accessing the commits graph

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
1. In the left sidebar, click **Commits**.
![Screenshot of the left sidebar. The "Commits" tab is highlighted with a dark orange outline.](/assets/images/help/graphs/commits-tab.png)

## Visualizing additions and deletion to content in a repository

The code frequency graph displays the content additions and deletions for each week in a repository's history.

{% ifversion fpt or ghec %}

![Screenshot of the code frequency graph.](/assets/images/help/graphs/repo-code-frequency-graph-dotcom.png)

{% endif %}

### Accessing the code frequency graph

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
1. In the left sidebar, click **Code frequency**.
![Screenshot of the left sidebar. The "Code frequency" tab is highlighted with a dark orange outline.](/assets/images/help/graphs/code-frequency-tab.png)

{% ifversion repository-activity-view %}
{% data reusables.repositories.activity-view %}
For more information, see "[AUTOTITLE](/repositories/viewing-activity-and-data-for-your-repository/using-the-activity-view-to-see-changes-to-a-repository)."
{% endif %}

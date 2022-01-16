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
topics:
  - Repositories
shortTitle: Analyze changes
---

## Visualizing commits in a repository

You can see all commits made to a repository in the past year (excluding merge commits) in the Commit graph.

The top graph shows commits for the entire year by week.

![Repository commit year graph](/assets/images/help/graphs/repo_commit_activity_year_graph.png)

The bottom graph shows the average number of commits by day of the week for the selected week.

![Repository commit week graph](/assets/images/help/graphs/repo_commit_activity_week_graph.png)

### Accessing the commits graph

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. In the left sidebar, click **Commits**. ![Commits tab](/assets/images/help/graphs/commits_tab.png)

## Visualizing additions and deletion to content in a repository

The code frequency graph displays the content additions and deletions for each week in a repository's history.

{% ifversion fpt %}

![코드 주파수 그래프](/assets/images/help/graphs/repo_code_frequency_graph_dotcom.png)

{% endif %}

### Accessing the code frequency graph

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. In the left sidebar, click **Code frequency**. ![Code frequency tab](/assets/images/help/graphs/code_frequency_tab.png)

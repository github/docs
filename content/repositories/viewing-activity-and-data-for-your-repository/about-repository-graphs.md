---
title: About repository graphs
intro: Repository graphs help you view and analyze data for your repository.
redirect_from:
  - /articles/using-graphs
  - /articles/about-repository-graphs
  - /github/visualizing-repository-data-with-graphs/about-repository-graphs
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/about-repository-graphs
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
category:
  - Track repository activity
---
A repository's graphs give you information on {% ifversion fpt or ghec %} traffic, projects that depend on the repository,{% endif %} contributors and commits to the repository, and a repository's forks and network. If you maintain a repository, you can use this data to get a better understanding of who's using your repository and why they're using it.

{% data reusables.repositories.repo-insights-commit-limit %}

{% ifversion fpt or ghec %}

Repository insights is a separate experience under the **Insights** tab for organization-owned repositories. It shows pull request activity and {% data variables.copilot.copilot_code-review_short %} outcomes to help you identify review coverage gaps and opportunities to improve review practices. Its access requirements are separate from the graph availability described below. For prerequisites and navigation, see [AUTOTITLE](/copilot/how-tos/administer-copilot/view-repository-insights). For metric definitions and interpretation, see [AUTOTITLE](/copilot/reference/copilot-usage-metrics/repository-insights-metrics).

Some repository graphs are available only in public repositories with {% data variables.product.prodname_free_user %}:
* Pulse
* Contributors
* Traffic
* Commits
* Code frequency
* Network

All other repository graphs are available in all repositories. Every repository graph is available in public and private repositories with {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, and {% data variables.product.prodname_ghe_cloud %}. {% data reusables.gated-features.more-info %}

{% endif %}

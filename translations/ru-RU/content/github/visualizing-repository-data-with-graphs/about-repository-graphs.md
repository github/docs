---
title: About repository graphs
intro: Repository graphs help you view and analyze data for your repository.
redirect_from:
  - /articles/using-graphs/
  - /articles/about-repository-graphs
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

A repository's graphs give you information on {% if currentVersion == "free-pro-team@latest" %} traffic, projects that depend on the repository,{% endif %} contributors and commits to the repository, and a repository's forks and network. If you maintain a repository, you can use this data to get a better understanding of who's using your repository and why they're using it.

{% if currentVersion == "free-pro-team@latest" %}

Some repository graphs are available only in public repositories with {% data variables.product.prodname_free_user %}:
- Pulse
- Contributors
- Traffic
- Commits
- Code frequency
- Network

All other repository graphs are available in all repositories. Every repository graph is available in public and private repositories with {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, and {% data variables.product.prodname_ghe_cloud %}. {% data reusables.gated-features.more-info %}

{% endif %}

### Дополнительная литература

- "[Accessing basic repository data](/articles/accessing-basic-repository-data)"
- "[Analyzing changes to a repository's content](/articles/analyzing-changes-to-a-repository-s-content)"
- "[Understanding connections between repositories](/articles/understanding-connections-between-repositories)"

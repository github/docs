---
title: Listing the forks of a repository
intro: The Members graph displays all the forks of a repository.
redirect_from:
  - /articles/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-forks-of-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

Forks are listed alphabetically by the username of the person who forked the repository. You can click on the username to be redirected to the user's {% data variables.product.product_name %} profile page or click on the fork name to be redirected to the specific fork of the repository.

{% if currentVersion == "free-pro-team@latest" %}

![Repository members graph](/assets/images/help/graphs/repo_forks_graph_dotcom.png)

{% else %}

![Repository members graph](/assets/images/help/graphs/repo_members_graph.png)

{% endif %}

### Accessing the Members graph

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. In the left sidebar, click **Forks**. ![Forks tab](/assets/images/help/graphs/graphs-sidebar-forks-tab.png)

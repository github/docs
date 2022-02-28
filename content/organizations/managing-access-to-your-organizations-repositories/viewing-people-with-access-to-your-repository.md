---
title: Viewing people with access to your repository
intro: 'Organization owners can view people’s access to a repository within an organization. Owners of organizations using {% data variables.product.prodname_ghe_cloud %} or {% data variables.product.prodname_ghe_server %} can also export a CSV list of people who have access to a repository.'
redirect_from:
  - /articles/viewing-people-with-access-to-your-repository
  - /github/setting-up-and-managing-organizations-and-teams/viewing-people-with-access-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: View people with access
---

Administrators can use this information to help off-board people, gather data for compliance, and other general security checkups.
{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
![Access management overview](/assets/images/help/repository/manage-access-overview.png)
{% else %}
![Repository people permissions list](/assets/images/help/repository/repository-permissions-list.png)
{% endif %}
## Viewing people with access to your repository

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
You can see a combined overview of teams and people with access to your repository in your repository settings. For more information, see "[Managing teams and people with access to your repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#about-access-management-for-repositories)." 
{% else %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.accessing-repository-people %}
{% endif %}
## Exporting a list of people with access to your repository

Owners of organizations on {% data variables.product.prodname_ghe_cloud %} or {% data variables.product.prodname_ghe_server %} can export a CSV list of people who have access to a repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.accessing-repository-people %}
4. Click **Export CSV**.
  ![People tab in the repository sidebar](/assets/images/help/repository/export-repository-permissions.png)

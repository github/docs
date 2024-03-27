---
title: 'Disabling projects in a repository'
intro: 'Repository administrators can turn off {% data variables.projects.projects_v2_and_v1 %} for a repository if you or your team choose not to use projects.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/disabling-project-boards-in-a-repository
  - /articles/disabling-project-boards-in-a-repository
  - /github/managing-your-work-on-github/disabling-project-boards-in-a-repository
  - /github/administering-a-repository/managing-repository-settings/disabling-project-boards-in-a-repository
  - /repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/disabling-project-boards-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: 'Disable projects'
allowTitleToDifferFromFilename: true
---

{% ifversion projects-v2 %}

## Disabling {% data variables.projects.projects_v2 %} in a repository

When you disable {% data variables.projects.projects_v2 %} in a repository, linked projects will no longer be available in the repository's {% octicon "table" aria-hidden="true" %} **Projects** tab. Linked projects will remain accessible at an organization or user level.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Under "Features," deselect the **Projects** checkbox.

{% ifversion projects-v1 %}## Disabling {% data variables.projects.projects_v1_boards %} in a repository{% endif %}

{% endif %}

When you disable {% data variables.projects.projects_v1_boards %} in a repository, existing {% data variables.projects.projects_v1_boards %} are inaccessible at their previous URLs. If you decide to re-enable {% data variables.projects.projects_v1_boards %}, any {% data variables.projects.projects_v1_boards %} that were previously added will be available.

After you disable {% data variables.projects.projects_v1_boards %}, you will no longer see {% data variables.projects.projects_v1_board %} information in timelines or audit logs.

{% ifversion projects-v1-create-repo-project %}{% else %}You can only create new {% data variables.projects.projects_v1_boards %} in a repository if one or more {% data variables.projects.projects_v1_boards %} already exist in the repository. If the repository has no {% data variables.projects.projects_v1_boards %}, this option will not be available.{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Under "Features," deselect the **{% data variables.product.prodname_projects_v1_caps %}** checkbox.

---
title: 'Disabling {% data variables.projects.projects_v1_boards %} in a repository'
intro: 'Repository administrators can turn off {% data variables.projects.projects_v1_boards %} for a repository if you or your team manages work differently.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/disabling-project-boards-in-a-repository
  - /articles/disabling-project-boards-in-a-repository
  - /github/managing-your-work-on-github/disabling-project-boards-in-a-repository
  - /github/administering-a-repository/managing-repository-settings/disabling-project-boards-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: 'Disable {% data variables.projects.projects_v1_boards %}'
allowTitleToDifferFromFilename: true
---
When you disable {% data variables.projects.projects_v1_boards %}, you will no longer see {% data variables.projects.projects_v1_board %} information in timelines or [audit logs](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log).

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Under "Features," unselect the **Projects** checkbox.
  ![Remove Projects checkbox](/assets/images/help/projects/disable-projects-checkbox.png)

After {% data variables.projects.projects_v1_boards %} are disabled, existing {% data variables.projects.projects_v1_boards %} are inaccessible at their previous URLs. {% data reusables.organizations.disable_project_board_results %}

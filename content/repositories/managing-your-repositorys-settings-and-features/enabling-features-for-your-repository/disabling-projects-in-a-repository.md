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
shortTitle: 'Disable projects'
allowTitleToDifferFromFilename: true
category:
  - Customize and configure a repository
---

## Disabling {% data variables.projects.projects_v2 %} in a repository

When you disable {% data variables.projects.projects_v2 %} in a repository, linked projects will no longer be available in the repository's **{% octicon "table" aria-hidden="true" aria-label="table" %} Projects** tab. Linked projects will remain accessible at an organization or user level.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Under "Features," deselect the **Projects** checkbox.

---
title: 'Disabling projects in your organization'
intro: 'Organization owners can turn off organization-wide {% data variables.projects.projects_v2 %} in an organization.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/disabling-project-boards-in-your-organization
  - /articles/disabling-project-boards-in-your-organization
  - /github/managing-your-work-on-github/disabling-project-boards-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Disable projects
allowTitleToDifferFromFilename: true
category:
  - Manage projects
---
After you disable organization-wide projects, it won’t be possible to create new projects at the organization level, and any existing organization-level projects will become inaccessible at their previous URLs.

## Disabling {% data variables.projects.projects_v2_and_v1 %} in your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Code planning, and automation" section of the sidebar, click **{% octicon "table" aria-hidden="true" aria-label="table" %} Projects**.
1. Decide whether to disable {% data variables.projects.projects_v2_and_v1 %} in your organization. Then, under "Projects":
    * To disable {% data variables.projects.projects_v2_and_v1 %}, deselect **Enable Projects for the organization**.
    * To enable {% data variables.projects.projects_v2_and_v1 %} in the organization, select **Enable Projects for the organization**.
1. Click **Save**.

If you decide to re-enable {% data variables.projects.projects_v2_and_v1 %}, any {% data variables.projects.projects_v2_and_v1 %} that were previously added will be available.

## Further reading

* [AUTOTITLE](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
* [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/disabling-project-boards-in-a-repository)

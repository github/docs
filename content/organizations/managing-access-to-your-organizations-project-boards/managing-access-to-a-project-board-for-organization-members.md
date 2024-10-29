---
title: 'Managing access to a {% data variables.product.prodname_project_v1 %} for organization members'
intro: 'As an organization owner or {% data variables.projects.projects_v1_board %} admin, you can set a default permission level for a {% data variables.projects.projects_v1_board %} for all organization members.'
redirect_from:
  - /articles/managing-access-to-a-project-board-for-organization-members
  - /github/setting-up-and-managing-organizations-and-teams/managing-access-to-a-project-board-for-organization-members
versions:
  feature: projects-v1
topics:
  - Organizations
  - Teams
shortTitle: Manage access for members
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

By default, organization members have write access to their organization's {% data variables.projects.projects_v1_boards %} unless organization owners or {% data variables.projects.projects_v1_board %} admins set different permissions for specific {% data variables.projects.projects_v1_boards %}.

## Setting a baseline permission level for all organization members

{% tip %}

**Tip:** You can give an organization member higher permissions to {% data variables.projects.projects_v1_board %}. For more information, see "[AUTOTITLE](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)."

{% endtip %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Click **Projects (classic)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
1. Under "Organization member permission", choose a baseline permission level for all organization members: **Read**, **Write**, **Admin**, or **None**.
1. Click **Save**.

## Further reading

* "[AUTOTITLE](/organizations/managing-access-to-your-organizations-project-boards/managing-an-individuals-access-to-an-organization-project-board)"
* "[AUTOTITLE](/organizations/managing-access-to-your-organizations-project-boards/managing-team-access-to-an-organization-project-board)"
* "[AUTOTITLE](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)"

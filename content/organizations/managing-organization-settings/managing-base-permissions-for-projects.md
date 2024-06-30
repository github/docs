---
title: 'Managing base permissions for {% data variables.projects.projects_v2 %}'
intro: 'Organization owners can configure a base permission for {% data variables.projects.projects_v2 %} created in their organization.'
versions:
  feature: projects-v2-default-base-permission
topics:
  - Projects
shortTitle: 'Manage {% data variables.projects.projects_v2 %} base permissions'
allowTitleToDifferFromFilename: true
---

## About base permissions for {% data variables.projects.projects_v2 %}

You can set a project's base permission to control the level of access for all members of your organization. You can then specify individual and team permissions for each project in addition to the base permission. For more information on setting permissions for individual projects, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects)."

When you set the base permission for projects in your organization's settings, the base permission will apply to any new projects created by organization members and existing projects that do not currently have a base permission configured in the project's settings.

{% note %}

**Note:** {% data reusables.projects.migration-permissions-warning %}

{% endnote %}

## Setting a base permission for {% data variables.projects.projects_v2  %} in your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
1. Under "Projects base permissions", select the dropdown menu and click a permissions level.
1. In the pop-up window, review the changes and number of projects that will be affected. To confirm, click **Change default permission to PERMISSION**.

## Further reading

* "[AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects)"

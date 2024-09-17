---
title: 'Migrating from {% data variables.product.prodname_projects_v1 %}'
intro: 'You can migrate your {% data variables.projects.projects_v1_board %} to the new {% data variables.product.prodname_projects_v2 %} experience.'
versions:
  feature: projects-v2-migration
redirect_from:
  - /issues/trying-out-the-new-projects-experience/migrating-your-project
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
---

{% note %}

**Notes:**

* If the project you are migrating contains more than {% data variables.projects.item_limit %} items, open issues will be prioritized followed by open pull requests and then notes. Remaining space will be used for closed issues, merged pull requested, and closed pull requests. Items that cannot be migrated due to this limit will be moved to the archive. If the archive limit of {% data variables.projects.archived_item_limit %} items is reached, additional items will not be migrated.
* Note cards are converted to draft issues, and the contents are saved to the body of the draft issue. If information appears to be missing, make any hidden fields visible. For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/changing-the-layout-of-a-view#showing-and-hiding-fields)."
* Automation will not be migrated.
* Triage, archive, and activity will not be migrated.
* After migration, the new migrated project and old project will not be kept in sync.
* {% data reusables.projects.migration-permissions-warning %}

{% endnote %}

## About project migration

You can migrate your {% data variables.projects.projects_v1_boards %} to the new {% data variables.product.prodname_projects_v2 %} experience and try out tables, multiple views, new automation options, and powerful field types. For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)."

## Migrating an organization {% data variables.projects.projects_v1_board %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}
1. In the left sidebar, click **Projects (classic)**.
{% data reusables.projects.migrate-project-steps %}

## Migrating a user {% data variables.projects.projects_v1_board %}

1. In the upper-right corner of {% data variables.product.prodname_dotcom_the_website %}, select your profile photo, then click **Your projects**.

   ![Screenshot showing the profile photo menu. The "Your projects" link is highlighted with an orange outline.](/assets/images/help/projects-v2/projects-profile-menu.png)

1. On the top of your profile page, in the main navigation, click {% octicon "table" aria-hidden="true" %} **Projects**.
   ![Screenshot showing the tabs on a user profile. The 'Projects' tab is highlighted with an orange outline.](/assets/images/help/projects-v2/tab-projects.png)
1. Above the list of projects, click **Projects (classic)**.
{% data reusables.projects.migrate-project-steps %}

## Migrating a repository {% data variables.projects.projects_v1_board %}

{% note %}

**Note:** {% data variables.projects.projects_v2_caps %} does not support repository level projects. When you migrate a repository {% data variables.projects.projects_v1_board %}, it will migrate to either the organization or personal account that owns the repository project, and the migrated project will be pinned to the original repository.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
1. Under your repository name, click {% octicon "table" aria-hidden="true" %} **Projects**.
1. In the left sidebar, click **Projects (classic)**.
{% data reusables.projects.migrate-project-steps %}

---
title: Migrating your project to Projects (beta)
intro: You can migrate your projects from the old projects experience to Projects (beta).
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Projects
  - Organizations
---

{% note %}

**Notes:**

- Projects (beta) is currently in public beta and subject to change.
- If the project you are migrating contains more than 1200 items, open issues will be prioritized followed by open pull requests and then notes. Remaining space will be used for closed issues, merged pull requested, and closed pull requests. Items that cannot be migrated due to this limit will be moved to the archive. If the archive limit of 10,000 items is reached, additional items will not be migrated.
- Note cards are converted to draft issues, and the contents are saved to the body of the draft issue. If information appears to be missing, make any hidden fields visible. For more information, see "[Showing and hiding fields](/issues/trying-out-the-new-projects-experience/customizing-your-project-views#showing-and-hiding-fields)."
- Automation will not be migrated.
- Triage, archive, and activity will not be migrated.
- After migration, the new migrated project and old project will not be kept in sync.

{% endnote %}

## About project migration

You can migrate your project boards to the all new projects (beta) experience and try out tables, multiple views, new automation options, and powerful field types. For more information, see "[About projects (beta)](/issues/trying-out-the-new-projects-experience/about-projects)."

## Migrating an organization project board

{% data reusables.projects.enable-migration %}
{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}
1. On the left, click **Projects (classic)**.
  ![Screenshot showing Projects (classic) menu option}](/assets/images/help/issues/projects-classic-org.png)
{% data reusables.projects.migrate-project-steps %}

## Migrating a user project board

{% data reusables.projects.enable-migration %}
{% data reusables.profile.access_profile %}
1. On the top of your profile page, in the main navigation, click {% octicon "project" aria-label="The project board icon" %} **Projects**.
![Project tab](/assets/images/help/projects/user-projects-tab.png)
1. Above the list of projects, click **Projects (classic)**.
  ![Screenshot showing Projects (classic) menu option}](/assets/images/help/issues/projects-classic-user.png)
{% data reusables.projects.migrate-project-steps %}

## Migrating a repository project board

{% note %}

**Note:** Projects (beta) does not support repository level projects. When you migrate a repository project board, it will migrate to either the organization or personal account that owns the repository project, and the migrated project will be pinned to the original repository.

{% endnote %}

{% data reusables.projects.enable-migration %}
{% data reusables.repositories.navigate-to-repo %}
1. Under your repository name, click {% octicon "project" aria-label="The project board icon" %} **Projects**.
![Project tab](/assets/images/help/projects/repo-tabs-projects.png)
1. Click **Projects (classic)**.
  ![Screenshot showing Projects (classic) menu option}](/assets/images/help/issues/projects-classic-org.png)
{% data reusables.projects.migrate-project-steps %}

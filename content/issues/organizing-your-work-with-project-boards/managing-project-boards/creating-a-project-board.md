---
title: 'Creating a {% data variables.product.prodname_project_v1 %}'
intro: '{% data variables.projects.projects_v1_boards_caps %} can be used to create customized workflows to suit your needs, like tracking and prioritizing specific feature work, comprehensive roadmaps, or even release checklists.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/creating-a-project-board
  - /articles/creating-a-project
  - /articles/creating-a-project-board
  - /github/managing-your-work-on-github/creating-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
  - Issues
  - Projects
  - Project management
type: how_to
allowTitleToDifferFromFilename: true
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

{% data reusables.project-management.link-repos-to-project-board %} For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/linking-a-repository-to-a-project-board)."

Once you've created your {% data variables.projects.projects_v1_board %}, you can add issues, pull requests, and notes to it. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards/adding-issues-and-pull-requests-to-a-project-board)" and "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards/adding-notes-to-a-project-board)."

You can also configure workflow automations to keep your {% data variables.projects.projects_v1_board %} in sync with the status of issues and pull requests. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-automation-for-project-boards)."

{% data reusables.project-management.project-board-import-with-api %}

## Creating a user-owned {% data variables.projects.projects_v1_board %}

{% data reusables.projects.classic-project-creation %}

{% data reusables.profile.access_profile %}
1. On the top of your profile page, in the main navigation, click {% octicon "project" aria-hidden="true" %} **Projects**.

   ![Screenshot showing profile tabs. The 'Projects' tab is highlighted with an orange outline.](/assets/images/help/projects-v2/tab-projects.png){% ifversion projects-v2 %}

1. Click **Projects (classic)**{% endif %}
{% data reusables.project-management.click-new-project %}
{% data reusables.project-management.create-project-name-description %}
{% data reusables.project-management.choose-template %}
{% data reusables.project-management.choose-visibility %}
{% data reusables.project-management.linked-repositories %}
{% data reusables.project-management.create-project-button %}
{% data reusables.project-management.add-column-new-project %}
{% data reusables.project-management.name-project-board-column %}
{% data reusables.project-management.select-column-preset %}
{% data reusables.project-management.select-automation-options-new-column %}
{% data reusables.project-management.click-create-column %}
{% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## Creating an organization-wide {% data variables.projects.projects_v1_board %}

{% data reusables.projects.classic-project-creation %}

{% ifversion classic-project-visibility-permissions %}
{% note %}

**Note:** {% data reusables.projects.owners-can-limit-visibility-permissions %}

{% endnote %}
{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Click **Projects (classic)**{% endif %}
{% data reusables.project-management.click-new-project %}
{% data reusables.project-management.create-project-name-description %}
{% data reusables.project-management.choose-template %}
{% data reusables.project-management.choose-visibility %}
{% data reusables.project-management.linked-repositories %}
{% data reusables.project-management.create-project-button %}
{% data reusables.project-management.add-column-new-project %}
{% data reusables.project-management.name-project-board-column %}
{% data reusables.project-management.select-column-preset %}
{% data reusables.project-management.select-automation-options-new-column %}
{% data reusables.project-management.click-create-column %}
{% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

{% ifversion projects-v1-create-repo-project %}

## Creating a repository {% data variables.projects.projects_v1_board %}

{% data reusables.projects.classic-project-creation %}

{% data reusables.repositories.navigate-to-repo %}
1. Under your repository name, click {% octicon "project" aria-hidden="true" %} **Projects**.{% ifversion projects-v2 %}
1. Click **Projects (classic)**{% endif %}
{% data reusables.project-management.click-new-project %}
{% data reusables.project-management.create-project-name-description %}
{% data reusables.project-management.choose-template %}
{% data reusables.project-management.create-project-button %}
{% data reusables.project-management.add-column-new-project %}
{% data reusables.project-management.name-project-board-column %}
{% data reusables.project-management.select-column-preset %}
{% data reusables.project-management.select-automation-options-new-column %}
{% data reusables.project-management.click-create-column %}
{% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

{% endif %}

## Further reading

- "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)"
- "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/editing-a-project-board)"{% ifversion fpt or ghec %}
- "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/copying-a-project-board)"{% endif %}
- "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/closing-a-project-board)"
- "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-automation-for-project-boards)"

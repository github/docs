---
title: 'Archiving cards on a {% data variables.product.prodname_project_v1 %}'
intro: 'You can archive {% data variables.projects.projects_v1_board %} cards to declutter your workflow without losing the historical context of a project.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/archiving-cards-on-a-project-board
  - /articles/archiving-cards-on-a-project-board
  - /github/managing-your-work-on-github/archiving-cards-on-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Archive cards on {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
---
{% data reusables.projects.project_boards_old %}

Automation in your {% data variables.projects.projects_v1_board %} does not apply to archived {% data variables.projects.projects_v1_board %} cards. For example, if you close an issue in a {% data variables.projects.projects_v1_board %}'s archive, the archived card does not automatically move to the "Done" column. When you restore a card from the {% data variables.projects.projects_v1_board %} archive, the card will return to the column where it was archived.

## Archiving cards on a {% data variables.projects.projects_v1_board %}

1. In a {% data variables.projects.projects_v1_board %}, find the card you want to archive, then click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
![List of options for editing a project board card](/assets/images/help/projects/select-archiving-options-project-board-card.png)
2. Click **Archive**.
![Select archive option from menu](/assets/images/help/projects/archive-project-board-card.png)

## Restoring cards on a {% data variables.projects.projects_v1_board %} from the sidebar

{% data reusables.project-management.click-menu %}
2. Click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **View archive**.
  ![Select view archive option from menu](/assets/images/help/projects/select-view-archive-option-project-board-card.png)
3. Above the {% data variables.projects.projects_v1_board %} card you want to unarchive, click **Restore**.
  ![Select restore project board card](/assets/images/help/projects/restore-card.png)

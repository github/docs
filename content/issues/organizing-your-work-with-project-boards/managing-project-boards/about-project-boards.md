---
title: 'About {% data variables.product.prodname_projects_v1 %}'
intro: '{% data variables.product.prodname_projects_v1_caps %} on {% data variables.product.product_name %} help you organize and prioritize your work. {% ifversion projects-v1-can-create %} You can create {% data variables.projects.projects_v1_boards %} for specific feature work, comprehensive roadmaps, or even release checklists. With {% data variables.product.prodname_projects_v1 %}, you have the flexibility to create customized workflows that suit your needs.{% endif %}'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-project-boards
  - /articles/about-projects
  - /articles/about-project-boards
  - /github/managing-your-work-on-github/about-project-boards
  - /issues/organizing-your-work-with-project-boards/managing-project-boards/copying-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% data variables.projects.projects_v1_boards_caps %} are made up of issues, pull requests, and notes that are categorized as cards in columns of your choosing. You can drag and drop or use keyboard shortcuts to reorder cards within a column, move cards from column to column, and change the order of columns.

{% data variables.projects.projects_v1_board_caps %} cards contain relevant metadata for issues and pull requests, like labels, assignees, the status, and who opened it. {% data reusables.project-management.edit-in-project %}

You can create notes within columns to serve as task reminders, references to issues and pull requests from any repository, or to add information related to the {% data variables.projects.projects_v1_board %}. You can create a reference card for another {% data variables.projects.projects_v1_board %} by adding a link to a note. If the note isn't sufficient for your needs, you can convert it to an issue. For more information on converting notes to issues, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards/adding-notes-to-a-project-board)."

Types of {% data variables.projects.projects_v1_boards %}:

* **User-owned {% data variables.projects.projects_v1_board %}** can contain issues and pull requests from any personal repository.
* **Organization-wide {% data variables.projects.projects_v1_board %}** can contain issues and pull requests from any repository that belongs to an organization.  {% data reusables.project-management.link-repos-to-project-board %} For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/linking-a-repository-to-a-project-board)."
* **Repository {% data variables.projects.projects_v1_board %}** are scoped to issues and pull requests within a single repository. They can also include notes that reference issues and pull requests in other repositories.

## {% ifversion projects-v1-can-create %}Creating and viewing{% else %}Viewing{% endif %} {% data variables.projects.projects_v1_boards %}

{% ifversion projects-v1-can-create %}

To create a {% data variables.projects.projects_v1_board %} for your organization, you must be an organization member. Organization owners and people with {% data variables.projects.projects_v1_board %} admin permissions can customize access to the {% data variables.projects.projects_v1_board %}.

{% ifversion classic-project-visibility-permissions %}{% data reusables.projects.owners-can-limit-visibility-permissions %}{% endif %}

{% endif %}

If an organization-owned {% data variables.projects.projects_v1_board %} includes issues or pull requests from a repository that you don't have permission to view, the card will be redacted.  For more information, see "[AUTOTITLE](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)."

The activity view shows the {% data variables.projects.projects_v1_board %}'s recent history, such as cards someone created or moved between columns. To access the activity view, click **Menu** and scroll down.

To find specific cards on a {% data variables.projects.projects_v1_board %} or view a subset of the cards, you can filter {% data variables.projects.projects_v1_board %} cards. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards/filtering-cards-on-a-project-board)."

To simplify your workflow and keep completed tasks off your {% data variables.projects.projects_v1_board %}, you can archive cards. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards/archiving-cards-on-a-project-board)."

If you've completed all of your {% data variables.projects.projects_v1_board %} tasks or no longer need to use your {% data variables.projects.projects_v1_board %}, you can close the {% data variables.projects.projects_v1_board %}. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/closing-a-project-board)."

You can also [disable {% data variables.projects.projects_v1_boards %} in a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/disabling-project-boards-in-a-repository) or [disable {% data variables.projects.projects_v1_boards %} in your organization](/organizations/managing-organization-settings/disabling-project-boards-in-your-organization), if you prefer to track your work in a different way.

{% ifversion projects-v1-can-create %}{% data reusables.project-management.project-board-import-with-api %}{% endif %}

{% ifversion projects-v1-can-create %}

## Templates for {% data variables.projects.projects_v1_boards %}

You can use templates to quickly set up a new {% data variables.projects.projects_v1_board %}. When you use a template to create a {% data variables.projects.projects_v1_board %}, your new board will include columns as well as cards with tips for using {% data variables.product.prodname_projects_v1 %}. You can also choose a template with automation already configured.

| Template | Description |
| --- | --- |
| Basic kanban | Track your tasks with To do, In progress, and Done columns |
| Automated kanban | Cards automatically move between To do, In progress, and Done columns |
| Automated kanban with review | Cards automatically move between To do, In progress, and Done columns, with additional triggers for pull request review status |
| Bug triage | Triage and prioritize bugs with To do, High priority, Low priority, and Closed columns |

For more information on automation for {% data variables.product.prodname_projects_v1 %}, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-automation-for-project-boards)."

{% data reusables.project-management.copy-project-boards %}

{% endif %}

## Further reading

{%- ifversion projects-v1-can-create %}- "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/creating-a-project-board)"{% endif %}
* "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/editing-a-project-board)"
* "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards/adding-issues-and-pull-requests-to-a-project-board)"
* "[AUTOTITLE](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)"
* "[AUTOTITLE](/get-started/accessibility/keyboard-shortcuts#project-boards)"

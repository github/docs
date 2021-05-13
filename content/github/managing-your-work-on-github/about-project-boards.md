---
title: About project boards
intro: 'Project boards on {% data variables.product.product_name %} help you organize and prioritize your work. You can create project boards for specific feature work, comprehensive roadmaps, or even release checklists. With project boards, you have the flexibility to create customized workflows that suit your needs.'
redirect_from:
  - /articles/about-projects/
  - /articles/about-project-boards
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Project boards are made up of issues, pull requests, and notes that are categorized as cards in columns of your choosing. You can drag and drop or use keyboard shortcuts to reorder cards within a column, move cards from column to column, and change the order of columns.

Project board cards contain relevant metadata for issues and pull requests, like labels, assignees, the status, and who opened it. {% data reusables.project-management.edit-in-project %}

You can create notes within columns to serve as task reminders, references to issues and pull requests from any repository on {% data variables.product.product_name %}, or to add information related to the project board. You can create a reference card for another project board by adding a link to a note. If the note isn't sufficient for your needs, you can convert it to an issue. For more information on converting project board notes to issues, see "[Adding notes to a project board](/articles/adding-notes-to-a-project-board)."

Types of project boards:

- **User-owned project boards** can contain issues and pull requests from any personal repository.
- **Organization-wide project boards** can contain issues and pull requests from any repository that belongs to an organization.  {% data reusables.project-management.link-repos-to-project-board %} For more information, see "[Linking a repository to a project board](/articles/linking-a-repository-to-a-project-board)."
- **Repository project boards** are scoped to issues and pull requests within a single repository. They can also include notes that reference issues and pull requests in other repositories.

### Creating and viewing project boards

To create a project board for your organization, you must be an organization member. Organization owners and people with project board admin permissions can customize access to the project board.

If an organization-owned project board includes issues or pull requests from a repository that you don't have permission to view, the card will be redacted.  For more information, see "[Project board permissions for an organization](/articles/project-board-permissions-for-an-organization)."

The activity view shows the project board's recent history, such as cards someone created or moved between columns. To access the activity view, click **Menu** and scroll down.

To find specific cards on a project board or view a subset of the cards, you can filter project board cards. For more information, see "[Filtering cards on a project board](/articles/filtering-cards-on-a-project-board)."

To simplify your workflow and keep completed tasks off your project board, you can archive cards. For more information, see "[Archiving cards on a project board](/articles/archiving-cards-on-a-project-board)."

If you've completed all of your project board tasks or no longer need to use your project board, you can close the project board. For more information, see "[Closing a project board](/articles/closing-a-project-board)."

You can also [disable project boards in a repository](/articles/disabling-project-boards-in-a-repository) or [disable project boards in your organization](/articles/disabling-project-boards-in-your-organization), if you prefer to track your work in a different way.

{% data reusables.project-management.project-board-import-with-api %}

### Templates for project boards

You can use templates to quickly set up a new project board. When you use a template to create a project board, your new board will include columns as well as cards with tips for using project boards. You can also choose a template with automation already configured.

| Template | Description |
| --- | --- |
| Basic kanban | Track your tasks with To do, In progress, and Done columns |
| Automated kanban | Cards automatically move between To do, In progress, and Done columns | 
| Automated kanban with review | Cards automatically move between To do, In progress, and Done columns, with additional triggers for pull request review status |
| Bug triage | Triage and prioritize bugs with To do, High priority, Low priority, and Closed columns |

For more information on automation for project boards, see "[About automation for project boards](/articles/about-automation-for-project-boards)."

![Project board with basic kanban template](/assets/images/help/projects/project-board-basic-kanban-template.png)

{% data reusables.project-management.copy-project-boards %}

### Further reading

- "[Creating a project board](/articles/creating-a-project-board)"
- "[Editing a project board](/articles/editing-a-project-board)"{% if currentVersion == "free-pro-team@latest" %}
- "[Copying a project board](/articles/copying-a-project-board)"{% endif %}
- "[Adding issues and pull requests to a project board](/articles/adding-issues-and-pull-requests-to-a-project-board)"
- "[Project board permissions for an organization](/articles/project-board-permissions-for-an-organization)"
- "[Keyboard shortcuts](/articles/keyboard-shortcuts/#project-boards)"

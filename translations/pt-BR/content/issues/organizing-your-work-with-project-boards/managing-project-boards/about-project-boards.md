---
title: 'Sobre {% data variables.product.prodname_projects_v1 %}'
intro: '{% data variables.product.prodname_projects_v1_caps %} on {% data variables.product.product_name %} help you organize and prioritize your work. You can create {% data variables.projects.projects_v1_boards %} for specific feature work, comprehensive roadmaps, or even release checklists. With {% data variables.product.prodname_projects_v1 %}, you have the flexibility to create customized workflows that suit your needs.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-project-boards
  - /articles/about-projects
  - /articles/about-project-boards
  - /github/managing-your-work-on-github/about-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% data variables.projects.projects_v1_boards_caps %} are made up of issues, pull requests, and notes that are categorized as cards in columns of your choosing. É possível arrastar e soltar ou usar atalhos de teclado para reordenar cartões em uma coluna, mover cartões de coluna para coluna e alterar a ordem das colunas.

{% data variables.projects.projects_v1_board_caps %} cards contain relevant metadata for issues and pull requests, like labels, assignees, the status, and who opened it. {% data reusables.project-management.edit-in-project %}

You can create notes within columns to serve as task reminders, references to issues and pull requests from any repository on {% data variables.product.product_location %}, or to add information related to the {% data variables.projects.projects_v1_board %}. You can create a reference card for another {% data variables.projects.projects_v1_board %} by adding a link to a note. Se a observação não for suficiente para suas necessidades, você poderá convertê-la em um problema. For more information on converting notes to issues, see "[Adding notes to a {% data variables.product.prodname_project_v1 %}](/articles/adding-notes-to-a-project-board)."

Tipos de quadros de projeto:

- **User-owned {% data variables.projects.projects_v1_board %}** can contain issues and pull requests from any personal repository.
- **Organization-wide {% data variables.projects.projects_v1_board %}** can contain issues and pull requests from any repository that belongs to an organization.  {% data reusables.project-management.link-repos-to-project-board %} For more information, see "[Linking a repository to a {% data variables.product.prodname_project_v1 %}](/articles/linking-a-repository-to-a-project-board)."
- **Repository {% data variables.projects.projects_v1_board %}** are scoped to issues and pull requests within a single repository. Eles também podem incluir observações que fazem referência a problemas e pull requests em outros repositórios.

## Creating and viewing {% data variables.projects.projects_v1_boards %}

To create a {% data variables.projects.projects_v1_board %} for your organization, you must be an organization member. Organization owners and people with {% data variables.projects.projects_v1_board %} admin permissions can customize access to the {% data variables.projects.projects_v1_board %}.

If an organization-owned {% data variables.projects.projects_v1_board %} includes issues or pull requests from a repository that you don't have permission to view, the card will be redacted.  For more information, see "[{% data variables.product.prodname_project_v1_caps %} permissions for an organization](/articles/project-board-permissions-for-an-organization)."

The activity view shows the {% data variables.projects.projects_v1_board %}'s recent history, such as cards someone created or moved between columns. Para acessar a exibição da atividade, clique em **Menu** e role para baixo.

To find specific cards on a {% data variables.projects.projects_v1_board %} or view a subset of the cards, you can filter {% data variables.projects.projects_v1_board %} cards. For more information, see "[Filtering cards on a {% data variables.product.prodname_project_v1 %}](/articles/filtering-cards-on-a-project-board)."

To simplify your workflow and keep completed tasks off your {% data variables.projects.projects_v1_board %}, you can archive cards. For more information, see "[Archiving cards on a {% data variables.product.prodname_project_v1 %}](/articles/archiving-cards-on-a-project-board)."

If you've completed all of your {% data variables.projects.projects_v1_board %} tasks or no longer need to use your {% data variables.projects.projects_v1_board %}, you can close the {% data variables.projects.projects_v1_board %}. For more information, see "[Closing a {% data variables.product.prodname_project_v1 %}](/articles/closing-a-project-board)."

You can also [disable {% data variables.projects.projects_v1_boards %} in a repository](/articles/disabling-project-boards-in-a-repository) or [disable {% data variables.projects.projects_v1_boards %} in your organization](/articles/disabling-project-boards-in-your-organization), if you prefer to track your work in a different way.

{% data reusables.project-management.project-board-import-with-api %}

## Templates for {% data variables.projects.projects_v1_boards %}

You can use templates to quickly set up a new {% data variables.projects.projects_v1_board %}. When you use a template to create a {% data variables.projects.projects_v1_board %}, your new board will include columns as well as cards with tips for using {% data variables.product.prodname_projects_v1 %}. Você também pode escolher um modelo com automação já configurada.

| Modelo                          | Descrição                                                                                                                                                                              |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kanban básico                   | Rastreie tarefas com colunas To do (Pendentes), In progress (Em andamento) e Done (Concluídas)                                                                                         |
| Kanban automatizado             | Cartões são movidos automaticamente entre as colunas To do (Pendentes), In progress (Em andamento) e Done (Concluídas)                                                                 |
| Kanban automatizado com revisão | Cartões são movidos automaticamente entre as colunas To do (Pendentes), In progress (Em andamento) e Done (Concluídos), com gatilhos adicionais para status de revisão de pull request |
| Triagem de erros                | Faça a triagem e priorize erros com as colunas To do (Pendentes), High priority (Prioridade alta), Low priority (Prioridade baixa) e Closed (Fechados)                                 |

For more information on automation for {% data variables.product.prodname_projects_v1 %}, see "[About automation for {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards)."

![{% data variables.product.prodname_project_v1 %} with basic kanban template](/assets/images/help/projects/project-board-basic-kanban-template.png)

{% data reusables.project-management.copy-project-boards %}

## Leia mais

- "[Criar um {% data variables.product.prodname_project_v1 %}](/articles/creating-a-project-board)"
- "[Editing a {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board)"{% ifversion fpt or ghec %}
- "[Copying a {% data variables.product.prodname_project_v1 %}](/articles/copying-a-project-board)"{% endif %}
- "[Adding issues and pull requests to a {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)"
- "[{% data variables.product.prodname_project_v1_caps %} permissions for an organization](/articles/project-board-permissions-for-an-organization)"
- "[Atalhos de teclado](/articles/keyboard-shortcuts/#project-boards)"

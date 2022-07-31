---
title: 'About automation for {% data variables.product.prodname_projects_v1 %}'
intro: 'You can configure automatic workflows to keep the status of {% data variables.projects.projects_v1_board %} cards in sync with the associated issues and pull requests.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-automation-for-project-boards
  - /articles/about-automation-for-project-boards
  - /github/managing-your-work-on-github/about-automation-for-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Automation for {% data variables.product.prodname_projects_v1 %}'
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.automate-project-board-permissions %}  For more information, see "[{% data variables.product.prodname_projects_v1_caps %} permissions for an organization](/articles/project-board-permissions-for-an-organization)."

You can automate actions based on triggering events for {% data variables.projects.projects_v1_board %} columns. This eliminates some of the manual tasks in managing a {% data variables.projects.projects_v1_board %}. For example, you can configure a "To do" column, where any new issues or pull requests you add to a {% data variables.projects.projects_v1_board %} are automatically moved to the configured column. For more information, see "[Configuring automation for {% data variables.product.prodname_projects_v1 %}](/articles/configuring-automation-for-project-boards)."

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

{% data variables.projects.projects_v1_board_caps %} automation can also help teams develop a shared understanding of a {% data variables.projects.projects_v1_board %}'s purpose and the team's development process by creating a standard workflow for certain actions.

{% data reusables.project-management.resync-automation %}

## Opções de automação

| Coluna predefinida        | Opções de configuração    |
| ------------------------- | ------------------------- |
| To do (Tarefas pendentes) | <ul><li>Mover todos os problemas recentemente adicionados aqui</li><li>Mover todas as pull requests recentemente adicionadas aqui</li><li>Mover todos os problemas reabertos aqui</li><li>Mover todas as pull requests reabertas aqui</li></ul> |
| Em andamento              | <ul><li>Mover todas as pull requests recentemente abertas aqui</li><li>Mover todos os problemas reabertos aqui</li><li>Mover todas as pull requests reabertas aqui</li><li>Mover todas as pull requests que atendem ao número mínimo de revisões necessárias do branch base aqui</li><li>Mover todas as pull requests que não atendem mais ao número mínimo de revisões necessárias do branch base aqui</li></ul> |
| Concluído                 | <ul><li>Mover todos os problemas fechados aqui</li><li>Mover todas as pull requests mescladas aqui</li><li>Mover todas as pull requests fechadas e não mescladas aqui</li></ul> |

## Acompanhamento do andamento do projeto

You can track the progress on your {% data variables.projects.projects_v1_board %}. Cartões nas colunas "Pendente", "Em progresso" ou "Concluído" contam para o progresso geral do projeto. {% data reusables.project-management.project-progress-locations %}

For more information, see "[Tracking progress on your {% data variables.product.prodname_project_v1 %}](/github/managing-your-work-on-github/tracking-progress-on-your-project-board)."

## Leia mais
- "[Configuring automation for {% data variables.product.prodname_projects_v1 %}](/articles/configuring-automation-for-project-boards)"{% ifversion fpt or ghec %}
- "[Copying a {% data variables.product.prodname_project_v1 %}](/articles/copying-a-project-board)"{% endif %}

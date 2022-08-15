---
title: 'Reabrindo um {% data variables.product.prodname_project_v1 %} fechado'
intro: 'Você pode reabrir um {% data variables.projects.projects_v1_board %} fechado e reiniciar qualquer automação de fluxo de trabalho configurada para o {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/reopening-a-closed-project-board
  - /articles/reopening-a-closed-project-board
  - /github/managing-your-work-on-github/reopening-a-closed-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Reabra {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

Ao fechar um {% data variables.projects.projects_v1_board %}, qualquer automação de fluxo de trabalho que tenha sido configurada para o {% data variables.projects.projects_v1_board %} será pausada por padrão. For more information, see "[Closing a {% data variables.product.prodname_project_v1 %}](/articles/closing-a-project-board)."

Ao reabrir um {% data variables.projects.projects_v1_board %}, você tem a opção de *sincronizar* a automação, que atualiza a posição dos cartões no quadro de acordo com as configurações de automação definidas para o quadro.

1. Acesse o {% data variables.projects.projects_v1_board %} que você deseja reabrir.
{% data reusables.project-management.click-menu %}
3. Escolha se deseja sincronizar a automação para seu {% data variables.projects.projects_v1_board %} ou reabra seu {% data variables.projects.projects_v1_board %} sem sincronização.
    - Para reabrir seu {% data variables.projects.projects_v1_board %} e sincronizar automação, clique em **Reabrir e sincronizar o projeto**. ![Selecione o botão "Reopen and resync project" (Reabrir e sincronizar projeto)](/assets/images/help/projects/reopen-and-sync-project.png)
    - Para reabrir seu {% data variables.projects.projects_v1_board %} sem sincronizar a automação, usando o menu suspenso reabrir e clique em **Reabrir somente**. Em seguida, clique em **Reopen only** (Somente reabrir). ![Menu suspenso de reabertura de quadro de projeto fechado](/assets/images/help/projects/reopen-closed-project-board-drop-down-menu.png)

## Leia mais

- "[Configurando automação para {% data variables.product.prodname_projects_v1 %}](/articles/configuring-automation-for-project-boards)"

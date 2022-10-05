---
title: 'Reabrir um {% data variables.product.prodname_project_v1 %} fechado'
intro: 'Você pode reabrir um {% data variables.projects.projects_v1_board %} e reiniciar qualquer automação de fluxo de trabalho configurada para o {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/reopening-a-closed-project-board
  - /articles/reopening-a-closed-project-board
  - /github/managing-your-work-on-github/reopening-a-closed-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Reopen {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: d865d4b61000857c943276c45a9ec02163e9f59b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882196'
---
{% data reusables.projects.project_boards_old %}

Quando você fecha um {% data variables.projects.projects_v1_board %}, qualquer automação de fluxo de trabalho configurada para o {% data variables.projects.projects_v1_board %} será pausada por padrão. Para obter mais informações, confira "[Fechar um {% data variables.product.prodname_project_v1 %}](/articles/closing-a-project-board)".

Ao reabrir um {% data variables.projects.projects_v1_board %}, você tem a opção de *sincronizar* a automação, que atualiza a posição dos cartões no quadro de acordo com as configurações de automação configuradas para o quadro.

1. Navegue até os dados {% data variables.projects.projects_v1_board %} que você deseja reabrir.
{% data reusables.project-management.click-menu %}
3. Escolha se deseja sincronizar a automação do {% data variables.projects.projects_v1_board %} ou reabrir o {% data variables.projects.projects_v1_board %} sem sincronizar.
    - Para reabrir o {% data variables.projects.projects_v1_board %} e sincronizar a automação, clique em **Reabrir e sincronizar o projeto**.
  ![Seleção do botão "Reabrir e ressincronizar o projeto"](/assets/images/help/projects/reopen-and-sync-project.png)
    - Para reabrir o {% data variables.projects.projects_v1_board %} sem sincronizar a automação, usando o menu suspenso Reabrir, clique em **Somente reabrir**. Em seguida, clique em **Somente reabrir**.
  ![Menu suspenso Reabrir para quadro de projetos fechado](/assets/images/help/projects/reopen-closed-project-board-drop-down-menu.png)

## Leitura adicional

- "[Configurar a automação de {% data variables.product.prodname_projects_v1 %}](/articles/configuring-automation-for-project-boards)"

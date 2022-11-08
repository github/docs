---
title: 'Configurar a automação de {% data variables.product.prodname_projects_v1 %}'
intro: 'Você pode configurar fluxos de trabalho automáticos para mover problemas e solicitações de pull para uma coluna do {% data variables.projects.projects_v1_board %} quando ocorre um determinado evento.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/configuring-automation-for-project-boards
  - /articles/configuring-automation-for-project-boards
  - /github/managing-your-work-on-github/configuring-automation-for-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
  - Projects
  - Issues
  - Project management
shortTitle: Configure automation
type: how_to
allowTitleToDifferFromFilename: true
ms.openlocfilehash: faf559c3423178b43f3b524bbf3cdc41acd18a92
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108236'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.automate-project-board-permissions %} Para mais informações, confira "[Sobre automação de {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards)".

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.resync-automation %}

{% tip %}

**Dica**: para editar colunas que já têm automação configurada, clique em **Gerenciar** na parte inferior da coluna.

{% endtip %}

1. Navegue até o {% data variables.projects.projects_v1_board %} que você deseja automatizar.
2. Na coluna que deseja automatizar, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
![Ícone Editar](/assets/images/help/projects/edit-column-button.png)
3. Clique em **Gerenciar automação**.
![Botão para gerenciar automação](/assets/images/help/projects/manage-automation-button.png)
4. Usando o menu suspenso Preset (Predefinida), selecione uma automação predefinida.
![Seleção de automação predefinida no menu](/assets/images/help/projects/select-automation.png)
5. Selecione as automações do fluxo de trabalho que deseja configurar para a coluna.
![Lista de opções para automação da coluna](/assets/images/help/projects/select-automation-options-existing-column.png)
6. Clique em **Atualizar automação**.

## Leitura adicional
- "[Sobre automação de {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards)"

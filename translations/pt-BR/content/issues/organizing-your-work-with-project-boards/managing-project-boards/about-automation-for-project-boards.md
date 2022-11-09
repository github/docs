---
title: 'Sobre automação de {% data variables.product.prodname_projects_v1 %}'
intro: 'Você pode configurar fluxos de trabalho automáticos para manter o status dos cartões do {% data variables.projects.projects_v1_board %} em sincronia com os problemas e as solicitações de pull associados.'
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
ms.openlocfilehash: 28c4719cca14dff54d971b9a081837c172f4da76
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107828'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.automate-project-board-permissions %} Para obter mais informações, confira "[Permissões de {% data variables.product.prodname_projects_v1_caps %} para uma organização](/articles/project-board-permissions-for-an-organization)".

Você pode automatizar ações com base no acionamento de eventos para colunas do {% data variables.projects.projects_v1_board %}. Isso elimina algumas das tarefas manuais no gerenciamento de um {% data variables.projects.projects_v1_board %}. Por exemplo, é possível configurar uma coluna "Tarefas pendentes", em que qualquer problema ou solicitação de pull que você adiciona a um {% data variables.projects.projects_v1_board %} é automaticamente movida para a coluna configurada. Para obter mais informações, confira "[Configurar a automação de {% data variables.product.prodname_projects_v1 %}](/articles/configuring-automation-for-project-boards)".  

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

A automação de {% data variables.projects.projects_v1_board_caps %} também pode ajudar as equipes a desenvolver uma compreensão compartilhada do propósito e do processo de desenvolvimento da equipe do {% data variables.projects.projects_v1_board %} criando um fluxo de trabalho padrão para determinadas ações.

{% data reusables.project-management.resync-automation %}

## Opções de automação

| Coluna predefinida | Opções de configuração |
| --- | --- |
| Para fazer | <ul><li>Mover todos os problemas recentemente adicionados aqui</li><li>Mover todas as pull requests recentemente adicionadas aqui</li><li>Mover todos os problemas reabertos aqui</li><li>Mover todas as pull requests reabertas aqui</li></ul> |
| Em andamento | <ul><li>Mover todas as pull requests recentemente abertas aqui</li><li>Mover todos os problemas reabertos aqui</li><li>Mover todas as pull requests reabertas aqui</li><li>Mover todas as pull requests que atendem ao número mínimo de revisões necessárias do branch base aqui</li><li>Mover todas as pull requests que não atendem mais ao número mínimo de revisões necessárias do branch base aqui</li></ul> |
| Concluído | <ul><li>Mover todos os problemas fechados aqui</li><li>Mover todas as pull requests mescladas aqui</li><li>Mover todas as pull requests fechadas e não mescladas aqui</li></ul> |

## Acompanhamento do andamento do projeto

Você pode acompanhar o progresso em seu {% data variables.projects.projects_v1_board %}. Cartões nas colunas "Pendente", "Em progresso" ou "Concluído" contam para o progresso geral do projeto. {% data reusables.project-management.project-progress-locations %}

Para obter mais informações, confira "[Acompanhar o progresso em seu {% data variables.product.prodname_project_v1 %}](/github/managing-your-work-on-github/tracking-progress-on-your-project-board)".

## Leitura adicional
- "[Configurar a automação de {% data variables.product.prodname_projects_v1 %}](/articles/configuring-automation-for-project-boards)"{% ifversion fpt or ghec %}
- "[Copiar um {% data variables.product.prodname_project_v1 %}](/articles/copying-a-project-board)"{% endif %}

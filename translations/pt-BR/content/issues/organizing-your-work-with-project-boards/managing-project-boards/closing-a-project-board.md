---
title: 'Fechar um {% data variables.product.prodname_project_v1 %}'
intro: 'Se você tiver concluído todas as tarefas em um {% data variables.projects.projects_v1_board %} ou não precisar mais usar um {% data variables.projects.projects_v1_board %}, poderá fechar o {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/closing-a-project-board
  - /articles/closing-a-project
  - /articles/closing-a-project-board
  - /github/managing-your-work-on-github/closing-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 21dfb0c6837f97d567f19168cd7f343aac06a4c0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108237'
---
{% data reusables.projects.project_boards_old %}

Quando você fecha um {% data variables.projects.projects_v1_board %}, qualquer automação de fluxo de trabalho configurada será pausada por padrão.

Se você reabrir um {% data variables.projects.projects_v1_board %}, terá a opção de *sincronizar* a automação, que atualiza a posição dos cartões no quadro de acordo com as configurações de automação configuradas para o quadro. Para obter mais informações, confira "[Reabrir um {% data variables.product.prodname_project_v1 %} fechado](/articles/reopening-a-closed-project-board)" ou "[Sobre automação para {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards)".

1. Navegue até a lista de {% data variables.projects.projects_v1_boards %} no seu repositório ou na sua organização ou que pertençam à sua conta pessoal.
2. Na lista de projetos, ao lado do {% data variables.projects.projects_v1_board %} que você deseja fechar, clique em {% octicon "chevron-down" aria-label="The chevron icon" %}.
![Ícone de divisa à direita do nome do quadro de projetos](/assets/images/help/projects/project-list-action-chevron.png)
3. Clique em **fechar**
![Fechar item no menu suspenso do quadro de projetos](/assets/images/help/projects/close-project.png)

## Leitura adicional

- "[Sobre {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Excluir um {% data variables.product.prodname_project_v1 %}](/articles/deleting-a-project-board)"
- "[Desabilitar {% data variables.product.prodname_projects_v1 %} em um repositório](/articles/disabling-project-boards-in-a-repository)"
- "[Desabilitar {% data variables.product.prodname_projects_v1 %} em sua organização](/articles/disabling-project-boards-in-your-organization)"
- "[Permissões de {% data variables.product.prodname_project_v1_caps %} para uma organização](/articles/project-board-permissions-for-an-organization)"

---
title: 'Copiar um {% data variables.product.prodname_project_v1 %}'
intro: 'Você pode copiar um {% data variables.projects.projects_v1_board %} para criar rapidamente um projeto. Copiar dados {% data variables.projects.projects_v1_boards %} ajuda a padronizar seu fluxo de trabalho.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/copying-a-project-board
  - /articles/copying-a-project-board
  - /github/managing-your-work-on-github/copying-a-project-board
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pull requests
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 33f2822f338a2210c87ec9baad986231f11fe310
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107815'
---
{% data reusables.projects.project_boards_old %}

Copiar um {% data variables.projects.projects_v1_board %} permite a reutilização da configuração de título, descrição e automação do {% data variables.projects.projects_v1_board %}. Você pode copiar dados {% data variables.projects.projects_v1_boards %} para eliminar o processo manual de criação de dados {% data variables.projects.projects_v1_boards %} para fluxos de trabalho semelhantes.

É preciso ter acesso de leitura a um {% data variables.projects.projects_v1_board %} para copiá-lo em um repositório ou em uma organização em que você tenha acesso de gravação.

Quando você copia um {% data variables.projects.projects_v1_board %} para uma organização, por padrão, a visibilidade do {% data variables.projects.projects_v1_board %} é privada, mas com opção para alterá-la. Para obter mais informações, confira "[Alterar a visibilidade do {% data variables.product.prodname_project_v1 %}](/articles/changing-project-board-visibility/)".

A automação do {% data variables.projects.projects_v1_board %} também se encontra habilitada por padrão. Para obter mais informações, confira "[Sobre automação de {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards/)".

1. Navegue até o {% data variables.projects.projects_v1_board %} que você deseja copiar.
{% data reusables.project-management.click-menu %}
3. Clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e em **Copiar**.
![Opção Copiar no menu suspenso da barra lateral do quadro de projetos](/assets/images/help/projects/project-board-copy-setting.png)
4. Em "Owner" (Proprietário), use o menu suspenso e clique no repositório ou na organização em que deseja copiar o quadro de projeto.
![Seleção de proprietário do quadro de projetos copiado no menu suspenso](/assets/images/help/projects/copied-project-board-owner.png)
5. Como opção, em "Nome do quadro do projeto", digite o nome do {% data variables.projects.projects_v1_board %} copiado.
![Campo usado para digitar um nome para o quadro de projetos copiado](/assets/images/help/projects/copied-project-board-name.png)
6. Se desejar, em "Description" (Descrição), digite uma descrição do quadro de projeto copiado que outras pessoas verão.
![Campo usado para digitar uma descrição para o quadro de projetos copiado](/assets/images/help/projects/copied-project-board-description.png)
7. Se desejar, em "Automation settings" (Configurações de automação), selecione se deseja copiar os fluxos de trabalho automáticos configurados. Por padrão, essa opção é ativada. Para obter mais informações, confira "[Sobre a automação para quadros de projetos](/articles/about-automation-for-project-boards/)".
![Seleção das configurações de automação para o quadro de projetos copiado](/assets/images/help/projects/copied-project-board-automation-settings.png) {% data reusables.project-management.choose-visibility %}
9. Clique em **Copiar projeto**.
![Botão Confirmar Cópia](/assets/images/help/projects/confirm-copy-project-board.png)

---
title: 'Sobre {% data variables.product.prodname_projects_v1 %}'
intro: 'Os {% data variables.product.prodname_projects_v1_caps %} no {% data variables.product.product_name %} ajudam você a organizar e priorizar seu trabalho. É possível criar {% data variables.projects.projects_v1_boards %} para trabalho de recurso específico, roteiros abrangentes ou, até mesmo, listas de verificação de versão. Com os {% data variables.product.prodname_projects_v1 %}, você tem a flexibilidade de criar fluxos de trabalho personalizados que atendam às suas necessidades.'
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
ms.openlocfilehash: c14ee749a2e97bb9ef608e1b2d548098f18af0d0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107618'
---
{% data reusables.projects.project_boards_old %}

Os {% data variables.projects.projects_v1_boards_caps %} são compostos por problemas, solicitações de pull e observações que são categorizados como cartões nas colunas de sua escolha. É possível arrastar e soltar ou usar atalhos de teclado para reordenar cartões em uma coluna, mover cartões de coluna para coluna e alterar a ordem das colunas.

Os cartões de {% data variables.projects.projects_v1_board_caps %} contêm metadados relevantes para problemas e solicitações de pull, como etiquetas, destinatários, o status e quem os abriu. {% data reusables.project-management.edit-in-project %}

Você pode criar anotações nas colunas, como lembretes de tarefas, referências a problemas e solicitações de pull de qualquer repositório em {% data variables.location.product_location %} ou para adicionar informações relacionadas ao {% data variables.projects.projects_v1_board %}. É possível criar um cartão de referência para outro {% data variables.projects.projects_v1_board %} adicionando um link a uma observação. Se a observação não for suficiente para suas necessidades, você poderá convertê-la em um problema. Para obter mais informações sobre como converter observações em problemas, confira "[Adicionar observações a um {% data variables.product.prodname_project_v1 %}](/articles/adding-notes-to-a-project-board)".

Tipos de quadros de projeto:

- Um **{% data variables.projects.projects_v1_board %} pertencente a usuário** pode conter problemas e solicitações de pull de qualquer repositório pessoal.
- Um **{% data variables.projects.projects_v1_board %} em toda a organização** pode conter problemas e solicitações de pull de qualquer repositório que pertença a uma organização.  {% data reusables.project-management.link-repos-to-project-board %} Para obter mais informações, confira "[Vincular um repositório a um {% data variables.product.prodname_project_v1 %}](/articles/linking-a-repository-to-a-project-board)".
- Um **{% data variables.projects.projects_v1_board %} de repositório** tem como escopo problemas e solicitações de pull em um só repositório. Eles também podem incluir observações que fazem referência a problemas e pull requests em outros repositórios.

## Criar e exibir {% data variables.projects.projects_v1_boards %}

Para criar um {% data variables.projects.projects_v1_board %} para sua organização, você precisa ser um membro da organização. Proprietários de organizações e pessoas com permissões de administrador do {% data variables.projects.projects_v1_board %} podem personalizar o acesso ao {% data variables.projects.projects_v1_board %}.

{% ifversion classic-project-visibility-permissions %}{% data reusables.projects.owners-can-limit-visibility-permissions %}{% endif %}

Se um {% data variables.projects.projects_v1_board %} pertencente à organização incluir problemas ou solicitações de pull de um repositório que você não tem permissão para exibir, o cartão será redigido.  Para obter mais informações, confira "[Permissões {% data variables.product.prodname_project_v1_caps %} para uma organização](/articles/project-board-permissions-for-an-organization)".

A exibição da atividade mostra o histórico recente do {% data variables.projects.projects_v1_board %}, como cartões que alguém criou ou moveu entre colunas. Para acessar a exibição de atividade, clique em **Menu** e role a página para baixo.

Para localizar cartões específicos em um {% data variables.projects.projects_v1_board %} ou exibir um subconjunto dos cartões, você pode filtrar cartões do {% data variables.projects.projects_v1_board %}. Para obter mais informações, confira "[Filtrar cartões em um {% data variables.product.prodname_project_v1 %}](/articles/filtering-cards-on-a-project-board)".

Para simplificar o fluxo de trabalho e manter as tarefas concluídas fora do seu {% data variables.projects.projects_v1_board %}, você pode arquivar cartões. Para obter mais informações, confira "[Arquivar cartões em um {% data variables.product.prodname_project_v1 %}](/articles/archiving-cards-on-a-project-board)".

Se você tiver concluído todas as suas tarefas do {% data variables.projects.projects_v1_board %} ou não precisar mais usar o {% data variables.projects.projects_v1_board %}, será possível fechar o {% data variables.projects.projects_v1_board %}. Para obter mais informações, confira "[Fechar um {% data variables.product.prodname_project_v1 %}](/articles/closing-a-project-board)".

Se preferir acompanhar seu trabalho de uma forma diferente, você também poderá [desabilitar os {% data variables.projects.projects_v1_boards %} em um repositório](/articles/disabling-project-boards-in-a-repository) ou [desabilitar os {% data variables.projects.projects_v1_boards %} em sua organização](/articles/disabling-project-boards-in-your-organization).

{% data reusables.project-management.project-board-import-with-api %}

## Modelos de {% data variables.projects.projects_v1_boards %}

Você pode usar modelos para configurar rapidamente um novo {% data variables.projects.projects_v1_board %}. Quando você usa um modelo para criar um {% data variables.projects.projects_v1_board %}, seu novo quadro incluirá colunas, bem como cartões com dicas de uso dos {% data variables.product.prodname_projects_v1 %}. Você também pode escolher um modelo com automação já configurada.

| Modelo | Descrição |
| --- | --- |
| Kanban básico | Rastreie tarefas com colunas To do (Pendentes), In progress (Em andamento) e Done (Concluídas) |
| Kanban automatizado | Cartões são movidos automaticamente entre as colunas To do (Pendentes), In progress (Em andamento) e Done (Concluídas) | 
| Kanban automatizado com revisão | Cartões são movidos automaticamente entre as colunas To do (Pendentes), In progress (Em andamento) e Done (Concluídos), com gatilhos adicionais para status de revisão de pull request |
| Triagem de erros | Faça a triagem e priorize erros com as colunas To do (Pendentes), High priority (Prioridade alta), Low priority (Prioridade baixa) e Closed (Fechados) |

Para obter mais informações sobre automação de {% data variables.product.prodname_projects_v1 %}, confira "[Sobre automação de {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards)".

![{% data variables.product.prodname_project_v1 %} com modelo Kanban básico](/assets/images/help/projects/project-board-basic-kanban-template.png)

{% data reusables.project-management.copy-project-boards %}

## Leitura adicional

- "[Criar um {% data variables.product.prodname_project_v1 %}](/articles/creating-a-project-board)"
- "[Editar um {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board)"{% ifversion fpt or ghec %}
- "[Copiar um {% data variables.product.prodname_project_v1 %}](/articles/copying-a-project-board)"{% endif %}
- "[Adicionar problemas e solicitações de pull a um {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)"
- "[Permissões de {% data variables.product.prodname_project_v1_caps %} para uma organização](/articles/project-board-permissions-for-an-organization)"
- "[Atalhos de teclado](/articles/keyboard-shortcuts/#project-boards)"

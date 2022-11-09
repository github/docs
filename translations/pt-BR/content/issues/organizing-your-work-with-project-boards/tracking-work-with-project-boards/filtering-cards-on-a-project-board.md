---
title: 'Filtrar cartões em um {% data variables.product.prodname_project_v1 %}'
intro: 'É possível filtrar os cartão em um {% data variables.projects.projects_v1_board %} para pesquisar cartões específicos ou exibir um subconjunto de cartões.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/filtering-cards-on-a-project-board
  - /articles/filtering-cards-on-a-project-board
  - /github/managing-your-work-on-github/filtering-cards-on-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Filter cards on {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: f203785a6fc18dc5f67b2ae62934aa10c2f6e8b8
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107987'
---
{% data reusables.projects.project_boards_old %}

Em um cartão, você pode clicar em qualquer destinatário, marco ou etiqueta para filtrar o {% data variables.projects.projects_v1_board %} por esse qualificador. Para limpar a pesquisa, você pode clicar no mesmo responsável, marco ou etiqueta novamente.

Também é possível usar a barra de pesquisa "Filtrar cartões" que está na parte superior de cada {% data variables.projects.projects_v1_board %} para pesquisar cartões. Você pode filtrar cartões usando os seguintes qualificadores de pesquisa em qualquer combinação ou simplesmente digitando algum texto que você gostaria de pesquisar.

- Filtrar cartões por autor usando `author:USERNAME`
- Filtrar cartões por destinatário usando `assignee:USERNAME` ou `no:assignee`
- Filtrar cartões por rótulo usando `label:LABEL`, `label:"MULTI-WORD LABEL NAME"` ou `no:label`
- Filtrar por marco usando `milestone:MY-MILESTONE`
- Filtrar cartões por estado usando `state:open`, `state:closed` ou `state:merged`
- Filtrar por status de revisão usando `review:none`, `review:required`, `review:approved` ou`review:changes_requested`
- Filtrar por status de verificação usando `status:pending`, `status:success` ou `status:failure`
- Filtrar cartões por tipo usando `type:issue`, `type:pr` ou `type:note`
- Filtrar cartões por estado e tipo usando `is:open`, `is:closed` ou `is:merged`; e `is:issue`, `is:pr` ou `is:note`
- Filtrar cartões por problemas vinculados a uma solicitação de pull por uma referência de fechamento usando `linked:pr`
- Filtrar cartões por repositório em um {% data variables.projects.projects_v1_board %} em toda a organização usando `repo:ORGANIZATION/REPOSITORY`

1. Navegue até o {% data variables.projects.projects_v1_board %} que contém os cartões que você deseja filtrar.
2. Acima da coluna cartão de projeto, clique na barra de pesquisa "Filter cards" (Filtrar cartões) e digite uma consulta para filtrar os cartões.
![Barra de pesquisa Filtrar cartões](/assets/images/help/projects/filter-card-search-bar.png)

{% tip %}

**Dica:** você pode arrastar e soltar os cartões filtrados ou usar atalhos de teclado para movê-los entre colunas. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

{% endtip %}

## Leitura adicional

- "[Sobre {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Adicionar problemas e solicitações de pull a um {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)"
- "[Adicionar observações a um {% data variables.product.prodname_project_v1 %}](/articles/adding-notes-to-a-project-board)"

---
title: 'Arquivar cartões de arquivamento em um {% data variables.product.prodname_project_v1 %}'
intro: 'Você pode arquivar cartões do {% data variables.projects.projects_v1_board %} para organizar seu fluxo de trabalho sem perder o contexto histórico de um projeto.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/archiving-cards-on-a-project-board
  - /articles/archiving-cards-on-a-project-board
  - /github/managing-your-work-on-github/archiving-cards-on-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Archive cards on {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: bef90f56a55d6d087c21603586def91ec2f1c9ed
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108233'
---
{% data reusables.projects.project_boards_old %}

A automação no seu {% data variables.projects.projects_v1_board %} não se aplica a cartões arquivados do {% data variables.projects.projects_v1_board %}. Por exemplo, se você fechar um problema nos arquivos do {% data variables.projects.projects_v1_board %}, o cartão arquivado não será movido automaticamente para a coluna "Concluído". Quando você restaura um cartão dos arquivos do {% data variables.projects.projects_v1_board %}, o cartão retorna à coluna em que ele estava arquivado.

## Arquivar cartões em um {% data variables.projects.projects_v1_board %}

1. Em um {% data variables.projects.projects_v1_board %}, encontre o cartão que você deseja arquivar e clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
![Lista de opções para edição de um cartão do quadro de projetos](/assets/images/help/projects/select-archiving-options-project-board-card.png)
2. Clique em **Arquivar**.
![Seleção da opção Arquivar no menu](/assets/images/help/projects/archive-project-board-card.png)

## Restaurar cartões em um {% data variables.projects.projects_v1_board %} da barra lateral

{% data reusables.project-management.click-menu %}
2. Clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e em **Exibir arquivos**.
  ![Seleção da opção Exibir arquivos no menu](/assets/images/help/projects/select-view-archive-option-project-board-card.png)
3. Acima do cartão do {% data variables.projects.projects_v1_board %} que você deseja desarquivar, clique em **Restaurar**.
  ![Seleção da opção Restaurar cartão do quadro de projetos](/assets/images/help/projects/restore-card.png)

---
title: 'Arquivar itens do seu {% data variables.projects.project_v2 %}'
shortTitle: Archiving items
intro: 'Você pode arquivar itens, mantê-los disponíveis para restauração ou excluí-los permanentemente.'
miniTocMaxHeadingLevel: 2
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 2348805c920e456e2b8388c2ac41d4badd757703
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107714'
---
## Arquivar itens

Você pode arquivar um item para manter o contexto sobre o item no projeto, mas removê-lo das visualizações do projeto. {% ifversion projects-v2-auto-archive %}Você também pode configurar os fluxos de trabalho internos do projeto para arquivar automaticamente itens que atendam a determinados critérios. Para obter mais informações, confira "[Como arquivar itens automaticamente](/issues/planning-and-tracking-with-projects/automating-your-project/archiving-items-automatically)".{% endif %}

{% data reusables.projects.select-an-item %} {% data reusables.projects.open-item-menu %}
1. Clique em **Arquivar**.
   ![Captura de tela mostrando a opção Arquivar](/assets/images/help/projects-v2/archive-menu-item.png)
1. Quando solicitado, confirme sua escolha clicando em **Arquivar**.
   ![Captura de tela mostrando o prompt Arquivar](/assets/images/help/projects-v2/archive-item-prompt.png)

## Restaurando itens arquivados

1. Procure seu projeto.
1. No canto superior direito, clique em {% octicon "kebab-horizontal" aria-label="The menu icon" %} para abrir o menu.
  ![Captura de tela mostrando o ícone de menu](/assets/images/help/projects-v2/open-menu.png)
1. No menu, clique em {% octicon "archive" aria-label="The archive icon" %} **Itens arquivados**.
  ![Captura de tela mostrando o item de menu 'Itens arquivados'](/assets/images/help/projects-v2/archived-items-menu-item.png)
1. Opcionalmente, para filtrar os itens arquivados exibidos, digite o filtro na caixa de texto acima da lista de itens. Para obter mais informações sobre os filtros disponíveis, confira "[Filtrar projetos](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)".
   ![Captura de tela mostrando o campo para filtrar itens arquivados](/assets/images/help/issues/filter-archived-items.png)   
1. À esquerda de cada título de item, selecione os itens que você deseja restaurar.
   ![Captura de tela mostrando caixas de seleção ao lado de itens arquivados](/assets/images/help/issues/select-archived-item.png)   
1. Para restaurar os itens selecionados, acima da lista de itens, clique em **Restaurar**. 
   ![Captura de tela mostrando o botão "Restaurar"](/assets/images/help/issues/restore-archived-item-button.png)

## Excluindo itens

Você pode excluir um item para removê-lo do projeto completamente.

{% data reusables.projects.select-an-item %} {% data reusables.projects.open-item-menu %}
1. Clique em **Excluir do projeto**.
   ![Captura de tela mostrando a opção Excluir](/assets/images/help/projects-v2/delete-menu-item.png)
1. Quando solicitado, confirme sua escolha clicando em **Excluir**.
   ![Captura de tela mostrando o prompt Excluir](/assets/images/help/projects-v2/delete-item-prompt.png)

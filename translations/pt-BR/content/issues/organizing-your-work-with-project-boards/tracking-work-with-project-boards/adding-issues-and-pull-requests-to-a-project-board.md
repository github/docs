---
title: 'Adicionar problemas e solicitações de pull a um {% data variables.product.prodname_project_v1 %}'
intro: 'Você pode adicionar problemas e solicitações de pull a um {% data variables.projects.projects_v1_board %} na forma de cartões e fazer a triagem deles em colunas.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/adding-issues-and-pull-requests-to-a-project-board
  - /articles/adding-issues-and-pull-requests-to-a-project
  - /articles/adding-issues-and-pull-requests-to-a-project-board
  - /github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Add issues & PRs to {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 3adfb2c337a417b8e4f932ab9ae9860939217c6c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108234'
---
{% data reusables.projects.project_boards_old %}

É possível adicionar cartões de problemas ou de solicitações de pull ao seu {% data variables.projects.projects_v1_board %} ao:
- Arrastando os cartões da seção **Triagem** na barra lateral.
- Digitar a URL do problema ou da pull request em um cartão.
- Pesquisar problemas ou solicitações de pull na barra lateral de pesquisa do {% data variables.projects.projects_v1_board %}.

É possível colocar 2.500 cartões, no máximo, em cada coluna do projeto. Se uma coluna atingir o número máximo de cartões, nenhum cartão poderá ser movido para essa coluna.

![Cursor move cartão de problema da barra lateral de triagem para a coluna do quadro de projeto](/assets/images/help/projects/add-card-from-sidebar.gif)

{% note %}

**Observação:** você também pode adicionar anotações ao quadro de projetos para servir como lembretes de tarefa, referências a problemas e solicitações de pull de qualquer repositório do {% data variables.product.product_name %} ou para adicionar informações relacionadas ao {% data variables.projects.projects_v1_board %}. Para obter mais informações, confira "[Como adicionar anotações a um quadro de projetos](/articles/adding-notes-to-a-project-board)".

{% endnote %}

{% data reusables.project-management.edit-in-project %}

{% data reusables.project-management.link-repos-to-project-board %} Quando você pesquisa problemas ou solicitações de pull para adicionar ao {% data variables.projects.projects_v1_board %}, a pesquisa automaticamente é colocada no escopo dos seus repositórios vinculados. É possível remover esses qualificadores para pesquisar em todos os repositórios da organização. Para obter mais informações, confira "[Como vincular um repositório a um quadro de projeto](/articles/linking-a-repository-to-a-project-board)".

## Adicionar problemas e solicitações de pull a um {% data variables.projects.projects_v1_board %}

1. Navegue até o {% data variables.projects.projects_v1_board %} em que você deseja adicionar problemas e solicitações de pull.
2. Em seu {% data variables.projects.projects_v1_board %}, clique em {% octicon "plus" aria-label="The plus icon" %} **Adicionar cartões**.
![Botão Adicionar cartões](/assets/images/help/projects/add-cards-button.png)
3. Pesquise problemas e solicitações de pull para adicionar ao seu {% data variables.projects.projects_v1_board %} usando qualificadores de pesquisa. Para obter mais informações sobre os qualificadores de pesquisa que podem ser usados, confira "[Pesquisa de problemas](/articles/searching-issues)".
  ![Pesquisar problemas e solicitações de pull](/assets/images/help/issues/issues_search_bar.png)

  {% tip %}

  **Dicas:**
    - Também é possível adicionar um problema ou uma pull request digitando a URL em um cartão.
    - Se estiver trabalhando em um recurso específico, você poderá aplicar uma etiqueta a cada solicitação de pull ou problema relacionado a esse recurso e, assim, adicionar facilmente cartões ao {% data variables.projects.projects_v1_board %} pesquisando o nome da etiqueta. Para obter mais informações, confira "[Aplicar rótulos a problemas e solicitações de pull](/articles/applying-labels-to-issues-and-pull-requests)".

  {% endtip %}
4. Na lista filtrada de problemas e de solicitações de pull, arraste o cartão que deseja adicionar ao {% data variables.projects.projects_v1_board %} e solte-o na coluna correta. Como alternativa, você pode mover cartões usando os atalhos de teclado. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% tip %}

    **Dica:** você pode arrastar e soltar ou usar atalhos de teclado para reordenar os cartões e movê-los entre colunas. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% endtip %}

## Adicionar problemas e solicitações de pull a um {% data variables.projects.projects_v1_board %} da barra lateral

1. No lado direito de um problema ou de uma solicitação de pull, clique em **Projetos {% octicon "gear" aria-label="The Gear icon" %}** .
  ![Botão Quadro de projetos na barra lateral](/assets/images/help/projects/sidebar-project.png)
2. Clique na guia **Recente**, **Repositório**, **Usuário** ou **Organização** do {% data variables.projects.projects_v1_board %} ao qual você deseja adicionar.
  ![Guias Recente, Repositório e Organização](/assets/images/help/projects/sidebar-project-tabs.png)
3. Digite o nome do projeto no campo **Filtrar projetos**.
  ![Caixa de pesquisa Quadro de projetos](/assets/images/help/projects/sidebar-search-project.png)
4. Selecione um ou mais {% data variables.projects.projects_v1_boards %} em que você deseja adicionar o problema ou a solicitação de pull.
  ![Quadro de projetos selecionado](/assets/images/help/projects/sidebar-select-project.png)
5. Clique em {% octicon "triangle-down" aria-label="The down triangle icon" %} e clique na coluna em que deseja inserir o problema ou a solicitação de pull. O cartão será movido para a parte inferior da coluna do {% data variables.projects.projects_v1_board %} selecionada.
  ![Menu Mover cartão para coluna](/assets/images/help/projects/sidebar-select-project-board-column-menu.png)

## Leitura adicional

- "[Sobre {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Editar um {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board)"
- "[Filtrar cartões em um {% data variables.product.prodname_project_v1 %}](/articles/filtering-cards-on-a-project-board)"

---
title: 'Adicionar problemas e pull requests a um {% data variables.product.prodname_project_v1 %}'
intro: 'Você pode adicionar problemas e pull requests a um {% data variables.projects.projects_v1_board %} na forma de cartões e colocá-los em colunas.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/adding-issues-and-pull-requests-to-a-project-board
  - /articles/adding-issues-and-pull-requests-to-a-project
  - /articles/adding-issues-and-pull-requests-to-a-project-board
  - /github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Adicionar problemas& PRs a {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

Você pode adicionar problemas ou cartões de pull request ao seu {% data variables.projects.projects_v1_board %}:
- Arrastar os cartões da seção **Triage** (Triagem) na barra lateral.
- Digitar a URL do problema ou da pull request em um cartão.
- Pesquisando problemas ou pull requests na barra lateral de pesquisa de {% data variables.projects.projects_v1_board %}.

É possível colocar 2.500 cartões, no máximo, em cada coluna do projeto. Se uma coluna atingir o número máximo de cartões, nenhum cartão poderá ser movido para essa coluna.

![Cursor move cartão de problema da barra lateral de triagem para a coluna do quadro de projeto](/assets/images/help/projects/add-card-from-sidebar.gif)

{% note %}

**Observação:** Você também pode adicionar observações ao seu quadro de projetos para servir como lembretes de tarefas, referências a problemas e pull requests de qualquer repositório em {% data variables.product.product_name %}ou adicionar informações relacionadas ao seu {% data variables.projects.projects_v1_board %}. Para obter mais informações, consulte "[Adicionar observações a um quadro de projeto](/articles/adding-notes-to-a-project-board)".

{% endnote %}

{% data reusables.project-management.edit-in-project %}

{% data reusables.project-management.link-repos-to-project-board %} Ao pesquisar problemas e pull requests para adicionar ao seu {% data variables.projects.projects_v1_board %}, a pesquisa define automaticamente o escopo para os seus repositórios vinculados. É possível remover esses qualificadores para pesquisar em todos os repositórios da organização. Para obter mais informações, consulte "[Vincular um repositório a um quadro de projeto](/articles/linking-a-repository-to-a-project-board)".

## Adicionar problemas e pull requests a um {% data variables.projects.projects_v1_board %}

1. Acesse o {% data variables.projects.projects_v1_board %} onde você deseja adicionar problemas e pull requests.
2. No seu {% data variables.projects.projects_v1_board %}, clique em {% octicon "plus" aria-label="The plus icon" %} **Adicionar cartões**. ![Botão Add cards (Adicionar cartões)](/assets/images/help/projects/add-cards-button.png)
3. Pesquisar por problemas e pull requests para adicionar ao seu {% data variables.projects.projects_v1_board %} usando os qualificadores de pesquisa. Para obter mais informações sobre qualificadores de pesquisa que você pode usar, consulte [Pesquisar problemas](/articles/searching-issues)". ![Pesquisar problemas e pull requests](/assets/images/help/issues/issues_search_bar.png)

  {% tip %}

  **Dicas:**
    - Também é possível adicionar um problema ou uma pull request digitando a URL em um cartão.
    - Se você está trabalhando em um recurso específico, você poderá aplicar uma etiqueta a cada problema ou pull request relacionado a esse recurso e, em seguida, adicionar facilmente cartões ao seu {% data variables.projects.projects_v1_board %} pesquisando o nome da etiqueta. Para obter mais informações, consulte "[Aplicar etiquetas a problemas e pull requests](/articles/applying-labels-to-issues-and-pull-requests)".

  {% endtip %}
4. Da lista filtrada de issues e pull requests, arraste o cartão que você gostaria de adicionar ao seu {% data variables.projects.projects_v1_board %} e solte-ao na coluna correta. Como alternativa, você pode mover cartões usando os atalhos de teclado. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% tip %}

    **Dica:** é possível arrastar e soltar ou usar atalhos de teclado para reordenar cartões e movê-los entre colunas. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% endtip %}

## Adicionando problemas e pull requests a um {% data variables.projects.projects_v1_board %} a partir da barra lateral

1. No lado direito de um problema ou uma pull request, clique em **Projects (Projetos) {% octicon "gear" aria-label="The Gear icon" %}**. ![Botão Project board (Quadro de projeto) na barra lateral](/assets/images/help/projects/sidebar-project.png)
2. Clique na aba **Recente**, **Repositório**,**Usuário** ou **Organização** do {% data variables.projects.projects_v1_board %} que você gostaria de adicionar. ![Guias Recent (Recente), Repository (Repositório) e Organization (Organização)](/assets/images/help/projects/sidebar-project-tabs.png)
3. Digite o nome do projeto no campo **Filter projects** (Filtrar projetos). ![Caixa de pesquisa Project board (Quadro de projeto)](/assets/images/help/projects/sidebar-search-project.png)
4. Selecione um ou mais {% data variables.projects.projects_v1_boards %} onde você deseja adicionar o problema ou pull request. ![Quadro de projeto selecionado](/assets/images/help/projects/sidebar-select-project.png)
5. Clique em {% octicon "triangle-down" aria-label="The down triangle icon" %} e depois na coluna onde você quer seu problema ou pull request. O cartão irá para a parte inferior da coluna de {% data variables.projects.projects_v1_board %} que você selecionou. ![Menu Move card to column (Mover cartão para coluna)](/assets/images/help/projects/sidebar-select-project-board-column-menu.png)

## Leia mais

- "[Sobre o {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Editando um {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board)"
- "[Filtrando cartões em um {% data variables.product.prodname_project_v1 %}](/articles/filtering-cards-on-a-project-board)"

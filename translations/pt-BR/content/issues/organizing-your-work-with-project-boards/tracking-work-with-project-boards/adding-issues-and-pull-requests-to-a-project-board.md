---
title: 'Adding issues and pull requests to a {% data variables.product.prodname_project_v1 %}'
intro: 'You can add issues and pull requests to a {% data variables.projects.projects_v1_board %} in the form of cards and triage them into columns.'
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
---

{% data reusables.projects.project_boards_old %}

You can add issue or pull request cards to your {% data variables.projects.projects_v1_board %} by:
- Arrastar os cartões da seção **Triage** (Triagem) na barra lateral.
- Digitar a URL do problema ou da pull request em um cartão.
- Searching for issues or pull requests in the {% data variables.projects.projects_v1_board %} search sidebar.

É possível colocar 2.500 cartões, no máximo, em cada coluna do projeto. Se uma coluna atingir o número máximo de cartões, nenhum cartão poderá ser movido para essa coluna.

![Cursor move cartão de problema da barra lateral de triagem para a coluna do quadro de projeto](/assets/images/help/projects/add-card-from-sidebar.gif)

{% note %}

**Note:** You can also add notes to your project board to serve as task reminders, references to issues and pull requests from any repository on {% data variables.product.product_name %}, or to add related information to your {% data variables.projects.projects_v1_board %}. Para obter mais informações, consulte "[Adicionar observações a um quadro de projeto](/articles/adding-notes-to-a-project-board)".

{% endnote %}

{% data reusables.project-management.edit-in-project %}

{% data reusables.project-management.link-repos-to-project-board %} When you search for issues and pull requests to add to your {% data variables.projects.projects_v1_board %}, the search automatically scopes to your linked repositories. É possível remover esses qualificadores para pesquisar em todos os repositórios da organização. Para obter mais informações, consulte "[Vincular um repositório a um quadro de projeto](/articles/linking-a-repository-to-a-project-board)".

## Adding issues and pull requests to a {% data variables.projects.projects_v1_board %}

1. Navigate to the {% data variables.projects.projects_v1_board %} where you want to add issues and pull requests.
2. In your {% data variables.projects.projects_v1_board %}, click {% octicon "plus" aria-label="The plus icon" %} **Add cards**. ![Botão Add cards (Adicionar cartões)](/assets/images/help/projects/add-cards-button.png)
3. Search for issues and pull requests to add to your {% data variables.projects.projects_v1_board %} using search qualifiers. Para obter mais informações sobre qualificadores de pesquisa que você pode usar, consulte [Pesquisar problemas](/articles/searching-issues)". ![Pesquisar problemas e pull requests](/assets/images/help/issues/issues_search_bar.png)

  {% tip %}

  **Dicas:**
    - Também é possível adicionar um problema ou uma pull request digitando a URL em um cartão.
    - If you're working on a specific feature, you can apply a label to each related issue or pull request for that feature, and then easily add cards to your {% data variables.projects.projects_v1_board %} by searching for the label name. Para obter mais informações, consulte "[Aplicar etiquetas a problemas e pull requests](/articles/applying-labels-to-issues-and-pull-requests)".

  {% endtip %}
4. From the filtered list of issues and pull requests, drag the card you'd like to add to your {% data variables.projects.projects_v1_board %} and drop it in the correct column. Como alternativa, você pode mover cartões usando os atalhos de teclado. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% tip %}

    **Dica:** é possível arrastar e soltar ou usar atalhos de teclado para reordenar cartões e movê-los entre colunas. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% endtip %}

## Adding issues and pull requests to a {% data variables.projects.projects_v1_board %} from the sidebar

1. No lado direito de um problema ou uma pull request, clique em **Projects (Projetos) {% octicon "gear" aria-label="The Gear icon" %}**. ![Botão Project board (Quadro de projeto) na barra lateral](/assets/images/help/projects/sidebar-project.png)
2. Click the **Recent**, **Repository**,**User**, or **Organization** tab for the {% data variables.projects.projects_v1_board %} you would like to add to. ![Guias Recent (Recente), Repository (Repositório) e Organization (Organização)](/assets/images/help/projects/sidebar-project-tabs.png)
3. Digite o nome do projeto no campo **Filter projects** (Filtrar projetos). ![Caixa de pesquisa Project board (Quadro de projeto)](/assets/images/help/projects/sidebar-search-project.png)
4. Select one or more {% data variables.projects.projects_v1_boards %} where you want to add the issue or pull request. ![Quadro de projeto selecionado](/assets/images/help/projects/sidebar-select-project.png)
5. Clique em {% octicon "triangle-down" aria-label="The down triangle icon" %} e depois na coluna onde você quer seu problema ou pull request. The card will move to the bottom of the {% data variables.projects.projects_v1_board %} column you select. ![Menu Move card to column (Mover cartão para coluna)](/assets/images/help/projects/sidebar-select-project-board-column-menu.png)

## Leia mais

- "[Sobre o {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Editing a {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board)"
- "[Filtering cards on a {% data variables.product.prodname_project_v1 %}](/articles/filtering-cards-on-a-project-board)"

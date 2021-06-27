---
title: Adicionar problemas e pull requests a um quadro de projeto
intro: Você pode adicionar problemas e pull requests a um quadro de projeto na forma de cartões e fazer a triagem deles em colunas.
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/adding-issues-and-pull-requests-to-a-project-board
  - /articles/adding-issues-and-pull-requests-to-a-project/
  - /articles/adding-issues-and-pull-requests-to-a-project-board
  - /github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Você pode adicionar cartões de problema ou pull request ao seu quadro de projeto ao:
- Arrastar os cartões da seção **Triage** (Triagem) na barra lateral.
- Digitar a URL do problema ou da pull request em um cartão.
- Pesquisar problemas ou pull requests na barra lateral de pesquisa do quadro de projeto.

É possível colocar 2.500 cartões, no máximo, em cada coluna do projeto. Se uma coluna atingir o número máximo de cartões, nenhum cartão poderá ser movido para essa coluna.

![Cursor move cartão de problema da barra lateral de triagem para a coluna do quadro de projeto](/assets/images/help/projects/add-card-from-sidebar.gif)

{% note %}

**Observação:** também é possível adicionar observações ao seu quadro de projeto para que sirvam de lembretes de tarefas, referências a problemas e pull requests de qualquer repositório no {% data variables.product.product_name %} ou para adicionar informações relacionadas ao seu quadro de projeto. Para obter mais informações, consulte "[Adicionar observações a um quadro de projeto](/articles/adding-notes-to-a-project-board)".

{% endnote %}

{% data reusables.project-management.edit-in-project %}

{% data reusables.project-management.link-repos-to-project-board %} Quando você pesquisa problemas ou pull requests para adicionar ao quadro de projeto, a pesquisa automaticamente é colocada no escopo de seus repositórios vinculados. É possível remover esses qualificadores para pesquisar em todos os repositórios da organização. Para obter mais informações, consulte "[Vincular um repositório a um quadro de projeto](/articles/linking-a-repository-to-a-project-board)".

### Adicionar problemas e pull requests a um quadro de projeto

1. Navegue até o quadro de projeto onde deseja adicionar problemas e pull requests.
2. No quadro de projeto, clique em {% octicon "plus" aria-label="The plus icon" %} **Add cards** (Adicionar cartões). ![Botão Add cards (Adicionar cartões)](/assets/images/help/projects/add-cards-button.png)
3. Pesquise problemas e pull requests para adicionar ao quadro de projeto usando qualificadores de pesquisa. Para obter mais informações sobre qualificadores de pesquisa que você pode usar, consulte [Pesquisar problemas](/articles/searching-issues)". ![Pesquisar problemas e pull requests](/assets/images/help/issues/issues_search_bar.png)

  {% tip %}

  **Dicas:**
    - Também é possível adicionar um problema ou uma pull request digitando a URL em um cartão.
    - Se estiver trabalhando em um recurso específico, você poderá aplicar uma etiqueta a cada pull request ou problema relacionado a esse recurso e, assim, adicionar facilmente cartões ao quadro de projeto pesquisando o nome da etiqueta. Para obter mais informações, consulte "[Aplicar etiquetas a problemas e pull requests](/articles/applying-labels-to-issues-and-pull-requests)".

  {% endtip %}
4. Na lista filtrada de problemas e pull requests, arraste o cartão que deseja adicionar ao quadro de projeto e solte-o na coluna correta. Como alternativa, você pode mover cartões usando os atalhos de teclado. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% tip %}

    **Dica:** é possível arrastar e soltar ou usar atalhos de teclado para reordenar cartões e movê-los entre colunas. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% endtip %}

### Adicionar problemas e pull request a um quadro de projeto da barra lateral

1. No lado direito de um problema ou uma pull request, clique em **Projects (Projetos) {% octicon "gear" aria-label="The Gear icon" %}**. ![Botão Project board (Quadro de projeto) na barra lateral](/assets/images/help/projects/sidebar-project.png)
2. Clique na aba **Recent** (Recente), **Repository** (Repositório), **User** (Usuário) ou **Organization** (Organização) do quadro de projeto ao qual deseja adicionar. ![Guias Recent (Recente), Repository (Repositório) e Organization (Organização)](/assets/images/help/projects/sidebar-project-tabs.png)
3. Digite o nome do projeto no campo **Filter projects** (Filtrar projetos). ![Caixa de pesquisa Project board (Quadro de projeto)](/assets/images/help/projects/sidebar-search-project.png)
4. Selecione um ou mais quadros de projeto ao qual você deseja adicionar o problema ou pull request. ![Quadro de projeto selecionado](/assets/images/help/projects/sidebar-select-project.png)
5. Clique em {% octicon "triangle-down" aria-label="The down triangle icon" %} e depois na coluna onde você quer seu problema ou pull request. O cartão irá para a parte inferior da coluna do quadro de projeto que você selecionou. ![Menu Move card to column (Mover cartão para coluna)](/assets/images/help/projects/sidebar-select-project-board-column-menu.png)

### Leia mais

- "[Sobre quadros de projetos](/articles/about-project-boards)"
- "[Editar um quadro de projeto](/articles/editing-a-project-board)"
- "[Filtrar cartões em um quadro de projeto](/articles/filtering-cards-on-a-project-board)"

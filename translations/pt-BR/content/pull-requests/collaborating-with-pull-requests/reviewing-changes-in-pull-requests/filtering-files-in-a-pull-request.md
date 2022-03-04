---
title: Filtrar arquivos em uma pull request
intro: 'To help you quickly review changes in a large pull request, you can filter changed files{% if pr-tree-view %} or use the file tree to navigate between files{% endif %}.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request
  - /articles/filtering-files-in-a-pull-request-by-file-type
  - /articles/filtering-files-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/filtering-files-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Filtrar arquivos
---

You can filter files in a pull request by file extension type, such as `.html` or `.js`, lack of an extension, code ownership, or dotfiles.{% if pr-tree-view %} You can also use the file tree to filter by file path, navigate between files, or see a high level view of the changed files.{% endif %}

## Using the file filter dropdown

{% tip %}

**Dica:** para simplificar a visualização do diff do pull request, também é possível ocultar temporariamente os arquivos excluídos ou aqueles que você já visualizou no diff do pull request a partir menu suspenso Filtro de arquivo.

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. Na lista de pull requests, clique na pull request que você gostaria de filtrar.
{% data reusables.repositories.changed-files %}
4. Use o menu suspenso File filter (Filtro de arquivo) e selecione, desmarque ou clique nos filtros desejados. ![Opção File filter (Filtro de arquivo) acima do diff da pull request](/assets/images/help/pull_requests/file-filter-option.png)
5. Como opção, para limpar a seleção de filtro, abaixo da aba **Files changed** (Arquivos alterados) clique em **Clear** (Limpar). ![Limpar a seleção File filter (Filtro de arquivo)](/assets/images/help/pull_requests/clear-file-filter.png)

{% if pr-tree-view %}
## Using the file tree

{% data reusables.repositories.sidebar-pr %}
1. Na lista de pull requests, clique na pull request que você gostaria de filtrar.
{% data reusables.repositories.changed-files %}
1. If the file tree is hidden, click **Show file tree** to display the file tree.

   {% note %}

   **Note**: The file tree will not display if your screen width is too narrow or if the pull request only includes one file.

   {% endnote %}

1. Click on a file in the file tree to view the corresponding file diff. ![Pull request file tree](/assets/images/help/pull_requests/pr-file-tree.png)
1. To filter by file path, enter part or all of the file path in the **Filter changed files** search box. Alternatively, use the file filter dropdown. For more information, see "[Using the file filter dropdown](#using-the-file-filter-dropdown)."

{% endif %}

## Leia mais

- "[Sobre comparar branches em uma pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)"
- "[Encontrar métodos e funções alterados em uma pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request)"

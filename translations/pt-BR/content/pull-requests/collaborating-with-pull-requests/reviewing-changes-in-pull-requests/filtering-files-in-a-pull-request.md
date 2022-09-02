---
title: Filtrar arquivos em uma pull request
intro: 'Para ajudar você a revisar rapidamente as alterações em grande pull request, você pode filtrar arquivos alterados{% ifversion pr-tree-view %} ou usar a árvore de arquivos para navegar entre os arquivos{% endif %}.'
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

Você pode filtrar arquivos em um pull request por tipo de extensão de arquivo, como `. tml` ou `.js`, falta de extensão, propriedade de código ou dotfiles.{% ifversion pr-tree-view %} Você também pode usar a árvore de arquivos para filtrar por caminho de arquivo, navegar entre arquivos ou ver uma visão de alto nível os arquivos alterados.{% endif %}

## Usando o menu de filtros de arquivo

{% tip %}

**Dica:** para simplificar a visualização do diff do pull request, também é possível ocultar temporariamente os arquivos excluídos ou aqueles que você já visualizou no diff do pull request a partir menu suspenso Filtro de arquivo.

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. Na lista de pull requests, clique na pull request que você gostaria de filtrar.
{% data reusables.repositories.changed-files %}
4. Use o menu suspenso File filter (Filtro de arquivo) e selecione, desmarque ou clique nos filtros desejados. ![Opção File filter (Filtro de arquivo) acima do diff da pull request](/assets/images/help/pull_requests/file-filter-option.png)
5. Como opção, para limpar a seleção de filtro, abaixo da aba **Files changed** (Arquivos alterados) clique em **Clear** (Limpar). ![Limpar a seleção File filter (Filtro de arquivo)](/assets/images/help/pull_requests/clear-file-filter.png)

{% ifversion pr-tree-view %}
## Usando a árvore de arquivos

{% data reusables.repositories.sidebar-pr %}
1. Na lista de pull requests, clique na pull request que você gostaria de filtrar.
{% data reusables.repositories.changed-files %}

1. Clique em um arquivo na árvore de arquivos para ver o diff do arquivo correspondente. Se a árvore de arquivos estiver oculta, clique em {% octicon "sidebar-collapse" aria-label="The sidebar collapse icon" %} para exibir a árvore de arquivos.

   {% note %}

   **Observação**: A árvore de arquivos não será exibida se a largura da tela for muito estreita ou se o pull request incluir apenas um arquivo.

   {% endnote %}

   ![Captura de tela do filtro de caixa de pesquisa de arquivos alterada e a árvore de arquivos destacada](/assets/images/help/repository/file-tree.png)
1. Para filtrar por caminho do arquivo, digite parte ou todo o caminho do arquivo na caixa de pesquisa **Filtrar arquivos alterados**. Como alternativa, use o menu suspenso do filtro de arquivos. Para obter mais informações, consulte "[Usando o menu suspenso do filro de arquivos](#using-the-file-filter-dropdown)."

{% endif %}

## Leia mais

- "[Sobre comparar branches em uma pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)"
- "[Encontrar métodos e funções alterados em uma pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request)"

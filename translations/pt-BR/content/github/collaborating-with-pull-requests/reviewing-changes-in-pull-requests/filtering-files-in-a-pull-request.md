---
title: Filtrar arquivos em uma pull request
intro: 'Para facilitar a rápida revisão de alterações em uma pull request extensa, você pode filtrar arquivos alterados.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request
  - /articles/filtering-files-in-a-pull-request-by-file-type/
  - /articles/filtering-files-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/filtering-files-in-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Você pode filtrar arquivos em um pull request por tipo de extensão de arquivo, como `. tml` ou `.js`, falta de uma extensão, propriedade de código ou dotfiles.

{% tip %}

**Dica:** para simplificar a visualização do diff do pull request, também é possível ocultar temporariamente os arquivos excluídos ou aqueles que você já visualizou no diff do pull request a partir menu suspenso Filtro de arquivo.

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. Na lista de pull requests, clique na pull request que você gostaria de filtrar.
{% data reusables.repositories.changed-files %}
4. Use o menu suspenso File filter (Filtro de arquivo) e selecione, desmarque ou clique nos filtros desejados. ![Opção File filter (Filtro de arquivo) acima do diff da pull request](/assets/images/help/pull_requests/file-filter-option.png)
5. Como opção, para limpar a seleção de filtro, abaixo da aba **Files changed** (Arquivos alterados) clique em **Clear** (Limpar). ![Limpar a seleção File filter (Filtro de arquivo)](/assets/images/help/pull_requests/clear-file-filter.png)

### Leia mais

- "[Sobre comparar branches em uma pull request](/articles/about-comparing-branches-in-pull-requests)"
- "[Encontrar métodos e funções alterados em uma pull request](/articles/finding-changed-methods-and-functions-in-a-pull-request)"

---
title: Filtrar arquivos em uma pull request
intro: 'Para facilitar a rápida revisão de alterações em uma pull request extensa, você pode filtrar arquivos alterados.'
redirect_from:
  - /articles/filtering-files-in-a-pull-request-by-file-type/
  - /articles/filtering-files-in-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Você pode filtrar arquivos em uma pull request pelo tipo de extensão do arquivo, como  `.html` ou `.js`, sem extensão,  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %} propriedade de código, {% endif %} ou dotfiles.

{% tip %}

**Dica:** para simplificar a visualização do diff da pull request, também é possível ocultar temporariamente os arquivos excluídos{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %} ou aqueles que você já visualizou {% endif %}no diff da pull request, a partir menu suspenso file filter (filtro de arquivo).

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. Na lista de pull requests, clique na pull request que você gostaria de filtrar.
{% data reusables.repositories.changed-files %}
4. Use o menu suspenso File filter (Filtro de arquivo) e selecione, desmarque ou clique nos filtros desejados. ![Opção File filter (Filtro de arquivo) acima do diff da pull request](/assets/images/help/pull_requests/file-filter-option.png)
5. Como opção, para limpar a seleção de filtro, abaixo da aba **Files changed** (Arquivos alterados) clique em **Clear** (Limpar). ![Limpar a seleção File filter (Filtro de arquivo)](/assets/images/help/pull_requests/clear-file-filter.png)

### Leia mais

- "[Sobre comparar branches em uma pull request](/articles/about-comparing-branches-in-pull-requests)"
- "[Encontrar métodos e funções alterados em uma pull request](/articles/finding-changed-methods-and-functions-in-a-pull-request)"

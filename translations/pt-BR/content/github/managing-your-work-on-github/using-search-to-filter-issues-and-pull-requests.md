---
title: Usar a pesquisa para filtrar problemas e pull requests
intro: A exibição de todos os problemas e pull requests vem com uma barra de pesquisa para gerenciamento avançado de filtros.
redirect_from:
  - /articles/using-search-to-filter-issues-and-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

A barra de pesquisa de problemas e pull requests permite que você defina seus próprios filtros personalizados e ordene por uma ampla variedade de critérios. A barra de pesquisa pode ser encontrada nas guias **Problemas** e **Pull requests** de cada repositório nos [Painéis de problemas e pull requests](/articles/viewing-all-of-your-issues-and-pull-requests).

![A barra de pesquisa de problemas e pull request](/assets/images/help/issues/issues_search_bar.png)

{% tip %}

**Dica:** {% data reusables.search.search_issues_and_pull_requests_shortcut %}

{% endtip %}

Com os termos da pesquisa de problemas e pull requests, é possível:

- Filtrar problemas e pull requests por autor: `state:open type:issue author:octocat`
- Filtrar problemas e pull requests que envolvem determinadas pessoas, mas não necessariamente as [**@mencionam**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams): `state:open type:issue involves:octocat`
- Filtrar problemas e pull requests por responsável: `state:open type:issue assignee:octocat`
- Filtrar problemas e pull requests por etiqueta: `state:open type:issue label:"bug"`

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
Para problemas, você também pode usar a busca para:

- Filtrar por problemas que estão vinculados a uma pull request por uma referência de fechamento: `linked:pr`
{% endif %}

Para pull requests, você também pode usar a pesquisa para:
- Filtrar pull requests de [rascunho](/articles/about-pull-requests#draft-pull-requests): `is:draft`
- Filtrar pull requests que não tenham sido [revisadas](/articles/about-pull-request-reviews) yet: `state:open type:pr review:none`
- Filtrar pull requests que [exijam uma revisão](/articles/about-required-reviews-for-pull-requests) para que o merge possa ser feito: `state:open type:pr review:required`
- Filtrar pull requests que tenham sido aprovadas por um revisor: `state:open type:pr review:approved`
- Filtrar pull requests nas quais um revisor tenha solicitado alterações: `state:open type:pr review:changes_requested`
- Filtrar pull requests por [revisor](/articles/about-pull-request-reviews/): `state:open type:pr reviewed-by:octocat`
- Filtrar pull requests pelo usuário específico [solicitado para revisão](/articles/requesting-a-pull-request-review): `state:open type:pr review-requested:octocat`
- Filtre pull requests pela equipe solicitada para revisão: `state:open type:pr team-review-requested:github/atom`{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
- Filtro por pull requests que estão vinculadas a um problema que a pull request pode concluir: `linked:issue`{% endif %}

### Leia mais

- "[Pesquisar problemas](/articles/searching-issues)"
- "[Filtrar problemas e pull requests](/articles/filtering-issues-and-pull-requests)"
- "[Ordenar problemas e pull requests](/articles/sorting-issues-and-pull-requests)"
- "[Compartilhar filtros](/articles/sharing-filters)"

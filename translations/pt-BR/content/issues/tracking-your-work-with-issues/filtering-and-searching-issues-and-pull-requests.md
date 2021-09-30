---
title: Filtering and searching issues and pull requests
intro: 'To find detailed information about a repository on {% data variables.product.product_name %}, you can filter, sort, and search issues and pull requests that are relevant to the repository.'
redirect_from:
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-assignees
  - /articles/filtering-issues-and-pull-requests-by-assignees
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests-by-assignees
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-labels
  - /articles/filtering-issues-and-pull-requests-by-labels
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests-by-labels
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-issues-and-pull-requests
  - /articles/filtering-issues-and-pull-requests
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-pull-requests-by-review-status
  - /articles/filtering-pull-requests-by-review-status
  - /github/managing-your-work-on-github/filtering-pull-requests-by-review-status
  - /github/managing-your-work-on-github/finding-information-in-a-repository
  - /articles/finding-information-in-a-repository
  - /github/managing-your-work-on-github/finding-information-in-a-repository/sharing-filters
  - /articles/sharing-filters
  - /github/managing-your-work-on-github/sharing-filters
  - /github/managing-your-work-on-github/finding-information-in-a-repository/using-search-to-filter-issues-and-pull-requests
  - /articles/using-search-to-filter-issues-and-pull-requests
  - /github/managing-your-work-on-github/using-search-to-filter-issues-and-pull-requests
  - /github/managing-your-work-on-github/finding-information-in-a-repository/sorting-issues-and-pull-requests
  - /articles/sorting-issues-and-pull-requests
  - /github/managing-your-work-on-github/sorting-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-assignees
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-labels
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-pull-requests-by-review-status
  - /github/administering-a-repository/finding-information-in-a-repository/sorting-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository/using-search-to-filter-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository/sharing-filters
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Issues
  - Pull requests
shortTitle: Filter and search
---

{% data reusables.cli.filter-issues-and-pull-requests-tip %}

## Filtrar problemas e pull requests

Problemas e pull requests possuem um conjunto de filtros padrão que podem ser aplicados para organizar suas listas.

{% data reusables.search.requested_reviews_search %}

É possível filtrar problemas e pull requests para encontrar:
- Todos os problemas e pull requests abertos
- Problemas e pull requests criados
- Problemas e pull requests atribuídos a você
- Problemas e pull requests nos quais você foi [**@mentioned**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) (@mencionado)

{% data reusables.cli.filter-issues-and-pull-requests-tip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. Clique em **Filters** (Filtros) para escolher o tipo de filtro desejado. ![Usar o menu suspenso Filters (Filtros)](/assets/images/help/issues/issues_filter_dropdown.png)

## Filtrar problemas e pull requests por responsáveis

Once you've [assigned an issue or pull request to someone](/articles/assigning-issues-and-pull-requests-to-other-github-users), you can find items based on who's working on them.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. No canto superior direito, selecione o menu suspenso Assignee (Responsável).
4. O menu suspenso Assignee (Responsável) lista todas as pessoas que têm acesso de gravação no repositório. Clique sobre o nome da pessoa cujos itens atribuídos você quer ver ou clique **Assigned to nobody** (Atribuído a ninguém) para verificar quais problemas estão sem responsáveis. ![Usar a aba suspensa Assignees (Responsáveis)](/assets/images/help/issues/issues_assignee_dropdown.png)

{% tip %}

Para limpar a seleção de filtro, clique em **Clear current search query, filters, and sorts** (Limpar consulta atual, filtros e ordenar).

{% endtip %}

## Filtrar problemas e pull requests por etiquetas

Once you've [applied labels to an issue or pull request](/articles/applying-labels-to-issues-and-pull-requests), you can find items based on their labels.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
4. Na lista de etiquetas, clique em uma etiqueta para visualizar os problemas e pull requests atribuídas a ela. ![Lista de etiquetas de um repositório](/assets/images/help/issues/labels-page.png)

{% tip %}

**Dica: **para limpar a seleção de filtro, clique em **Clear current search query, filters, and sorts** (Limpar consulta atual, filtros e ordenar).

{% endtip %}

## Filtrar pull requests por status de revisão

É possível usar filtros para listar pull requests por status de revisão e encontrar as que você revisou ou outras pessoas solicitaram que você revisasse.

Você pode filtrar uma lista de pull requests do repositório para encontrar:
- Pull requests que ainda não foram [revisadas](/articles/about-pull-request-reviews)
- Pull requests que [necessitam de revisão](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging) antes de serem mescladas
- Pull requests que um revisor aprovou
- Pull requests nas quais um revisor solicitou alterações
- Pull requests que você revisou
- Pull requests que [alguém solicitou revisão a você ou a uma equipe a que você pertence](/articles/requesting-a-pull-request-review)

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
3. No canto superior direito, selecione o menu suspenso Reviews (Revisões). ![Menu suspenso Reviews (Revisões) no menu filter (filtro) acima da lista de pull requests](/assets/images/help/pull_requests/reviews-filter-dropdown.png)
4. Escolha um filtro para encontrar todas as pull requests com o status do filtro. ![Lista de filtros no menu suspenso Reviews (Revisões)](/assets/images/help/pull_requests/pr-review-filters.png)

## Usar a pesquisa para filtrar problemas e pull requests

You can use advanced filters to search for issues and pull requests that meet specific criteria.

### Searching for issues and pull requests

{% include tool-switcher %}

{% webui %}

A barra de pesquisa de problemas e pull requests permite que você defina seus próprios filtros personalizados e ordene por uma ampla variedade de critérios. A barra de pesquisa pode ser encontrada nas guias **Problemas** e **Pull requests** de cada repositório nos [Painéis de problemas e pull requests](/articles/viewing-all-of-your-issues-and-pull-requests).

![A barra de pesquisa de problemas e pull request](/assets/images/help/issues/issues_search_bar.png)

{% tip %}

**Dica:** {% data reusables.search.search_issues_and_pull_requests_shortcut %}

{% endtip %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

You can use the {% data variables.product.prodname_cli %} to search for issues or pull requests. Use the `gh issue list` or `gh pr list` subcommand along with the `--search` argument and a search query.

For example, you can list, in order of date created, all issues that have no assignee and that have the label `help wanted` or `bug`.

```shell
gh issue list --search 'no:assignee label:"help wanted",bug sort:created-asc'
```

You can also list all pull requests that mention the `octo-org/octo-team` team.

```shell
gh pr list --search "team:octo-org/octo-team"
```

{% endcli %}

### About search terms

Com os termos da pesquisa de problemas e pull requests, é possível:

- Filtrar problemas e pull requests por autor: `state:open type:issue author:octocat`
- Filtrar problemas e pull requests que envolvem determinadas pessoas, mas não necessariamente as [**@mencionam**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams): `state:open type:issue involves:octocat`
- Filtrar problemas e pull requests por responsável: `state:open type:issue assignee:octocat`
- Filtrar problemas e pull requests por etiqueta: `state:open type:issue label:"bug"`
- Filtrar termos da pesquisa usando `-` antes do termo: `state:open type:issue -author:octocat`

{% ifversion fpt or ghes > 3.2 or ghae-next %}
{% tip %}

**Tip:** You can filter issues and pull requests by label using logical OR or using logical AND.
- To filter issues using logical OR, use the comma syntax: `label:"bug","wip"`.
- To filter issues using logical AND, use separate label filters: `label:"bug" label:"wip"`.

{% endtip %}
{% endif %}

{% ifversion fpt or ghes or ghae %}
Para problemas, você também pode usar a busca para:

- Filtrar por problemas que estão vinculados a uma pull request por uma referência de fechamento: `linked:pr`
{% endif %}

Para pull requests, você também pode usar a pesquisa para:
- Filtrar pull requests de [rascunho](/articles/about-pull-requests#draft-pull-requests): `is:draft`
- Filtrar pull requests que não tenham sido [revisadas](/articles/about-pull-request-reviews) yet: `state:open type:pr review:none`
- Filtrar pull requests que [exijam uma revisão](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging) para que o merge possa ser feito: `state:open type:pr review:required`
- Filtrar pull requests que tenham sido aprovadas por um revisor: `state:open type:pr review:approved`
- Filtrar pull requests nas quais um revisor tenha solicitado alterações: `state:open type:pr review:changes_requested`
- Filtrar pull requests por [revisor](/articles/about-pull-request-reviews/): `state:open type:pr reviewed-by:octocat`
- Filtrar pull requests pelo usuário específico [solicitado para revisão](/articles/requesting-a-pull-request-review): `state:open type:pr review-requested:octocat`
- Filtrar pull requests pela equipe solicitada para revisão: `state:open type:pr team-review-requested:github/atom`{% ifversion fpt or ghes or ghae %}
- Filtro por pull requests que estão vinculadas a um problema que a pull request pode concluir: `linked:issue`{% endif %}

## Ordenar problemas e pull requests

Filtros podem ser ordenados para fornecer informações melhores durante um período específico.

Você pode ordenar qualquer exibição filtrada por:

* Prolemas ou pull requests com data de criação mais recente
* Prolemas ou pull requests com data de criação mais antiga
* Problemas ou pull requests com mais comentários
* Problemas ou pull requests com menos comentários
* Prolemas ou pull requests com data de atualização mais recente
* Prolemas ou pull requests com data de atualização mais antiga
* A reação mais adicionada em problemas ou pull requests

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
1. No canto superior direito, selecione o menu suspenso Sort (Ordenar). ![Usar a aba suspensa Sort (Ordenar)](/assets/images/help/issues/issues_sort_dropdown.png)

Para limpar a seleção da ordenação, clique em **Sort** (Ordenar) > **Newest** (Mais recente).


## Compartilhar filtros

Quando você filtra ou ordena problemas e pull requests, a URL do navegador é automaticamente atualizada para corresponder à nova exibição.

Você pode enviar a URL que geradas pelos problemas para qualquer usuário e ele verá a mesma exibição com filtro que você.

Por exemplo, se você filtrar por problemas atribuídos a Hubot e ordenar pelos problemas abertos mais antigos, a URL seria atualizada para algo como o seguinte:

```
/issues?q=state:open+type:issue+assignee:hubot+sort:created-asc
```

## Leia mais

- "[Searching issues and pull requests](/articles/searching-issues)""

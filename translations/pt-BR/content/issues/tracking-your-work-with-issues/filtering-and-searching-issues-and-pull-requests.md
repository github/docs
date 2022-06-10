---
title: Filtrando e pesquisando problemas e pull requests
intro: 'Para encontrar informações detalhadas sobre um repositório em {% data variables.product.product_name %}, você pode filtrar, ordenar e pesquisar problemas e pull requests que são relevantes para o repositório.'
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
  ghec: '*'
topics:
  - Issues
  - Pull requests
shortTitle: Filtrar e pesquisar
type: how_to
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

Uma vez que você [atribuiu um problema ou pull request a alguém](/articles/assigning-issues-and-pull-requests-to-other-github-users), você poderá encontrar itens baseado em quem está trabalhando neles.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. No canto superior direito, selecione o menu suspenso Assignee (Responsável).
4. O menu suspenso Assignee (Responsável) lista todas as pessoas que têm acesso de gravação no repositório. Clique sobre o nome da pessoa cujos itens atribuídos você quer ver ou clique **Assigned to nobody** (Atribuído a ninguém) para verificar quais problemas estão sem responsáveis. ![Usar a aba suspensa Assignees (Responsáveis)](/assets/images/help/issues/issues_assignee_dropdown.png)

{% tip %}

Para limpar a seleção de filtro, clique em **Clear current search query, filters, and sorts** (Limpar consulta atual, filtros e ordenar).

{% endtip %}

## Filtrar problemas e pull requests por etiquetas

Depois que [aplicou etiquetas a um problema ou pull request](/articles/applying-labels-to-issues-and-pull-requests), você poderá encontrar itens baseados nas suas etiquetas.

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
- Pull requests que ainda não foram [revisadas](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)
- Pull requests que [necessitam de revisão](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging) antes de serem mescladas
- Pull requests que um revisor aprovou
- Pull requests nas quais um revisor solicitou alterações
- Os pull requests que você revisou{% ifversion fpt or ghae-issue-5181 or ghes > 3.2 or ghec %}
- Pull requests que alguém pediu para você para revisar diretamente{% endif %}
- Pull requests que [alguém solicitou revisão a você ou a uma equipe a que você pertence](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
3. No canto superior direito, selecione o menu suspenso Reviews (Revisões). ![Menu suspenso Reviews (Revisões) no menu filter (filtro) acima da lista de pull requests](/assets/images/help/pull_requests/reviews-filter-dropdown.png)
4. Escolha um filtro para encontrar todas as pull requests com o status do filtro. ![Lista de filtros no menu suspenso Reviews (Revisões)](/assets/images/help/pull_requests/pr-review-filters.png)

## Usar a pesquisa para filtrar problemas e pull requests

Você pode usar filtros avançados para pesquisar problemas e pull requests que atendam a critérios específicos.

### Pesquisando problemas e pull requests

{% webui %}

A barra de pesquisa de problemas e pull requests permite que você defina seus próprios filtros personalizados e ordene por uma ampla variedade de critérios. A barra de pesquisa pode ser encontrada nas guias **Problemas** e **Pull requests** de cada repositório nos [Painéis de problemas e pull requests](/articles/viewing-all-of-your-issues-and-pull-requests).

![A barra de pesquisa de problemas e pull request](/assets/images/help/issues/issues_search_bar.png)

{% tip %}

**Dica:** {% data reusables.search.search_issues_and_pull_requests_shortcut %}

{% endtip %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Você pode usar o {% data variables.product.prodname_cli %} para pesquisar problemas ou pull requests. Use o subcomando `gh issue list` ou `gh pr list` junto com o argumento `--search` e uma consulta de pesquisa.

Por exemplo, você pode listar, na ordem da data de criação, todos os problemas que não têm nenhum responsável e que têm a etiqueta `help wanted` ou `erro`.

```shell
gh issue list --search 'no:assignee label:"help wanted",bug sort:created-asc'
```

Você também pode listar todos os pull requests que mencionam a equipe `octo-org/octo-team`.

```shell
gh pr list --search "team:octo-org/octo-team"
```

{% endcli %}

### Sobre termos de pesquisa

Com os termos da pesquisa de problemas e pull requests, é possível:

- Filtrar problemas e pull requests por autor: `state:open type:issue author:octocat`
- Filtrar problemas e pull requests que envolvem determinadas pessoas, mas não necessariamente as [**@mencionam**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams): `state:open type:issue involves:octocat`
- Filtrar problemas e pull requests por responsável: `state:open type:issue assignee:octocat`
- Filtrar problemas e pull requests por etiqueta: `state:open type:issue label:"bug"`
- Filtrar termos da pesquisa usando `-` antes do termo: `state:open type:issue -author:octocat`

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}
{% tip %}

**Dica:** Você pode filtrar problemas e pull requests por etiqueta, usando a lógica OU ou E.
- Para filtrar problemas usando ROM OR, use a sintaxe de vírgula: `label:"bug","wip"`.
- Para filtrar problemas usando a lógica E, use filtros separados de etiqueta: `label:"bug" label:"wip"`.

{% endtip %}
{% endif %}

Para problemas, você também pode usar a busca para:

- Filtro problemas vinculados a um pull request por uma referência de fechamento: `linked:pr`{% ifversion issue-close-reasons %}
- Filtrar problemas pelo motivo pelo qual foram fechados: `is:closed reason:complete` or `is:closed reason:"not planned"`{% endif %}

Para pull requests, você também pode usar a pesquisa para:
- Filtrar pull requests de [rascunho](/articles/about-pull-requests#draft-pull-requests): `is:draft`
- Filtrar pull requests que não tenham sido [revisadas](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) yet: `state:open type:pr review:none`
- Filtrar pull requests que [exijam uma revisão](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging) para que o merge possa ser feito: `state:open type:pr review:required`
- Filtrar pull requests que tenham sido aprovadas por um revisor: `state:open type:pr review:approved`
- Filtrar pull requests nas quais um revisor tenha solicitado alterações: `state:open type:pr review:changes_requested`
- Filtrar pull requests por [revisor](/articles/about-pull-request-reviews/): `state:open type:pr reviewed-by:octocat`
- Filtrar pull requests por usuário específico [solicitado para revisão](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review): `state:open type:pr review-requested:octocat`{% ifversion fpt or ghae-issue-5181 or ghes > 3.2 or ghec %}
- Filtrar pull requests que alguém pediu para você revisar diretamente: `state:open type:pr user-review-requested:@me`{% endif %}
- Filtrar pull requests pela equipe solicitada para revisão: `state:open type:pr team-review-requested:github/atom`
- Filtro por pull requests que estão vinculadas a um problema que a pull request pode concluir: `linked:issue`

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

- "[Pesquisando problemas e pull requests](/articles/searching-issues)"

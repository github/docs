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
shortTitle: Filter and search
type: how_to
ms.openlocfilehash: 24f91958f98f4b6744ee3b21bf3d748aef062eb6
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107594'
---
{% data reusables.cli.filter-issues-and-pull-requests-tip %}

## Filtrar problemas e pull requests

Problemas e pull requests possuem um conjunto de filtros padrão que podem ser aplicados para organizar suas listas.

{% data reusables.search.requested_reviews_search %}

É possível filtrar problemas e pull requests para encontrar:
- Todos os problemas e pull requests abertos
- Problemas e pull requests criados
- Problemas e pull requests atribuídos a você
- Problemas e solicitações de pull em que você é [ **@mentioned**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)

{% data reusables.cli.filter-issues-and-pull-requests-tip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. Clique em **Filtros** para escolher o tipo de filtro do seu interesse.
  ![Como usar o menu suspenso Filtros](/assets/images/help/issues/issues_filter_dropdown.png)

## Filtrar problemas e pull requests por responsáveis

Depois de [atribuir um problema ou uma solicitação de pull a alguém](/articles/assigning-issues-and-pull-requests-to-other-github-users), você pode encontrar itens com base na pessoa que está trabalhando neles.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. No canto superior direito, selecione o menu suspenso Assignee (Responsável).
4. O menu suspenso Assignee (Responsável) lista todas as pessoas que têm acesso de gravação no repositório. Clique no nome da pessoa cujos itens atribuídos deseja ver ou clique em **Atribuído a ninguém** para ver os problemas que estão sem atribuição.
![Como usar a guia suspensa Responsáveis](/assets/images/help/issues/issues_assignee_dropdown.png)

{% tip %}

Para limpar a seleção de filtro, clique em **Limpar a consulta de pesquisa atual, filtros e classificações**.

{% endtip %}

## Filtrar problemas e pull requests por etiquetas

Depois de [aplicar rótulos a um problema ou uma solicitação de pull](/articles/applying-labels-to-issues-and-pull-requests), você pode encontrar itens com base nos respectivos rótulos.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %}
4. Na lista de etiquetas, clique em uma etiqueta para visualizar os problemas e pull requests atribuídas a ela.
  ![Lista de rótulos de um repositório](/assets/images/help/issues/labels-page.png)

{% tip %}

**Dica:** para limpar a seleção de filtro, clique em **Limpar a consulta de pesquisa atual, filtros e classificações**.

{% endtip %}

## Filtrar pull requests por status de revisão

É possível usar filtros para listar pull requests por status de revisão e encontrar as que você revisou ou outras pessoas solicitaram que você revisasse.

Você pode filtrar uma lista de pull requests do repositório para encontrar:
- Solicitações de pull que ainda não foram [revisadas](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)
- Solicitações de pull que [exigem uma revisão](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging) para serem mescladas
- Pull requests que um revisor aprovou
- Pull requests nas quais um revisor solicitou alterações
- Solicitações de pull que você revisou
- As solicitações de pull que alguém pediu diretamente para você para revisar
- Solicitações de pull para as quais [alguém solicitou uma revisão a você ou a uma equipe da qual você é membro](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
3. No canto superior direito, selecione o menu suspenso Reviews (Revisões).
  ![Menu suspenso Revisões no menu Filtro acima da lista de solicitações de pull](/assets/images/help/pull_requests/reviews-filter-dropdown.png)
4. Escolha um filtro para encontrar todas as pull requests com o status do filtro.
  ![Lista de filtros no menu suspenso Revisões](/assets/images/help/pull_requests/pr-review-filters.png)

## Usar a pesquisa para filtrar problemas e pull requests

Você pode usar filtros avançados para pesquisar problemas e pull requests que atendam a critérios específicos.

### Pesquisando problemas e pull requests

{% webui %}

A barra de pesquisa de problemas e pull requests permite que você defina seus próprios filtros personalizados e ordene por uma ampla variedade de critérios. Encontre a barra de pesquisa nas guias **Problemas** e **Solicitações pull** de cada repositório e nos [painéis Problemas e Solicitações de pull](/articles/viewing-all-of-your-issues-and-pull-requests).

![A barra de pesquisa de problemas e pull request](/assets/images/help/issues/issues_search_bar.png)

{% tip %}

**Dica:** {% data reusables.search.search_issues_and_pull_requests_shortcut %}

{% endtip %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Você pode usar o {% data variables.product.prodname_cli %} para pesquisar problemas ou pull requests. Use o subcomando `gh issue list` ou `gh pr list` subcomando com o argumento `--search` e uma consulta de pesquisa.

Por exemplo, você pode listar, por ordem de data criada, todos os problemas que não têm um destinatário e que têm o rótulo `help wanted` ou `bug`.

```shell
gh issue list --search 'no:assignee label:"help wanted",bug sort:created-asc'
```

Você também pode listar todas as solicitações de pull que mencionam a equipe `octo-org/octo-team`.

```shell
gh pr list --search "team:octo-org/octo-team"
```

{% endcli %}

### Sobre termos de pesquisa

Com os termos da pesquisa de problemas e pull requests, é possível:

- Filtrar problemas e solicitações de pull por autor: `state:open type:issue author:octocat`
- Filtrar problemas e solicitações de pull que envolvem, mas não necessariamente [ **@mention**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams), determinadas pessoas: `state:open type:issue involves:octocat`
- Filtrar problemas e solicitações de pull por destinatário: `state:open type:issue assignee:octocat`
- Filtrar problemas e solicitações de pull por rótulo: `state:open type:issue label:"bug"`
- Filtrar os termos de pesquisa usando `-` antes do termo: `state:open type:issue -author:octocat`

{% tip %}

**Dica:** você pode filtrar problemas e solicitações de pull por rótulo usando OR lógico ou AND lógico.
- Para filtrar problemas usando OR lógico, use a sintaxe de vírgula: `label:"bug","wip"`.
- Para filtrar problemas usando AND lógico, use filtros de rótulo separados: `label:"bug" label:"wip"`.

{% endtip %}

Para problemas, você também pode usar a busca para:

- Filtre por problemas vinculados a uma solicitação pull por uma referência de fechamento: `linked:pr`{% ifversion issue-close-reasons %}
- Filtre os problemas pelo motivo pelo qual foram fechados: `is:closed reason:complete` ou `is:closed reason:"not planned"`{% endif %}

Para pull requests, você também pode usar a pesquisa para:
- Filtrar solicitações de pull de [rascunho](/articles/about-pull-requests#draft-pull-requests) : `is:draft`
- Filtrar solicitações de pull que ainda não foram [revisadas](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews): `state:open type:pr review:none`
- Filtrar solicitações de pull que [exigem uma revisão](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging) para serem mescladas: `state:open type:pr review:required`
- Filtrar solicitações de pull aprovadas por um revisor: `state:open type:pr review:approved`
- Filtrar solicitações de pull nas quais um revisor solicitou alterações: `state:open type:pr review:changes_requested`
- Filtrar solicitações de pull por [revisor](/articles/about-pull-request-reviews/): `state:open type:pr reviewed-by:octocat`
- Filtrar as solicitações de pull pelo usuário específico [solicitado para revisão](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review): `state:open type:pr review-requested:octocat`
- Filtrar as solicitações de pull cuja revisão alguém solicitou diretamente a você: `state:open type:pr user-review-requested:@me`
- Filtrar solicitações de pull da equipe solicitadas para revisão: `state:open type:pr team-review-requested:github/docs`
- Filtrar solicitações de pull que estão vinculadas a um problema que a solicitação de pull poderá fechar: `linked:issue`

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

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
1. No canto superior direito, selecione o menu suspenso Sort (Ordenar).
  ![Como usar a guia suspensa Classificar](/assets/images/help/issues/issues_sort_dropdown.png)

Para limpar a seleção de classificação, clique em **Classificar** > **Mais Recente**.

## Compartilhar filtros

Quando você filtra ou ordena problemas e pull requests, a URL do navegador é automaticamente atualizada para corresponder à nova exibição.

Você pode enviar a URL que geradas pelos problemas para qualquer usuário e ele verá a mesma exibição com filtro que você.

Por exemplo, se você filtrar por problemas atribuídos a Hubot e ordenar pelos problemas abertos mais antigos, a URL seria atualizada para algo como o seguinte:

```
/issues?q=state:open+type:issue+assignee:hubot+sort:created-asc
```

## Leitura adicional

- "[Como pesquisar problemas e solicitações de pull](/articles/searching-issues)"

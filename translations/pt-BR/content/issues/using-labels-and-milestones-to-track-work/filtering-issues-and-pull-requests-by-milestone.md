---
title: Filtrar problemas e pull requests por marco
intro: 'É possível filtrar problemas e pull requests com base no marco a que estão associados. Depois de [associar um problema ou solicitação de pull a um marco](/articles/associating-milestones-with-issues-and-pull-requests), você poderá encontrar itens com base em seus marcos. Você pode priorizar problemas e pull requests dentro dos marcos.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-milestones/filtering-issues-and-pull-requests-by-milestone
  - /articles/filtering-issues-and-pull-requests-by-milestone
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests-by-milestone
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Filter by milestone
ms.openlocfilehash: 6eda4a52df3212b37c3052832291f03aa2285fd5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145126554'
---
{% tip %}

**Dicas:**

- Se preferir filtrar problemas e pull requests com a barra de pesquisa, use a sintaxe de pesquisa de marco. Para um marco chamado Meu Marco, a sintaxe de pesquisa será: `milestone:"My Milestone"`.
- Para limpar a seleção de filtro, clique em **Limpar a consulta de pesquisa atual, filtros e classificações**.
-  Você também pode filtrar problemas ou pull requests usando o {% data variables.product.prodname_cli %}. Para obter mais informações, confira "[`gh issue list`](https://cli.github.com/manual/gh_issue_list)" ou "[`gh pr list`](https://cli.github.com/manual/gh_pr_list)" na documentação da {% data variables.product.prodname_cli %}.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. Selecione **Marcos** para ver uma lista de todos os marcos disponíveis para o repositório.
  ![Botão Marcos](/assets/images/help/issues/issues_milestone_button.png)
4. Selecione o marco desejado na lista. Na página milestone (marcos), é possível visualizar as informações relevantes, inclusive todos os problemas e pull requests associados a ele. Para obter mais informações, confira "[Sobre os marcos](/articles/about-milestones)".

## Leitura adicional

- "[Como filtrar e pesquisar problemas e solicitações de pull](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)"
- "[Como filtrar cartões em um quadro de projetos](/articles/filtering-cards-on-a-project-board)"

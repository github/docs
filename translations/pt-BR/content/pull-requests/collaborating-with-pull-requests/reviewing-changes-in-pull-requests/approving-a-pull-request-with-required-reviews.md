---
title: Aprovar uma pull request com revisões obrigatórias
intro: 'Se seu repositório exigir revisões, as solicitações de pull deverão ter um número específico de revisões de aprovação de pessoas com permissões de _gravação_ ou _administrador_ no repositório antes que elas possam ser mescladas.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews
  - /articles/approving-a-pull-request-with-required-reviews
  - /github/collaborating-with-issues-and-pull-requests/approving-a-pull-request-with-required-reviews
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Required reviews
ms.openlocfilehash: 4554ac9e9b9d0c0f184e0b6b60e732806d2f4a17
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145128037'
---
Para obter mais informações sobre as revisões obrigatórias, confira "[Sobre os branches protegidos](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)".

Você pode comentar em uma pull request, aprovar as alterações ou solicitar melhorias antes da aprovação. Para obter mais informações, confira "[Como revisar as alterações propostas em uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)".

{% data reusables.search.requested_reviews_search %}

{% tip %}

**Dica**: se uma solicitação de pull aprovada tiver sido alterada de maneira significativa, você poderá ignorar a revisão dela. A pull request precisará de uma nova revisão para que possa sofrer merge. Para obter mais informações, confira "[Como ignorar uma revisão de solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)".

{% endtip %}

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %}
4. Revise as alterações na solicitação de pull e, opcionalmente, [adicione um comentário a linhas específicas](/articles/reviewing-proposed-changes-in-a-pull-request/#starting-a-review).
{% data reusables.repositories.review-changes %} {% data reusables.repositories.review-summary-comment %}
7. Selecione **Aprovar** para aprovar a mesclagem das alterações propostas na solicitação de pull.
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

## Leitura adicional

- "[Como revisar as alterações propostas em uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)"
- "[Como adicionar comentários a uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)"

---
title: Sobre revisões de pull request
intro: 'As revisões permitem que colaboradores comentem sobre as alterações propostas em pull requests, aprovem as alterações ou solicitem outras alterações antes do merge da pull request. Os administradores do repositório podem exigir que todas as pull requests sejam aprovadas antes de sofrerem o merge.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
  - /articles/about-pull-request-reviews
  - /github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: About PR reviews
ms.openlocfilehash: b68da308dc1e405f2b8fff5b0dd85dadbeabef80
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179404'
---
## Sobre revisões de pull request

Depois que uma solicitação de pull for aberta, qualquer pessoa com acesso de *leitura* poderá revisar as alterações propostas e adicionar comentários a elas. Você também pode sugerir alterações específicas às linhas de código, que o autor pode aplicar diretamente a partir da pull request. Para obter mais informações, confira "[Como revisar as alterações propostas em uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)".

{% ifversion pull-request-approval-limit %}{% data reusables.pull_requests.code-review-limits %}{% endif %}

Os proprietários de repositório e colaboradores podem solicitar uma revisão de pull request de uma pessoa específica. Os integrantes da organização também podem solicitar uma revisão de pull request de uma equipe com acesso de leitura ao repositório. Para obter mais informações, confira "[Como solicitar uma revisão de solicitação de pull](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)". Você pode especificar um subconjunto de membros da equipe a ser atribuído automaticamente no lugar de toda a equipe. Para obter mais informações, confira "[Como gerenciar as configurações de revisão de código para sua equipe](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)".

As revisões permitem discussão das alterações propostas e ajudam a garantir que as alterações atendam às diretrizes de contribuição do repositório e outros padrões de qualidade. Você pode definir quais indivíduos ou equipes possuem determinados tipos de área de código em um arquivo CODEOWNERS. Quando uma pull request modifica código que tem um proprietário definido, esse indivíduo ou equipe será automaticamente solicitado como um revisor. Para obter mais informações, confira "[Sobre os proprietários de código](/articles/about-code-owners/)".

{% ifversion fpt or ghec %}Você pode agendar lembretes para solicitações de pull que precisam ser revisadas. Para obter mais informações, confira "[Como gerenciar lembretes agendados para solicitações de pull](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests)".{% endif %}

![Header de revisão solicitando alterações com comentários em linha](/assets/images/help/pull_requests/review-header-with-line-comment.png)

Uma revisão tem três status possíveis:
- **Comentário**: envie comentários gerais sem aprovar explicitamente as alterações nem solicitar alterações adicionais.
- **Aprovação**: envie comentários e aprove a mesclagem das alterações propostas na solicitação de pull.
- **Solicitação de alterações**: envie comentários que precisam ser resolvidos antes que a solicitação de pull possa ser mesclada.

![Imagem de status de revisão](/assets/images/help/pull_requests/pull-request-review-statuses.png)

{% data reusables.repositories.request-changes-tips %}

Você pode exibir todas as revisões que uma pull request recebeu na linha do tempo Conversation (Conversa), assim como pode ver revisões por proprietários e colaboradores de repositório na caixa de merge da pull request.

![Imagem de revisões em uma caixa de merge](/assets/images/help/pull_requests/merge_box/pr-reviews-in-merge-box.png)

{% data reusables.search.requested_reviews_search_tip %}

{% data reusables.pull_requests.resolving-conversations %}

## Ressolicitar uma revisão

{% data reusables.pull_requests.re-request-review %}

## Revisões obrigatórias

{% data reusables.pull_requests.required-reviews-for-prs-summary %} Para obter mais informações, confira "[Sobre os branches protegidos](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)".

{% tip %}

**Dica**: se necessário, as pessoas com acesso de *administrador* ou de *gravação* em um repositório podem ignorar uma revisão de solicitação de pull. Para obter mais informações, confira "[Como ignorar uma revisão de solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)".

{% endtip %}

## Leitura adicional

- "[Como revisar as alterações propostas em uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)"
- "[Como ver uma revisão de solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/viewing-a-pull-request-review)"
- "[Como definir as diretrizes para os colaboradores do repositório](/articles/setting-guidelines-for-repository-contributors)"

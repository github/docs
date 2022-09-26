---
title: Fechar uma pull request
intro: 'Você pode optar por *fechar* uma solicitação de pull sem [mesclá-la no branch upstream](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request). Isso poderá ser útil se as alterações propostas no branch não forem mais necessárias ou se outra solução tiver sido proposta em outro branch.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request
  - /articles/closing-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/closing-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 51048cfd4ae917149d81a011a8ec5418ca4beb51
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145128062'
---
{% tip %}

**Dica**: se você abriu uma solicitação de pull com o branch base errado, em vez de fechá-la e abrir uma nova, poderá alterar o branch base. Para obter mais informações, confira "[Como alterar o branch base de uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request)".

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. Na lista "Pull Requests", clique na pull request da qual deseja fechar.
3. Na parte inferior da solicitação de pull, abaixo da caixa de comentários, clique em **Fechar solicitação de pull**.
  ![Botão Fechar solicitação de pull](/assets/images/help/pull_requests/pullrequest-closebutton.png)
4. Opcionalmente, [exclua o branch](/articles/deleting-unused-branches). Assim, a lista de branches do repositório ficará limpa.

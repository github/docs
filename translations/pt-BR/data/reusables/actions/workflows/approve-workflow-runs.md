---
ms.openlocfilehash: fec57b88af5ef5b7227d88a8c70e5a4b4bb9c769
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/14/2022
ms.locfileid: "148163808"
---
Os mantenedores com acesso de gravação a um repositório podem usar o seguinte procedimento para revisar e executar fluxos de trabalho em pull requests de colaboradores que exigem aprovação.

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %}
1. Inspecione as alterações propostas no pull request e certifique-se de que você esteja confortável em executar seus fluxos de trabalho no branch do pull request. Você deve ficar especialmente atento para todas as alterações propostas no diretório `.github/workflows/` que afetem arquivos de fluxo de trabalho.
1. Se você estiver familiarizado com a execução de fluxos de trabalho no branch de solicitação de pull, volte à guia {% octicon "comment-discussion" aria-label="The discussion icon" %} **Conversa** e, em "Fluxos de trabalho que aguardam aprovação", clique em **Aprovar e executar**.

   ![Aprovar e executar fluxos de trabalho](/assets/images/help/pull_requests/actions-approve-and-run-workflows-from-fork.png)
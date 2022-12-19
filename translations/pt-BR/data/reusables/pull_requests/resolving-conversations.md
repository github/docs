---
ms.openlocfilehash: 1447b6a0f63bcfd6e54954545541808debcb3091
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062367"
---
### Resolver conversas

É possível resolver uma conversa em um pull request se você abriu o pull request ou se você tem acesso de gravação ao repositório em que o pull request foi aberto.

Para indicar que uma conversa na guia **Arquivos alterados** foi concluída, clique em **Resolver conversa**.

![Conversa de pull request com o botão de Resolver conversa](/assets/images/help/pull_requests/conversation-with-resolve-button.png)

Toda a conversa será colapsada e marcada como resolvida, tornando mais fácil encontrar conversas que ainda precisam ser consideradas.

![Conversa resolvida](/assets/images/help/pull_requests/resolved-conversation.png)

Se a sugestão em um comentário estiver fora do escopo do seu pull request, você pode abrir um novo problema que rastreia os comentários e relaciona o comentário original. Para obter mais informações, confira "[Como abrir um problema por meio de um comentário](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)".

{% ifversion fpt or ghes or ghae-issue-4382 or ghec %}
#### Descobrindo e navegando por conversas

Você pode descobrir e procurar todas as conversas na sua solicitação de pull usando o menu **Conversas**, que é mostrado na parte superior da guia **Arquivos Alterados**.

Nesta visualização, você pode ver quais conversas não foram resolvidas, quais foram resolvidas e desatualizadas. Isso facilita a descoberta e a resolução de conversas.

![Como exibir o menu Conversas](/assets/images/help/pull_requests/conversations-menu.png) {% endif %}

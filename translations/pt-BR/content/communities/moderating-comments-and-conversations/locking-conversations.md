---
title: Bloquear conversas
intro: 'Proprietários e colaboradores de repositórios e pessoas com acesso de gravação em um repositório podem bloquear permanentemente ou temporariamente conversas sobre problemas, pull requests e commits para neutralizar uma interação acalorada.'
redirect_from:
  - /articles/locking-conversations
  - /github/building-a-strong-community/locking-conversations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 986d23cb4fe9850cb6c6824e9a3f2c256b6fd4e4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145084105'
---
É apropriado bloquear uma conversa quando toda a conversa não for construtiva ou violar o código de conduta da comunidade{% ifversion fpt or ghec %} ou as [Diretrizes da Comunidade do GitHub](/free-pro-team@latest/github/site-policy/github-community-guidelines){% endif %}. Quando você bloqueia uma conversa, você também pode especificar o motivo, que é visível publicamente.

Bloquear uma conversa cria um evento na linha do tempo visível a qualquer um com acesso de leitura ao repositório. No entanto, o nome de usuário da pessoa que bloqueou a conversa somente pode ser visualizado pelas pessoas com acesso de gravação ao repositório. Para qualquer pessoa sem acesso de gravação, o evento na linha do tempo é anônimo.

![Evento anônimo de linha do tempo de uma conversa bloqueada](/assets/images/help/issues/anonymized-timeline-entry-for-locked-conversation.png)

Enquanto uma conversa está bloqueada, somente [as pessoas com acesso de gravação](/articles/repository-permission-levels-for-an-organization/) e [os colaboradores e os proprietários do repositório](/articles/permission-levels-for-a-user-account-repository/#collaborator-access-for-a-repository-owned-by-a-personal-account) podem adicionar, ocultar e excluir comentários.

Para pesquisar as conversas bloqueadas em um repositório que não está arquivado, use os qualificadores de pesquisa `is:locked` e `archived:false`. As conversas são automaticamente bloqueadas em repositórios arquivados. Para obter mais informações, confira "[Como pesquisar problemas e solicitações de pull](/search-github/searching-on-github/searching-issues-and-pull-requests#search-based-on-whether-a-conversation-is-locked)".

1. Como opção, escreva um comentário explicando por que você está bloqueando a conversa.
2. Na margem direita do problema ou da solicitação de pull, ou acima da caixa de comentários na página de commit, clique em **Bloquear conversa**.
![Link Bloquear conversa](/assets/images/help/repository/lock-conversation.png)
3. Opcionalmente, selecione um motivo para bloquear a conversa.
![Menu Motivo para bloquear uma conversa](/assets/images/help/repository/locking-conversation-reason-menu.png)
4. Leia as informações sobre como bloquear conversas e clique em **Bloquear conversa sobre este problema**, **Bloquear conversa sobre esta solicitação de pull** ou **Bloquear conversa sobre este commit**.
![Caixa de diálogo Confirmar bloqueio com um motivo](/assets/images/help/repository/lock-conversation-confirm-with-reason.png)
5. Quando estiver pronto para desbloquear a conversa, clique em **Desbloquear conversa**.
![Link Desbloquear conversa](/assets/images/help/repository/unlock-conversation.png)

## Leitura adicional

- "[Como configurar seu projeto para contribuições úteis](/communities/setting-up-your-project-for-healthy-contributions)"
- "[Como usar modelos para incentivar problemas e solicitações de pull úteis](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)"
- "[Como gerenciar comentários ofensivos](/communities/moderating-comments-and-conversations/managing-disruptive-comments)"{% ifversion fpt or ghec %}
- "[Como manter sua segurança no {% data variables.product.prodname_dotcom %}](/communities/maintaining-your-safety-on-github)"
- "[Como denunciar abuso ou spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
- "[Como limitar as interações no seu repositório](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)" {% endif %}

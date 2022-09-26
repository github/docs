---
title: Bloquear usuários da organização
intro: Os proprietários e moderadores da organização podem impedir que qualquer pessoa que não seja membro da organização colabore nos repositórios da organização.
redirect_from:
  - /articles/blocking-a-user-from-your-organization
  - /github/building-a-strong-community/blocking-a-user-from-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Block from your org
ms.openlocfilehash: 3264bb71f157c2ec34f42b859857eed4253379f3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145084124'
---
Você pode bloquear não membros de dentro das configurações da sua organização ou de um comentário específico feito por um usuário. Ao bloquear um usuário em um comentário, você pode optar por enviar ao usuário uma notificação explicando que ele foi bloqueado e por quê. Caso contrário, o usuário não será diretamente notificado que você o bloqueou. Os usuários bloqueados ainda podem excluir o conteúdo existente.

Ao bloquear um usuário, você pode optar por bloqueá-lo indefinidamente ou por um período específico. Se você bloquear alguém por um período específico, ele será automaticamente desbloqueado após o término desse período. Se você bloquear alguém indefinidamente, será possível desbloqueá-lo manualmente a qualquer momento. Para obter mais informações, consulte "[Como bloquear um usuário da sua organização](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)".

{% tip %}

**Dica:** se você estiver bloqueando um usuário por causa de uma conversa acalorada, considere a possibilidade de bloquear a conversa para que apenas os colaboradores possam adicionar comentários a ela. Para obter mais informações, confira "[Como bloquear conversas](/communities/moderating-comments-and-conversations/locking-conversations)".

{% endtip %}

No momento que você bloqueia um usuário da organização:
- O usuário para de inspecionar os repositórios da sua organização
- As estrelas e atribuições de problema do usuário são removidas dos repositórios
- Os votos do usuário nas discussões ou comentários nos repositórios da sua organização são excluídos
- O usuário é removido como um colaborador dos repositórios da organização
- As contribuições do usuário para os repositórios da sua organização não são mais contabilizadas como contribuições para eles
- Quaisquer convites de repositório ou organização pendentes para o usuário bloqueado são cancelados

Depois que você bloqueia um usuário na sua organização, ele não pode:
- Fazer referência cruzada de repositórios da organização nos comentários
- Bifurque, inspecione, fixe ou favorite os repositórios da sua organização

Nos repositórios da sua organização, os usuários bloqueados também não podem:
- Criar problemas
- Envie, feche ou mescle pull requests
- Fazer comentários sobre problemas, pull request ou commits
- Adicionar nem editar páginas wiki

## Bloquear um usuário em um comentário

1. Navegue até o comentário cujo autor você deseja bloquear.
2. No canto superior direito do comentário, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e clique em **Bloquear usuário**.
![O ícone horizontal kebab e menu de moderação de comentários mostrando a opção bloquear usuário](/assets/images/help/repository/comment-menu-block-user.png)
3. Se quiser configurar um limite de tempo para o bloqueio, use o menu suspenso Block user (Bloquear usuário) e selecione o período pelo qual deseja bloquear o usuário.
![Limite de tempo de bloqueio no menu suspenso bloquear usuário](/assets/images/help/organizations/org-block-options-menu-from-comment.png)
4. Se quiser ocultar todos os comentários que o usuário fez na organização, selecione **Ocultar os comentários deste usuário** e escolha um motivo.
![Enviar uma notificação no menu suspenso bloquear usuário](/assets/images/help/organizations/org-block-options-menu-hide-user-comments.png)
5. Se quiser notificar o usuário sobre o motivo pelo qual ele está sendo bloqueado, selecione **Enviar uma notificação a este usuário**.
![Enviar uma notificação no menu suspenso bloquear usuário](/assets/images/help/organizations/org-block-options-menu-send-notification.png)
6. Para bloquear o usuário, clique em **Bloquear usuário da organização** ou **Bloquear usuário da organização e enviar mensagem**.
![Botão Bloquear usuário](/assets/images/help/organizations/org-block-user-button-in-comment.png)

## Bloquear um usuário nas configurações da organização

1. Para bloquear um membro da organização, primeiro [remova o usuário](/articles/removing-a-member-from-your-organization) da organização.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.block_users %}
6. Em "Block a user" (Bloquear um usuário), digite o nome de usuário que deseja bloquear.
![Campo Nome de usuário](/assets/images/help/organizations/org-block-username-field.png)
7. Se quiser configurar um limite de tempo para o bloqueio, use o menu suspenso Block options (Opções de bloqueio) e selecione o período pelo qual deseja bloquear o usuário.
![Menu suspenso Opções de bloqueio](/assets/images/help/organizations/org-block-options-menu.png)
8. Clique em **Bloquear usuário**.
![Botão Bloquear](/assets/images/help/organizations/org-block-user-button.png)

## Leitura adicional

- [/viewing-users-who-are-blocked-from-your-organization](/communities/maintaining-your-safety-on-github/viewing-users-who-are-blocked-from-your-organization)
- "[Como desbloquear um usuário da sua organização](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)"
- [/blocking-a-user-from-your-personal-account](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account)
- "[Como desbloquear um usuário da sua conta pessoal](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account)"
- "[Como denunciar abuso ou spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"

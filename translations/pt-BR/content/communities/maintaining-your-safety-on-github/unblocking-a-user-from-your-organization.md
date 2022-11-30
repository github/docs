---
title: Desbloquear usuários da organização
intro: 'Os proprietários e moderadores da organização podem desbloquear um usuário que foi bloqueado anteriormente, restaurando seu acesso aos repositórios da organização.'
redirect_from:
  - /articles/unblocking-a-user-from-your-organization
  - /github/building-a-strong-community/unblocking-a-user-from-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Unblock from your org
ms.openlocfilehash: 0c7099c21e3342717605f59a94e0025a7949b1cc
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145095214'
---
O desbloqueio de um usuário da organização permite que ele continue contribuindo para os repositórios da organização.

Se você tiver selecionado uma duração para o bloqueio do usuário, ele será automaticamente desbloqueado quando esse tempo acabar. Para obter mais informações, confira "[Como bloquear um usuário da sua organização](/articles/blocking-a-user-from-your-organization)".

{% tip %}

**Dica**: todas as configurações que foram removidas quando você bloqueou o usuário da sua organização, como status de colaborador, estrelas e inspeções, não serão restauradas quando você desbloquear o usuário.

{% endtip %}

## Desbloquear usuários em um comentário

1. Navegue até o comentário cujo autor você deseja desbloquear.
2. No canto superior direito do comentário, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e clique em **Desbloquear usuário**.
![Ícone de kebab horizontal e menu de moderação de comentários que mostra a opção Desbloquear usuário](/assets/images/help/repository/comment-menu-unblock-user.png)
3. Para confirmar se deseja desbloquear o usuário, clique em **OK**.

## Desbloquear usuários nas configurações da organização


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.block_users %}
1. Em "Usuários bloqueados", ao lado do usuário que você deseja desbloquear, clique em **Desbloquear**.
![Botão Desbloquear usuário](/assets/images/help/organizations/org-unblock-user-button.png)

## Leitura adicional

- "[Como bloquear um usuário da sua organização](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)"
- "[Como bloquear um usuário da sua conta pessoal](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account)"
- "[Como desbloquear um usuário da sua conta pessoal](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account)"
- "[Como denunciar abuso ou spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"

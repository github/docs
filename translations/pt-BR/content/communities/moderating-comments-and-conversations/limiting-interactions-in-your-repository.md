---
title: Restringir interações no repositório
intro: É possível aplicar temporariamente um período de atividades limitadas para certos usuários em um repositório público.
redirect_from:
  - /articles/limiting-interactions-with-your-repository
  - /articles/limiting-interactions-in-your-repository
  - /github/building-a-strong-community/limiting-interactions-in-your-repository
versions:
  fpt: '*'
  ghec: '*'
permissions: 'People with admin permissions to a repository, and organization moderators, can temporarily limit interactions in that repository.'
topics:
  - Community
shortTitle: Limit interactions in repo
ms.openlocfilehash: 0b49e1bfdf29be5dc270a453512701c9369c5933
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067247'
---
## Sobre limites temporários de interação

{% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} Após a duração do seu limite, os usuários podem retomar à atividade normal no seu repositório.

{% data reusables.community.types-of-interaction-limits %}

Você também pode habilitar limitações de atividade em todos os repositórios pertencentes à sua conta pessoal ou a uma organização. Se o limite de um usuário ou organização estiver habilitado, não será possível limitar a atividade para repositórios individuais pertencentes à conta. Para obter mais informações, confira "[Como limitar interações em sua conta pessoal](/communities/moderating-comments-and-conversations/limiting-interactions-for-your-personal-account)" e "[Como limitar interações na sua organização](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)".

## Restringir interações no repositório

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Na barra lateral, selecione **{% octicon "comment-discussion" aria-label="The comment-discussion icon" %} Opções de moderação** e clique em **Limites de interação**.
{% data reusables.community.set-interaction-limit %} ![Opções de limite de interação temporária](/assets/images/help/repository/temporary-interaction-limits-options.png)

## Leitura adicional
- "[Como denunciar abuso ou spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
- "[Como gerenciar o acesso de uma pessoa a um repositório da organização](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[Níveis de permissão para um repositório da conta pessoal](/articles/permission-levels-for-a-user-account-repository)"
- "[Funções de repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[Como gerenciar moderadores na sua organização](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)"

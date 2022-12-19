---
title: Restringir interações na organização
intro: É possível aplicar temporariamente um período de atividade limitada para determinados usuários em todos os repositórios públicos pertencentes à sua organização.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/limiting-interactions-in-your-organization
  - /articles/limiting-interactions-in-your-organization
  - /github/building-a-strong-community/limiting-interactions-in-your-organization
versions:
  fpt: '*'
  ghec: '*'
permissions: Organization owners and moderators can limit interactions in an organization.
topics:
  - Community
shortTitle: Limit interactions in org
ms.openlocfilehash: 03bfad7a0da3386b6205517deb66e6b923de8386
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066679'
---
## Sobre limites temporários de interação

O limite de interações na organização habilita limites de interação temporária para todos os repositórios públicos pertencentes à organização. {% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} Após a duração do seu limite passar, os usuários podem retomar a atividade normal nos repositórios públicos da sua organização.

{% data reusables.community.types-of-interaction-limits %}

Os integrantes da organização não são afetados por nenhum dos tipos de limite.

Quando você habilita restrições de atividades para toda a organização, você não pode habilitar ou desabilitar restrições de interação em repositórios individuais. Para obter mais informações sobre como limitar a atividade de um repositório individual, confira "[Como limitar as interações no seu repositório](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)".

Os proprietários e os moderadores da organização também podem bloquear os usuários por um período específico. Após o término do bloqueio, o usuário é automaticamente desbloqueado. Para obter mais informações, confira "[Como bloquear um usuário da sua organização](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)".

## Restringir interações na organização


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. _Para os proprietários da organização:_ Na seção "Acesso" da barra lateral, selecione **{% octicon "report" aria-label="The report icon" %} Moderação** e clique em **Limites de interação**.

   _Para os moderadores da organização:_ na barra lateral, clique em **Limites de interação**.

{% data reusables.community.set-interaction-limit %} ![Opções de limite de interação temporária](/assets/images/help/organizations/organization-temporary-interaction-limits-options.png)

## Leitura adicional
- "[Como denunciar abuso ou spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
- "[Como gerenciar o acesso de uma pessoa a um repositório da organização](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[Níveis de permissão para um repositório da conta pessoal](/articles/permission-levels-for-a-user-account-repository)"
- "[Funções de repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[Como gerenciar moderadores na sua organização](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)"

---
title: Remover um colaborador externo em integrante da organização
intro: Se você quiser dar permissões mais amplas a um colaborador externo nos repositórios da organização, {% ifversion fpt or ghec %}convide-o a se tornar membro{% else %}torne-o membro{% endif %} da organização.
redirect_from:
- /articles/converting-an-outside-collaborator-to-an-organization-member
- /github/setting-up-and-managing-organizations-and-teams/converting-an-outside-collaborator-to-an-organization-member
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: Organization owners can {% ifversion fpt or ghec %}invite users to join{% else %}add users to{% endif %} an organization.
topics:
- Organizations
- Teams
shortTitle: Convert collaborator to member
ms.openlocfilehash: bac55802407b46344c807798e4d8eade5f608e01
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145126458"
---
{% ifversion fpt or ghec %} Se a sua organização estiver usando uma assinatura paga por usuário, uma licença não utilizada precisará estar disponível para que você possa convidar um novo membro para ingressar na organização ou restabelecer um ex-membro da organização. Para obter mais informações, confira "[Sobre os preços por usuário](/articles/about-per-user-pricing)". {% data reusables.organizations.org-invite-expiration %}{% endif %}

{% ifversion not ghae %} Se a sua organização [exigir que os membros usem a autenticação de dois fatores](/articles/requiring-two-factor-authentication-in-your-organization), os usuários {% ifversion fpt or ghec %}que você convidar precisam [habilitar a autenticação de dois fatores](/articles/securing-your-account-with-two-factor-authentication-2fa) para que possam aceitar o convite.{% else %}precisam [habilitar a autenticação de dois fatores para que você os adicione](/articles/securing-your-account-with-two-factor-authentication-2fa) à organização.{% endif %} {% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people_tab_outside_collaborators %} {% ifversion fpt or ghec %}
5. À direita do nome do colaborador externo que você deseja tornar membro, use o menu suspenso {% octicon "gear" aria-label="The gear icon" %} e clique em **Convidar para a organização**.![Convidar colaboradores externos para a organização](/assets/images/help/organizations/invite_outside_collaborator_to_organization.png) {% else %}
5. À direita do nome do colaborador externo que você deseja tornar membro, clique em **Convidar para a organização**.![Convidar colaboradores externos para a organização](/assets/images/enterprise/orgs-and-teams/invite_outside_collabs_to_org.png) {% endif %} {% data reusables.organizations.choose-to-restore-privileges %} {% data reusables.organizations.choose-user-role-send-invitation %} {% ifversion fpt or ghec %} {% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %} {% endif %}

## Leitura adicional

- "[Como converter um membro da organização em um colaborador externo](/articles/converting-an-organization-member-to-an-outside-collaborator)"

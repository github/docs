---
title: Melhores práticas para organizações
shortTitle: Best practices
intro: 'Conheça as melhores práticas do {% data variables.product.prodname_dotcom %} para sua organização.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 015c74d7a69a1feb5c8ff9467a4219753f2cb5eb
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163423'
---
## Atribuir vários proprietários

{% data reusables.organizations.org-ownership-recommendation %} Para obter mais informações, confira "[Como manter a continuidade da propriedade para sua organização](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization)".

## Usar equipes

Recomenda-se o uso de equipes para facilitar a colaboração na organização. Para obter mais informações, confira "[Sobre as equipes](/organizations/organizing-members-into-teams/about-teams)".

{% ifversion ghec %} É altamente recomendável gerenciar a associação a equipes por meio do IdP (provedor de identidade). Para obter mais informações, confira "[Como gerenciar a sincronização da equipe para sua organização](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)".

{% data reusables.enterprise-accounts.emu-scim-note %} {% endif %}

Recomenda-se manter as equipes visíveis sempre que possível e reservar equipes secretas para situações confidenciais. Para obter mais informações, confira "[Como alterar a visibilidade da equipe](/organizations/organizing-members-into-teams/changing-team-visibility)".

{% ifversion ghec or ghes or ghae %}
## Uso da visão geral de segurança

{% data reusables.security-overview.about-the-security-overview %} Para saber mais, confira “[Sobre a visão geral de segurança](/code-security/security-overview/about-the-security-overview)”.
{% endif %}

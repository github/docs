---
title: Sobre o perfil da sua organização
intro: A página de perfil da sua organização mostra informações básicas sobre a sua organização.
redirect_from:
  - /articles/about-your-organization-s-profile
  - /articles/about-your-organizations-profile
  - /github/setting-up-and-managing-your-github-profile/about-your-organizations-profile
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Organization's profile
ms.openlocfilehash: a42d5393de00e57f0b642c89a349da86b4ad55f1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107820'
---
Você pode optar por adicionar uma descrição, um local, um site e um endereço de email para a organização e fixar repositórios importantes.{% ifversion fpt or ghec or ghes > 3.3 %} Você pode personalizar o perfil público da organização adicionando um arquivo LEIAME.md. Para obter mais informações, confira "[Como personalizar o perfil da sua organização](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile)".{% endif %}

{% ifversion fpt %} As organizações que usam o {% data variables.product.prodname_ghe_cloud %} podem confirmar a identidade de sua organização e exibir um selo "Verificado" na página de perfil de sua organização verificando os domínios da organização com o {% data variables.product.product_name %}. Para obter mais informações, confira "[Verificar ou aprovar um domínio para sua organização](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)" na documentação do {% data variables.product.prodname_ghe_cloud %}.
{% elsif ghec or ghes %} Para confirmar a identidade da organização e exibir um selo "Verificado" na página de perfil da organização, você pode verificar os domínios da organização com o {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira "[Como verificar ou aprovar um domínio para sua organização](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)".
{% endif %}

{% ifversion fpt or ghes or ghec %} ![Página do exemplo de perfil da organização](/assets/images/help/organizations/org_profile_with_overview.png) {% else %} ![Página do exemplo de perfil da organização](/assets/images/help/profile/org_profile.png) {% endif %}

## Leitura adicional

- "[Sobre as organizações](/organizations/collaborating-with-groups-in-organizations/about-organizations)"

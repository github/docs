---
title: Acerca del perfil de tu organización
intro: La página del perfil de tu organización muestra la información básica acerca de tu organización.
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
ms.openlocfilehash: d5500e34a9996f8d5cae216972ef0289569d53f2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066518'
---
Opcionalmente, puedes elegir agregar una descripción, ubicación, sitio web y dirección de correo electrónico para la organización y anclar repositorios importantes {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4749 %} Puedes personalizar el perfil público de la organización si agregas un archivo README.md. Para más información, vea "[Personalización del perfil de la organización](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile)".{% endif %}

{% ifversion fpt %} Las organizaciones que usan {% data variables.product.prodname_ghe_cloud %} pueden confirmar la identidad de su organización y mostrar un distintivo "Verificado" en la página de perfil de su organización comprobando los dominios de la organización con {% data variables.product.product_name %}. Para obtener más información, consulta "[Comprobación o aprobación de un dominio para su organización](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)" en la documentación de {% data variables.product.prodname_ghe_cloud %}.
{% elsif ghec or ghes %} Para confirmar la identidad de la organización y mostrar un distintivo "Verificado" en la página del perfil de la organización, puedes comprobar los dominios de la organización con {% data variables.product.prodname_dotcom %}. Para más información, vea "[Comprobación o aprobación de un dominio para la organización](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)".
{% endif %}

{% ifversion fpt or ghes > 3.2 or ghec %} ![Página de perfil de organización de ejemplo](/assets/images/help/organizations/org_profile_with_overview.png) {% else %} ![Sample organization profile page](/assets/images/help/profile/org_profile.png) {% endif %}

## Información adicional

- "[Acerca de las organizaciones](/organizations/collaborating-with-groups-in-organizations/about-organizations)"

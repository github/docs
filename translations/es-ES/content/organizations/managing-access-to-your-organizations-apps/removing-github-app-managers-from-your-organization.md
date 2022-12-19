---
title: Eliminar administradores de App GitHub de tu organización
intro: Los propietarios de la organización pueden revocar los permisos de administrador {% data variables.product.prodname_github_app %} que se le hayan concedido a un miembro de la organización.
redirect_from:
- /articles/removing-github-app-managers-from-your-organization
- /github/setting-up-and-managing-organizations-and-teams/removing-github-app-managers-from-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Remove GitHub App managers
ms.openlocfilehash: c7dc813294a1fdd7e928a4212af30efa1182fd3d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145135067"
---
Para más información sobre los permisos de administrador de {% data variables.product.prodname_github_app %}, vea "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#github-app-managers)".

## Eliminar los {% data variables.product.prodname_github_app %} permisos de un administrador para toda la organización

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.github-apps-settings-sidebar %}
1. En "Administración", busque el nombre de usuario de la persona de la que quiera eliminar los permisos de administrador de {% data variables.product.prodname_github_app %} y, después, haga clic en **Revocar**.
![Revocar permisos de administrador de {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/github-app-manager-revoke-permissions.png)

## Eliminar los {% data variables.product.prodname_github_app %} permisos de administrador para una persona {% data variables.product.prodname_github_app %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.github-apps-settings-sidebar %}
1. Debajo de "{% data variables.product.prodname_github_apps %}s", haz clic en el avatar de la app de la que quieres eliminar un administrador de {% data variables.product.prodname_github_app %}.
![Seleccione {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/select-github-app.png) {% data reusables.organizations.app-managers-settings-sidebar %}
1. En "Administradores de aplicaciones", busque el nombre de usuario de la persona para la que quiera eliminar los permisos de administrador de {% data variables.product.prodname_github_app %} y, después, haga clic en **Revocar**.
![Revocar permisos de administrador de {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/github-app-manager-revoke-permissions-individual-app.png)

{% ifversion fpt or ghec %}
## Información adicional

- "[Acerca de {% data variables.product.prodname_dotcom %} Marketplace](/articles/about-github-marketplace/)" {% endif %}

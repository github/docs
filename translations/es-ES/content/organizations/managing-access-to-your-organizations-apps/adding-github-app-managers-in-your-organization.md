---
title: Agregar administradores de App GitHub a tu organización
intro: Los propietarios de la organización pueden conceder a los usuarios la capacidad para administrar alguna o todas las {% data variables.product.prodname_github_apps %} que le pertenecen a la organización.
redirect_from:
- /articles/adding-github-app-managers-in-your-organization
- /github/setting-up-and-managing-organizations-and-teams/adding-github-app-managers-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Add GitHub App managers
ms.openlocfilehash: d8389c85c847b750bdb83eb8b922ad16bfa33bf3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145135073"
---
Para obtener más información sobre los permisos de administrador de {% data variables.product.prodname_github_app %}, consulte "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#github-app-managers)".

## Brindar a alguien la posibilidad de administrar todas las {% data variables.product.prodname_github_apps %} que son propiedad de la organización

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.github-apps-settings-sidebar %}
1. En "Management", escriba el nombre de usuario de la persona a quien desea designar como administrador de {% data variables.product.prodname_github_app %} en la organización y haga clic en **Grant**.
![Agregar un administrador de {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/add-github-app-manager.png)

## Brindar a alguien la posibilidad de administrar un {% data variables.product.prodname_github_app %} individual

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.github-apps-settings-sidebar %}
1. Debajo de "{% data variables.product.prodname_github_apps %}s", haz clic en el avatar de la app a la que quieres agregar un administrador de {% data variables.product.prodname_github_app %}.
![Seleccione {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/select-github-app.png) {% data reusables.organizations.app-managers-settings-sidebar %}
1. En "App managers", escriba el nombre de usuario de la persona a quien desea designar como administrador de la aplicación de GitHub para la aplicación y haga clic en **Grant**.
![Agregar un administrador de {% data variables.product.prodname_github_app %} para una aplicación específica](/assets/images/help/organizations/add-github-app-manager-for-app.png)

{% ifversion fpt or ghec %}
## Información adicional

- "[Acerca de {% data variables.product.prodname_dotcom %} Marketplace](/articles/about-github-marketplace/)" {% endif %}

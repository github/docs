---
title: Revisar las integraciones instaladas de tu organización
intro: Puedes revisar los niveles de permiso para las integraciones instaladas de tu organización y configurar cada accedo de integración a los repositorios de la organización.
redirect_from:
- /articles/reviewing-your-organization-s-installed-integrations
- /articles/reviewing-your-organizations-installed-integrations
- /github/setting-up-and-managing-organizations-and-teams/reviewing-your-organizations-installed-integrations
- /organizations/keeping-your-organization-secure/reviewing-your-organizations-installed-integrations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Review installed integrations
ms.openlocfilehash: 66645e6ebb4305a34cd7735269d77881ea2ed5ee
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145135115"
---
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. En la sección "Integrations" de la barra lateral, haga clic en **{% octicon "apps" aria-label="The apps icon" %} {% data variables.product.prodname_github_apps %}** .
{% else %}
1. En la barra lateral de la izquierda, haga clic en **Installed {% data variables.product.prodname_github_apps %}** .
  ![Pestaña de Installed {% data variables.product.prodname_github_apps %} en la barra lateral de configuración de la organización](/assets/images/help/organizations/org-settings-installed-github-apps.png) {% endif %}
2. Junto a la {% data variables.product.prodname_github_app %} que desee revisar, haga clic en **Configure**.
  ![Botón Configurar](/assets/images/help/organizations/configure-installed-integration-button.png)
6. Revisar los permisos de {% data variables.product.prodname_github_app %} y el acceso al repositorio.
  ![Opción para darle acceso a {% data variables.product.prodname_github_app %} a todos los repositorios o a repositorios específicos](/assets/images/help/organizations/toggle-integration-repo-access.png)
    - Para darle acceso a la {% data variables.product.prodname_github_app %} a todos los repositorios de la organización, seleccione **All repositories**.
    - Para elegir repositorios específicos para darle acceso a la aplicación, seleccione **Only select repositories** y, a continuación, escriba el nombre de un repositorio.
7. Haga clic en **Save**(Guardar).

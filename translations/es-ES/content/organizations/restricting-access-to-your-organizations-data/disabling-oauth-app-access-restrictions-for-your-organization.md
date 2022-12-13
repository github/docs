---
title: Inhabilitar las restricciones de acceso de las App OAuth para tu organización
intro: Los propietarios de la organización pueden inhabilitar las restricciones de las {% data variables.product.prodname_oauth_apps %} que tienen acceso a los recursos de la organización.
redirect_from:
- /articles/disabling-third-party-application-restrictions-for-your-organization
- /articles/disabling-oauth-app-access-restrictions-for-your-organization
- /github/setting-up-and-managing-organizations-and-teams/disabling-oauth-app-access-restrictions-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Disable OAuth App
ms.openlocfilehash: 41fae63d8d491eec7a6cd6a275958d5c96fb5f5c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145140597"
---
{% danger %}

**Advertencia**: Cuando inhabilita las restricciones de acceso de {% data variables.product.prodname_oauth_app %} para su organización, cualquier miembro de la organización autorizará automáticamente el acceso de {% data variables.product.prodname_oauth_app %} a los recursos privados de la organización cuando aprueben una aplicación para el uso en los parámetros de su cuenta personal.

{% enddanger %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.oauth_app_access %}
5. Haga clic en **Remove restrictions** (Eliminar restricciones).
  ![Botón para eliminar restricciones](/assets/images/help/settings/settings-third-party-remove-restrictions.png)
6. Revise la información acerca de la inhabilitación de las restricciones de las aplicaciones de terceros y luego haga clic en **Yes, remove application restrictions** (Sí, eliminar las restricciones de las aplicaciones).
  ![Botón para confirmar la eliminación](/assets/images/help/settings/settings-third-party-confirm-disable.png)

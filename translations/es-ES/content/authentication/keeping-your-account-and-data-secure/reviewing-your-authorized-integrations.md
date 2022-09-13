---
title: Revisar tus integraciones autorizadas
intro: Puedes revisar tus integraciones autorizadas para auditar el acceso que cada integración tiene a tu cuenta y a tus datos.
redirect_from:
  - /articles/reviewing-your-authorized-integrations
  - /github/authenticating-to-github/reviewing-your-authorized-integrations
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Authorized integrations
ms.openlocfilehash: ec67e7b18b4ad898cd53b4773b299d90bc3dc9e5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145091811'
---
## Revisar tus {% data variables.product.prodname_oauth_apps %} autorizadas

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.access_applications %} {% data reusables.user-settings.access_authorized_oauth_apps %} {% data reusables.user-settings.review-oauth-apps %}

## Revisar tus {% data variables.product.prodname_github_apps %} autorizadas

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.access_applications %}
3. Haga clic en la pestaña **Authorized {% data variables.product.prodname_github_apps %}** . Pestaña ![Authorized {% data variables.product.prodname_github_apps %}](/assets/images/help/settings/settings-authorized-github-apps-tab.png)
3. Revisa las {% data variables.product.prodname_github_apps %}s que tienen acceso a tu cuenta. Revoque las que no reconozca o hayan quedado obsoletas haciendo clic en **Revoke**. Para revocar todas las {% data variables.product.prodname_github_apps %}, haga clic en **Revoke all**.
   ![Lista de {% data variables.product.prodname_github_app %} autorizadas](/assets/images/help/settings/revoke-github-app.png)

## Lecturas adicionales
{% ifversion fpt or ghec %}
- "[Acerca de las integraciones](/articles/about-integrations)"{% endif %}
- "[Revisar las aplicaciones autorizadas (OAuth)](/articles/reviewing-your-authorized-applications-oauth)"

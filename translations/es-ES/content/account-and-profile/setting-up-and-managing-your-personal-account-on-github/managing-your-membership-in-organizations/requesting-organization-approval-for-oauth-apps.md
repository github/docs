---
title: Solicitar aprobación de la organización para OAuth Apps
intro: 'Los miembros de la organización y los colaboradores externos pueden solicitar que un propietario apruebe el acceso a los recursos de la organización para {% data variables.product.prodname_oauth_apps %}.'
redirect_from:
  - /articles/requesting-organization-approval-for-third-party-applications
  - /articles/requesting-organization-approval-for-your-authorized-applications
  - /articles/requesting-organization-approval-for-oauth-apps
  - /github/setting-up-and-managing-your-github-user-account/requesting-organization-approval-for-oauth-apps
  - /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Request OAuth App approval
ms.openlocfilehash: affc908d710811563e49bfee6a4e2e906750bf4b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148009695'
---
## Acerca de la solicitud de aprobación de la organización para una {% data variables.product.prodname_oauth_app %}

Los miembros de la organización siempre pueden solicitar la aprobación del propietario de las {% data variables.product.prodname_oauth_apps %} que les gustaría usar, y los propietarios de la organización reciben una notificación de las solicitudes pendientes.{% ifversion limit-app-access-requests %} Los colaboradores externos pueden solicitar la aprobación del propietario de las {% data variables.product.prodname_oauth_apps %} que les gustaría usar si las solicitudes de acceso de integración están habilitadas. Para obtener más información, consulta ["Limitación de solicitudes de acceso a aplicaciones de OAuth y aplicaciones de GitHub](/organizations/managing-organization-settings/limiting-oauth-app-and-github-app-access-requests)".{% endif %}

## Solicitar aprobación de la organización para una {% data variables.product.prodname_oauth_app %} que ya has autorizado para tu cuenta personal

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.access_applications %} {% data reusables.user-settings.access_authorized_oauth_apps %}
3. En la lista de aplicaciones, haz clic en el nombre de la {% data variables.product.prodname_oauth_app %} para la que quieres solicitar acceso.
![Botón para ver la aplicación](/assets/images/help/settings/settings-third-party-view-app.png)
4. Junto a la organización a la que quiera que acceda {% data variables.product.prodname_oauth_app %}, haga clic en **Request access**.
![Botón de solicitud de acceso](/assets/images/help/settings/settings-third-party-request-access.png)
5. Después de revisar la información sobre la solicitud de acceso a {% data variables.product.prodname_oauth_app %}, haga clic en **Request approval from owners**.
![Botón de solicitud de aprobación](/assets/images/help/settings/oauth-access-request-approval.png)

## Información adicional

- "[Acerca de las restricciones de acceso a {% data variables.product.prodname_oauth_app %}](/articles/about-oauth-app-access-restrictions)"

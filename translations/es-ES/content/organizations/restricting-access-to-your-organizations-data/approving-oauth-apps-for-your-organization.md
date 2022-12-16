---
title: Aprobar aplicaciones OAuth para tu organización
intro: Cuando un miembro de la organización solicita a {% data variables.product.prodname_oauth_app %} que acceda a los recursos de la organización, los propietarios de la organización pueden aprobar o rechazar la solicitud.
redirect_from:
- /articles/approving-third-party-applications-for-your-organization
- /articles/approving-oauth-apps-for-your-organization
- /github/setting-up-and-managing-organizations-and-teams/approving-oauth-apps-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Approve OAuth Apps
ms.openlocfilehash: b4f8f81b9ad773af86c7e2b488459d8865de3a49
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145140605"
---
Cuando se habilitan las restricciones de acceso de {% data variables.product.prodname_oauth_app %}, los miembros de la organización deben [solicitar la aprobación](/articles/requesting-organization-approval-for-oauth-apps) de un propietario de la organización para poder autorizar una instancia de {% data variables.product.prodname_oauth_app %} que tenga acceso a los recursos de la organización.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.oauth_app_access %}
5. Junto a la aplicación que quiera aprobar, haga clic en **Revisar**.
![Vínculo Revisar solicitud](/assets/images/help/settings/settings-third-party-approve-review.png)
6. Después de revisar la información sobre la aplicación solicitada, haga clic en **Conceder acceso**.
![Botón Conceder acceso](/assets/images/help/settings/settings-third-party-approve-grant.png)

## Información adicional

- "[Acerca de las restricciones de acceso a {% data variables.product.prodname_oauth_app %}](/articles/about-oauth-app-access-restrictions)"

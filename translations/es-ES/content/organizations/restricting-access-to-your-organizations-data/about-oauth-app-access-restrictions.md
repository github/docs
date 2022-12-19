---
title: Acerca de las restricciones de acceso a App OAuth
intro: Las organizaciones pueden elegir qué {% data variables.product.prodname_oauth_apps %} tienen acceso a sus repositorios y otros recursos al activar las restricciones de acceso a {% data variables.product.prodname_oauth_app %}.
redirect_from:
- /articles/about-third-party-application-restrictions
- /articles/about-oauth-app-access-restrictions
- /github/setting-up-and-managing-organizations-and-teams/about-oauth-app-access-restrictions
versions:
  fpt: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: OAuth App access
ms.openlocfilehash: 43e12066ec9381a94fe45187d066300479aa495e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145140618"
---
## Acerca de las restricciones de acceso a App OAuth

Cuando las restricciones de acceso a {% data variables.product.prodname_oauth_app %} están activadas, los miembros de la organización no pueden autorizar el acceso de {% data variables.product.prodname_oauth_app %} a los recursos de la organización. Los miembros de la organización pueden solicitar la aprobación de los propietarios para las {% data variables.product.prodname_oauth_apps %} que quieran usar y los propietarios de la organización reciben una notificación de solicitudes pendientes.

{% data reusables.organizations.oauth_app_restrictions_default %}

{% tip %}

**Sugerencia**: Cuando una organización no ha configurado las restricciones de acceso a {% data variables.product.prodname_oauth_app %}, cualquier {% data variables.product.prodname_oauth_app %} autorizada por un miembro de la organización también puede acceder a los recursos privados de la organización.

{% endtip %}

{% ifversion fpt %} Para proteger aún más los recursos de la organización, puede actualizar a {% data variables.product.prodname_ghe_cloud %}, que incluye características de seguridad como el inicio de sesión único de SAML. {% data reusables.enterprise.link-to-ghec-trial %} {% endif %}

## Configurar las restricciones de acceso a {% data variables.product.prodname_oauth_app %}

Cuando el propietario de una organización configura las restricciones de acceso a {% data variables.product.prodname_oauth_app %} por primera vez:

- A las **aplicaciones que son propiedad de la organización** se les concede acceso automático a los recursos de la organización.
- **{% data variables.product.prodname_oauth_apps %}** pierden inmediatamente el acceso a los recursos de la organización.
- Las **claves SSH creadas antes de febrero de 2014** pierden inmediatamente el acceso a los recursos de la organización (lo que incluye claves de implementación y usuarios).
- Las **claves SSH creadas por {% data variables.product.prodname_oauth_apps %} durante o después de febrero de 2014** han perdido inmediatamente el acceso a los recursos de la organización.
- Las **entregas de enlace de los repositorios privados de una organización** ya no enviarán a {% data variables.product.prodname_oauth_apps %} no aprobadas.
- El **acceso de API** a los recursos privados de la organización no está disponible para las {% data variables.product.prodname_oauth_apps %} no aprobadas. Además, no hay acciones de creación, actualización ni eliminación privilegiadas en los recursos públicos de la organización.
- Los **enlaces creados por los usuarios y los creados antes de mayo de 2014** no se verán afectados.
- Las **bifurcaciones privadas de repositorios propiedad de una organización** están sujetas a las restricciones de acceso de la organización.

## Resolver las fallas de acceso a SSH

Cuando una clave SSH creada antes de febrero de 2014 pierde acceso a una organización con las restricciones de acceso a {% data variables.product.prodname_oauth_app %} activadas, los subsiguientes intentos de acceso a SSH fallarán. Los usuarios se encontrarán con un mensaje de error que los redirecciona a una URL donde pueden aprobar la clave o cargar una clave de confianza en su lugar.

## webhooks

Cuando se le otorga acceso a la organización a una {% data variables.product.prodname_oauth_app %} una vez que las restricciones están activadas, cualquier webhook preexistente creado por esa {% data variables.product.prodname_oauth_app %} retomará el despacho.

Cuando una organización elimina el acceso de una {% data variables.product.prodname_oauth_app %} previamente aprobada, cualquier webhook preexistente creado por esa aplicación ya no será despachado (estos enlaces de desactivarán, pero no se eliminarán).

## Volver a activar las restricciones de acceso

Si una organización desactiva las restricciones de aplicación de acceso de {% data variables.product.prodname_oauth_app %}, y más tarde las vuelve a activar, automáticamente se le otorga acceso a los recursos de la organización a la {% data variables.product.prodname_oauth_app %} previamente aprobada .

## Información adicional

- "[Habilitación de restricciones de acceso a {% data variables.product.prodname_oauth_app %} para la organización](/articles/enabling-oauth-app-access-restrictions-for-your-organization)"
- "[Aprobación de {% data variables.product.prodname_oauth_apps %} para la organización](/articles/approving-oauth-apps-for-your-organization)"
- "[Revisión de las integraciones instaladas de la organización](/articles/reviewing-your-organization-s-installed-integrations)"
- "[Negación del acceso a una {% data variables.product.prodname_oauth_app %} aprobada previamente para la organización](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization)"
- "[Deshabilitación de restricciones de acceso a {% data variables.product.prodname_oauth_app %} para la organización](/articles/disabling-oauth-app-access-restrictions-for-your-organization)"
- "[Solicitud de aprobación de la organización para {% data variables.product.prodname_oauth_apps %}](/articles/requesting-organization-approval-for-oauth-apps)"
- "[Autorización de {% data variables.product.prodname_oauth_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)"

---
title: Acerca de SCIM para las organizaciones
intro: 'Con Sistema para la administración de identidades entre dominios (SCIM), los administradores pueden automatizar el intercambio de información de identidad del usuario entre los sistemas.'
redirect_from:
  - /articles/about-scim
  - /github/setting-up-and-managing-organizations-and-teams/about-scim
  - /organizations/managing-saml-single-sign-on-for-your-organization/about-scim
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 8071909478d52770f2e8107df31e61b7111f73c6
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145069623'
---
## Acerca de SCIM para las organizaciones

Si tu organización usa el [inicio de sesión único de SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on), puedes implementar SCIM para agregar, administrar y quitar el acceso de los miembros de la organización a {% data variables.product.product_name %}. Por ejemplo, un administrador puede desaprovisionar a un miembro de la organización usando el SCIM y eliminar automáticamente el miembro de la organización.

{% data reusables.saml.ghec-only %}

{% data reusables.scim.enterprise-account-scim %}

Si usa el inicio de sesión único de SAML sin implementar SCIM, no podrá usar el desaprovisionamiento automático. Cuando las sesiones de los miembros de una organización expiran después de quitar su acceso del IdP, los miembros no se quitan automáticamente de la organización. Los tokens autorizados conceden acceso a la organización incluso después de que expiren sus sesiones. Si no se usa SCIM, para quitar el acceso de un miembro por completo, un propietario de la organización debe quitar el acceso del miembro en el IdP y quitar el miembro de la organización en {% data variables.product.prodname_dotcom %} de forma manual.

{% data reusables.scim.changes-should-come-from-idp %}

## Proveedores de identidad compatibles

Estos proveedores de identidades (IdP) son compatibles con la API de SCIM de {% data variables.product.product_name %} para las organizaciones. Para más información, vea [SCIM](/rest/scim) en la documentación de la API de {% ifversion ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}.
- Azure AD
- Okta
- OneLogin

## Acerca de la configuración de SCIM para las organizaciones

{% data reusables.scim.dedicated-configuration-account %}

Para poder autorizar la {% data variables.product.prodname_oauth_app %}, debes tener una sesión de SAML activa. Para más información, vea "[Acerca de la autenticación con el inicio de sesión único de SAML](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso)".

{% note %}

**Nota:** {% data reusables.scim.nameid-and-username-must-match %}

{% endnote %} 

## Información adicional

- "[Visualización y administración del acceso SAML de un miembro a la organización](/github/setting-up-and-managing-organizations-and-teams//viewing-and-managing-a-members-saml-access-to-your-organization)"

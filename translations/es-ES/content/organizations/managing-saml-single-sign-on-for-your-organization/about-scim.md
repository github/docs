---
title: Acerca de SCIM
intro: 'Con Sistema para la administración de identidades entre dominios (SCIM), los administradores pueden automatizar el intercambio de información de identidad del usuario entre los sistemas.'
redirect_from:
  - /articles/about-scim
  - /github/setting-up-and-managing-organizations-and-teams/about-scim
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
---

{% data reusables.enterprise-accounts.emu-scim-note %}

Si usas [SAML SSO](/articles/about-identity-and-access-management-with-saml-single-sign-on) en tu organización, puedes implementar SCIM para agregar, administrar y eliminar el acceso de los miembros de la organización a {% data variables.product.product_name %}. Por ejemplo, un administrador puede desaprovisionar a un miembro de la organización usando el SCIM y eliminar automáticamente el miembro de la organización.

Si usas SAML SSO sin implementar SCIM, no tendrás un desaprovisionamiento automático. Cuando las sesiones de los miembros de la organización expiran una vez que su acceso ha sido eliminado del IdP, no se eliminan automáticamente de la organización. Los tokens autorizados otorgan acceso a la organización incluso una vez que las sesiones han expirado. Para eliminar el acceso, los administradores de la organización pueden eliminar de forma manual el token autorizado de la organización o automatizar su eliminación con SCIM.

Estos proveedores de identidad son compatibles con la API de SCIM de {% data variables.product.product_name %} para organizaciones. Para obtener más información, consulta el [SCIM](/rest/reference/scim) en la documentación de la API de {% ifversion ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}.
- Azure AD
- Okta
- OneLogin

{% note %}

**Nota:**{% data reusables.scim.nameid-and-username-must-match %}

{% endnote %}

{% data reusables.scim.changes-should-come-from-idp %}

{% data reusables.scim.enterprise-account-scim %}

## Leer más

- "[Visualizar y administrar un acceso de SAML de un miembro a tu organización](/github/setting-up-and-managing-organizations-and-teams//viewing-and-managing-a-members-saml-access-to-your-organization)"

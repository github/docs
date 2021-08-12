---
title: Acerca de SCIM
intro: 'Con Sistema para la administración de identidades entre dominios (SCIM), los administradores pueden automatizar el intercambio de información de identidad del usuario entre los sistemas.'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/about-scim
  - /github/setting-up-and-managing-organizations-and-teams/about-scim
versions:
  free-pro-team: '*'
topics:
  - Organizations
  - Teams
---

Si usas [SAML SSO](/articles/about-identity-and-access-management-with-saml-single-sign-on) en tu organización, puedes implementar SCIM para agregar, administrar y eliminar el acceso de los miembros de la organización a {% data variables.product.product_name %}. Por ejemplo, un administrador puede desaprovisionar a un miembro de la organización usando el SCIM y eliminar automáticamente el miembro de la organización.

Si usas SAML SSO sin implementar SCIM, no tendrás un desaprovisionamiento automático. Cuando las sesiones de los miembros de la organización expiran una vez que su acceso ha sido eliminado del IdP, no se eliminan automáticamente de la organización. Los tokens autorizados otorgan acceso a la organización incluso una vez que las sesiones han expirado. Para eliminar el acceso, los administradores de la organización pueden eliminar de forma manual el token autorizado de la organización o automatizar su eliminación con SCIM.

Estos proveedores de identidad son compatibles con la API de SCIM de {% data variables.product.product_name %} para organizaciones. Para obtener más información, consulta [SCIM](/rest/reference/scim) en la documentación de {% data variables.product.product_name %} API.
- Azure AD
- Okta
- OneLogin

{% data reusables.scim.enterprise-account-scim %} Para obtener más información, consulta la sección "[Acerca de el aprovisionamiento de usuarios en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account)".

### Leer más

- "[Acerca de la administración de identidad y el acceso con el inicio de sesión único de SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
- "[Conectar tu proveedor de identidad a tu organización](/articles/connecting-your-identity-provider-to-your-organization)"
- "[Activar y probar el inicio de sesión único de SAML para tu organización](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)"
- "[Visualizar y administrar un acceso de SAML de un miembro a tu organización](/github/setting-up-and-managing-organizations-and-teams//viewing-and-managing-a-members-saml-access-to-your-organization)"

---
title: About SCIM for organizations
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
---

## Acerca del SCIM para las organizaciones

If your organization uses [SAML SSO](/articles/about-identity-and-access-management-with-saml-single-sign-on), you can implement SCIM to add, manage, and remove organization members' access to {% data variables.product.product_name %}. Por ejemplo, un administrador puede desaprovisionar a un miembro de la organización usando el SCIM y eliminar automáticamente el miembro de la organización.

{% data reusables.saml.ghec-only %}

{% data reusables.scim.enterprise-account-scim %}

Si usas SAML SSO sin implementar SCIM, no tendrás un desaprovisionamiento automático. Cuando las sesiones de los miembros de la organización expiran una vez que su acceso ha sido eliminado del IdP, no se eliminan automáticamente de la organización. Los tokens autorizados otorgan acceso a la organización incluso una vez que las sesiones han expirado. If SCIM is not used, to fully remove a member's access, an organization owner must remove the member's access in the IdP and manually remove the member from the organization on {% data variables.product.prodname_dotcom %}.

{% data reusables.scim.changes-should-come-from-idp %}

## Proveedores de identidad compatibles

These identity providers (IdPs) are compatible with the {% data variables.product.product_name %} SCIM API for organizations. Para obtener más información, consulta el [SCIM](/rest/scim) en la documentación de la API de {% ifversion ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}.
- Azure AD
- Okta
- OneLogin

## About SCIM configuration for organizations

{% data reusables.scim.dedicated-configuration-account %}

Before you authorize the {% data variables.product.prodname_oauth_app %}, you must have an active SAML session. Para obtener más información, consulta la sección "[Acerca de la autenticación con el inicio de sesión único de SAML](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso)".

{% note %}

**Nota:** {% data reusables.scim.nameid-and-username-must-match %}

{% endnote %}

## Leer más

- "[Visualizar y administrar un acceso de SAML de un miembro a tu organización](/github/setting-up-and-managing-organizations-and-teams//viewing-and-managing-a-members-saml-access-to-your-organization)"

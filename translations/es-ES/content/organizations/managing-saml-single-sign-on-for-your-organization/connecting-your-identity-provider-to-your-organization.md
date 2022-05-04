---
title: Conectar tu proveedor de identidad con tu organización
intro: 'Para utilizar el inicio de sesión único de SAML y SCIM, debes conectar tu proveedor de identidad (IdP) a tu organización en {% data variables.product.product_name %}.'
redirect_from:
  - /articles/connecting-your-identity-provider-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/connecting-your-identity-provider-to-your-organization
versions:
  ghec: '*'
topics:
  - Authentication
  - Organizations
  - Teams
shortTitle: Conectar un IdP
---

## Acerca de la conexión de tu IdP a tu organización

Cuando habilitas el SSO de SAML para tu organización de {% data variables.product.product_name %}, conectas tu proveedor de identidad (IdP) a ella. Para obtener más información, consulta "[Habilitar y probar el inicio de sesión único para tu organización](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)".

{% data reusables.saml.ghec-only %}

Puedes encontrar los detalles de implementación de SAML y de SCIM para tu IdP en la documentación de este.
- Active Directory Federation Services (AD FS) [SAML](https://docs.microsoft.com/windows-server/identity/active-directory-federation-services)
- Azure Active Directory (Azure AD) [SAML](https://docs.microsoft.com/azure/active-directory/active-directory-saas-github-tutorial) y [SCIM](https://docs.microsoft.com/azure/active-directory/active-directory-saas-github-provisioning-tutorial)
- Okta [SAML](http://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-Github-com.html) y [SCIM](http://developer.okta.com/standards/SCIM/)
- OneLogin [SAML](https://onelogin.service-now.com/support?id=kb_article&sys_id=2929ddcfdbdc5700d5505eea4b9619c6) y [SCIM](https://onelogin.service-now.com/support?id=kb_article&sys_id=5aa91d03db109700d5505eea4b96197e)
- PingOne [SAML](https://support.pingidentity.com/s/marketplace-integration/a7i1W0000004ID3QAM/github-connector)
- Shibboleth [SAML](https://wiki.shibboleth.net/confluence/display/IDP30/Home)

{% note %}

**Nota:** Los proveedores de identidad que soportan {% data variables.product.product_name %} SCIM son Azure AD, Okta y OneLogin. Para obtener más información sobre SCIM, consulta la sección "[Acerca de SCIM para las organizaciones](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)".

{% data reusables.scim.enterprise-account-scim %}

{% endnote %}

## Metadatos SAML

Para obtener más información sobre los metadatos de SAML para tu organización, consulta la sección "[Referencia de configuración de SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference)".

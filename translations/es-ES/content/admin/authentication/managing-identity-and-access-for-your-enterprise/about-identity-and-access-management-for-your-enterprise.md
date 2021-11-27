---
title: Acerca de la administración de identidades y de accesos para tu empresa
shortTitle: Acerca de la administración de identidad y de acceso
intro: 'You can use SAML single sign-on (SSO) and System for Cross-domain Identity Management (SCIM) to centrally manage access {% ifversion ghec %}to organizations owned by your enterprise on {% data variables.product.prodname_dotcom_the_website %}{% endif %}{% ifversion ghae %}to {% data variables.product.product_location %}{% endif %}.'
product: '{% data reusables.gated-features.saml-sso %}'
versions:
  ghec: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Access management
  - Authentication
  - Enterprise
  - Identity
redirect_from:
  - /admin/authentication/about-identity-and-access-management-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/about-identity-and-access-management-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/about-identity-and-access-management-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta
---

## Acerca de la administración de identidades y de accesos para tu empresa

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %} {% data reusables.saml.about-saml-enterprise-accounts %} For more information, see "[Configuring SAML single sign-on for your enterprise](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)."

Después de que habilites el SSO de SAML, dependiendo del IdP que utilizas, debes poder habilitar las características de administración de acceso y de identidad adicionales. {% data reusables.scim.enterprise-account-scim %}

Si utilizas Azure AD como tu IdP, puedes utilizar la sincronización de equipos para administrar la membresía del equipo dentro de cada organización. {% data reusables.identity-and-permissions.about-team-sync %} Para obtener más información, consulta la sección "[Administrar la sincronización de equipos para las organizaciones de tu cuenta empresarial](/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)".

{% data reusables.saml.switching-from-org-to-enterprise %} Para obtener más información, consulta la sección "[Cambiar tu configuración de SAML de una cuenta de organización a una de empresa](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)".

## Acerca de {% data variables.product.prodname_emus %}

{% data reusables.enterprise-accounts.emu-short-summary %}

El configurar las {% data variables.product.prodname_emus %} para el inicio de sesión único de SAML y utilizar el aprovisionamiento involucra seguir un proceso diferente al que se llevaría para una empresa que no está utilizando {% data variables.product.prodname_managed_users %}. Si tu empresa utiliza {% data variables.product.prodname_emus %}, consulta la sección "[Configurar el inicio de sesión único de SAML para los Usuarios Administrados de Enterprise](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)".

## IdP compatibles

Probamos y damos compatibilidad oficial de los siguientes IdP. Para el SSO de SAML, ofrecemos soporte limitado para todos los proveedores de identidad que implementan el SAML 2.0 estándar. Para obtener más información, consulta la sección [Wiki de SAML](https://wiki.oasis-open.org/security) en el sitio web de OASIS.

| IdP                                          |                              SAML                              |                   Sincronización de equipos                   |
| -------------------------------------------- |:--------------------------------------------------------------:|:-------------------------------------------------------------:|
| Active Directory Federation Services (AD FS) | {% octicon "check-circle-fill" aria-label= "The check icon" %} |                                                               |
| Azure Active Directory (Azure AD)            | {% octicon "check-circle-fill" aria-label="The check icon" %}  | {% octicon "check-circle-fill" aria-label="The check icon" %}
| OneLogin                                     | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |
| PingOne                                      | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |
| Shibboleth                                   | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |

{% elsif ghae %}

{% data reusables.saml.ae-uses-saml-sso %}{% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

Después de que configuras la aplicación para {% data variables.product.product_name %} en tu IdP, puedes otorgar acceso a {% data variables.product.product_location %} si asignas la aplicación a los usuarios y grupos en tu IdP. Para obtener más información acerca del SSO de SAML para {% data variables.product.product_name %}, consulta la sección "[Configurar el inicio de sesión único de SAML para tu empresa](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)".

{% data reusables.scim.after-you-configure-saml %} Para obtener más información, consulta la sección "[Configurar el aprovisionamiento de usuarios para tu empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise)".

Para aprender cómo configurar tanto la autenticación como el aprovisionamiento de usuarios para {% data variables.product.product_location %} con tu IdP específico, consulta la sección "[Configurar la autenticación y el aprovisionamiento con tu proveedor de identidad](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider)".

{% endif %}

## Leer más

- [Wiki de SAML](https://wiki.oasis-open.org/security) en el sitio de OASIS
- [System for Cross-domain Identity Management: Protocol (RFC 7644)](https://tools.ietf.org/html/rfc7644) on the IETF website{% ifversion ghae %}
- [Restricting network traffic to your enterprise](/admin/configuration/restricting-network-traffic-to-your-enterprise){% endif %}

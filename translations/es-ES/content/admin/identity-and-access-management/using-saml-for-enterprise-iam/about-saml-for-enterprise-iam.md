---
title: About SAML for enterprise IAM
shortTitle: About SAML for IAM
intro: 'Puedes utilizar el inicio de sesión único (SSO) de SAML {% ifversion ghec or ghae %}y el Sistema para la Administración de Identidades entre Dominios (SCIM) {% endif %}para administrar centralmente el acceso {% ifversion ghec %}a las organizaciones que pertenecen a tu empresa de {% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}a {% data variables.product.product_location %}{% elsif ghae %}a {% data variables.product.product_location %}{% endif %}.'
versions:
  ghec: '*'
  ghes: '*'
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
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management-for-your-enterprise
  - /admin/identity-and-access-management/using-saml-for-enterprise-iam/about-identity-and-access-management-for-your-enterprise
---

## About SAML SSO for {% ifversion ghec or ghae %}your enterprise on {% endif %}{% ifversion ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %} {% data reusables.saml.about-saml-enterprise-accounts %} Para obtener más información, consulta la sección "[Configurar el inicio de sesión único de SAML en tu empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

If your enterprise members manage their own personal accounts on {% data variables.product.product_location %}, you can configure SAML authentication as an additional access restriction for your enterprise or organization. Alternatively, you can provision and manage the accounts of your enterprise members on {% data variables.product.product_location %} by using an enterprise account with {% data variables.product.prodname_emus %} enabled. For more information, see "[About authentication for your enterprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-cloud)."

{% data reusables.enterprise-accounts.about-recovery-codes %}Para obtener más información, consulta la sección "[Administrar los códigos de recuperación para tu empresa](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise)".

Después de que habilites el SSO de SAML, dependiendo del IdP que utilizas, debes poder habilitar las características de administración de acceso y de identidad adicionales.

Si utilizas Azure AD como tu IdP, puedes utilizar la sincronización de equipos para administrar la membresía del equipo dentro de cada organización. {% data reusables.identity-and-permissions.about-team-sync %} Para obtener más información, consulta la sección "[Administrar la sincronización de equipos para las organizaciones de tu cuenta empresarial](/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)".

{% data reusables.saml.switching-from-org-to-enterprise %} Para obtener más información, consulta la sección "[Cambiar tu configuración de SAML de una cuenta de organización a una de empresa](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)".

## Acerca de {% data variables.product.prodname_emus %}

{% data reusables.enterprise-accounts.emu-short-summary %}

{% note %}

**Note:** You cannot use SCIM at the enterprise level unless your enterprise is enabled for {% data variables.product.prodname_emus %}.

{% endnote %}

El configurar las {% data variables.product.prodname_emus %} para el inicio de sesión único de SAML y utilizar el aprovisionamiento involucra seguir un proceso diferente al que se llevaría para una empresa que no está utilizando {% data variables.product.prodname_managed_users %}. Si tu empresa utiliza {% data variables.product.prodname_emus %}, consulta la sección "[Configurar el inicio de sesión único de SAML para los Usuarios Administrados de Enterprise](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)".

{% elsif ghes %}

El SSO de SAML permite que las personas se autentiquen y accedan a {% data variables.product.product_location %} mediante un sistema externo para la administración de identidades.

SAML es un estándar basado en XML para autenticación y autorización. Cuando configuras SAML para {% data variables.product.product_location %}, el sistema de autenticación externo se denomina un "proveedor de identidad" (IdP). Tu instancia actúa como un proveedor de servicios (PS) de SAML. For more information about the SAML standard, see [Security Assertion Markup Language](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language) on Wikipedia.

For more information about the configuration of SAML SSO on {% data variables.product.product_name %}, see "[Configuring SAML single sign-on for your enterprise](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)."

{% data reusables.saml.saml-ghes-account-revocation %}

{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

{% data reusables.enterprise_user_management.built-in-authentication %}

{% elsif ghae %}

{% data reusables.saml.ae-uses-saml-sso %}{% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

Después de configurar la aplicación de {% data variables.product.product_name %} en tu proveedor de identidad (IdP), puedes aprovisionar el acceso a {% data variables.product.product_location %} si asignas la aplicación a los usuarios y grupos de tu IdP. Para obtener más información acerca del SSO de SAML para {% data variables.product.product_name %}, consulta la sección "[Configurar el inicio de sesión único de SAML para tu empresa](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)".

{% data reusables.scim.after-you-configure-saml %} Para obtener más información, consulta la sección "[Configurar el aprovisionamiento de usuarios para tu empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise)".

Para aprender cómo configurar tanto la autenticación como el aprovisionamiento de usuarios para {% data variables.product.product_location %} con tu IdP específico, consulta la sección "[Configurar la autenticación y el aprovisionamiento con tu proveedor de identidad](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider)".

{% endif %}

## IdP compatibles

{% ifversion ghec %}

Probamos y damos compatibilidad oficial de los siguientes IdP. Para el SSO de SAML, ofrecemos soporte limitado para todos los proveedores de identidad que implementan el SAML 2.0 estándar. Para obtener más información, consulta la sección [Wiki de SAML](https://wiki.oasis-open.org/security) en el sitio web de OASIS.

| IdP                                          |                              SAML                              |                   Sincronización de equipos                   |
| -------------------------------------------- |:--------------------------------------------------------------:|:-------------------------------------------------------------:|
| Active Directory Federation Services (AD FS) | {% octicon "check-circle-fill" aria-label= "The check icon" %} |                                                               |
| Azure Active Directory (Azure AD)            | {% octicon "check-circle-fill" aria-label="The check icon" %}  | {% octicon "check-circle-fill" aria-label="The check icon" %}
| Okta                                         | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |
| OneLogin                                     | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |
| PingOne                                      | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |
| Shibboleth                                   | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |

{% elsif ghes %}

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghes > 3.3 %}

Si tu IdP es compatible con confirmaciones cifradas, puedes configurarlas en {% data variables.product.product_name %} para incrementar la seguridad durante el proceso de autenticación.

{% endif %}

{% data reusables.saml.saml-single-logout-not-supported %}

{% elsif ghae %}

Los siguientes IdP son oficialmente compatibles para su integración con {% data variables.product.prodname_ghe_managed %}.

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

{% endif %}

{% ifversion ghae %}

## Mapear equipos de {% data variables.product.prodname_ghe_managed %} en grupos de Okta

Si utilizas Okta como tu IdP, puedes mapear grupos de Okta en los equipos de {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Mapear grupos de Okta en los equipos](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".

{% endif %}

## Leer más

- [Wiki de SAML](https://wiki.oasis-open.org/security) en el sitio de OASIS
- [Sistema para la Administración de Identidad entre Dominios: Protocolo (RFC 7644)](https://tools.ietf.org/html/rfc7644) en el sitio web de IETF{% ifversion ghae %}
- [Restringir el tráfico de red a tu empresa](/admin/configuration/restricting-network-traffic-to-your-enterprise){% endif %}

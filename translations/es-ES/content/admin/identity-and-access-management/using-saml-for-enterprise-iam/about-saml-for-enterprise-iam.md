---
title: Acerca de SAML para IAM empresarial
shortTitle: About SAML for IAM
intro: 'Puedes utilizar el inicio de sesión único (SSO) de SAML {% ifversion ghae %}y el Sistema para la Administración de Identidad Entre Dominios (SCIM) {% endif %}para administrar el acceso de forma centralizada {% ifversion ghec %}a las organizaciones que pertenecen a tu empresa en {% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}a {% data variables.location.product_location %}{% elsif ghae %}a {% data variables.location.product_location %}{% endif %}.'
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
ms.openlocfilehash: ea9db1269f389bdc126c8693ffeeb4b11dc42f99
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192693'
---
## Acerca del SSO de SAML para {% ifversion ghec or ghae %}tu empresa en {% endif %}{% ifversion ghec or ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}

{% ifversion ghec %}

Si los miembros de la empresa administran sus propias cuentas de usuario en {% data variables.location.product_location %}, puedes configurar la autenticación SAML como una restricción de acceso adicional para tu empresa u organización. {% data reusables.saml.dotcom-saml-explanation %} 

{% data reusables.saml.saml-accounts %}

{% data reusables.saml.about-saml-enterprise-accounts %} Para obtener más información, consulta "[Configuración del inicio de sesión único de SAML para la empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

Como alternativa, puedes aprovisionar y administrar las cuentas de los miembros de tu empresa con {% data variables.product.prodname_emus %}. Para ayudarte a determinar si el inicio de sesión único de SAML o {% data variables.product.prodname_emus %} es mejor para la empresa, consulta "[Acerca de la autenticación de la empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#identifying-the-best-authentication-method-for-your-enterprise)".

{% data reusables.enterprise-accounts.about-recovery-codes %} Para más información, vea "[Administración de códigos de recuperación para la empresa](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise)".

Después de que habilites el SSO de SAML, dependiendo del IdP que utilizas, debes poder habilitar las características de administración de acceso y de identidad adicionales. 

Si utilizas Azure AD como tu IdP, puedes utilizar la sincronización de equipos para administrar la membresía del equipo dentro de cada organización. {% data reusables.identity-and-permissions.about-team-sync %}

{% note %}

**Nota:** No se puede configurar SCIM para la cuenta empresarial a menos que la cuenta se haya creado para usar {% data variables.product.prodname_emus %}. Para más información, vea "[Acerca de {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)".

{% endnote %}

{% data reusables.saml.switching-from-org-to-enterprise %} Para más información, vea "[Cambio de la configuración de SAML de una organización a una cuenta de empresa](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)".

{% elsif ghes %}

El SSO de SAML permite que las personas se autentiquen y accedan a {% data variables.location.product_location %} mediante un sistema externo para la administración de identidades.

SAML es un estándar basado en XML para la autenticación y la autorización. Cuando configuras SAML para {% data variables.location.product_location %}, el sistema de autenticación externo se denomina un "proveedor de identidad" (IdP). Tu instancia actúa como un proveedor de servicios (PS) de SAML. Para obtener más información sobre el estándar SAML, consulta [Lenguaje de marcado de aserción de seguridad](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language) en Wikipedia.

{% elsif ghae %}

{% data reusables.saml.ae-uses-saml-sso %}{% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

Después de configurar la aplicación de {% data variables.product.product_name %} en tu proveedor de identidad (IdP), puedes aprovisionar el acceso a {% data variables.location.product_location %} si asignas usuarios y grupos a la aplicación en tu IdP. Para más información sobre el inicio de sesión único de SAML para {% data variables.product.product_name %}, vea "[Configuración del inicio de sesión único de SAML para la empresa](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)".

{% endif %}

{% ifversion ghes < 3.6 %}

Tus IdP no se comunican con {% data variables.product.product_name %} automáticamente cuando asignas o desasignas la aplicación. {% data variables.product.product_name %} crea una cuenta de usuario mediante el aprovisionamiento Just-In-Time (JIT) de SAML la primera vez que alguien navega a {% data variables.product.product_name %} e inicia sesión mediante la autenticación a través de su IdP. Es posible que tengas que notificar manualmente a los usuarios al conceder acceso a {% data variables.product.product_name %}.

{% endif %}

{% ifversion ghes %}

{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

{% data reusables.enterprise_user_management.built-in-authentication %}

{% endif %}

Para obtener más información sobre la configuración del inicio de sesión único de SAML en {% data variables.product.product_name %}, consulta "[Configuración del inicio de sesión único de SAML para la empresa](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)".{% ifversion ghec or ghae or scim-for-ghes %} Para obtener información sobre cómo configurar la autenticación y el aprovisionamiento de {% ifversion ghae or ghes %}usuarios {% endif %}para {% data variables.location.product_location %} con tu IdP específico, consulta los artículos para IdP individuales en "[Uso de SAML para IAM empresarial](/admin/identity-and-access-management/using-saml-for-enterprise-iam)".{% endif %}

{% ifversion ghae or scim-for-ghes %}

## Acerca de la creación de cuentas de usuario

{% data reusables.scim.after-you-configure-saml %} Para obtener más información, consulte "[Configuración del aprovisionamiento de usuarios para la empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise)".

{% data reusables.saml.saml-ghes-account-revocation %}

{% endif %}

## IdP compatibles

{% ifversion ghec %}

Probamos y damos compatibilidad oficial de los siguientes IdP. Para el SSO de SAML, ofrecemos soporte limitado para todos los proveedores de identidad que implementan el SAML 2.0 estándar. Para más información, vea la [wiki de SAML](https://wiki.oasis-open.org/security) en el sitio web de OASIS.

IdP | SAML | Sincronización de equipos | 
--- | :--: | :-------: |
Servicios de federación de Active Directory (AD FS) | {% octicon "check-circle-fill" aria-label= "The check icon" %} | |
Azure Active Directory (Azure AD) | {% octicon "check-circle-fill" aria-label="The check icon" %} | {% octicon "check-circle-fill" aria-label="The check icon" %} |
Okta | {% octicon "check-circle-fill" aria-label="The check icon" %} | |
OneLogin | {% octicon "check-circle-fill" aria-label="The check icon" %} | |
PingOne | {% octicon "check-circle-fill" aria-label="The check icon" %} | |
Shibboleth | {% octicon "check-circle-fill" aria-label="The check icon" %} | |

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

Si utilizas Okta como tu IdP, puedes asignar grupos de Okta a equipos en {% data variables.product.product_name %}. Para más información, vea "[Asignación de grupos de Okta a equipos](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".

{% endif %}

## Información adicional

- [Wiki de SAML](https://wiki.oasis-open.org/security) en el sitio web OASIS {%- ifversion ghae or scim-for-ghes %}
- [System for Cross-domain Identity Management: protocolo (RFC 7644)](https://tools.ietf.org/html/rfc7644) en el sitio web de IETF {%- endif %} {%- ifversion ghae %}
- "[Restricción del tráfico de red a la empresa con una lista de direcciones IP permitidas](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)" {%- endif %}

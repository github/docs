---
title: Acerca de la administración de accesos e identidades para tu cuenta empresarial
intro: 'Puedes administrar centralmente el acceso a los recursos de tu empresa, membrecía de tu organización y de tu equipo utilizando a tu proveedor de identidad (IdP).'
product: '{% data reusables.gated-features.enterprise-accounts %}'
versions:
  free-pro-team: '*'
topics:
  - Enterprise
---

### Acerca de la administración de accesos e identidades para tu cuenta empresarial

{% data reusables.saml.dotcom-saml-explanation %} {% data reusables.saml.about-saml-enterprise-accounts %} Para obtener más información, consulta la sección "[Habilitar el inicio de sesión único para las organizaciones en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)".

Después de que habilites el SSO de SAML, dependiendo del IdP que utilizas, debes poder habilitar las características de administración de acceso y de identidad adicionales.

{% data reusables.saml.about-user-provisioning-enterprise-account %} Para obtener más información, consulta la sección "[Acerca del aprovisionamiento de usurios para las organizaciones en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account)".

Si utilizas Azure AD como tu IdP, puedes utilizar la sincronización de equipos para administrar la membresía del equipo dentro de cada organización. {% data reusables.identity-and-permissions.about-team-sync %} Para obtener más información, consulta la sección "[Administrar la sincronización de equipos para las organizaciones de tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account)".

### IdP compatibles

Probamos y damos compatibilidad oficial de los siguientes IdP. Para el SSO de SAML, ofrecemos soporte limitado para todos los proveedores de identidad que implementan el SAML 2.0 estándar. Para obtener más información, consulta la sección [Wiki de SAML](https://wiki.oasis-open.org/security) en el sitio web de OASIS.

| IdP                                          |                              SAML                              |                                                                                     Aprovisionamiento de usuarios                                                                                      |                   Sincronización de equipos                   |
| -------------------------------------------- |:--------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------:|
| Active Directory Federation Services (AD FS) | {% octicon "check-circle-fill" aria-label= "The check icon" %} |                                                                                                                                                                                                        |                                                               |
| Azure Active Directory (Azure AD)            | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                                                                                                                                                                        | {% octicon "check-circle-fill" aria-label="The check icon" %}
| Okta                                         | {% octicon "check-circle-fill" aria-label="The check icon" %}  | {% octicon "check-circle-fill" aria-label= "The check icon" %} [<sup>Beta</sup>](/github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account) |                                                               |
| OneLogin                                     | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                                                                                                                                                                        |                                                               |
| PingOne                                      | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                                                                                                                                                                        |                                                               |
| Shibboleth                                   | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                                                                                                                                                                        |                                                               |


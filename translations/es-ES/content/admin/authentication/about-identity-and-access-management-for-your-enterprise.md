---
title: Acerca de la administración de identidades y de accesos para tu empresa
shortTitle: Acerca de la administración de identidad y de acceso
intro: 'Puedes utilizar la autenticación incluida en {% if enterpriseServerVersions contains currentVersion %}{% data variables.product.prodname_ghe_server %}, o elegir entre CAS, LDAP, o SAML{% else %}el inicio de sesión único de SAML (SSO) y el Sistema para la Administración de Identidad entre Dominios (SCIM){% endif %} para administrar el acceso centralmente {% if currentVersion == "free-pro-team@latest" %}para las organizaciones que pertenezcan a tu empresa en {% data variables.product.prodname_dotcom_the_website %}{% endif %}{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} a{% data variables.product.product_location %}{% endif %}.'
product: '{% data reusables.gated-features.saml-sso %}'
versions:
  github-ae: '*'
type: overview
topics:
  - Accounts
  - Access management
  - Authentication
  - Enterprise
  - Identity
---

### Acerca de la administración de identidades y de accesos para tu empresa

{% if currentVersion == "github-ae@latest" %}

{% data reusables.saml.ae-uses-saml-sso %}{% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

Después de que configuras la aplicación para {% data variables.product.product_name %} en tu IdP, puedes otorgar acceso a {% data variables.product.product_location %} si asignas la aplicación a los usuarios y grupos en tu IdP. Para obtener más información acerca del SSO de SAML para {% data variables.product.product_name %}, consulta la sección "[Configurar el inicio de sesión único de SAML para tu empresa](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)".

{% data reusables.scim.after-you-configure-saml %} Para obtener más información, consulta la sección "[Configurar el aprovisionamiento de usuarios para tu empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise)".

Para aprender cómo configurar tanto la autenticación como el aprovisionamiento de usuarios para {% data variables.product.product_location %} con tu IdP específico, consulta la sección "[Configurar la autenticación y el aprovisionamiento con tu proveedor de identidad](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider)".

{% endif %}

### Leer más

- [Wiki de SAML](https://wiki.oasis-open.org/security) en el sitio de OASIS
- [Sistema para la Administración de Identidad entre Dominios: Protocolo (RFC 7644)](https://tools.ietf.org/html/rfc7644) en el sitio web de IETF
- [Restringir el tráfico de red en tu empresa](/admin/configuration/restricting-network-traffic-to-your-enterprise)

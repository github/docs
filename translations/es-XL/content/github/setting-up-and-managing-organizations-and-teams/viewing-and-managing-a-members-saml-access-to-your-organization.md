---
title: Visualizar y administrar el acceso de SAML de un miembro a tu organización
intro: 'Puedes ver y revocar la identidad vinculada de un miembro de la organización, sesiones activas y credenciales autorizadas.'
permissions: Los dueños de organización pueden ver y administrar el acceso de SAML de un miembro a la misma.
product: '{{ site.data.reusables.gated-features.saml-sso }}'
redirect_from:
  - /articles/viewing-and-revoking-organization-members-authorized-access-tokens
  - /github/setting-up-and-managing-organizations-and-teams/viewing-and-revoking-organization-members-authorized-access-tokens
versions:
  free-pro-team: '*'
---

### Acerca del acceso de SAML a tu organización

Cuando habilitas el inicio de sesión único de SAML para tu organización, cada miembro de ella puede vincular su identidad externa con tu proveedor de identidad (IdP) a su cuenta existente de {{ site.data.variables.product.product_name }}. Para acceder a los recursos de tu organización en {{ site.data.variables.product.product_name }}, el miembro debe tener una sesión activa de SAML en su buscador. Para acceder a los recursos de tu organización utilizando Git o la API, el miembro debe utilizar un token de acceso personal o llave SSH que se le haya autorizado para su uso con tu organización.

Puedes ver y revocar la identidad vinculada de cada miembro, sesiones activas y credenciales auotrizadas en la misma página.

### Visualizar y revocar una identidad vinculada

{{ site.data.reusables.saml.about-linked-identities }}

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.people }}
{{ site.data.reusables.saml.click-person-revoke-identity }}
{{ site.data.reusables.saml.saml-identity-linked }}
{{ site.data.reusables.saml.view-sso-identity }}
{{ site.data.reusables.saml.revoke-sso-identity }}
{{ site.data.reusables.saml.confirm-revoke-identity }}

### Ver y revocar una sesión activa de SAML

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.people }}
{{ site.data.reusables.saml.click-person-revoke-session }}
{{ site.data.reusables.saml.saml-identity-linked }}
{{ site.data.reusables.saml.view-saml-sessions }}
{{ site.data.reusables.saml.revoke-saml-session }}

### Visualizar y revocar credenciales autorizadas

{{ site.data.reusables.saml.about-authorized-credentials }}

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.people }}
{{ site.data.reusables.saml.click-person-revoke-credentials }}
{{ site.data.reusables.saml.saml-identity-linked }}
{{ site.data.reusables.saml.view-authorized-credentials }}
{{ site.data.reusables.saml.revoke-authorized-credentials }}
{{ site.data.reusables.saml.confirm-revoke-credentials }}

### Leer más

- "[Acerca de la administración de acceso e identidad con el inicio de sesión único de SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
- "[Visualizar y administrar el acceso de SAML de un usuario a tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise-account/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)"

---
title: Visualizar y administrar el acceso de SAML de un usuario a tu cuenta empresarial
intro: 'Puedes ver y revocar la identidad vinculada de un miembro de la empresa, sesiones activas y credenciales autorizadas.'
permissions: Los propietarios de empresa pueden ver y administrar el acceso de SAML para los miembros en las organizaciones.
product: '{{ site.data.reusables.gated-features.enterprise-accounts }}'
versions:
  free-pro-team: '*'
---

### Acerca del acceso de SAML a tu cuenta empresarial

Cuando habilitas el inicio de sesión único de SAML para tu cuenta empresarial, cada miembro de la empresa puede vincular su identidad externa en tu proveedor de identidad (IdP) para su cuenta existente de {{ site.data.variables.product.product_name }}. {{ site.data.reusables.saml.about-saml-access-enterprise-account }}

### Visualizar y revocar una identidad vinculada

{{ site.data.reusables.saml.about-linked-identities }}

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.people-tab }}
{{ site.data.reusables.saml.click-person-revoke-identity }}
{{ site.data.reusables.saml.saml-identity-linked }}
{{ site.data.reusables.saml.view-sso-identity }}
{{ site.data.reusables.saml.revoke-sso-identity }}
{{ site.data.reusables.saml.confirm-revoke-identity }}

### Ver y revocar una sesión activa de SAML

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.people-tab }}
{{ site.data.reusables.saml.click-person-revoke-session }}
{{ site.data.reusables.saml.saml-identity-linked }}
{{ site.data.reusables.saml.view-saml-sessions }}
{{ site.data.reusables.saml.revoke-saml-session }}

### Visualizar y revocar credenciales autorizadas

{{ site.data.reusables.saml.about-authorized-credentials }}

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.people-tab }}
{{ site.data.reusables.saml.click-person-revoke-credentials }}
{{ site.data.reusables.saml.saml-identity-linked }}
{{ site.data.reusables.saml.view-authorized-credentials }}
{{ site.data.reusables.saml.revoke-authorized-credentials }}
{{ site.data.reusables.saml.confirm-revoke-credentials }}

### Leer más

- "[Visualizar y administrar el acceso de SAML de un miembro a tu organización](/github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization)"

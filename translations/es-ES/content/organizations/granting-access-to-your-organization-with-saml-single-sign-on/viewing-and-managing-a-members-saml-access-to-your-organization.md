---
title: Visualizar y administrar el acceso de SAML de un miembro a tu organización
intro: 'Puedes ver y revocar la identidad vinculada de un miembro de la organización, sesiones activas y credenciales autorizadas.'
permissions: Organization owners can view and manage a member's SAML access to an organization.
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/viewing-and-revoking-organization-members-authorized-access-tokens
  - /github/setting-up-and-managing-organizations-and-teams/viewing-and-revoking-organization-members-authorized-access-tokens
  - /github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization
versions:
  free-pro-team: '*'
topics:
  - Organizations
  - Teams
---

### Acerca del acceso de SAML a tu organización

Cuando habilitas el inicio de sesión único de SAML para tu organización, cada miembro de ella puede vincular su identidad externa con tu proveedor de identidad (IdP) a su cuenta existente de {% data variables.product.product_name %}. Para acceder a los recursos de tu organización en {% data variables.product.product_name %}, el miembro debe tener una sesión activa de SAML en su buscador. Para acceder a los recursos de tu organización utilizando Git o la API, el miembro debe utilizar un token de acceso personal o llave SSH que se le haya autorizado para su uso con tu organización.

Puedes ver y revocar la identidad vinculada de cada miembro, sesiones activas y credenciales auotrizadas en la misma página.

### Visualizar y revocar una identidad vinculada

{% data reusables.saml.about-linked-identities %}

{% data reusables.identity-and-permissions.revoking-identity-team-sync %}

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.saml.click-person-revoke-identity %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-sso-identity %}
{% data reusables.saml.revoke-sso-identity %}
{% data reusables.saml.confirm-revoke-identity %}

### Visualizar y revocar una sesión activa de SAML

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.saml.click-person-revoke-session %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-saml-sessions %}
{% data reusables.saml.revoke-saml-session %}

### Visualizar y revocar credenciales autorizadas

{% data reusables.saml.about-authorized-credentials %}

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.saml.click-person-revoke-credentials %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-authorized-credentials %}
{% data reusables.saml.revoke-authorized-credentials %}
{% data reusables.saml.confirm-revoke-credentials %}

### Leer más

- "[Acerca de la administración de identidad y el acceso con el inicio de sesión único de SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
- "[Visualizar y administrar el acceso de SAML de un usuario a tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)"

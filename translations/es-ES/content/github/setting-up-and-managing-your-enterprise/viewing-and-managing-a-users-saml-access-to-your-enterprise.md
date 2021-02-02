---
title: Visualizar y administrar el acceso de SAML de un usuario a tu empresa
intro: 'Puedes ver y revocar la identidad vinculada de un miembro de la empresa, sesiones activas y credenciales autorizadas.'
permissions: Los propietarios de empresa pueden ver y administrar el acceso de SAML para los miembros en las organizaciones.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
versions:
  free-pro-team: '*'
---

### Acerca del acceso de SAML a tu cuenta empresarial

Cuando habilitas el inicio de sesión único de SAML para tu cuenta empresarial, cada miembro de la empresa puede vincular su identidad externa en tu proveedor de identidad (IdP) para su cuenta existente de {% data variables.product.product_name %}. {% data reusables.saml.about-saml-access-enterprise-account %}

### Visualizar y revocar una identidad vinculada

{% data reusables.saml.about-linked-identities %}

{% data reusables.identity-and-permissions.revoking-identity-team-sync %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.saml.click-person-revoke-identity %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-sso-identity %}
{% data reusables.saml.revoke-sso-identity %}
{% data reusables.saml.confirm-revoke-identity %}

### Visualizar y revocar una sesión activa de SAML

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.saml.click-person-revoke-session %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-saml-sessions %}
{% data reusables.saml.revoke-saml-session %}

### Visualizar y revocar credenciales autorizadas

{% data reusables.saml.about-authorized-credentials %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.saml.click-person-revoke-credentials %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-authorized-credentials %}
{% data reusables.saml.revoke-authorized-credentials %}
{% data reusables.saml.confirm-revoke-credentials %}

### Further reading

- "[Visualizar y administrar el acceso de SAML de un miembro a tu organización](/github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization)"

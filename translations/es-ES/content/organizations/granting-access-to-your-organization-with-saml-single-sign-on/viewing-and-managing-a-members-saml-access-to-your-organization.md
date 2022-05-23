---
title: Visualizar y administrar el acceso de SAML de un miembro a tu organización
intro: 'Puedes ver y revocar la identidad vinculada de un miembro de la organización, sesiones activas y credenciales autorizadas.'
permissions: Organization owners can view and manage a member's SAML access to an organization.
redirect_from:
  - /articles/viewing-and-revoking-organization-members-authorized-access-tokens
  - /github/setting-up-and-managing-organizations-and-teams/viewing-and-revoking-organization-members-authorized-access-tokens
  - /github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Administrar el acceso de SAML
---

## Acerca del acceso de SAML a tu organización

Cuando habilitas el inicio de sesión único de SAML en tu organización, cada miembro de esta puede enlazar su identidad externa con tu proveedor de identidad (IdP) con su cuenta existente en {% data variables.product.product_location %}. Para acceder a los recursos de tu organización en {% data variables.product.product_name %}, el miembro debe tener una sesión activa de SAML en su buscador. Para acceder a los recursos de tu organización utilizando Git o la API, el miembro debe utilizar un token de acceso personal o llave SSH que se le haya autorizado para su uso con tu organización.

Puedes ver y revocar la identidad vinculada de cada miembro, sesiones activas y credenciales auotrizadas en la misma página.

## Visualizar y revocar una identidad vinculada

{% data reusables.saml.about-linked-identities %}

Cuando esté disponible, la entrada incluirá datos de SCIM. Para obtener más información, consulta la sección "[SCIM para las organizaciones](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)".

{% warning %}

**Advertencia:** Para las orgtanizaciones que utilizan SCIM:
- El revocar una identidad de usuario en {% data variables.product.product_name %} también eliminará los metadatos de SAML y de SCIM. Como resultado, el proveedor de identidad no podrá sincronizar o desaprovisionar la identidad de usuario enlazada.
- Un administrador deberá revocar una identidad enlazada a través del proveedor de identidad.
- Para revocar una identidad enlazada y enlazar una cuenta diferente a través del proveedor de identidad, un administrador puede eliminar y volver a asignar el usuario con la aplicación de {% data variables.product.product_name %}. Para obtener más información, consulta la documentación de tu proveedor de identidad.

{% endwarning %}


{% data reusables.identity-and-permissions.revoking-identity-team-sync %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.saml.click-person-revoke-identity %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-sso-identity %}
{% data reusables.saml.revoke-sso-identity %}
{% data reusables.saml.confirm-revoke-identity %}

## Visualizar y revocar una sesión activa de SAML

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.saml.click-person-revoke-session %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-saml-sessions %}
{% data reusables.saml.revoke-saml-session %}

## Visualizar y revocar credenciales autorizadas

{% data reusables.saml.about-authorized-credentials %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.saml.click-person-revoke-credentials %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-authorized-credentials %}
{% data reusables.saml.revoke-authorized-credentials %}
{% data reusables.saml.confirm-revoke-credentials %}

## Leer más

- "[Acerca de la administración de acceso e identidad con el inicio de sesión único de SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on)"{% ifversion ghec %}
- "[Visualizar y administrar el acceso de SAML de un usuario en tu cuenta empresarial](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise)"{% endif %}

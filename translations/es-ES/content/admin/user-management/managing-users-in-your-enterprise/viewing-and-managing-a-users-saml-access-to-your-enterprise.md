---
title: Visualizar y administrar el acceso de SAML de un usuario a tu empresa
intro: 'Puedes ver y revocar la identidad vinculada de un miembro de la empresa, sesiones activas y credenciales autorizadas.'
permissions: Enterprise owners can view and manage a member's SAML access to an organization.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise
versions:
  ghec: '*'
topics:
  - Enterprise
shortTitle: Visualizar & administrar el acceso con SAML
---

## Acerca del acceso de SAML a tu cuenta empresarial

When you enable SAML single sign-on for your enterprise account, each enterprise member can link their external identity on your identity provider (IdP) to their existing account on {% data variables.product.product_location %}. {% data reusables.saml.about-saml-access-enterprise-account %}

Si tu empresa utiliza {% data variables.product.prodname_emus %}, tus miembros utilizarán cuentas que se aprovisionen a través de tu IdP. {% data variables.product.prodname_managed_users_caps %} no utilizará su cuenta de usuario existente en {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)".

## Visualizar y revocar una identidad vinculada

{% data reusables.saml.about-linked-identities %}

Si tu empresa utiliza {% data variables.product.prodname_emus %}, no podrás desaprovisionar o eliminar cuentas de usuario desde la empresa en {% data variables.product.product_name %}. Cualquier cambio que necesites hacer a los {% data variables.product.prodname_managed_users %} de tu empresa deberá realizarse mediante tu IdP.

{% data reusables.identity-and-permissions.revoking-identity-team-sync %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.saml.click-person-revoke-identity %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-sso-identity %}
{% data reusables.saml.revoke-sso-identity %}
{% data reusables.saml.confirm-revoke-identity %}

## Visualizar y revocar una sesión activa de SAML

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.saml.click-person-revoke-session %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-saml-sessions %}
{% data reusables.saml.revoke-saml-session %}

## Visualizar y revocar credenciales autorizadas

{% data reusables.saml.about-authorized-credentials %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.saml.click-person-revoke-credentials %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-authorized-credentials %}
{% data reusables.saml.revoke-authorized-credentials %}
{% data reusables.saml.confirm-revoke-credentials %}

## Leer más

- "[Visualizar y administrar el acceso de SAML de un miembro a tu organización](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)"

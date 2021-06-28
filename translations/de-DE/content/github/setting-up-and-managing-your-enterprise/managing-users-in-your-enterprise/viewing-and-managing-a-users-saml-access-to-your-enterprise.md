---
title: Viewing and managing a user's SAML access to your enterprise
intro: 'Du kannst die verknüpfte Identität, aktive Sitzungen und autorisierte Anmeldeinformationen eines Enterprise-Mitglieds ansehen und widerrufen.'
permissions: Enterprise owners can view and manage a member's SAML access to an organization.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise
versions:
  free-pro-team: '*'
topics:
  - Enterprise
---

### Über SAML Zugriff auf Dein Enterprise-Konto

Wenn Du SAML Single Sign-On für Dein Enterprise-Konto aktivierst, kann jedes Enterprise-Mitglied seine externe Identität auf Deinem Identitätsanbieter (IdP) mit seinem bestehenden {% data variables.product.product_name %}-Konto verknüpfen. {% data reusables.saml.about-saml-access-enterprise-account %}

### Eine verknüpfte Identität anschauen und widerrufen

{% data reusables.saml.about-linked-identities %}

{% warning %}

**Warning:** For organizations using SCIM:
- Revoking a linked user identity on {% data variables.product.product_name %} will also remove the SAML and SCIM metadata. As a result, the identity provider will not be able to synchronize or deprovision the linked user identity.
- An admin must revoke a linked identity through the identity provider.
- To revoke a linked identity and link a different account through the identity provider, an admin can remove and re-assign the user to the {% data variables.product.product_name %} application. For more information, see your identity provider's docs.

{% endwarning %}

{% data reusables.identity-and-permissions.revoking-identity-team-sync %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.saml.click-person-revoke-identity %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-sso-identity %}
{% data reusables.saml.revoke-sso-identity %}
{% data reusables.saml.confirm-revoke-identity %}

### Eine aktive SAML-Sitzung ansehen und widerrufen

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.saml.click-person-revoke-session %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-saml-sessions %}
{% data reusables.saml.revoke-saml-session %}

### Autorisierte Anmeldeinformationen anschauen und widerrufen

{% data reusables.saml.about-authorized-credentials %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.saml.click-person-revoke-credentials %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-authorized-credentials %}
{% data reusables.saml.revoke-authorized-credentials %}
{% data reusables.saml.confirm-revoke-credentials %}

### Weiterführende Informationen

- „[SAML-Zugriff eines Mitglieds auf Deine Organisation ansehen und verwalten](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)"

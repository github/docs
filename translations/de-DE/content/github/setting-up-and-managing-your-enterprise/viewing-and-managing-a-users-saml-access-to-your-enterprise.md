---
title: Viewing and managing a user's SAML access to your enterprise
intro: 'Du kannst die verknüpfte Identität, aktive Sitzungen und autorisierte Anmeldeinformationen eines Enterprise-Mitglieds ansehen und widerrufen.'
permissions: Enterprise-Inhaber können den SAML-Zugriff eines Mitglieds auf eine Organisation ansehen und verwalten.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
versions:
  free-pro-team: '*'
---

### Über SAML Zugriff auf Dein Enterprise-Konto

Wenn Du SAML Single Sign-On für Dein Enterprise-Konto aktivierst, kann jedes Enterprise-Mitglied seine externe Identität auf Deinem Identitätsanbieter (IdP) mit seinem bestehenden {% data variables.product.product_name %}-Konto verknüpfen. {% data reusables.saml.about-saml-access-enterprise-account %}

### Eine verknüpfte Identität anschauen und widerrufen

{% data reusables.saml.about-linked-identities %}

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

- „[SAML-Zugriff eines Mitglieds auf Deine Organisation ansehen und verwalten](/github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization)"

---
title: Anzeige und Verwaltung des SAML-Zugriffs eines Benutzers auf Dein Enterprise-Konto
intro: 'Du kannst die verknüpfte Identität, aktive Sitzungen und autorisierte Anmeldeinformationen eines Enterprise-Mitglieds ansehen und widerrufen.'
permissions: Enterprise-Inhaber können den SAML-Zugriff eines Mitglieds auf eine Organisation ansehen und verwalten.
product: '{{ site.data.reusables.gated-features.enterprise-accounts }}'
versions:
  free-pro-team: '*'
---

### Über SAML Zugriff auf Dein Enterprise-Konto

Wenn Du SAML Single Sign-On für Dein Enterprise-Konto aktivierst, kann jedes Enterprise-Mitglied seine externe Identität auf Deinem Identitätsanbieter (IdP) mit seinem bestehenden {{ site.data.variables.product.product_name }}-Konto verknüpfen. {{ site.data.reusables.saml.about-saml-access-enterprise-account }}

### Eine verknüpfte Identität anschauen und widerrufen

{{ site.data.reusables.saml.about-linked-identities }}

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.people-tab }}
{{ site.data.reusables.saml.click-person-revoke-identity }}
{{ site.data.reusables.saml.saml-identity-linked }}
{{ site.data.reusables.saml.view-sso-identity }}
{{ site.data.reusables.saml.revoke-sso-identity }}
{{ site.data.reusables.saml.confirm-revoke-identity }}

### Eine aktive SAML-Sitzung ansehen und widerrufen

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.people-tab }}
{{ site.data.reusables.saml.click-person-revoke-session }}
{{ site.data.reusables.saml.saml-identity-linked }}
{{ site.data.reusables.saml.view-saml-sessions }}
{{ site.data.reusables.saml.revoke-saml-session }}

### Autorisierte Anmeldeinformationen anschauen und widerrufen

{{ site.data.reusables.saml.about-authorized-credentials }}

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.people-tab }}
{{ site.data.reusables.saml.click-person-revoke-credentials }}
{{ site.data.reusables.saml.saml-identity-linked }}
{{ site.data.reusables.saml.view-authorized-credentials }}
{{ site.data.reusables.saml.revoke-authorized-credentials }}
{{ site.data.reusables.saml.confirm-revoke-credentials }}

### Weiterführende Informationen

- „[SAML-Zugriff eines Mitglieds auf Deine Organisation ansehen und verwalten](/github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization)"

---
title: SAML-Zugriff eines Mitglieds auf Deine Organisation ansehen und verwalten
intro: 'Du kannst die verknüpfte Identität, aktive Sitzungen und autorisierte Anmeldeinformationen eines Organisations-Mitglieds ansehen und widerrufen.'
permissions: Organisationsinhaber können den SAML-Zugriff eines Mitglieds auf eine Organisation ansehen und verwalten.
product: '{{ site.data.reusables.gated-features.saml-sso }}'
redirect_from:
  - /articles/viewing-and-revoking-organization-members-authorized-access-tokens
  - /github/setting-up-and-managing-organizations-and-teams/viewing-and-revoking-organization-members-authorized-access-tokens
versions:
  free-pro-team: '*'
---

### Über SAML Zugriff auf Deine Organisation

Wenn Du SAML Single Sign-On für Deine Organisation aktivierst, kann jedes Organisations-Mitglied seine externe Identität auf Deinem Identitätsanbieter (IdP) mit seinem bestehenden {{ site.data.variables.product.product_name }}-Konto verknüpfen. Um auf die Ressourcen Deiner Organisation auf {{ site.data.variables.product.product_name }} zuzugreifen, muss das Mitglied eine aktive SAML-Sitzung in seinem Browser haben. Um über API und Git auf die Ressourcen Deiner Organisation zugreifen zu können, muss das Mitglied ein persönliches Zugriffstoken oder einen SSH-Schlüssel verwenden, den das Mitglied für die Verwendung mit Deiner Organisation autorisiert hat.

Du kannst die verknüpfte Identität, die aktiven Sitzungen und die autorisierten Anmeldeinformationen auf der gleichen Seite anzeigen und widerrufen.

### Eine verknüpfte Identität anschauen und widerrufen

{{ site.data.reusables.saml.about-linked-identities }}

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.people }}
{{ site.data.reusables.saml.click-person-revoke-identity }}
{{ site.data.reusables.saml.saml-identity-linked }}
{{ site.data.reusables.saml.view-sso-identity }}
{{ site.data.reusables.saml.revoke-sso-identity }}
{{ site.data.reusables.saml.confirm-revoke-identity }}

### Eine aktive SAML-Sitzung ansehen und widerrufen

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.people }}
{{ site.data.reusables.saml.click-person-revoke-session }}
{{ site.data.reusables.saml.saml-identity-linked }}
{{ site.data.reusables.saml.view-saml-sessions }}
{{ site.data.reusables.saml.revoke-saml-session }}

### Autorisierte Anmeldeinformationen anschauen und widerrufen

{{ site.data.reusables.saml.about-authorized-credentials }}

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.people }}
{{ site.data.reusables.saml.click-person-revoke-credentials }}
{{ site.data.reusables.saml.saml-identity-linked }}
{{ site.data.reusables.saml.view-authorized-credentials }}
{{ site.data.reusables.saml.revoke-authorized-credentials }}
{{ site.data.reusables.saml.confirm-revoke-credentials }}

### Weiterführende Informationen

- „[Informationen zum Identitäts- und Zugriffsmanagement mit SAML Single-Sign-On](/articles/about-identity-and-access-management-with-saml-single-sign-on)“
- „[Anzeigen und Verwalten des SAML-Zugriffs eines Benutzers auf Dein Enterprise-Konto](/github/setting-up-and-managing-your-enterprise-account/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)"

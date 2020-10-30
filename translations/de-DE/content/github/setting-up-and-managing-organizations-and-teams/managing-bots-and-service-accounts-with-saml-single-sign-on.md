---
title: Bots und Dienstkonten mit SAML Single-Sign-On verwalten
intro: 'Organisationen, für die SAML Single-Sign-On aktiviert ist, können den Zugriff von Bots und Dienstkonten beibehalten.'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/managing-bots-and-service-accounts-with-saml-single-sign-on
versions:
  free-pro-team: '*'
---

Um den Zugriff für Bots und Dienstkonten beizubehalten, können die Organisationsadministratoren SAML Single Sign-On für ihre Organisation [aktivieren](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization), aber **nicht** [erzwingen](/articles/enforcing-saml-single-sign-on-for-your-organization). Wenn Du SAML Single Sign-On für Deine Organisation erzwingen musst, kannst Du eine externe Identität für den Bot oder das Dienstkonto bei Deinem Identitätsanbieter (IdP) erstellen.

{% warning %}

**Hinweis:** Wenn Du SAML Single Sign-On für Deine Organisation erzwingst und **keine** externe Identitäten für Bots und Dienstkonten bei Deinem IdP eingerichtet hast, werden die Bots und Dienstkonten aus Deiner Organisation entfernt.

{% endwarning %}

### Weiterführende Informationen

- „[Informationen zum Identitäts- und Zugriffsmanagement mit SAML Single-Sign-On](/articles/about-identity-and-access-management-with-saml-single-sign-on)“

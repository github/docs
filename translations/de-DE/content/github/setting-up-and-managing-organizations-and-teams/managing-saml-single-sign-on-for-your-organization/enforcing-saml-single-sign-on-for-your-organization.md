---
title: SAML Single Sign-On für Deine Organisation erzwingen
intro: 'Inhaber und Administratoren von Organisationen können SAML SSO erzwingen, sodass sich alle Organisationsmitglieder über einen Identitätsanbieter (IdP) authentifizieren müssen.'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/enforcing-saml-single-sign-on-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/enforcing-saml-single-sign-on-for-your-organization
versions:
  free-pro-team: '*'
topics:
  - organisationen
  - teams
---
Wenn Du SAML SSO in Deiner Organisation erzwingst, werden alle Mitglieder einschließlich Administratoren, die sich nicht über Deinen SAML-Identitätsanbieter (IdP) authentifiziert haben, aus der Organisation entfernt und über diese Entfernung benachrichtigt. Bots und Dienstkonten, für die beim IdP Deiner Organisation keine externen Identitäten eingerichtet sind, werden ebenfalls entfernt. Weitere Informationen zu Bots und Dienstkonten findest Du unter „[Bots und Dienstkonten mit SAML Single Sign-On verwalten](/articles/managing-bots-and-service-accounts-with-saml-single-sign-on)“. Du kannst Organisationsmitglieder wiederherstellen, sobald sie sich erfolgreich mit Single Sign-On angemeldet haben.

Wenn sich Deine Organisation im Besitz eines Enterprise-Kontos befindet und Du SAML für das Enterprise-Konto aktivierst, wird die SAML-Konfiguration auf Organisationsebene überschrieben. Weiter Informationen findest Du unter „[Sicherheitseinstellungen für Dein Enterprise-Konto erzwingen](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account)."

{% tip %}

**Tipp:** {% data reusables.saml.testing-saml-sso %}

{% endtip %}

1. Aktiviere und teste SAML SSO für Deine Organisation. Weitere Informationen zu diesem Vorgang findest Du unter „[SAML Single Sign-On für Deine Organisation aktivieren und testen](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization).“
2. Nachdem Du **Require SAML SSO authentication for all members of the SAML SSO Org organization** (Authentifizierung mit SAML SSO für alle Mitglieder der SAML-SSO-Organisation vorschreiben) ausgewählt hast, werden Organisationsmitglieder angezeigt, die sich nicht über Deinen IdP authentifiziert haben. Wenn Du SAML SSO erzwingst, werden diese Mitglieder aus der Organisation entfernt.
3. Klicke auf **Enforce SAML SSO** (SAML SSO erzwingen), um SAML SSO zu erzwingen und die aufgeführten Organisationsmitglieder zu entfernen.

### Weiterführende Informationen

- „[Informationen zum Identitäts- und Zugriffsmanagement mit SAML Single-Sign-On](/articles/about-identity-and-access-management-with-saml-single-sign-on)“

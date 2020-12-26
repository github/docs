---
title: SAML Single Sign-On und SCIM mit Okta konfigurieren
intro: 'Du kannst ''Security Assertion Markup Language'' (SAML) Single Sign-On (SSO) und ''System for Cross-Domain Identity Management'' (SCIM, System zur Identitätsverwaltung über Domänen hinweg) mit Okta verwenden, um den Zugriff auf Deine Organisation automatisch auf {% data variables.product.prodname_dotcom %} zu verwalten.'
product: '{% data reusables.gated-features.saml-sso %}'
permissions: Organisationseigentümer können SAML SSO und SCIM mit Okta für eine Organisation konfigurieren.
versions:
  free-pro-team: '*'
---

### Über SAML und SCIM mit Okta

Du kannst den Zugriff auf Deine {% data variables.product.prodname_dotcom %}-Organisation und andere Webanwendungen von einer zentralen Schnittstelle aus steuern, indem Du die Organisation so konfigurierst, dass sie SAML SSO und SCIM mit Okta, einem Identitätsanbieter (IdP), nutzt.

SAML SSO steuert und sichert den Zugriff auf Organisationsressourcen wie Repositorys, Issues und Pull Requests. SCIM fügt bei Änderungen in Okta automatisch den Zugriff von Mitgliedern auf Deine {% data variables.product.prodname_dotcom %}-Organisation hinzu, oder verwaltet und entfernt sie. Weitere Informationen findest du unter „[Über Identitäts- und Zugriffsmanagement mit SAML Single Sign-On](/github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on)" und „[Über SCIM](/github/setting-up-and-managing-organizations-and-teams/about-scim)."

Nachdem Du SCIM aktiviert hast, stehen Dir folgende Bereitstellungsfunktionen für alle Benutzer zur Verfügung, denen Du Deine {% data variables.product.prodname_ghe_cloud %}-Anwendung in Okta zuweist.

| Funktion                     | Beschreibung                                                                                                                                                                                      |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Push neuer Benutzer          | Wenn Du in Okta einen neuen Benutzer erstellst, wird der Benutzer eine E-Mail-Einladung zu Deiner {% data variables.product.prodname_dotcom %}-Organisation erhalten.                             |
| Push Benutzer-Deaktivierung  | Wenn Du einen Benutzer in Okta deaktivierst, wird ihn Okta auch von Deiner {% data variables.product.prodname_dotcom %}-Organisation entfernen.                                                   |
| Push Profil-Aktualisierungen | Wenn Du ein Benutzerprofil in Okta aktualisierst, wird Okta die Metadaten für die Mitgliedschaft des Benutzers in Deiner {% data variables.product.prodname_dotcom %}-Organisation aktualisieren. |
| Benutzer reaktivieren        | Wenn Du einen Benutzer in Okta reaktivierst, wird Okta dem Benutzer eine E-Mail-Einladung senden, Deiner {% data variables.product.prodname_dotcom %}-Organisation wieder beizutreten.            |

### Vorrausetzungen

{% data reusables.saml.use-classic-ui %}

### Die {% data variables.product.prodname_ghe_cloud %}-Anwendung in Okta hinzufügen

{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.add-okta-application %}
{% data reusables.saml.search-ghec-okta %}
4. Klicke rechts von „Github Enterprise Cloud - Organization" auf **Add** (Hinzufügen). ![Klicke auf "Add" (Hinzufügen) für die {% data variables.product.prodname_ghe_cloud %}-Anwendung](/assets/images/help/saml/okta-add-ghec-application.png)

5. Gib im Feld **GitHub Organization** den Namen Deiner {% data variables.product.prodname_dotcom %}-Organisation ein. Wenn zum Beispiel die URL Deiner Organisation https://github.com/octo-org ist, lautet der Name der Organisation `octo-org`. ![Github Organisationsname eingeben](/assets/images/help/saml/okta-github-organization-name.png)

6. Klicke auf **Done** (Fertig).

### SAML SSO aktivieren und testen

{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.okta-applications-click-ghec-application-label %}
{% data reusables.saml.assign-yourself-to-okta %}
{% data reusables.saml.okta-sign-on-tab %}
{% data reusables.saml.okta-view-setup-instructions %}
6. Aktiviere und teste SAML SSO auf {% data variables.product.prodname_dotcom %} über die Anmelde-URL, die Herausgeber-URL und die öffentlichen Zertifikate aus dem „Wie konfiguriere ich SAML 2.0"-Leitfaden. Weitere Informationen findest Du unter „[SAML Single Sign-On für Deine Organisation aktivieren und testen](/github/setting-up-and-managing-organizations-and-teams/enabling-and-testing-saml-single-sign-on-for-your-organization).“

### Konfigurieren der Zugriffsbereitstellung mit SCIM in Okta

{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.okta-applications-click-ghec-application-label %}
{% data reusables.saml.okta-provisioning-tab %}
{% data reusables.saml.okta-configure-api-integration %}
{% data reusables.saml.okta-enable-api-integration %}


6. Klicke auf **Authenticate with Github Enterprise Cloud - Organization** (Authentisieren mit einer Github Enterprise Cloud-Organisation). ![Schaltfläche "Authenticate with Github Enterprise Cloud - Organization" (mit der Github Enterprise Cloud-Organisation authentifizieren) der Okta-Anwendung](/assets/images/help/saml/okta-authenticate-with-ghec-organization.png)

7. Klicke rechts neben Deinem Organisationsnamen auf **Grant** (Gewähren). ![Schaltfläche "Grant" (Gewähren) um die Okta-SCIM-Integration für Organisationszugriff zu autorisieren](/assets/images/help/saml/okta-scim-integration-grant-organization-access.png)

  {% note %}

  **Hinweis**: Wenn Du Deine Organisation nicht in der Liste siehst, gehe zu `https://github. om/orgs/ORGANISATIONS-NAME/sso` in Deinem Browser und authentifiziere Dich mit Deiner Organisation über SAML SSO unter Verwendung Deines Administrator-Kontos auf der IdP. Wenn zum Beispiel der Name Deiner Organisation `octo-org` ist, lautet die URL `https://github.com/orgs/octo-org/sso`. Weitere Informationen findest Du unter „[Über die Authentifizierung mit SAML Single Sign-On](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on).“

  {% endnote %}
1. Klicke auf **Authorize OktaOAN** (Autorisiere OktaOAN). ![Schaltfläche "Authorize OktaOAN" (autorisiere OktaOAN) um die Okta-SCIM-Integration für Organisationszugriff zu autorisieren](/assets/images/help/saml/okta-scim-integration-authorize-oktaoan.png)
{% data reusables.saml.okta-save-provisioning %}
{% data reusables.saml.okta-edit-provisioning %}

### Weiterführende Informationen

- "[Configuring SAML single sign-on and SCIM for your enterprise account using Okta](/github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta)"
- „[Teamsynchronisierung für Deine Organisation verwalten](/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization#enabling-team-synchronization-for-okta)"
- [SAML verstehen](https://developer.okta.com/docs/concepts/saml/) in der Okta-Dokumentation
- [SCIM verstehen](https://developer.okta.com/docs/concepts/scim/) in der Okta-Dokumentation

---
title: SAML Single Sign-On für Deine Organisation aktivieren und testen
intro: 'Inhaber und Administratoren von Organisationen können SAML Single-Sign-On aktivieren, um eine zusätzliche Sicherheitsebene für die Organisation zu schaffen.'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/enabling-and-testing-saml-single-sign-on-for-your-organization
versions:
  free-pro-team: '*'
---

Du kannst SAML SSO in Deiner Organisation aktivieren, ohne die Verwendung für alle Mitglieder vorzuschreiben. Wenn Du SAML SSO für Deine Organisation aktivierst, aber nicht erzwingst, förderst Du die Annahme dieser Funktion. Sobald die Mehrheit der Organisationsmitglieder SAML SSO verwendet, kannst Du die Nutzung in Deiner Organisation vorschreiben.

Wenn Du SAML SSO aktivierst, aber nicht erzwingst, können Organisationsmitglieder, die SAML SSO nicht verwenden, trotzdem Mitglieder der Organisation bleiben. Weitere Informationen zur erzwungenen Nutzung von SAML SSO findest Du unter „[SAML Single Sign-On für Deine Organisation erzwingen](/articles/enforcing-saml-single-sign-on-for-your-organization).“

{% data reusables.saml.outside-collaborators-exemption %}

Bevor Du SAML SSO in Deiner Organisation erzwingst, stelle sicher, dass Du den Identitätsanbieter (IdP Identity Provider) eingerichtet hast. Weitere Informationen findest Du unter „[Auf die Erzwingung von SAML Single Sign-On in Deiner Organisation vorbereiten](/articles/preparing-to-enforce-saml-single-sign-on-in-your-organization).“

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
5. Wähle unter „SAML single sign-on“ (SAML Single Sign-On) **Enable SAML authentication** (SAML-Authentifizierung aktivieren) aus. ![Kontrollkästchen zum Aktivieren von SAML SSO](/assets/images/help/saml/saml_enable.png)

  {% note %}

  **Hinweis** Nachdem Du SAML SSO aktiviert hast, kannst Du Deine Single Sign-On-Wiederherstellungscodes herunterladen, mit denen Du auf Deine Organisation zugreifen kannst, wenn Dein IdP nicht verfügbar ist. Weitere Informationen findest Du unter „[SAML Single Sign-On-Wiederherstellungscodes Deiner Organisation herunterladen](/articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes).“

  {% endnote %}

6. Gib im Feld „Sign on URL“ (Sign-On-URL) den HTTPS-Endpunkt Deines IdP für Single Sign-On-Anforderungen ein. Diesen Wert findest Du in der IdP-Konfiguration. ![Feld für die URL, auf die Mitglieder bei der Anmeldung weitergeleitet werden](/assets/images/help/saml/saml_sign_on_url.png)
7. Gib optional im Feld „Issuer“ (Aussteller) den Namen Deines SAML-Ausstellers ein. Dadurch wird die Authentizität versendeter Nachrichten verifiziert. ![Feld für den Namen des SAML-Ausstellers](/assets/images/help/saml/saml_issuer.png)
8. Füge unter „Public Certificate“ (Öffentliches Zertifikat) ein Zertifikat ein, um die SAML-Antworten zu verifizieren. ![Feld für das öffentliche Zertifikat des Identity Providers](/assets/images/help/saml/saml_public_certificate.png)
9. Klicken Sie auf {% octicon "pencil" aria-label="The edit icon" %}. Wählen Sie dann in den Dropdownmenüs für „Signature Method“ (Signaturmethode) und „Digest Method“ (Digest-Methode) den von Ihrem SAML-Aussteller verwendeten Hash-Algorithmus aus, um die Integrität der Anforderungen zu verifizieren. ![Dropdownmenüs für die Hash-Algorithmen für die Signaturmethode und Digest-Methode, die Dein SAML-Aussteller verwendet](/assets/images/help/saml/saml_hashing_method.png)
10. Bevor Du SAML SSO für Deine Organisation aktivierst, klicke auf **Test SAML configuration** (SAML-Konfiguration testen), um sicherzustellen, dass die eingegebenen Informationen korrekt sind. ![Schaltfläche zum Testen der SAML-Konfiguration vor dem Erzwingen](/assets/images/help/saml/saml_test.png)

  {% tip %}

  **Tipp:** {% data reusables.saml.testing-saml-sso %}

  {% endtip %}
11. Um SAML SSO zu erzwingen und alle Organisationsmitglieder zu entfernen, die sich nicht über Deinen IdP authentifiziert haben, wähle **Require SAML SSO authentication for all members of the _organization name_ organization** (SAML SSO-Authentifizierung für alle Mitglieder der Organisation vorschreiben) aus. Weitere Informationen zur erzwungenen Nutzung von SAML SSO findest Du unter „[SAML Single Sign-On für Deine Organisation erzwingen](/articles/enforcing-saml-single-sign-on-for-your-organization).“ ![Kontrollkästchen, um SAML SSO für Deine Organisation vorzuschreiben ](/assets/images/help/saml/saml_require_saml_sso.png)
12. Klicke auf **Save** (Speichern). ![Schaltfläche zum Speichern der SAML SSO-Einstellungen](/assets/images/help/saml/saml_save.png)

### Weiterführende Informationen

- „[Informationen zum Identitäts- und Zugriffsmanagement mit SAML Single-Sign-On](/articles/about-identity-and-access-management-with-saml-single-sign-on)“

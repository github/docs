---
title: SAML Single Sign-On für Organisationen in Deinem Enterprise-Konto aktivieren
intro: 'You can control and secure access to resources like repositories, issues, and pull requests by enabling SAML single sign-on (SSO) and centralized authentication through an IdP across all organizations owned by an enterprise account.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: Enterprise owners can enable SAML single sign-on for organizations in an enterprise account.
versions:
  free-pro-team: '*'
topics:
  - Enterprise
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account
---
### About SAML single sign-on for enterprise accounts

{% data reusables.saml.dotcom-saml-explanation %} Weitere Informationen findest Du unter „[Informationen über Identitäts- und Zugriffsmanagement mit SAML Single Sign-On](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)."

{% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.about-saml-access-enterprise-account %} Weitere Informationen findest Du auf „[Anzeigen und Verwalten des SAML-Zugriffs eines Benutzers auf Dein Enterprise-Konto](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)."

{% data reusables.saml.saml-supported-idps %}

{% data reusables.scim.enterprise-account-scim %} If you're not participating in the private beta, SCIM is not supported for enterprise accounts. For more information, see "[About user provisioning for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account)."

### Enabling SAML single-sign on for organizations in your enterprise account

{% note %}

**Hinweis:** Wenn Du die Authentifizierung mit SAML Single Sign-On für Dein Enterprise-Konto aktivierst, werden alle bestehenden SAML-Konfigurationen auf Organisationsebene überschrieben.

{% endnote %}

For more detailed information about how to enable SAML using Okta, see "[Configuring SAML single sign-on and SCIM for your enterprise account using Okta](/github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Wähle unter „SAML single sign-on“ (SAML Single Sign-On) **Enable SAML authentication** (SAML-Authentifizierung aktivieren) aus. ![Kontrollkästchen zum Aktivieren von SAML SSO](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)
6. Gib im Feld **Sign on URL** (Sign-On-URL) den HTTPS-Endpunkt für Deinen IdP für Single Sign-On-Anforderungen ein. Diesen Wert findest Du in der IdP-Konfiguration. ![Feld für die URL, auf die Mitglieder bei der Anmeldung weitergeleitet werden](/assets/images/help/saml/saml_sign_on_url_business.png)
7. Optionally, in the **Issuer** field, type your SAML issuer URL to verify the authenticity of sent messages. ![Feld für den Namen des SAML-Ausstellers](/assets/images/help/saml/saml_issuer.png)
8. Füge unter **Public Certificate** (Öffentliches Zertifikat) ein Zertifikat ein, um die SAML-Antworten zu verifizieren. ![Feld für das öffentliche Zertifikat des Identity Providers](/assets/images/help/saml/saml_public_certificate.png)
9. Um die Integrität der Anforderungen von Ihrem SAML-Aussteller zu überprüfen, klicken Sie auf {% octicon "pencil" aria-label="The edit icon" %}. Then in the "Signature Method" and "Digest Method" drop-downs, choose the hashing algorithm used by your SAML issuer. ![Dropdownmenüs für die Hash-Algorithmen für die Signaturmethode und Digest-Methode, die Dein SAML-Aussteller verwendet](/assets/images/help/saml/saml_hashing_method.png)
10. Bevor Du SAML SSO für Dein Unternehmen aktivierst, klicke auf **Test SAML configuration** (SAML-Konfiguration testen), um sicherzustellen, dass die eingegebenen Informationen korrekt sind. ![Schaltfläche zum Testen der SAML-Konfiguration vor dem Erzwingen](/assets/images/help/saml/saml_test.png)
11. Klicke auf **Save** (Speichern).

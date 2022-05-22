---
title: Ein persönliches Zugriffstoken für die Verwendung mit SAML Single-Sign-On autorisieren
intro: 'Um ein persönliches Zugriffstoken in einer Organisation zu verwenden, die SAML Single Sign-On (SSO) nutzt, musst Du zunächst das Token autorisieren.'
redirect_from:
  - /articles/authorizing-a-personal-access-token-for-use-with-a-saml-single-sign-on-organization/
  - /articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
versions:
  free-pro-team: '*'
topics:
  - SSO
---
Du kannst ein vorhandenes persönliches Zugriffstoken autorisieren oder [ein neues persönliches Zugriffstoken erstellen](/github/authenticating-to-github/creating-a-personal-access-token) und es anschließend autorisieren.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.developer_settings %}
{% data reusables.user_settings.personal_access_tokens %}
3. Klicke neben dem Token, das Du autorisieren möchtest, auf **Enable SSO** (SSO aktivieren) oder **Disable SSO** (SSO deaktivieren). ![Schaltfläche „SSO token authorize" (Autorisieren des SSO-Tokens)](/assets/images/help/settings/sso-allowlist-button.png)
4. Suche die Organisation, für die Du das Token autorisieren möchtest.
4. Klicken Sie auf **Authorize** (Autorisieren). ![Schaltfläche „Token authorize" (Autorisieren des Tokens)](/assets/images/help/settings/token-authorize-button.png)

### Weiterführende Informationen

- "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)"
- „[Informationen zur Authentifizierung mit SAML Single-Sign-On](/articles/about-authentication-with-saml-single-sign-on)“

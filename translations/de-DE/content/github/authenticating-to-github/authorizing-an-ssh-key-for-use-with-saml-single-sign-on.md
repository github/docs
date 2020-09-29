---
title: Einen SSH-Schlüssel für die Verwendung mit SAML Single-Sign-On autorisieren
intro: 'Um einen SSH-Schlüssel in einer Organisation zu verwenden, die SAML Single Sign-On (SSO) nutzt, musst Du den Schlüssel zunächst autorisieren.'
redirect_from:
  - /articles/authorizing-an-ssh-key-for-use-with-a-saml-single-sign-on-organization/
  - /articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
versions:
  free-pro-team: '*'
---

Du kannst einen vorhandenen SSH-Schlüssel autorisieren oder einen neuen SSH-Schlüssel erstellen und ihn anschließend autorisieren. Weitere Informationen zum Erstellen eines neuen SSH-Schlüssels findest Du unter „[Einen neuen SSH-Schlüssel generieren und zum SSH-Agenten hinzufügen](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).“

{% note %}

**Hinweis:** Wenn Deine SSH-Schlüssel-Autorisierung von einer Organisation aufgehoben wird, kannst Du denselben Schlüssel nicht wieder autorisieren. Du musst stattdessen einen neuen SSH-Schlüssel erstellen und ihn autorisieren. Weitere Informationen zum Erstellen eines neuen SSH-Schlüssels findest Du unter „[Einen neuen SSH-Schlüssel generieren und zum SSH-Agenten hinzufügen](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).“

{% endnote %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. Klicke neben dem SSH-Schlüssel, den Du autorisieren möchtest, auf **Enable SSO** (SSO aktivieren) oder **Disable SSO)** (SSO deaktivieren). ![Schaltfläche „SSO token authorize" (Autorisieren des SSO-Tokens)](/assets/images/help/settings/ssh-sso-button.png)
4. Suche die Organisation, für die Du den SSH-Schlüssel autorisieren möchtest.
5. Klicken Sie auf **Authorize** (Autorisieren). ![Schaltfläche „Token authorize" (Autorisieren des Tokens)](/assets/images/help/settings/ssh-sso-authorize.png)

### Weiterführende Informationen

- „[Nach vorhandenen SSH-Schlüsseln suchen](/articles/checking-for-existing-ssh-keys)“
- „[Informationen zur Authentifizierung mit SAML Single-Sign-On](/articles/about-authentication-with-saml-single-sign-on)“

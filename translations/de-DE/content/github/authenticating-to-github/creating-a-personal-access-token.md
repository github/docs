---
title: Creating a personal access token
intro: You should create a personal access token to use in place of a password with the command line or with the API.
redirect_from:
  - /articles/creating-an-oauth-token-for-command-line-use/
  - /articles/creating-an-access-token-for-command-line-use/
  - /articles/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

Personal access tokens (PATs) are an alternative to using passwords for authentication to {% data variables.product.product_name %} when using the [GitHub API](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens) or the [command line](#using-a-token-on-the-command-line).

{% if currentVersion == "free-pro-team@latest" %}If you want to use a PAT to access resources owned by an organization that uses SAML SSO, you must authorize the PAT. Weitere Informationen findest Du unter[„Authentifizierung mit SAML Single Sign-On](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)" und[„Autorisieren eines persönlichen Zugriffstokens für die Verwendung mit SAML Single Sign-On](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)."{% endif %}

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.user_settings.removes-personal-access-tokens %}{% endif %}

### Ein Token erstellen

{% if currentVersion == "free-pro-team@latest" %}1. [Überprüfe Deine E-Mail-Adresse](/github/getting-started-with-github/verifying-your-email-address), falls Du dies noch nicht getan hast.{% endif %}
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.developer_settings %}
{% data reusables.user_settings.personal_access_tokens %}
4. Klicke auf **Generate new token** (Neues Token erzeugen). ![Schaltfläche „Generate new token“ (Neues Token erzeugen)](/assets/images/help/settings/generate_new_token.png)
5. Gib dem Token einen beschreibenden Namen. ![Feld „Token description“ (Token-Beschreibung)](/assets/images/help/settings/token_description.png)
6. Wähle die Scopes oder Berechtigungen aus, die Du diesem Token zuweisen möchtest. Um das Token für den Zugriff auf Repositorys über die Befehlszeile zu verwenden, wähle **repo** aus.
   {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
   ![Token-Scopes auswählen](/assets/images/help/settings/token_scopes.gif)
   {% elsif currentVersion == "github-ae@latest" %}
   ![Token-Scopes auswählen](/assets/images/enterprise/github-ae/settings/access-token-scopes-for-ghae.png)
   {% endif %}
7. Klicke auf **Generate token** (Token erzeugen). ![Schaltfläche „Generate token“ (Token erzeugen)](/assets/images/help/settings/generate_token.png)
8. Click
{% octicon "clippy" aria-label="The copy to clipboard icon" %} to copy the token to your clipboard. For security reasons, after you navigate off the page, you will not be able to see the token again.
   {% if currentVersion == "free-pro-team@latest" %}
   ![Newly created token](/assets/images/help/settings/personal_access_tokens.png)
   {% elsif currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
   ![Newly created token](/assets/images/help/settings/personal_access_tokens_ghe.png)
   {% else %}
   ![Newly created token](/assets/images/help/settings/personal_access_tokens_ghe_legacy.png)
   {% endif %}
   {% warning %}

   **Warnung:** Behandeln Deine Tokens wie Passwörter und halte sie geheim. Wenn Du mit der API arbeitest, verwende Tokens als Umgebungsvariablen, anstatt sie in Deinen Programmen fix zu kodieren.

   {% endwarning %}

{% if currentVersion == "free-pro-team@latest" %}9. Um Ihren Token für die Authentifizierung bei einer Organisation zu verwenden, die SAML SSO nutzt, [autorisieren Sie den Token für die Nutzung einer SAML-SSO-Organisation](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on).{% endif %}

### Ein Token in der Befehlszeile verwenden

{% data reusables.command_line.providing-token-as-password %}

Persönliche Zugriffstoken können nur für HTTPS-Git-Vorgänge verwendet werden. Wenn Ihr Repository eine SSH-Remote-URL verwendet, müssen Sie [das Remote-Repository von SSH auf HTTPS umstellen](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-ssh-to-https).

Wenn Sie nicht nach einem Benutzernamen und einem Passwort gefragt werden, wurden Ihre Anmeldeinformationen möglicherweise auf Ihrem Computer zwischengespeichert. Sie können [Ihre Anmeldeinformationen in der Keychain aktualisieren](/github/getting-started-with-github/updating-credentials-from-the-macos-keychain), um das alte Passwort durch den Token zu ersetzen.

### Weiterführende Informationen

- "[About authentication to GitHub](/github/authenticating-to-github/about-authentication-to-github)"

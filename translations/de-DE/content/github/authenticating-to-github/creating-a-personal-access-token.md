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
---

Personal access tokens (PATs) are an alternative to using passwords for authentication to {% data variables.product.product_name %} when using the [GitHub API](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens) or the [command line](#using-a-token-on-the-command-line).

{% if currentVersion == "free-pro-team@latest" %}If you want to use a PAT to access resources owned by an organization that uses SAML SSO, you must authorize the PAT. Weitere Informationen findest Du unter[„Authentifizierung mit SAML Single Sign-On](/articles/about-authentication-with-saml-single-sign-on)" und[„Autorisieren eines persönlichen Zugriffstokens für die Verwendung mit SAML Single Sign-On](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)."{% endif %}

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.user_settings.removes-personal-access-tokens %}{% endif %}

### Ein Token erstellen

{% if currentVersion == "free-pro-team@latest" %}1. [Überprüfe Deine E-Mail-Adresse](/articles/verifying-your-email-address), falls Du dies noch nicht getan hast.{% endif %}
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.developer_settings %}
{% data reusables.user_settings.personal_access_tokens %}
4. Klicke auf **Generate new token** (Neues Token erzeugen). ![Schaltfläche „Generate new token“ (Neues Token erzeugen)](/assets/images/help/settings/generate_new_token.png)
5. Gib dem Token einen beschreibenden Namen. ![Feld „Token description“ (Token-Beschreibung)](/assets/images/help/settings/token_description.png)
6. Wähle die Scopes oder Berechtigungen aus, die Du diesem Token zuweisen möchtest. Um das Token für den Zugriff auf Repositorys über die Befehlszeile zu verwenden, wähle **repo** aus. ![Token-Scopes auswählen](/assets/images/help/settings/token_scopes.gif)
7. Klicke auf **Generate token** (Token erzeugen). ![Schaltfläche „Generate token“ (Token erzeugen)](/assets/images/help/settings/generate_token.png)
8. Klicke auf {% octicon "clippy" aria-label="The copy to clipboard icon" %}, um das Token in die Zwischenablage zu kopieren. For security reasons, after you navigate off the page, you will not be able to see the token again.{% if currentVersion == "free-pro-team@latest" %} ![Newly created token](/assets/images/help/settings/personal_access_tokens.png){% else %}
![Newly created token](/assets/images/help/settings/personal_access_tokens_ghe.png){% endif %}

   {% warning %}

   **Warnung:** Behandeln Deine Tokens wie Passwörter und halte sie geheim. Wenn Du mit der API arbeitest, verwende Tokens als Umgebungsvariablen, anstatt sie in Deinen Programmen fix zu kodieren.

   {% endwarning %}
{% if currentVersion == "free-pro-team@latest" %}9. Um Dein Token für die Authentifizierung bei einer Organisation zu verwenden, die SAML SSO nutzt, [autorisiere das Token für die Nutzung in einer SAML-SSO-Organisation](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on).{% endif %}

### Ein Token in der Befehlszeile verwenden

{% data reusables.command_line.providing-token-as-password %}

Persönliche Zugriffstoken können nur für HTTPS-Git-Vorgänge verwendet werden. Wenn Ihr Repository eine SSH-Remote-URL verwendet, müssen Sie [das Remote-Repository von SSH auf HTTPS umstellen](/articles/changing-a-remote-s-url/#switching-remote-urls-from-ssh-to-https).

Wenn Sie nicht nach einem Benutzernamen und einem Passwort gefragt werden, wurden Ihre Anmeldeinformationen möglicherweise auf Ihrem Computer zwischengespeichert. Sie können [Ihre Anmeldeinformationen in der Keychain aktualisieren](/articles/updating-credentials-from-the-osx-keychain), um das alte Passwort durch den Token zu ersetzen.

### Weiterführende Informationen

- "[About authentication to GitHub](/github/authenticating-to-github/about-authentication-to-github)"

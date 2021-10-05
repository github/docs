---
title: Creating a personal access token
intro: You should create a personal access token to use in place of a password with the command line or with the API.
redirect_from:
  - /articles/creating-an-oauth-token-for-command-line-use/
  - /articles/creating-an-access-token-for-command-line-use/
  - /articles/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Identity
  - Access management
shortTitle: Create a PAT
---

{% note %}

**Note:** If you use {% data variables.product.prodname_cli %} to authenticate to {% data variables.product.product_name %} on the command line, you can skip generating a personal access token and authenticate via the web browser instead. For more information about authenticating with {% data variables.product.prodname_cli %}, see [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

{% endnote %}

Personal access tokens (PATs) are an alternative to using passwords for authentication to {% data variables.product.product_name %} when using the [GitHub API](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens) or the [command line](#using-a-token-on-the-command-line).

{% ifversion fpt %}If you want to use a PAT to access resources owned by an organization that uses SAML SSO, you must authorize the PAT. Weitere Informationen findest Du unter[„Authentifizierung mit SAML Single Sign-On](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)" und[„Autorisieren eines persönlichen Zugriffstokens für die Verwendung mit SAML Single Sign-On](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)."{% endif %}

{% ifversion fpt %}{% data reusables.user_settings.removes-personal-access-tokens %}{% endif %}

A token with no assigned scopes can only access public information. Um den Token für den Zugriff auf Repositorys über die Befehlszeile zu verwenden, wählen Sie `repo` aus. For more information, see “[Available scopes](/apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes)”.

## Ein Token erstellen

{% ifversion fpt %}1. [Überprüfe Deine E-Mail-Adresse](/github/getting-started-with-github/verifying-your-email-address), falls Du dies noch nicht getan hast.{% endif %}
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.developer_settings %}
{% data reusables.user_settings.personal_access_tokens %}
4. Klicke auf **Generate new token** (Neues Token erzeugen). ![Schaltfläche „Generate new token“ (Neues Token erzeugen)](/assets/images/help/settings/generate_new_token.png)
5. Geben Sie dem Token einen beschreibenden Namen. ![Token description field](/assets/images/help/settings/token_description.png){% ifversion fpt or ghes > 3.2 or ghae-issue-4374 %}
6. To give your token an expiration, select the **Expiration** drop-down menu, then click a default or use the calendar picker. ![Token expiration field](/assets/images/help/settings/token_expiration.png){% endif %}
7. Wähle die Scopes oder Berechtigungen aus, die Du diesem Token zuweisen möchtest. Um das Token für den Zugriff auf Repositorys über die Befehlszeile zu verwenden, wähle **repo** aus.
   {% ifversion fpt or ghes %}
   ![Token-Scopes auswählen](/assets/images/help/settings/token_scopes.gif)
   {% elsif ghae %}
   ![Token-Scopes auswählen](/assets/images/enterprise/github-ae/settings/access-token-scopes-for-ghae.png)
   {% endif %}
8. Klicke auf **Generate token** (Token erzeugen). ![Schaltfläche „Generate token“ (Token erzeugen)](/assets/images/help/settings/generate_token.png)
   {% ifversion fpt %}
   ![Newly created token](/assets/images/help/settings/personal_access_tokens.png)
   {% elsif ghes > 3.1 or ghae-next %}
   ![Newly created token](/assets/images/help/settings/personal_access_tokens_ghe.png)
   {% else %}
   ![Newly created token](/assets/images/help/settings/personal_access_tokens_ghe_legacy.png)
   {% endif %}
   {% warning %}

   **Warnung:** Behandeln Deine Tokens wie Passwörter und halte sie geheim. Wenn Du mit der API arbeitest, verwende Tokens als Umgebungsvariablen, anstatt sie in Deinen Programmen fix zu kodieren.

   {% endwarning %}

{% ifversion fpt %}9. Um Ihren Token für die Authentifizierung bei einer Organisation zu verwenden, die SAML SSO nutzt, [autorisieren Sie den Token für die Nutzung einer SAML-SSO-Organisation](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on).{% endif %}

## Ein Token in der Befehlszeile verwenden

{% data reusables.command_line.providing-token-as-password %}

Persönliche Zugriffstoken können nur für HTTPS-Git-Vorgänge verwendet werden. Wenn Ihr Repository eine SSH-Remote-URL verwendet, müssen Sie [das Remote-Repository von SSH auf HTTPS umstellen](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-ssh-to-https).

Wenn Sie nicht nach einem Benutzernamen und einem Passwort gefragt werden, wurden Ihre Anmeldeinformationen möglicherweise auf Ihrem Computer zwischengespeichert. Sie können [Ihre Anmeldeinformationen in der Keychain aktualisieren](/github/getting-started-with-github/updating-credentials-from-the-macos-keychain), um das alte Passwort durch den Token zu ersetzen.

Instead of manually entering your PAT for every HTTPS Git operation, you can cache your PAT with a Git client. Git will temporarily store your credentials in memory until an expiry interval has passed. You can also store the token in a plain text file that Git can read before every request. For more information, see "[Caching your {% data variables.product.prodname_dotcom %} credentials in Git](/github/getting-started-with-github/caching-your-github-credentials-in-git)."

## Weiterführende Informationen

- "[About authentication to GitHub](/github/authenticating-to-github/about-authentication-to-github)"{% ifversion fpt or ghae-issue-4374 or ghes > 3.2 %}
- "[Token expiration and revocation](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation)"{% endif %}

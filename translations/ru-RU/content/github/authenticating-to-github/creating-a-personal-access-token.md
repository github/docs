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

{% if currentVersion == "free-pro-team@latest" %}If you want to use a PAT to access resources owned by an organization that uses SAML SSO, you must authorize the PAT. For more information, see "[About authentication with SAML single sign-on](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)" and "[Authorizing a personal access token for use with SAML single sign-on](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)."{% endif %}

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.user_settings.removes-personal-access-tokens %}{% endif %}

### Creating a token

{% if currentVersion == "free-pro-team@latest" %}1. [Verify your email address](/github/getting-started-with-github/verifying-your-email-address), if it hasn't been verified yet.{% endif %}
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.developer_settings %}
{% data reusables.user_settings.personal_access_tokens %}
4. Click **Generate new token**. ![Generate new token button](/assets/images/help/settings/generate_new_token.png)
5. Give your token a descriptive name. ![Token description field](/assets/images/help/settings/token_description.png)
6. Select the scopes, or permissions, you'd like to grant this token. To use your token to access repositories from the command line, select **repo**.
   {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
   ![Selecting token scopes](/assets/images/help/settings/token_scopes.gif)
   {% elsif currentVersion == "github-ae@latest" %}
   ![Selecting token scopes](/assets/images/enterprise/github-ae/settings/access-token-scopes-for-ghae.png)
   {% endif %}
7. Click **Generate token**. ![Generate token button](/assets/images/help/settings/generate_token.png)
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

   **Warning:** Treat your tokens like passwords and keep them secret. When working with the API, use tokens as environment variables instead of hardcoding them into your programs.

   {% endwarning %}

{% if currentVersion == "free-pro-team@latest" %}9. To use your token to authenticate to an organization that uses SAML SSO, [authorize the token for use with a SAML single-sign-on organization](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on).{% endif %}

### Using a token on the command line

{% data reusables.command_line.providing-token-as-password %}

Personal access tokens can only be used for HTTPS Git operations. If your repository uses an SSH remote URL, you will need to [switch the remote from SSH to HTTPS](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-ssh-to-https).

If you are not prompted for your username and password, your credentials may be cached on your computer. You can [update your credentials in the Keychain](/github/getting-started-with-github/updating-credentials-from-the-macos-keychain) to replace your old password with the token.

### Дополнительная литература

- "[About authentication to GitHub](/github/authenticating-to-github/about-authentication-to-github)"

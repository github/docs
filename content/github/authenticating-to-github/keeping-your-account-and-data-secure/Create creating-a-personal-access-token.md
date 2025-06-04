---
title: Creating a personal access token
intro: You should create a personal access token to use in place of a password with the command line or with the API.
redirect_from:
  - /articles/creating-an-oauth-token-for-command-line-use/
  - /articles/creating-an-access-token-for-command-line-use/
  - /articles/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Identity
  - Access management
shortTitle: Create a PAT
---
Personal access tokens (PATs) are an alternative to using passwords for authentication to {% data variables.product.product_name %} when using the [GitHub API](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens) or the [command line](#using-a-token-on-the-command-line).

{% ifversion fpt %}If you want to use a PAT to access resources owned by an organization that uses SAML SSO, you must authorize the PAT. For more information, see "[About authentication with SAML single sign-on](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)" and "[Authorizing a personal access token for use with SAML single sign-on](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)."{% endif %}

{% ifversion fpt %}{% data reusables.user_settings.removes-personal-access-tokens %}{% endif %}

## Creating a token

{% ifversion fpt %}1. [Verify your email address](/github/getting-started-with-github/verifying-your-email-address), if it hasn't been verified yet.{% endif %}
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.developer_settings %}
{% data reusables.user_settings.personal_access_tokens %}
4. Click **Generate new token**.
   ![Generate new token button](/assets/images/help/settings/generate_new_token.png)
5. Give your token a descriptive name.
   ![Token description field](/assets/images/help/settings/token_description.png){% ifversion fpt or ghes > 3.1 or ghae-issue-4374 %}
6. To give your token an expiration, select the **Expiration** drop-down menu, then click a default or use the calendar picker.
   ![Token expiration field](/assets/images/help/settings/token_expiration.png){% endif %}
7. Select the scopes, or permissions, you'd like to grant this token. To use your token to access repositories from the command line, select **repo**.
   {% ifversion fpt or ghes %}
   ![Selecting token scopes](/assets/images/help/settings/token_scopes.gif)
   {% elsif ghae %}
   ![Selecting token scopes](/assets/images/enterprise/github-ae/settings/access-token-scopes-for-ghae.png)
   {% endif %}
8. Click **Generate token**.
   ![Generate token button](/assets/images/help/settings/generate_token.png)
   {% ifversion fpt %}
   ![Newly created token](/assets/images/help/settings/personal_access_tokens.png)
   {% elsif ghes > 3.1 or ghae-next %}
   ![Newly created token](/assets/images/help/settings/personal_access_tokens_ghe.png)
   {% else %}
   ![Newly created token](/assets/images/help/settings/personal_access_tokens_ghe_legacy.png)
   {% endif %}
   {% warning %}

   **Warning:** Treat your tokens like passwords and keep them secret. When working with the API, use tokens as environment variables instead of hardcoding them into your programs. 

   {% endwarning %}

{% ifversion fpt %}9. To use your token to authenticate to an organization that uses SAML SSO, [authorize the token for use with a SAML single-sign-on organization](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on).{% endif %}

## Using a token on the command line

{% data reusables.command_line.providing-token-as-password %}

Personal access tokens can only be used for HTTPS Git operations. If your repository uses an SSH remote URL, you will need to [switch the remote from SSH to HTTPS](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-ssh-to-https).

If you are not prompted for your username and password, your credentials may be cached on your computer. You can [update your credentials in the Keychain](/github/getting-started-with-github/updating-credentials-from-the-macos-keychain) to replace your old password with the token.

Instead of manually entering your PAT for every HTTPS Git operation, you can cache your PAT with a Git client. Git will temporarily store your credentials in memory until an expiry interval has passed. You can also store the token in a plain text file that Git can read before every request. For more information, see "[Caching your {% data variables.product.prodname_dotcom %} credentials in Git](/github/getting-started-with-github/caching-your-github-credentials-in-git)."

## Further reading

- "[About authentication to GitHub](/github/authenticating-to-github/about-authentication-to-github)"

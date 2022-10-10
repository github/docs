---
title: Authorizing a personal access token for use with SAML single sign-on
intro: 'To use a personal access token with an organization that uses SAML single sign-on (SSO), you must first authorize the token.'
redirect_from:
  - /articles/authorizing-a-personal-access-token-for-use-with-a-saml-single-sign-on-organization
  - /articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - SSO
shortTitle: PAT with SAML
---
You can authorize an existing personal access token, or [create a new personal access token](/github/authenticating-to-github/creating-a-personal-access-token) and then authorize it.

{% data reusables.saml.must-authorize-linked-identity %}

{% data reusables.saml.authorized-creds-info %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.personal_access_tokens %}
3. Next to the token you'd like to authorize, click **Configure SSO**. {% data reusables.saml.authenticate-with-saml-at-least-once %}

   ![Screenshot of the dropdown menu to configure SSO for a personal access token](/assets/images/help/settings/sso-allowlist-button.png)
4. To the right of the organization you'd like to authorize the token for, click **Authorize**.
   ![Token authorize button](/assets/images/help/settings/token-authorize-button.png)

## Further reading

- "[Creating a personal access token](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)"
- "[About authentication with SAML single sign-on](/articles/about-authentication-with-saml-single-sign-on)"

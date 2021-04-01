---
title: Authorizing a personal access token for use with SAML single sign-on
intro: 'To use a personal access token with an organization that uses SAML single sign-on (SSO), you must first authorize the token.'
redirect_from:
  - /articles/authorizing-a-personal-access-token-for-use-with-a-saml-single-sign-on-organization/
  - /articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
versions:
  free-pro-team: '*'
topics:
  - sso
---

You can authorize an existing personal access token, or [create a new personal access token](/github/authenticating-to-github/creating-a-personal-access-token) and then authorize it.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.developer_settings %}
{% data reusables.user_settings.personal_access_tokens %}
3. Next to the token you'd like to authorize, click **Enable SSO** or **Disable SSO**. ![SSO token authorize button](/assets/images/help/settings/sso-allowlist-button.png)
4. Find the organization you'd like to authorize the access token for.
4. Click **Authorize**. ![Token authorize button](/assets/images/help/settings/token-authorize-button.png)

### 더 읽을거리

- "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)"
- "[About authentication with SAML single sign-on](/articles/about-authentication-with-saml-single-sign-on)"

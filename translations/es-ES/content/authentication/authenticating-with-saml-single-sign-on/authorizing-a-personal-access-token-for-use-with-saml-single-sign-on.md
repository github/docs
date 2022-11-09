---
title: Authorizing a personal access token for use with SAML single sign-on
intro: 'To use a {% data variables.product.pat_v1 %} with an organization that uses SAML single sign-on (SSO), you must first authorize the token.'
redirect_from:
  - /articles/authorizing-a-personal-access-token-for-use-with-a-saml-single-sign-on-organization
  - /articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - SSO
shortTitle: '{% data variables.product.pat_generic_caps %} with SAML'
---
You must authorize your {% data variables.product.pat_v1 %} after creation before the token can access an organization that uses SAML single sign-on (SSO). For more information about creating a new {% data variables.product.pat_v1 %}, see "[Creating a {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)."{% ifversion pat-v2 %} {% data variables.product.pat_v2_caps %}s are authorized during token creation, before access to the organization is granted.{% endif %}

{% data reusables.saml.must-authorize-linked-identity %}

{% data reusables.saml.authorized-creds-info %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.personal_access_tokens %}
3. Next to the token you'd like to authorize, click **Configure SSO**. {% data reusables.saml.authenticate-with-saml-at-least-once %}

   ![Screenshot of the dropdown menu to configure SSO for a {% data variables.product.pat_v1 %}](/assets/images/help/settings/sso-allowlist-button.png)
4. To the right of the organization you'd like to authorize the token for, click **Authorize**.
   ![Token authorize button](/assets/images/help/settings/token-authorize-button.png)

## Further reading

- "[Creating a {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)"
- "[About authentication with SAML single sign-on](/articles/about-authentication-with-saml-single-sign-on)"

---
title: Authorizing an SSH key for use with SAML single sign-on
intro: 'To use an SSH key with an organization that uses SAML single sign-on (SSO), you must first authorize the key.'
redirect_from:
  - /articles/authorizing-an-ssh-key-for-use-with-a-saml-single-sign-on-organization
  - /articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - SSO
shortTitle: SSH Key with SAML
---
You can authorize an existing SSH key, or create a new SSH key and then authorize it. For more information about creating a new SSH key, see "[Generating a new SSH key and adding it to the ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)."

{% data reusables.saml.must-authorize-linked-identity %}

{% data reusables.saml.authorized-creds-info %}

{% note %}

**Note:** If your SSH key authorization is revoked by an organization, you will not be able to reauthorize the same key. You will need to create a new SSH key and authorize it. For more information about creating a new SSH key, see "[Generating a new SSH key and adding it to the ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)."

{% endnote %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
1. To the right of the SSH key you'd like to authorize, click **Configure SSO**. {% data reusables.saml.authenticate-with-saml-at-least-once %}

   ![Screenshot of the SSO token authorize button](/assets/images/help/settings/ssh-sso-button.png)
1. To the right of the organization you'd like to authorize the SSH key for, click **Authorize**.

   ![Screenshot of the token authorize button](/assets/images/help/settings/ssh-sso-authorize.png)

## Further reading

- "[Checking for existing SSH keys](/articles/checking-for-existing-ssh-keys)"
- "[About authentication with SAML single sign-on](/articles/about-authentication-with-saml-single-sign-on)"

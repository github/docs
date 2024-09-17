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

## About authorization of SSH keys

You can authorize an existing SSH key, or create a new SSH key and then authorize it. For more information about creating a new SSH key, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)."

{% data reusables.saml.must-authorize-linked-identity %}

{% data reusables.saml.authorized-creds-info %}

{% note %}

**Note:** If your SSH key authorization is revoked by an organization, you will not be able to reauthorize the same key. You will need to create a new SSH key and authorize it. For more information about creating a new SSH key, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)."

{% endnote %}

You do not need to authorize SSH certificates signed by your organization's SSH certificate authority (CA).

## Authorizing an SSH key

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
1. To the right of the SSH key you'd like to authorize, click **Configure SSO**. {% data reusables.saml.authenticate-with-saml-at-least-once %}

   ![Screenshot of the "Authentication Keys" section. Next to a key, a dropdown menu, labeled "Configure SSO," is outlined in orange.](/assets/images/help/settings/ssh-sso-button.png)
1. In the dropdown menu, to the right of the organization you'd like to authorize the SSH key for, click **Authorize**.

## Further reading

* "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)"
* "[AUTOTITLE](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)"

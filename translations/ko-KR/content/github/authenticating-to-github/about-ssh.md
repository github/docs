---
title: About SSH
intro: 'Using the SSH protocol, you can connect and authenticate to remote servers and services. With SSH keys, you can connect to {% data variables.product.product_name %} without supplying your username or password at each visit.'
redirect_from:
  - /articles/about-ssh
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

When you set up SSH, you'll [generate an SSH key and add it to the ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) and then [add the key to your {% data variables.product.product_name %} account](/articles/adding-a-new-ssh-key-to-your-github-account). Adding the SSH key to the ssh-agent ensures that your SSH key has an extra layer of security through the use of a passphrase. For more information, see "[Working with SSH key passphrases](/articles/working-with-ssh-key-passphrases)."

{% if currentVersion == "free-pro-team@latest" %}To use your SSH key with a repository owned by an organization that uses SAML single sign-on, you'll need to authorize it first. For more information, see "[Authorizing an SSH key for use with SAML single sign-on](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)."{% endif %}

We recommend that you regularly [review your SSH keys list](/articles/reviewing-your-ssh-keys) and revoke any that are invalid or have been compromised.

{% if currentVersion == "free-pro-team@latest" %}
If you haven't used your SSH key for a year, then
{% data variables.product.prodname_dotcom %} will automatically delete your inactive SSH key as a security precaution. For more information, see "[Deleted or missing SSH keys](/articles/deleted-or-missing-ssh-keys)."
{% endif %}

If you're a member of an organization that provides SSH certificates, you can use your certificate to access that organization's repositories without adding the certificate to your {% data variables.product.product_name %} account. For more information, see "[About SSH certificate authorities](/articles/about-ssh-certificate-authorities)."

### 더 읽을거리

- "[Checking for existing SSH keys](/articles/checking-for-existing-ssh-keys)"
- "[Testing your SSH connection](/articles/testing-your-ssh-connection)"
- "[Working with SSH key passphrases](/articles/working-with-ssh-key-passphrases)"
- "[Troubleshooting SSH](/articles/troubleshooting-ssh)"
{%- if currentVersion == "free-pro-team@latest" %}
- "[Authorizing an SSH key for use with SAML single sign-on](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)"
{%- endif %}

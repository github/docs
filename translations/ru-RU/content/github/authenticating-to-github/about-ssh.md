---
title: About SSH
intro: 'Using the SSH protocol, you can connect and authenticate to remote servers and services. With SSH keys, you can connect to {% data variables.product.product_name %} without supplying your username and personal access token at each visit.'
redirect_from:
  - /articles/about-ssh
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---

When you set up SSH, you will need to generate a new SSH key and add it to the ssh-agent. You must add the SSH key to your account on {% data variables.product.product_name %} before you use the key to authenticate. For more information, see "[Generating a new SSH key and adding it to the ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)" and "[Adding a new SSH key to your {% data variables.product.prodname_dotcom %} account](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)."

You can further secure your SSH key by using a hardware security key, which requires the physical hardware security key to be attached to your computer when the key pair is used to authenticate with SSH. You can also secure your SSH key by adding your key to the ssh-agent and using a passphrase. For more information, see "[Working with SSH key passphrases](/github/authenticating-to-github/working-with-ssh-key-passphrases)."

{% if currentVersion == "free-pro-team@latest" %}To use your SSH key with a repository owned by an organization that uses SAML single sign-on, you must authorize the key. For more information, see "[Authorizing an SSH key for use with SAML single sign-on](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)."{% endif %}

To maintain account security, you can regularly review your SSH keys list and revoke any keys that are invalid or have been compromised. For more information, see "[Reviewing your SSH keys](/github/authenticating-to-github/reviewing-your-ssh-keys)."

{% if currentVersion == "free-pro-team@latest" %}
If you haven't used your SSH key for a year, then
{% data variables.product.prodname_dotcom %} will automatically delete your inactive SSH key as a security precaution. For more information, see "[Deleted or missing SSH keys](/articles/deleted-or-missing-ssh-keys)."
{% endif %}

If you're a member of an organization that provides SSH certificates, you can use your certificate to access that organization's repositories without adding the certificate to your {% data variables.product.product_name %} account. For more information, see "[About SSH certificate authorities](/articles/about-ssh-certificate-authorities)."

### Дополнительная литература

- "[Checking for existing SSH keys](/articles/checking-for-existing-ssh-keys)"
- "[Testing your SSH connection](/articles/testing-your-ssh-connection)"
- "[Troubleshooting SSH](/articles/troubleshooting-ssh)"

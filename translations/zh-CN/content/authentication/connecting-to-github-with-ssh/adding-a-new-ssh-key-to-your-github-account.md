---
title: Adding a new SSH key to your GitHub account
intro: 'To configure your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} to use your new (or existing) SSH key, you''ll also need to add the key to your account.'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Add a new SSH key
---

## About addition of SSH keys to your account

{% data reusables.ssh.about-ssh %} For more information, see "[About SSH](/authentication/connecting-to-github-with-ssh/about-ssh)."

{% ifversion ssh-commit-verification %}You can also use SSH to sign commits and tags. For more information about commit signing, see "[About commit signature verification](/articles/about-commit-signature-verification)."{% endif %}

After you generate an SSH key pair, you must add the public key to {% ifversion fpt or ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} to enable SSH access for your account.

## Prerequisites

Before adding a new SSH key to your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, complete the following steps.

1. Check for existing SSH keys. For more information, see "[Checking for existing SSH keys](/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)."
1. Generate a new SSH key and add it to your machine's SSH agent. For more information, see "[Generating a new SSH key and adding it to the ssh-agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)."

## Adding a new SSH key to your account

After adding a new SSH authentication key to your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, you can reconfigure any local repositories to use SSH. For more information, see "[Switching remote URLs from HTTPS to SSH](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-https-to-ssh)."

{% data reusables.ssh.key-type-support %}

{% webui %}

{% data reusables.gpg.copy-ssh-public-key %}
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
4. Click **New SSH key** or **Add SSH key**.
{% ifversion ssh-commit-verification %}
  ![SSH Key button](/assets/images/help/settings/ssh-add-ssh-key-with-auth.png)
{% else %}
  ![SSH Key button](/assets/images/help/settings/ssh-add-ssh-key.png)
{% endif %}
5. In the "Title" field, add a descriptive label for the new key. For example, if you're using a personal laptop, you might call this key "Personal laptop".
{% ifversion ssh-commit-verification %}
6. Select the type of key, either authentication or signing. For more information about commit signing, see "[About commit signature verification](/articles/about-commit-signature-verification)."
{% endif %}
7. Paste your key into the "Key" field.
{% ifversion ssh-commit-verification %}
  ![The key field](/assets/images/help/settings/ssh-key-paste-with-type.png)
{% else %}
  ![The key field](/assets/images/help/settings/ssh-key-paste.png)
{% endif %}
8. Click **Add SSH key**.
  ![The Add key button](/assets/images/help/settings/ssh-add-key.png)
{% data reusables.user-settings.sudo-mode-popup %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Before you can use the {% data variables.product.prodname_cli %} to add an SSH key to your account, you must authenticate to the {% data variables.product.prodname_cli %}. For more information, see [`gh auth login`](https://cli.github.com/manual/gh_auth_login) in the {% data variables.product.prodname_cli %} documentation.

{% ifversion ssh-commit-verification %}At present, you can only use {% data variables.product.prodname_cli %} to add SSH authentication keys, you cannot add SSH signing keys.{% endif %}

To add an SSH authentication key to your GitHub account, use the `ssh-key add` subcommand, specifying your public key.

```shell
gh ssh-key add KEY-FILE
```

To include a title for the new key, use the `-t` or `--title` flag.

```shell
gh ssh-key add KEY-FILE --title "personal laptop"
```

If you generated your SSH key by following the instructions in "[Generating a new SSH key](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)", you can add the key to your account with this command.

```shell
gh ssh-key add ~/.ssh/id_ed25519.pub
```

{% endcli %}

{% ifversion fpt or ghec %}
## Further reading

- "[Authorizing an SSH key for use with SAML single sign-on](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)"
{% endif %}

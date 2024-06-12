---
title: Adding a new SSH key to your GitHub account
intro: 'To configure your account on {% data variables.location.product_location %} to use your new (or existing) SSH key, you''ll also need to add the key to your account.'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Add a new SSH key
---

## About addition of SSH keys to your account

{% data reusables.ssh.about-ssh %} For more information, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/about-ssh)."

You can also use SSH to sign commits and tags. For more information about commit signing, see "[AUTOTITLE](/authentication/managing-commit-signature-verification/about-commit-signature-verification)."

After you generate an SSH key pair, you must add the public key to {% data variables.location.product_location %} to enable SSH access for your account.

## Prerequisites

Before adding a new SSH key to your account on {% data variables.location.product_location %}, complete the following steps.

1. Check for existing SSH keys. For more information, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)."
1. Generate a new SSH key and add it to your machine's SSH agent. For more information, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)."

## Adding a new SSH key to your account

You can add an SSH key and use it for authentication, or commit signing, or both. If you want to use the same SSH key for both authentication and signing, you need to upload it twice.

After adding a new SSH authentication key to your account on {% data variables.location.product_location %}, you can reconfigure any local repositories to use SSH. For more information, see "[AUTOTITLE](/get-started/getting-started-with-git/managing-remote-repositories#switching-remote-urls-from-https-to-ssh)."

{% data reusables.ssh.key-type-support %}

{% webui %}

{% data reusables.gpg.copy-ssh-public-key %}

{% data reusables.user-settings.access_settings %}

{% data reusables.user-settings.ssh %}

1. Click **New SSH key** or **Add SSH key**.
1. In the "Title" field, add a descriptive label for the new key. For example, if you're using a personal laptop, you might call this key "Personal laptop".
1. Select the type of key, either authentication or signing. For more information about commit signing, see "[AUTOTITLE](/authentication/managing-commit-signature-verification/about-commit-signature-verification)."
1. In the "Key" field, paste your public key.
1. Click **Add SSH key**.
{% data reusables.user-settings.sudo-mode-popup %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Before you can use the {% data variables.product.prodname_cli %} to add an SSH key to your account, you must authenticate to the {% data variables.product.prodname_cli %}. For more information, see [`gh auth login`](https://cli.github.com/manual/gh_auth_login) in the {% data variables.product.prodname_cli %} documentation.

To add an SSH key to your GitHub account, use the `ssh-key add` subcommand, specifying your public key. For authentication keys, if you're prompted to request additional scopes, follow the instructions in the command line.

```shell
gh ssh-key add KEY-FILE --type {authentication|signing}
```

To include a title for the new key, use the `-t` or `--title` flag.

```shell
gh ssh-key add KEY-FILE --title "personal laptop"
```

If you generated your SSH key by following the instructions in "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)", you can add the key to your account with this command.

```shell
gh ssh-key add ~/.ssh/id_ed25519.pub --type signing
```

{% endcli %}

{% ifversion fpt or ghec %}

## Further reading

- "[AUTOTITLE](/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)"
{% endif %}

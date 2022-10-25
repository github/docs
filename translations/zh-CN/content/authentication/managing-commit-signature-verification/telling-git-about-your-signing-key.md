---
title: Telling Git about your signing key
intro: 'To sign commits locally, you need to inform Git that there''s a GPG{% ifversion ssh-commit-verification %}, SSH,{% endif %} or X.509 key you''d like to use.'
redirect_from:
  - /articles/telling-git-about-your-gpg-key
  - /articles/telling-git-about-your-signing-key
  - /github/authenticating-to-github/telling-git-about-your-signing-key
  - /github/authenticating-to-github/managing-commit-signature-verification/telling-git-about-your-signing-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Tell Git your signing key
---
{% mac %}

## Telling Git about your GPG key

If you're using a GPG key that matches your committer identity and your verified email address associated with your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, then you can begin signing commits and signing tags.

{% note %}

If you don't have a GPG key that matches your committer identity, you need to associate an email with an existing key. For more information, see "[Associating an email with your GPG key](/articles/associating-an-email-with-your-gpg-key)".

{% endnote %}

If you have multiple GPG keys, you need to tell Git which one to use.

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.configure-gpg-signing %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
{% data reusables.gpg.paste-gpg-key-id %}
{% data reusables.gpg.set-auto-sign %}
1. If you aren't using the GPG suite, run the following command in the `zsh` shell to add the GPG key to your `.zshrc` file, if it exists, or your `.zprofile` file:
  ```shell
  $ if [ -r ~/.zshrc ]; then echo 'export GPG_TTY=$(tty)' >> ~/.zshrc; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.zprofile; fi
  ```
  Alternatively, if you use the `bash` shell, run this command:
  ```shell
  $ if [ -r ~/.bash_profile ]; then echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.profile; fi
  ```
1. Optionally, to prompt you to enter a PIN or passphrase when required, install `pinentry-mac`. For example, using [Homebrew](https://brew.sh/):
  ```shell
  $ brew install pinentry-mac
  $ echo "pinentry-program $(which pinentry-mac)" >> ~/.gnupg/gpg-agent.conf
  $ killall gpg-agent
  ```

{% endmac %}

{% windows %}

## Telling Git about your GPG key

If you're using a GPG key that matches your committer identity and your verified email address associated with your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, then you can begin signing commits and signing tags.

{% note %}

If you don't have a GPG key that matches your committer identity, you need to associate an email with an existing key. For more information, see "[Associating an email with your GPG key](/articles/associating-an-email-with-your-gpg-key)".

{% endnote %}

If you have multiple GPG keys, you need to tell Git which one to use.

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.configure-gpg-signing %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
{% data reusables.gpg.paste-gpg-key-id %}
{% data reusables.gpg.set-auto-sign %}

{% endwindows %}

{% linux %}

## Telling Git about your GPG key

If you're using a GPG key that matches your committer identity and your verified email address associated with your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, then you can begin signing commits and signing tags.

{% note %}

If you don't have a GPG key that matches your committer identity, you need to associate an email with an existing key. For more information, see "[Associating an email with your GPG key](/articles/associating-an-email-with-your-gpg-key)".

{% endnote %}

If you have multiple GPG keys, you need to tell Git which one to use.

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.configure-gpg-signing %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
{% data reusables.gpg.paste-gpg-key-id %}
{% data reusables.gpg.set-auto-sign %}
1. To add your GPG key to your `.bashrc` startup file, run the following command:
  ```bash
  $ [ -f ~/.bashrc ] && echo 'export GPG_TTY=$(tty)' >> ~/.bashrc
  ```
{% endlinux %}
{% ifversion ssh-commit-verification %}

## Telling Git about your SSH key

You can use an existing SSH key to sign commits and tags, or generate a new one specifically for signing. For more information, see "[Generating a new SSH key and adding it to the ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)."

{% data reusables.gpg.ssh-git-version %}

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.configure-ssh-signing %}
{% data reusables.gpg.copy-ssh-public-key %}
{% data reusables.gpg.paste-ssh-public-key %}

{% endif %}

{% data reusables.gpg.x-509-key %}
## Further reading

- "[Adding a new SSH key to your GitHub account](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)."
- "[Signing commits](/articles/signing-commits)"
- "[Signing tags](/articles/signing-tags)"

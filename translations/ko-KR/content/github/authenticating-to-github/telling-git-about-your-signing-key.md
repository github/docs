---
title: Telling Git about your signing key
intro: 'To sign commits locally, you need to inform Git that there''s a GPG or X.509 key you''d like to use.'
redirect_from:
  - /articles/telling-git-about-your-gpg-key/
  - /articles/telling-git-about-your-signing-key
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

{% mac %}

### Telling Git about your GPG key

If you're using a GPG key that matches your committer identity and your verified email address associated with your {% data variables.product.product_name %} account, then you can begin signing commits and signing tags.

{% note %}

If you don't have a GPG key that matches your committer identity, you need to associate an email with an existing key. For more information, see "[Associating an email with your GPG key](/articles/associating-an-email-with-your-gpg-key)".

{% endnote %}

If you have multiple GPG keys, you need to tell Git which one to use.

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
{% data reusables.gpg.paste-gpg-key-id %}
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

{% data reusables.gpg.x-509-key %}

{% endmac %}

{% windows %}

### Telling Git about your GPG key

If you're using a GPG key that matches your committer identity and your verified email address associated with your {% data variables.product.product_name %} account, then you can begin signing commits and signing tags.

{% note %}

If you don't have a GPG key that matches your committer identity, you need to associate an email with an existing key. For more information, see "[Associating an email with your GPG key](/articles/associating-an-email-with-your-gpg-key)".

{% endnote %}

If you have multiple GPG keys, you need to tell Git which one to use.

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
{% data reusables.gpg.paste-gpg-key-id %}

{% data reusables.gpg.x-509-key %}

{% endwindows %}

{% linux %}

{% note %}

**Note:** X.509 keys are not supported on Linux. You can configure gpgsm to provide encryption and signing services, however, this is not currently supported by {% data variables.product.product_name %}. For more information, see the [gpgsm](https://www.gnupg.org/documentation/manuals/gnupg/Invoking-GPGSM.html) topic in the GnuPG documentation.

{% endnote %}

### Telling Git about your GPG key

If you're using a GPG key that matches your committer identity and your verified email address associated with your {% data variables.product.product_name %} account, then you can begin signing commits and signing tags.

{% note %}

If you don't have a GPG key that matches your committer identity, you need to associate an email with an existing key. For more information, see "[Associating an email with your GPG key](/articles/associating-an-email-with-your-gpg-key)".

{% endnote %}

If you have multiple GPG keys, you need to tell Git which one to use.

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
{% data reusables.gpg.paste-gpg-key-id %}
1. To add your GPG key to your bash profile, run the following command:
  ```shell
  $ if [ -r ~/.bash_profile ]; then echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.profile; fi
  ```
  {% note %}

  **Note:** If you don't have `.bash_profile`, this command adds your GPG key to `.profile`.

  {% endnote %}

{% endlinux %}

### 더 읽을거리

- "[Checking for existing GPG keys](/articles/checking-for-existing-gpg-keys)"
- "[Generating a new GPG key](/articles/generating-a-new-gpg-key)"
- "[Using a verified email address in your GPG key](/articles/using-a-verified-email-address-in-your-gpg-key)"
- "[Adding a new GPG key to your GitHub account](/articles/adding-a-new-gpg-key-to-your-github-account)"
- "[Associating an email with your GPG key](/articles/associating-an-email-with-your-gpg-key)"
- "[Signing commits](/articles/signing-commits)"
- "[Signing tags](/articles/signing-tags)"

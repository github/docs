---
title: Generating a new GPG key
intro: 'If you don''t have an existing GPG key, you can generate a new GPG key to use for signing commits and tags.'
redirect_from:
  - /articles/generating-a-new-gpg-key
  - /github/authenticating-to-github/generating-a-new-gpg-key
  - /github/authenticating-to-github/managing-commit-signature-verification/generating-a-new-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
---
{% data reusables.gpg.supported-gpg-key-algorithms %}

## Generating a GPG key

{% note %}

**Note:** Before generating a new GPG key, make sure you've verified your email address. If you haven't verified your email address, you won't be able to sign commits and tags with GPG.{% ifversion fpt or ghec %} For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/verifying-your-email-address)."{% endif %}

{% endnote %}

1. Download and install [the GPG command line tools](https://www.gnupg.org/download/) for your operating system. We generally recommend installing the latest version for your operating system.
{% data reusables.command_line.open_the_multi_os_terminal %}
1. Generate a GPG key pair. Since there are multiple versions of GPG, you may need to consult the relevant [_man page_](https://en.wikipedia.org/wiki/Man_page) to find the appropriate key generation command.
    * If you are on version 2.1.17 or greater, paste the text below to generate a GPG key pair.

      ```shell copy
      gpg --full-generate-key
      ```

    * If you are not on version 2.1.17 or greater, the `gpg --full-generate-key` command doesn't work. Paste the text below and skip to step 6.

      ```shell copy
      gpg --default-new-key-algo rsa4096 --gen-key
      ```

1. At the prompt, specify the kind of key you want, or press `Enter` to accept the default.
1. At the prompt, specify the key size you want, or press `Enter` to accept the default.
1. Enter the length of time the key should be valid. Press `Enter` to specify the default selection, indicating that the key doesn't expire. Unless you require an expiration date, we recommend accepting this default.
1. Verify that your selections are correct.
1. Enter your user ID information.

   {% note %}

   **Note:** When asked to enter your email address, ensure that you enter the verified email address for your GitHub account. {% data reusables.gpg.private-email %} {% ifversion fpt or ghec %}  For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/verifying-your-email-address)" and "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address)."{% endif %}

   {% endnote %}

1. Type a secure passphrase.
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
1. Paste the text below, substituting in the GPG key ID you'd like to use. In this example, the GPG key ID is `3AA5C34371567BD2`:

   ```shell copy
   gpg --armor --export 3AA5C34371567BD2
   # Prints the GPG key ID, in ASCII armor format
   ```

1. Copy your GPG key, beginning with `-----BEGIN PGP PUBLIC KEY BLOCK-----` and ending with `-----END PGP PUBLIC KEY BLOCK-----`.
1. [Add the GPG key to your GitHub account](/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account).

## Further reading

* "[AUTOTITLE](/authentication/managing-commit-signature-verification/checking-for-existing-gpg-keys)"
* "[AUTOTITLE](/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account)"
* "[AUTOTITLE](/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)"
* "[AUTOTITLE](/authentication/managing-commit-signature-verification/associating-an-email-with-your-gpg-key)"
* "[AUTOTITLE](/authentication/managing-commit-signature-verification/signing-commits)"
* "[AUTOTITLE](/authentication/managing-commit-signature-verification/signing-tags)"

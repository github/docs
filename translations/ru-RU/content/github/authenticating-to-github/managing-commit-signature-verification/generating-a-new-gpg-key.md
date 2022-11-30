---
title: Generating a new GPG key
intro: 'If you don''t have an existing GPG key, you can generate a new GPG key to use for signing commits and tags.'
redirect_from:
  - /articles/generating-a-new-gpg-key
  - /github/authenticating-to-github/generating-a-new-gpg-key
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

{% data reusables.gpg.supported-gpg-key-algorithms %}

### Generating a GPG key

{% note %}

**Note:** Before generating a new GPG key, make sure you've verified your email address. If you haven't verified your email address, you won't be able to sign commits and tags with GPG.{% if currentVersion == "free-pro-team@latest" %} For more information, see "[Verifying your email address](/articles/verifying-your-email-address)."{% endif %}

{% endnote %}

1. Download and install [the GPG command line tools](https://www.gnupg.org/download/) for your operating system. We generally recommend installing the latest version for your operating system.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Generate a GPG key pair. Since there are multiple versions of GPG, you may need to consult the relevant [_man page_](https://en.wikipedia.org/wiki/Man_page) to find the appropriate key generation command. Your key must use RSA.
    - If you are on version 2.1.17 or greater, paste the text below to generate a GPG key pair.
      ```shell
      $ gpg --full-generate-key
      ```
    - If you are not on version 2.1.17 or greater, the `gpg --full-generate-key` command doesn't work. Paste the text below and skip to step 6.
      ```shell
      $ gpg --default-new-key-algo rsa4096 --gen-key
      ```
4. At the prompt, specify the kind of key you want, or press `Enter` to accept the default `RSA and RSA`.
5. Enter the desired key size. Your key must be at least `4096` bits.
6. Enter the length of time the key should be valid. Press `Enter` to specify the default selection, indicating that the key doesn't expire.
7. Verify that your selections are correct.
8. Enter your user ID information.

  {% note %}

  **Note:** When asked to enter your email address, ensure that you enter the verified email address for your GitHub account. {% data reusables.gpg.private-email %} {% if currentVersion == "free-pro-team@latest" %}  For more information, see "[Verifying your email address](/articles/verifying-your-email-address)" and "[Setting your commit email address](/articles/setting-your-commit-email-address)."{% endif %}

  {% endnote %}

9. Type a secure passphrase.
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
10. Paste the text below, substituting in the GPG key ID you'd like to use. In this example, the GPG key ID is `3AA5C34371567BD2`:
  ```shell
  $ gpg --armor --export <em>3AA5C34371567BD2</em>
  # Prints the GPG key ID, in ASCII armor format
  ```
11. Copy your GPG key, beginning with `-----BEGIN PGP PUBLIC KEY BLOCK-----` and ending with `-----END PGP PUBLIC KEY BLOCK-----`.
12. [Add the GPG key to your GitHub account](/articles/adding-a-new-gpg-key-to-your-github-account).

### Дополнительная литература

* "[Checking for existing GPG keys](/articles/checking-for-existing-gpg-keys)"
* "[Adding a new GPG key to your GitHub account](/articles/adding-a-new-gpg-key-to-your-github-account)"
* "[Telling Git about your signing key](/articles/telling-git-about-your-signing-key)"
* "[Associating an email with your GPG key](/articles/associating-an-email-with-your-gpg-key)"
* "[Signing commits](/articles/signing-commits)"
* "[Signing tags](/articles/signing-tags)"

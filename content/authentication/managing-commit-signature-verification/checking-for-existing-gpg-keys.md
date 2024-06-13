---
title: Checking for existing GPG keys
intro: 'Before you generate a GPG key, you can check to see if you have any existing GPG keys.'
redirect_from:
  - /articles/checking-for-existing-gpg-keys
  - /github/authenticating-to-github/checking-for-existing-gpg-keys
  - /github/authenticating-to-github/managing-commit-signature-verification/checking-for-existing-gpg-keys
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Existing GPG keys
---
{% data reusables.gpg.supported-gpg-key-algorithms %}

{% note %}

**Note:** GPG does not come installed by default on macOS or Windows. To install GPG command line tools, see [GnuPG's Download page](https://www.gnupg.org/download/).

{% endnote %}

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
1. Check the command output to see if you have a GPG key pair.
    * If there are no GPG key pairs or you don't want to use any that are available for signing commits and tags, then [generate a new GPG key](/authentication/managing-commit-signature-verification/generating-a-new-gpg-key).
    * If there's an existing GPG key pair and you want to use it to sign commits and tags, you can display the public key using the following command, substituting in the GPG key ID you'd like to use. In this example, the GPG key ID is `3AA5C34371567BD2`:

      ```shell
      $ gpg --armor --export 3AA5C34371567BD2
      # Prints the GPG key ID, in ASCII armor format
      ```

      You can then [add your GPG key to your GitHub account](/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account).

## Further reading

* "[AUTOTITLE](/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)"
* "[AUTOTITLE](/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account)"
* "[AUTOTITLE](/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)"
* "[AUTOTITLE](/authentication/managing-commit-signature-verification/associating-an-email-with-your-gpg-key)"
* "[AUTOTITLE](/authentication/managing-commit-signature-verification/signing-commits)"
* "[AUTOTITLE](/authentication/managing-commit-signature-verification/signing-tags)"

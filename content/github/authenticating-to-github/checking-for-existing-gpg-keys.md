---
title: Checking for existing GPG keys
intro: 'Before you generate a GPG key, you can check to see if you have any existing GPG keys.'
redirect_from:
  - /articles/checking-for-existing-gpg-keys
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
{% data reusables.gpg.supported-gpg-key-algorithms %}

{% note %}

**Note:** GPG does not come installed by default on OS X or Windows. To install GPG command line tools, see [GnuPG's Download page](https://www.gnupg.org/download/).

{% endnote %}

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
3. Check the command output to see if you have a GPG key pair.
    * If there are no GPG key pairs or you don't want to use any that are available for signing commits and tags, then [generate a new GPG key](/articles/generating-a-new-gpg-key).
    * If there's an existing GPG key pair and you want to use it to sign commits and tags, then [add your GPG key to your GitHub account](/articles/adding-a-new-gpg-key-to-your-github-account).

### Further reading

* "[Generating a new GPG key](/articles/generating-a-new-gpg-key)"
* "[Adding a new GPG key to your GitHub account](/articles/adding-a-new-gpg-key-to-your-github-account)"
* "[Telling Git about your signing key](/articles/telling-git-about-your-signing-key)"
* "[Associating an email with your GPG key](/articles/associating-an-email-with-your-gpg-key)"
* "[Signing commits](/articles/signing-commits)"
* "[Signing tags](/articles/signing-tags)"

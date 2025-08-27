---
title: Adding a GPG key to your GitHub account
intro: 'To configure your account on {% data variables.product.github %} to use your new (or existing) GPG key, you''ll also need to add the key to your account.'
redirect_from:
  - /articles/adding-a-gpg-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-gpg-key-to-your-github-account
  - /github/authenticating-to-github/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
  - /articles/updating-an-expired-gpg-key
  - /authentication/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
  - /github/authenticating-to-github/updating-an-expired-gpg-key
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
  - /authentication/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Add a GPG key
---

## About addition of GPG keys to your account

To sign commits associated with your account on {% data variables.product.github %}, you can add a public GPG key to your personal account. Before you add a key, you should check for existing keys. If you don't find any existing keys, you can generate and copy a new key. For more information, see [AUTOTITLE](/authentication/managing-commit-signature-verification/checking-for-existing-gpg-keys) and [AUTOTITLE](/authentication/managing-commit-signature-verification/generating-a-new-gpg-key).

You can add multiple public keys to your account on {% data variables.product.github %}. Commits signed by any of the corresponding private keys will show as verified. {% ifversion persistent-commit-verification %}Once a commit has been verified, any commits signed by the corresponding private key will continue to show as verified, even if the public key is removed.{% else %}If you remove a public key, any commits signed by the corresponding private key will no longer show as verified.{% endif %}

![Screenshot of a list of commits. One commit is marked as "Verified." A dropdown shows the commit was signed and when it was signed.](/assets/images/help/settings/verified-persistent-commit.png)

To verify as many of your commits as possible, you can add expired and revoked keys. If the key meets all other verification requirements, commits that were previously signed by any of the corresponding private keys will show as verified and indicate that their signing key is expired or revoked.

{% data reusables.gpg.supported-gpg-key-algorithms %}

When verifying a signature, {% data variables.product.github %} extracts the signature and attempts to parse its key ID. The key ID is then matched with keys added to {% data variables.product.github %}. Until a matching GPG key is added to {% data variables.product.github %}, it cannot verify your signatures.

## Adding a GPG key

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
1. Next to the "GPG keys" header, click **New GPG key**.
1. In the "Title" field, type a name for your GPG key.
1. In the "Key" field, paste the GPG key you copied when you [generated your GPG key](/authentication/managing-commit-signature-verification/generating-a-new-gpg-key).
1. Click **Add GPG key**.
1. If prompted, authenticate to your {% data variables.product.prodname_dotcom %} account to confirm the action.

## Further reading

* [AUTOTITLE](/authentication/managing-commit-signature-verification/checking-for-existing-gpg-keys)
* [AUTOTITLE](/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)
* [AUTOTITLE](/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)
* [AUTOTITLE](/authentication/managing-commit-signature-verification/associating-an-email-with-your-gpg-key)
* [AUTOTITLE](/authentication/managing-commit-signature-verification/signing-commits)
* [AUTOTITLE](/authentication/managing-commit-signature-verification/about-commit-signature-verification)

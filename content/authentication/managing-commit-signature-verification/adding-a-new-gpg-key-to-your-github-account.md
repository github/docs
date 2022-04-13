---
title: Adding a new GPG key to your GitHub account
intro: 'To configure your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} to use your new (or existing) GPG key, you''ll also need the key to your account.'
redirect_from:
  - /articles/adding-a-new-gpg-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-gpg-key-to-your-github-account
  - /github/authenticating-to-github/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Add a new GPG key
---
Before adding a new GPG key to your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, you should have:
- [Checked for existing GPG keys](/articles/checking-for-existing-gpg-keys)
- [Generated and copied a new GPG key](/articles/generating-a-new-gpg-key)

You can add multiple public keys to your GitHub account. Commits signed by any of the corresponding private keys will show as verified. If you remove a public key, any commits signed by the corresponding private key will no longer show as verified.

{% data reusables.gpg.supported-gpg-key-algorithms %}

When verifying a signature, we extract the signature and attempt to parse its key-id. We match the key-id with keys uploaded to {% data variables.product.product_name %}. Until you upload your GPG key to {% data variables.product.product_name %}, we cannot verify your signatures.

## Adding a GPG key

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
3. Click **New GPG key**.
   ![GPG Key button](/assets/images/help/settings/gpg-add-gpg-key.png)
4. In the "Key" field, paste the GPG key you copied when you [generated your GPG key](/articles/generating-a-new-gpg-key).
   ![The key field](/assets/images/help/settings/gpg-key-paste.png)
5. Click **Add GPG key**.
   ![The Add key button](/assets/images/help/settings/gpg-add-key.png)
6. To confirm the action, enter your {% data variables.product.product_name %} password.

## Further reading

* "[Checking for existing GPG keys](/articles/checking-for-existing-gpg-keys)"
* "[Generating a new GPG key](/articles/generating-a-new-gpg-key)"
* "[Telling Git about your signing key](/articles/telling-git-about-your-signing-key)"
* "[Associating an email with your GPG key](/articles/associating-an-email-with-your-gpg-key)"
* "[Signing commits and tags using GPG keys](/articles/signing-commits-and-tags-using-gpg)"

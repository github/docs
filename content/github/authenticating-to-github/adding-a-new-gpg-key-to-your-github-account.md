---
title: Adding a new GPG key to your GitHub account
intro: 'To configure your {% data variables.product.product_name %} account to use your new (or existing) GPG key, you''ll also need to add it to your {% data variables.product.product_name %} account.'
redirect_from:
  - /articles/adding-a-new-gpg-key-to-your-github-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Before adding a new GPG key to your {% data variables.product.product_name %} account, you should have:
- [Checked for existing GPG keys](/articles/checking-for-existing-gpg-keys)
- [Generated and copied a new GPG key](/articles/generating-a-new-gpg-key)

{% data reusables.gpg.supported-gpg-key-algorithms %}

When verifying a signature, we extract the signature and attempt to parse its key-id. We match the key-id with keys uploaded to {% data variables.product.product_name %}. Until you upload your GPG key to {% data variables.product.product_name %}, we cannot verify your signatures.

### Adding a GPG key

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. Click **New GPG key**.
   ![GPG Key button](/assets/images/help/settings/gpg-add-gpg-key.png)
4. In the "Key" field, paste the GPG key you copied when you [generated your GPG key](/articles/generating-a-new-gpg-key).
   ![The key field](/assets/images/help/settings/gpg-key-paste.png)
5. Click **Add GPG key**.
   ![The Add key button](/assets/images/help/settings/gpg-add-key.png)
6. To confirm the action, enter your {% data variables.product.product_name %} password.

### Further reading

* "[Checking for existing GPG keys](/articles/checking-for-existing-gpg-keys)"
* "[Generating a new GPG key](/articles/generating-a-new-gpg-key)"
* "[Telling Git about your signing key](/articles/telling-git-about-your-signing-key)"
* "[Associating an email with your GPG key](/articles/associating-an-email-with-your-gpg-key)"
* "[Signing commits and tags using GPG keys](/articles/signing-commits-and-tags-using-gpg)"

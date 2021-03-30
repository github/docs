---
title: Updating an expired GPG key
intro: 'When verifying a signature, {% data variables.product.product_name %} checks that the key is not revoked or expired. If your signing key is revoked or expired, {% data variables.product.product_name %} cannot verify your signatures. If your key is revoked, use the primary key or another key that is not revoked to sign your commits.'
redirect_from:
  - /articles/updating-an-expired-gpg-key
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - identity
  - access management
---

If your key is expired, you must [update the expiration](https://www.gnupg.org/gph/en/manual/c235.html#AEN328), export the new key, delete the expired key in your GitHub account, and [upload the new key to GitHub](/articles/adding-a-new-gpg-key-to-your-github-account/). Your previous commits and tags will show as verified, as long as the key meets all other verification requirements.

If your key is invalid and you don't use another valid key in your key set, but instead generate a new GPG key with a new set of credentials, then your commits made with the revoked or expired key will continue to show as unverified. Also, your new credentials will not be able to resign or verify your old commits and tags.

### 더 읽을거리

- "[About commit signature verification](/articles/about-commit-signature-verification)"

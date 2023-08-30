---
title: Using a verified email address in your GPG key
intro: 'When verifying a signature, {% data variables.product.product_name %} checks that the committer or tagger email address matches an email address from the GPG key''s identities and is a verified email address on the user''s account. This ensures that the key belongs to you and that you created the commit or tag.'
redirect_from:
  - /articles/using-a-verified-email-address-in-your-gpg-key
  - /github/authenticating-to-github/using-a-verified-email-address-in-your-gpg-key
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/using-a-verified-email-address-in-your-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Use verified email in GPG key
---
{% ifversion fpt or ghec %}
If you need to verify your GitHub email address, see "[AUTOTITLE](/get-started/signing-up-for-github/verifying-your-email-address)." {% endif %}If you need to update or add an email address to your GPG key, see "[AUTOTITLE](/authentication/managing-commit-signature-verification/associating-an-email-with-your-gpg-key)."

Commits and tags may contain several email addresses. For commits, there is the author — the person who wrote the code — and the committer — the person who added the commit to the tree. When signing a commit with Git, whether it be during a merge, cherry-pick, or normal `git commit`, the committer email address will be yours, even if the author email address isn't. Tags are more simple: The tagger email address is always the user who created the tag.

If you need to change your committer or tagger email address, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address)."

## Further reading

- "[AUTOTITLE](/authentication/managing-commit-signature-verification/about-commit-signature-verification)"

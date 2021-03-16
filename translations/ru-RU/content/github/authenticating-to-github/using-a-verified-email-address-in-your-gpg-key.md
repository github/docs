---
title: Using a verified email address in your GPG key
intro: 'When verifying a signature, {% data variables.product.product_name %} checks that the committer or tagger email address matches an email address from the GPG key''s identities and is a verified email address on the user''s account. This ensures that the key belongs to you and that you created the commit or tag.'
redirect_from:
  - /articles/using-a-verified-email-address-in-your-gpg-key
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% if currentVersion == "free-pro-team@latest" %}
If you need to verify your GitHub email address, see "[Verifying your email address](/articles/verifying-your-email-address/)."
{% endif %}If you need to update or add an email address to your GPG key, see "[Associating an email with your GPG key](/articles/associating-an-email-with-your-gpg-key)."

Commits and tags may contain several email addresses. For commits, there is the author — the person who wrote the code — and the committer — the person who added the commit to the tree. When signing a commit with Git, whether it be during a merge, cherry-pick, or normal `git commit`, the committer email address will be yours, even if the author email address isn't. Tags are more simple: The tagger email address is always the user who created the tag.

If you need to change your committer or tagger email address, see "[Setting your commit email address](/articles/setting-your-commit-email-address/)."

### Дополнительная литература

- "[About commit signature verification](/articles/about-commit-signature-verification)"

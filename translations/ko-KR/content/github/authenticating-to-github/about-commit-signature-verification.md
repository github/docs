---
title: About commit signature verification
intro: 'Using GPG or S/MIME, you can sign tags and commits locally. These tags or commits are marked as verified on {% data variables.product.product_name %} so other people can trust that the changes come from a trusted source.'
redirect_from:
  - /articles/about-gpg-commit-and-tag-signatures/
  - /articles/about-gpg/
  - /articles/about-commit-signature-verification
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### About commit signature verification

You can sign commits and tags locally, so other people can verify that your work comes from a trusted source. If a commit or tag has a GPG or S/MIME signature that is cryptographically verifiable, {% data variables.product.product_name %} marks the commit or tag as verified.

![Verified commit](/assets/images/help/commits/verified-commit.png)

If a commit or tag has a signature that cannot be verified, {% data variables.product.product_name %} marks the commit or tag as unverified.

Repository administrators can enforce required commit signing on a branch to block all commits that are not signed and verified. For more information, see "[About protected branches](/github/administering-a-repository/about-protected-branches#require-signed-commits)."

You can check the verification status of your signed commits or tags on {% data variables.product.product_name %} and view why your commit signatures might be unverified. For more information, see "[Checking your commit and tag signature verification status](/articles/checking-your-commit-and-tag-signature-verification-status)."

{% if currentVersion == "free-pro-team@latest" %}
{% data variables.product.product_name %} will automatically use GPG to sign commits you make using the {% data variables.product.product_name %} web interface, except for when you squash and merge a pull request that you are not the author of. You can optionally choose to have {% data variables.product.product_name %} sign commits you make in {% data variables.product.prodname_codespaces %}. Commits signed by {% data variables.product.product_name %} will have a verified status on {% data variables.product.product_name %}. You can verify the signature locally using the public key available at https://github.com/web-flow.gpg. For more information about enabling GPG verification for your codespaces, see "[Managing GPG verification for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)."
{% endif %}

### GPG commit signature verification

You can use GPG to sign commits with a GPG key that you generate yourself.

{% data variables.product.product_name %} uses OpenPGP libraries to confirm that your locally signed commits and tags are cryptographically verifiable against a public key you have added to your {% data variables.product.product_name %} account.

To sign commits using GPG and have those commits verified on {% data variables.product.product_name %}, follow these steps:

1. [Check for existing GPG keys](/articles/checking-for-existing-gpg-keys)
2. [Generate a new GPG key](/articles/generating-a-new-gpg-key)
3. [Add a new GPG key to your GitHub account](/articles/adding-a-new-gpg-key-to-your-github-account)
4. [Tell Git about your signing key](/articles/telling-git-about-your-signing-key)
5. [Sign commits](/articles/signing-commits)
6. [Sign tags](/articles/signing-tags)

### S/MIME commit signature verification

You can use S/MIME to sign commits with an X.509 key issued by your organization.

{% data variables.product.product_name %} uses [the Debian ca-certificates package](https://packages.debian.org/hu/jessie/ca-certificates), the same trust store used by Mozilla browsers, to confirm that your locally signed commits and tags are cryptographically verifiable against a public key in a trusted root certificate.

{% data reusables.gpg.smime-git-version %}

To sign commits using S/MIME and have those commits verified on {% data variables.product.product_name %}, follow these steps:

1. [Tell Git about your signing key](/articles/telling-git-about-your-signing-key)
2. [Sign commits](/articles/signing-commits)
3. [Sign tags](/articles/signing-tags)

You don't need to upload your public key to {% data variables.product.product_name %}.

{% if currentVersion == "free-pro-team@latest" %}
### Signature verification for bots

Organizations and {% data variables.product.prodname_github_app %}s that require commit signing can use bots to sign commits. If a commit or tag has a bot signature that is cryptographically verifiable, {% data variables.product.product_name %} marks the commit or tag as verified.
Signature verification for bots will only work if the request is verified and authenticated as the

{% data variables.product.prodname_github_app %} or bot and contains no custom author information, custom committer information, and no custom signature information, such as Commits API.
{% endif %}

### 더 읽을거리

- "[Signing commits](/articles/signing-commits)"
- "[Signing tags](/articles/signing-tags)"
- "[Troubleshooting commit signature verification](/articles/troubleshooting-commit-signature-verification)"

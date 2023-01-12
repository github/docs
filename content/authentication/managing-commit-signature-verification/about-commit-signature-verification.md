---
title: About commit signature verification
intro: 'Using GPG{% ifversion ssh-commit-verification %}, SSH,{% endif %} or S/MIME, you can sign tags and commits locally. These tags or commits are marked as verified on {% data variables.product.product_name %} so other people can be confident that the changes come from a trusted source.'
redirect_from:
  - /articles/about-gpg-commit-and-tag-signatures
  - /articles/about-gpg
  - /articles/about-commit-signature-verification
  - /github/authenticating-to-github/about-commit-signature-verification
  - /github/authenticating-to-github/managing-commit-signature-verification/about-commit-signature-verification
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Commit signature verification
---
## About commit signature verification

You can sign commits and tags locally, to give other people confidence about the origin of a change you have made. If a commit or tag has a GPG{% ifversion ssh-commit-verification %}, SSH,{% endif %} or S/MIME signature that is cryptographically verifiable, {% data variables.product.product_name %} marks the commit or tag {% ifversion fpt or ghec %}"Verified" or "Partially verified."{% else %}"Verified."{% endif %}

![Verified commit](/assets/images/help/commits/verified-commit.png)

{% ifversion ghes or ghae %}
If a commit or tag has a signature that can't be verified, {% data variables.product.product_name %} marks the commit or tag "Unverified."
{% endif %}

{% ifversion ssh-commit-verification %}
For most individual users, GPG or SSH will be the best choice for signing commits. S/MIME signatures are usually required in the context of a larger organization. SSH signatures are the simplest to generate. You can even upload your existing authentication key to {% data variables.product.product_name %} to also use as a signing key. Generating a GPG signing key is more involved than generating an SSH key, but GPG has features that SSH does not. A GPG key can expire or be revoked when no longer used. {% data variables.product.product_name %} shows commits that were signed with such a key as "Verified" unless the key was marked as compromised. SSH keys don't have this capability.
{% endif %}

{% ifversion fpt or ghec %}
Commits and tags have the following verification statuses, depending on whether you have enabled vigilant mode. By default vigilant mode is not enabled. For information on how to enable vigilant mode, see "[Displaying verification statuses for all of your commits](/github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits)."

{% data reusables.identity-and-permissions.vigilant-mode-beta-note %}

Signing commits differs from signing off on a commit. For more information about signing off on commits, see "[Managing the commit signoff policy for your repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository)."

### Default statuses

| Status         | Description |
| -------------- | ----------- |
| **Verified**   | The commit is signed and the signature was successfully verified.
| **Unverified** | The commit is signed but the signature could not be verified.
| No verification status | The commit is not signed.

### Signature verification for rebase and merge
{% data reusables.pull_requests.rebase_and_merge_verification %}

For more information, see "[Rebasing and merging your commits](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/about-merge-methods-on-github#rebasing-and-merging-your-commits)."

### Statuses with vigilant mode enabled

{% data reusables.identity-and-permissions.vigilant-mode-verification-statuses %}

{% endif %}


Repository administrators can enforce required commit signing on a branch to block all commits that are not signed and verified. For more information, see "[About protected branches](/github/administering-a-repository/about-protected-branches#require-signed-commits)."

{% data reusables.identity-and-permissions.verification-status-check %}

{% ifversion fpt or ghec or ghes > 3.4 %}
{% ifversion ghes %}If a site administrator has enabled web commit signing, {% data variables.product.product_name %} will automatically use GPG to sign commits you make using the web interface. Commits signed by {% data variables.product.product_name %} will have a verified status. You can verify the signature locally using the public key available at `https://HOSTNAME/web-flow.gpg`. For more information, see "[Configuring web commit signing](/admin/configuration/configuring-your-enterprise/configuring-web-commit-signing)."
{% else %}{% data variables.product.prodname_dotcom %} will automatically use GPG to sign commits you make using the web interface. Commits signed by {% data variables.product.prodname_dotcom %} will have a verified status. You can verify the signature locally using the public key available at https://github.com/web-flow.gpg. The full fingerprint of the key is `5DE3 E050 9C47 EA3C F04A 42D3 4AEE 18F8 3AFD EB23`.

You can optionally choose to have {% data variables.product.prodname_dotcom %} GPG sign commits you make in {% data variables.product.prodname_github_codespaces %}. For more information about enabling GPG verification for your codespaces, see "[Managing GPG verification for {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)."{% endif %}
{% endif %}

## GPG commit signature verification

You can use GPG to sign commits with a GPG key that you generate yourself.

{% data variables.product.product_name %} uses OpenPGP libraries to confirm that your locally signed commits and tags are cryptographically verifiable against a public key you have added to your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}.

To sign commits using GPG and have those commits verified on {% data variables.product.product_name %}, follow these steps:

1. [Check for existing GPG keys](/articles/checking-for-existing-gpg-keys)
2. [Generate a new GPG key](/articles/generating-a-new-gpg-key)
3. [Add a GPG key to your GitHub account](/articles/adding-a-gpg-key-to-your-github-account)
4. [Tell Git about your signing key](/articles/telling-git-about-your-signing-key)
5. [Sign commits](/articles/signing-commits)
6. [Sign tags](/articles/signing-tags)

{% ifversion ssh-commit-verification %}
## SSH commit signature verification

You can use SSH to sign commits with an SSH key that you generate yourself. For more information, see the [Git reference documentation](https://git-scm.com/docs/git-config#Documentation/git-config.txt-usersigningKey)  for `user.Signingkey`. If you already use an SSH key to authenticate with {% data variables.product.product_name %},
you can also upload that same key again for use as a signing key. There's no limit on the number of signing keys you can add to your account.

{% data variables.product.product_name %} uses [ssh_data](https://github.com/github/ssh_data), an open source Ruby library, to confirm that your locally signed commits and tags are cryptographically verifiable against a public key you have added to your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}.

{% data reusables.gpg.ssh-git-version %}

To sign commits using SSH and have those commits verified on {% data variables.product.product_name %}, follow these steps:

1. [Check for existing SSH keys](/articles/checking-for-existing-ssh-keys)
2. [Generate a new SSH key](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
3. [Add a SSH signing key to your GitHub account](/articles/adding-a-new-ssh-key-to-your-github-account)
4. [Tell Git about your signing key](/articles/telling-git-about-your-signing-key)
5. [Sign commits](/articles/signing-commits)
6. [Sign tags](/articles/signing-tags)

{% endif %}
## S/MIME commit signature verification

You can use S/MIME to sign commits with an X.509 key issued by your organization.

{% data variables.product.product_name %} uses [the Debian ca-certificates package](https://packages.debian.org/bullseye/ca-certificates), the same trust store used by Mozilla browsers, to confirm that your locally signed commits and tags are cryptographically verifiable against a public key in a trusted root certificate.

{% data reusables.gpg.smime-git-version %}

To sign commits using S/MIME and have those commits verified on {% data variables.product.product_name %}, follow these steps:

1. [Tell Git about your signing key](/articles/telling-git-about-your-signing-key)
2. [Sign commits](/articles/signing-commits)
3. [Sign tags](/articles/signing-tags)

You don't need to upload your public key to {% data variables.product.product_name %}.

{% ifversion fpt or ghec %}
## Signature verification for bots

Organizations and {% data variables.product.prodname_github_apps %} that require commit signing can use bots to sign commits. If a commit or tag has a bot signature that is cryptographically verifiable, {% data variables.product.product_name %} marks the commit or tag as verified.

Signature verification for bots will only work if the request is verified and authenticated as the {% data variables.product.prodname_github_app %} or bot and contains no custom author information, custom committer information, and no custom signature information, such as Commits API.
{% endif %}

## Further reading

- "[Signing commits](/articles/signing-commits)"
- "[Signing tags](/articles/signing-tags)"
- "[Troubleshooting commit signature verification](/articles/troubleshooting-commit-signature-verification)"

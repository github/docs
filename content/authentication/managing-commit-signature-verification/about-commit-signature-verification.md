---
title: About commit signature verification
intro: 'Using GPG, SSH, or S/MIME, you can sign tags and commits locally. These tags or commits are marked as verified on {% data variables.product.github %} so other people can be confident that the changes come from a trusted source.'
redirect_from:
  - /articles/about-gpg-commit-and-tag-signatures
  - /articles/about-gpg
  - /articles/about-commit-signature-verification
  - /github/authenticating-to-github/about-commit-signature-verification
  - /github/authenticating-to-github/managing-commit-signature-verification/about-commit-signature-verification
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Commit signature verification
---
## About commit signature verification

You can sign commits and tags locally, to give other people confidence about the origin of a change you have made. If a commit or tag has a GPG, SSH, or S/MIME signature that is cryptographically verifiable, {% data variables.product.github %} marks the commit or tag {% ifversion fpt or ghec %}"Verified" or "Partially verified."{% else %}"Verified."{% endif %}

![Screenshot of a commit in the commit list for a repository. "Verified" is highlighted with an orange outline.](/assets/images/help/commits/verified-commit.png)

{% ifversion ghes %}
If a commit or tag has a signature that can't be verified, {% data variables.product.github %} marks the commit or tag "Unverified."
{% endif %}

For most individual users, GPG or SSH will be the best choice for signing commits. S/MIME signatures are usually required in the context of a larger organization. SSH signatures are the simplest to generate. You can even upload your existing authentication key to {% data variables.product.github %} to also use as a signing key. Generating a GPG signing key is more involved than generating an SSH key, but GPG has features that SSH does not. A GPG key can expire or be revoked when no longer used. The GPG signature may include the information about it being expired or revoked.

{% ifversion fpt or ghec %}

Commits and tags have the following verification statuses, depending on whether you have enabled vigilant mode. By default vigilant mode is not enabled. For information on how to enable vigilant mode, see [AUTOTITLE](/authentication/managing-commit-signature-verification/displaying-verification-statuses-for-all-of-your-commits).

Signing commits differs from signing off on a commit. For more information about signing off on commits, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository).

### Default statuses

| Status         | Description |
| -------------- | ----------- |
| **Verified**   | The commit is signed and the signature was successfully verified.
| **Unverified** | The commit is signed but the signature could not be verified.
| No verification status | The commit is not signed.

### Persistent commit signature verification

Regardless of the signature choice - GPG, SSH, or S/MIME - once a commit signature is verified, it remains verified within its repository's network. See [AUTOTITLE](/repositories/viewing-activity-and-data-for-your-repository/understanding-connections-between-repositories).

When a commit signature is verified upon being pushed to {% data variables.product.github %}, a verification record is stored alongside the commit. This record can't be edited and will persist so that signatures remain verified over time, even if signing keys are rotated, revoked, or if contributors leave the organization.

The verification record includes a timestamp marking when the verification was completed. This persistent record ensures a consistent verified state, providing a stable history of contributions within the repository. You can view this timestamp by hovering over the "Verified" badge on {% data variables.product.github %} or by accessing the commit via the REST API, which includes a `verified_at` field. See [AUTOTITLE](/rest/commits/commits).

Persistent commit signature verification applies to new commits pushed to {% data variables.product.github %}. For any commits that predate this feature, a persistent record will be created the next time the commit's signature is verified on {% data variables.product.github %}, helping ensure that verified statuses remain stable and reliable across the repository's history.

#### Records persist even after revocation and expiration

Persistent commit signature verification reflects the verified state of a commit at the time of verification. This means that if a signing key is later revoked, expired, or otherwise altered, previously verified commits retain their verified status based on the record created during the initial verification. {% data variables.product.github %} will not re-verify previously signed commits or retroactively adjust their verification status in response to changes in the key's state. Organizations may need to manage key states directly to align with their security policies, especially if frequent key rotation or revocation is planned.

#### The verification record is scoped to its repository network

The verification record is persistent across the repository network, meaning that if the same commit is pushed again to the same repository or to any of its forks, the existing verification record is reused. This allows {% data variables.product.github %} to maintain a consistent verified status across related repositories without re-verifying the commit each time it appears within the network. This persistence reinforces a unified and reliable view of commit authenticity across all instances of the commit within the repository network.

{% endif %}

### Signature verification for rebase and merge

{% data reusables.pull_requests.rebase_and_merge_verification %}

{% data reusables.pull_requests.rebase_and_merge_verification_2 %}

For more information, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/about-merge-methods-on-github#rebasing-and-merging-your-commits).

{% ifversion fpt or ghec %}

### Statuses with vigilant mode enabled

{% data reusables.identity-and-permissions.vigilant-mode-verification-statuses %}

{% endif %}

Repository administrators can enforce required commit signing on a branch to block all commits that are not signed and verified. For more information, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-signed-commits).

{% data reusables.identity-and-permissions.verification-status-check %}

{% ifversion ghes %}If a site administrator has enabled web commit signing, {% data variables.product.github %} will automatically use GPG to sign commits you make using the web interface. Commits signed by {% data variables.product.github %} will have a verified status. You can verify the signature locally using the public key available at `https://HOSTNAME/web-flow.gpg`. For more information, see [AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-web-commit-signing).
{% else %}{% data variables.product.prodname_dotcom %} will automatically use GPG to sign commits you make using the web interface. Commits signed by {% data variables.product.prodname_dotcom %} will have a verified status. You can verify the signature locally using the public key available at https://github.com/web-flow.gpg.

You can optionally choose to have {% data variables.product.prodname_dotcom %} GPG sign commits you make in {% data variables.product.prodname_github_codespaces %}. For more information about enabling GPG verification for your codespaces, see [AUTOTITLE](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces).{% endif %}

## GPG commit signature verification

You can use GPG to sign commits with a GPG key that you generate yourself.

{% data variables.product.github %} uses OpenPGP libraries to confirm that your locally signed commits and tags are cryptographically verifiable against a public key you have added to your account on {% data variables.location.product_location %}.

To sign commits using GPG and have those commits verified on {% data variables.product.github %}, follow these steps:

1. [Check for existing GPG keys](/authentication/managing-commit-signature-verification/checking-for-existing-gpg-keys)
1. [Generate a new GPG key](/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)
1. [Add a GPG key to your GitHub account](/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account)
1. [Tell Git about your signing key](/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)
1. [Sign commits](/authentication/managing-commit-signature-verification/signing-commits)
1. [Sign tags](/authentication/managing-commit-signature-verification/signing-tags)

## SSH commit signature verification

You can use SSH to sign commits with an SSH key that you generate yourself. For more information, see the [Git reference documentation](https://git-scm.com/docs/git-config#Documentation/git-config.txt-usersigningKey) for `user.Signingkey`. If you already use an SSH key to authenticate with {% data variables.product.github %},
you can also upload that same key again for use as a signing key. There's no limit on the number of signing keys you can add to your account.

{% data variables.product.github %} uses [ssh_data](https://github.com/github/ssh_data), an open source Ruby library, to confirm that your locally signed commits and tags are cryptographically verifiable against a public key you have added to your account on {% data variables.location.product_location %}.

{% data reusables.gpg.ssh-git-version %}

To sign commits using SSH and have those commits verified on {% data variables.product.github %}, follow these steps:

1. [Check for existing SSH keys](/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)
1. [Generate a new SSH key](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
1. [Add a SSH signing key to your GitHub account](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
1. [Tell Git about your signing key](/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)
1. [Sign commits](/authentication/managing-commit-signature-verification/signing-commits)
1. [Sign tags](/authentication/managing-commit-signature-verification/signing-tags)

## S/MIME commit signature verification

You can use S/MIME to sign commits with an X.509 key issued by your organization.

{% data variables.product.github %} uses [the Debian ca-certificates package](https://packages.debian.org/bullseye/ca-certificates), the same trust store used by Mozilla browsers, to confirm that your locally signed commits and tags are cryptographically verifiable against a public key in a trusted root certificate.

{% data reusables.gpg.smime-git-version %}

To sign commits using S/MIME and have those commits verified on {% data variables.product.github %}, follow these steps:

1. [Tell Git about your signing key](/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)
1. [Sign commits](/authentication/managing-commit-signature-verification/signing-commits)
1. [Sign tags](/authentication/managing-commit-signature-verification/signing-tags)

You don't need to upload your public key to {% data variables.product.github %}.

{% ifversion fpt or ghec %}

## Signature verification for bots

Organizations and {% data variables.product.prodname_github_apps %} that require commit signing can use bots to sign commits. If a commit or tag has a bot signature that is cryptographically verifiable, {% data variables.product.github %} marks the commit or tag as verified.

Signature verification for bots will only work if the request is verified and authenticated as the {% data variables.product.prodname_github_app %} or bot and contains no custom author information, custom committer information, and no custom signature information, such as Commits API.
{% endif %}

## Further reading

* [AUTOTITLE](/authentication/managing-commit-signature-verification/signing-commits)
* [AUTOTITLE](/authentication/managing-commit-signature-verification/signing-tags)
* [AUTOTITLE](/authentication/troubleshooting-commit-signature-verification)

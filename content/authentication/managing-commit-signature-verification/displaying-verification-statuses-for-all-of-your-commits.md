---
title: Displaying verification statuses for all of your commits
shortTitle: Displaying verification for all commits
intro: You can enable vigilant mode for commit signature verification to mark all of your commits and tags with a signature verification status.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits
  - /github/authenticating-to-github/managing-commit-signature-verification/displaying-verification-statuses-for-all-of-your-commits
---

## About vigilant mode

When you work locally on your computer, Git allows you to set the author of your changes and the identity of the committer. This, potentially, makes it difficult for other people to be confident that commits and tags you create were actually created by you. To help solve this problem you can sign your commits and tags. For more information, see [AUTOTITLE](/authentication/managing-commit-signature-verification/signing-commits) and [AUTOTITLE](/authentication/managing-commit-signature-verification/signing-tags). {% data variables.product.prodname_dotcom %} marks signed commits and tags with a verification status.

By default commits and tags are marked "Verified" if they are signed with a GPG, SSH, or S/MIME key that was successfully verified. If a commit or tag has a signature that can't be verified by {% data variables.product.prodname_dotcom %}, we mark the commit or tag "Unverified." In all other cases no verification status is displayed.

However, you can give other users increased confidence in the identity attributed to your commits and tags by enabling vigilant mode in your {% data variables.product.prodname_dotcom %} settings. With vigilant mode enabled, all of your commits and tags are marked with one of three verification statuses:

{% data reusables.identity-and-permissions.vigilant-mode-verification-statuses %}

You should only enable vigilant mode if you sign all of your commits and tags and use an email address that is verified for your {% data variables.product.github %} account as your committer email address. After enabling this mode, any unsigned commits or tags that you generate locally and push to {% data variables.product.github %} will be marked "Unverified."

{% data reusables.identity-and-permissions.verification-status-check %}

## Enabling vigilant mode

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
1. Under "Vigilant mode," select **Flag unsigned commits as unverified**.

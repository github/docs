---
title: Setting permissions for deleting or transferring repositories
intro: 'You can allow organization members with admin permissions to a repository to delete or transfer the repository, or limit the ability to delete or transfer repositories to organization owners only.'
redirect_from:
  - /articles/setting-permissions-for-deleting-or-transferring-repositories-in-your-organization
  - /articles/setting-permissions-for-deleting-or-transferring-repositories
  - /github/setting-up-and-managing-organizations-and-teams/setting-permissions-for-deleting-or-transferring-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Set repo management policy
---

Owners can set permissions for deleting or transferring repositories in an organization.

Limiting the ability to delete or transfer repositories helps prevent sensitive information from being exposed. For more information, see [AUTOTITLE](/code-security/getting-started/best-practices-for-preventing-data-leaks-in-your-organization).

{% ifversion repo-policy-rules %}

## Setting a blanket policy

{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
1. Under "Repository deletion and transfer", select or deselect **Allow members to delete or transfer repositories for this organization**.
1. Click **Save**.

{% ifversion repo-policy-rules %}

## Setting a more flexible policy ({% data variables.release-phases.public_preview %})

You can create a repository policy to govern who can delete or transfer repositories in your organization. Compared to "member privilege" policies, repository policies give you more flexibility over which users the policies apply to and which repositories are targeted. See [AUTOTITLE](/organizations/managing-organization-settings/governing-how-people-use-repositories-in-your-organization).

{% endif %}

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
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Set repo management policy
---

Owners can set permissions for deleting or transferring repositories in an organization.

{% ifversion fpt or ghec or ghes %}
Limiting the ability to delete or transfer repositories helps prevent sensitive information from being exposed. For more information, see "[AUTOTITLE](/code-security/getting-started/best-practices-for-preventing-data-leaks-in-your-organization)."
{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
1. Under "Repository deletion and transfer", select or deselect **Allow members to delete or transfer repositories for this organization**.
1. Click **Save**.

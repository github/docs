---
title: Allowing people to delete issues in your organization
intro: Organization owners can allow certain people to delete issues in repositories owned by your organization.
redirect_from:
  - /articles/allowing-people-to-delete-issues-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-delete-issues-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Allow issue deletion
---

By default, issues cannot be deleted in an organization's repositories. An organization owner must enable this feature for all of the organization's repositories first.

Once enabled, organization owners and people with admin access in an organization-owned repository can delete issues. People with admin access in a repository include organization members and outside collaborators who were given admin access. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)" and "[AUTOTITLE](/issues/tracking-your-work-with-issues/deleting-an-issue)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
1. Under "Issue deletion", select **Allow members to delete issues for this organization**.
1. Click **Save**.

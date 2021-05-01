---
title: Allowing people to delete issues in your organization
intro: Organization owners can allow certain people to delete issues in repositories owned by your organization.
redirect_from:
  - /articles/allowing-people-to-delete-issues-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-delete-issues-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

By default, issues cannot be deleted in an organization's repositories. An organization owner must enable this feature for all of the organization's repositories first.

Once enabled, organization owners and people with admin permissions in an organization-owned repository can delete issues. People with admin permissions in a repository include organization members and outside collaborators with admin privileges. For more information, see "[Repository permission levels for an organization](/articles/repository-permission-levels-for-an-organization/)" and "[Deleting an issue](/articles/deleting-an-issue)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Under "Issue deletion", select **Allow members to delete issues for this organization**.
![Checkbox to allow people to delete issues](/assets/images/help/settings/issue-deletion.png)
6. Click **Save**.

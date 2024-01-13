---
title: Migrating admin teams to improved organization permissions
intro: 'If your organization was created after September 2015, your organization has improved organization permissions by default. Organizations created before September 2015 may need to migrate older Owners and Admin teams to the improved permissions model. Members of legacy admin teams automatically retain the ability to create repositories until those teams are migrated to the improved organization permissions model.'
redirect_from:
  - /articles/migrating-your-previous-admin-teams-to-the-improved-organization-permissions
  - /articles/migrating-admin-teams-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/migrating-admin-teams-to-improved-organization-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Migrate admin team
---

## About migrations for legacy admin teams

By default, all organization members can create repositories. If you restrict [repository creation permissions](/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization) to organization owners, and your organization was created under the legacy organization permissions structure, members of legacy admin teams will still be able to create repositories.

Legacy admin teams are teams that were created with the admin permission level under the legacy organization permissions structure. Members of these teams were able to create repositories for the organization, and we've preserved this ability in the improved organization permissions structure.

You can remove this ability by migrating your legacy admin teams to the improved organization permissions.

For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)."

{% warning %}

**Warning:** If your organization has disabled [repository creation permissions](/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization) for all members, some members of legacy admin teams may lose repository creation permissions. If your organization has enabled member repository creation, migrating legacy admin teams to improved organization permissions will not affect team members' ability to create repositories.

{% endwarning %}

## Migrating all of your organization's legacy admin teams

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.teams_sidebar %}
1. Review your organization's legacy admin teams, then click **Migrate all teams**.
1. Read the information about possible permissions changes for members of these teams, then click **Migrate all teams.**

## Migrating a single admin team

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
1. In the team description box, click **Migrate team**.

---
title: Migrating admin teams to improved organization permissions
intro: 'If your organization was created after September 2015, your organization has improved organization permissions by default. Organizations created before September 2015 may need to migrate older Owners and Admin teams to the improved permissions model. Members of legacy admin teams automatically retain the ability to create repositories until those teams are migrated to the improved organization permissions model.'
redirect_from:
  - /articles/migrating-your-previous-admin-teams-to-the-improved-organization-permissions/
  - /articles/migrating-admin-teams-to-improved-organization-permissions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

By default, all organization members can create repositories. If you restrict [repository creation permissions](/articles/restricting-repository-creation-in-your-organization) to organization owners, and your organization was created under the legacy organization permissions structure, members of legacy admin teams will still be able to create repositories.

Legacy admin teams are teams that were created with the admin permission level under the legacy organization permissions structure. Members of these teams were able to create repositories for the organization, and we've preserved this ability in the improved organization permissions structure.

You can remove this ability by migrating your legacy admin teams to the improved organization permissions.

For more information, see "[Repository permission levels for an organization](/articles/repository-permission-levels-for-an-organization)."

{% warning %}

**Warning:** If your organization has disabled [repository creation permissions](/articles/restricting-repository-creation-in-your-organization) for all members, some members of legacy admin teams may lose repository creation permissions. If your organization has enabled member repository creation, migrating legacy admin teams to improved organization permissions will not affect team members' ability to create repositories.

{% endwarning %}

### Migrating all of your organization's legacy admin teams

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.teams_sidebar %}
1. Review your organization's legacy admin teams, then click **Migrate all teams**.
  ![Migrate all teams button](/assets/images/help/teams/migrate-all-legacy-admin-teams.png)
1. Read the information about possible permissions changes for members of these teams, then click **Migrate all teams.**
  ![Confirm migration button](/assets/images/help/teams/confirm-migrate-all-legacy-admin-teams.png)

### Migrating a single admin team

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
1. In the team description box, click **Migrate team**.
  ![Migrate team button](/assets/images/help/teams/migrate-a-legacy-admin-team.png)

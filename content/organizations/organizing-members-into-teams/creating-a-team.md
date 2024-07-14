---
title: Creating a team
intro: You can create independent or nested teams to manage repository permissions and mentions for groups of people.
redirect_from:
  - /articles/creating-a-team-early-access-program
  - /articles/creating-a-team
  - /github/setting-up-and-managing-organizations-and-teams/creating-a-team
  - /enterprise/admin/user-management/creating-teams
  - /admin/user-management/creating-teams
  - /admin/user-management/managing-organizations-in-your-enterprise/creating-teams
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
permissions: 'Organization owners can create teams and can control whether all organization members can also create teams. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization)."'
topics:
  - Organizations
  - Teams
---

{% data reusables.organizations.team-synchronization %}

{% ifversion ghes %}

## Creating a team

{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.new_team %}
{% data reusables.organizations.team_name %}
{% data reusables.organizations.team_description %}
{% data reusables.organizations.create-team-choose-parent %}
{% ifversion ghec %}
1. Optionally, if your organization or enterprise account uses team synchronization or your enterprise uses {% data variables.product.prodname_emus %}, connect an identity provider group to your team.
    * If your enterprise uses {% data variables.product.prodname_emus %}, use the "Identity Provider Groups" drop-down menu, and select a single identity provider group to connect to the new team. For more information, "[AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups)."
    * If your organization or enterprise account uses team synchronization, under "Identity Provider Groups," select the **Select Groups** dropdown menu, and click up to five identity provider groups to connect to the new team. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group)."
{% endif %}
{% data reusables.organizations.team_visibility %}
{% data reusables.organizations.team-notifications %}
{% data reusables.organizations.create_team %}
1. Optionally, give the team access to organization repositories. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-team-access-to-an-organization-repository)."

{% ifversion ghes %}

## Creating teams with LDAP Sync enabled

Instances using LDAP for user authentication can use LDAP Sync to manage a team's members. Setting the group's **Distinguished Name** (DN) in the **LDAP group** field will map a team to an LDAP group on your LDAP server. If you use LDAP Sync to manage a team's members, you won't be able to manage your team within {% data variables.location.product_location %}. The mapped team will sync its members in the background and periodically at the interval configured when LDAP Sync is enabled. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-ldap-for-enterprise-iam/using-ldap#enabling-ldap-sync)."

You must be a site admin and an organization owner to create a team with LDAP sync enabled.

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% warning %}

**Notes:**
* LDAP Sync only manages the team's member list. You must manage the team's repositories and permissions from within {% data variables.product.prodname_ghe_server %}.
* If an LDAP group mapping to a DN is removed, such as if the LDAP group is deleted, then every member is removed from the synced {% data variables.product.prodname_ghe_server %} team. To fix this, map the team to a new DN, add the team members back, and [manually sync the mapping](/admin/identity-and-access-management/using-ldap-for-enterprise-iam/using-ldap#manually-syncing-ldap-accounts).
* When LDAP Sync is enabled, if a person is removed from a repository, they will lose access but their forks will not be deleted. If the person is added to a team with access to the original organization repository within three months, their access to the forks will be automatically restored on the next sync.

{% endwarning %}

1. Ensure that [LDAP Sync is enabled](/admin/identity-and-access-management/using-ldap-for-enterprise-iam/using-ldap#enabling-ldap-sync).
{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.new_team %}
{% data reusables.organizations.team_name %}
1. Under "LDAP group," search for an LDAP group's DN to map the team to. If you don't know the DN, type the LDAP group's name. {% data variables.product.prodname_ghe_server %} will search for and autocomplete any matches.
{% data reusables.organizations.team_description %}
{% data reusables.organizations.team_visibility %}
{% data reusables.organizations.create-team-choose-parent %}
{% data reusables.organizations.create_team %}

{% endif %}

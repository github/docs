---
title: Adding organization members to a team
intro: 'People with owner or team maintainer permissions can add organization members to teams. People with owner permissions can also {% ifversion fpt or ghec %}invite non-members to join{% else %}add non-members to{% endif %} a team and the organization.'
redirect_from:
  - /articles/adding-organization-members-to-a-team-early-access-program
  - /articles/adding-organization-members-to-a-team
  - /github/setting-up-and-managing-organizations-and-teams/adding-organization-members-to-a-team
  - /enterprise/admin/articles/adding-teams
  - /enterprise/admin/articles/adding-or-inviting-people-to-teams
  - /enterprise/admin/guides/user-management/adding-or-inviting-people-to-teams
  - /enterprise/admin/user-management/adding-people-to-teams
  - /admin/user-management/adding-people-to-teams
  - /admin/user-management/managing-organizations-in-your-enterprise/adding-people-to-teams
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add members to a team
---

{% data reusables.organizations.team-synchronization %}

{% ifversion ghes %}

## Adding organization members to a team

{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_members_tab %}
1. Above the list of team members, click **Add a member**.
{% data reusables.organizations.invite_to_team %}
{% data reusables.organizations.review-team-repository-access %}

{% ifversion fpt or ghec %}{% data reusables.organizations.cancel_org_invite %}{% endif %}

{% ifversion ghes %}

## Mapping teams to LDAP groups (for instances using LDAP Sync for user authentication)

A team that's [synced to an LDAP group](/admin/identity-and-access-management/using-ldap-for-enterprise-iam/using-ldap#enabling-ldap-sync) is indicated with a special LDAP badge. The member list for an LDAP synced team can only be managed from the LDAP group it's mapped to.

To add a new member to a team synced to an LDAP group, add the user as a member of the LDAP group, or contact your LDAP administrator.

{% endif %}

## Further reading

* "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-team-access-to-an-organization-repository)"

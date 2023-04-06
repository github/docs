---
title: Creating a team
intro: You can create independent or nested teams to manage repository permissions and mentions for groups of people.
redirect_from:
  - /articles/creating-a-team-early-access-program
  - /articles/creating-a-team
  - /github/setting-up-and-managing-organizations-and-teams/creating-a-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
---

Only organization owners and maintainers of a parent team can create a new child team under a parent. Owners can also restrict creation permissions for all teams in an organization. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization)."

{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.new_team %}
{% data reusables.organizations.team_name %}
{% data reusables.organizations.team_description %}
{% data reusables.organizations.create-team-choose-parent %}
{% ifversion ghec %}
1. Optionally, if your organization or enterprise account uses team synchronization or your enterprise uses {% data variables.product.prodname_emus %}, connect an identity provider group to your team.
    * If your enterprise uses {% data variables.product.prodname_emus %}, use the "Identity Provider Groups" drop-down menu, and select a single identity provider group to connect to the new team. For more information, "[AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups)."
    * If your organization or enterprise account uses team synchronization, under "Identity Provider Groups", select the **Select Groups** dropdown menu, and click up to five identity provider groups to connect to the new team. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group)."
{% endif %}
{% data reusables.organizations.team_visibility %}
{% data reusables.organizations.create_team %}
1. Optionally, [give the team access to organization repositories](/organizations/managing-user-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository).

## Further reading

- "[AUTOTITLE](/organizations/organizing-members-into-teams/about-teams)"
- "[AUTOTITLE](/organizations/organizing-members-into-teams/changing-team-visibility)"
- "[AUTOTITLE](/organizations/organizing-members-into-teams/moving-a-team-in-your-organizations-hierarchy)"

---
title: Creating a team
intro: You can create independent or nested teams to manage repository permissions and mentions for groups of people.
redirect_from:
  - /articles/creating-a-team-early-access-program/
  - /articles/creating-a-team
  - /github/setting-up-and-managing-organizations-and-teams/creating-a-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Organizations
  - Teams
---

Only organization owners and maintainers of a parent team can create a new child team under a parent. Owners can also restrict creation permissions for all teams in an organization. For more information, see "[Setting team creation permissions in your organization](/articles/setting-team-creation-permissions-in-your-organization)."

{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.new_team %}
{% data reusables.organizations.team_name %}
{% data reusables.organizations.team_description %}
{% data reusables.organizations.create-team-choose-parent %}
{% ifversion fpt %}
1. Optionally, if your organization or enterprise account uses team synchronization or your enterprise uses {% data variables.product.prodname_emus %}, connect an identity provider group to your team.
    * If your enterprise uses {% data variables.product.prodname_emus %}, use the "Identity Provider Groups" drop-down menu, and select a single identity provider group to connect to the new team. For more information, "[Managing team memberships with identity provider groups](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)."
    * If your organization or enterprise account uses team synchronization, use the "Identity Provider Groups" drop-down menu, and select up to five identity provider groups to connect to the new team. For more information, see "[Synchronizing a team with an identity provider group](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group)." ![Drop-down menu to choose identity provider groups](/assets/images/help/teams/choose-an-idp-group.png)
{% endif %}
{% data reusables.organizations.team_visibility %}
{% data reusables.organizations.create_team %}
1. Optionally, [give the team access to organization repositories](/articles/managing-team-access-to-an-organization-repository).

## Дополнительная литература

- "[About teams](/articles/about-teams)"
- "[Changing team visibility](/articles/changing-team-visibility)"
- "[Moving a team in your organization's hierarchy](/articles/moving-a-team-in-your-organization-s-hierarchy)"

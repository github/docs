---
title: Creating teams
intro: 'Use teams to manage permissions, notifications, and code ownership in your organizations.'
versions:
  ghec: '*'
shortTitle: Create teams
type: how_to
permissions: Organization owners can create teams and control whether all organization members can also create teams.
topics:
  - Organizations
  - Enterprise
---

## About teams

You can use teams to manage access for people in an organization. Teams are groups of organization members that reflect your company's structure with cascading access permissions.

Teams can:

* Have admin, read, or write **access** to organization repositories
* Receive **notifications** when the team's name is mentioned or when someone requests a review from the team
* Be designated as **owners** of certain files in a CODEOWNERS file
* Be made **"secret"** to hide membership from other members
* Be synced with an **identity provider** group to manage membership centrally
* Be **children or parents** of other teams, allowing permissions and notifications to be inherited

For more information, see See [AUTOTITLE](/organizations/organizing-members-into-teams/about-teams) and [AUTOTITLE](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization).

## Creating a team

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.new_team %}
{% data reusables.organizations.team_name %}
{% data reusables.organizations.team_description %}
{% data reusables.organizations.create-team-choose-parent %}
{% ifversion ghec %}
1. Optionally, if your organization or enterprise account uses team synchronization or your enterprise uses {% data variables.product.prodname_emus %}, connect an identity provider group to your team.
    * If your enterprise uses {% data variables.product.prodname_emus %}, use the "Identity Provider Groups" drop-down menu, and select a single identity provider group to connect to the new team. For more information, [AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups).
    * If your organization or enterprise account uses team synchronization, under "Identity Provider Groups," select the **Select Groups** dropdown menu, and click up to five identity provider groups to connect to the new team. For more information, see [AUTOTITLE](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group).
{% endif %}
{% data reusables.organizations.team_visibility %}
{% data reusables.organizations.team-notifications %}
{% data reusables.organizations.create_team %}
1. Optionally, give the team access to organization repositories. For more information, see [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-team-access-to-an-organization-repository).

## Next steps

Next, learn about best practices for structuring your organizations and teams. See [AUTOTITLE](/enterprise-onboarding/setting-up-organizations-and-teams/best-practices-for-organizations-in-your-enterprise).

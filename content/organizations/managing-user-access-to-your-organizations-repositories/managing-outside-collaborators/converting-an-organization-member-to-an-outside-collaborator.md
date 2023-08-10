---
title: Converting an organization member to an outside collaborator
intro: 'If a current member of your organization only needs access to certain repositories, such as consultants or temporary employees, you can convert them to an outside collaborator.'
permissions: Organization owners can convert an organization member to an outside collaborator.
redirect_from:
  - /articles/converting-an-organization-member-to-an-outside-collaborator
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-organization-member-to-an-outside-collaborator
  - /organizations/managing-access-to-your-organizations-repositories/converting-an-organization-member-to-an-outside-collaborator
  - /organizations/managing-user-access-to-your-organizations-repositories/converting-an-organization-member-to-an-outside-collaborator
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Convert member to collaborator
---

## About conversion of organization members to outside collaborators

You can convert a member of an organization to an outside collaborator. For more information about outside collaborators, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization)."

{% ifversion fpt or ghec %}If the organization is owned by an enterprise, converting{% elsif ghes or ghae %}Converting{% endif %} an organization member to an outside collaborator may be restricted. For more information, see "[Enforcing repository management policies in your enterprise]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-{% ifversion fpt or ghec %}outside-{% endif %}collaborators-to-repositories){% ifversion ghec or ghes or ghae %}."{% elsif fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% endif %}

{% data reusables.organizations.outside-collaborators-use-seats %} {% data reusables.organizations.outside_collaborator_forks %}

After converting an organization member to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The person will no longer be an explicit member of the organization, and will no longer be able to:

- Create teams
- See all organization members and teams
- @mention any visible team
- Be a team maintainer

For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."

We recommend reviewing the organization member's access to repositories to ensure their access is as you expect. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-an-individuals-access-to-an-organization-repository)."

When you convert an organization member to an outside collaborator, their privileges as organization members are saved for three months so that you can restore their membership privileges if you{% ifversion fpt or ghec %} invite them to rejoin{% else %} add them back to{% endif %} your organization within that time frame. For more information, see "[AUTOTITLE](/organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization)."

## Converting an organization member to an outside collaborator

{% note %}

**Note:** You may not be able to convert an organization member to an outside collaborator, if an organization owner{% ifversion not fpt %} or enterprise owner{% endif %} has restricted your ability to add outside collaborators.

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
1. Select the person or people you'd like to convert to outside collaborators.

   ![Screenshot of the first two users in a list of organization members. To the left of each member, a checkbox is checked and outlined in dark orange.](/assets/images/help/teams/list-of-members-selected-bulk.png)
1. Above the list of members, select the **X members selected...** dropdown menu and click **Convert to outside collaborator**.

   ![Screenshot of the list of organization members. Above the list, a dropdown menu, labeled "2 members selected..." is outlined in dark orange.](/assets/images/help/teams/user-bulk-management-options.png)
1. Read the information about converting members to outside collaborators, then click **Convert to outside collaborator**.

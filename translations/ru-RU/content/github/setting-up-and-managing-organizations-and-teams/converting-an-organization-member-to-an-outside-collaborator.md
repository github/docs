---
title: Converting an organization member to an outside collaborator
intro: 'If a current member of your organization only needs access to certain repositories, such as consultants or temporary employees, you can convert them to an *outside collaborator*.'
redirect_from:
  - /articles/converting-an-organization-member-to-an-outside-collaborator
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---

{% data reusables.organizations.owners-and-admins-can %} convert organization members into outside collaborators.

{% data reusables.organizations.outside-collaborators-use-seats %} {% data reusables.organizations.outside_collaborator_forks %}

After converting an organization member to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The person will no longer be an explicit member of the organization, and will no longer be able to:

- Create teams
- See all organization members and teams
- @mention any visible team
- Be a team maintainer

For more information, see "[Permission levels for an organization](/github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization)."

We recommend reviewing the organization member's access to repositories to ensure their access is as you expect. For more information, see "[Managing an individual's access to an organization repository](/articles/managing-an-individual-s-access-to-an-organization-repository)."

When you convert an organization member to an outside collaborator, their privileges as organization members are saved for three months so that you can restore their membership privileges if you{% if currentVersion == "free-pro-team@latest" %} invite them to rejoin{% else %} add them back to{% endif %} your organization within that time frame. For more information, see "[Reinstating a former member of your organization](/articles/reinstating-a-former-member-of-your-organization)."

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
4. Select the person or people you'd like to convert to outside collaborators. ![List of members with two members selected](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. Above the list of members, use the drop-down menu and click **Convert to outside collaborator**. ![Drop-down menu with option to convert members to outside collaborators](/assets/images/help/teams/user-bulk-management-options.png)
6. Read the information about converting members to outside collaborators, then click **Convert to outside collaborator**. ![Information on outside collaborators permissions and Convert to outside collaborators button](/assets/images/help/teams/confirm-outside-collaborator-bulk.png)

### Дополнительная литература

- "[Adding outside collaborators to repositories in your organization](/articles/adding-outside-collaborators-to-repositories-in-your-organization)"
- "[Removing an outside collaborator from an organization repository](/articles/removing-an-outside-collaborator-from-an-organization-repository)"
- "[Converting an outside collaborator to an organization member](/articles/converting-an-outside-collaborator-to-an-organization-member)"

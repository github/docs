---
title: Converting an Owners team to improved organization permissions
intro: 'If your organization was created after September 2015, your organization has improved organization permissions by default. Organizations created before September 2015 may need to migrate older Owners and Admin teams to the improved permissions model. The "Owner" is now an administrative role given to individual members of your organization. Members of your legacy Owners team are automatically given owner privileges.'
redirect_from:
  - /articles/converting-your-previous-owners-team-to-the-improved-organization-permissions-early-access-program
  - /articles/converting-your-previous-owners-team-to-the-improved-organization-permissions
  - /articles/converting-an-owners-team-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-owners-team-to-improved-organization-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Convert Owners team
---

You have a few options to convert your legacy Owners team:

- Give the team a new name that denotes the members have a special status in the organization.
- Delete the team after ensuring all members have been added to teams that grant necessary access to the organization's repositories.

## Give the Owners team a new name

{% tip %}

   **Note:** Because "admin" is a term for organization members with specific access to certain repositories in the organization, we recommend you avoid that term in any team name you decide on. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)."

{% endtip %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.owners-team %}
{% data reusables.organizations.convert-owners-team-confirm %}
1. In the team name field, choose a new name for the Owners team. For example:
    - If very few members of your organization were members of the Owners team, you might name the team "Core".
    - If all members of your organization were members of the Owners team so that they could [@mention teams](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#mentioning-people-and-teams), you might name the team "Employees".
1. Under the team description, click **Save and continue**.
1. Optionally, make the team public. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/changing-team-visibility)."

## Delete the legacy Owners team

{% warning %}

**Warning:** If there are members of your Owners team who are not members of other teams, deleting the team will remove those members from the organization. Before deleting the team, ensure members are already direct members of the organization, or have collaborator access to necessary repositories.

{% endwarning %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.owners-team %}
{% data reusables.organizations.convert-owners-team-confirm %}
1. At the bottom of the page, review the warning and click **Delete the Owners team**.

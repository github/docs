---
title: Converting an Owners team to improved organization permissions
intro: 'If your organization was created after September 2015, your organization has improved organization permissions by default. Organizations created before September 2015 may need to migrate older Owners and Admin teams to the improved permissions model. The "Owner" is now an administrative role given to individual members of your organization. Members of your legacy Owners team are automatically given owner privileges.'
redirect_from:
  - /articles/converting-your-previous-owners-team-to-the-improved-organization-permissions-early-access-program/
  - /articles/converting-your-previous-owners-team-to-the-improved-organization-permissions/
  - /articles/converting-an-owners-team-to-improved-organization-permissions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - organizations
  - teams
---

You have a few options to convert your legacy Owners team:

- Give the team a new name that denotes the members have a special status in the organization.
- Delete the team after ensuring all members have been added to teams that grant necessary access to the organization's repositories.

### Give the Owners team a new name

{% tip %}

   **Note:** Because "admin" is a term for organization members with specific [access to certain repositories](/articles/repository-permission-levels-for-an-organization) in the organization, we recommend you avoid that term in any team name you decide on.

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.owners-team %}
{% data reusables.organizations.convert-owners-team-confirm %}
5. In the team name field, choose a new name for the Owners team. 예시:
    - If very few members of your organization were members of the Owners team, you might name the team "Core".
    - If all members of your organization were members of the Owners team so that they could [@mention teams](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams), you might name the team "Employees". ![The team name field, with the Owners team renamed to Core](/assets/images/help/teams/owners-team-new-name.png)
6. Under the team description, click **Save and continue**. ![The Save and continue button](/assets/images/help/teams/owners-team-save-and-continue.png)
7. Optionally, [make the team *public*](/articles/changing-team-visibility).

### Delete the legacy Owners team

{% warning %}

**Warning:** If there are members of your Owners team who are not members of other teams, deleting the team will remove those members from the organization. Before deleting the team, ensure members are already direct members of the organization, or have collaborator access to necessary repositories.

{% endwarning %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.owners-team %}
{% data reusables.organizations.convert-owners-team-confirm %}
5. At the bottom of the page, review the warning and click **Delete the Owners team**. ![Link for deleting the Owners team](/assets/images/help/teams/owners-team-delete.png)
